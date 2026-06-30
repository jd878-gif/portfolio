import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { deepDives, milestones } from "@/lib/data";

export function DeepDivesAndMilestones() {
  return (
    <section className="border-t border-slate-100 dark:border-slate-800/60 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="07 — Deep Dives"
                title="Technical write-ups"
                description="Real documentation from real repos — not invented blog posts."
              />
            </Reveal>
            <div className="mt-8 space-y-4">
              {deepDives.map((post, idx) => (
                <Reveal key={post.title} delay={idx * 0.06}>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy/60 p-5 transition-colors hover:border-primary-300 dark:hover:border-accent-sky/40"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-wide text-primary-500 dark:text-accent-sky">
                      {post.tag}
                    </span>
                    <h3 className="mt-1.5 flex items-center gap-1.5 font-display text-base font-medium text-navy dark:text-white">
                      {post.title}
                      <ArrowUpRight
                        size={14}
                        className="text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {post.description}
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="08 — Milestones"
                title="Prep, not trophies"
                description="No competitions or publications yet — here's the real depth behind the skills above."
              />
            </Reveal>
            <div className="mt-8 space-y-4">
              {milestones.map((m, idx) => (
                <Reveal key={m.label} delay={idx * 0.06}>
                  <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy/60 p-5">
                    <h3 className="font-mono text-sm text-accent-teal mb-1.5">{m.label}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {m.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
