import type { Metadata } from "next";
import Footer from "@/components/Footer";
import PathTimeline from "@/components/PathTimeline";

export const metadata: Metadata = {
  title: "Le parcours client — de la découverte au client à vie",
  description:
    "Le chemin complet d'un client Le Cloud AI : du premier contact au client à vie. Signature, onboarding en direct, build de l'équipe IA, garantie honorée, autonomie en 7 jours, puis accompagnement continu.",
  alternates: { canonical: "/path" },
  openGraph: {
    title: "Le parcours client · Le Cloud AI",
    description:
      "Du premier contact au client à vie : chaque jour de la livraison de ton équipe IA, étape par étape.",
    url: "/path",
  },
};

const CALENDLY_URL = "https://calendly.com/sunafilmsmedia/nouvelle-reunion";

const CHARGE = [
  { poste: "Vente (2 appels + deck)", h: "~1,5 h" },
  { poste: "J1 · Onboarding + build", h: "~4 h" },
  { poste: "J2 · Build", h: "~3-4 h" },
  { poste: "J3 · Confirmation", h: "~1 h" },
  { poste: "J3-6 · CRM / automatisations", h: "~3-5 h" },
  { poste: "J7 · Formation + dashboard", h: "~2,5 h" },
  { poste: "J+30 · Suivis", h: "~1,5 h" },
];

export default function PathPage() {
  return (
    <div className="path-page min-h-screen">
      {/* En-tête clair, dédié à la page */}
      <header className="sticky top-0 z-50 border-b border-[#e8f1fb] bg-white/85 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
          <a href="/" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Le Cloud" className="h-7 w-auto" />
            <span className="font-display text-base font-800 tracking-tight text-[#0a1a2f]">
              LE&nbsp;CLOUD
            </span>
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#00b4ff] px-5 py-2 text-sm font-700 text-white transition-colors hover:bg-[#0094e6]"
          >
            Réserver un appel
          </a>
        </nav>
      </header>

      <main className="path-grid">
        {/* HERO */}
        <section className="relative overflow-hidden px-5 pt-20 pb-10 text-center sm:pt-28">
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[640px] -translate-x-1/2 rounded-full bg-[#cfeeff]/50 blur-[90px]" />
          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#bfe3fb] bg-white px-4 py-1.5 text-xs font-700 uppercase tracking-widest text-[#0072b8]">
              Le parcours client
            </span>
            <h1 className="mx-auto mt-6 font-display text-4xl font-800 leading-[1.05] text-[#0a1a2f] sm:text-6xl">
              De la découverte au <span className="accent">client à vie.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#41566d] sm:text-lg">
              Chaque étape, du premier contact jusqu&apos;à ton autonomie complète. Ton équipe IA
              livrée et toi, aux commandes, en 7 jours.
            </p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-700 text-[#0072b8]">
              <svg className="h-5 w-5 animate-bounce" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M12 5v14m0 0l-6-6m6 6l6-6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Suis le chemin
            </p>
          </div>
        </section>

        {/* TIMELINE ANIMÉE */}
        <section className="pb-10">
          <PathTimeline />
        </section>

        {/* CHARGE RÉELLE */}
        <section className="px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border border-[#bfe3fb] bg-white px-4 py-1.5 text-xs font-700 uppercase tracking-widest text-[#0072b8]">
                Honnêteté opérationnelle
              </span>
              <h2 className="mt-5 font-display text-3xl font-800 text-[#0a1a2f] sm:text-4xl">
                La charge réelle par client
              </h2>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#e3eefb] bg-white shadow-[0_16px_50px_-30px_rgba(3,105,175,0.5)]">
              {CHARGE.map((r) => (
                <div
                  key={r.poste}
                  className="flex items-center justify-between border-b border-[#eef5fc] px-5 py-3.5 last:border-0"
                >
                  <span className="text-sm text-[#41566d]">{r.poste}</span>
                  <span className="font-display text-sm font-800 text-[#0a1a2f]">{r.h}</span>
                </div>
              ))}
              <div className="flex items-center justify-between bg-[#f2fbff] px-5 py-4">
                <span className="font-display text-sm font-800 uppercase tracking-wide text-[#0072b8]">
                  Total par client
                </span>
                <span className="text-right font-display text-sm font-800 text-[#0a1a2f]">
                  ~17-20 h
                  <span className="block text-[11px] font-600 text-[#7c8ba0]">
                    → ~10-12 h une fois les templates rodés
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-20">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-[#d4e9fb] bg-gradient-to-br from-[#eff9ff] to-white px-6 py-12 text-center shadow-[0_24px_60px_-36px_rgba(0,148,230,0.6)] sm:py-16">
            <h2 className="font-display text-3xl font-800 text-[#0a1a2f] sm:text-4xl">
              Prêt à commencer le <span className="accent">parcours?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[#41566d]">
              2 places par mois. On identifie par où commencer, on construit, et on te rend
              autonome en 7 jours.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-[#00b4ff] px-8 py-4 font-display font-800 text-white transition-colors hover:bg-[#0094e6] sm:w-auto"
              >
                Réserver un appel de 15 min
              </a>
              <a
                href="/audit"
                className="w-full rounded-full border border-[#bfe3fb] px-8 py-4 font-700 text-[#0072b8] transition-colors hover:bg-[#f2fbff] sm:w-auto"
              >
                Faire un audit gratuit
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
