"use client"

import { Mail, Download, Github, Linkedin } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
              Contact
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              {"Let's Connect"}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Interested in collaborating or have a question? Feel free to reach
              out.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:khaled1.hajeid@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,123,255,0.15)]"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,123,255,0.3)]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </ScrollReveal>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-border pt-8">
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/khaledhajeid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/khaledalhajeid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:khaled1.hajeid@gmail.com"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-center text-xs text-muted-foreground">
            Designed & Built by Khaled &mdash; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
