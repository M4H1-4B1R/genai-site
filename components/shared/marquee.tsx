import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: ReactNode[];
  duration?: number;
  className?: string;
  /** Extra classes for each marquee item (e.g. the hero strip's dimmed items). */
  itemClassName?: string;
};

export function Marquee({
  items,
  duration = 40,
  className,
  itemClassName,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "overflow-hidden group [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      <div className="flex w-max animate-[marquee_var(--marquee-duration,40s)_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...items, ...items].map((item, index) => (
          <span
            className={cn(
              "inline-flex items-center pr-[110px] whitespace-nowrap",
              itemClassName,
            )}
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
