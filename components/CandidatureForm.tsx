"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-mist-soft/60 outline-none transition-colors focus:border-fluo-400/60 focus:bg-white/[0.05]";

export default function CandidatureForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    let roi: unknown = null;
    try {
      const raw = window.sessionStorage.getItem("lecloud_roi");
      if (raw) roi = JSON.parse(raw);
    } catch {
      /* ignore */
    }

    const payload = {
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      sector: String(data.get("sector") ?? ""),
      teamSize: String(data.get("teamSize") ?? ""),
      tasks: String(data.get("tasks") ?? ""),
      interest: String(data.get("interest") ?? ""),
      consent: data.get("consent") === "on",
      roi,
    };

    if (!payload.consent) {
      setStatus("error");
      setError("Merci de confirmer ton consentement.");
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.stored) {
        throw new Error(json.error ?? "Une erreur est survenue.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8 text-center sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-md bg-fluo-500/15 ring-1 ring-fluo-400/40">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="#22ccff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-2xl font-700 text-white">Candidature reçue</h3>
        <p className="mx-auto mt-3 max-w-md text-mist-soft">
          Merci. On évalue chaque candidature pour confirmer qu'on peut créer un rendement
          mesurable. On te revient rapidement pour la suite.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm text-mist-soft">Nom complet *</label>
          <input name="name" required placeholder="Ton nom" className={inputCls} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm text-mist-soft">Entreprise *</label>
          <input name="company" required placeholder="Nom de l'entreprise" className={inputCls} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm text-mist-soft">Courriel *</label>
          <input name="email" type="email" required placeholder="toi@entreprise.com" className={inputCls} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm text-mist-soft">Téléphone</label>
          <input name="phone" type="tel" placeholder="(000) 000-0000" className={inputCls} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm text-mist-soft">Secteur d'activité</label>
          <input name="sector" placeholder="Ex. immobilier, construction, services…" className={inputCls} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm text-mist-soft">Taille de l'équipe</label>
          <select name="teamSize" defaultValue="" className={inputCls}>
            <option value="" disabled>Sélectionner…</option>
            <option value="1-3">1 à 3</option>
            <option value="4-10">4 à 10</option>
            <option value="11-25">11 à 25</option>
            <option value="26-50">26 à 50</option>
            <option value="50+">50 et +</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-sm text-mist-soft">
          Quelles tâches répétitives coûtent le plus cher à ton entreprise ?
        </label>
        <textarea
          name="tasks"
          rows={4}
          placeholder="Suivis de prospects, réponses aux mêmes questions, préparation de documents, mise à jour du CRM…"
          className={inputCls}
        />
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-sm text-mist-soft">Ce qui t'intéresse</label>
        <select name="interest" defaultValue="" className={inputCls}>
          <option value="" disabled>Sélectionner…</option>
          <option value="makeover">Le Makeover IA : implantation 3 jours</option>
          <option value="full-access">Full Access</option>
          <option value="agency">Agency : partenariat</option>
          <option value="pas-sur">Pas encore sûr, je veux en parler</option>
        </select>
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-mist-soft">
        <input
          name="consent"
          type="checkbox"
          className="mt-0.5 h-4 w-4 flex-none accent-fluo-500"
        />
        <span>
          J'accepte d'être contacté par Le Cloud au sujet de ma candidature et je consens au
          traitement de mes informations.
        </span>
      </label>

      {status === "error" && (
        <p className="mt-4 rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-md bg-fluo-500 px-6 py-4 font-display font-700 text-ink-950 transition-all hover:bg-fluo-400 disabled:opacity-60 glow-fluo"
      >
        {status === "loading" ? "Envoi en cours…" : "Soumettre mon entreprise"}
      </button>
      <p className="mt-3 text-center text-xs text-mist-soft/70">
        Les candidatures sont évaluées afin de confirmer qu'on peut créer un rendement mesurable.
      </p>
    </form>
  );
}
