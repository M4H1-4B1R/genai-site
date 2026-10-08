"use client";

interface ServicesDropdownProps {
  className?: string;
}

export function ServicesDropdown({ className }: ServicesDropdownProps) {
  return (
    <div
      className={`group relative inline-block ${className || ""}`}
    >
      <button
        className="border-b border-text px-0 pb-[25px] pt-[30px] text-text flex items-center group-hover:text-orange"
        aria-haspopup="true"
        aria-label="Services menu"
      >
        Services
        <span
          className={`pl-2.5 text-muted transition-transform duration-200 group-hover:rotate-180`}
        >
          ⌄
        </span>
      </button>
      <div
        className="absolute left-0 top-full z-50 -top-[1px] bg-ink border border-[#2a2d34] rounded-[4px] shadow-lg min-w-[240px] p-2 opacity-0 invisible transition-opacity duration-100 group-hover:opacity-100 group-hover:visible"
        role="menu"
        aria-label="Services submenu"
      >
        <a
          className="block px-4 py-3 text-[14px] text-[#f4f4f1] hover:text-orange hover:bg-[#0d0e0f] rounded-[4px] transition-colors"
          href="/services/product-engineering"
          role="menuitem"
        >
          AI Product Engineering
        </a>
        <a
          className="block px-4 py-3 text-[14px] text-[#b4b6b8] hover:text-orange hover:bg-[#0d0e0f] rounded-[4px] transition-colors"
          href="/services"
          role="menuitem"
        >
          All Services
        </a>
      </div>
    </div>
  );
}

