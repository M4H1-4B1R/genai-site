"use client";

import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
          <MobileDropdown
            title="Services"
            isOpen={servicesOpen}
            onToggle={() => setServicesOpen((v) => !v)}
          >
            <MobileMenuItem
              href="/services/ai-product-engineering"
              label="AI Product Engineering"
              onSelect={() => setOpen(false)}
            />
            <MobileMenuItem
              href="/services"
              label="All Services"
              onSelect={() => setOpen(false)}
            />
          </MobileDropdown>
          <MobileMenuItem
            href="#work"
            label="Work"
            onSelect={() => setOpen(false)}
          />
          <MobileMenuItem
            href="#insights"
            label="Insights"
            onSelect={() => setOpen(false)}
          />
          <MobileMenuItem
            href="#about"
            label="About"
            onSelect={() => setOpen(false)}
          />
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

function MobileDropdown({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <button
        className="w-full flex items-center justify-between px-1 py-3.5 text-[15px] text-[#b4b6b8] border-b border-[#1c2328]"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{title}</span>
        {isOpen ? (
          <ChevronDown size={18} className="ml-2" />
        ) : (
          <ChevronRight size={18} className="ml-2" />
        )}
      </button>
      {isOpen && (
        <div className="flex flex-col pl-4">
          {children}
        </div>
      )}
    </div>
  );
}

function MobileMenuItem({
  href,
  label,
  onSelect,
}: {
  href: string;
  label: string;
  onSelect: () => void;
}) {
  return (
    <a
      className="block px-1 py-3 text-[15px] text-[#b4b6b8] hover:text-orange rounded-[4px]"
      href={href}
      onClick={onSelect}
    >
      {label}
    </a>
  );
}

