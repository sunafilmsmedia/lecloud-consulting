"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#methode", label: "Notre méthode" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/10" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-fluo-500/15 ring-1 ring-fluo-400/40">
            <span className="h-2.5 w-2.5 rounded-full bg-fluo-400 shadow-[0_0_14px_3px_rgba(34,204,255,0.8)]" />
          </span>
          <span className="font-display text-lg font-700 tracking-tight text-white">
            LE&nbsp;CLOUD
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-mist-soft transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://claude.ai/download"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-fluo-400/40 px-5 py-2.5 text-sm font-600 text-white transition-colors hover:bg-fluo-500/10"
          >
            Installer Claude
          </a>
          <a
            href="#candidature"
            className="rounded-full bg-fluo-500 px-5 py-2.5 text-sm font-600 text-ink-950 transition-all hover:bg-fluo-400 glow-fluo"
          >
            Bâtir mon employé IA
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg glass md:hidden"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-white/10 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-mist-soft transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://claude.ai/download"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-fluo-400/40 px-5 py-3 text-center font-600 text-white"
            >
              Installer Claude
            </a>
            <a
              href="#candidature"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-fluo-500 px-5 py-3 text-center font-600 text-ink-950"
            >
              Bâtir mon employé IA
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
