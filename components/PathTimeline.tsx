"use client";

import { useEffect, useRef, useState } from "react";

type Bloc = { label: string; text: string };
type Step = {
  phase?: string;
  day: string;
  title: string;
  icon: string;
  meta?: string;
  body?: string;
  blocs?: Bloc[];
  highlight?: boolean;
};

const STEPS: Step[] = [
  {
    phase: "Avant la vente",
    day: "Découverte",
    icon: "🔍",
    title: "On te trouve",
    body:
      "Contenu organique (reels d'employés IA, documentaire), base agence + Pipedrive (rabais 15 %), références (1 mois de CRM offert par référence closée). Un seul CTA : « Book un appel de 15 min. »",
  },
  {
    day: "15 min",
    icon: "📞",
    title: "Appel découverte",
    body:
      "On cerne 2-3 douleurs, ton niveau IA et le fit — puis on booke le closing directement sur l'appel. Entre les deux, un générateur de deck bâti avec TES chiffres.",
  },
  {
    day: "30-45 min",
    icon: "🤝",
    title: "Closing",
    body:
      "Le deck avec tes chiffres → tu choisis ton package → garantie claire → paiement 100 % et contrat signés pendant l'appel.",
  },
  {
    phase: "La semaine de livraison",
    day: "J0",
    icon: "✍️",
    title: "Signature",
    meta: "0 min manuel — tout est automatique",
    body:
      "Paiement reçu → courriel de bienvenue, formulaire de personnalité du bot, formulaire systèmes, lien Calendly d'onboarding et espace ClickUp privé, créés tout seuls. La garantie démarre à l'appel d'onboarding.",
  },
  {
    day: "J1",
    icon: "🚀",
    title: "Onboarding en direct",
    meta: "90 min avec toi + 2-3 h de build",
    body:
      "On comprend ta business et tes processus, tu m'invites gestionnaire sur ton Claude Teams, on connecte tes outils ensemble, tu donnes les accès Google — et ton cerveau IA se crée sous tes yeux. Le wow du jour 1.",
  },
  {
    day: "J1-2",
    icon: "🛠️",
    title: "Build de ton équipe",
    meta: "3-4 h, sans toi",
    body:
      "On monte les employés restants et on calibre le bot avec ton formulaire de personnalité. Tu reçois un message de progression : « ton Adjointe est née 👀 ».",
  },
  {
    day: "J3",
    icon: "✅",
    title: "Confirmation — garantie honorée",
    highlight: true,
    meta: "30-45 min",
    body:
      "On fait le tour de chaque agent : tu testes sur tes vrais messages, on ajuste la voix en direct (« c'est moi, ça »). Tes employés IA roulent — la promesse est tenue, et on te le dit explicitement.",
  },
  {
    day: "J3-6",
    icon: "⚙️",
    title: "CRM & automatisations",
    meta: "3-5 h, sans toi",
    body:
      "Pack CRM si applicable (snapshot par niche), automatisations 100 % autonomes (rappels de RDV, séquence post-closing, avis Google), branchements Zapier / Make. En parallèle, ton dashboard se remplit.",
  },
  {
    day: "J7",
    icon: "🎓",
    title: "Tu deviens autonome",
    meta: "90-120 min avec toi — la dernière journée",
    blocs: [
      {
        label: "Bloc 1 · Formation (60 min)",
        text:
          "Le framework des 3 ingrédients : un agent = un prompt + des connaissances (ton cerveau IA) + des outils. Tu choisis une petite douleur et TU crées le projet Claude toi-même, de A à Z. Ça marche → tu peux agrandir ton équipe seul.",
      },
      {
        label: "Bloc 2 · Dashboard (45 min)",
        text:
          "Ton poste de commande à ton branding : une carte par employé (liens directs + prompts copiables), tes automatisations et leur statut, tes routines quotidienne / hebdo / mensuelle, tes rapports et le support (ClickUp + Skool).",
      },
      {
        label: "Bloc 3 · Plan 90 jours (15 min)",
        text:
          "Les 3-5 prochains agents à construire toi-même ou à nous confier, le rappel du J+30, et ta bienvenue officielle dans le Skool.",
      },
    ],
  },
  {
    phase: "Après la semaine",
    day: "J8-30",
    icon: "📈",
    title: "Adoption",
    body:
      "Check-in automatique à J+14 (« quel employé t'as pas encore touché? ») et support continu via ton espace ClickUp.",
  },
  {
    day: "J+30",
    icon: "🔧",
    title: "Appel de corrections (inclus)",
    body:
      "Ajustements, bilan chiffré vs jour 1, et upsells contextuels : tournage / pubs si tu génères des scripts, CRM si tu ne l'as pas encore pris.",
  },
  {
    day: "Mois 2-3",
    icon: "💬",
    title: "ClickUp inclus",
    body:
      "Ton espace privé reste ouvert (appels, Looms, support). À J+60, on te demande un témoignage + 2 références si les chiffres sont bons.",
  },
  {
    day: "À vie",
    icon: "♾️",
    title: "Client à vie",
    body:
      "Après 3 mois, l'espace ClickUp se ferme → Skool à vie pour tous, + CRM à 175 $/mois avec interventions incluses. Sans CRM : interventions à la pièce (150-250 $).",
  },
];

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
      </div>
    </div>
  );
}

export default function PathTimeline() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<boolean[]>(() => STEPS.map(() => false));

  // Tracé progressif du chemin selon le scroll
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
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="relative mx-auto max-w-5xl px-5">
      {/* RAIL central + tête lumineuse qui trace le chemin */}
      <div className="pointer-events-none absolute bottom-0 top-0 left-5 w-[3px] md:left-1/2 md:-translate-x-1/2">
        <div className="absolute inset-0 rounded-full bg-[#dcecfa]" />
        <div
          className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-[#4fdcff] via-[#00b4ff] to-[#0072b8]"
          style={{ height: `${progress * 100}%` }}
        />
        <div
          className="absolute left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_22px_5px_rgba(0,180,255,0.55)] ring-4 ring-[#00b4ff]/25"
          style={{ top: `${progress * 100}%`, opacity: progress > 0.001 && progress < 0.999 ? 1 : 0 }}
        >
          <span className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-[#00b4ff]" />
        </div>
      </div>

      <div className="relative">
        {STEPS.map((s, i) => {
          const side = i % 2 === 0 ? "right" : "left";
          return (
            <div key={i}>
              {s.phase && (
                <div className="relative flex justify-center py-8 sm:py-10">
                  <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-[#bfe3fb] bg-white px-5 py-2 font-display text-xs font-800 uppercase tracking-[0.2em] text-[#0072b8] shadow-[0_10px_30px_-18px_rgba(0,148,230,0.6)]">
                    {s.phase}
                  </span>
                </div>
              )}

              <div
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                data-idx={i}
                className="relative py-5 sm:py-7"
              >
                {/* pastille du jour sur le rail */}
                <span
                  className={`absolute left-5 top-9 z-10 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-white transition-all duration-500 md:left-1/2 ${
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
                <div className="pl-12 md:grid md:grid-cols-2 md:gap-14 md:pl-0">
                  <div
                    className={
                      side === "right"
                        ? "md:col-start-2 md:mr-auto md:max-w-md"
                        : "md:col-start-1 md:ml-auto md:max-w-md"
                    }
                  >
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
