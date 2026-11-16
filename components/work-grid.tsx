"use client";

import Image from "next/image";
import { useState } from "react";

type Project = {
	id: string;
	tag: string;
	category: string;
	title: string;
	description: string;
	image?: string;
	imageAlt?: string;
	url?: string;
	topics: string[];
	tags: string[];
	proof?: {
		label: string;
		value: string;
	};
};

const filterTopics = [
	"All",
	"Our products",
	"Client projects",
	"AI agents",
	"Mobile apps",
	"Websites & marketplaces",
] as const;

type FilterTopic = (typeof filterTopics)[number];

const allProjects: Project[] = [
	{
		id: "kaya-health",
		tag: "HEALTHCARE AI",
		category: "CLIENT PROJECT",
		title: "Kaya Health Coach",
		description:
			"AI functional medicine coach guiding people through structured wellness sessions, with real-time coaching and habit, goal and mood tracking.",
		image: "/figma/work/8b005.png",
		topics: ["Client projects", "Mobile apps", "AI agents"],
		tags: ["Healthcare", "Semantic Search", "Production"],
		proof: { label: "Real-time streaming", value: "Under 1s to first token" },
		url: "/case-study/kaya",
	},
	{
		id: "smart-teacher",
		tag: "EDUCATION AI",
		category: "CLIENT PROJECT",
		title: "Smart Teacher",
		description:
			"Arabic AI tutor that explains homework from a photo — step-by-step answers in Arabic or English, an AI teacher chat, lessons and a quiz mode.",
		image: "/figma/smart-teacher-hero.png",
		topics: ["Client projects", "Mobile apps", "AI agents"],
		tags: ["Education", "Arabic", "Production"],
		proof: { label: "Play Console, 28 days", value: "60 installs from ~4,590 impressions" },
		url: "/case-study/smart-teacher",
	},
	{
		id: "sino360",
		tag: "AUTOMOTIVE MOBILE APP",
		category: "OUR PRODUCT",
		title: "Sino 360",
		description:
			"Companion mobile app to China Vehicle History: Chinese VIN decoder with specs, accident and title history and mileage checks from a camera scan or typed VIN, in five languages.",
		image: "/figma/sino360-hero.png",
		topics: ["Our products", "Mobile apps"],
		tags: ["Automotive", "Flutter", "Production"],
		proof: { label: "Google Play", value: "Live, 29.1 MB install" },
		url: "/case-study/sino360",
	},
	{
		id: "mashtal",
		tag: "AGRITECH AI",
		category: "OUR PRODUCT",
		title: "Mashtal AI",
		description:
			"Arabic AI plant doctor — photograph a sick plant and get a structured Arabic diagnosis, treatment plan and care schedule.",
		image: "/figma/mashtal-card.png",
		topics: ["Our products", "Mobile apps", "AI agents"],
		tags: ["Plants", "Arabic", "Launching"],
		proof: { label: "Per scan", value: "41 structured Arabic fields" },
		url: "/case-study/mashtal",
	},
	{
		id: "askdahab",
		tag: "TRAVEL & BOOKING PLATFORM",
		category: "OUR PRODUCT",
		title: "Ask Dahab",
		description:
			"Multilingual travel and booking platform for Dahab, Egypt — 6 languages, ~915 pages, 18 bookable experiences, admin panel, job portal, multilingual search, and Ask Sinai mobile app.",
		image: "/figma/askdahab-hero.png",
		topics: ["Our products", "Websites & marketplaces", "Mobile apps"],
		tags: ["Travel", "Multilingual", "Production"],
		proof: { label: "Pages & URLs", value: "~915 pages, 903 URLs in sitemap" },
		url: "/case-study/askdahab",
	},
	{
		id: "asksinai",
		tag: "TRAVEL & TRANSPORT APP",
		category: "OUR PRODUCT",
		title: "Ask Sinai",
		description:
			"Bilingual iOS and Android app for Dahab: ride offers by road or water, local discovery, tourism services and in-app tools for drivers, businesses and operations.",
		image: "/figma/asksinai-hero.webp",
		topics: ["Our products", "Mobile apps"],
		tags: ["Travel", "Flutter", "Production"],
		proof: { label: "Audiences", value: "Travelers, drivers, businesses, ops" },
		url: "/case-study/asksinai",
	},
		{
		id: "mingcheji",
		tag: "CAR DATA",
		category: "OUR PRODUCT",
		title: "Mingcheji",
		description:
			"Find used cars from China and check them first: vehicle history, specs and registration checks before you buy.",
		image: "/figma/mingcheji-showcase.png",
		topics: ["Our products", "Websites & marketplaces"],
		tags: ["Trade AI", "Compliance", "Multi-Agent"],
		proof: { label: "Audit Throughput", value: "10x document cycle velocity" },
		url: "/case-study/mingcheji",
	},
	{
		id: "nexagent",
		tag: "AI AGENTS FOR TEAMS",
		category: "AI AGENTS FOR TEAMS",
		title: "NexAgents",
		description:
			"NexAgents (app.nexagents.cloud) puts production AI agents to work for a team — agents that answer reliably, per-person control over models, tools, passwords and company data, and metered token costs. Live in production",
		image: "/figma/nexagent-showcase.png",
		topics: ["Our products", "AI agents"],
		tags: ["Autonomous", "Retail VC", "Workflows"],
		proof: { label: "Operational Uptime", value: "99.98% unattended execution" },
		url: "/case-study/nexagents",
	},
	{
		id: "rennzone",
		tag: "MARKETPLACE",
		category: "CLIENT PROJECT",
		title: "Rennzone",
		description:
			"The global Porsche marketplace — a fully custom Sharetribe build with payments, car listings and a blog. Live for over a year.",
		image: "/figma/rennzone-hero.png",
		topics: ["Client projects", "Websites & marketplaces"],
		tags: ["Marketplace", "Sharetribe", "Production"],
		proof: { label: "Search visibility", value: "50 ranking keywords, best at #8" },
		url: "/case-study/rennzone",
	},
	{
		id: "vendorhub",
		tag: "EVENTS MARKETPLACE",
		category: "CLIENT PROJECT",
		title: "Vendor Hub",
		description:
			"Mobile app where UAE event organisers and vendors connect, find work and manage events — built from the client's idea, with a floor-plan builder, applicant review, teams and disputes.",
		image: "/figma/vendorhub-hero.png",
		topics: ["Client projects", "Mobile apps", "Websites & marketplaces"],
		tags: ["Marketplace", "Flutter", "Pre-launch"],
		proof: { label: "Single codebase", value: "Vendors and organisers in one app" },
		url: "/case-study/vendorhub",
	},
	{
		id: "rennworks",
		tag: "AUTOMOTIVE WEBSITE",
		category: "CLIENT PROJECT",
		title: "Rennworks",
		description:
			"Porsche and McLaren care done right — a fully custom WordPress site with detailed service pages and a WhatsApp widget. Live for almost a year.",
		image: "/figma/rennworks-hero.png",
		topics: ["Client projects", "Websites & marketplaces"],
		tags: ["WordPress", "Automotive", "Production"],
		proof: { label: "Service coverage", value: "Porsche and McLaren workshops" },
		url: "/case-study/rennworks",
	},
	{
		id: "spruceup",
		tag: "MARKETPLACE",
		category: "CLIENT PROJECT",
		title: "SpruceUp",
		description:
			"Two-sided marketplace for finding reliable cleaners in Ireland — automatic commission payments and document-based identity verification.",
		image: "/figma/spruceup-hero.png",
		topics: ["Client projects", "Websites & marketplaces"],
		tags: ["Marketplace", "Sharetribe", "Production"],
		proof: { label: "Trust layer", value: "Identity checks with real documents" },
		url: "/case-study/spruceup",
	},
	{
		id: "huntora",
		tag: "AI AUTOMATION",
		category: "CLIENT PROJECT",
		title: "Huntora",
		description:
			"Lead discovery, email outreach and scheduled blog drafts in one workspace, with human review before publishing and read-only MCP access.",
		image: "/figma/huntora-hero.png",
		topics: ["Client projects", "AI agents"],
		tags: ["Automation", "Next.js", "MCP"],
		proof: { label: "Discovery pilot", value: "56 focused tests passed" },
		url: "/case-study/huntora",
	},
	{
		id: "globalvin",
		tag: "CAR DATA",
		category: "OUR PRODUCT",
		title: "GlobalVIN",
		description:
			"Any car's history, from 150+ countries, in one place. 20+ data sources, 99.9% uptime, VIN check API.",
		image: "/figma/globalvin-hero.png",
		topics: ["Our products", "Websites & marketplaces"],
		tags: ["Car data", "API", "Production"],
		proof: { label: "Search visibility", value: "9 ranking keywords, best at #10" },
		url: "/case-study/globalvin",
	},
	{
		id: "china-vehicle-history",
		image: "/figma/chinavehiclehistory-hero.png",
		tag: "CAR DATA",
		category: "OUR PRODUCT",
		title: "China Vehicle History",
		description:
			"History reports for cars made in China: VIN check and decoder, accident verification and title status. Part of the GlobalVIN network. Sino 360 is its companion mobile app.",
		topics: ["Our products", "Websites & marketplaces"],
		tags: ["Car data", "VIN check", "Production"],
		proof: { label: "Search visibility", value: "#1 for chinese vin decoder" },
		url: "/case-study/chinavehiclehistory",
	},
	{
		id: "shopbot",
		tag: "E-COMMERCE",
		category: "OUR PRODUCT",
		title: "ShopBot",
		description:
			"Your online store powered by WhatsApp: an AI support agent on WhatsApp, Messenger and Instagram answers customers, takes carts and checkouts, 24/7.",
		image: "/figma/shopbot-hero.webp",
		topics: ["Our products", "Websites & marketplaces", "AI agents"],
		tags: ["E-commerce", "WhatsApp", "Production"],
		proof: { label: "Channels", value: "WhatsApp, Messenger, Instagram" },
		url: "/case-study/shopbot",
	},
	{
		id: "resinwerks",
		tag: "AI CHATBOT",
		category: "CLIENT PROJECT",
		title: "Resinwerks",
		description:
			"A chatbot that answers from the company's own information, built on their existing platform with their internal data.",
		topics: ["Client projects", "AI agents"],
		tags: ["Chatbot", "OpenAI", "HubSpot"],
	},
	{
		id: "triten",
		tag: "CUSTOM AI SKILL",
		category: "CLIENT PROJECT",
		title: "Triten",
		description:
			"A custom Claude skill that applies Triten's own fonts, colours and tone to everything Claude writes.",
		topics: ["Client projects", "AI agents"],
		tags: ["Claude", "Branding"],
	},
	{
		id: "ebay-assistant",
		tag: "AI AGENT",
		category: "CLIENT PROJECT",
		title: "eBay Assistant",
		description:
			"Automatically replies to eBay buyer messages using trained patterns and the seller's own requirements.",
		topics: ["Client projects", "AI agents"],
		tags: ["Python", "n8n"],
	},
	{
		id: "linkedin-agent",
		tag: "AI AGENT",
		category: "CLIENT PROJECT",
		title: "LinkedIn Agent",
		description:
			"Outreach on autopilot: turns a spreadsheet into LinkedIn connection requests, with rate limiting.",
		topics: ["Client projects", "AI agents"],
		tags: ["n8n", "Automation"],
	},
	{
		id: "nda-review-agent",
		tag: "AI AGENT",
		category: "CLIENT PROJECT",
		title: "NDA Review Agent",
		description:
			"Checks NDAs and gives structured feedback on each clause.",
		topics: ["Client projects", "AI agents"],
		tags: ["CrewAI", "OpenAI"],
	},
	{
		id: "property-ad-writer",
		tag: "AI AGENT",
		category: "CLIENT PROJECT",
		title: "Property Ad Writer",
		description:
			"Writes property listings and ads, and connects them to Airtable.",
		topics: ["Client projects", "AI agents"],
		tags: ["OpenAI", "Airtable"],
	},
	{
		id: "private-in-house-ai",
		tag: "PRIVATE AI",
		category: "CLIENT PROJECT",
		title: "Private In-House AI",
		description:
			"A proof of concept for an AI that runs on the client's own servers, so no data leaves their infrastructure.",
		topics: ["Client projects", "AI agents"],
		tags: ["Local LLM", "Privacy"],
	},
	{
		id: "sprout",
		tag: "COACHING APP",
		category: "CLIENT PROJECT",
		title: "Sprout",
		description:
			"A coaching app built in Flutter.",
		topics: ["Client projects", "Mobile apps"],
		tags: ["Flutter"],
	},
	{
		id: "dispatch-training",
		tag: "TRAINING PLATFORM",
		category: "CLIENT PROJECT",
		// Codename, kept in sync by hand with PROJECT_NAME in
		// components/dispatch-training-case-study-page.tsx — that module is a Server
		// Component, so this client component cannot import the constant from it.
		title: "Callsign",
		description:
			"A two-sided web platform for training 911 dispatchers, with trainee, agency admin and superadmin panels. Under development; design not finalized.",
		// 29:12 variant of the feature board — the hero's 16:9 export would be
		// object-cover cropped here and lose the first and last feature rows.
		image: "/figma/callsign-card.webp",
		topics: ["Client projects", "Websites & marketplaces"],
		tags: ["Next.js", "Node", "In development"],
		proof: { label: "Status", value: "Under development" },
		url: "/case-study/dispatch-training",
	},
];

