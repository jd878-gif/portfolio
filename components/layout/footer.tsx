import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 dark:border-slate-800/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.</p>
        <p className="font-mono">Designed, built & maintained solo.</p>
      </div>
    </footer>
  );
}
