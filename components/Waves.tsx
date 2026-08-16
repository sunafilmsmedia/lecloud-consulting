/**
 * Vagues bleues animées et floues — décor du hero uniquement.
 * Composant serveur : SVG statique + animation CSS (aucun JS côté client).
 * Se place dans un parent `position: relative` (la section hero).
 */

function wavePath(width: number, wavelength: number, amp: number, y: number): string {
  const half = wavelength / 2;
  let d = `M0 ${y}`;
  let dir = -1;
  for (let x = 0; x < width; x += half) {
    d += ` q ${half / 2} ${dir * amp} ${half} 0`;
    dir *= -1;
  }
  return d;
}

const WAVES = [
  { y: 210, amp: 46, dur: "29s", w: 2.4, op: 0.42 },
  { y: 330, amp: 66, dur: "38s", w: 1.8, op: 0.3 },
  { y: 450, amp: 36, dur: "23s", w: 1.6, op: 0.34 },
  { y: 560, amp: 78, dur: "46s", w: 1.3, op: 0.2 },
  { y: 680, amp: 52, dur: "33s", w: 1.5, op: 0.24 },
];

export default function Waves() {
  return (
    <div aria-hidden className="wave-bg">
      <svg className="wave-svg" viewBox="0 0 1440 900" preserveAspectRatio="none">
        {WAVES.map((w, i) => (
          <path
            key={i}
            className="wave-line"
            d={wavePath(2880, 480, w.amp, w.y)}
            strokeWidth={w.w}
            style={{ opacity: w.op, animationDuration: w.dur }}
          />
        ))}
      </svg>
    </div>
  );
}
