"use client";

interface ServicesDropdownProps {
  className?: string;
}

export function ServicesDropdown({ className }: ServicesDropdownProps) {
  return (
    <div className={`group relative inline-block ${className || ""}`}>
      <button
        className="flex items-center gap-2 border-b border-transparent px-0 pb-[25px] pt-[30px] text-text group-hover:text-orange"
        aria-haspopup="true"
        aria-label="Services menu"
      >
        <span className="underline decoration-1 underline-offset-[9px]">
          Services
        </span>
        {/* Down-arrow glyph (stem + head), lucide "arrow-down" shape.
            Rotates 180° (arrow points up) while the menu is open, via
            hover and keyboard focus; currentColor tracks the orange
            hover; transition-all covers both transform and color. */}
        <svg
          aria-hidden="true"
          className="size-3.5 shrink-0 transition-all duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 5v14m7-7-7 7-7-7" />
        </svg>
      </button>
      <div
        className="absolute left-0 top-full z-50 -top-[1px] bg-ink border border-[#2a2d34] rounded-[4px] shadow-lg min-w-[240px] p-2 opacity-0 invisible transition-opacity duration-100 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible"
        role="menu"
        aria-label="Services submenu"
      >
        <a
          className="block px-4 py-3 text-[14px] text-[#b4b6b8] hover:text-orange hover:bg-[#0d0e0f] rounded-[4px] transition-colors"
          href="/services"
          role="menuitem"
        >
          All Services
        </a>
        <a
          className="block px-4 py-3 text-[14px] text-[#b4b6b8] hover:text-orange hover:bg-[#0d0e0f] rounded-[4px] transition-colors"
          href="/services/ai-product-engineering"
          role="menuitem"
        >
          AI Product Engineering
        </a>
        <a
          className="block px-4 py-3 text-[14px] text-[#b4b6b8] hover:text-orange hover:bg-[#0d0e0f] rounded-[4px] transition-colors"
          href="/services/agentic-layer-engineering"
          role="menuitem"
        >
          Agentic Layer Engineering
        </a>
        <a
          className="block px-4 py-3 text-[14px] text-[#b4b6b8] hover:text-orange hover:bg-[#0d0e0f] rounded-[4px] transition-colors"
          href="/services/forward-deployed-services"
          role="menuitem"
        >
          Forward-Deployed Services
        </a>
      </div>
    </div>
  );
}
