"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Layers,
  FolderGit2,
  Briefcase,
  Award,
  FileText,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { profile } from "@/lib/data";

const navItems = [
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Layers },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Certifications", href: "#certifications", icon: Award },
  { label: "Resume", href: "#resume", icon: FileText },
  { label: "Contact", href: "#contact", icon: Mail },
];

const linkItems = [
  { label: "Open GitHub", href: profile.github, icon: Github },
  { label: "Open LinkedIn", href: profile.linkedin, icon: Linkedin },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  function go(href: string) {
    setOpen(false);
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      router.push(href);
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-navy/60 backdrop-blur-sm pt-[15vh]"
      onClick={() => setOpen(false)}
    >
      <Command
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-navy shadow-2xl"
      >
        <Command.Input
          placeholder="Jump to a section, or open a link..."
          className="w-full border-b border-slate-200 dark:border-slate-800 bg-transparent px-4 py-3.5 text-sm text-navy dark:text-white placeholder:text-slate-400 focus:outline-none"
        />
        <Command.List className="max-h-80 overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-slate-500">
            No results found.
          </Command.Empty>
          <Command.Group heading="Navigate" className="px-2 py-1 text-xs font-mono uppercase text-slate-400">
            {navItems.map((item) => (
              <Command.Item
                key={item.href}
                onSelect={() => go(item.href)}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 cursor-pointer aria-selected:bg-primary-50 dark:aria-selected:bg-slate-800 aria-selected:text-primary-600 dark:aria-selected:text-accent-sky"
              >
                <item.icon size={15} />
                {item.label}
              </Command.Item>
            ))}
          </Command.Group>
          <Command.Group heading="Links" className="px-2 py-1 text-xs font-mono uppercase text-slate-400 mt-2">
            {linkItems.map((item) => (
              <Command.Item
                key={item.href}
                onSelect={() => go(item.href)}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 cursor-pointer aria-selected:bg-primary-50 dark:aria-selected:bg-slate-800 aria-selected:text-primary-600 dark:aria-selected:text-accent-sky"
              >
                <item.icon size={15} />
                {item.label}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
