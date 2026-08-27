"use client";

import { useEffect, useRef, useState } from "react";
import { FLOWS, FlowDiagram } from "./flows";

// Le showcase de la page d'accueil ne montre que les 3 premières
const SHOWCASE = FLOWS.slice(0, 3);
const VH_PER = 48; // hauteur de scroll (en vh) par exemple : plus petit = change plus vite

export default function Showcase({
  eyebrow = "Exemples concrets",
  title = "Voici ce qu'on fait tourner pour toi, à partir d'un seul chat.",
}: {
  eyebrow?: string;
  title?: string;
} = {}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), Math.max(total, 1));
      const p = total > 0 ? scrolled / total : 0;
      const i = Math.min(SHOWCASE.length - 1, Math.floor(p * SHOWCASE.length));
      setActive((prev) => (prev === i ? prev : i));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = (i: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const target = el.offsetTop + ((i + 0.5) / SHOWCASE.length) * total;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <section
      id="exemples"
      ref={sectionRef}
      className="relative"
      style={{ height: `${SHOWCASE.length * VH_PER}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center px-5">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-md border border-fluo-400/25 bg-fluo-500/[0.07] px-4 py-1.5 text-xs font-600 uppercase tracking-widest text-fluo-300">
            {eyebrow}
          </span>
          <h2 className="mt-6 font-display text-3xl font-800 text-white sm:text-4xl">{title}</h2>
        </div>

        <div className="relative mt-12 h-[20rem] w-full max-w-2xl">
          {SHOWCASE.map((f, i) => (
            <div
              key={f.title}
              className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ease-out ${
                i === active
                  ? "opacity-100 translate-y-0"
                  : "pointer-events-none translate-y-5 opacity-0"
              }`}
            >
              <FlowDiagram steps={f.steps} />
              <h3 className="mt-8 font-display text-2xl font-800 text-white sm:text-3xl">
                {f.title}
              </h3>
              <p className="mx-auto mt-3 max-w-lg leading-relaxed text-mist-soft">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {SHOWCASE.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Exemple ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-7 bg-fluo-400" : "w-2 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <a
          href="/automatisations"
          className="mt-8 inline-flex items-center gap-2 font-600 text-fluo-300 underline decoration-fluo-400/40 underline-offset-4 transition-colors hover:decoration-fluo-400"
        >
          Voir toutes les automatisations possibles
        </a>
      </div>
    </section>
  );
}
