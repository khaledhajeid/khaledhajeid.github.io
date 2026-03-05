"use client"

import { User } from "lucide-react"
import { useJsonMode } from "./json-mode-provider"
import { JsonAbout } from "./json-view"
import { ScrollReveal } from "./scroll-reveal"

export function About() {
  const { jsonMode } = useJsonMode()

  if (jsonMode) return <JsonAbout />

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="mb-8">
            <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
              About
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Who I Am
            </h2>
          </div>

          <div className="group relative rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,123,255,0.08)] md:p-10">
            {/* Decorative accent */}
            <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-primary" />

            <div className="flex items-start gap-5">
              <div className="hidden shrink-0 items-center justify-center rounded-lg border border-border bg-secondary p-3 transition-all group-hover:border-primary/40 group-hover:shadow-[0_0_12px_rgba(0,123,255,0.1)] md:flex">
                <User className="h-5 w-5 text-primary" />
              </div>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg md:leading-8">
                I am a high-achieving Cybersecurity student (GPA: 3.95) at
                Middle East University and a Core Student at the rigorous 42
                Amman program. I specialize in low-level programming (C/C++) and
                modern backend development using C# and .NET. My training has
                built a strong foundation in algorithmic thinking,
                object-oriented programming, and relational database design. I am
                actively seeking an internship in Backend
                Development specifically working with ASP.NET
                Core to leverage my technical expertise in building robust,
                scalable, and data-driven APIs.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
