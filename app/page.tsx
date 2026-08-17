import Nav from "@/components/Nav";
import ChartBg from "@/components/ChartBg";
import Footer from "@/components/Footer";
import Integrations from "@/components/Integrations";
import Faq from "@/components/Faq";
import RoiCalculator from "@/components/RoiCalculator";
import CandidatureForm from "@/components/CandidatureForm";

const CALENDLY_URL = "https://calendly.com/sunafilmsmedia/nouvelle-reunion";

const ROUTINES = [
  {
    title: "Sous-titres automatiques",
    desc: "Chaque vidéo tournée est sous-titrée automatiquement, prête à publier.",
  },
  {
    title: "Publication automatique",
    desc: "Le contenu est posté tout seul sur les plateformes, au bon format.",
  },
  {
    title: "Email marketing automatisé",
    desc: "Séquences d'accueil, relance et réactivation qui roulent sans intervention.",
  },
  {
    title: "Automatisations CRM",
    desc: "Leads qualifiés, fiches mises à jour et suivis déclenchés automatiquement.",
  },
  {
    title: "KPI automatiques",
    desc: "Un tableau de bord qui se met à jour seul : revenus, leads, performance.",
  },
  {
    title: "Analyse des conversations internes",
    desc: "Les échanges de l'équipe sont analysés pour repérer ce qui bloque et ce qui revient.",
  },
  {
    title: "Comptabilité & factures",
    desc: "Optimisation des dépenses, et les factures sont téléchargées automatiquement.",
  },
  {
    title: "Revue courriel hebdomadaire",
    desc: "Tout le courriel est analysé chaque semaine : résumés, priorités et à-suivre.",
  },
];

/* ---------- petits helpers ---------- */

