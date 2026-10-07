"use client";

import { useEffect, useRef, useState } from "react";

const TRANSITION_MS = 650;
const AUTOPLAY_MS = 5000;

const testimonials = [
  {
    quote:
      "“GenAILabs gave our operational platform the rare feeling of being both extraordinarily intelligent and unmistakably human.”",
    name: "— Mara Voss",
    role: "Founder & Managing Director, Lumen Field",
    discipline:
      "Autonomous workflow engine / model alignment / production infrastructure",
    cycle: "2026.Q1 production",
  },
  {
    quote:
      "“They shipped an agentic workflow our compliance team actually trusts — audit trails, human overrides, and all.”",
    name: "— Daniel Okafor",
    role: "VP Operations, Northgate Logistics",
    discipline:
      "Agentic orchestration / compliance automation / audit infrastructure",
    cycle: "2025.Q4 production",
  },
  {
    quote:
      "“From prototype to production in nine weeks. GenAILabs is the first partner that treats latency as a feature.”",
    name: "— Ingrid Halvorsen",
    role: "CTO, Fieldline Robotics",
    discipline: "Realtime inference / edge deployment / observability",
    cycle: "2026.Q2 production",
  },
];

export function ServicesProofSlider() {
  const n = testimonials.length;
  // index can reach n, which is the clone of slide 0 used for the loop
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const paused = useRef(false);

  // Autoplay; the [index] dependency restarts the timer after every change.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = window.setInterval(() => {
      if (!paused.current) {
        setIndex((i) => i + 1);
      }
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [index]);

  // After the transition onto the clone finishes, jump back to slide 0
  // without animating.
  useEffect(() => {
    if (index !== n) {
      return;
    }
    const id = window.setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, TRANSITION_MS);
    return () => window.clearTimeout(id);
  }, [index, n]);

  // Re-enable the transition after the jump has painted.
  useEffect(() => {
    if (animate) {
      return;
    }
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimate(true)),
    );
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  const active = index % n;

  return (
    <section
      className="services-proof services-proof-slider"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="services-proof-top">
        <strong>— Proof record</strong>
        <span>● Verified audit</span>
      </div>
      <div className="services-proof-viewport">
        <div
          className="services-proof-track"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: animate
              ? `transform ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
              : "none",
          }}
        >
          {[...testimonials, testimonials[0]].map((t, i) => (
            <div
              className="services-proof-slide"
              key={i}
              aria-hidden={i === n || i !== active}
            >
              <blockquote>{t.quote}</blockquote>
              <div className="services-proof-meta">
                <span>
                  {t.name}
                  <br />
                  <small>{t.role}</small>
                </span>
                <span>
                  Discipline
                  <br />
                  <small>{t.discipline}</small>
                </span>
                <span>
                  Deployment cycle
                  <br />
                  <small>{t.cycle}</small>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="services-proof-dots">
        {testimonials.map((t, i) => (
          <button
            aria-label={`Show testimonial from ${t.name.replace("— ", "")}`}
            aria-current={i === active}
            className={i === active ? "active" : undefined}
            key={t.name}
            onClick={() => setIndex(i)}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}
