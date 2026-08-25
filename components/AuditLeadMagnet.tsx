"use client";

import { useState } from "react";

const CALENDLY_URL = "https://calendly.com/sunafilmsmedia/nouvelle-reunion";

const SIZES = ["Juste moi", "2 à 5", "6 à 15", "16 et +"];

// Départements + branches (systèmes que l'IA peut prendre en charge)
const DEPARTMENTS: { name: string; tasks: string[] }[] = [
  {
    name: "Ventes",
    tasks: [
      "Écrit tes scripts selon tes objections les plus communes",
      "Analyse ton taux de closing",
      "Te conseille les clients à relancer",
      "Prépare et envoie tes suivis",
    ],
  },
  {
    name: "Marketing",
    tasks: [
      "Analyse ton coût par lead et par client",
      "Te conseille sur tes publicités",
      "Crée tes publicités pour toi",
      "Écrit ton contenu et le planifie",
    ],
  },
  {
    name: "Service client",
    tasks: [
      "Lit tes courriels et te fait des rappels",
      "Répond aux questions fréquentes",
      "Analyse ton CRM",
      "Trie et classe chaque demande",
    ],
  },
  {
    name: "Opérations",
    tasks: [
      "Relance tes clients automatiquement",
      "Met à jour ton CRM tout seul",
      "Prépare tes documents et soumissions",
      "Automatise tes routines répétitives",
    ],
  },
  {
    name: "Admin & Finance",
    tasks: [
      "Classe tes factures dans le bon dossier",
      "Suit tes dépenses",
      "Résume tes courriels",
      "Prépare tes rapports",
    ],
  },
  {
    name: "Direction",
    tasks: [
      "Analyse tes chiffres en continu",
      "Résume tes réunions",
      "Suit tes KPI",
      "Prépare tes décisions",
    ],
  },
];

const TIME_SINKS = [
  "Suivis & relances",
  "Contenu & marketing",
  "Administratif & factures",
  "Réponses aux clients",
  "Rapports & chiffres",
];

type Answers = {
  sector: string;
  size: string;
  departments: string[];
  timeSink: string;
  name: string;
  email: string;
  consent: boolean;
};

const empty: Answers = {
  sector: "",
  size: "",
  departments: [],
  timeSink: "",
  name: "",
  email: "",
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

/* ---- Cerveau IA : arbre à 2 niveaux (départements + branches) ---- */
function OrgMap({ depts }: { depts: { name: string; tasks: string[] }[] }) {
  const list = depts.length ? depts : DEPARTMENTS.slice(0, 3);
  const W = 1000;
  const H = 680;
  const cx = W / 2;
  const cy = H / 2;
  const R1 = 150; // rayon des départements
  const R2 = 300; // rayon des branches
  const n = list.length;
  const deg = (d: number) => (d * Math.PI) / 180;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-hidden>
      {list.map((dept, i) => {
        const A = -90 + (360 / n) * i;
        const px = cx + R1 * Math.cos(deg(A));
        const py = cy + R1 * Math.sin(deg(A));
        const tasks = dept.tasks.slice(0, 3);
        const spread = 20;
        return (
          <g key={dept.name}>
            {/* branche centre -> département */}
            <line x1={cx} y1={cy} x2={px} y2={py} stroke="rgba(34,204,255,0.4)" strokeWidth="1.4" />

            {/* sous-branches -> tâches */}
            {tasks.map((t, j) => {
              const B = A + (j - (tasks.length - 1) / 2) * spread;
              const tx = cx + R2 * Math.cos(deg(B));
              const ty = cy + R2 * Math.sin(deg(B));
              const anchor = tx < cx - 10 ? "end" : tx > cx + 10 ? "start" : "middle";
              return (
                <g key={t}>
                  <line x1={px} y1={py} x2={tx} y2={ty} stroke="rgba(34,204,255,0.18)" strokeWidth="1" />
                  <circle cx={tx} cy={ty} r="3" fill="#22ccff" opacity="0.8" />
                  <text
                    x={anchor === "end" ? tx - 8 : anchor === "start" ? tx + 8 : tx}
                    y={ty + 3.5}
                    textAnchor={anchor}
                    fontSize="12.5"
                    fill="#9aa6ba"
                    fontFamily="Inter, sans-serif"
                  >
                    {t}
                  </text>
                </g>
              );
            })}

            {/* nœud département */}
            <circle cx={px} cy={py} r="7" fill="#22ccff" />
            <text
              x={px}
              y={py - 14}
              textAnchor="middle"
              fontSize="15"
              fontWeight="800"
              fill="#fff"
              fontFamily="Sora, Inter, sans-serif"
            >
              {dept.name}
            </text>
          </g>
        );
      })}

      {/* centre : le cerveau */}
      <circle cx={cx} cy={cy} r="34" fill="rgba(34,204,255,0.12)" stroke="rgba(34,204,255,0.55)" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r="46" fill="none" stroke="rgba(34,204,255,0.18)" />
      <text x={cx} y={cy + 5} textAnchor="middle" fontSize="14" fontWeight="800" fill="#22ccff">
        CERVEAU IA
      </text>
    </svg>
  );
}

export default function AuditLeadMagnet() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState<Answers>(empty);
  const [status, setStatus] = useState<"form" | "loading" | "done" | "error">("form");
  const [error, setError] = useState("");

  const set = (patch: Partial<Answers>) => setA((prev) => ({ ...prev, ...patch }));
  const toggleDept = (name: string) =>
    setA((prev) => ({
      ...prev,
      departments: prev.departments.includes(name)
        ? prev.departments.filter((d) => d !== name)
        : [...prev.departments, name],
    }));

  const STEPS = 5;
  const canNext =
    (step === 0 && a.sector.trim().length > 1) ||
    (step === 1 && a.size) ||
    (step === 2 && a.departments.length > 0) ||
    (step === 3 && a.timeSink) ||
    step === 4;

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
          company: a.sector,
          consent: a.consent,
          sector: a.sector,
          teamSize: a.size,
          tasks: `${a.timeSink} · ${a.departments.join(", ")}`,
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
          <OrgMap depts={shown} />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {shown.map((d) => (
            <div key={d.name} className="rounded-lg border border-white/10 bg-white/[0.02] p-5">
              <h4 className="font-display text-lg font-700 text-fluo-300">{d.name}</h4>
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
            On construit tes systèmes prioritaires en 3 jours, directement dans ton entreprise.
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
            Quels départements veux-tu soulager ?
          </p>
          <p className="mt-1 text-sm text-mist-soft">Choisis-en autant que tu veux.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {DEPARTMENTS.map((d) => (
              <Chip
                key={d.name}
                active={a.departments.includes(d.name)}
                onClick={() => toggleDept(d.name)}
              >
                {d.name}
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
          <div className="mt-4 flex flex-wrap gap-2">
            {TIME_SINKS.map((t) => (
              <Chip key={t} active={a.timeSink === t} onClick={() => set({ timeSink: t })}>
                {t}
              </Chip>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <p className="font-display text-xl font-700 text-white">
            Où on t&apos;envoie ta carte IA ?
          </p>
          <div className="mt-4 grid gap-3">
            <input
              value={a.name}
              onChange={(e) => set({ name: e.target.value })}
              placeholder="Ton nom"
              className={inputCls}
            />
            <input
              type="email"
              value={a.email}
              onChange={(e) => set({ email: e.target.value })}
              placeholder="toi@entreprise.com"
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
