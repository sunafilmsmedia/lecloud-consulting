"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { INTEGRATION_LOGOS, INTEGRATION_APPS } from "@/components/Integrations";

/* Noms lisibles à partir des apps d'intégration (pour l'attribut title) */
const LOGO_NAMES: Record<string, string> = Object.fromEntries(
  INTEGRATION_APPS.map((a) => [a.logo, a.name])
);

function LogoRow({ ids }: { ids?: string[] }) {
  if (!ids || ids.length === 0) return null;
  return (
    <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-[#eef5fc] pt-3">
      <span className="mr-1 text-[10px] font-700 uppercase tracking-wider text-[#9db0c6]">
        On connecte
      </span>
      {ids.map((id) => (
        <span
          key={id}
          title={LOGO_NAMES[id]}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e3eefb] bg-white"
        >
          {INTEGRATION_LOGOS[id]}
        </span>
      ))}
    </div>
  );
}

/* ---------- Données du parcours ---------- */
type Bloc = { label: string; text: string };
type Step = {
  phase?: string;
  day: string;
  title: string;
  icon: string;
  meta?: string;
  body?: string;
  blocs?: Bloc[];
  logos?: string[];
  visual?: string;
  highlight?: boolean;
};

const STEPS: Step[] = [
  {
    phase: "Avant la vente",
    day: "Découverte",
    icon: "🔍",
    title: "On te trouve",
    body:
      "Contenu organique (reels d'employés IA, documentaire) et références : 1 mois de CRM offert par référence closée. Un seul CTA : « Book un appel de 15 min. »",
  },
  {
    day: "15 min",
    icon: "📞",
    title: "Appel découverte",
    body:
      "On cerne 2-3 douleurs, ton niveau IA et le fit. Entre les deux, un générateur de deck bâti avec TES chiffres, pour te montrer exactement le potentiel.",
    logos: ["calendly"],
    visual: "deck",
  },
  {
    phase: "La semaine de livraison",
    day: "J0",
    icon: "✍️",
    title: "Ta place est créée",
    meta: "0 min manuel — tout est automatique",
    body:
      "Dès le départ : courriel de bienvenue, formulaire de personnalité du bot, formulaire systèmes et lien d'onboarding, générés automatiquement. Tu arrives, tout est prêt.",
    logos: ["calendly", "gmail"],
  },
  {
    day: "J1",
    icon: "🚀",
    title: "Onboarding en direct",
    meta: "90 min avec toi + build",
    body:
      "On comprend ta business et tes processus, on connecte tes outils ensemble, tu donnes les accès — et ton cerveau IA se crée sous tes yeux. Le wow du jour 1.",
    logos: ["drive", "gmail", "zoom"],
    visual: "brain",
  },
  {
    day: "J1-2",
    icon: "🛠️",
    title: "On monte ton équipe",
    meta: "sans toi",
    body:
      "On construit les employés restants et on calibre ton bot avec ton formulaire de personnalité. Tu reçois un message de progression : « ton Adjointe est née 👀 ».",
    logos: ["drive", "notion"],
    visual: "build",
  },
  {
    day: "J3",
    icon: "✅",
    title: "Tes employés IA roulent",
    highlight: true,
    meta: "confirmation en direct",
    body:
      "On fait le tour de chaque agent : tu testes sur tes vrais messages, on ajuste la voix en direct (« c'est moi, ça »). Ton équipe IA est vivante et fonctionne.",
    logos: ["gmail", "whatsapp"],
    visual: "chat",
  },
  {
    day: "J3-6",
    icon: "⚙️",
    title: "CRM & automatisations",
    meta: "sans toi",
    body:
      "Snapshot CRM par niche, automatisations 100 % autonomes (rappels de RDV, séquence post-closing, avis Google), branchements Zapier. Ton dashboard se remplit en parallèle.",
    logos: ["hubspot", "zapier", "calendar"],
    visual: "dash",
  },
  {
    day: "J7",
    icon: "🎓",
    title: "Tu deviens autonome",
    meta: "la dernière journée",
    visual: "office",
    blocs: [
      {
        label: "Bloc 1 · Formation",
        text:
          "Le framework des 3 ingrédients : un agent = un prompt + des connaissances (ton cerveau IA) + des outils. Tu choisis une douleur et TU crées le projet toi-même. Ça marche → tu peux agrandir ton équipe seul.",
      },
      {
        label: "Bloc 2 · Dashboard",
        text:
          "Ton poste de commande à ton branding : une carte par employé (liens + prompts copiables), tes automatisations et leur statut, tes routines quotidienne / hebdo / mensuelle, et le support.",
      },
      {
        label: "Bloc 3 · Plan 90 jours",
        text:
          "Les 3-5 prochains agents à construire toi-même ou à nous confier, le rappel du J+30 et ta bienvenue officielle dans la communauté.",
      },
    ],
    logos: ["notion", "slack"],
  },
  {
    phase: "Après la semaine",
    day: "J8-30",
    icon: "📈",
    title: "Adoption",
    body:
      "Check-in automatique à J+14 (« quel employé t'as pas encore touché? ») et support continu via ton espace privé.",
    logos: ["slack"],
  },
  {
    day: "J+30",
    icon: "🔧",
    title: "Appel de corrections (inclus)",
    body:
      "Ajustements, bilan chiffré vs jour 1, et prochaines opportunités : tournage / pubs si tu génères des scripts, extensions selon tes besoins.",
  },
  {
    day: "Mois 2-3",
    icon: "💬",
    title: "Accompagnement continu",
    body:
      "Ton espace privé reste ouvert (appels, Looms, support). À J+60, on te demande un témoignage + 2 références si les chiffres sont bons.",
    logos: ["slack", "zoom"],
  },
  {
    day: "À vie",
    icon: "♾️",
    title: "Client à vie",
    body:
      "Après 3 mois : communauté à vie + CRM avec interventions incluses. Ton équipe IA grandit avec toi, tu n'es jamais seul.",
    logos: ["hubspot"],
  },
];

