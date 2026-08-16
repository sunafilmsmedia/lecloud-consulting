"use client";

import { useMemo, useState } from "react";

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
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none
          [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-fluo-400
          [&::-webkit-slider-thumb]:shadow-[0_0_14px_3px_rgba(34,204,255,0.7)]
          [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-fluo-400"
        style={{
          background: `linear-gradient(90deg, #22ccff ${pct}%, rgba(255,255,255,0.10) ${pct}%)`,
        }}
      />
    </div>
  );
}

export default function RoiCalculator() {
  const [employees, setEmployees] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(30);

  const { annualHours, annualCost } = useMemo(() => {
    const annualHours = employees * hoursPerWeek * 52;
    const annualCost = annualHours * hourlyRate;
    return { annualHours, annualCost };
  }, [employees, hoursPerWeek, hourlyRate]);

  // Rendu disponible pour le formulaire de candidature
  if (typeof window !== "undefined") {
    try {
      window.sessionStorage.setItem(
        "lecloud_roi",
        JSON.stringify({ employees, hoursPerWeek, hourlyRate, annualCost })
      );
    } catch {
      /* stockage indisponible — ignoré */
    }
  }

  const fmt = (n: number) =>
    new Intl.NumberFormat("fr-CA", { maximumFractionDigits: 0 }).format(n);

  return (
    <div className="card grid gap-8 p-6 sm:p-8 md:grid-cols-2 md:items-center">
      <div className="space-y-6">
        <Slider
          label="Employés touchés"
          value={employees}
          min={1}
          max={20}
          step={1}
          suffix="pers."
          onChange={setEmployees}
        />
        <Slider
          label="Heures / semaine sur des tâches répétitives"
          value={hoursPerWeek}
          min={1}
          max={30}
          step={1}
          suffix="h"
          onChange={setHoursPerWeek}
        />
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

      <div className="relative overflow-hidden rounded-2xl border border-fluo-400/25 bg-fluo-500/[0.06] p-8 text-center">
        <div className="aura -right-16 -top-16 h-40 w-40 bg-fluo-500/40" />
        <p className="relative text-sm uppercase tracking-widest text-fluo-300">
          Coût du travail répétitif
        </p>
        <p className="relative mt-3 font-display text-5xl font-800 text-white sm:text-6xl">
          {fmt(annualCost)}&nbsp;$
        </p>
        <p className="relative mt-1 text-sm text-mist-soft">par année</p>
        <div className="relative mt-6 border-t border-white/10 pt-4 text-sm text-mist-soft">
          soit <span className="font-600 text-white">{fmt(annualHours)} heures</span> de
          travail répétitif chaque année
        </div>
        <a
          href="#candidature"
          className="relative mt-6 inline-flex rounded-full bg-fluo-500 px-6 py-3 text-sm font-600 text-ink-950 transition-colors hover:bg-fluo-400"
        >
          Récupérer ce budget
        </a>
      </div>
    </div>
  );
}
