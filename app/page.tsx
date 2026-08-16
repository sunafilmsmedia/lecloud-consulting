import Nav from "@/components/Nav";
import Faq from "@/components/Faq";
import RoiCalculator from "@/components/RoiCalculator";
import CandidatureForm from "@/components/CandidatureForm";

/* ---------- petits helpers ---------- */

function Check({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={`flex-none ${className}`}>
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Cross({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={`flex-none ${className}`}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-fluo-400/25 bg-fluo-500/[0.07] px-4 py-1.5 text-xs font-600 uppercase tracking-widest text-fluo-300">
      {children}
    </span>
  );
}

/* ---------- données ---------- */

const PROBLEMS = [
  "Trop de tâches manuelles",
  "Employés débordés",
  "Leads oubliés",
  "Suivis en retard",
  "Données éparpillées",
  "Outils IA inutilisés",
];

const CAPABILITIES = [
  "Répondre aux nouveaux prospects",
  "Qualifier et classer les demandes",
  "Effectuer les suivis par courriel et SMS",
  "Mettre à jour ton CRM",
  "Préparer des soumissions et des documents",
  "Analyser tes campagnes publicitaires",
  "Produire du contenu adapté à ta marque",
  "Résumer tes rencontres et créer les prochaines tâches",
  "Répondre aux questions internes de ton équipe",
];

const METHOD = [
  {
    day: "Jour 1",
    title: "Identifier",
    lead: "On observe comment ton entreprise fonctionne réellement.",
    body: "On calcule où ton équipe perd du temps, quelles tâches ralentissent la croissance et quelles automatisations produisent le meilleur rendement. À la fin de la journée, on choisit les 3 à 5 systèmes prioritaires à construire.",
  },
  {
    day: "Jour 2",
    title: "Construire",
    lead: "On bâtit le cerveau IA de ton entreprise.",
    body: "On centralise tes connaissances, on crée tes assistants spécialisés et on connecte l'IA à ton CRM, tes formulaires, tes courriels et tes autres outils.",
  },
  {
    day: "Jour 3",
    title: "Implanter",
    lead: "On active les automatisations dans tes opérations.",
    body: "On teste les systèmes avec ton équipe, on corrige les derniers détails et on forme les personnes qui les utiliseront. Lorsqu'on repart, les systèmes fonctionnent déjà.",
  },
];

const TRADITIONAL = [
  "Audit et recommandations",
  "Rapport stratégique",
  "Liste d'outils à essayer",
  "Implantation laissée au client",
  "Peu de suivi sur l'adoption",
];

const LECLOUD = [
  "Audit directement dans l'entreprise",
  "Systèmes construits et connectés",
  "Automatisations testées",
  "Employés formés",
  "Suivi 30 jours après l'implantation",
];

const INCLUSIONS = [
  "Pré-audit complet de ton entreprise",
  "Audit opérationnel sur place",
  "Cartographie des pertes de temps",
  "Cerveau IA personnalisé",
  "Assistants IA spécialisés",
  "3 à 5 systèmes prioritaires",
  "Connexion à tes outils existants",
  "Automatisations CRM, courriel et SMS",
  "Formation pratique de ton équipe",
  "Documentation des systèmes",
  "Soutien après l'implantation",
  "Rencontre de révision après 30 jours",
];

const IDEAL = [
  "Ont déjà une équipe et des opérations actives",
  "Reçoivent régulièrement des demandes ou des prospects",
  "Utilisent plusieurs logiciels qui communiquent mal ensemble",
  "Perdent du temps sur des tâches administratives répétitives",
  "Veulent augmenter leur capacité sans nécessairement embaucher",
  "Veulent des systèmes concrets, pas une autre formation sur l'IA",
];

/* ---------- page ---------- */

export default function Page() {
  return (
    <>
      <Nav />

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
          <div className="grid-lines absolute inset-0 opacity-60" />
          <div className="aura left-1/2 top-0 h-[420px] w-[560px] -translate-x-1/2 bg-fluo-600/25" />
          <div className="aura -left-20 top-40 h-72 w-72 bg-fluo-500/20" />
          <div className="relative mx-auto max-w-4xl px-5 text-center">
            <Eyebrow>Consultation et implantation IA pour PME</Eyebrow>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-800 leading-[1.05] text-white sm:text-6xl">
              On automatise l'équivalent d'un poste dans ton entreprise,{" "}
              <span className="text-gradient">en 3 jours.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist-soft">
              On identifie les tâches répétitives qui coûtent le plus cher à ton entreprise.
              Ensuite, on construit un employé IA capable de les exécuter, on le connecte à
              tes outils et on te forme, toi ou ton équipe, à l'utiliser.
            </p>
            <p className="mx-auto mt-5 max-w-xl font-display text-lg font-600 text-white">
              Pas un rapport. Pas une formation théorique. Un système installé et fonctionnel.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#candidature"
                className="w-full rounded-full bg-fluo-500 px-7 py-4 font-display font-700 text-ink-950 transition-all hover:bg-fluo-400 glow-fluo sm:w-auto"
              >
                Bâtir mon employé IA
              </a>
              <a
                href="#services"
                className="w-full rounded-full border border-white/15 px-7 py-4 font-600 text-white transition-colors hover:bg-white/5 sm:w-auto"
              >
                Découvrir ce qu'on peut automatiser
              </a>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-x-8 gap-y-2 text-sm text-mist-soft sm:flex-row">
              {[
                "Implantation directement dans ton entreprise",
                "Systèmes personnalisés à tes opérations",
                "Équipe formée pour devenir autonome",
              ].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <Check className="text-fluo-400" /> {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* BANDEAU PROBLÈMES */}
        <section className="border-y border-white/10 bg-ink-900 py-5">
          <div className="marquee-track">
            {[...PROBLEMS, ...PROBLEMS, ...PROBLEMS, ...PROBLEMS].map((p, i) => (
              <span key={i} className="flex items-center whitespace-nowrap px-6 text-mist-soft">
                <span className="mr-6 h-1.5 w-1.5 rounded-full bg-fluo-500" />
                <span className="font-display text-lg font-600 text-white/80">{p}</span>
              </span>
            ))}
          </div>
        </section>

        {/* AVANT / APRÈS */}
        <section id="services" className="relative mx-auto max-w-6xl px-5 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-800 text-white sm:text-4xl">
              Ton équipe ne devrait pas perdre ses journées sur des tâches que l'IA peut accomplir.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="card p-8">
              <span className="text-xs font-600 uppercase tracking-widest text-mist-soft">
                Avant Le Cloud
              </span>
              <h3 className="mt-3 font-display text-2xl font-700 text-white">Le travail manuel</h3>
              <p className="mt-3 text-mist-soft">
                Ton équipe répond toujours aux mêmes questions, copie les mêmes informations,
                prépare les mêmes documents et relance manuellement chaque prospect.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Des heures perdues chaque semaine",
                  "Des demandes oubliées",
                  "Des réponses trop lentes",
                  "Des employés surchargés",
                  "Une croissance qui exige toujours plus de personnel",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-white/80">
                    <Cross className="text-red-400/80" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card relative overflow-hidden border-fluo-400/25 p-8 glow-fluo">
              <div className="aura -right-10 -top-10 h-40 w-40 bg-fluo-500/30" />
              <span className="relative text-xs font-600 uppercase tracking-widest text-fluo-300">
                Après Le Cloud
              </span>
              <h3 className="relative mt-3 font-display text-2xl font-700 text-white">
                Ton employé IA
              </h3>
              <p className="relative mt-3 text-mist-soft">
                Un système qui connaît ton entreprise, travaille avec tes outils et exécute
                automatiquement les tâches répétitives.
              </p>
              <ul className="relative mt-6 space-y-3">
                {[
                  "Réponses et suivis instantanés",
                  "Qualification automatique des prospects",
                  "Documents et contenu générés",
                  "Informations centralisées",
                  "Opérations actives 24 h sur 24",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-white">
                    <Check className="text-fluo-400" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center font-display text-xl font-600 text-white">
            Même équipe. Plus de capacité. Moins de travail répétitif.
          </p>
        </section>

        {/* PROMESSE + CAPACITÉS */}
        <section className="relative border-y border-white/10 bg-ink-900 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>La promesse</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-800 text-white sm:text-4xl">
                Un employé IA construit autour de ton entreprise.
              </h2>
              <p className="mt-4 text-mist-soft">
                Ce n'est pas un chatbot générique. On lui transmet tes offres, tes processus,
                ton ton de voix, tes objections, tes documents et ta manière de travailler.
                Ensuite, on le connecte aux outils que ton entreprise utilise déjà.
              </p>
            </div>

            <div className="mt-12">
              <p className="mb-6 text-center text-xs font-600 uppercase tracking-widest text-fluo-300">
                Ton employé IA peut
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {CAPABILITIES.map((c) => (
                  <div
                    key={c}
                    className="card flex items-center gap-3 px-5 py-4 text-white/90 transition-colors hover:border-fluo-400/30"
                  >
                    <Check className="text-fluo-400" /> {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MÉTHODE */}
        <section id="methode" className="mx-auto max-w-6xl px-5 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Notre méthode</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-800 text-white sm:text-4xl">
              Trois jours pour transformer tes opérations.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {METHOD.map((m, i) => (
              <div key={m.day} className="card relative p-8">
                <span className="font-display text-6xl font-800 text-white/[0.06]">
                  0{i + 1}
                </span>
                <div className="-mt-8">
                  <span className="text-sm font-600 text-fluo-300">{m.day}</span>
                  <h3 className="mt-1 font-display text-2xl font-700 text-white">{m.title}</h3>
                  <p className="mt-3 font-600 text-white/90">{m.lead}</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist-soft">{m.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#candidature"
              className="inline-flex rounded-full bg-fluo-500 px-7 py-4 font-display font-700 text-ink-950 transition-colors hover:bg-fluo-400 glow-fluo"
            >
              Planifier mon diagnostic IA
            </a>
          </div>
        </section>

        {/* DIFFÉRENCIATION */}
        <section className="border-y border-white/10 bg-ink-900 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-800 text-white sm:text-4xl">
                La plupart des consultants te disent ce que l'IA <em className="not-italic text-mist-soft">pourrait</em> faire.
              </h2>
              <p className="mt-2 font-display text-3xl font-800 text-gradient sm:text-4xl">
                Nous le construisons avec toi.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <div className="card p-8">
                <h3 className="font-display text-lg font-700 text-white/70">Conseil IA traditionnel</h3>
                <ul className="mt-6 space-y-4">
                  {TRADITIONAL.map((t) => (
                    <li key={t} className="flex items-center gap-3 text-white/70">
                      <Cross className="text-red-400/70" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card relative overflow-hidden border-fluo-400/25 p-8 glow-fluo">
                <div className="aura -right-10 -top-10 h-40 w-40 bg-fluo-500/25" />
                <h3 className="relative font-display text-lg font-700 text-white">Le Cloud</h3>
                <ul className="relative mt-6 space-y-4">
                  {LECLOUD.map((t) => (
                    <li key={t} className="flex items-center gap-3 text-white">
                      <Check className="text-fluo-400" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI */}
        <section className="mx-auto max-w-6xl px-5 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Le calcul</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-800 text-white sm:text-4xl">
              Combien te coûte le travail répétitif ?
            </h2>
            <p className="mt-4 text-mist-soft">
              Ajuste les curseurs à ta réalité. Notre objectif est simple : trouver les tâches
              que l'IA peut prendre en charge et construire un système dont la valeur dépasse
              largement son coût.
            </p>
          </div>
          <div className="mt-12">
            <RoiCalculator />
          </div>
        </section>

        {/* INCLUSIONS */}
        <section className="border-y border-white/10 bg-ink-900 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>Ce que tu obtiens</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-800 text-white sm:text-4xl">
                Un système complet, pas une liste de recommandations.
              </h2>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {INCLUSIONS.map((t) => (
                <div key={t} className="card flex items-center gap-3 px-5 py-4 text-white/90">
                  <Check className="text-fluo-400" /> {t}
                </div>
              ))}
            </div>

            <div className="mt-8 card relative overflow-hidden border-fluo-400/30 p-8 text-center glow-fluo sm:p-10">
              <div className="aura left-1/2 top-0 h-40 w-72 -translate-x-1/2 bg-fluo-500/25" />
              <span className="relative text-xs font-600 uppercase tracking-widest text-fluo-300">
                Bonus de lancement
              </span>
              <h3 className="relative mt-3 font-display text-2xl font-700 text-white">
                Une journée de tournage avec notre équipe
              </h3>
              <p className="relative mx-auto mt-3 max-w-xl text-mist-soft">
                On produit une première banque de 10 à 15 vidéos pour alimenter ton contenu et
                les systèmes marketing que nous installons.
              </p>
            </div>
          </div>
        </section>

        {/* CLIENT IDÉAL */}
        <section className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <Eyebrow>Client idéal</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-800 text-white sm:text-4xl">
                Est-ce que Le Cloud est fait pour ton entreprise ?
              </h2>
              <p className="mt-4 text-mist-soft">
                Cette transformation est conçue pour les PME qui&nbsp;:
              </p>
              <p className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-mist-soft">
                Cette offre n'est probablement pas adaptée si ton entreprise est encore au stade
                de l'idée, ou si tu cherches seulement une liste d'outils gratuits.
              </p>
            </div>
            <ul className="space-y-3">
              {IDEAL.map((t) => (
                <li key={t} className="card flex items-start gap-3 px-5 py-4 text-white/90">
                  <Check className="mt-0.5 text-fluo-400" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PREUVE / RÉSULTATS */}
        <section id="resultats" className="border-y border-white/10 bg-ink-900 py-24">
          <div className="mx-auto max-w-5xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>Preuve</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-800 text-white sm:text-4xl">
                Des systèmes qui travaillent réellement.
              </h2>
            </div>

            <figure className="mt-12 card p-8 sm:p-10">
              <blockquote className="font-display text-xl leading-relaxed text-white sm:text-2xl">
                «&nbsp;Avant Le Cloud, notre équipe passait plusieurs heures par semaine à
                répondre, classer et relancer manuellement les demandes. En trois jours, les
                processus prioritaires étaient automatisés et notre équipe savait exactement
                comment utiliser les nouveaux systèmes.&nbsp;»
              </blockquote>
              <figcaption className="mt-6 text-sm text-mist-soft">
                <span className="font-600 text-white">Nom du client</span> — Entreprise · Résultat mesurable
              </figcaption>
            </figure>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Heures économisées", value: "XX", unit: "h / semaine" },
                { label: "Délai de réponse", value: "XX min → XX s", unit: "temps de réaction" },
                { label: "Valeur annuelle", value: "XX XXX $", unit: "récupérés" },
              ].map((s) => (
                <div key={s.label} className="card p-6 text-center">
                  <p className="text-xs font-600 uppercase tracking-widest text-fluo-300">
                    {s.label}
                  </p>
                  <p className="mt-3 font-display text-3xl font-800 text-white">{s.value}</p>
                  <p className="mt-1 text-sm text-mist-soft">{s.unit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OFFRE */}
        <section className="relative mx-auto max-w-3xl px-5 py-24">
          <div className="aura left-1/2 top-10 h-72 w-96 -translate-x-1/2 bg-fluo-600/20" />
          <div className="relative card overflow-hidden border-fluo-400/30 p-8 glow-fluo sm:p-12">
            <div className="aura -right-12 -top-12 h-48 w-48 bg-fluo-500/25" />
            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-fluo-400/40 bg-fluo-500/10 px-4 py-1.5 text-xs font-700 uppercase tracking-widest text-fluo-300">
                Offre de lancement — 3 entreprises seulement
              </span>
              <h2 className="mt-6 font-display text-4xl font-800 text-white">Le Makeover IA</h2>
              <p className="mx-auto mt-3 max-w-md text-mist-soft">
                Trois jours directement dans ton entreprise pour identifier, construire et
                implanter ton employé IA.
              </p>

              <div className="mt-8 flex items-end justify-center gap-2">
                <span className="font-display text-6xl font-800 text-white">7 000 $</span>
              </div>
              <p className="mt-2 text-sm text-mist-soft">
                Prix cible après les trois premières transformations&nbsp;:{" "}
                <span className="text-white/80 line-through decoration-mist-soft/50">9 997 $</span>
              </p>

              <p className="mx-auto mt-6 max-w-md rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-mist-soft">
                En échange du prix de lancement, nous demandons l'autorisation de documenter la
                transformation et de produire une étude de cas.
              </p>

              <a
                href="#candidature"
                className="mt-8 inline-flex w-full justify-center rounded-full bg-fluo-500 px-7 py-4 font-display font-700 text-ink-950 transition-colors hover:bg-fluo-400 sm:w-auto"
              >
                Soumettre mon entreprise
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-y border-white/10 bg-ink-900 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-800 text-white sm:text-4xl">
                Questions fréquentes
              </h2>
            </div>
            <Faq />
          </div>
        </section>

        {/* CTA FINAL + CANDIDATURE */}
        <section id="candidature" className="relative overflow-hidden py-24">
          <div className="aura left-1/2 top-0 h-96 w-[640px] -translate-x-1/2 bg-fluo-600/20" />
          <div className="relative mx-auto max-w-5xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-800 leading-tight text-white sm:text-4xl">
                Tu peux continuer à payer ton équipe pour accomplir des tâches répétitives.
              </h2>
              <p className="mt-3 font-display text-3xl font-800 text-gradient sm:text-4xl">
                Ou construire le système qui les accomplira automatiquement.
              </p>
              <p className="mx-auto mt-5 max-w-xl text-mist-soft">
                En trois jours, Le Cloud transforme les processus qui ralentissent ton entreprise
                en systèmes propulsés par l'IA. Soumets ton entreprise ci-dessous.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-2xl">
              <CandidatureForm />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-ink-950 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-fluo-500/15 ring-1 ring-fluo-400/40">
              <span className="h-2.5 w-2.5 rounded-full bg-fluo-400 shadow-[0_0_14px_3px_rgba(34,204,255,0.8)]" />
            </span>
            <span className="font-display text-lg font-700 text-white">LE&nbsp;CLOUD</span>
          </div>
          <p className="text-sm text-mist-soft">Consultation IA — On ne recommande pas l'IA. On l'installe.</p>
          <p className="mt-2 text-xs text-mist-soft/60">
            © {new Date().getFullYear()} Le Cloud. Tous droits réservés.
          </p>
        </div>
      </footer>
    </>
  );
}
