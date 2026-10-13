import type { Metadata } from "next";

import { AboutPage } from "@/components/about-page";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About | GenAILabs",
  description:
    "AI engineering built around real problems. We turn complex requirements into deployed, production-grade AI systems that earn trust through evidence.",
};

export default function AboutRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <AboutPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
