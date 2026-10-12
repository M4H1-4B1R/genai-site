import type { Metadata } from "next";

import { Contact } from "@/components/contact";
import { InsightsPage } from "@/components/insights-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Insights | GenAILabs",
  description:
    "Practical thinking on AI products, agentic systems, implementation, and real-world use.",
};

export default function InsightsRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <InsightsPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
