"use client";

import { useState } from "react";
import BrainMap from "./BrainMap";

const CALENDLY_URL = "https://calendly.com/sunafilmsmedia/nouvelle-reunion";

const SIZES = ["Juste moi", "2 à 5", "6 à 15", "16 et +"];

// Les employés IA (offre finale) + leurs branches
const DEPARTMENTS: { name: string; icon: string; tasks: string[] }[] = [
  {
    name: "Directeur des ventes",
    icon: "💰",
    tasks: [
      "Analyse tes appels",
      "Scripts selon tes objections",
      "Suivis hebdomadaires",
      "Réactive tes clients dormants",
    ],
  },
  {
    name: "Client Success Manager",
    icon: "🤝",
    tasks: [
      "Onboarding de tes clients",
      "Suivis de satisfaction",
      "Répond aux demandes",
      "Améliore ta rétention",
    ],
  },
  {
    name: "Adjointe de direction",
    icon: "📋",
    tasks: [
      "Ton courriel du matin, résumé",
      "Brief avant chaque rendez-vous",
      "Met à jour ton CRM",
      "Chasse les paiements et documents manquants",
      "Ton radar quotidien",
    ],
  },
  {
    name: "CFO",
    icon: "📊",
    tasks: [
      "Classe tes factures",
      "Suit tes dépenses",
      "Prépare tes rapports",
      "Ta marge et tes KPI",
    ],
  },
  {
    name: "CMO complet",
    icon: "🎯",
    tasks: [
      "Définit ton ICP",
      "Idées, hooks et scripts (AEILA)",
      "Gère tes publicités (Meta)",
      "SEO et email marketing",
      "Crée tes statiques et ton contenu",
    ],
  },
];

const TIME_SINKS = [
  "Suivis & relances",
  "Contenu & marketing",
  "Administratif & factures",
  "Réponses aux clients",
  "Rapports & chiffres",
  "Prospection",
  "Prise de rendez-vous",
];

const AI_LEVELS = ["Je débute", "Je m'y connais un peu", "Je l'utilise déjà beaucoup"];
const AI_TOOLS = ["ChatGPT", "Claude", "Gemini", "Copilot", "Aucune pour l'instant", "Autre"];

type Answers = {
  sector: string;
  size: string;
  departments: string[];
  timeSinks: string[];
  aiLevel: string;
  aiTool: string;
  name: string;
  email: string;
  phone: string;
  consent: boolean;
};

