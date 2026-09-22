"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/lib/data";

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  // GSAP + ScrollTrigger: the one place this site uses GSAP rather than
  // Framer Motion — a scroll-scrubbed timeline line felt like the right job
  // for ScrollTrigger specifically (progress tied to scroll position),
  // rather than reaching for it everywhere out of obligation.
  useEffect(() => {
    if (!trackRef.current || !fillRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const tween = gsap.fromTo(
      fillRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top 75%",
          end: "bottom 75%",
          scrub: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      id="experience"
      className="border-t border-slate-100 dark:border-slate-800/60 py-28 bg-slate-50/50 dark:bg-slate-900/20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="04 — Experience" title="Where I've put this to work" />
        </Reveal>

        <div ref={trackRef} className="relative mt-14">
          <div className="absolute left-0 top-0 h-full w-px bg-slate-200 dark:bg-slate-800" />
          <div
            ref={fillRef}
            style={{ transformOrigin: "top" }}
            className="absolute left-0 top-0 h-full w-px scale-y-0 bg-gradient-to-b from-primary-500 via-accent-sky to-accent-teal"
          />

          {experience.map((exp, idx) => (
            <Reveal key={exp.org} delay={idx * 0.06}>
              <div className="relative grid gap-2 pb-12 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-primary-500 ring-4 ring-primary-50 dark:ring-navy" />
                <p className="font-mono text-xs text-slate-400">{exp.period}</p>
                <h3 className="font-display text-lg font-medium text-navy dark:text-white">
                  {exp.role} · {exp.org}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{exp.location}</p>
                <ul className="mt-3 space-y-2">
                  {exp.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent-sky"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
