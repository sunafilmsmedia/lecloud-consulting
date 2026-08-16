import Nav from "@/components/Nav";
import Waves from "@/components/Waves";
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

const DOMAINS = [
  {
    title: "Publicité",
    body: "L'IA lit tes campagnes, repère ce qui brûle du budget et te sort des recommandations claires — au lieu de deviner.",
    icon: "megaphone",
  },
  {
    title: "Opérations internes",
    body: "Tâches répétitives automatisées, réponses aux questions de l'équipe et documents générés à la chaîne.",
    icon: "gears",
  },
  {
    title: "Finance et tableaux de bord",
    body: "Données centralisées et tableaux de bord clairs pour voir où va l'argent et le temps, en temps réel.",
    icon: "chart",
  },
  {
    title: "Marketing et offres",
    body: "Contenu adapté à ta marque et offres structurées, produits plus vite et sans repartir de zéro.",
    icon: "spark",
  },
  {
    title: "CRM et expérience client",
    body: "Prospects qualifiés, suivis instantanés par courriel et SMS, et un CRM tenu à jour tout seul.",
    icon: "users",
  },
];

const METHOD = [
  {
    phase: "Identify",
    day: "Jour 1",
    lead: "On observe comment ton entreprise fonctionne réellement.",
    body: "45 min d'alignement avec toi, 30 min avec ton adjointe s'il y en a une, puis 45 min à te regarder travailler pour vrai — les copier-coller et les répétitions se voient, ils ne se racontent pas. On repart avec la carte des 3 à 5 systèmes prioritaires, et un premier quick win livré le jour même.",
  },
  {
    phase: "Develop",
    day: "Jours 2-3",
    lead: "On bâtit le cerveau IA de ton entreprise.",
    body: "On centralise ton identité, tes offres, ton ICP, ton ton de voix, tes processus et tes FAQ, puis on connecte l'IA à ton CRM, tes formulaires et tes courriels. Test de validation : l'IA répond à 5 de tes vrais messages et tu dois pouvoir dire « c'est moi, ça ».",
  },
  {
    phase: "Adopt",
    day: "Clôture + J+30",
    lead: "On te rend autonome, puis on ferme la boucle.",
    body: "Critère de sortie : tu refais chaque workflow seul et tu crées une première automatisation sans aide. On clôt la visite par une journée de tournage, puis un call à J+30 avec le bilan chiffré — les heures sauvées comparées aux chiffres du Jour 1.",
  },
];

