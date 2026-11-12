import type { Metadata } from "next";

import { LegalPage, type LegalSection } from "@/components/legal-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Terms of Use",
  "The terms that govern use of the GenAILabs website and chat assistant.",
  "/terms-of-use",
);

const sections: LegalSection[] = [
  {
    "heading": "1. Agreement to Terms",
    "paragraphs": [
      "These Terms of Use (\"Terms\") govern your access to and use of the GenAILabs Inc. (\"GenAILabs\", \"we\", \"us\") website and its content. By using the site you agree to these Terms and our Privacy Policy. If you do not agree, do not use the site.",
      "Work we perform for clients is governed by a separate written agreement or statement of work. If it conflicts with these Terms, the written agreement prevails."
    ]
  },
  {
    "heading": "2. Our Services",
    "paragraphs": [
      "GenAILabs provides software, AI product and agentic systems engineering, and related consulting. Content on this site is for general information and is not a binding offer. Scope, deliverables, timelines and fees are defined only in a signed proposal, statement of work or services agreement."
    ]
  },
  {
    "heading": "3. Acceptable Use",
    "paragraphs": [
      "You agree not to misuse the site. This includes attempting to gain unauthorised access, interfering with its operation, scraping it at a rate or in a manner that burdens our systems, introducing malware, using the chat assistant to generate unlawful, harmful or misleading content, or using the site in breach of any applicable law."
    ]
  },
  {
    "heading": "4. Intellectual Property",
    "paragraphs": [
      "The site, including its text, graphics, logos, code and design, is owned by GenAILabs or its licensors and protected by intellectual property laws. You may view and share links to the site for personal or internal business purposes, but may not copy, modify or distribute its content without our written permission.",
      "Ownership of deliverables created for clients is set out in the applicable client agreement."
    ]
  },
  {
    "heading": "5. Your Submissions",
    "paragraphs": [
      "If you send us information, such as enquiries or chat messages, you confirm you have the right to share it and grant us a licence to use it to respond to you and operate our services, as described in our Privacy Policy. Please do not send confidential or sensitive information through the website unless we have agreed a confidentiality arrangement."
    ]
  },
  {
    "heading": "6. AI-Generated Responses",
    "paragraphs": [
      "Our chat assistant uses AI and may produce inaccurate or incomplete answers. Its responses are informational, are not professional advice, and do not create a contract or commitment. Verify anything important with our team."
    ]
  },
  {
    "heading": "7. Third-Party Links and Services",
    "paragraphs": [
      "The site may link to third-party websites and services. We do not control them and are not responsible for their content, policies or practices."
    ]
  },
  {
    "heading": "8. Disclaimer of Warranties",
    "paragraphs": [
      "The site and its content are provided \"as is\" and \"as available\", without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose and non-infringement. We do not warrant that the site will be uninterrupted, secure or error-free."
    ]
  },
  {
    "heading": "9. Limitation of Liability",
    "paragraphs": [
      "To the fullest extent permitted by law, GenAILabs and its directors, employees and contractors are not liable for any indirect, incidental, special, consequential or punitive damages, or for loss of profits, data or goodwill, arising from your use of the site. Our total liability for any claim relating to the site is limited to USD 100. Nothing in these Terms limits liability that cannot be limited by law."
    ]
  },
  {
    "heading": "10. Indemnification",
    "paragraphs": [
      "You agree to indemnify and hold GenAILabs harmless from claims, losses and expenses, including reasonable legal fees, arising from your breach of these Terms or misuse of the site."
    ]
  },
  {
    "heading": "11. Termination",
    "paragraphs": [
      "We may suspend or restrict access to the site at any time, without notice, if you breach these Terms or for operational or legal reasons."
    ]
  },
  {
    "heading": "12. Governing Law",
    "paragraphs": [
      "These Terms are governed by the laws of the jurisdiction in which GenAILabs Inc. is incorporated, without regard to conflict of law rules. The courts of that jurisdiction have exclusive jurisdiction over disputes, except where local consumer law requires otherwise."
    ]
  },
  {
    "heading": "13. Changes to These Terms",
    "paragraphs": [
      "We may revise these Terms from time to time. The \"Last updated\" date shows the latest revision, and continued use of the site after changes means you accept them."
    ]
  },
  {
    "heading": "14. Contact",
    "paragraphs": [
      "Questions about these Terms can be sent to support@genailabs.agency."
    ]
  }
];

export default function TermsOfUseRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <LegalPage
        title="Terms of Use"
        updated="Last updated: 12 November 2026"
        sections={sections}
      />
      <SiteFooter />
    </div>
  );
}
