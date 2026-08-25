"use client";

import { useEffect, useRef, useState } from "react";

type Dept = { name: string; tasks: string[] };

const W = 1000;
const H = 680;

/* Le dessin du cerveau (départements + branches) */
function MapSvg({ depts, full = false }: { depts: Dept[]; full?: boolean }) {
  const list = depts.length ? depts : [];
  const cx = W / 2;
  const cy = H / 2;
  const R1 = 150;
  const R2 = 300;
  const n = list.length || 1;
  const deg = (d: number) => (d * Math.PI) / 180;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width={full ? W : undefined}
      height={full ? H : undefined}
      className={full ? "block" : "w-full"}
      aria-hidden
    >
      {list.map((dept, i) => {
        const A = -90 + (360 / n) * i;
        const px = cx + R1 * Math.cos(deg(A));
        const py = cy + R1 * Math.sin(deg(A));
        const tasks = dept.tasks.slice(0, 4);
        const spread = 16;
        return (
          <g key={dept.name}>
            <line x1={cx} y1={cy} x2={px} y2={py} stroke="rgba(34,204,255,0.4)" strokeWidth="1.4" />
            {tasks.map((t, j) => {
              const B = A + (j - (tasks.length - 1) / 2) * spread;
              const tx = cx + R2 * Math.cos(deg(B));
              const ty = cy + R2 * Math.sin(deg(B));
              const anchor = tx < cx - 10 ? "end" : tx > cx + 10 ? "start" : "middle";
              return (
                <g key={t}>
                  <line x1={px} y1={py} x2={tx} y2={ty} stroke="rgba(34,204,255,0.18)" strokeWidth="1" />
                  <circle cx={tx} cy={ty} r="3.5" fill="#22ccff" opacity="0.85" />
                  <text
                    x={anchor === "end" ? tx - 8 : anchor === "start" ? tx + 8 : tx}
                    y={ty + 3.5}
                    textAnchor={anchor}
                    fontSize="12.5"
                    fill="#9aa6ba"
                    fontFamily="Inter, sans-serif"
                  >
                    {t}
                  </text>
                </g>
              );
            })}
            <circle cx={px} cy={py} r="8" fill="#22ccff" />
            <text
              x={px}
              y={py - 15}
              textAnchor="middle"
              fontSize="15"
              fontWeight="800"
              fill="#fff"
              fontFamily="Sora, Inter, sans-serif"
            >
              {dept.name}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="46" fill="none" stroke="rgba(34,204,255,0.18)" />
      <circle cx={cx} cy={cy} r="34" fill="rgba(34,204,255,0.12)" stroke="rgba(34,204,255,0.55)" strokeWidth="1.5" />
      <text x={cx} y={cy + 5} textAnchor="middle" fontSize="14" fontWeight="800" fill="#22ccff">
        CERVEAU IA
      </text>
    </svg>
  );
}

/* Mode plein écran : pan + zoom */
function Fullscreen({ depts, onClose }: { depts: Dept[]; onClose: () => void }) {
  const [scale, setScale] = useState(0.9);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const drag = useRef<{ sx: number; sy: number; px: number; py: number } | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const zoom = (f: number) => setScale((s) => Math.min(3, Math.max(0.4, s * f)));

  return (
    <div className="fixed inset-0 z-[100] bg-ink-950">
      <div className="brain-stars absolute inset-0" />

      <div
        className="absolute inset-0 touch-none cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => {
          (e.target as Element).setPointerCapture?.(e.pointerId);
          drag.current = { sx: e.clientX, sy: e.clientY, px: pos.x, py: pos.y };
        }}
        onPointerMove={(e) => {
          if (!drag.current) return;
          setPos({
            x: drag.current.px + (e.clientX - drag.current.sx),
            y: drag.current.py + (e.clientY - drag.current.sy),
          });
        }}
        onPointerUp={() => (drag.current = null)}
        onPointerLeave={() => (drag.current = null)}
        onWheel={(e) => zoom(e.deltaY < 0 ? 1.1 : 0.9)}
      >
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
          }}
        >
          <MapSvg depts={depts} full />
        </div>
      </div>

      {/* barre du haut */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4">
        <span className="text-xs font-600 uppercase tracking-widest text-mist-soft/70">
          Ton cerveau IA — glisse pour naviguer
        </span>
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-ink-900/80 text-white transition-colors hover:bg-white/10"
          aria-label="Fermer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* contrôles zoom */}
      <div className="absolute bottom-6 right-6 flex flex-col gap-2">
        <button
          type="button"
          onClick={() => zoom(1.2)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink-900/80 text-2xl text-white transition-colors hover:bg-white/10"
          aria-label="Zoom avant"
        >
          +
        </button>
        <button
          type="button"
          onClick={() => zoom(0.8)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink-900/80 text-2xl text-white transition-colors hover:bg-white/10"
          aria-label="Zoom arrière"
        >
          −
        </button>
        <button
          type="button"
          onClick={() => {
            setScale(0.9);
            setPos({ x: 0, y: 0 });
          }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink-900/80 text-xs text-white transition-colors hover:bg-white/10"
          aria-label="Recentrer"
        >
          ⟲
        </button>
      </div>
    </div>
  );
}

export default function BrainMap({ depts }: { depts: Dept[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <MapSvg depts={depts} />
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="absolute right-2 top-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink-900/80 px-4 py-2 text-xs font-600 text-white transition-colors hover:bg-white/10"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Plein écran
      </button>
      {open && <Fullscreen depts={depts} onClose={() => setOpen(false)} />}
    </div>
  );
}
