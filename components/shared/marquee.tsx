import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: ReactNode[];
  duration?: number;
  className?: string;
};

export function Marquee({ items, duration = 40, className }: MarqueeProps) {
  return (
    <div
      className={cn("marquee", className)}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span
            className="marquee-item"
            key={index}
            aria-hidden={index >= items.length}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
