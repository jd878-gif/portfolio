import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="border-t border-slate-100 dark:border-slate-800/60 py-28 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="06 — Certifications" title="Credentials" />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <Reveal key={cert.name} delay={idx * 0.05}>
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy/60 p-6">
                <BadgeCheck size={20} className="flex-shrink-0 text-primary-500 dark:text-accent-sky mt-0.5" />
                <div>
                  <h3 className="font-display text-base font-medium text-navy dark:text-white">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{cert.issuer}</p>
                  <p className="font-mono text-xs text-slate-400 mt-1">{cert.period}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
