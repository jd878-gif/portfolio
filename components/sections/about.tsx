import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { education, profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-t border-slate-100 dark:border-slate-800/60 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="01 — About"
            title="From CSE fundamentals to production data systems"
            description={profile.summary}
          />
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          <Reveal delay={0.05} className="lg:col-span-2">
            <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I started with a Computer Science &amp; Engineering foundation in Ahmedabad, India,
                then moved into an MS in Data Science at NJIT to go deeper on the statistical and
                ML side. The thread connecting both: I don&apos;t just want to fit a model — I want to
                understand whether the result is actually causal, and whether the pipeline
                feeding it will still work at 2am when nobody&apos;s watching.
              </p>
              <p>
                That&apos;s why most of my projects aren&apos;t single notebooks. FraudSentinel is built the
                way a real fraud team would build it — event-driven, serverless, observable. The
                causal inference repo exists because I wanted to go beyond a standard A/B test and
                actually defend a causal claim. I&apos;d rather under-claim what I know than pad a
                skills list — every tool on this page is one I&apos;ve used in a real pipeline, not one
                I&apos;ve read the docs for.
              </p>
              <p>
                Outside of coursework, I work part-time in event coordination and communications
                for NJIT Campus Wellness Services, where I design campaign materials and recently
                built a wellness chatbot prototype — a reminder that good systems thinking applies
                even outside a data pipeline.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-navy dark:text-white">
                <MapPin size={15} className="text-primary-500 dark:text-accent-sky" />
                {profile.location}
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-navy dark:text-white mb-3">
                  <GraduationCap size={15} className="text-primary-500 dark:text-accent-sky" />
                  Education
                </div>
                <ul className="space-y-3 pl-1">
                  {education.map((ed) => (
                    <li key={ed.school} className="text-sm">
                      <p className="text-navy dark:text-white font-medium">{ed.degree}</p>
                      <p className="text-slate-500 dark:text-slate-400">
                        {ed.school} · {ed.detail}
                      </p>
                      <p className="font-mono text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                        {ed.period}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-navy dark:text-white mb-2">
                  <Sparkles size={15} className="text-primary-500 dark:text-accent-sky" />
                  What I bring
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  A rare combination: production AWS/Spark engineering instincts and a causal,
                  statistically rigorous approach to data science — built, not just studied.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
