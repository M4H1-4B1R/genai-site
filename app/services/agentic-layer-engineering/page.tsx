import type { Metadata } from "next";

import { AgenticLayerEngineeringPage } from "@/components/agentic-layer-engineering-page";
import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta, serviceLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Agentic Layer Engineering",
  "Engineer agentic systems that use tools, coordinate multi-step work, and stay under evaluation and human oversight.",
  "/services/agentic-layer-engineering",
);

export default function AgenticLayerEngineeringRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Services", "/services"], ["Agentic Layer Engineering", "/services/agentic-layer-engineering"]])} />
      <JsonLd data={serviceLd("Agentic Layer Engineering", "Engineer agentic systems that use tools, coordinate multi-step work, and stay under evaluation and human oversight.", "/services/agentic-layer-engineering")} />
      <SiteHeader />
      <AgenticLayerEngineeringPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
