/**
 * Démo de conversation : l'employé IA reçoit une demande et répond avec un
 * update concret (l'action est déjà faite). Composant serveur, purement visuel.
 */
const CONVO: { context: string; user: string; ai: string }[] = [
  {
    context: "Le matin",
    user: "Résume-moi les courriels importants et prépare mes réponses.",
    ai: "12 courriels lus. 3 importants : un devis à confirmer, une relance client, une facture fournisseur. J'ai rédigé les 3 réponses, prêtes à approuver.",
  },
  {
    context: "Un client appelle",
    user: "Regarde le dossier de Martin et dis-moi où on en est.",
    ai: "Dossier Martin : dernière relance mardi, ouverte 2 fois, pas encore de réponse. Prochain suivi prévu vendredi. Je te sors le résumé de vos échanges ?",
  },
  {
    context: "Fin de mois",
    user: "Classe mes factures et sors-moi les dépenses du trimestre.",
    ai: "47 factures classées dans le Drive « Factures Q3 ». Dépenses du trimestre : 58 240 $. Le rapport est prêt à télécharger.",
  },
];

export default function ChatDemo() {
  return (
    <div className="card mx-auto max-w-lg overflow-hidden">
      {/* en-tête */}
      <div className="flex items-center gap-3 border-b border-white/8 px-5 py-3.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-fluo-500/12 ring-1 ring-fluo-400/30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" className="h-5 w-auto" />
        </span>
        <div>
          <p className="font-display text-sm font-700 leading-tight text-white">Ton employé IA</p>
          <p className="flex items-center gap-1.5 text-xs text-mist-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> en ligne
          </p>
        </div>
      </div>

      {/* messages */}
      <div className="space-y-5 p-5">
        {CONVO.map((m) => (
          <div key={m.context} className="space-y-3">
            <p className="text-center text-[11px] uppercase tracking-widest text-mist-soft/50">
              {m.context}
            </p>

            {/* toi */}
            <div className="flex justify-end">
              <p className="max-w-[82%] rounded-2xl rounded-br-md bg-fluo-500 px-4 py-2.5 text-sm font-500 text-ink-950">
                {m.user}
              </p>
            </div>

            {/* l'employé IA */}
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-fluo-500/12 ring-1 ring-fluo-400/25">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="" className="h-4 w-auto" />
              </span>
              <p className="max-w-[82%] rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm leading-relaxed text-white/90">
                {m.ai}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
