/**
 * Fond graphique du hero : colonnes bleues statiques (façon skyline) + lueur
 * bleue montant du bas. Composant serveur, pur CSS, aucune animation.
 */
const COUNT = 18;

const BARS = Array.from({ length: COUNT }, (_, i) => {
  // forme en V : hautes sur les côtés, basses au centre
  const center = (COUNT - 1) / 2;
  const d = Math.abs(i - center) / center; // 0 au centre → 1 aux bords
  return Math.round(26 + d * 68); // 26 % (centre) → 94 % (bords)
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
