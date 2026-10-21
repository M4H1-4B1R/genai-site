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
		title: "NEXAGENT Retail Operations",
		description:
			"A venture studio fused with retail VC: autonomous operational systems that manage inventory distribution and automated reporting.",
		image: "/figma/nexagent-showcase.png",
		topics: ["Design", "Business", "Technology", "Marketing"],
		tags: ["Autonomous", "Retail VC", "Workflows"],
		proof: { label: "Operational Uptime", value: "99.98% unattended execution" },
		url: "/case-study/nexagents",
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
