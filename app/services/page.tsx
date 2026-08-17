import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services · Le Cloud | Tout ce qu'on peut installer",
  description:
    "Le catalogue complet des systèmes IA que Le Cloud installe dans ton entreprise : audit, cerveau IA, routines, CRM, agents, marketing, tableaux de bord et plus. Ce qu'on installe et le résultat obtenu.",
};

type Service = { title: string; install: string; result: string };
type Category = { name: string; blurb: string; services: Service[] };

const CATEGORIES: Category[] = [
  {
    name: "Fondations IA",
    blurb: "Le socle : ce qu'on met en place pour que tout le reste tienne.",
    services: [
      {
        title: "Audit IA",
        install: "Analyse des tâches, processus et pertes de temps.",
        result: "Identification des automatisations les plus rentables.",
      },
      {
        title: "Cerveau IA",
        install: "Base de connaissances contenant les offres, processus et documents.",
        result: "Information accessible rapidement et réponses cohérentes.",
      },
      {
        title: "Intégration des logiciels",
        install: "Connexion entre CRM, formulaires, courriels et applications.",
        result: "Moins de copier-coller et meilleure circulation des données.",
      },
      {
        title: "Formation de l'équipe",
        install: "Formation pratique et documentation des systèmes.",
        result: "Adoption réelle de l'IA et autonomie de l'entreprise.",
      },
    ],
  },
  {
    name: "Automatisation des opérations",
    blurb: "Moins de travail manuel, plus de temps pour ce qui compte.",
    services: [
      {
        title: "Routines IA",
        install: "Automatisation des tâches administratives répétitives.",
        result: "Moins de travail manuel, d'erreurs et d'heures perdues.",
      },
      {
        title: "Applications internes",
        install: "Outils pour factures, documents, formulaires et opérations.",
        result: "Information centralisée et processus simplifiés.",
      },
      {
        title: "Tableau de bord d'entreprise",
        install: "Suivi des revenus, dépenses, clients, leads et performances.",
        result: "Meilleure visibilité sur l'entreprise.",
      },
    ],
  },
  {
    name: "Acquisition & CRM",
    blurb: "Attirer, centraliser et convertir plus de prospects.",
    services: [
      {
        title: "Lead magnet IA",
        install: "Calculateur, diagnostic, quiz ou application personnalisée.",
        result: "Plus de prospects et une offre différente de la concurrence.",
      },
      {
        title: "CRM propulsé par l'IA",
        install: "Pipeline, fiches clients, agent IA et automatisations.",
        result: "Prospects centralisés et meilleur suivi des occasions.",
      },
      {
        title: "Qualification des prospects",
        install: "Questions et classement automatiques des leads.",
        result: "L'équipe se concentre sur les prospects les plus sérieux.",
      },
      {
        title: "Prise de rendez-vous",
        install: "Qualification, calendrier, rappels et confirmations.",
        result: "Plus de rendez-vous et moins d'absences.",
      },
      {
        title: "Suivis automatisés",
        install: "Séquences SMS et courriel selon le comportement du prospect.",
        result: "Moins de leads oubliés et plus de conversions.",
      },
    ],
  },
  {
    name: "Communication client",
    blurb: "Répondre vite, en tout temps, sans surcharger l'équipe.",
    services: [
      {
        title: "Agent IA par texte",
        install: "Réponses automatisées par SMS, courriel ou messagerie.",
        result: "Réponses plus rapides, 24/7, sans surcharger l'équipe.",
      },
      {
        title: "Marketing par courriel",
        install: "Séquences d'accueil, réchauffement, relance et réactivation.",
        result: "Communication régulière sans travail manuel.",
      },
    ],
  },
  {
    name: "Marketing & contenu",
    blurb: "Produire plus, plus vite, cohérent avec ta marque.",
    services: [
      {
        title: "Gestion publicitaire avec l'IA",
        install: "Claude connecté aux données de Facebook Ads.",
        result: "Analyse plus rapide et meilleures décisions publicitaires.",
      },
      {
        title: "Projets marketing IA",
        install: "Espaces spécialisés pour les offres, publicités, contenu et ventes.",
        result: "Marketing plus rapide et cohérent avec la marque.",
      },
      {
        title: "Recyclage de contenu",
        install: "Transformation des vidéos en publications, courriels et scripts.",
        result: "Plus de contenu produit à partir de chaque tournage.",
      },
      {
        title: "Production vidéo",
        install: "Journée de tournage avec 10 à 15 vidéos.",
        result: "Banque de contenu prête pour le marketing et les publicités.",
      },
    ],
  },
  {
    name: "Analyse & optimisation",
    blurb: "Comprendre ce qui se passe pour l'améliorer.",
    services: [
      {
        title: "Microsoft Clarity",
        install: "Enregistrements de sessions, cartes de chaleur et suivi des clics.",
        result: "Compréhension des abandons et amélioration des conversions.",
      },
      {
        title: "Analyse des appels de vente",
        install: "Transcription, résumé, score et détection des objections.",
        result: "Meilleur coaching et amélioration du taux de fermeture.",
      },
    ],
  },
];

