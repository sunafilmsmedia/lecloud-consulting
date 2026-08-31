import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services & packages",
  description:
    "Les deux packages Le Cloud AI et les extras : L'Équipe IA (5 employés), Le CMO + l'Équipe, CRM + bot IA, sessions de tournage, production de publicités et retainer.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services & packages · Le Cloud AI",
    description: "Les deux packages et les extras, ce que le client reçoit.",
    url: "/services",
  },
};

const CALENDLY_URL = "https://calendly.com/sunafilmsmedia/nouvelle-reunion";

type Item = { icon?: string; name: string; does: string };

const P1_EMPLOYEES: Item[] = [
  { icon: "🧠", name: "Le Stratège Marketing", does: "ICP, construction d'offres, scripts d'ads et publicités statiques." },
  { icon: "📋", name: "L'Adjointe", does: "Courriels, brief avant-RDV, CRM automatique, chasse aux documents manquants, radar quotidien." },
  { icon: "🎯", name: "Le Marketeur", does: "SEO, gestion des publicités (Facebook), email marketing, veille concurrentielle." },
  { icon: "💰", name: "Le Coach de vente", does: "Analyse d'appels, scripts selon tes objections, suivis, réactivation des dormants." },
  { icon: "📊", name: "Le Rapport CEO", does: "Bilan mensuel consolidé de ton entreprise." },
];

const P1_INCLUDES = [
  "Installation à distance en 7 jours",
  "Formation pour le contrôler toi-même",
  "3 mois de maintenance (communauté + tickets)",
];

const P2_ADDS: Item[] = [
  { icon: "🎬", name: "Système de contenu", does: "Sous-titres et publication automatiques via Drive : tu approuves, ça publie." },
  { icon: "🧠", name: "Plan de contenu mensuel", does: "Généré par ton Stratège IA : idées, hooks, scripts et horaire de publication." },
];

const EXTRAS: Item[] = [
  { name: "CRM + bot IA", does: "GoHighLevel complet, bot conversationnel, snapshot configuré pour ta niche. L'accès à la communauté Skool vient avec." },
  { name: "Session de tournage", does: "Demi-journée avec notre équipe, 10 à 15 clips organiques pour ton contenu." },
  { name: "Production de publicités", does: "Ton Stratège IA écrit le script, on tourne, on monte et on livre. En lot pour tester." },
  { name: "Retainer · Accès", does: "Communauté (Skool) + CRM + support IA (tickets)." },
];

function Row({ item }: { item: Item }) {
  return (
    <div className="grid gap-x-6 gap-y-1 border-b border-white/10 py-4 last:border-0 md:grid-cols-12">
      <div className="flex items-center gap-2 md:col-span-4">
        {item.icon && <span className="text-lg leading-none">{item.icon}</span>}
        <span className="font-display text-base font-700 text-white">{item.name}</span>
      </div>
      <p className="text-sm leading-relaxed text-mist-soft md:col-span-8">{item.does}</p>
    </div>
  );
}

function PriceTag() {
  return (
    <span className="inline-flex rounded-full border border-fluo-400/30 bg-fluo-500/10 px-3 py-1 text-xs font-600 text-fluo-300">
      Sur demande
    </span>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Nav />

      <main>
        {/* EN-TÊTE */}
        <section className="relative overflow-hidden pt-32 pb-8 sm:pt-40">
          <div className="aura left-1/2 top-0 h-80 w-[560px] -translate-x-1/2 bg-fluo-600/20" />
          <div className="relative mx-auto max-w-3xl px-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-md border border-fluo-400/25 bg-fluo-500/[0.07] px-4 py-1.5 text-xs font-600 uppercase tracking-widest text-fluo-300">
              Services & packages
            </span>
            <h1 className="mx-auto mt-6 font-display text-4xl font-800 leading-[1.08] text-white sm:text-5xl">
              Deux packages, une seule <span className="accent">équipe IA.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mist-soft">
              Exactement ce que tu reçois. Les prix se donnent en appel, selon ton contexte.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl space-y-8 px-5 pb-8">
          {/* PACKAGE 1 */}
          <div className="card p-6 sm:p-8">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-2xl font-800 text-white">Package 1 · L&apos;Équipe IA</h2>
              <PriceTag />
            </div>
            <p className="mb-4 text-sm text-mist-soft">
              Tes 5 employés IA essentiels, installés à distance et prêts à travailler.
            </p>
            <div>
              {P1_EMPLOYEES.map((e) => (
                <Row key={e.name} item={e} />
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {P1_INCLUDES.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-3 py-1.5 text-xs text-white/90"
                >
                  <span className="h-1.5 w-1.5 bg-fluo-400" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* PACKAGE 2 */}
          <div className="card border-fluo-400/35 p-6 glow-fluo sm:p-8">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-2xl font-800 text-white">
                Package 2 · Le CMO + l&apos;Équipe <span className="text-fluo-400">⭐</span>
              </h2>
              <PriceTag />
            </div>
            <p className="mb-4 text-sm text-mist-soft">
              <span className="font-700 text-white">Tout le Package 1</span>, plus le système de
              contenu complet. Vendu comme un rôle : ton CMO.
            </p>
            <div>
              {P2_ADDS.map((e) => (
                <Row key={e.name} item={e} />
              ))}
            </div>
          </div>

          {/* EXTRAS */}
          <div className="card p-6 sm:p-8">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-2xl font-800 text-white">Extras (sur demande)</h2>
              <PriceTag />
            </div>
            <div>
              {EXTRAS.map((e) => (
                <Row key={e.name} item={e} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-4xl px-5 pb-16 sm:pb-24">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-fluo-500 px-7 py-4 font-display font-700 text-ink-950 transition-colors hover:bg-fluo-400 glow-fluo sm:w-auto"
            >
              Réserver un appel
            </a>
            <a
              href="/audit"
              className="w-full rounded-full border border-white/15 px-7 py-4 font-600 text-white transition-colors hover:bg-white/5 sm:w-auto"
            >
              Faire mon audit gratuit
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
