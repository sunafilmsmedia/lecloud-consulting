import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VideoFrame from "@/components/VideoFrame";

export const metadata: Metadata = {
  title: "Témoignages",
  description:
    "On documente les vraies transformations avec l'IA. Découvre le documentaire réalisé avec un de nos clients.",
  alternates: { canonical: "/temoignages" },
  openGraph: {
    title: "Témoignages · Le Cloud AI",
    description: "On documente les vraies transformations avec l'IA.",
    url: "/temoignages",
  },
};

const CALENDLY_URL = "https://calendly.com/sunafilmsmedia/nouvelle-reunion";

// Colle ici l'URL du documentaire (YouTube/Vimeo « embed » ou .mp4). Vide = placeholder.
const DOC_VIDEO_URL = "";

// Personne mise de l'avant dans le documentaire (à personnaliser)
const FEATURED = {
  name: "Nom du client",
  role: "Courtier · Entreprise",
  quote:
    "On a filmé son quotidien avant et après. Le résultat parle de lui-même : moins de tâches manuelles, plus de temps pour ses clients.",
};

export default function TemoignagesPage() {
  return (
    <>
      <Nav />

      <main>
        {/* EN-TÊTE */}
        <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40">
          <div className="aura left-1/2 top-0 h-80 w-[560px] -translate-x-1/2 bg-fluo-600/20" />
          <div className="relative mx-auto max-w-3xl px-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-md border border-fluo-400/25 bg-fluo-500/[0.07] px-4 py-1.5 text-xs font-600 uppercase tracking-widest text-fluo-300">
              Témoignages
            </span>
            <h1 className="mx-auto mt-6 font-display text-4xl font-800 leading-[1.08] text-white sm:text-5xl">
              On documente les <span className="accent">vraies</span> transformations.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mist-soft">
              Pas des captures d&apos;écran, pas des chiffres sortis de nulle part. On filme le
              avant/après, en vrai.
            </p>
          </div>
        </section>

        {/* DOCUMENTAIRE MIS DE L'AVANT */}
        <section className="mx-auto max-w-5xl px-5 pb-16 sm:pb-24">
          <div className="mb-6 text-center">
            <span className="text-xs font-600 uppercase tracking-widest text-fluo-300">
              Le documentaire
            </span>
          </div>
          <VideoFrame src={DOC_VIDEO_URL} label="Documentaire à venir" />
          <figure className="mx-auto mt-8 max-w-2xl text-center">
            <blockquote className="font-display text-xl leading-relaxed text-white sm:text-2xl">
              «&nbsp;{FEATURED.quote}&nbsp;»
            </blockquote>
            <figcaption className="mt-4 text-sm text-mist-soft">
              <span className="font-600 text-white">{FEATURED.name}</span> — {FEATURED.role}
            </figcaption>
          </figure>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 bg-ink-900 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="font-display text-3xl font-800 text-white sm:text-4xl">
              On documente ta transformation, pour vrai.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-mist-soft">
              On installe, on mesure, on raconte. Deviens un de nos cas filmés.
            </p>
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
      </main>

      <Footer />
    </>
  );
}
