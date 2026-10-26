import Image from "next/image";
import Link from "next/link";

import { MobileMenu } from "@/components/mobile-menu";
import { ServicesDropdown } from "@/components/services-dropdown";

export function SiteHeader() {
  return (
    /* Bar stays full-bleed; the inner wrapper only sets the site's content-
       grid padding — no mx-auto/max-w here, otherwise the content gets inset
       twice (centered box + grid padding) and the nav collides with the
       logo. `overflow-clip` on the site shell is the *clip* ancestor, not a
       scroll container, so sticky keeps working against the viewport
       scrollport. */
    <header className="sticky top-0 z-50 bg-ink border-b border-[#303437]">
      <div className="flex h-20 min-w-0 items-center justify-between px-[max(40px,calc((100%_-_1280px)_/_2))] max-[900px]:px-5 max-[640px]:h-auto max-[640px]:min-h-[72px] max-[640px]:py-4">
        <Link
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
        </Link>
        <nav
          className="ml-auto mr-10 flex gap-8 text-[14px] max-[900px]:mr-4 max-[900px]:gap-3.5 max-[900px]:text-[12px] max-[640px]:hidden"
          aria-label="Primary navigation"
        >
          <ServicesDropdown />
          <a className="px-0 pb-[25px] pt-[30px] text-[#b4b6b8]" href="/work">
            Work
          </a>
          <a className="px-0 pb-[25px] pt-[30px] text-[#b4b6b8]" href="/insights">
            Insights
          </a>
          <a className="px-0 pb-[25px] pt-[30px] text-[#b4b6b8]" href="/about">
            About
          </a>
        </nav>
        <a className="button button-outline max-[640px]:hidden" href="/contact">
          Talk to our team →
        </a>
        <MobileMenu />
      </div>
    </header>
  );
}
