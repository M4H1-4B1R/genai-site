import Image from "next/image";

import { MobileMenu } from "@/components/mobile-menu";
import { ServicesDropdown } from "@/components/services-dropdown";

export function SiteHeader() {
  return (
    <header className="relative mx-auto flex h-20 min-w-0 max-w-[1280px] items-center justify-between border-b border-[#303437] px-8 max-[900px]:px-5 max-[640px]:h-auto max-[640px]:min-h-[72px] max-[640px]:py-4">
      <a
        className="flex items-center gap-4 text-2xl tracking-[-0.4px] max-[640px]:text-xl"
        href="/"
        aria-label="GenAILabs home"
      >
        <Image
          src="/figma/logo-yellow.png"
          alt=""
          width={54}
          height={30}
          className="h-[25px] w-[42px] object-contain"
          priority
        />
        <span>GenAILabs</span>
      </a>
      <nav
        className="ml-auto mr-10 flex gap-8 text-[14px] max-[900px]:mr-4 max-[900px]:gap-3.5 max-[900px]:text-[12px] max-[640px]:hidden"
        aria-label="Primary navigation"
      >
        <ServicesDropdown />
        <a className="px-0 pb-[25px] pt-[30px] text-[#b4b6b8]" href="#work">
          Work
        </a>
        <a className="px-0 pb-[25px] pt-[30px] text-[#b4b6b8]" href="#insights">
          Insights
        </a>
        <a className="px-0 pb-[25px] pt-[30px] text-[#b4b6b8]" href="#about">
          About
        </a>
      </nav>
      <a className="button button-outline max-[640px]:hidden" href="#contact">
        Talk to our team →
      </a>
      <MobileMenu />
    </header>
  );
}
