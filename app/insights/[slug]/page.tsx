import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticlePage } from "@/components/article-page";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPost, getPosts, toSummary } from "@/lib/insights";
import { siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: `${post.title} | GenAILabs`,
    description: post.summary,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      url: `/insights/${post.slug}`,
      siteName: "GenAILabs",
      locale: "en_US",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ["GenAILabs"],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.summary },
  };
}

export default async function ArticleRoute({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const related = getPosts()
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.topic === post.topic) - Number(a.topic === post.topic))
    .slice(0, 3)
    .map(toSummary);

  const url = `${siteUrl}/insights/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.summary,
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: url,
        ...(post.image && { image: new URL(post.image.src, siteUrl).href }),
        author: { "@id": `${siteUrl}/#organization` },
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${siteUrl}/insights` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <ArticlePage post={post} related={related} />
      <Contact />
      <SiteFooter />
    </div>
  );
}
