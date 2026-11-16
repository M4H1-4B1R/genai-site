import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { ResinwerksCaseStudyPage } from "@/components/resinwerks-case-study-page";

export const metadata: Metadata = pageMeta(
  "Resinwerks Chatbot Case Study",
  "Resinwerks chatbot: a sitewide HubSpot chatbot powered by the OpenAI API and trained on the client's own business data. Built by GenAILabs and handed over to the client.",
  "/case-study/resinwerks",
);

export default function ResinwerksCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["Resinwerks Chatbot Case Study", "/case-study/resinwerks"]])} />
      <SiteHeader />
      <ResinwerksCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
