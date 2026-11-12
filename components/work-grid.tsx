"use client";

import Image from "next/image";
import { useState } from "react";

type Project = {
	id: string;
	tag: string;
	category: string;
	title: string;
	description: string;
	image: string;
	imageAlt?: string;
	url: string;
	topics: string[];
	tags: string[];
	proof?: {
		label: string;
		value: string;
	};
};

const filterTopics = [
	"All topics",
	"Design",
	"Development",
	"Marketing",
	"Business",
	"Technology",
	"Client projects",
] as const;

type FilterTopic = (typeof filterTopics)[number];

const allProjects: Project[] = [
	{
		id: "kaya-health",
		tag: "HEALTHCARE AI",
		category: "AI PRODUCT ENGINEERING",
		title: "Kaya Health Coach",
		description:
			"AI functional medicine coach guiding people through structured wellness sessions, with real-time coaching and habit, goal and mood tracking.",
		image: "/figma/work/8b005.png",
		topics: ["Development", "Technology", "Design"],
		tags: ["Healthcare", "Semantic Search", "Production"],
		proof: { label: "Real-time streaming", value: "Under 1s to first token" },
		url: "/case-study/kaya",
	},
	{
		id: "smart-teacher",
		tag: "EDUCATION AI",
		category: "AI PRODUCT ENGINEERING",
		title: "Smart Teacher",
		description:
			"Arabic AI tutor that explains homework from a photo — step-by-step answers in Arabic or English, an AI teacher chat, lessons and a quiz mode.",
		image: "/figma/smart-teacher-hero.png",
		topics: ["Development", "Technology", "Design"],
		tags: ["Education", "Arabic", "Production"],
		proof: { label: "Play Console, 28 days", value: "60 installs from ~4,590 impressions" },
		url: "/case-study/smart-teacher",
	},
	{
		id: "sino360",
		tag: "AUTOMOTIVE MOBILE APP",
		category: "MOBILE PRODUCT ENGINEERING",
		title: "Sino 360",
		description:
			"Chinese VIN decoder app — specs, accident and title history and mileage checks from a camera scan or typed VIN, in five languages.",
		image: "/figma/sino360-hero.png",
		topics: ["Development", "Technology", "Design"],
		tags: ["Automotive", "Flutter", "Production"],
		proof: { label: "Google Play", value: "Live, 29.1 MB install" },
		url: "/case-study/sino360",
	},
	{
		id: "mashtal",
		tag: "AGRITECH AI",
		category: "AI PRODUCT ENGINEERING",
		title: "Mashtal AI",
		description:
			"Arabic AI plant doctor — photograph a sick plant and get a structured Arabic diagnosis, treatment plan and care schedule.",
		image: "/figma/mashtal-card.png",
		topics: ["Development", "Technology", "Design"],
		tags: ["Plants", "Arabic", "Launching"],
		proof: { label: "Per scan", value: "41 structured Arabic fields" },
		url: "/case-study/mashtal",
	},
	{
		id: "askdahab",
		tag: "TRAVEL & BOOKING PLATFORM",
		category: "AI PRODUCT ENGINEERING",
		title: "Ask Dahab",
		description:
			"Multilingual travel and booking platform for Dahab, Egypt — 6 languages, ~915 pages, 18 bookable experiences, admin panel, job portal, multilingual search, and Ask Sinai mobile app.",
		image: "/figma/askdahab-hero.png",
		topics: ["Development", "Technology", "Design", "Business"],
		tags: ["Travel", "Multilingual", "Production"],
		proof: { label: "Pages & URLs", value: "~915 pages, 903 URLs in sitemap" },
		url: "/case-study/askdahab",
	},
		{
		id: "mingcheji",
		tag: "TRADE COMPLIANCE AI",
		category: "AGENTIC LAYER ENGINEERING",
		title: "Mingcheji China Cars",
		description:
			"Bring cross-border trade documents, automated tariff inspections, and multi-jurisdiction compliance into one workflow.",
		image: "/figma/mingcheji-showcase.png",
		topics: ["Development", "Business", "Technology"],
		tags: ["Trade AI", "Compliance", "Multi-Agent"],
		proof: { label: "Audit Throughput", value: "10x document cycle velocity" },
		url: "/case-study/mingcheji",
	},
	{
		id: "nexagent",
		tag: "AUTONOMOUS LOGISTICS",
		category: "FORWARD-DEPLOYED SERVICES",
		title: "NEXAGENT AI WORKSPACE",
		description:
			"NexAgents (app.nexagents.cloud) puts production AI agents to work for a team — agents that answer reliably, per-person control over models, tools, passwords and company data, and metered token costs. Live in production",
		image: "/figma/nexagent-showcase.png",
		topics: ["Design", "Business", "Technology", "Marketing"],
		tags: ["Autonomous", "Retail VC", "Workflows"],
		proof: { label: "Operational Uptime", value: "99.98% unattended execution" },
		url: "/case-study/nexagents",
	},
	{
		id: "rennzone",
		tag: "MARKETPLACE",
		category: "CLIENT PROJECTS",
		title: "Rennzone",
		description:
			"The global Porsche marketplace — a fully custom Sharetribe build with payments, car listings and a blog. Live for over a year.",
		image: "/figma/rennzone-hero.png",
		topics: ["Development", "Technology", "Client projects"],
		tags: ["Marketplace", "Sharetribe", "Production"],
		proof: { label: "Search visibility", value: "50 ranking keywords, best at #8" },
		url: "/case-study/rennzone",
	},
	{
		id: "vendorhub",
		tag: "EVENTS MARKETPLACE",
		category: "CLIENT PROJECTS",
		title: "Vendor Hub",
		description:
			"Mobile app where UAE event organisers and vendors connect, find work and manage events — built from the client's idea, with a floor-plan builder, applicant review, teams and disputes.",
		image: "/figma/vendorhub-hero.png",
		topics: ["Development", "Technology", "Design", "Client projects"],
		tags: ["Marketplace", "Flutter", "Pre-launch"],
		proof: { label: "Single codebase", value: "Vendors and organisers in one app" },
		url: "/case-study/vendorhub",
	},
	{
		id: "rennworks",
		tag: "AUTOMOTIVE WEBSITE",
		category: "CLIENT PROJECTS",
		title: "Rennworks",
		description:
			"Porsche and McLaren care done right — a fully custom WordPress site with detailed service pages and a WhatsApp widget. Live for almost a year.",
		image: "/figma/rennworks-hero.png",
		topics: ["Development", "Technology", "Design", "Client projects"],
		tags: ["WordPress", "Automotive", "Production"],
		proof: { label: "Service coverage", value: "Porsche and McLaren workshops" },
		url: "/case-study/rennworks",
	},
	{
		id: "spruceup",
		tag: "MARKETPLACE",
		category: "CLIENT PROJECTS",
		title: "SpruceUp",
		description:
			"Two-sided marketplace for finding reliable cleaners in Ireland — automatic commission payments and document-based identity verification.",
		image: "/figma/spruceup-hero.png",
		topics: ["Development", "Technology", "Design", "Client projects"],
		tags: ["Marketplace", "Sharetribe", "Production"],
		proof: { label: "Trust layer", value: "Identity checks with real documents" },
		url: "/case-study/spruceup",
	},
	{
		id: "huntora",
		tag: "AI AUTOMATION",
		category: "CLIENT PROJECTS",
		title: "Huntora",
		description:
			"Lead discovery, email outreach and scheduled blog drafts in one workspace, with human review before publishing and read-only MCP access.",
		image: "/figma/huntora-hero.png",
		topics: ["Development", "Technology", "Marketing", "Client projects"],
		tags: ["Automation", "Next.js", "MCP"],
		proof: { label: "Discovery pilot", value: "56 focused tests passed" },
		url: "/case-study/huntora",
	},
];

