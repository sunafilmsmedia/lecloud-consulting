"use client";

import { useRef, useState } from "react";

type Stat = { label: string; value: string; delta?: string };
type Dash = {
  name: string;
  subtitle: string;
  dot: string;
  stats: Stat[];
  series: number[];
  chart: "area" | "line" | "bars";
};

const DASHBOARDS: Dash[] = [
  {
    name: "🎯 Le Marketeur",
    subtitle: "SEO, contenu et email marketing, gérés en continu.",
    dot: "#22ccff",
    stats: [
      { label: "Positions SEO gagnées", value: "+34", delta: "ce mois" },
      { label: "Contenus publiés", value: "48", delta: "+31 %" },
      { label: "Taux d'ouverture", value: "41 %", delta: "+6 %" },
      { label: "Leads organiques", value: "126", delta: "+18 %" },
    ],
    series: [8, 14, 10, 18, 24, 20, 30, 26, 34, 40],
    chart: "line",
  },
  {
    name: "📋 L'Adjointe",
    subtitle: "Ton quotidien géré : courriels, CRM, rappels, documents.",
    dot: "#2dd4bf",
    stats: [
      { label: "Courriels traités", value: "1 240", delta: "auto" },
      { label: "Rendez-vous briefés", value: "38" },
      { label: "Tâches créées", value: "152", delta: "auto" },
      { label: "Documents relancés", value: "27" },
    ],
    series: [12, 16, 14, 20, 18, 24, 22, 28, 26, 32],
    chart: "bars",
  },
  {
    name: "💰 Le Coach de vente",
    subtitle: "Tes appels analysés, tes suivis déclenchés.",
    dot: "#f59e0b",
    stats: [
      { label: "Appels analysés", value: "64", delta: "+9" },
      { label: "Taux de closing", value: "29 %", delta: "+4 %" },
      { label: "Suivis envoyés", value: "318", delta: "auto" },
      { label: "Dormants réactivés", value: "22" },
    ],
    series: [18, 22, 20, 26, 24, 30, 28, 34, 33, 38],
    chart: "line",
  },
  {
    name: "📊 Le Rapport CEO",
    subtitle: "Ton bilan consolidé, mis à jour tout seul.",
    dot: "#22c55e",
    stats: [
      { label: "Revenus du mois", value: "84 k$", delta: "+12 %" },
      { label: "Dépenses suivies", value: "31 k$" },
      { label: "Leads", value: "231", delta: "+9 %" },
      { label: "Marge", value: "63 %", delta: "+2 %" },
    ],
    series: [30, 34, 32, 38, 36, 42, 44, 41, 48, 52],
    chart: "area",
  },
  {
    name: "📣 Le Spécialiste publicité",
    subtitle: "Tes campagnes analysées et optimisées en continu.",
    dot: "#1877f2",
    stats: [
      { label: "Coût par lead", value: "16,68 $", delta: "-11 %" },
      { label: "Leads", value: "86", delta: "+177 %" },
      { label: "Portée", value: "779 k" },
      { label: "ROAS estimé", value: "4,3x", delta: "+0,6" },
    ],
    series: [30, 24, 28, 22, 26, 20, 24, 18, 21, 17],
    chart: "area",
  },
];

