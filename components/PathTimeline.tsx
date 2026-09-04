"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/* ---------- Logos des outils (SVG, sur fond blanc) ---------- */
const LOGO_NAMES: Record<string, string> = {
  claude: "Claude (Anthropic)",
  clickup: "ClickUp",
  skool: "Skool",
  drive: "Google Drive",
  calendly: "Calendly",
  zapier: "Zapier",
  make: "Make",
  google: "Avis Google",
  crm: "CRM (GoHighLevel)",
};

const LOGOS: Record<string, React.ReactNode> = {
  claude: (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <g stroke="#D97757" strokeWidth="1.9" strokeLinecap="round">
        {[0, 30, 60, 90, 120, 150].map((a) => {
          const r = (a * Math.PI) / 180;
          const x = Math.cos(r) * 7;
          const y = Math.sin(r) * 7;
          return <line key={a} x1={12 - x} y1={12 - y} x2={12 + x} y2={12 + y} />;
        })}
      </g>
    </svg>
  ),
  clickup: (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <defs>
        <linearGradient id="cu-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#8930FD" />
          <stop offset=".5" stopColor="#49CCF9" />
          <stop offset="1" stopColor="#FF02F0" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#cu-grad)" />
      <path
        d="M6 15.2l6-4.6 6 4.6"
        fill="none"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  skool: (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <rect width="24" height="24" rx="6" fill="#F5C518" />
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontSize="14"
        fontWeight="800"
        fill="#141414"
        fontFamily="Arial, sans-serif"
      >
        s
      </text>
    </svg>
  ),
  drive: (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <path fill="#FFCF63" d="M8.5 3 2 14.5 5.25 20 11.75 8.5z" />
      <path fill="#11A861" d="M8.5 3h7L22 14.5h-7z" />
      <path fill="#3777E3" d="M5.25 20h13.5L22 14.5H8.5z" />
    </svg>
  ),
  calendly: (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <rect width="24" height="24" rx="6" fill="#006BFF" />
      <path d="M15.8 9.2a4.2 4.2 0 100 5.6" fill="none" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  ),
  zapier: (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <g stroke="#FF4F00" strokeWidth="2.1" strokeLinecap="round">
        <line x1="12" y1="4" x2="12" y2="20" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="6.3" y1="6.3" x2="17.7" y2="17.7" />
        <line x1="17.7" y1="6.3" x2="6.3" y2="17.7" />
      </g>
    </svg>
  ),
  make: (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <rect width="24" height="24" rx="6" fill="#6D2CF5" />
      <path
        d="M7.5 16l1.6-8M12 16V8M16.5 16l-1.6-8"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <path
        d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17.9 6.8 19.6l1-5.8L3.5 9.7l5.9-.9z"
        fill="#FBBC04"
      />
    </svg>
  ),
  crm: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#0072b8" strokeWidth="1.7" aria-hidden>
      <ellipse cx="12" cy="6" rx="6.5" ry="2.6" />
      <path d="M5.5 6v6c0 1.4 2.9 2.6 6.5 2.6s6.5-1.2 6.5-2.6V6" />
      <path d="M5.5 12v6c0 1.4 2.9 2.6 6.5 2.6s6.5-1.2 6.5-2.6v-6" />
    </svg>
  ),
};

function LogoRow({ ids }: { ids?: string[] }) {
  if (!ids || ids.length === 0) return null;
  return (
    <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-[#eef5fc] pt-3">
      <span className="mr-1 text-[10px] font-700 uppercase tracking-wider text-[#9db0c6]">Outils</span>
      {ids.map((id) => (
        <span
          key={id}
          title={LOGO_NAMES[id]}
          className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#e3eefb] bg-white"
        >
          {LOGOS[id]}
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
  },
  {
    phase: "La semaine de livraison",
    day: "J0",
    icon: "✍️",
    title: "Ta place est créée",
    meta: "0 min manuel — tout est automatique",
    body:
      "Dès le départ : courriel de bienvenue, formulaire de personnalité du bot, formulaire systèmes, lien d'onboarding et ton espace privé, générés automatiquement. Tu arrives, tout est prêt.",
    logos: ["clickup", "calendly"],
  },
  {
    day: "J1",
    icon: "🚀",
    title: "Onboarding en direct",
    meta: "90 min avec toi + build",
    body:
      "On comprend ta business et tes processus, on connecte tes outils ensemble, tu donnes les accès — et ton cerveau IA se crée sous tes yeux. Le wow du jour 1.",
    logos: ["claude", "drive"],
  },
  {
    day: "J1-2",
    icon: "🛠️",
    title: "On monte ton équipe",
    meta: "sans toi",
    body:
      "On construit les employés restants et on calibre ton bot avec ton formulaire de personnalité. Tu reçois un message de progression : « ton Adjointe est née 👀 ».",
    logos: ["claude"],
  },
  {
    day: "J3",
    icon: "✅",
    title: "Tes employés IA roulent",
    highlight: true,
    meta: "confirmation en direct",
    body:
      "On fait le tour de chaque agent : tu testes sur tes vrais messages, on ajuste la voix en direct (« c'est moi, ça »). Ton équipe IA est vivante et fonctionne.",
    logos: ["claude"],
  },
  {
    day: "J3-6",
    icon: "⚙️",
    title: "CRM & automatisations",
    meta: "sans toi",
    body:
      "Snapshot CRM par niche, automatisations 100 % autonomes (rappels de RDV, séquence post-closing, avis Google), branchements Zapier / Make. Ton dashboard se remplit en parallèle.",
    logos: ["crm", "zapier", "make", "google"],
  },
  {
    day: "J7",
    icon: "🎓",
    title: "Tu deviens autonome",
    meta: "la dernière journée",
    blocs: [
      {
        label: "Bloc 1 · Formation",
        text:
          "Le framework des 3 ingrédients : un agent = un prompt + des connaissances (ton cerveau IA) + des outils. Tu choisis une douleur et TU crées le projet Claude toi-même. Ça marche → tu peux agrandir ton équipe seul.",
      },
      {
        label: "Bloc 2 · Dashboard",
        text:
          "Ton poste de commande à ton branding : une carte par employé (liens + prompts copiables), tes automatisations et leur statut, tes routines quotidienne / hebdo / mensuelle, et le support.",
      },
      {
        label: "Bloc 3 · Plan 90 jours",
        text:
          "Les 3-5 prochains agents à construire toi-même ou à nous confier, le rappel du J+30 et ta bienvenue officielle dans le Skool.",
      },
    ],
    logos: ["claude", "skool", "clickup"],
  },
  {
    phase: "Après la semaine",
    day: "J8-30",
    icon: "📈",
    title: "Adoption",
    body:
      "Check-in automatique à J+14 (« quel employé t'as pas encore touché? ») et support continu via ton espace privé.",
    logos: ["clickup"],
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
    logos: ["clickup", "skool"],
  },
  {
    day: "À vie",
    icon: "♾️",
    title: "Client à vie",
    body:
      "Après 3 mois : Skool à vie pour tous + CRM avec interventions incluses. Ton équipe IA grandit avec toi, tu n'es jamais seul.",
    logos: ["skool", "crm"],
  },
];

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