export function WorkGrid() {
	const [selected, setSelected] = useState<FilterTopic>("All");

	const visible =
		selected === "All"
			? allProjects
			: allProjects.filter((p) => p.topics.includes(selected));

	return (
		<section id="work-grid" className="w-full">
			{/* Filter Pills */}
			<div
				role="tablist"
				aria-label="Filter by category"
				className="flex items-center gap-2 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
			>
				{filterTopics.map((topic) => {
					const active = selected === topic;
					return (
						<button
							key={topic}
							role="tab"
							aria-selected={active}
							onClick={() => setSelected(topic)}
							type="button"
							className={`shrink-0 cursor-pointer rounded-full px-4 py-[7px] text-sm font-medium transition-all duration-200 ${active
									? "bg-orange text-black shadow-[0_0_14px_rgba(255,152,0,0.4)]"
									: "bg-transparent text-[#c8c1c5] hover:text-white"
								}`}
						>
							{topic}
						</button>
					);
				})}
			</div>

			{/* Projects Grid */}
			<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
				{visible.map((project) => (
					<article
						key={project.id}
						className="group flex flex-col overflow-hidden rounded-[2px] border border-[#293137] bg-[#0f1417] transition-all duration-300 hover:border-[#424a50] hover:shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
					>
						{/* Image (text-only cards have none) */}
						{project.image ? (
						<div className="relative aspect-[29/12] w-full overflow-hidden border-b border-[#293137] bg-[#13191d]">
							<Image
								src={project.image}
								alt={project.imageAlt ?? project.title}
								fill
								sizes="(max-width: 640px) 100vw, 50vw"
								className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
							/>
							{/* Tag pill */}
							<div className="absolute right-3 top-3 z-10 rounded-[2px] border border-[rgba(255,192,129,0.3)] bg-[rgba(8,11,13,0.85)] px-2 py-[3px] backdrop-blur-sm">
								<span className="font-mono text-xs uppercase tracking-[0.5px] text-[#ffa600]">
									{project.tag}
								</span>
							</div>
						</div>
						) : null}

						{/* Body */}
						<div className="flex flex-1 flex-col p-6 sm:px-7 sm:py-6">
							<p className="font-mono text-xs uppercase tracking-[1px] text-[#ffc081]">
								{project.category}
								{project.image ? "" : ` · ${project.tag}`}
							</p>
							<h3 className="mt-1.5 text-[20px] font-bold leading-snug text-[#f2f2ef] sm:text-[22px]">
								{project.title}
							</h3>
							<p className="mt-2.5 flex-1 text-sm leading-[1.65] text-[#aeb5b8]">
								{project.description}
							</p>

							{/* Link: only when there is a page to open */}
							{project.url ? (
								<a
									href={project.url}
									{...(project.url.startsWith("http")
										? { target: "_blank", rel: "noopener noreferrer" }
										: {})}
									className="mt-5 inline-flex items-center gap-2 border-t border-[#1c2328] pt-4 text-[12px] font-bold uppercase tracking-[0.65px] text-[#f2f2ef] transition-colors duration-200 hover:text-orange"
								>
									<span>
										{project.url.startsWith("http") ? "Visit site" : "View Case Study"}
									</span>
									<span
										aria-hidden="true"
										className="transition-transform duration-200 group-hover:translate-x-1"
									>
										→
									</span>
								</a>
							) : null}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
