import type { Metadata } from "next";

import { Contact } from "@/components/contact";
import { DispatchTrainingCaseStudyPage, PROJECT_NAME } from "@/components/dispatch-training-case-study-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  robots: { index: false },
  title: `${PROJECT_NAME} Case Study | GenAILabs`,
  description:
    `A two-sided web platform for training 911 dispatchers, with trainee, agency admin and superadmin panels. Under development; ${PROJECT_NAME} is a GenAILabs codename and the design is not finalized. Built with Next.js, Node.js and Tailwind.`,
};

export default function DispatchTrainingCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <DispatchTrainingCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
