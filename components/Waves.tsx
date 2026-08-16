/**
 * Fond de vagues bleues animées — effet « quelque chose se construit derrière ».
 * Composant serveur : SVG statique + animation CSS (aucun JS côté client).
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
  { y: 200, amp: 44, dur: "27s", w: 2.2, op: 0.55 },
  { y: 340, amp: 62, dur: "36s", w: 1.6, op: 0.4 },
  { y: 470, amp: 34, dur: "21s", w: 1.4, op: 0.5 },
  { y: 600, amp: 72, dur: "44s", w: 1.2, op: 0.28 },
  { y: 730, amp: 50, dur: "31s", w: 1.4, op: 0.36 },
  { y: 850, amp: 40, dur: "24s", w: 1.1, op: 0.3 },
];

export default function Waves() {
  return (
    <>
      <div aria-hidden className="wave-bg">
        <svg
          className="wave-svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
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
      <div aria-hidden className="wave-veil" />
    </>
  );
}
