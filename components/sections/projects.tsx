"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", "Data Engineering", "Cloud", "Machine Learning", "Analytics"] as const;

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy/60 p-6 transition-colors hover:border-primary-300 dark:hover:border-accent-sky/40">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-wide text-primary-500 dark:text-accent-sky">
            {project.category}
          </span>
          <h3 className="font-display text-xl font-medium text-navy dark:text-white mt-1">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-slate-400 mt-0.5">{project.period}</p>
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} on GitHub`}
            className="flex-shrink-0 rounded-full border border-slate-200 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400 transition-colors hover:border-primary-500 hover:text-primary-500 dark:hover:border-accent-sky dark:hover:text-accent-sky"
          >
            <Github size={16} />
          </a>
        )}
      </div>

      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {project.oneLiner}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 6).map((s) => (
          <span
            key={s}
            className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 font-mono text-[11px] text-slate-600 dark:text-slate-300"
          >
            {s}
          </span>
        ))}
        {project.stack.length > 6 && (
          <span className="rounded-md px-2 py-1 font-mono text-[11px] text-slate-400">
            +{project.stack.length - 6} more
          </span>
        )}
      </div>

      <button
        onClick={() => setOpen((o) => !o)}
        className="mt-5 flex items-center gap-1.5 text-sm font-medium text-navy dark:text-white"
      >
        {open ? "Hide details" : "Problem, architecture & results"}
        <ChevronDown
          size={15}
          className={cn("transition-transform", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-5 border-t border-slate-100 dark:border-slate-800 pt-5">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-slate-400 mb-1.5">
                  Problem
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-slate-400 mb-2">
                  Architecture
                </p>
                <ol className="space-y-2">
                  {project.architecture.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <span className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary-50 dark:bg-slate-800 font-mono text-[10px] text-primary-600 dark:text-accent-sky mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-slate-400 mb-2">
                  Results
                </p>
                <ul className="space-y-1.5">
                  {project.results.map((r, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      <ArrowUpRight size={14} className="flex-shrink-0 mt-0.5 text-accent-teal" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="border-t border-slate-100 dark:border-slate-800/60 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="03 — Projects"
              title="Systems I've built end-to-end"
              description="Each one was designed to mirror how the role actually works in production — not a single Jupyter notebook."
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
                    filter === cat
                      ? "bg-primary-500 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {filtered.map((project, idx) => (
            <Reveal key={project.slug} delay={idx * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
