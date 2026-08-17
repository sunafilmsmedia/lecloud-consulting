import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Police auto-hébergée (aucune dépendance réseau au build)
const manrope = localFont({
  src: "./fonts/Manrope-Variable.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "200 800",
});

export const metadata: Metadata = {
  title: "Le Cloud — On automatise l'équivalent d'un poste en 3 jours",
  description:
    "Consultation et implantation IA pour PME. En 3 jours, on identifie tes tâches répétitives, on construit ton employé IA, on le connecte à tes outils et on forme ton équipe. Pas un rapport — un système installé et fonctionnel.",
  openGraph: {
    title: "Le Cloud — On ne recommande pas l'IA. On l'installe.",
    description:
      "En 3 jours, on transforme les processus qui ralentissent ton entreprise en systèmes propulsés par l'IA.",
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" className={manrope.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
