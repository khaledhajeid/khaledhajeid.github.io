"use client"

import { useState, useRef, useEffect, useCallback } from "react"

const PROJECTS = [
  "push_swap",
  "ft_printf",
  "get_next_line",
  "libft",
  "minishell",
  "Born2beRoot",
]

const COMMANDS: Record<string, string[]> = {
  whoami: [
    "Khaled Hajeid",
    "Cybersecurity Student | Backend Developer (.NET)",
    "GPA: 3.95 | 42 Amman Core Student",
    "Specializing in ASP.NET Core, C#, C/C++, SQL Server",
  ],
  "ls projects": PROJECTS.map((p) => `  ${p}/`),
  help: [
    "Available commands:",
    "  whoami          - About me",
    "  ls projects     - List my projects",
    "  skills          - Show technical skills",
    "  contact         - Contact information",
    "  clear           - Clear terminal",
    "  help            - Show this message",
  ],
  skills: [
    "Languages:   C# | C++ | C | Python | Bash",
    "Backend:     ASP.NET Core MVC | RESTful APIs | .NET",
    "Databases:   SQL Server | T-SQL | Entity Framework",
    "Tools:       Linux/Unix | Git | OOP | Data Structures",
  ],
  contact: [
    "GitHub:   github.com/khaledhajeid",
    "LinkedIn: linkedin.com/in/khaledalhajeid",
    "Email:    khaled1.hajeid@gmail.com",
  ],
}

interface TerminalLine {
  type: "input" | "output"
  content: string
}

export function MiniTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: 'Welcome to khaled.sh v1.0.0 -- Type "help" for commands.' },
  ])
  const [input, setInput] = useState("")
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const terminalBodyRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [lines, scrollToBottom])

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    const newLines: TerminalLine[] = [
      ...lines,
      { type: "input", content: cmd.trim() },
    ]

    if (trimmed === "clear") {
      setLines([])
      setInput("")
      return
    }

    const response = COMMANDS[trimmed]
    if (response) {
      response.forEach((line) => {
        newLines.push({ type: "output", content: line })
      })
    } else if (trimmed === "") {
      // empty command, just add the prompt line
    } else {
      newLines.push({
        type: "output",
        content: `command not found: ${trimmed}. Type "help" for available commands.`,
      })
    }

    setLines(newLines)
    setInput("")
    setCommandHistory((prev) => [cmd.trim(), ...prev])
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      } else {
        setHistoryIndex(-1)
        setInput("")
      }
    }
  }

  return (
    <div
      className="w-full max-w-2xl overflow-hidden rounded-xl border border-border shadow-[0_0_30px_rgba(0,123,255,0.08)]"
      onClick={() => inputRef.current?.focus()}
      role="application"
      aria-label="Interactive terminal"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-[#0d0d1a] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">
          khaled@portfolio:~
        </span>
      </div>

      {/* Terminal body */}
      <div ref={terminalBodyRef} className="h-64 overflow-y-auto bg-[#0a0a14] p-4 font-mono text-sm leading-relaxed">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {line.type === "input" ? (
              <span>
                <span className="text-[#28c840]">{"khaled"}</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-primary">{"~"}</span>
                <span className="text-muted-foreground">{"$ "}</span>
                <span className="text-foreground">{line.content}</span>
              </span>
            ) : (
              <span className="text-muted-foreground">{line.content}</span>
            )}
          </div>
        ))}

        {/* Active prompt */}
        <div className="flex items-center">
          <span className="text-[#28c840]">{"khaled"}</span>
          <span className="text-muted-foreground">:</span>
          <span className="text-primary">{"~"}</span>
          <span className="text-muted-foreground">{"$ "}</span>
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent text-foreground caret-primary outline-none"
              spellCheck={false}
              autoComplete="off"
              aria-label="Terminal input"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
