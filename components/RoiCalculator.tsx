"use client";

import { useEffect, useMemo, useState } from "react";

const HOURS_PER_WEEK = 40; // équivalent d'un poste à temps plein

function Slider({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-sm text-mist-soft">{label}</span>
        <span className="font-display text-lg font-700 text-white">
          {value}
          <span className="ml-1 text-sm font-400 text-mist-soft">{suffix}</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-md outline-none
          [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded-sm [&::-webkit-slider-thumb]:bg-fluo-400
          [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-sm
          [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-fluo-400"
        style={{
          background: `linear-gradient(90deg, #22ccff ${pct}%, rgba(255,255,255,0.10) ${pct}%)`,
        }}
      />
    </div>
  );
}

export default function RoiCalculator() {
  const [employees, setEmployees] = useState(1);
  const [hourlyRate, setHourlyRate] = useState(30);

  const { annualHours, annualCost } = useMemo(() => {
    const annualHours = employees * HOURS_PER_WEEK * 52;
    const annualCost = annualHours * hourlyRate;
    return { annualHours, annualCost };
  }, [employees, hourlyRate]);

  // Rendu disponible pour le formulaire de candidature
  useEffect(() => {
    try {
      window.sessionStorage.setItem(
        "lecloud_roi",
        JSON.stringify({ employees, hoursPerWeek: HOURS_PER_WEEK, hourlyRate, annualCost })
      );
    } catch {
      /* stockage indisponible, ignoré */
    }
  }, [employees, hourlyRate, annualCost]);

  const fmt = (n: number) =>
    new Intl.NumberFormat("fr-CA", { maximumFractionDigits: 0 }).format(n);

  return (
    <div className="card grid gap-8 p-6 sm:p-8 md:grid-cols-2 md:items-center">
      <div className="space-y-6">
        <Slider
          label="Postes concernés"
          value={employees}
          min={1}
          max={10}
          step={1}
          suffix="pers."
          onChange={setEmployees}
        />

        <div>
          <div className="mb-1 flex items-baseline justify-between">
            <span className="text-sm text-mist-soft">Heures / semaine sur les mêmes tâches</span>
            <span className="font-display text-lg font-700 text-white">
              40<span className="ml-1 text-sm font-400 text-mist-soft">h</span>
            </span>
          </div>
          <p className="text-xs text-mist-soft/70">L&apos;équivalent d&apos;un poste à temps plein.</p>
        </div>

        <Slider
          label="Coût horaire moyen"
          value={hourlyRate}
          min={20}
          max={100}
          step={5}
          suffix="$/h"
          onChange={setHourlyRate}
        />
      </div>

      <div className="relative overflow-hidden rounded-md border border-fluo-400/25 bg-fluo-500/[0.06] p-8 text-center">
        <p className="text-sm uppercase tracking-widest text-fluo-300">Coût du travail répétitif</p>
        <p className="mt-3 font-display text-5xl font-800 text-white sm:text-6xl">
          {fmt(annualCost)}&nbsp;$
        </p>
        <p className="mt-1 text-sm text-mist-soft">par année</p>
        <div className="mt-6 border-t border-white/10 pt-4 text-sm text-mist-soft">
          soit <span className="font-600 text-white">{fmt(annualHours)} heures</span> de travail
          répétitif chaque année
        </div>
        <a
          href="#candidature"
          className="mt-6 inline-flex rounded-full bg-fluo-500 px-6 py-3 text-sm font-600 text-ink-950 transition-colors hover:bg-fluo-400"
        >
          Récupérer ce budget
        </a>
      </div>
    </div>
  );
}
