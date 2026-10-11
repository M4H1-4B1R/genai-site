"use client";

import { useEffect, useRef, useState } from "react";

type EngagementItem = readonly [title: string, body: string];

type EngagementModelProps = {
  items: readonly EngagementItem[];
};

const AUTOPLAY_MS = 1500;

export function EngagementModel({ items }: EngagementModelProps) {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      if (!paused.current) {
        setActive((current) => (current + 1) % items.length);
      }
    }, AUTOPLAY_MS);

    return () => window.clearInterval(interval);
  }, [items.length]);

  return (
    <div
      className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
    >
      {items.map(([title, body], index) => {
        const isActive = index === active;

        return (
          <article
            className={`origin-top transition-transform duration-700 ease-in-out ${
              isActive ? "scale-[1.035]" : "scale-100"
            }`}
            key={title}
          >
            <div
              className={`h-0.5 transition-colors duration-700 ease-in-out ${
                isActive ? "bg-orange" : "bg-[#293137]"
              }`}
            />
            <div className="pt-5">
              <b className="text-[13px] tracking-[1px] text-orange">
                0{index + 1}
              </b>
              <h3 className="my-6 text-2xl font-bold leading-[30px]">
                {title}
              </h3>
              <p className="text-[15px] leading-6 text-[#9fa4ab]">{body}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