export function WorkGrid() {
	const [selected, setSelected] = useState<FilterTopic>("All topics");

	const visible =
		selected === "All topics"
			? allProjects
			: allProjects.filter((p) => p.topics.includes(selected));

	return (
		<section id="work-grid" className="w-full">
			{/* Filter Pills */}
			<div
				role="tablist"
				aria-label="Filter by topic"
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
						{/* Image */}
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
								<span className="font-mono text-[10px] uppercase tracking-[0.5px] text-[#ffa600]">
									{project.tag}
								</span>
							</div>
						</div>

						{/* Body */}
						<div className="flex flex-1 flex-col p-6 sm:px-7 sm:py-6">
							<p className="font-mono text-[10px] uppercase tracking-[1px] text-[#ffc081]">
								{project.category}
							</p>
							<h3 className="mt-1.5 text-[20px] font-bold leading-snug text-[#f2f2ef] sm:text-[22px]">
								{project.title}
							</h3>
							<p className="mt-2.5 flex-1 text-sm leading-[1.65] text-[#aeb5b8]">
								{project.description}
							</p>

							{/* Link */}
							<a
								href={project.url}
								className="mt-5 inline-flex items-center gap-2 border-t border-[#1c2328] pt-4 text-[12px] font-bold uppercase tracking-[0.65px] text-[#f2f2ef] transition-colors duration-200 hover:text-orange"
							>
								<span>View Case Study</span>
								<span
									aria-hidden="true"
									className="transition-transform duration-200 group-hover:translate-x-1"
								>
									→
								</span>
							</a>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
