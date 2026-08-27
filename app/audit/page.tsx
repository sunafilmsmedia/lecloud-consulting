import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AuditLeadMagnet from "@/components/AuditLeadMagnet";
import BlueprintBg from "@/components/BlueprintBg";

export const metadata: Metadata = {
  title: "Audit IA gratuit pour ton entreprise",
  description:
    "Réponds à quelques questions et découvre la carte de ton « cerveau IA » : département par département, les tâches que Le Cloud AI peut prendre en charge dès demain. Gratuit, au Québec.",
  alternates: { canonical: "/audit" },
  openGraph: {
    title: "Audit IA gratuit pour ton entreprise · Le Cloud AI",
    description:
      "Vois, département par département, tout ce que l'IA peut faire dans ton entreprise.",
    url: "/audit",
  },
};

export default function AuditPage() {
  return (
    <>
      <BlueprintBg />
      <Nav />

      <main className="relative z-10">
        <section className="relative overflow-hidden pt-32 pb-10 sm:pt-40">
          <div className="aura left-1/2 top-0 h-80 w-[560px] -translate-x-1/2 bg-fluo-600/20" />
          <div className="relative mx-auto max-w-3xl px-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-md border border-fluo-400/25 bg-fluo-500/[0.07] px-4 py-1.5 text-xs font-600 uppercase tracking-widest text-fluo-300">
              Audit IA gratuit
            </span>
            <h1 className="mx-auto mt-6 font-display text-4xl font-800 leading-[1.08] text-white sm:text-5xl">
              Vois le travail que ton entreprise pourrait confier à{" "}
              <span className="accent">l&apos;IA.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mist-soft">
              Réponds à quelques questions sur ton entreprise. On te construit une carte de ton
              « cerveau IA » : département par département, avec les vrais systèmes que l&apos;IA
              pourrait prendre en charge dès demain.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-5 pb-20 sm:pb-28">
          <AuditLeadMagnet />
        </section>
      </main>

      <Footer />
    </>
  );
}
