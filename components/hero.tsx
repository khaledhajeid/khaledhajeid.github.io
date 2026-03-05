"use client"

import { Github, Linkedin, ArrowDown } from "lucide-react"
import { MiniTerminal } from "./mini-terminal"
import { TypingEffect } from "./typing-effect"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-4 font-mono text-sm tracking-widest text-primary uppercase">
            Hello, my name is
          </p>
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            Khaled
          </h1>
          <h2 className="mb-6 text-xl font-medium text-muted-foreground md:text-2xl">
            <TypingEffect
              text="Backend Developer & Cybersecurity Student"
              speed={45}
            />
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-muted-foreground lg:mx-0">
            Specializing in ASP.NET Core, C#, and building robust, scalable
            backend systems. Passionate about systems programming and security.
          </p>

          <div className="flex items-center justify-center gap-4 lg:justify-start">
            <a
              href="https://github.com/khaledhajeid"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,123,255,0.15)]"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/khaledalhajeid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,123,255,0.3)]"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Terminal */}
        <div className="w-full max-w-2xl flex-1 lg:max-w-xl">
          <MiniTerminal />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to about"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
