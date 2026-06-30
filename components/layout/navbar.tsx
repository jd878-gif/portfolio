"use client";

import { useState, useEffect } from "react";
import { Command, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-navy/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-display text-lg font-semibold text-navy dark:text-white"
        >
          JD<span className="text-primary-500 dark:text-accent-sky">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-accent-sky transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true })
              )
            }
            className="hidden items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 hover:border-primary-500 hover:text-primary-500 dark:hover:border-accent-sky dark:hover:text-accent-sky transition-colors sm:flex"
          >
            <Command size={13} />
            <span className="font-mono">K</span>
          </button>
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 md:hidden"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="flex flex-col border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-navy px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-accent-sky transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