function Chart({ d }: { d: Dash }) {
  const W = 560;
  const H = 150;
  const s = d.series;
  const max = Math.max(...s);
  const min = Math.min(...s);
  const nx = (i: number) => (i / (s.length - 1)) * W;
  const ny = (v: number) => H - ((v - min) / (max - min || 1)) * (H - 16) - 8;

  if (d.chart === "bars") {
    const bw = (W / s.length) * 0.55;
    return (
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none">
        {s.map((v, i) => {
          const x = nx(i) - bw / 2 + W / s.length / 2;
          const y = ny(v);
          return (
            <rect key={i} x={x} y={y} width={bw} height={H - y} rx="2" fill="rgba(34,204,255,0.35)" />
          );
        })}
      </svg>
    );
  }

  let line = `M0 ${ny(s[0])}`;
  for (let i = 1; i < s.length; i++) line += ` L${nx(i)} ${ny(s[i])}`;
  const area = `${line} L${W} ${H} L0 ${H} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`g-${d.name}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(34,204,255,0.30)" />
          <stop offset="1" stopColor="rgba(34,204,255,0)" />
        </linearGradient>
      </defs>
      {d.chart === "area" && <path d={area} fill={`url(#g-${d.name})`} />}
      <path d={line} fill="none" stroke="#22ccff" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function DashboardCard({ d }: { d: Dash }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-850">
      {/* en-tête */}
      <div className="flex items-center justify-between border-b border-white/8 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: d.dot }} />
          <span className="font-display text-sm font-700 text-white">{d.name}</span>
        </div>
        <div className="hidden items-center gap-1 sm:flex">
          {["7j", "14j", "30j", "90j"].map((t, i) => (
            <span
              key={t}
              className={`rounded px-1.5 py-0.5 text-[10px] ${
                i === 2 ? "bg-white/10 text-white" : "text-mist-soft/60"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* stats */}
      <div className="grid grid-cols-2 gap-px bg-white/8 sm:grid-cols-4">
        {d.stats.map((st) => (
          <div key={st.label} className="bg-ink-850 px-4 py-3">
            <p className="truncate text-[11px] text-mist-soft">{st.label}</p>
            <p className="mt-1 font-display text-lg font-800 text-white">{st.value}</p>
            {st.delta && <p className="text-[10px] text-fluo-300">{st.delta}</p>}
          </div>
        ))}
      </div>

      {/* graphique */}
      <div className="flex-1 px-4 pb-3 pt-4">
        <Chart d={d} />
      </div>

      {/* pied */}
      <div className="border-t border-white/8 px-5 py-3">
        <p className="font-display text-xs font-700 uppercase tracking-widest text-white">
          {d.name}
        </p>
        <p className="mt-0.5 text-xs text-mist-soft">{d.subtitle}</p>
      </div>
    </div>
  );
}

export default function Dashboards() {
  const n = DASHBOARDS.length;
  const [active, setActive] = useState(0);

  const go = (dir: number) => setActive((a) => (a + dir + n) % n);

  const swipeX = useRef<number | null>(null);

  const styleFor = (i: number): React.CSSProperties => {
    let o = i - active;
    if (o > n / 2) o -= n;
    if (o < -n / 2) o += n;
    const abs = Math.abs(o);
    if (abs > 2) {
      return { opacity: 0, pointerEvents: "none", transform: `translateX(-50%) translateX(${o * 60}%) scale(0.6)` };
    }
    const tx = o * 46;
    const scale = abs === 0 ? 1 : abs === 1 ? 0.82 : 0.68;
    const ry = o === 0 ? 0 : o < 0 ? 26 : -26;
    const opacity = abs === 0 ? 1 : abs === 1 ? 0.55 : 0.25;
    return {
      transform: `translateX(-50%) translateX(${tx}%) scale(${scale}) rotateY(${ry}deg)`,
      opacity,
      zIndex: 30 - abs * 10,
      pointerEvents: abs === 0 ? "auto" : "none",
    };
  };

  return (
    <div>
      <div
        className="relative mx-auto h-[360px] max-w-2xl cursor-grab overflow-hidden active:cursor-grabbing sm:h-[400px]"
        style={{ perspective: "1400px", touchAction: "pan-y" }}
        onPointerDown={(e) => {
          swipeX.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (swipeX.current === null) return;
          const dx = e.clientX - swipeX.current;
          swipeX.current = null;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        }}
        onPointerCancel={() => {
          swipeX.current = null;
        }}
      >
        {DASHBOARDS.map((d, i) => (
          <div
            key={d.name}
            onClick={() => setActive(i)}
            className="absolute left-1/2 top-0 h-full w-[86%] max-w-xl transition-all duration-500 ease-out"
            style={styleFor(i)}
          >
            <DashboardCard d={d} />
          </div>
        ))}
      </div>

      {/* contrôles */}
      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Précédent"
          onClick={() => go(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="flex gap-2">
          {DASHBOARDS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Tableau ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-6 bg-fluo-400" : "w-2 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Suivant"
          onClick={() => go(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <p className="mt-6 text-center text-xs font-600 uppercase tracking-[0.25em] text-mist-soft/60">
        Chaque département a le sien
      </p>
    </div>
  );
}
