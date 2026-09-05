"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "/#exemples", label: "Exemples" },
  { href: "/services", label: "Services" },
  { href: "/#methode", label: "Méthode" },
  { href: "/#tarifs", label: "Tarifs" },
  { href: "/#faq", label: "FAQ" },
];

function ThemeIcon({ theme }: { theme: "nuit" | "jour" }) {
  return theme === "jour" ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"nuit" | "jour">("nuit");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = (document.documentElement.dataset.theme as "nuit" | "jour") || "nuit";
    setTheme(t);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "jour" ? "nuit" : "jour";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {}
      return next;
    });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/10" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Le Cloud" className="h-8 w-auto" />
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
          <button
            onClick={toggleTheme}
            aria-label={theme === "jour" ? "Passer en mode nuit" : "Passer en mode jour"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
          >
            <ThemeIcon theme={theme} />
          </button>
          <a
            href="/audit"
            className="rounded-full border border-fluo-400/40 px-5 py-2.5 text-sm font-600 text-white transition-colors hover:bg-fluo-500/10"
          >
            Faire un audit
          </a>
          <a
            href="/#candidature"
            className="rounded-full bg-fluo-500 px-5 py-2.5 text-sm font-600 text-ink-950 transition-all hover:bg-fluo-400 glow-fluo"
          >
            Travailler avec nous
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
            <button
              onClick={toggleTheme}
              className="mt-2 flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 font-600 text-white"
            >
              <ThemeIcon theme={theme} />
              {theme === "jour" ? "Mode nuit" : "Mode jour"}
            </button>
            <a
              href="/audit"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-fluo-400/40 px-5 py-3 text-center font-600 text-white"
            >
              Faire un audit
            </a>
            <a
              href="/#candidature"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-fluo-500 px-5 py-3 text-center font-600 text-ink-950"
            >
              Travailler avec nous
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
