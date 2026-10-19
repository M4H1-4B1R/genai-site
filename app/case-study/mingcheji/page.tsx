import type { Metadata } from "next";

import { MingchejiCaseStudyPage } from "@/components/mingcheji-case-study-page";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  robots: { index: false },
  title: "Mingcheji Case Study | GenAILabs",
  description:
    "Mingcheji: a global car-history and parts platform for buyers outside China — six languages, USD pricing, piloted on a preview site.",
};

export default function MingchejiCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <MingchejiCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
