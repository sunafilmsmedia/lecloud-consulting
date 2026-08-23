import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Showcase from "@/components/Showcase";
import VideoFrame from "@/components/VideoFrame";

export const metadata: Metadata = {
  title: "Le Cloud — Voici ce qu'on construit pour toi",
  description:
    "Regarde ce qu'on installe dans ton entreprise : un employé IA branché à tes outils qui exécute tes tâches répétitives. Vidéo + exemples concrets.",
};

const CALENDLY_URL = "https://calendly.com/sunafilmsmedia/nouvelle-reunion";

// Colle ici l'URL de ta VSL (YouTube/Vimeo « embed » ou fichier .mp4). Vide = placeholder.
const VSL_VIDEO_URL = "";

export default function VslPage() {
  return (
    <>
      <Nav />

      <main>
        {/* HERO + VIDÉO */}
        <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
          <div className="aura left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 bg-fluo-600/20" />
          <div className="relative mx-auto max-w-4xl px-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-md border border-fluo-400/25 bg-fluo-500/[0.07] px-4 py-1.5 text-xs font-600 uppercase tracking-widest text-fluo-300">
              2 places par mois uniquement
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-800 leading-[1.05] text-white sm:text-6xl">
              On crée ton employé IA en <span className="accent">3 jours.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-mist-soft">
              Un employé qui exécute tes tâches répétitives, branché à tes outils, entraîné sur ton
              business.
            </p>

            <p className="mt-10 font-display text-lg font-600 text-white">
              Voici ce qu&apos;on construit pour toi
            </p>

            {/* flèche vers la vidéo */}
            <div className="mt-3 flex justify-center">
              <svg
                className="h-8 w-8 animate-bounce text-fluo-400"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M12 5v14m0 0l-6-6m6 6l6-6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="mt-6">
              <VideoFrame src={VSL_VIDEO_URL} label="Ta VSL ici" />
            </div>

            <div className="mt-8">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-fluo-500 px-8 py-4 font-display font-700 text-ink-950 transition-colors hover:bg-fluo-400 glow-fluo"
              >
                Réserver un appel
              </a>
            </div>
          </div>
        </section>

        {/* CONCRÈTEMENT (exemples qui slident) */}
        <Showcase eyebrow="Concrètement" title="Voici ce que ça donne concrètement." />

        {/* MÊME OFFRE : CTA */}
        <section className="border-t border-white/10 bg-ink-900 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="font-display text-3xl font-800 text-white sm:text-4xl">
              On l&apos;installe dans ton entreprise, en 3 jours.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-mist-soft">
              Même offre : on identifie, on construit et on te rend autonome. On choisit ensemble
              par où commencer.
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
                href="/temoignages"
                className="w-full rounded-full border border-white/15 px-7 py-4 font-600 text-white transition-colors hover:bg-white/5 sm:w-auto"
              >
                Voir les témoignages
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