const DOMAIN_ICONS: Record<string, React.ReactNode> = {
  megaphone: (
    <path d="M3 11l14-7v16L3 13v-2zM3 11v2m14 3l3 4M8 13v5a2 2 0 002 2h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  gears: (
    <>
      <circle cx="9" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 3.5v1.3M9 13.2v1.3M3.5 9h1.3M13.2 9h1.3M5.1 5.1l.9.9M12 12l.9.9M12.9 5.1l-.9.9M6 12l-.9.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="17" cy="17" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  chart: (
    <path d="M4 20V5m0 15h16M8 20v-6m4 6V9m4 11v-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  spark: (
    <path d="M12 3l1.8 4.9L18.5 9l-4.7 1.8L12 15l-1.8-4.2L5.5 9l4.7-1.1L12 3zM18 15l.7 1.9L20.5 18l-1.8.6L18 20l-.6-1.4L15.5 18l1.9-.6L18 15z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  ),
  users: (
    <path d="M8 11a3 3 0 100-6 3 3 0 000 6zm0 0c-2.7 0-5 1.8-5 4v1h10v-1c0-2.2-2.3-4-5-4zm8-6.5a2.6 2.6 0 010 5.2m2.5 6.3H21v-1c0-1.8-1.4-3.2-3.4-3.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

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

const AGENTS = [
  { name: "Offer Architect", desc: "Conçoit et emballe des offres irrésistibles qui convertissent.", tag: "Ventes" },
  { name: "Niche Architect", desc: "Identifie et valide des niches rentables par recherche approfondie.", tag: "Recherche" },
  { name: "VSL Builder OS", desc: "Crée des vidéos de vente (VSL) à haute conversion.", tag: "Contenu" },
  { name: "Ads Architect", desc: "Rédige des textes et campagnes publicitaires qui performent.", tag: "Marketing" },
  { name: "Category Architect", desc: "Bâtit ta catégorie de marché et ton positionnement.", tag: "Stratégie" },
  { name: "Sales Asset Architect", desc: "Transforme tes transcripts de rencontres en actifs marketing.", tag: "Ventes" },
  { name: "Landing Page Copywriter", desc: "Copy de réponse directe pour des pages qui convertissent.", tag: "Contenu" },
  { name: "Research Agent", desc: "Recherche d'affaires complète via récupération avancée.", tag: "Recherche" },
];

const TAG_COLORS: Record<string, string> = {
  Ventes: "text-fluo-300 border-fluo-400/30 bg-fluo-500/10",
  Recherche: "text-sky-300 border-sky-400/30 bg-sky-500/10",
  Contenu: "text-cyan-200 border-cyan-400/30 bg-cyan-500/10",
  Marketing: "text-blue-300 border-blue-400/30 bg-blue-500/10",
  Stratégie: "text-indigo-300 border-indigo-400/30 bg-indigo-500/10",
};

const PRICING = [
  {
    name: "Full Access",
    featured: false,
    tagline:
      "Que tu démarres une nouvelle entreprise ou que tu fasses croître l'existante — accède à la suite complète des outils Le Cloud (sauf les équipes d'agents).",
    features: [
      "Truth Engine — intelligence de marché & rapports de recherche",
      "Système d'exploitation Le Cloud complet",
      "Constructeur d'offres & moteur de positionnement",
      "Funnels, publicités & séquences de nurture",
      "Gestion CRM & pipeline",
      "Outils de contenu & création",
      "Emails froids & automatisation de prospection",
      "Partenaire d'implantation 1-à-1",
    ],
  },
  {
    name: "Agency",
    featured: true,
    tagline:
      "Deviens un partenaire avec qui on travaille directement. On configure tes compétences, on installe des coéquipiers IA dans ton agence et on optimise tes opérations.",
    features: [
      "Tout ce qu'inclut Full Access",
      "Productisation de compétences 1-à-1",
      "Architecture d'agents sur mesure",
      "Déploiement de bots Slack & Discord",
      "Build-out complet de l'automatisation de livraison",
      "Optimisation & amélioration continues",
      "Canal privé de leadership",
      "Contrat & engagement minimum de 12 mois",
    ],
  },
];

/* ---------- page ---------- */

export default function Page() {
  return (
    <>
      <Nav />

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
          <Waves />
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

        {/* SERVICES — 5 DOMAINES */}
        <section id="services" className="mx-auto max-w-6xl px-5 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Ce qu'on peut automatiser</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-800 text-white sm:text-4xl">
              Cinq domaines où ton employé IA prend le relais.
            </h2>
            <p className="mt-4 text-mist-soft">
              On ne touche pas à tout d'un coup. On cible les domaines où le rendement est le
              plus rapide, et on construit à partir de là.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DOMAINS.map((d, i) => (
              <div
                key={d.title}
                className={`card group p-7 transition-colors hover:border-fluo-400/30 ${
                  i === 3 ? "lg:col-start-2" : ""
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-fluo-500/10 text-fluo-300 ring-1 ring-fluo-400/25 transition-colors group-hover:bg-fluo-500/15">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    {DOMAIN_ICONS[d.icon]}
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-xl font-700 text-white">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-soft">{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AVANT / APRÈS */}
        <section className="relative mx-auto max-w-6xl px-5 py-24">
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

        {/* AGENTS SPÉCIALISÉS */}
        <section className="mx-auto max-w-6xl px-5 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Agents spécialisés</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-800 text-white sm:text-4xl">
              Un agent expert pour chaque fonction de ton entreprise.
            </h2>
            <p className="mt-4 text-mist-soft">
              Des agents conçus sur mesure qui comprennent ton industrie et livrent des résultats.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AGENTS.map((a) => (
              <div
                key={a.name}
                className="card group flex flex-col p-6 transition-colors hover:border-fluo-400/30"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-fluo-500/10 text-fluo-300 ring-1 ring-fluo-400/25 transition-colors group-hover:bg-fluo-500/15">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="7" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 7V4M9 12h.01M15 12h.01M9 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
                <h3 className="mt-4 font-display text-lg font-700 leading-tight text-white">
                  {a.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-soft">{a.desc}</p>
                <span
                  className={`mt-4 inline-flex w-fit rounded-full border px-3 py-1 text-xs font-600 ${
                    TAG_COLORS[a.tag] ?? "text-mist-soft border-white/15 bg-white/5"
                  }`}
                >
                  {a.tag}
                </span>
              </div>
            ))}
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
                  <h3 className="mt-1 font-display text-2xl font-700 text-white">{m.phase}</h3>
                  <p className="mt-3 font-600 text-white/90">{m.lead}</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist-soft">{m.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-mist-soft">
            L'offre couvre trois jours d'implantation. La portée est fixée pendant l'audit —
            selon la complexité, certains systèmes peuvent s'étendre sur une phase supplémentaire.
          </p>

          <div className="mt-8 text-center">
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

        {/* TARIFS */}
        <section id="tarifs" className="relative mx-auto max-w-5xl px-5 py-24">
          <div className="aura left-1/2 top-10 h-72 w-[520px] -translate-x-1/2 bg-fluo-600/15" />
          <div className="relative mx-auto max-w-3xl text-center">
            <Eyebrow>Tarifs</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-800 text-white sm:text-4xl">
              Choisis le niveau qui correspond à ton stade.
            </h2>
            <p className="mt-4 text-mist-soft">
              De la recherche de marché à la livraison complète propulsée par l'IA.
            </p>
          </div>

          <div className="relative mt-14 grid gap-6 md:grid-cols-2 md:items-start">
            {PRICING.map((tier) => (
              <div
                key={tier.name}
                className={`card relative flex flex-col overflow-hidden p-8 ${
                  tier.featured ? "border-fluo-400/35 glow-fluo" : ""
                }`}
              >
                {tier.featured && (
                  <>
                    <div className="aura -right-10 -top-10 h-40 w-40 bg-fluo-500/25" />
                    <span className="relative mb-4 inline-flex w-fit rounded-full border border-fluo-400/40 bg-fluo-500/10 px-3 py-1 text-xs font-700 uppercase tracking-widest text-fluo-300">
                      Partenariat
                    </span>
                  </>
                )}
                <h3 className="relative font-display text-2xl font-800 text-white">{tier.name}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-mist-soft">
                  {tier.tagline}
                </p>

                <div className="relative mt-6 flex items-baseline gap-2 border-y border-white/10 py-5">
                  <span className="font-display text-3xl font-800 text-white">Parlons-en</span>
                  <span className="text-sm text-mist-soft">· sur mesure</span>
                </div>

                <ul className="relative mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/90">
                      <Check className="mt-0.5 text-fluo-400" /> {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#candidature"
                  className={`relative mt-8 inline-flex w-full justify-center rounded-full px-7 py-4 font-display font-700 transition-colors ${
                    tier.featured
                      ? "bg-fluo-500 text-ink-950 hover:bg-fluo-400"
                      : "border border-white/15 text-white hover:bg-white/5"
                  }`}
                >
                  Réserver un appel
                </a>
              </div>
            ))}
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
