import type { Metadata } from "next";

import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { RennzoneCaseStudyPage } from "@/components/rennzone-case-study-page";

export const metadata: Metadata = {
  robots: { index: false },
  title: "Rennzone Case Study | GenAILabs",
  description:
    "Rennzone: the global Porsche marketplace. A fully custom Sharetribe Extend build with payments, Porsche car listings and a blog, delivered end to end and live for over a year.",
};

export default function RennzoneCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <RennzoneCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
