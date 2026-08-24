/**
 * Fond « circuit » discret : quelques points reliés par des lignes qui
 * apparaissent et disparaissent (effet techno). Composant serveur, pur CSS.
 */
const NODES: [number, number][] = [
  [140, 150],
  [360, 110],
  [560, 190],
  [780, 120],
  [1010, 170],
  [240, 380],
  [500, 340],
  [760, 400],
  [1000, 360],
  [320, 600],
  [620, 640],
  [880, 600],
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 5],
  [2, 6],
  [3, 7],
  [4, 8],
  [5, 6],
  [6, 7],
  [7, 8],
  [5, 9],
  [6, 10],
  [7, 11],
  [9, 10],
  [10, 11],
];

export default function CircuitBg() {
  return (
    <svg className="circuit" viewBox="0 0 1150 750" preserveAspectRatio="xMidYMid slice" aria-hidden>
      {EDGES.map(([a, b], i) => {
        const [x1, y1] = NODES[a];
        const [x2, y2] = NODES[b];
        return (
          <line
            key={`e${i}`}
            className="circuit-line"
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            style={{ animationDelay: `${(i % 8) * 0.7}s`, animationDuration: `${5 + (i % 4)}s` }}
          />
        );
      })}
      {NODES.map(([x, y], i) => (
        <circle
          key={`n${i}`}
          className="circuit-node"
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 3.5 : 2.5}
          style={{ animationDelay: `${(i % 6) * 0.5}s` }}
        />
      ))}
    </svg>
  );
}
