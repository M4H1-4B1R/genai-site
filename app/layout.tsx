import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Space_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { gaId, siteUrl } from "@/lib/site";

import ChatWidget from "@/components/chat/chat-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteTitle = "AI Product Engineering & Agentic Systems | GenAILabs";
const siteDescription =
  "GenAILabs builds production AI products, agentic systems and forward-deployed engineering for startups and enterprises. Based in Amman.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "./" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "GenAILabs",
    type: "website",
    url: siteUrl,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${siteUrl}/#organization`,
                  name: "GenAILabs",
                  url: siteUrl,
                  logo: `${siteUrl}/figma/logo-yellow.png`,
                  description: siteDescription,
                  foundingDate: "2023",
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+962776424784",
                    email: "support@genailabs.agency",
                    contactType: "Customer Service",
                    availableLanguage: ["English", "Arabic"],
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Amman",
                    addressCountry: "JO",
                  },
                  sameAs: [
                    "https://twitter.com/genailabs",
                    "https://linkedin.com/company/genailabs",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: siteUrl,
                  name: "GenAILabs",
                  publisher: { "@id": `${siteUrl}/#organization` },
                },
              ],
            }),
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`}
        </Script>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
