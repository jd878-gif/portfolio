"use client";

import { useEffect, useState } from "react";
import { Github, Star, GitFork } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/lib/data";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

const GITHUB_USERNAME = "jd878-gif";

export function GithubActivity() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
    )
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API request failed");
        return res.json();
      })
      .then((data) => setRepos(Array.isArray(data) ? data : []))
      .catch(() => setError(true));
  }, []);

  return (
    <section className="border-t border-slate-100 dark:border-slate-800/60 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="05 — Open Source"
            title="Public repos, pulled live from GitHub"
            description="No vanity stats — this is fetched directly from the GitHub API at page load."
          />
        </Reveal>

        <Reveal delay={0.05} className="mt-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/2563EB/${GITHUB_USERNAME}`}
            alt={`${profile.name} GitHub contribution graph`}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white"
            loading="lazy"
          />
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {error && (
            <p className="text-sm text-slate-500 dark:text-slate-400 col-span-full">
              GitHub data is temporarily unavailable —{" "}
              <a href={profile.github} className="underline" target="_blank" rel="noopener noreferrer">
                view repos directly
              </a>
              .
            </p>
          )}

          {!error && !repos &&
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-36 animate-pulse rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/40"
              />
            ))}

          {repos?.map((repo, idx) => (
            <Reveal key={repo.id} delay={idx * 0.05}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy/60 p-5 transition-colors hover:border-primary-300 dark:hover:border-accent-sky/40"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-medium text-navy dark:text-white text-sm">
                    <Github size={15} />
                    {repo.name}
                  </span>
                </div>
                <p className="mt-2 flex-1 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {repo.description || "No description provided."}
                </p>
                <div className="mt-4 flex items-center gap-4 font-mono text-xs text-slate-400">
                  {repo.language && <span>{repo.language}</span>}
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} /> {repo.forks_count}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
