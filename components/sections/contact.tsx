"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/lib/data";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="border-t border-slate-100 dark:border-slate-800/60 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="10 — Contact"
            title="Let's talk"
            description="Open to Data Engineering, Data Science, and ML Engineering roles. The fastest way to reach me is email."
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-accent-sky transition-colors"
              >
                <Mail size={16} /> {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-accent-sky transition-colors"
              >
                <Github size={16} /> github.com/jd878-gif
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-accent-sky transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <p className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <MapPin size={16} /> {profile.location}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-navy/60 px-4 py-3 text-sm text-navy dark:text-white placeholder:text-slate-400 focus:border-primary-500 focus:outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-navy/60 px-4 py-3 text-sm text-navy dark:text-white placeholder:text-slate-400 focus:border-primary-500 focus:outline-none"
                />
              </div>
              <textarea
                required
                rows={5}
                placeholder="What's on your mind?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-navy/60 px-4 py-3 text-sm text-navy dark:text-white placeholder:text-slate-400 focus:border-primary-500 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-600"
              >
                <Send size={14} />
                Send message
              </button>
              <p className="text-xs text-slate-400">
                Opens your email client — no backend, no data stored.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