function Check({ className = "" }: { className?: string }) {
  // Marqueur sobre (plus de puce checkmark)
  return <span aria-hidden className={`inline-block h-1.5 w-1.5 flex-none bg-current ${className}`} />;
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
    <span className="inline-flex items-center gap-2 rounded-md border border-fluo-400/25 bg-fluo-500/[0.07] px-4 py-1.5 text-xs font-600 uppercase tracking-widest text-fluo-300">
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
    body: "L'IA lit tes campagnes, repère ce qui brûle du budget et te sort des recommandations claires, au lieu de deviner.",
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
    lead: "On comprend comment ton entreprise fonctionne vraiment.",
    body: "Avant de bâtir quoi que ce soit, on observe tes opérations : où le temps se perd, quelles tâches se répètent, ce qui ralentit la croissance. On repart avec une carte claire des systèmes à construire en premier.",
  },
  {
    phase: "Develop",
    day: "Jours 2-3",
    lead: "On bâtit le cerveau IA de ton entreprise.",
    body: "On centralise ce qui te définit (offres, processus, ton de voix) et on connecte l'IA à tes outils. Le test est simple : elle répond à tes vrais messages et tu dois pouvoir dire « c'est moi, ça ».",
  },
  {
    phase: "Adopt",
    day: "Suivi J+30",
    lead: "L'IA devient une partie de comment le travail se fait.",
    body: "Livrer un système, ce n'est pas réussir : l'adoption, oui. On te forme et on reste à tes côtés jusqu'à ce que tu refasses chaque workflow seul. Le but, ce n'est pas un « transfert », c'est la pleine maîtrise.",
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

// Icônes line-art discrètes (une par agent, même ordre)
const AGENT_ICONS: React.ReactNode[] = [
  // Offer Architect : boîte / package isométrique
  <>
    <path d="M4 8l8-4.5L20 8v8l-8 4.5L4 16z" />
    <path d="M4 8l8 4.5L20 8M12 12.5V21" opacity="0.55" />
  </>,
  // Niche Architect : radar / cible + loupe
  <>
    <circle cx="10.5" cy="10.5" r="6" />
    <path d="M10.5 5v11M5 10.5h11" opacity="0.45" />
    <circle cx="10.5" cy="10.5" r="2.4" />
    <path d="M14.9 14.9L20 20" />
  </>,
  // VSL Builder : écran + lecture
  <>
    <rect x="3" y="5" width="18" height="12" rx="1.5" />
    <path d="M10.5 9.4l4 2.6-4 2.6z" />
    <path d="M8.5 20h7" opacity="0.55" />
  </>,
  // Ads Architect : mégaphone / diffusion
  <>
    <path d="M4 10.5v3l10 4V6.5z" />
    <path d="M14 8.5a4 4 0 010 7" />
    <path d="M6.5 14.2v2.3a1.8 1.8 0 001.8 1.8" opacity="0.6" />
  </>,
  // Category Architect : quadrant de positionnement
  <>
    <rect x="4" y="4" width="16" height="16" rx="1" />
    <path d="M12 4v16M4 12h16" opacity="0.45" />
    <circle cx="15.5" cy="8.5" r="1.6" />
  </>,
  // Sales Asset Architect : document
  <>
    <path d="M7 3.5h6.5L18 8v12.5H7z" />
    <path d="M13.5 3.5V8H18" opacity="0.6" />
    <path d="M9.5 12h6M9.5 15h6M9.5 18h4" opacity="0.6" />
  </>,
  // Landing Page Copywriter : fenêtre de navigateur
  <>
    <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
    <path d="M3 8.5h18" opacity="0.6" />
    <path d="M7 12h7M7 15h10" opacity="0.55" />
  </>,
  // Research Agent : courbe d'analyse
  <>
    <path d="M4 4v16h16" />
    <path d="M7 14.5l3-4 3 2 4-6.5" />
    <circle cx="17" cy="6" r="1.1" />
  </>,
];

const PRICING = [
  {
    name: "Full Access",
    featured: false,
    tagline:
      "Que tu démarres une nouvelle entreprise ou que tu fasses croître l'existante, accède à la suite complète des outils Le Cloud (sauf les équipes d'agents).",
    features: [
      "Truth Engine : intelligence de marché & rapports de recherche",
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
          <ChartBg />
          <div className="aura -left-20 top-40 h-72 w-72 bg-fluo-500/20" />
          <div className="relative mx-auto max-w-4xl px-5 text-center">
            <Eyebrow>Consultation et implantation IA pour PME</Eyebrow>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-800 leading-[1.05] text-white sm:text-6xl">
              Ton prochain employé n'a pas de salaire, pas de vacances, et il sera{" "}
              <span className="accent">payé une fois.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist-soft">
              En <span className="accent">3 jours</span>, on l'installe dans ton entreprise, sur
              Claude, branché à tes outils, entraîné sur ton business, pis on te montre comment le
              contrôler. On a remplacé <span className="accent">36k$/an</span> de salaires de même
              dans notre propre agence.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#candidature"
                className="w-full rounded-md bg-fluo-500 px-7 py-4 font-display font-700 text-ink-950 transition-all hover:bg-fluo-400 glow-fluo sm:w-auto"
              >
                Bâtir mon employé IA
              </a>
              <a
                href="#services"
                className="w-full rounded-md border border-white/15 px-7 py-4 font-600 text-white transition-colors hover:bg-white/5 sm:w-auto"
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
                <span className="mr-6 h-1.5 w-1.5 rounded-md bg-fluo-500" />
                <span className="font-display text-lg font-600 text-white/80">{p}</span>
              </span>
            ))}
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

        {/* SERVICES : 5 DOMAINES */}
        <section id="services" className="mx-auto max-w-5xl px-5 py-24">
          <div className="max-w-3xl">
            <Eyebrow>Ce qu'on peut automatiser</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-800 text-white sm:text-4xl">
              Cinq domaines où ton employé IA prend le relais.
            </h2>
            <p className="mt-4 text-mist-soft">
              On ne touche pas à tout d'un coup. On cible les domaines où le rendement est le
              plus rapide, et on construit à partir de là.
            </p>
          </div>

          <div className="mt-14 border-t border-white/10">
            {DOMAINS.map((d, i) => (
              <div
                key={d.title}
                className="grid grid-cols-1 gap-x-8 gap-y-2 border-b border-white/10 py-8 md:grid-cols-12"
              >
                <div className="font-display text-sm tabular-nums text-mist-soft/70 md:col-span-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl font-700 text-white md:col-span-4">
                  {d.title}
                </h3>
                <p className="leading-relaxed text-mist-soft md:col-span-6">{d.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/services"
              className="font-600 text-fluo-300 underline decoration-fluo-400/40 underline-offset-4 transition-colors hover:decoration-fluo-400"
            >
              Voir les 20 services en détail
            </a>
          </div>
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
                    className="card flex items-center gap-3 px-5 py-4 text-white/90"
                  >
                    <Check className="text-fluo-400" /> {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTÉGRATIONS */}
        <section className="mx-auto max-w-6xl px-5 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Intégrations</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-800 text-white sm:text-4xl">
              On se connecte aux outils que tu utilises déjà.
            </h2>
            <p className="mt-4 text-mist-soft">
              Ton employé IA ne vit pas à part. Il se branche à ton CRM, tes courriels, ton
              calendrier et tes applications, et pour tout le reste, il y a Zapier, Make et les API.
            </p>
          </div>

          <div className="relative mt-12">
            <div className="aura left-1/2 top-1/2 h-52 w-[560px] -translate-x-1/2 -translate-y-1/2 bg-fluo-600/12" />
            <div className="relative">
              <Integrations />
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-mist-soft">
            + des centaines d&apos;autres via Zapier, Make et les API.
          </p>
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

          <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {AGENTS.map((a, i) => (
              <div key={a.name} className="flex flex-col bg-ink-900 p-7">
                <div className="flex h-24 items-center justify-center text-white/25">
                  <svg
                    width="58"
                    height="58"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {AGENT_ICONS[i]}
                  </svg>
                </div>
                <span className="mt-3 text-xs font-600 uppercase tracking-wider text-fluo-300/70">
                  {a.tag}
                </span>
                <h3 className="mt-1 font-display text-lg font-700 leading-tight text-white">
                  {a.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-soft">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MÉTHODE */}
        <section id="methode" className="mx-auto max-w-5xl px-5 py-24">
          <div className="max-w-3xl">
            <Eyebrow>Notre méthode</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-800 text-white sm:text-4xl">
              On comprend, on construit, on te rend autonome.
            </h2>
          </div>

          <div className="mt-16 space-y-16">
            {METHOD.map((m, i) => (
              <div key={m.phase} className="grid gap-4 border-t border-white/10 pt-10 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-5xl font-800 leading-none text-white/15">
                      {i + 1}
                    </span>
                    <span className="text-xs font-600 uppercase tracking-widest text-mist-soft/60">
                      {m.day}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-3xl font-700 text-fluo-400">{m.phase}</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="font-display text-xl font-700 text-white">{m.lead}</p>
                  <p className="mt-3 max-w-2xl leading-relaxed text-mist-soft">{m.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-14 max-w-2xl text-sm text-mist-soft">
            L'offre couvre trois jours d'implantation. La portée est fixée pendant l'audit :
            selon la complexité, certains systèmes peuvent s'étendre sur une phase supplémentaire.
          </p>

          <div className="mt-8">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md bg-fluo-500 px-7 py-4 font-display font-700 text-ink-950 transition-colors hover:bg-fluo-400 glow-fluo"
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
              <p className="mt-2 font-display text-3xl accent sm:text-4xl">
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

        {/* ÉTUDE DE CAS : SUNA FILMS MEDIA */}
        <section className="border-y border-white/10 bg-ink-900 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>Étude de cas : notre propre agence</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-800 text-white sm:text-4xl">
                On l&apos;a installé chez nous d&apos;abord.
              </h2>
              <p className="mt-4 text-mist-soft">
                Avant de le faire pour toi, on a bâti notre propre employé IA dans{" "}
                <span className="text-white">Suna Films Media</span>. Voici tout ce qu&apos;il
                roule, chaque jour, sans qu&apos;on ait à y penser.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ROUTINES.map((r) => (
                <div
                  key={r.title}
                  className="card flex flex-col p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-fluo-500/10 text-fluo-300 ring-1 ring-fluo-400/25">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="mt-4 font-display text-base font-700 leading-tight text-white">
                    {r.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-soft">{r.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="card relative overflow-hidden border-fluo-400/25 p-7 text-center glow-fluo sm:col-span-1">
                <div className="aura -right-8 -top-8 h-28 w-28 bg-fluo-500/25" />
                <p className="relative text-xs font-600 uppercase tracking-widest text-fluo-300">
                  Salaires remplacés
                </p>
                <p className="relative mt-2 font-display text-4xl">
                  <span className="accent">36k$/an</span>
                </p>
                <p className="relative mt-1 text-sm text-mist-soft">dans notre propre agence</p>
              </div>
              <div className="card p-7 text-center">
                <p className="text-xs font-600 uppercase tracking-widest text-fluo-300">
                  Courriel analysé
                </p>
                <p className="mt-2 font-display text-4xl font-800 text-white">Chaque semaine</p>
                <p className="mt-1 text-sm text-mist-soft">résumés, priorités, à-suivre</p>
              </div>
              <div className="card p-7 text-center">
                <p className="text-xs font-600 uppercase tracking-widest text-fluo-300">
                  Opérations
                </p>
                <p className="mt-2 font-display text-4xl font-800 text-white">24/7</p>
                <p className="mt-1 text-sm text-mist-soft">sans intervention manuelle</p>
              </div>
            </div>
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
                    <span className="relative mb-4 inline-flex w-fit rounded-md border border-fluo-400/40 bg-fluo-500/10 px-3 py-1 text-xs font-700 uppercase tracking-widest text-fluo-300">
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
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative mt-8 inline-flex w-full justify-center rounded-md px-7 py-4 font-display font-700 transition-colors ${
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
              <p className="mt-3 font-display text-3xl accent sm:text-4xl">
                Ou construire le système qui les accomplira automatiquement.
              </p>
              <p className="mx-auto mt-5 max-w-xl text-mist-soft">
                En trois jours, Le Cloud transforme les processus qui ralentissent ton entreprise
                en systèmes propulsés par l'IA. Soumets ton entreprise ci-dessous, ou réserve un
                appel directement.
              </p>
              <div className="mt-6">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-fluo-400/40 px-6 py-3 font-600 text-white transition-colors hover:bg-fluo-500/10"
                >
                  Réserver un appel
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-2xl">
              <CandidatureForm />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
