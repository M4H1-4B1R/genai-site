import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { ShopBotCaseStudyPage } from "@/components/shopbot-case-study-page";

export const metadata: Metadata = pageMeta(
  "ShopBot Case Study",
  "ShopBot: an online store powered by WhatsApp, with an AI support agent on WhatsApp, Messenger and Instagram, a web dashboard and a web storefront. Built and run in-house with Next.js and Node.js.",
  "/case-study/shopbot",
);

export default function ShopBotCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["ShopBot Case Study", "/case-study/shopbot"]])} />
      <SiteHeader />
      <ShopBotCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
