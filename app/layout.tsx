import type { Metadata } from "next";
import localFont from "next/font/local";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_LOCALE } from "@/lib/site";
import "./globals.css";

// Polices auto-hébergées (aucune dépendance réseau au build)
const manrope = localFont({
  src: "./fonts/Manrope-Variable.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
});

// Police d'accent : Bodoni Moda Italic (mots mis en avant)
const bodoni = localFont({
  src: "./fonts/BodoniModa-Italic.woff2",
  variable: "--font-brand",
  display: "swap",
  style: "italic",
  weight: "400 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Le Cloud AI · Ton employé IA installé en 3 jours",
    template: "%s · Le Cloud AI",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "employé IA",
    "intelligence artificielle PME",
    "automatisation entreprise",
    "consultation IA Québec",
    "agent IA",
    "Claude Anthropic",
    "implantation IA",
    "automatisation des tâches",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    locale: SITE_LOCALE,
    title: "Le Cloud AI · Ton employé IA installé en 3 jours",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Cloud AI · Ton employé IA installé en 3 jours",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "technology",
};

const JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Le Cloud AI",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Le Cloud AI installe des employés IA sur mesure dans les entreprises québécoises en 3 jours — payés une seule fois, sans salaire récurrent, branchés aux outils existants et entraînés sur le business du client.",
    areaServed: { "@type": "AdministrativeArea", name: "Québec, Canada" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Développement et installation d'employé IA",
    provider: { "@type": "Organization", name: "Le Cloud AI", url: SITE_URL },
    areaServed: { "@type": "AdministrativeArea", name: "Québec" },
    description:
      "Installation d'un employé IA personnalisé, branché aux outils de l'entreprise et entraîné sur ses données, livré en 3 jours sur la plateforme Claude d'Anthropic.",
    offers: {
      "@type": "Offer",
      priceCurrency: "CAD",
      businessFunction: "http://purl.org/goodrelations/v1#Sell",
      description:
        "Paiement unique — aucun salaire récurrent, aucuns frais de vacances ou d'avantages sociaux.",
    },
    hoursAvailable: "24/7",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "fr-CA",
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" className={`${manrope.variable} ${bodoni.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
        />
      </body>
    </html>
  );
}