const TOTAL = CATEGORIES.reduce((n, c) => n + c.services.length, 0);

export default function ServicesPage() {
  return (
    <>
      <Nav />

      <main>
        {/* EN-TÊTE */}
        <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
          <div className="aura left-1/2 top-0 h-80 w-[560px] -translate-x-1/2 bg-fluo-600/20" />
          <div className="relative mx-auto max-w-4xl px-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-md border border-fluo-400/25 bg-fluo-500/[0.07] px-4 py-1.5 text-xs font-600 uppercase tracking-widest text-fluo-300">
              {TOTAL} services · 6 catégories
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-800 leading-[1.08] text-white sm:text-5xl">
              Tout ce qu&apos;on peut installer dans ton entreprise.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mist-soft">
              On ne touche pas à tout d&apos;un coup. Pendant l&apos;audit, on choisit les systèmes
              au meilleur rendement pour toi. Voici le menu complet : ce qu&apos;on installe, et le
              résultat que ça donne.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/#candidature"
                className="w-full rounded-full bg-fluo-500 px-7 py-4 font-display font-700 text-ink-950 transition-all hover:bg-fluo-400 glow-fluo sm:w-auto"
              >
                Soumettre mon entreprise
              </a>
              <a
                href="/#methode"
                className="w-full rounded-full border border-white/15 px-7 py-4 font-600 text-white transition-colors hover:bg-white/5 sm:w-auto"
              >
                Voir la méthode
              </a>
            </div>
          </div>
        </section>

        {/* CATÉGORIES */}
        <div className="mx-auto max-w-6xl space-y-16 px-5 pb-16 sm:pb-24">
          {CATEGORIES.map((cat) => (
            <section key={cat.name}>
              <div className="mb-8 flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-800 text-white sm:text-3xl">
                    {cat.name}
                  </h2>
                  <p className="mt-1 text-mist-soft">{cat.blurb}</p>
                </div>
                <span className="text-sm text-mist-soft/70">
                  {cat.services.length} service{cat.services.length > 1 ? "s" : ""}
                </span>
              </div>

              <div>
                {cat.services.map((s) => (
                  <div
                    key={s.title}
                    className="grid gap-x-8 gap-y-1.5 border-b border-white/10 py-6 md:grid-cols-12"
                  >
                    <h3 className="font-display text-lg font-700 text-white md:col-span-4">
                      {s.title}
                    </h3>
                    <p className="leading-relaxed text-mist-soft md:col-span-5">{s.install}</p>
                    <p className="flex items-start gap-2 text-sm text-fluo-300 md:col-span-3">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="mt-1 flex-none"
                      >
                        <path
                          d="M5 12h14m-6-6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{s.result}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="border-t border-white/10 bg-ink-900 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="font-display text-3xl font-800 text-white sm:text-4xl">
              On choisit ensemble par où commencer.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-mist-soft">
              Pas besoin de tout installer d&apos;un coup. On priorise les systèmes qui te
              rapportent le plus vite, et on bâtit à partir de là.
            </p>
            <a
              href="/#candidature"
              className="mt-8 inline-flex rounded-full bg-fluo-500 px-7 py-4 font-display font-700 text-ink-950 transition-colors hover:bg-fluo-400 glow-fluo"
            >
              Bâtir mon employé IA
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
