import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Waves from "@/components/Waves";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
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
    <html lang="fr-CA" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen antialiased">
        <Waves />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
