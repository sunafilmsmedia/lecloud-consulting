export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center">
        <a href="/" className="flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-fluo-500/15 ring-1 ring-fluo-400/40">
            <span className="h-2.5 w-2.5 rounded-full bg-fluo-400 shadow-[0_0_14px_3px_rgba(34,204,255,0.8)]" />
          </span>
          <span className="font-display text-lg font-700 text-white">LE&nbsp;CLOUD</span>
        </a>
        <p className="text-sm text-mist-soft">
          Consultation IA — On ne recommande pas l&apos;IA. On l&apos;installe.
        </p>
        <p className="mt-2 text-xs text-mist-soft/60">
          © {new Date().getFullYear()} Le Cloud. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
