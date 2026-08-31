import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Dashboards from "@/components/Dashboards";
import VideoFrame from "@/components/VideoFrame";
import BlueprintBg from "@/components/BlueprintBg";

export const metadata: Metadata = {
  title: "Ton employé IA installé en 3 jours",
  description:
    "Regarde ce qu'on installe dans ton entreprise : un employé IA branché à tes outils qui exécute tes tâches répétitives. Vidéo + tableaux de bord par département.",
  alternates: { canonical: "/vsl" },
  openGraph: {
    title: "Ton employé IA installé en 3 jours · Le Cloud AI",
    description:
      "Un employé IA branché à tes outils qui exécute tes tâches répétitives, installé en 3 jours.",
    url: "/vsl",
  },
};

const CALENDLY_URL = "https://calendly.com/sunafilmsmedia/nouvelle-reunion";

// Colle ici l'URL de ta VSL (YouTube/Vimeo « embed » ou fichier .mp4). Vide = placeholder.
const VSL_VIDEO_URL = "";

export default function VslPage() {
  return (
    <>
      <div className="vsl-bg" aria-hidden />
      <BlueprintBg />
      <Nav />

      <main className="relative z-10">
        {/* HERO + VIDÉO — compact, tient dans un écran sur mobile */}
        <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pt-20 pb-8 sm:pt-28">
          <div className="aura left-1/2 top-1/4 h-80 w-[600px] -translate-x-1/2 bg-fluo-600/20" />
          <div className="relative mx-auto w-full max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-md border border-fluo-400/25 bg-fluo-500/[0.07] px-3 py-1 text-[11px] font-600 uppercase tracking-widest text-fluo-300 sm:px-4 sm:py-1.5 sm:text-xs">
              2 places par mois uniquement
            </span>
            <h1 className="mx-auto mt-4 font-display leading-[1] text-white sm:mt-5">
              <span className="block text-xl font-800 sm:text-3xl">On crée ton équipe IA en</span>
              <span className="accent block px-2 pb-3 pt-1 text-[3.5rem] leading-[0.9] sm:text-8xl">
                3 jours.
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-mist-soft sm:text-lg">
              Une équipe d&apos;employés IA qui exécute tes tâches répétitives, branchée à tes
              outils. On identifie par où commencer, on construit, et on te rend autonome.
            </p>

            <p className="mt-4 flex items-center justify-center gap-2 font-display text-sm font-700 text-white sm:mt-6 sm:text-lg">
              <svg className="h-5 w-5 animate-bounce text-fluo-400" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M12 5v14m0 0l-6-6m6 6l6-6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Voici ce qu&apos;on construit pour toi
            </p>

            <div className="mt-3 sm:mt-4">
              <VideoFrame src={VSL_VIDEO_URL} label="Ta VSL ici" />
            </div>

            <div className="mt-4 sm:mt-6">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-md justify-center rounded-full bg-fluo-500 px-8 py-4 font-display text-lg font-800 text-ink-950 transition-colors hover:bg-fluo-400 glow-fluo sm:w-auto"
              >
                Réserver un appel
              </a>
              <p className="mt-3 text-sm italic text-mist-soft/80">
                Pas besoin d&apos;avoir d&apos;expérience avec l&apos;IA*
              </p>
            </div>
          </div>
        </section>

        {/* TABLEAUX DE BORD */}
        <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-md border border-fluo-400/25 bg-fluo-500/[0.07] px-4 py-1.5 text-xs font-600 uppercase tracking-widest text-fluo-300">
              Tableaux de bord
            </span>
            <h2 className="mt-6 font-display text-3xl font-800 text-white sm:text-4xl">
              Vois tout ce qu&apos;on installe, en un coup d&apos;œil.
            </h2>
            <p className="mt-4 text-mist-soft">
              Un tableau de bord clair par département : tes chiffres réels, mis à jour tout seuls.
              Fais défiler pour tous les voir.
            </p>
          </div>
          <div className="mt-12">
            <Dashboards />
          </div>
        </section>

        {/* MÊME OFFRE : CTA */}
        <section className="border-t border-white/10 bg-ink-900/60 py-16 sm:py-24">
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
