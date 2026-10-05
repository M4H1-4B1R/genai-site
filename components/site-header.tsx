import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="GenAILabs home">
        <Image src="/figma/raw-2.png" alt="" width={54} height={36} priority />
        <span>GenAILabs</span>
      </a>
      <nav aria-label="Primary navigation">
        <a className="active" href="#services">
          Services <span>⌄</span>
        </a>
        <a href="#work">Work</a>
        <a href="#insights">Insights</a>
        <a href="#about">About</a>
      </nav>
      <a className="button button-outline header-cta" href="#contact">
        Talk to our team →
      </a>
    </header>
  );
}
