import type { Metadata } from "next";

import { AboutPage } from "@/components/about-page";
import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "About",
  "AI engineering built around real problems. We turn complex requirements into deployed, production-grade AI systems that earn trust through evidence.",
  "/about",
);

export default function AboutRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["About", "/about"]])} />
      <SiteHeader />
      <AboutPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
