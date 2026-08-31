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

type Row = { service: string; featured?: boolean; receives: string; price: string };

const ROWS: Row[] = [
  {
    service: "Package 1 · L'Équipe IA",
    receives:
      "5 employés IA installés à distance en 7 jours : 🧠 Stratège Marketing (ICP, offres, scripts d'ads, statiques), 📋 Adjointe (courriels, brief RDV, CRM auto, documents manquants, radar), 🎯 Marketeur (SEO, gestion ads via Facebook, email marketing, veille), 💰 Coach de vente (analyse d'appels, scripts selon objections, suivis, réactivation), 📊 Rapport CEO mensuel. Formation + 3 mois de maintenance (communauté + tickets).",
    price: "Sur demande",
  },
  {
    service: "Package 2 · Le CMO + l'Équipe",
    featured: true,
    receives:
      "Tout le Package 1, plus le système de contenu (sous-titres + publication auto via Drive) et un plan de contenu mensuel généré par ton Stratège IA : idées, hooks, scripts et horaire de publication.",
    price: "Sur demande",
  },
  {
    service: "Extra · CRM + bot IA",
    receives:
      "GoHighLevel complet, bot conversationnel, snapshot configuré pour ta niche. L'accès à la communauté Skool vient avec.",
    price: "Sur demande",
  },
  {
    service: "Extra · Session de tournage",
    receives: "Demi-journée avec notre équipe, 10 à 15 clips organiques pour alimenter ton contenu.",
    price: "Sur demande",
  },
  {
    service: "Extra · Production de publicités",
    receives: "Ton Stratège IA écrit le script, on tourne, on monte et on livre. En lot pour tester.",
    price: "Sur demande",
  },
  {
    service: "Retainer · Accès",
    receives: "Communauté (Skool) + CRM + support IA (tickets).",
    price: "Sur demande",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />

      <main>
        {/* EN-TÊTE */}
        <section className="relative overflow-hidden pt-32 pb-10 sm:pt-40">
          <div className="aura left-1/2 top-0 h-80 w-[560px] -translate-x-1/2 bg-fluo-600/20" />
          <div className="relative mx-auto max-w-3xl px-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-md border border-fluo-400/25 bg-fluo-500/[0.07] px-4 py-1.5 text-xs font-600 uppercase tracking-widest text-fluo-300">
              Services & packages
            </span>
            <h1 className="mx-auto mt-6 font-display text-4xl font-800 leading-[1.08] text-white sm:text-5xl">
              Deux packages, une seule <span className="accent">équipe IA.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mist-soft">
              Ce que tu reçois, en un coup d&apos;œil. Les prix se donnent en appel, selon ton
              contexte.
            </p>
          </div>
        </section>

        {/* TABLEAU */}
        <section className="mx-auto max-w-5xl px-5 pb-16 sm:pb-24">
          {/* en-têtes (desktop) */}
          <div className="hidden border-b border-white/10 pb-3 md:grid md:grid-cols-12 md:gap-6">
            <p className="col-span-4 text-xs font-600 uppercase tracking-widest text-mist-soft/60">
              Service
            </p>
            <p className="col-span-6 text-xs font-600 uppercase tracking-widest text-mist-soft/60">
              Ce que le client reçoit
            </p>
            <p className="col-span-2 text-xs font-600 uppercase tracking-widest text-mist-soft/60">
              Prix
            </p>
          </div>

          <div>
            {ROWS.map((r) => (
              <div
                key={r.service}
                className={`grid gap-x-6 gap-y-2 border-b border-white/10 py-6 md:grid-cols-12 ${
                  r.featured ? "bg-fluo-500/[0.04]" : ""
                }`}
              >
                <div className="md:col-span-4">
                  <h2 className="font-display text-lg font-700 leading-tight text-white">
                    {r.service}
                    {r.featured && <span className="ml-1.5 text-fluo-400">⭐</span>}
                  </h2>
                </div>
                <p className="leading-relaxed text-mist-soft md:col-span-6">{r.receives}</p>
                <p className="text-sm font-600 text-fluo-300 md:col-span-2">{r.price}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
        </section>
      </main>

      <Footer />
    </>
  );
}
