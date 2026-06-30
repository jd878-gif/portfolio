"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { PipelineCanvas } from "@/components/ui/pipeline-canvas";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-grid">
      <PipelineCanvas />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-transparent via-white/40 to-white dark:via-navy/40 dark:to-navy" />

      <div className="mx-auto w-full max-w-6xl px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            {profile.status}
          </p>

          <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-navy dark:text-white sm:text-6xl lg:text-7xl text-balance">
            {profile.name}
          </h1>

          <p className="mt-4 font-mono text-base text-primary-600 dark:text-accent-sky sm:text-lg">
            {profile.headline}
          </p>

          <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary-500/25 transition-transform hover:scale-[1.03] hover:bg-primary-600"
            >
              <Download size={15} />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-600 px-6 py-3 text-sm font-medium text-navy dark:text-white transition-colors hover:border-primary-500 hover:text-primary-500 dark:hover:border-accent-sky dark:hover:text-accent-sky"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-navy dark:hover:text-white transition-colors"
            >
              <Mail size={15} />
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
