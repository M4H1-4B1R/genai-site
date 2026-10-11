import type { Metadata } from "next";

import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkHubPage } from "@/components/work-hub-page";

export const metadata: Metadata = {
  title: "Work | GenAILabs",
  description:
    "Verified production deployments across AI product engineering, agentic systems, and forward-deployed services.",
};

export default function WorkPage() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <WorkHubPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
