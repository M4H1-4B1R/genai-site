import Image from "next/image";

import { MobileMenu } from "@/components/mobile-menu";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="GenAILabs home">
        <Image
          src="/figma/logo-yellow.png"
          alt=""
          width={54}
          height={30}
          priority
        />
        <span>GenAILabs</span>
      </a>
      <nav aria-label="Primary navigation">
        <a className="active" href="/services">
          Services <span>⌄</span>
        </a>
        <a href="#work">Work</a>
        <a href="#insights">Insights</a>
        <a href="#about">About</a>
      </nav>
      <a className="button button-outline header-cta" href="#contact">
        Talk to our team →
      </a>
      <MobileMenu />
    </header>
  );
}
