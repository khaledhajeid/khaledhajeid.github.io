"use client"

import { GraduationCap, Code2, Briefcase } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const timeline = [
  {
    icon: Code2,
    title: "42 Amman - Core Program",
    subtitle: "Peer-to-Peer Software Engineering",
    period: "Aug 2025 - Present",
    type: "education" as const,
    description:
      "Intensive, project-based curriculum focused on C, C++, algorithms, and systems programming. A hands-on approach to building strong engineering foundations through collaboration and self-directed learning.",
  },
  {
    icon: GraduationCap,
    title: "B.Sc. Information Technology & Cybersecurity",
    subtitle: "Middle East University",
    period: "2023 - 2027 (Expected)",
    type: "education" as const,
    description:
      "Studying core IT fundamentals, cybersecurity principles, network security, and ethical hacking alongside backend software development. Current GPA: 3.95.",
  },
  {
    icon: Briefcase,
    title: "Facilitator (Corporate Training)",
    subtitle: "Agonist Consult",
    period: "Nov 2022 - Jan 2024",
    type: "experience" as const,
    description:
      "Organized and led team-building programs, enhancing leadership and communication skills.",
  },
  {
    icon: Briefcase,
    title: "Web Development Intern",
    subtitle: "Rumman Tech",
    period: "Feb 2022",
    type: "experience" as const,
    description:
      "Completed an internship in HTML/CSS-based web development, creating responsive, user-focused designs.",
  },
]

export function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-12">
            <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
              Background
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Experience & Education
            </h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              Combining formal education with intensive peer-to-peer software
              engineering training and professional experience.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative ml-4 border-l-2 border-border pl-8 md:ml-0">
          {timeline.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 120}>
              <div
                className={`relative ${index < timeline.length - 1 ? "pb-12" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[calc(2rem+1.25rem+1px)] flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background shadow-[0_0_12px_rgba(0,123,255,0.15)]">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>

                <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,123,255,0.08)]">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs tracking-wider text-primary">
                      {item.period}
                    </span>
                    <span
                      className={`inline-flex rounded-md px-2 py-0.5 text-xs font-medium ${
                        item.type === "experience"
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {item.type === "experience" ? "Experience" : "Education"}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-muted-foreground">
                    {item.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