/* Grand libellé de jour, affiché en filigrane dans le fond */
const BIG_LABEL: Record<string, string> = {
  Découverte: "Avant",
  "15 min": "Appel",
  J0: "Jour 0",
  J1: "Jour 1",
  "J1-2": "Jour 1-2",
  J3: "Jour 3",
  "J3-6": "Jour 3-6",
  J7: "Jour 7",
  "J8-30": "Jour 8-30",
  "J+30": "Jour +30",
  "Mois 2-3": "Mois 2-3",
  "À vie": "À vie",
};

/* ---------- Exemples visuels (mini-maquettes claires) ---------- */
function Bars({ vals }: { vals: number[] }) {
  const max = Math.max(...vals);
  return (
    <div className="flex h-12 items-end gap-1.5">
      {vals.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-t bg-[#00b4ff]"
          style={{ height: `${(v / max) * 100}%`, opacity: 0.35 + (i / vals.length) * 0.5 }}
        />
      ))}
    </div>
  );
}

function VDeck() {
  return (
    <div className="rounded-xl border border-[#e3eefb] bg-[#f7fbff] p-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-700 uppercase tracking-wide text-[#9db0c6]">
          Ton potentiel
        </span>
        <span className="rounded-full bg-[#eaf5ff] px-2 py-0.5 text-[10px] font-800 text-[#0072b8]">
          +64 h / mois
        </span>
      </div>
      <div className="mt-2">
        <Bars vals={[30, 52, 40, 68, 88]} />
      </div>
      <p className="mt-2 text-[10px] text-[#7c8ba0]">Deck généré avec tes chiffres</p>
    </div>
  );
}

function VBrain() {
  const cx = 130;
  const cy = 54;
  const r = 38;
  const nodes = Array.from({ length: 6 }, (_, i) => {
    const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r };
  });
  return (
    <div className="rounded-xl border border-[#e3eefb] bg-[#f7fbff] p-2">
      <svg viewBox="0 0 260 108" className="w-full">
        {nodes.map((n, i) => (
          <line key={`l${i}`} x1={cx} y1={cy} x2={n.x} y2={n.y} stroke="#bfe3fb" strokeWidth="1.5" />
        ))}
        {nodes.map((n, i) => (
          <circle key={`c${i}`} cx={n.x} cy={n.y} r="6" fill="#fff" stroke="#00b4ff" strokeWidth="1.6" />
        ))}
        <circle cx={cx} cy={cy} r="13" fill="#00b4ff" />
        <text x={cx} y={cy + 3} textAnchor="middle" fontSize="7" fontWeight="800" fill="#fff">
          IA
        </text>
      </svg>
      <p className="text-center text-[10px] text-[#7c8ba0]">Ton cerveau IA se construit</p>
    </div>
  );
}

