// Old genailabs.agency URLs -> new site. Permanent (308) so ranking signals transfer.
// Service mappings are best-fit guesses: review against the GSC Pages export.
const redirect = (source: string, destination: string) => ({
  source,
  destination,
  permanent: true,
});

// Old posts not migrated to content/insights yet. Remove an entry once the post
// is added (the generic /blog/:slug rule then takes over).
const unmigratedPosts = [
  "best-ai-governance-platforms-2026",
  "eu-ai-act-article-50-transparency-requirements",
  "eu-ai-act-compliance-guide-2026",
  "eu-ai-act-compliant-chatbot-requirements",
  "iso-42001-eu-ai-act-compliance",
];

const services: Record<string, string> = {
  "ai-development": "ai-product-engineering",
  "ai-development-company": "ai-product-engineering",
  "web-development": "ai-product-engineering",
  "mobile-development": "ai-product-engineering",
  "saas-development": "ai-product-engineering",
  "mvp-development-agency": "ai-product-engineering",
  "custom-software-development-agency": "ai-product-engineering",
  "ai-agent-development": "agentic-layer-engineering",
  "ai-agent-customer-support": "agentic-layer-engineering",
  "ai-automation-agency": "agentic-layer-engineering",
  "ai-consultation": "forward-deployed-services",
  "ai-consulting-company": "forward-deployed-services",
  "gtm-engineering": "forward-deployed-services",
};

export const redirects = [
  // Specific rules first: Next matches in order.
  ...unmigratedPosts.map((slug) => redirect(`/blog/${slug}`, "/insights")),
  redirect("/blog", "/insights"),
  redirect("/blog/:slug", "/insights/:slug"),
  redirect("/our-work", "/work"),
  redirect("/our-work/:slug", "/work"),
  redirect("/privacy", "/privacy-policy"),
  redirect("/terms", "/privacy-policy"),
  redirect("/cookies", "/privacy-policy"),
  redirect("/company-profile", "/about"),
  ...Object.entries(services).map(([old, next]) =>
    redirect(`/services/${old}`, `/services/${next}`),
  ),
  redirect("/locations/:slug", "/contact"),
  redirect("/eu-compliant-chat", "/insights"),
  redirect("/ar", "/"),
  redirect("/ar/:path*", "/"),
];
