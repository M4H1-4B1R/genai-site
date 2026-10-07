"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-scrubbed line graphics for the hero: a thin arc sweeping through the
 * logo node plus an orange beam cast from the node to the right edge. Driven
 * entirely by scroll progress across the tall `.hero-scroll` wrapper — no
 * animation library. Progress is also exposed as `--hero-p` on `.hero` so CSS
 * can parallax the content, strip, and end tag in sync.
 */

const VB_WIDTH = 1920;
const VB_HEIGHT = 1080;

// Arc keyframes as: M x y  C c1x c1y, c2x c2y, jx jy  C c3x c3y, c4x c4y, ex ey
// (jx, jy) is the joint where the node sits in both keyframes.
// Start: an S-curve entering above the viewport and exiting below it, with
// the node at the vertical center. End: a short flat tail left of the node.
const ARC_START = [
  845, -100, 1130, 180, 1325, 360, 1345, 540, 1365, 720, 1160, 920, 1000, 1180,
];
const ARC_END = [
  110, 525, 210, 536, 300, 539, 345, 540, 358, 540, 375, 541, 395, 541,
];

const NODE_START = { x: 1345, y: 540 };
const NODE_END = { x: 345, y: 540 };
const NODE_W = 130;
const NODE_H = 86;

const BEAM_X_END = 1670;
const BEAM_Y_END_START = 540;
const BEAM_Y_END_END = 540;

const SVG_NS = "http://www.w3.org/2000/svg";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

function arcD(p: number[]) {
  return `M ${p[0]} ${p[1]} C ${p[2]} ${p[3]}, ${p[4]} ${p[5]}, ${p[6]} ${p[7]} C ${p[8]} ${p[9]}, ${p[10]} ${p[11]}, ${p[12]} ${p[13]}`;
}

export function HeroLines() {
  const svgRef = useRef<SVGSVGElement>(null);
  const arcRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGPathElement>(null);
  const beamRef = useRef<SVGLineElement>(null);
  const beamHaloRef = useRef<SVGLineElement>(null);
  const beamGradRef = useRef<SVGLinearGradientElement>(null);
  const nodeRef = useRef<SVGImageElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const section = svg?.closest<HTMLElement>(".hero-scroll");
    const hero = section?.querySelector<HTMLElement>(".hero");
    if (!svg || !section || !hero) return;

    // Arc length up to the node joint at each keyframe, so the glow dash
    // window can track the node while the path morphs.
    const jointLength = (p: number[]) => {
      const el = document.createElementNS(SVG_NS, "path");
      el.setAttribute(
        "d",
        `M ${p[0]} ${p[1]} C ${p[2]} ${p[3]}, ${p[4]} ${p[5]}, ${p[6]} ${p[7]}`,
      );
      return el.getTotalLength();
    };
    const totalLength = (p: number[]) => {
      const el = document.createElementNS(SVG_NS, "path");
      el.setAttribute("d", arcD(p));
      return el.getTotalLength();
    };
    const joint0 = jointLength(ARC_START);
    const joint1 = jointLength(ARC_END);
    const total0 = totalLength(ARC_START);
    const total1 = totalLength(ARC_END);

    const disabled = window.matchMedia(
      "(max-width: 900px), (prefers-reduced-motion: reduce)",
    );

    let raf = 0;
    const update = () => {
      raf = 0;
      if (disabled.matches) {
        hero.style.removeProperty("--hero-p");
        return;
      }
      const scrollable = section.offsetHeight - hero.offsetHeight;
      const p = clamp01(
        -section.getBoundingClientRect().top / Math.max(1, scrollable),
      );
      const m = Math.pow(p, 1.6); // node travel eases in, as in the reference

      const d = arcD(ARC_START.map((v, i) => lerp(v, ARC_END[i], m)));
      arcRef.current?.setAttribute("d", d);
      glowRef.current?.setAttribute("d", d);

      const nx = lerp(NODE_START.x, NODE_END.x, m);
      const ny = lerp(NODE_START.y, NODE_END.y, m);
      nodeRef.current?.setAttribute("x", String(nx - NODE_W / 2));
      nodeRef.current?.setAttribute("y", String(ny - NODE_H / 2));

      // Orange halo hugging the arc around the node.
      const joint = lerp(joint0, joint1, m);
      const total = lerp(total0, total1, m);
      const back = lerp(90, 36, m);
      const fwd = lerp(120, 46, m);
      glowRef.current?.setAttribute(
        "stroke-dasharray",
        `0 ${Math.max(0.1, joint - back)} ${back + fwd} ${total}`,
      );

      // Beam from the node to its fixed end point.
      const ey = lerp(BEAM_Y_END_START, BEAM_Y_END_END, m);
      for (const line of [beamRef.current, beamHaloRef.current]) {
        if (!line) continue;
        line.setAttribute("x1", String(nx));
        line.setAttribute("y1", String(ny));
        line.setAttribute("x2", String(BEAM_X_END));
        line.setAttribute("y2", String(ey));
      }
      const grad = beamGradRef.current;
      if (grad) {
        grad.setAttribute("x1", String(nx));
        grad.setAttribute("y1", String(ny));
        grad.setAttribute("x2", String(BEAM_X_END));
        grad.setAttribute("y2", String(ey));
      }

      hero.style.setProperty("--hero-p", p.toFixed(4));
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    disabled.addEventListener("change", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      disabled.removeEventListener("change", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full max-[900px]:hidden"
      viewBox={`0 0 ${VB_WIDTH} ${VB_HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          ref={beamGradRef}
          id="hero-beam-gradient"
          gradientUnits="userSpaceOnUse"
          x1={NODE_START.x}
          y1={NODE_START.y}
          x2={BEAM_X_END}
          y2={BEAM_Y_END_START}
        >
          <stop offset="0" stopColor="#ffc46b" stopOpacity="0.95" />
          <stop offset="0.35" stopColor="#ff9800" stopOpacity="0.7" />
          <stop offset="1" stopColor="#ff9800" stopOpacity="0" />
        </linearGradient>
        <filter
          id="hero-line-blur"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
      <path
        ref={arcRef}
        d={arcD(ARC_START)}
        fill="none"
        stroke="#454c55"
        strokeWidth="1.5"
      />
      <path
        ref={glowRef}
        d={arcD(ARC_START)}
        fill="none"
        stroke="#ff9800"
        strokeLinecap="round"
        strokeWidth="2.5"
        filter="url(#hero-line-blur)"
        opacity="0.9"
      />
      <line
        ref={beamHaloRef}
        x1={NODE_START.x}
        y1={NODE_START.y}
        x2={BEAM_X_END}
        y2={BEAM_Y_END_START}
        stroke="#ff9800"
        strokeLinecap="round"
        strokeWidth="7"
        opacity="0.25"
        filter="url(#hero-line-blur)"
      />
      <line
        ref={beamRef}
        x1={NODE_START.x}
        y1={NODE_START.y}
        x2={BEAM_X_END}
        y2={BEAM_Y_END_START}
        stroke="url(#hero-beam-gradient)"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <image
        ref={nodeRef}
        className="drop-shadow-[0_0_16px_rgba(255,152,0,0.55)]"
        href="/figma/raw-2.png"
        width={NODE_W}
        height={NODE_H}
        x={NODE_START.x - NODE_W / 2}
        y={NODE_START.y - NODE_H / 2}
      />
    </svg>
  );
}