const BUILD = [
  { e: "💰", n: "Directeur des ventes", p: 100 },
  { e: "🤝", n: "Succès client", p: 100 },
  { e: "📋", n: "Adjointe", p: 62 },
];
function VBuild() {
  return (
    <div className="space-y-2 rounded-xl border border-[#e3eefb] bg-[#f7fbff] p-3">
      {BUILD.map((b) => (
        <div key={b.n} className="flex items-center gap-2">
          <span className="text-sm">{b.e}</span>
          <span className="w-24 truncate text-[10px] font-600 text-[#41566d]">{b.n}</span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#e3eefb]">
            <div className="h-full rounded-full bg-[#00b4ff]" style={{ width: `${b.p}%` }} />
          </div>
          <span className="w-3 text-[9px] font-800 text-[#0072b8]">{b.p === 100 ? "✓" : "…"}</span>
        </div>
      ))}
    </div>
  );
}

function VChat() {
  return (
    <div className="space-y-2 rounded-xl border border-[#e3eefb] bg-[#f7fbff] p-3">
      <div className="flex items-start gap-1.5">
        <span className="text-sm">📋</span>
        <div className="rounded-2xl rounded-tl-sm border border-[#e3eefb] bg-white px-2.5 py-1.5 text-[10px] leading-snug text-[#41566d]">
          J&apos;ai relancé 3 clients dormants et préparé ta journée ☕
        </div>
      </div>
      <div className="flex justify-end">
        <div className="rounded-2xl rounded-tr-sm bg-[#00b4ff] px-2.5 py-1.5 text-[10px] font-600 text-white">
          c&apos;est exactement ma voix ✓
        </div>
      </div>
    </div>
  );
}

