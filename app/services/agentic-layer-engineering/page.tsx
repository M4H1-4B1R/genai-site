import type { Metadata } from "next";

import { AgenticLayerEngineeringPage } from "@/components/agentic-layer-engineering-page";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Agentic Layer Engineering | GenAILabs",
  description:
    "Engineer agentic systems that use tools, coordinate multi-step work, and stay under evaluation and human oversight.",
};

export default function AgenticLayerEngineeringRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <AgenticLayerEngineeringPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
