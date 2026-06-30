"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { skills } from "@/lib/data";

const levelWidth: Record<string, string> = {
  Advanced: "92%",
  Proficient: "72%",
  Familiar: "48%",
};

const levelColor: Record<string, string> = {
  Advanced: "bg-primary-500",
  Proficient: "bg-accent-sky",
  Familiar: "bg-accent-teal",
};

export function Skills() {
  return (
    <section id="skills" className="border-t border-slate-100 dark:border-slate-800/60 py-28 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="02 — Skills"
            title="Tools I've actually shipped with"
            description="Every category below maps to a real project further down this page. Depth shown reflects how I've used each tool, not a self-rating."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, idx) => (
            <Reveal key={`${group.category}-${group.level}`} delay={idx * 0.04}>
              <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy/60 p-6 transition-colors hover:border-primary-300 dark:hover:border-accent-sky/40">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-base font-medium text-navy dark:text-white">
                    {group.category}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-wide text-slate-400">
                    {group.level}
                  </span>
                </div>

                <div className="mb-4 h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: levelWidth[group.level] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`h-full rounded-full ${levelColor[group.level]}`}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-slate-100 dark:bg-slate-800 px-2.5 py-1 font-mono text-xs text-slate-600 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
