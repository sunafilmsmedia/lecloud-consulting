/**
 * Fond graphique du hero : barres bleues qui montent/descendent (type equalizer)
 * + lueur bleue montant du bas. Composant serveur : pur CSS, hauteurs déterministes.
 */
const COUNT = 32;

const BARS = Array.from({ length: COUNT }, (_, i) => {
  // hauteurs et rythmes déterministes (pas de random → pas de mismatch d'hydratation)
  const wave = Math.abs(Math.sin(i * 1.7) * 0.6 + Math.sin(i * 0.6) * 0.4);
  const height = Math.round(30 + wave * 58); // 30 → 88 %
  const lo = 0.42 + (i % 5) * 0.07; // amplitude basse du pouls
  const dur = 3 + (i % 6) * 0.55; // 3 → 5.75 s
  const delay = (i % 9) * 0.32;
  return { height, lo, dur, delay };
});

export default function ChartBg() {
  return (
    <div aria-hidden className="chartbg">
      <div className="chartbg-bars">
        {BARS.map((b, i) => (
          <span
            key={i}
            className="chartbar"
            style={
              {
                height: `${b.height}%`,
                animationDuration: `${b.dur}s`,
                animationDelay: `${b.delay}s`,
                "--lo": b.lo,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
