import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services & packages",
  description:
    "Deux packages Le Cloud AI. Opérations : Directeur des ventes, Client Success Manager, Adjointe de direction, CFO. Complète + CMO : tout le marketing géré par une équipe IA, propulsé par une agence avec 4+ ans d'expérience.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services & packages · Le Cloud AI",
    description: "Opérations vs Complète + CMO : ce que chaque package inclut.",
    url: "/services",
  },
};

const CALENDLY_URL = "https://calendly.com/sunafilmsmedia/nouvelle-reunion";

type Feature = { name: string; detail?: string; p1: boolean; p2: boolean };

const FEATURES: Feature[] = [
  { name: "💰 Directeur des ventes", p1: true, p2: true },
  { name: "🤝 Client Success Manager", p1: true, p2: true },
  { name: "📋 Adjointe de direction", p1: true, p2: true },
  { name: "📊 CFO", p1: true, p2: true },
  {
    name: "🎯 CMO complet",
    detail: "ICP builder, content ideas, scripts AEILA, statiques, MCP Meta, SEO, email marketing, veille",
    p1: false,
    p2: true,
  },
  {
    name: "🎬 Système de contenu",
    detail: "Auto sous-titres + auto-publication",
    p1: false,
    p2: true,
  },
];

const INCLUDED = [
  "Installation à distance en 7 jours",
  "Formation pour le contrôler",
  "3 mois de maintenance (communauté + tickets)",
];

const EXTRAS = [
  { name: "CRM + bot IA", does: "GoHighLevel complet, bot conversationnel, snapshot par niche. Accès Skool inclus." },
  { name: "Session de tournage", does: "Demi-journée avec notre équipe, 10 à 15 clips organiques." },
  { name: "Production de publicités", does: "Ton CMO IA écrit le script, on tourne, on monte et on livre." },
  { name: "Retainer · Accès", does: "Communauté (Skool) + CRM + support IA (tickets)." },
];

function Yes() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mx-auto text-fluo-400">
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function No() {
  return <span className="block text-center text-mist-soft/40">—</span>;
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
              Automatise ton marketing avec une <span className="accent">équipe IA.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mist-soft">
              Le même savoir-faire qu&apos;une agence avec 4+ ans d&apos;expérience, installé
              directement dans ton entreprise. Les prix se donnent en appel.
            </p>
          </div>
        </section>

        {/* TABLEAU COMPARATIF */}
        <section className="mx-auto max-w-3xl px-5 pb-10">
          <div className="overflow-hidden rounded-xl border border-white/10">
            {/* en-tête */}
            <div className="grid grid-cols-[1fr_64px_72px] items-end gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-4 sm:grid-cols-[1fr_150px_150px] sm:px-6">
              <span className="text-xs font-600 uppercase tracking-widest text-mist-soft/60">
                Ce que tu reçois
              </span>
              <div className="text-center">
                <p className="font-display text-sm font-800 leading-tight text-white">Opérations</p>
                <p className="text-[10px] text-mist-soft">P1 · sur demande</p>
              </div>
              <div className="rounded-md bg-fluo-500/10 py-1 text-center">
                <p className="font-display text-sm font-800 leading-tight text-white">
                  Complète + CMO ⭐
                </p>
                <p className="text-[10px] text-fluo-300">P2 · sur demande</p>
              </div>
            </div>

            {/* lignes */}
            {FEATURES.map((f) => (
              <div
                key={f.name}
                className="grid grid-cols-[1fr_64px_72px] items-center gap-2 border-b border-white/8 px-4 py-4 last:border-0 sm:grid-cols-[1fr_150px_150px] sm:px-6"
              >
                <div>
                  <p className="text-sm font-600 text-white">{f.name}</p>
                  {f.detail && <p className="mt-0.5 text-xs leading-snug text-mist-soft">{f.detail}</p>}
                </div>
                <div>{f.p1 ? <Yes /> : <No />}</div>
                <div className="rounded-md bg-fluo-500/[0.05] py-2">{f.p2 ? <Yes /> : <No />}</div>
              </div>
            ))}
          </div>

          {/* inclus dans les deux */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {INCLUDED.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-3 py-1.5 text-xs text-white/90"
              >
                <span className="h-1.5 w-1.5 bg-fluo-400" /> {t}
              </span>
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-mist-soft/60">Inclus dans les deux packages.</p>
        </section>

        {/* EXTRAS */}
        <section className="mx-auto max-w-3xl px-5 pb-8">
          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-xl font-800 text-white">Extras (sur demande)</h2>
            <div className="mt-4">
              {EXTRAS.map((e) => (
                <div
                  key={e.name}
                  className="grid gap-x-6 gap-y-1 border-b border-white/10 py-4 last:border-0 md:grid-cols-12"
                >
                  <span className="font-display text-base font-700 text-white md:col-span-4">
                    {e.name}
                  </span>
                  <p className="text-sm leading-relaxed text-mist-soft md:col-span-8">{e.does}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mx-auto max-w-3xl px-5 pb-16 sm:pb-24">
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
