"use client"

import useSWR from "swr"
import { ExternalLink, GitFork, Star, Loader2 } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const GITHUB_USERNAME = "khaledhajeid"

const languageColors: Record<string, string> = {
  "C#": "#178600",
  "C++": "#f34b7d",
  C: "#555555",
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
}

export function Projects() {
  const { data, error, isLoading } = useSWR<GitHubRepo[]>(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`,
    fetcher,
    { revalidateOnFocus: false }
  )

  const repos = data
    ?.filter((repo) => !repo.name.includes(`${GITHUB_USERNAME}`))
    ?.sort((a, b) => b.stargazers_count - a.stargazers_count)
    ?.slice(0, 6)

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-12">
            <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
              Projects
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Recent Work
            </h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              Live from GitHub -&gt; my most recent repositories and
              contributions.
            </p>
          </div>
        </ScrollReveal>

        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {error && (
          <div className="rounded-lg border border-border bg-card px-6 py-12 text-center">
            <p className="text-muted-foreground">
              Unable to load projects. Please try again later.
            </p>
          </div>
        )}

        {repos && repos.length > 0 && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, idx) => (
              <ScrollReveal key={repo.id} delay={idx * 80}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-[0_0_25px_rgba(0,123,255,0.1)] hover:scale-[1.02]"
                >
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="font-mono text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                      {repo.name}
                    </h3>
                    <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {repo.description || "No description provided."}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span
                          className="inline-block h-3 w-3 rounded-full"
                          style={{
                            backgroundColor:
                              languageColors[repo.language] || "#6b7280",
                          }}
                        />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {repo.forks_count}
                      </span>
                    )}
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        )}

        {repos && repos.length === 0 && (
          <div className="rounded-lg border border-border bg-card px-6 py-12 text-center">
            <p className="text-muted-foreground">
              No public repositories found.
            </p>
          </div>
        )}

        <ScrollReveal delay={400}>
          <div className="mt-8 text-center">
            <a
              href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
            >
              View all repositories
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