const empty: Answers = {
  sector: "",
  size: "",
  departments: [],
  timeSinks: [],
  aiLevel: "",
  aiTool: "",
  name: "",
  email: "",
  phone: "",
  consent: false,
};

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-600 transition-colors ${
        active
          ? "border-fluo-400 bg-fluo-500/15 text-white"
          : "border-white/15 text-mist-soft hover:border-white/30 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}


export default function AuditLeadMagnet() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState<Answers>(empty);
  const [status, setStatus] = useState<"form" | "loading" | "done" | "error">("form");
  const [error, setError] = useState("");

  const set = (patch: Partial<Answers>) => setA((prev) => ({ ...prev, ...patch }));
  const toggleIn = (key: "departments" | "timeSinks", name: string) =>
    setA((prev) => ({
      ...prev,
      [key]: prev[key].includes(name)
        ? prev[key].filter((d) => d !== name)
        : [...prev[key], name],
    }));

  const STEPS = 6;
  const canNext =
    (step === 0 && a.sector.trim().length > 1) ||
    (step === 1 && Boolean(a.size)) ||
    (step === 2 && a.departments.length > 0) ||
    (step === 3 && a.timeSinks.length > 0) ||
    (step === 4 && Boolean(a.aiLevel) && Boolean(a.aiTool)) ||
    step === 5;

  async function submit() {
    if (!a.name || !a.email || !a.consent) {
      setError("Nom, courriel et consentement requis.");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: a.name,
          email: a.email,
          phone: a.phone,
          company: a.sector,
          consent: a.consent,
          sector: a.sector,
          teamSize: a.size,
          tasks: `${a.timeSinks.join(", ")} · ${a.departments.join(", ")}`,
          aiLevel: a.aiLevel,
          aiTool: a.aiTool,
          interest: "audit-ia",
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.stored) throw new Error(json.error ?? "Erreur");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  }

  // ---- Résultat : la carte ----
  if (status === "done") {
    const chosen = DEPARTMENTS.filter((d) => a.departments.includes(d.name));
    const shown = chosen.length ? chosen : DEPARTMENTS.slice(0, 4);
    return (
      <div className="card p-6 sm:p-10">
        <div className="text-center">
          <span className="text-xs font-600 uppercase tracking-widest text-fluo-300">
            Ton audit IA
          </span>
          <h3 className="mt-3 font-display text-2xl font-800 text-white sm:text-3xl">
            Voici l&apos;équipe IA de ton entreprise.
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-mist-soft">
            Pour une entreprise comme la tienne{a.sector ? ` (${a.sector})` : ""}, voici ce que
            l&apos;IA pourrait prendre en charge, département par département.
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-3xl">
          <BrainMap depts={shown} />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {shown.map((d) => (
            <div key={d.name} className="rounded-lg border border-white/10 bg-white/[0.02] p-5">
              <h4 className="font-display text-lg font-700 text-fluo-300">
                <span className="mr-1.5">{d.icon}</span>
                {d.name}
              </h4>
              <ul className="mt-3 space-y-2">
                {d.tasks.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-white/90">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none bg-fluo-400" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-fluo-500 px-8 py-4 font-display font-800 text-ink-950 transition-colors hover:bg-fluo-400 glow-fluo"
          >
            On l&apos;installe pour vrai ? Réserve un appel
          </a>
          <p className="mt-3 text-xs text-mist-soft/70">
            On construit tes systèmes prioritaires en 7 jours, directement dans ton entreprise.
          </p>
        </div>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-mist-soft/60 outline-none transition-colors focus:border-fluo-400/60 focus:bg-white/[0.05]";

  return (
    <div className="card p-6 sm:p-8">
      {/* progression */}
      <div className="mb-6 flex items-center gap-1.5">
        {Array.from({ length: STEPS }).map((_, i) => (
          <span
            key={i}
            className={`h-1 flex-1 rounded-full ${i <= step ? "bg-fluo-400" : "bg-white/12"}`}
          />
        ))}
      </div>

      {step === 0 && (
        <div>
          <p className="font-display text-xl font-700 text-white">Tu fais quoi, au juste ?</p>
          <p className="mt-1 text-sm text-mist-soft">Ton secteur ou ton type d&apos;entreprise.</p>
          <input
            autoFocus
            value={a.sector}
            onChange={(e) => set({ sector: e.target.value })}
            placeholder="Ex. courtier immobilier, agence, clinique, e-commerce…"
            className={`${inputCls} mt-4`}
          />
        </div>
      )}

      {step === 1 && (
        <div>
          <p className="font-display text-xl font-700 text-white">Vous êtes combien ?</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {SIZES.map((s) => (
              <Chip key={s} active={a.size === s} onClick={() => set({ size: s })}>
                {s}
              </Chip>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <p className="font-display text-xl font-700 text-white">
            Quels employés IA t&apos;intéressent le plus ?
          </p>
          <p className="mt-1 text-sm text-mist-soft">Choisis ceux qui te parlent le plus.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {DEPARTMENTS.map((d) => (
              <Chip
                key={d.name}
                active={a.departments.includes(d.name)}
                onClick={() => toggleIn("departments", d.name)}
              >
                {d.icon} {d.name}
              </Chip>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <p className="font-display text-xl font-700 text-white">
            Qu&apos;est-ce qui te fait perdre le plus de temps ?
          </p>
          <p className="mt-1 text-sm text-mist-soft">Choisis-en autant que tu veux.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {TIME_SINKS.map((t) => (
              <Chip
                key={t}
                active={a.timeSinks.includes(t)}
                onClick={() => toggleIn("timeSinks", t)}
              >
                {t}
              </Chip>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-6">
          <div>
            <p className="font-display text-xl font-700 text-white">Ton niveau avec l&apos;IA ?</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {AI_LEVELS.map((l) => (
                <Chip key={l} active={a.aiLevel === l} onClick={() => set({ aiLevel: l })}>
                  {l}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <p className="font-display text-xl font-700 text-white">
              Quelle IA tu utilises le plus souvent ?
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {AI_TOOLS.map((t) => (
                <Chip key={t} active={a.aiTool === t} onClick={() => set({ aiTool: t })}>
                  {t}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 5 && (
        <div>
          <p className="font-display text-xl font-700 text-white">
            Où on t&apos;envoie ta carte IA ?
          </p>
          <div className="mt-4 grid gap-3">
            <input
              value={a.name}
              onChange={(e) => set({ name: e.target.value })}
              placeholder="Nom complet"
              className={inputCls}
            />
            <input
              type="email"
              value={a.email}
              onChange={(e) => set({ email: e.target.value })}
              placeholder="toi@entreprise.com"
              className={inputCls}
            />
            <input
              type="tel"
              value={a.phone}
              onChange={(e) => set({ phone: e.target.value })}
              placeholder="Téléphone"
              className={inputCls}
            />
            <label className="flex items-start gap-3 text-sm text-mist-soft">
              <input
                type="checkbox"
                checked={a.consent}
                onChange={(e) => set({ consent: e.target.checked })}
                className="mt-0.5 h-4 w-4 flex-none accent-fluo-500"
              />
              <span>J&apos;accepte d&apos;être contacté par Le Cloud au sujet de mon audit.</span>
            </label>
          </div>
        </div>
      )}

      {status === "error" && (
        <p className="mt-4 rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      )}

      {/* navigation */}
      <div className="mt-6 flex items-center justify-between gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="text-sm font-600 text-mist-soft transition-colors hover:text-white"
          >
            ← Retour
          </button>
        ) : (
          <span />
        )}

        {step < STEPS - 1 ? (
          <button
            type="button"
            disabled={!canNext}
            onClick={() => setStep((s) => s + 1)}
            className="rounded-full bg-fluo-500 px-6 py-3 font-display font-700 text-ink-950 transition-colors hover:bg-fluo-400 disabled:opacity-40"
          >
            Continuer
          </button>
        ) : (
          <button
            type="button"
            disabled={status === "loading"}
            onClick={submit}
            className="rounded-full bg-fluo-500 px-6 py-3 font-display font-800 text-ink-950 transition-colors hover:bg-fluo-400 disabled:opacity-60 glow-fluo"
          >
            {status === "loading" ? "Construction…" : "Construire ma carte IA"}
          </button>
        )}
      </div>
    </div>
  );
}
