"use client";

import { useRef, useState } from "react";

// Vrais logos (SVG couleur) des outils qu'on connecte
const BRAND_LOGOS: Record<string, React.ReactNode> = {
  gmail: (
    <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden>
      <path fill="#4285F4" d="M1.636 21.002h3.273v-7.91L0 9.457v9.909c0 .904.732 1.636 1.636 1.636z" />
      <path fill="#34A853" d="M19.091 21.002h3.273c.904 0 1.636-.732 1.636-1.636V9.457l-4.909 3.636z" />
      <path fill="#FBBC04" d="M19.091 5.093v8l4.909-3.636V5.911c0-2.023-2.31-3.178-3.927-1.964z" />
      <path fill="#EA4335" d="M4.909 13.093v-8L12 10.457l7.091-5.364v8L12 18.457z" />
      <path fill="#C5221F" d="M0 5.911v3.546l4.909 3.636v-8L3.927 3.947C2.309 2.733 0 3.888 0 5.911z" />
    </svg>
  ),
  drive: (
    <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden>
      <path fill="#FFCF63" d="M8.5 3 2 14.5 5.25 20 11.75 8.5z" />
      <path fill="#11A861" d="M8.5 3h7L22 14.5h-7z" />
      <path fill="#3777E3" d="M5.25 20h13.5L22 14.5H8.5z" />
    </svg>
  ),
  zoom: (
    <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden>
      <rect width="24" height="24" rx="6" fill="#2D8CFF" />
      <path
        fill="#fff"
        d="M5 9.6C5 8.716 5.716 8 6.6 8h5.3c.884 0 1.6.716 1.6 1.6v4.8c0 .884-.716 1.6-1.6 1.6H6.6C5.716 16 5 15.284 5 14.4zm9.4 1.4 3.2-2.24c.53-.371 1.2.008 1.2.64v5.4c0 .632-.67 1.011-1.2.64L14.4 13z"
      />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" fill="#fff" />
      <rect x="3.5" y="3.5" width="17" height="4" rx="2.5" fill="#4285F4" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        fill="#4285F4"
        fontFamily="Arial, sans-serif"
      >
        31
      </text>
    </svg>
  ),
  submagic: (
    <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden>
      <defs>
        <linearGradient id="sm-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#c026d3" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#sm-grad)" />
      <g stroke="#fff" strokeWidth="1.7" strokeLinecap="round">
        <path d="M6 13h6" />
        <path d="M14 13h4" />
        <path d="M6 16h4" />
        <path d="M12 16h6" />
      </g>
    </svg>
  ),
  ads: (
    <svg
      viewBox="0 0 24 24"
      width="34"
      height="34"
      fill="none"
      stroke="#22ccff"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 20V4M4 20h16" />
      <path d="M8 20v-5M12 20v-9M16 20v-6" />
    </svg>
  ),
  meta: (
    <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden>
      <rect width="24" height="24" rx="6" fill="#1877F2" />
      <path
        fill="#fff"
        d="M15.5 12.06h-2.1V20h-3.2v-7.94H8.5V9.3h1.7V7.9c0-2.02 1.2-3.14 3.05-3.14.88 0 1.64.07 1.86.1v2.16h-1.28c-1 0-1.2.48-1.2 1.18V9.3h2.4z"
      />
    </svg>
  ),
  leads: (
    <svg
      viewBox="0 0 24 24"
      width="34"
      height="34"
      fill="none"
      stroke="#22ccff"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="9" cy="9" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0111 0" />
      <path d="M16 6.2a3 3 0 010 5.6M15.5 14.3c2.3.4 4 2.1 4 4.2" />
    </svg>
  ),
};

type Step = { brand: string; label: string };
type Flow = { title: string; desc: string; steps: Step[] };

