import type { Metadata } from "next";

import { LegalPage, type LegalSection } from "@/components/legal-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Privacy Policy",
  "How GenAILabs collects, uses, and protects your personal data.",
  "/privacy-policy",
);

const sections: LegalSection[] = [
  {
    "heading": "1. Introduction",
    "paragraphs": [
      "This Privacy Policy explains how GenAILabs Inc. (\"GenAILabs\", \"we\", \"us\") collects, uses, shares and protects personal data when you visit our website, contact us, subscribe to our newsletter, use our chat assistant, or engage us for software and AI engineering services.",
      "By using this website you acknowledge the practices described here. If you do not agree, please do not use the site."
    ]
  },
  {
    "heading": "2. Information We Collect",
    "paragraphs": [
      "Information you give us: your name, email address, company, role, phone number and the content of messages you send through our contact form, newsletter sign-up, chat assistant or email.",
      "Information collected automatically: IP address, browser and device type, pages viewed, referring pages, approximate location and interaction data, gathered through cookies and similar technologies such as analytics.",
      "Information from clients and partners: during an engagement we may process business contact details and project materials you provide. Where we process personal data on your behalf, our client agreement and data processing terms apply."
    ]
  },
  {
    "heading": "3. How We Use Information",
    "paragraphs": [
      "We use personal data to respond to enquiries and provide proposals; to deliver, maintain and improve our services and website; to send newsletters and updates you have asked for; to analyse site usage and performance; to protect our systems and prevent abuse; and to meet legal and contractual obligations.",
      "Where required by law, our legal bases are your consent, performance of a contract, our legitimate interests in running and improving our business, and compliance with legal obligations."
    ]
  },
  {
    "heading": "4. Chat Assistant and AI Features",
    "paragraphs": [
      "Messages you send to our website chat assistant are processed by third-party AI model providers to generate replies. Please do not enter sensitive personal, financial or confidential information into the chat. Conversations may be retained to improve the assistant and our services."
    ]
  },
  {
    "heading": "5. Cookies and Analytics",
    "paragraphs": [
      "We use cookies and similar technologies for essential site functions and for analytics (for example Google Analytics). You can control or delete cookies in your browser settings; blocking some cookies may affect how the site works."
    ]
  },
  {
    "heading": "6. Sharing of Information",
    "paragraphs": [
      "We do not sell your personal data. We share it only with service providers that help us operate (hosting, analytics, email and form handling, AI model providers), with professional advisers, when required by law or to protect rights and safety, and in connection with a merger, acquisition or sale of assets. Providers are bound to protect your data and use it only for the services they perform for us."
    ]
  },
  {
    "heading": "7. International Transfers",
    "paragraphs": [
      "We and our providers may process data in countries other than your own. Where required, we rely on appropriate safeguards such as standard contractual clauses."
    ]
  },
  {
    "heading": "8. Data Retention",
    "paragraphs": [
      "We keep personal data only as long as needed for the purposes in this policy, including to satisfy legal, accounting or reporting requirements. Enquiry and newsletter data is kept until you ask us to delete it or unsubscribe, or until it is no longer needed."
    ]
  },
  {
    "heading": "9. Security",
    "paragraphs": [
      "We use reasonable technical and organisational measures, including encryption in transit and access controls, to protect personal data. No method of transmission or storage is completely secure, so we cannot guarantee absolute security."
    ]
  },
  {
    "heading": "10. Your Rights",
    "paragraphs": [
      "Depending on where you live, you may have the right to access, correct, delete or export your personal data, to restrict or object to certain processing, to withdraw consent at any time, and to complain to your local data protection authority.",
      "To exercise these rights, email support@genailabs.agency. We may need to verify your identity before acting on a request. You can unsubscribe from marketing emails at any time using the link in them."
    ]
  },
  {
    "heading": "11. Children",
    "paragraphs": [
      "Our website and services are not directed to children under 16, and we do not knowingly collect their personal data. If you believe a child has given us data, contact us and we will delete it."
    ]
  },
  {
    "heading": "12. Changes to This Policy",
    "paragraphs": [
      "We may update this policy from time to time. The \"Last updated\" date above shows the latest revision, and material changes will be highlighted on this page."
    ]
  },
  {
    "heading": "13. Contact",
    "paragraphs": [
      "Questions about this policy or your personal data can be sent to support@genailabs.agency."
    ]
  }
];

export default function PrivacyPolicyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <LegalPage
        title="Privacy Policy"
        updated="Last updated: 12 November 2026"
        sections={sections}
      />
      <SiteFooter />
    </div>
  );
}
