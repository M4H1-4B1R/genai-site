"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Dashed elbow connectors for the architecture diagram (desktop only):
 * horizontal stubs from each left card's right edge → a shared vertical
 * trunk in the middle of the gap → one horizontal into the "unified
 * target" card at the middle card's height. Geometry is measured from
 * the real element edges (data-diagram-node / data-diagram-target), so
 * the lines stay glued to the cards across breakpoints, zoom, and font
 * loading. Drawing adapts to layout direction: in the stacked (≤640px)
 * column mode the connectors become vertical segments down the center-X,
 * chaining each card into the next and finally into the target card.
 */
export function DiagramLines() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    const svg = svgRef.current;
    const panel = svg?.parentElement;
    if (!svg || !panel) return;

    const draw = () => {
      const pb = panel.getBoundingClientRect();
      if (pb.width === 0 || pb.height === 0) return;
      const nodes = [...panel.querySelectorAll("[data-diagram-node]")];
      const target = panel.querySelector("[data-diagram-target]");
      if (nodes.length < 2 || !target) return;
      const next: string[] = [];

      if (getComputedStyle(panel).flexDirection === "column") {
        // Stacked layout: chain cards vertically through the center-X —
        // each card's bottom edge flows into the next element's top edge.
        const firstRect = nodes[0].getBoundingClientRect();
        const centerX = firstRect.left - pb.left + firstRect.width / 2;
        const seq = [...nodes, target].map((el) => {
          const r = el.getBoundingClientRect();
          return { top: r.top - pb.top, bottom: r.bottom - pb.top };
        });
        for (let i = 0; i < seq.length - 1; i++) {
          next.push(`M ${centerX} ${seq[i].bottom} V ${seq[i + 1].top}`);
        }
      } else {
        // Side-by-side layout: hub points on each card's right edge,
        // shared vertical trunk, one horizontal into the target card.
        const hubs = nodes.map((node) => {
          const r = node.getBoundingClientRect();
          return { x: r.right - pb.left, y: r.top - pb.top + r.height / 2 };
        });
        const targetEdge = target.getBoundingClientRect().left - pb.left;
        const trunkX = (hubs[0].x + targetEdge) / 2;
        const topY = hubs[0].y;
        const botY = hubs[hubs.length - 1].y;
        const midY = hubs[1].y;
        for (const hub of hubs) next.push(`M ${hub.x} ${hub.y} H ${trunkX}`);
        if (topY !== botY) next.push(`M ${trunkX} ${topY} V ${botY}`);
        next.push(`M ${trunkX} ${midY} H ${targetEdge}`);
      }
      setPaths(next);
      setBox({ w: pb.width, h: pb.height });
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(panel);
    for (const el of panel.querySelectorAll("[data-diagram-node], [data-diagram-target]")) {
      ro.observe(el);
    }
    return () => ro.disconnect();
  }, []);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1]"
      fill="none"
      stroke="#ff8a00"
      strokeDasharray="4 5"
      strokeLinecap="round"
      strokeWidth="1"
      viewBox={`0 0 ${box.w} ${box.h}`}
    >
      {paths.map((d) => (
        <path d={d} key={d} />
      ))}
    </svg>
  );
}
