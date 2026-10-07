"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden max-[640px]:block">
      <button
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-[3px] border border-[#424a50] bg-transparent p-0 text-text"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <nav
          className="absolute left-0 right-0 top-full z-50 flex flex-col gap-1 border-b border-[#303437] bg-ink px-5 pb-6 pt-4"
          id="mobile-nav-panel"
          aria-label="Mobile navigation"
        >
          <a
            className="border-b border-[#1c2328] px-1 py-3.5 text-[15px] text-[#b4b6b8]"
            href="/services"
            onClick={() => setOpen(false)}
          >
            Services
          </a>
          <a
            className="border-b border-[#1c2328] px-1 py-3.5 text-[15px] text-[#b4b6b8]"
            href="/services/product-engineering"
            onClick={() => setOpen(false)}
          >
            AI Product Engineering
          </a>
          <a
            className="border-b border-[#1c2328] px-1 py-3.5 text-[15px] text-[#b4b6b8]"
            href="#work"
            onClick={() => setOpen(false)}
          >
            Work
          </a>
          <a
            className="border-b border-[#1c2328] px-1 py-3.5 text-[15px] text-[#b4b6b8]"
            href="#insights"
            onClick={() => setOpen(false)}
          >
            Insights
          </a>
          <a
            className="border-b border-[#1c2328] px-1 py-3.5 text-[15px] text-[#b4b6b8]"
            href="#about"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            className="button button-primary mt-3.5 justify-center"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Talk to our team →
          </a>
        </nav>
      )}
    </div>
  );
}
