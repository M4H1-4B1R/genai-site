"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-menu">
      <button
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        className="nav-toggle"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <nav className="mobile-nav-panel" id="mobile-nav-panel" aria-label="Mobile navigation">
          <a href="/services" onClick={() => setOpen(false)}>
            Services
          </a>
          <a href="#work" onClick={() => setOpen(false)}>
            Work
          </a>
          <a href="#insights" onClick={() => setOpen(false)}>
            Insights
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a
            className="button button-primary"
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