function VDash() {
  const s = [8, 14, 11, 20, 18, 26, 24, 32, 30, 38];
  const W = 240;
  const H = 54;
  const max = Math.max(...s);
  const min = Math.min(...s);
  const nx = (i: number) => (i / (s.length - 1)) * W;
  const ny = (v: number) => H - ((v - min) / (max - min)) * (H - 10) - 5;
  let line = `M0 ${ny(s[0])}`;
  for (let i = 1; i < s.length; i++) line += ` L${nx(i)} ${ny(s[i])}`;
  const area = `${line} L${W} ${H} L0 ${H} Z`;
  return (
    <div className="rounded-xl border border-[#e3eefb] bg-[#f7fbff] p-3">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="v-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(0,180,255,0.35)" />
            <stop offset="1" stopColor="rgba(0,180,255,0)" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#v-area)" />
        <path d={line} fill="none" stroke="#00b4ff" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <div className="mt-2 flex gap-1.5">
        <span className="rounded-md bg-white px-2 py-1 text-[10px] text-[#41566d] ring-1 ring-[#e3eefb]">
          Leads 126 <b className="text-[#0072b8]">+18 %</b>
        </span>
        <span className="rounded-md bg-white px-2 py-1 text-[10px] text-[#41566d] ring-1 ring-[#e3eefb]">
          RDV 38
        </span>
      </div>
      <div className="mt-2 space-y-1">
        {["Rappels de RDV", "Avis Google", "Séquence post-appel"].map((a) => (
          <div key={a} className="flex items-center gap-1.5 text-[10px] text-[#41566d]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
            {a}
            <span className="ml-auto text-[9px] font-700 text-[#22c55e]">actif</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const DEPTS = [
  { n: "Adjointe", c: "#e2564d", people: 1 },
  { n: "Marketing", c: "#4f9e86", people: 2 },
  { n: "Succès", c: "#5b6cc4", people: 3 },
  { n: "Montage", c: "#c69a4b", people: 2 },
];
function VOffice() {
  return (
    <div className="rounded-xl border border-[#e3eefb] bg-[#f7fbff] p-2">
      <div className="grid grid-cols-4 gap-1">
        {DEPTS.map((d) => (
          <div key={d.n} className="overflow-hidden rounded-md border border-[#e3eefb] bg-white">
            <div
              className="truncate px-1 py-0.5 text-center text-[7px] font-800 uppercase text-white"
              style={{ background: d.c }}
            >
              {d.n}
            </div>
            <div className="flex min-h-[32px] flex-wrap items-center justify-center gap-0.5 p-1">
              {Array.from({ length: d.people }).map((_, i) => (
                <span key={i} className="text-[10px] leading-none">
                  👤
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-1.5 text-center text-[10px] text-[#7c8ba0]">
        Ton bureau — tout se gère d&apos;ici
      </p>
    </div>
  );
}

function Visual({ kind }: { kind: string }) {
  switch (kind) {
    case "deck":
      return <VDeck />;
    case "brain":
      return <VBrain />;
    case "build":
      return <VBuild />;
    case "chat":
      return <VChat />;
    case "dash":
      return <VDash />;
    case "office":
      return <VOffice />;
    default:
      return null;
  }
}

/* ---------- Carte ---------- */
function Card({ s, active }: { s: Step; active: boolean }) {
  return (
    <div
      className={`transition-all duration-700 ease-out ${
        active ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      <div
        className={`rounded-2xl border p-5 sm:p-6 ${
          s.highlight
            ? "border-[#00b4ff]/45 bg-gradient-to-br from-[#effaff] to-white shadow-[0_16px_50px_-24px_rgba(0,148,230,0.6)] ring-1 ring-[#00b4ff]/20"
            : "border-[#e3eefb] bg-white shadow-[0_12px_44px_-26px_rgba(3,105,175,0.45)]"
        }`}
      >
        {s.visual && (
          <div className="mb-4">
            <Visual kind={s.visual} />
          </div>
        )}
        <div className="flex items-center gap-3">
          <span
            className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[#f0f8ff] text-2xl transition-transform duration-700 ${
              active ? "scale-100" : "scale-90"
            }`}
          >
            {s.icon}
          </span>
          <div>
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-800 uppercase tracking-wider ${
                s.highlight ? "bg-[#00b4ff] text-white" : "bg-[#eaf5ff] text-[#0072b8]"
              }`}
            >
              {s.day}
            </span>
            {s.meta && <p className="mt-1 text-[11px] font-600 text-[#7c8ba0]">{s.meta}</p>}
          </div>
        </div>

        <h3 className="mt-3 font-display text-lg font-800 leading-snug text-[#0a1a2f] sm:text-xl">
          {s.title}
        </h3>

        {s.body && <p className="mt-2 text-sm leading-relaxed text-[#41566d]">{s.body}</p>}

        {s.blocs && (
          <div className="mt-3 space-y-2.5">
            {s.blocs.map((b) => (
              <div key={b.label} className="rounded-xl border border-[#e3eefb] bg-[#f7fbff] p-3.5">
                <p className="font-display text-xs font-800 uppercase tracking-wide text-[#0072b8]">
                  {b.label}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[#41566d]">{b.text}</p>
              </div>
            ))}
          </div>
        )}

        <LogoRow ids={s.logos} />
      </div>
    </div>
  );
}

/* ---------- Chemin sinueux mesuré + tracé au scroll ---------- */
function smoothPath(pts: { x: number; y: number }[]): string {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  const t = 0.16;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1.x + (p2.x - p0.x) * t;
    const c1y = p1.y + (p2.y - p0.y) * t;
    const c2x = p2.x - (p3.x - p1.x) * t;
    const c2y = p2.y - (p3.y - p1.y) * t;
    d += ` C ${c1x} ${c1y} ${c2x} ${c2y} ${p2.x} ${p2.y}`;
  }
  return d;
}

export default function PathTimeline() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const trackRef = useRef<SVGPathElement>(null);

  const [size, setSize] = useState({ w: 0, h: 0 });
  const [pathD, setPathD] = useState("");
  const [pathLen, setPathLen] = useState(0);
  const [progress, setProgress] = useState(0);
  const [head, setHead] = useState<{ x: number; y: number } | null>(null);
  const [active, setActive] = useState<boolean[]>(() => STEPS.map(() => false));

  // Mesure des positions réelles des étapes → génère le chemin
  useLayoutEffect(() => {
    const measure = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const wr = wrap.getBoundingClientRect();
      const pts: { x: number; y: number }[] = [];
      nodeRefs.current.forEach((el) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        pts.push({ x: r.left - wr.left + r.width / 2, y: r.top - wr.top + r.height / 2 });
      });
      setSize({ w: wr.width, h: wr.height });
      setPathD(smoothPath(pts));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    const t = setTimeout(measure, 400);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      clearTimeout(t);
    };
  }, []);

  // Longueur totale du tracé
  useEffect(() => {
    if (trackRef.current && pathD) setPathLen(trackRef.current.getTotalLength());
  }, [pathD, size.h]);

  // Progression selon le scroll
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = wrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const vh = window.innerHeight;
        const p = (window.scrollY + vh * 0.55 - top) / rect.height;
        setProgress(Math.max(0, Math.min(1, p)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Tête lumineuse qui suit le tracé
  useEffect(() => {
    if (!trackRef.current || !pathLen) return;
    const pt = trackRef.current.getPointAtLength(pathLen * progress);
    setHead({ x: pt.x, y: pt.y });
  }, [progress, pathLen]);

  // Chaque « jour » s'allume quand il atteint le centre de l'écran
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.idx);
            setActive((prev) => {
              if (prev[i]) return prev;
              const next = [...prev];
              next[i] = true;
              return next;
            });
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    nodeRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const dash = pathLen || 1;

  return (
    <div ref={wrapRef} className="relative mx-auto max-w-5xl px-5">
      {/* SVG du chemin (derrière les cartes) */}
      <svg
        className="pointer-events-none absolute inset-0 z-0"
        width={size.w}
        height={size.h}
        aria-hidden
      >
        <defs>
          <linearGradient id="path-grad" x1="0" y1="0" x2="0" y2={size.h} gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#4fdcff" />
            <stop offset="1" stopColor="#0072b8" />
          </linearGradient>
        </defs>
        {/* piste claire complète */}
        <path
          ref={trackRef}
          d={pathD}
          fill="none"
          stroke="#dcecfa"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* portion tracée (bleue) */}
        <path
          d={pathD}
          fill="none"
          stroke="url(#path-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray={dash}
          strokeDashoffset={dash * (1 - progress)}
        />
        {/* tête lumineuse */}
        {head && progress > 0.002 && progress < 0.998 && (
          <g>
            <circle cx={head.x} cy={head.y} r="9" fill="#00b4ff" opacity="0.18" />
            <circle cx={head.x} cy={head.y} r="5" fill="#fff" stroke="#00b4ff" strokeWidth="2.5" />
          </g>
        )}
      </svg>

      <div className="relative z-10">
        {STEPS.map((s, i) => {
          const side = i % 2 === 0 ? "right" : "left";
          const nodeX =
            side === "right" ? "left-[44px] md:left-[66%]" : "left-[24px] md:left-[34%]";
          const cardCol =
            side === "right"
              ? "md:col-start-2 md:ml-auto md:max-w-[20rem]"
              : "md:col-start-1 md:mr-auto md:max-w-[20rem]";
          return (
            <div key={i}>
              {s.phase && (
                <div className="relative flex justify-center py-8 sm:py-10">
                  <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-[#bfe3fb] bg-white px-5 py-2 font-display text-xs font-800 uppercase tracking-[0.2em] text-[#0072b8] shadow-[0_10px_30px_-18px_rgba(0,148,230,0.6)]">
                    {s.phase}
                  </span>
                </div>
              )}

              <div className="relative py-5 sm:py-7">
                {/* numéro du jour en filigrane (fond, police bleue) */}
                <span
                  aria-hidden
                  className={`accent pointer-events-none absolute top-1/2 z-0 hidden w-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center text-6xl opacity-25 md:block lg:text-7xl ${
                    side === "right" ? "left-0" : "right-0"
                  }`}
                >
                  {BIG_LABEL[s.day] ?? s.day}
                </span>
                {/* pastille du jour, posée sur le chemin */}
                <span
                  ref={(el) => {
                    nodeRefs.current[i] = el;
                  }}
                  data-idx={i}
                  className={`absolute top-9 z-10 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-white transition-all duration-500 ${nodeX} ${
                    active[i]
                      ? "scale-110 border-[#00b4ff] shadow-[0_0_16px_3px_rgba(0,180,255,0.4)]"
                      : "border-[#c7e4f8]"
                  }`}
                  aria-hidden
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-500 ${
                      active[i] ? "bg-[#00b4ff]" : "bg-[#dcecfa]"
                    }`}
                  />
                </span>

                {/* carte, alternée gauche/droite en desktop */}
                <div className="pl-16 md:grid md:grid-cols-2 md:gap-14 md:pl-0">
                  <div className={cardCol}>
                    <Card s={s} active={active[i]} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
