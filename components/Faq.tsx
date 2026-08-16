"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "Allez-vous réellement remplacer un employé ?",
    a: "Notre objectif n'est pas de décider qui doit rester ou partir. Nous automatisons les tâches répétitives qui occupent l'équivalent d'un poste, afin que ton équipe puisse se concentrer sur les ventes, les clients et les décisions importantes.",
  },
  {
    q: "Est-ce que je dois déjà utiliser des outils d'IA ?",
    a: "Non. Nous pouvons partir de zéro ou améliorer les outils que tu utilises déjà.",
  },
  {
    q: "Faut-il changer tous nos logiciels ?",
    a: "Généralement, non. Nous cherchons d'abord à connecter et optimiser les systèmes déjà utilisés par ton entreprise.",
  },
  {
    q: "Mes employés vont-ils savoir utiliser les systèmes ?",
    a: "Oui. La formation et l'adoption font partie de l'implantation. Nous construisons les systèmes avec les personnes qui devront les utiliser.",
  },
  {
    q: "Est-ce que tout sera terminé en trois jours ?",
    a: "Les systèmes prioritaires définis pendant l'audit seront construits et activés pendant l'intervention. Les projets nécessitant du développement plus complexe pourront faire l'objet d'une deuxième phase.",
  },
  {
    q: "Comment mesurez-vous les résultats ?",
    a: "Avant l'implantation, nous mesurons le temps consacré aux tâches ciblées, leur fréquence et leur coût. Après l'implantation, nous comparons les heures économisées, la vitesse d'exécution et la capacité supplémentaire créée.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="card overflow-hidden">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-600 text-white sm:text-lg">
                {item.q}
              </span>
              <span
                className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-fluo-400/40 text-fluo-300 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-relaxed text-mist-soft">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