const FLOWS: Flow[] = [
  {
    title: "Tes factures classées toutes seules",
    desc: "L'IA scanne ta boîte courriel, télécharge les factures et les PDF, et les range automatiquement dans un dossier Drive « Factures Q2 ».",
    steps: [
      { brand: "gmail", label: "Gmail" },
      { brand: "ai", label: "Le Cloud" },
      { brand: "drive", label: "Factures Q2" },
    ],
  },
  {
    title: "Sous-titres automatiques, à ton style",
    desc: "Tu déposes tes vidéos dans un Drive. Elles partent à Submagic, qui les sous-titre exactement dans le style que tu as défini.",
    steps: [
      { brand: "drive", label: "Drive vidéos" },
      { brand: "ai", label: "Le Cloud" },
      { brand: "submagic", label: "Submagic" },
    ],
  },
  {
    title: "Ton mois de contenu, planifié tout seul",
    desc: "Tu drops tes vidéos dans un Drive. L'IA les regarde, choisit une accroche et planifie tout le contenu du mois, à la meilleure heure de publication.",
    steps: [
      { brand: "drive", label: "Drive vidéos" },
      { brand: "ai", label: "Le Cloud" },
      { brand: "calendar", label: "Mois planifié" },
    ],
  },
  {
    title: "Tes appels de vente, transformés en munitions",
    desc: "L'IA écoute tes appels Zoom et t'envoie un résumé mensuel des objections et des succès, puis t'aide à bâtir des pubs et du contenu basés sur ce qui marche.",
    steps: [
      { brand: "zoom", label: "Zoom" },
      { brand: "ai", label: "Le Cloud" },
      { brand: "ads", label: "Résumé + pubs" },
    ],
  },
  {
    title: "Ton email marketing en pilote automatique",
    desc: "L'IA écrit et envoie tes séquences d'accueil, de relance et de réactivation selon le comportement de chaque contact, sans que tu touches à rien.",
    steps: [
      { brand: "leads", label: "Contacts" },
      { brand: "ai", label: "Le Cloud" },
      { brand: "gmail", label: "Séquences courriel" },
    ],
  },
  {
    title: "Tes campagnes Meta analysées et optimisées",
    desc: "L'IA lit tes données Meta Ads, repère ce qui performe et ce qui brûle du budget, et te dit exactement quoi ajuster pour améliorer tes résultats.",
    steps: [
      { brand: "meta", label: "Meta Ads" },
      { brand: "ai", label: "Le Cloud" },
      { brand: "ads", label: "Reco d'optimisation" },
    ],
  },
];

function FlowDiagram({ steps }: { steps: Step[] }) {
  return (
    <div className="mx-auto flex max-w-sm items-start">
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <div key={s.label} className={`flex items-start ${last ? "flex-none" : "flex-1"}`}>
            <div className="flex w-16 flex-none flex-col items-center gap-2 text-center">
              {s.brand === "ai" ? (
                <span className="flow-ai flex h-16 w-16 items-center justify-center rounded-2xl border border-fluo-400/40 bg-fluo-500/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.png" alt="Le Cloud" className="h-9 w-auto" />
                </span>
              ) : (
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05]">
                  {BRAND_LOGOS[s.brand]}
                </span>
              )}
              <span className="text-[11px] leading-tight text-mist-soft">{s.label}</span>
            </div>
            {!last && <span className={`flow-wire mx-1.5 mt-8 ${i === 1 ? "delay" : ""}`} />}
          </div>
        );
      })}
    </div>
  );
}

export default function Showcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = (i + FLOWS.length) % FLOWS.length;
    el.scrollTo({ left: el.clientWidth * clamped, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setIdx(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <section id="exemples" className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-md border border-fluo-400/25 bg-fluo-500/[0.07] px-4 py-1.5 text-xs font-600 uppercase tracking-widest text-fluo-300">
          Exemples concrets
        </span>
        <h2 className="mt-6 font-display text-3xl font-800 text-white sm:text-4xl">
          Voici ce qu&apos;on peut faire tourner pour toi.
        </h2>
        <p className="mt-4 text-mist-soft">
          De vrais systèmes, branchés à tes outils. Fais défiler les exemples.
        </p>
      </div>

      <div className="relative mt-12">
        {/* flèches (desktop) */}
        <button
          type="button"
          aria-label="Exemple précédent"
          onClick={() => goTo(idx - 1)}
          className="absolute -left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-900/80 text-white transition-colors hover:bg-white/10 sm:flex"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Exemple suivant"
          onClick={() => goTo(idx + 1)}
          className="absolute -right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-900/80 text-white transition-colors hover:bg-white/10 sm:flex"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          ref={trackRef}
          onScroll={onScroll}
          className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
        >
          {FLOWS.map((f) => (
            <div key={f.title} className="w-full shrink-0 snap-center px-1">
              <div className="card mx-auto max-w-2xl p-8 text-center sm:p-12">
                <FlowDiagram steps={f.steps} />
                <h3 className="mt-8 font-display text-2xl font-800 text-white">{f.title}</h3>
                <p className="mx-auto mt-3 max-w-lg leading-relaxed text-mist-soft">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* points */}
      <div className="mt-6 flex justify-center gap-2">
        {FLOWS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Aller à l'exemple ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-6 bg-fluo-400" : "w-2 bg-white/25 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
