import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
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
            key={`${item}-${index}`}
            aria-hidden={index >= items.length}
          >
            <span>{item}</span>
            <Sparkles className="marquee-icon" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
