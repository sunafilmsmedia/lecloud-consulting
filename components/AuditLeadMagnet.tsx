"use client";

import { useState } from "react";

const CALENDLY_URL = "https://calendly.com/sunafilmsmedia/nouvelle-reunion";

const SIZES = ["Juste moi", "2 à 5", "6 à 15", "16 et +"];

// Départements + tâches simples que l'IA peut prendre en charge
const DEPARTMENTS: { name: string; tasks: string[] }[] = [
  { name: "Marketing", tasks: ["Génère tes idées de contenu", "Recycle tes vidéos en publications", "Planifie tout ton mois"] },
  { name: "Ventes", tasks: ["Écrit tes scripts d'appel", "Qualifie tes leads", "Relance chaque prospect"] },
  { name: "Opérations", tasks: ["Relance tes clients", "Met à jour ton CRM", "Prépare tes documents"] },
  { name: "Service client", tasks: ["Répond aux questions fréquentes", "Trie et classe les demandes", "Suit chaque dossier"] },
  { name: "Admin & Finance", tasks: ["Classe tes factures", "Résume tes courriels", "Prépare tes rapports"] },
  { name: "Direction", tasks: ["Analyse tes chiffres", "Résume tes réunions", "Prépare tes décisions"] },
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

/* ---- Carte radiale de l'équipe IA ---- */
function OrgMap({ depts }: { depts: string[] }) {
  const list = depts.length ? depts : DEPARTMENTS.slice(0, 4).map((d) => d.name);
  const W = 640;
  const H = 420;
  const cx = W / 2;
  const cy = H / 2;
  const rx = 230;
  const ry = 150;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-hidden>
      {list.map((name, i) => {
        const ang = (-90 + (360 / list.length) * i) * (Math.PI / 180);
        const x = cx + rx * Math.cos(ang);
        const y = cy + ry * Math.sin(ang);
        const anchor = x < cx - 20 ? "end" : x > cx + 20 ? "start" : "middle";
        return (
          <g key={name}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(34,204,255,0.35)" strokeWidth="1" />
            <circle cx={x} cy={y} r="4" fill="#22ccff" />
            <text
              x={anchor === "end" ? x - 10 : anchor === "start" ? x + 10 : x}
              y={y + 4}
              textAnchor={anchor}
              fontSize="14"
              fontWeight="700"
              fill="#fff"
              fontFamily="Sora, Inter, sans-serif"
            >
              {name}
            </text>
          </g>
        );
      })}
      {/* centre */}
      <circle cx={cx} cy={cy} r="26" fill="rgba(34,204,255,0.12)" stroke="rgba(34,204,255,0.5)" />
      <text x={cx} y={cy + 5} textAnchor="middle" fontSize="13" fontWeight="800" fill="#22ccff">
        TOI
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

        <div className="mx-auto mt-6 max-w-2xl">
          <OrgMap depts={shown.map((d) => d.name)} />
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
