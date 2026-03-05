"use client"

import { JsonModeProvider } from "@/components/json-mode-provider"
import { AnimatedGrid } from "@/components/animated-grid"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <JsonModeProvider>
      <AnimatedGrid />
      <div className="relative z-10 min-h-screen bg-transparent">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </div>
    </JsonModeProvider>
  )
}
