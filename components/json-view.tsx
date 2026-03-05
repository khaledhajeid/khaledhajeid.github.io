"use client"

import { useJsonMode } from "./json-mode-provider"
import { ScrollReveal } from "./scroll-reveal"

const aboutJson = {
  status: 200,
  endpoint: "/api/v1/about",
  data: {
    name: "Khaled Hajeid",
    role: "Backend Developer & Cybersecurity Student",
    gpa: 3.95,
    university: "Middle East University",
    program: "42 Amman Core Student",
    specialization: [
      "ASP.NET Core",
      "C#",
      "C/C++",
      "SQL Server",
      "RESTful APIs",
    ],
    seeking: "Backend Development Internship (.NET)",
    bio: "High-achieving Cybersecurity student specializing in low-level programming and modern backend development using C# and .NET.",
  },
}

const skillsJson = {
  status: 200,
  endpoint: "/api/v1/skills",
  data: {
    languages: ["C#", "C++", "C", "Python", "Bash"],
    backend_frameworks: ["ASP.NET Core MVC", "RESTful APIs", ".NET Ecosystem"],
    databases: [
      "SQL Server",
      "T-SQL",
      "Entity Framework (ORM)",
      "Database Architecture",
    ],
    tools_and_concepts: [
      "Linux/Unix",
      "Git/GitHub",
      "Object-Oriented Programming",
      "Data Structures",
    ],
  },
}

function SyntaxHighlight({ obj, indent = 0 }: { obj: unknown; indent?: number }) {
  const pad = "  ".repeat(indent)
  const padInner = "  ".repeat(indent + 1)

  if (obj === null) {
    return <span className="text-[#f97316]">null</span>
  }
  if (typeof obj === "number") {
    return <span className="text-[#22d3ee]">{obj}</span>
  }
  if (typeof obj === "boolean") {
    return <span className="text-[#f97316]">{String(obj)}</span>
  }
  if (typeof obj === "string") {
    return <span className="text-[#4ade80]">{`"${obj}"`}</span>
  }
  if (Array.isArray(obj)) {
    if (obj.length === 0) return <span>{"[]"}</span>
    return (
      <span>
        {"[\n"}
        {obj.map((item, i) => (
          <span key={i}>
            {padInner}
            <SyntaxHighlight obj={item} indent={indent + 1} />
            {i < obj.length - 1 ? "," : ""}
            {"\n"}
          </span>
        ))}
        {pad}
        {"]"}
      </span>
    )
  }
  if (typeof obj === "object") {
    const entries = Object.entries(obj as Record<string, unknown>)
    return (
      <span>
        {"{\n"}
        {entries.map(([key, val], i) => (
          <span key={key}>
            {padInner}
            <span className="text-primary">{`"${key}"`}</span>
            {": "}
            <SyntaxHighlight obj={val} indent={indent + 1} />
            {i < entries.length - 1 ? "," : ""}
            {"\n"}
          </span>
        ))}
        {pad}
        {"}"}
      </span>
    )
  }
  return <span>{String(obj)}</span>
}

function JsonBlock({
  title,
  data,
}: {
  title: string
  data: typeof aboutJson | typeof skillsJson
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border shadow-[0_0_30px_rgba(0,123,255,0.06)]">
      <div className="flex items-center gap-2 border-b border-border bg-[#0d0d1a] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">
          GET {data.endpoint}
        </span>
        <span className="ml-auto rounded-md bg-[#28c840]/10 px-2 py-0.5 font-mono text-xs text-[#28c840]">
          {data.status} OK
        </span>
      </div>
      <div className="overflow-x-auto bg-[#0a0a14] p-5">
        <pre className="font-mono text-sm leading-relaxed">
          <SyntaxHighlight obj={data} />
        </pre>
      </div>
    </div>
  )
}

export function JsonAbout() {
  const { jsonMode } = useJsonMode()
  if (!jsonMode) return null

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="mb-8">
            <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
              {"// API Response"}
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              About
            </h2>
          </div>
          <JsonBlock title="About" data={aboutJson} />
        </ScrollReveal>
      </div>
    </section>
  )
}

export function JsonSkills() {
  const { jsonMode } = useJsonMode()
  if (!jsonMode) return null

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="mb-8">
            <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
              {"// API Response"}
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Skills
            </h2>
          </div>
          <JsonBlock title="Skills" data={skillsJson} />
        </ScrollReveal>
      </div>
    </section>
  )
}
