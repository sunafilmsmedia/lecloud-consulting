export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center">
        <a href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Le Cloud" className="h-9 w-auto" />
          <span className="font-display text-lg font-700 text-white">LE&nbsp;CLOUD</span>
        </a>
        <p className="text-sm text-mist-soft">
          Consultation IA · On ne recommande pas l&apos;IA. On l&apos;installe.
        </p>
        <p className="mt-2 text-xs text-mist-soft/60">
          © {new Date().getFullYear()} Le Cloud. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
