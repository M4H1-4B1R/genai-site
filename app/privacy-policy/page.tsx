import type { Metadata } from "next";

import { LegalPage, type LegalSection } from "@/components/legal-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Privacy Policy | GenAILabs",
  description:
    "How GenAILabs collects, uses, and protects your personal data.",
};

// Placeholder copy from the design; each paragraph appears twice there too.
const twice = (text: string) => [text, text];

const sections: LegalSection[] = [
  {
    heading: "1. Introduction",
    paragraphs: twice(
      "[This document outlines our commitment to safeguarding your privacy. It details how we manage your personal data, ensuring transparency and compliance with applicable laws.]",
    ),
  },
  {
    heading: "2. Information We Collect",
    paragraphs: twice(
      "[We collect various types of information, including personal details, usage data, and cookies, to enhance your experience and provide tailored services.]",
    ),
  },
  {
    heading: "3. How We Use Information",
    paragraphs: twice(
      "[Your information is utilized to improve our services, communicate with you, and ensure compliance with legal obligations.]",
    ),
  },
  {
    heading: "4. Data Retention",
    paragraphs: twice(
      "[We retain your data only as long as necessary to fulfill the purposes outlined in this policy, or as required by law.]",
    ),
  },
  {
    heading: "5. Your Rights",
    paragraphs: twice(
      "[You have the right to access, correct, or delete your personal information, as well as to restrict or object to its processing.]",
    ),
  },
  {
    heading: "6. Contact",
    paragraphs: twice(
      "[For any inquiries regarding this policy or your personal data, please reach out to our support team at support@genailabs.com.]",
    ),
  },
];

export default function PrivacyPolicyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <LegalPage
        title="Privacy Policy"
        updated="[Last updated: [date]"
        sections={sections}
      />
      <SiteFooter />
    </div>
  );
}
