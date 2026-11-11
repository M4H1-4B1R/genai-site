import type { Metadata } from "next";

import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { RennworksCaseStudyPage } from "@/components/rennworks-case-study-page";

export const metadata: Metadata = {
  robots: { index: false },
  title: "Rennworks Case Study | GenAILabs",
  description:
    "Rennworks: Porsche and McLaren care done right. A fully custom WordPress site with service documentation and a WhatsApp widget, delivered end to end and live for almost a year.",
};

export default function RennworksCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <RennworksCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
