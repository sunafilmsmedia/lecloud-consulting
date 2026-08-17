/**
 * Fond graphique du hero : colonnes bleues statiques (façon skyline) + lueur
 * bleue montant du bas. Composant serveur, pur CSS, aucune animation.
 */
const COUNT = 16;

const BARS = Array.from({ length: COUNT }, (_, i) => {
  // hauteurs déterministes, variées façon skyline
  const wave = Math.abs(Math.sin(i * 1.3) * 0.55 + Math.sin(i * 0.5 + 1) * 0.45);
  return Math.round(48 + wave * 48); // 48 → 96 %
});

export default function ChartBg() {
  return (
    <div aria-hidden className="chartbg">
      <div className="chartbg-bars">
        {BARS.map((h, i) => (
          <span key={i} className="chartbar" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}
