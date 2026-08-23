import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { FLOWS, FlowDiagram } from "@/components/flows";

export const metadata: Metadata = {
  title: "Automatisations — Le Cloud | Tout ce que l'IA peut faire tourner",
  description:
    "Toutes les automatisations qu'on peut installer dans ton entreprise : factures, contenu, publicités Meta, sous-titres, appels de vente, email marketing, CRM et plus. Chaque flux, de la source au résultat.",
};

const CALENDLY_URL = "https://calendly.com/sunafilmsmedia/nouvelle-reunion";

export default function AutomatisationsPage() {
  return (
    <>
      <Nav />

      <main>
        {/* EN-TÊTE */}
        <section className="relative overflow-hidden pt-36 pb-12 sm:pt-44">
          <div className="aura left-1/2 top-0 h-80 w-[560px] -translate-x-1/2 bg-fluo-600/20" />
          <div className="relative mx-auto max-w-3xl px-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-md border border-fluo-400/25 bg-fluo-500/[0.07] px-4 py-1.5 text-xs font-600 uppercase tracking-widest text-fluo-300">
              {FLOWS.length} automatisations
            </span>
            <h1 className="mx-auto mt-6 font-display text-4xl font-800 leading-[1.08] text-white sm:text-5xl">
              Tout ce que l&apos;IA peut faire tourner pour toi.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mist-soft">
              Tu déposes, l&apos;IA exécute, tu récupères le résultat. Voici les flux qu&apos;on
              branche à tes outils, de la source jusqu&apos;au résultat.
            </p>
          </div>
        </section>

        {/* GRILLE DES FLUX */}
        <div className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
          <div className="grid gap-5 md:grid-cols-2">
            {FLOWS.map((f) => (
              <div key={f.title} className="card p-7 sm:p-8">
                <FlowDiagram steps={f.steps} />
                <h2 className="mt-8 text-center font-display text-xl font-700 text-white">
                  {f.title}
                </h2>
                <p className="mx-auto mt-2 max-w-md text-center text-sm leading-relaxed text-mist-soft">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-mist-soft">
            Et ce n&apos;est qu&apos;un aperçu. Pendant l&apos;audit, on identifie les
            automatisations les plus rentables pour <span className="text-white">ton</span>{" "}
            entreprise et on les construit sur mesure.
          </p>
        </div>

        {/* CTA */}
        <section className="border-t border-white/10 bg-ink-900 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="font-display text-3xl font-800 text-white sm:text-4xl">
              Laquelle on installe en premier ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-mist-soft">
              On choisit ensemble par où commencer, selon ce qui te fait gagner le plus de temps.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-fluo-500 px-7 py-4 font-display font-700 text-ink-950 transition-colors hover:bg-fluo-400 glow-fluo sm:w-auto"
              >
                Réserver un appel
              </a>
              <a
                href="/#candidature"
                className="w-full rounded-full border border-white/15 px-7 py-4 font-600 text-white transition-colors hover:bg-white/5 sm:w-auto"
              >
                Soumettre mon entreprise
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
