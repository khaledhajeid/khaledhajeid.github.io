"use client"

import { useJsonMode } from "./json-mode-provider"
import { JsonSkills } from "./json-view"
import { ScrollReveal } from "./scroll-reveal"

const skillCategories = [
  {
    title: "Languages",
    skills: ["C#", "C++", "C", "Python", "Bash", "Java Script"],
  },
  {
    title: "Backend Frameworks",
    skills: ["ASP.NET Core MVC", "RESTful APIs", ".NET Ecosystem"],
  },
  {
    title: "Databases",
    skills: [
      "SQL Server",
      "T-SQL",
      "Entity Framework (ORM)",
      "Database Architecture",
    ],
  },
  {
    title: "Tools & Core Concepts",
    skills: [
      "Linux/Unix",
      "Git/GitHub",
      "Object-Oriented Programming (OOP)",
      "Data Structures",
    ],
  },
]

export function Skills() {
  const { jsonMode } = useJsonMode()

  if (jsonMode) return <JsonSkills />

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-12">
            <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
              Skills
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Technical Proficiency
            </h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              A focused skill set centered around .NET backend development,
              databases, systems programming, and core computer science
              principles.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, catIdx) => (
            <ScrollReveal key={category.title} delay={catIdx * 100}>
              <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,123,255,0.08)]">
                <h3 className="mb-5 font-mono text-sm font-semibold tracking-wider text-primary uppercase">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-lg border border-border bg-secondary px-3.5 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_10px_rgba(0,123,255,0.12)] hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
