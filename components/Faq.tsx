"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "Comment je contrôle mon employé IA au quotidien ?",
    a: "Tout se passe dans une seule conversation Claude. Pas de logiciel à apprendre, pas de dashboard compliqué : tu écris ce que tu veux dans le chat, comme tu le ferais avec un employé humain, et il l'exécute directement dans tes outils (courriel, CRM, calendrier, etc.).",
  },
  {
    q: "Est-ce que je dois utiliser plusieurs applications pour que ça marche ?",
    a: "Non, c'est justement le point : ton employé IA centralise tout dans un seul chat sur Claude. Il agit dans tes outils existants en arrière-plan, toi tu n'as qu'une seule conversation à gérer.",
  },
  {
    q: "Et si j'ai pas d'employé, mais c'est moi qui fais les tâches répétitives ?",
    a: "C'est même le scénario idéal. On automatise les tâches qui t'occupent TOI, depuis un seul chat que tu contrôles. Tu récupères des heures pour vendre, servir tes clients et faire croître ton entreprise au lieu de faire de l'administratif. Pas besoin d'une équipe pour que ça vaille le coup.",
  },
  {
    q: "Combien de temps ça prend avant que tout marche ?",
    a: "Trois jours d'implantation. Ton employé IA est branché à tes outils, entraîné sur ton business, et testé dans de vraies situations avant qu'on te le remette.",
  },
  {
    q: "Est-ce que j'ai besoin d'être un expert pour tout contrôler ?",
    a: "Non. Si tu sais écrire un message texte, tu sais utiliser ton employé IA. On te forme après l'installation à lui parler comme à un employé, aucune compétence technique requise.",
  },
  {
    q: "Allez-vous réellement remplacer un employé ?",
    a: "On automatise les tâches répétitives qui prennent le temps d'un employé : service client de premier niveau, suivis, classement, planification. Les tâches qui demandent du jugement humain restent humaines ; ton employé IA prend en charge le reste, depuis son propre chat.",
  },
  {
    q: "Est-ce que je dois déjà utiliser des outils d'IA ?",
    a: "Non. On connecte ton employé IA aux outils que tu utilises déjà (Gmail, CRM, calendrier, etc.). Tu n'as rien à apprendre de nouveau à part comment lui parler.",
  },
  {
    q: "Faut-il changer tous nos logiciels ?",
    a: "Non. Zéro changement de logiciel requis. Ton employé IA se branche à ta stack existante et devient l'interface unique qui la fait fonctionner ensemble.",
  },
  {
    q: "Mes employés vont-ils savoir utiliser les systèmes ?",
    a: "Oui. Toute l'équipe est formée à parler au même chat Claude : pas de courbe d'apprentissage technique, juste une nouvelle habitude de communication.",
  },
  {
    q: "Est-ce que tout sera terminé en trois jours ?",
    a: "L'implantation initiale, oui. La portée est fixée pendant l'audit ; selon la complexité, certains systèmes peuvent s'étendre sur une phase de suivi supplémentaire.",
  },
  {
    q: "Comment mesurez-vous les résultats ?",
    a: "Avec des tableaux de bord par département qui se mettent à jour automatiquement (leads, revenus, temps sauvé) pour que tu voies exactement ce que ton employé IA accomplit, même si tu pilotes tout depuis un seul chat.",
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
                className={`flex h-7 w-7 flex-none items-center justify-center rounded-md border border-fluo-400/40 text-fluo-300 transition-transform duration-300 ${
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
