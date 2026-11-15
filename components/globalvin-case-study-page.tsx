import Image from "next/image";
import Link from "next/link";

import { ImageLightbox } from "@/components/shared/image-lightbox";
import { ServicesProofSlider } from "@/components/services-proof-slider";

type Fact = {
	label: string;
	value: string;
};

type NumberedCard = {
	title: string;
	description: string;
};

const heroTags = ["Web Platform & API Engineering", "In-house Product"];

const siteUrl = "https://globalvin.co/";

const snapshot: Fact[] = [
	{
		label: "Client / Context",
		value:
			"GlobalVIN (globalvin.co), an API-first vehicle history platform covering 150+ countries, built and run by GenAILabs",
	},
	{
		label: "Engagement",
		value: "GenAI Labs product (in-house build)",
	},
	{
		label: "Status",
		value: "Live at globalvin.co, maintained every day",
	},
	{
		label: "Technology",
		value: "Next.js · Node.js · TypeScript · JavaScript · Tailwind CSS",
	},
];

const riskBounds: Fact[] = [
	{
		label:
			"No medical data, so HIPAA does not apply. Built to comply with vehicle-data laws around the world, such as the US DPPA",
		value: "Vehicle-data law compliance",
	},
	{
		label:
			"Payments are processed by Stripe. The live site states SOC 2 compliance and data encryption. The privacy policy is linked from the site footer",
		value: "Stripe payments, SOC 2 stated",
	},
];

const contributions: NumberedCard[] = [
	{
		title: "One API for every vehicle",
		description:
			"A single RESTful endpoint that returns ownership, accident, title, theft, specification and mileage data from many regional databases at once.",
	},
	{
		title: "Full vehicle history reports",
		description:
			"Reports covering ownership history, accident and damage, title and status checks, theft and recovery, specifications and mileage records.",
	},
	{
		title: "Web dashboard & accounts",
		description:
			"A customer dashboard for API keys, usage and reports, with pay-per-use billing through Stripe.",
	},
	{
		title: "Developer portal",
		description:
			"API documentation, a sandbox with test VINs and initial credit, and SDKs for JavaScript, Python and PHP.",
	},
	{
		title: "White-label platforms",
		description:
			"Branded vehicle-check sites on a customer's own domain, so dealers, fleets and franchisees can launch in weeks, not months.",
	},
	{
		title: "Design to deployment",
		description:
			"The visual design, the Next.js app, the Node.js services, per-source landing pages, a blog and the production release, all by one team.",
	},
];

const deploymentDetails: Fact[] = [
	{
		label: "Integration pattern",
		value:
			"One request fans out to primary sources (Carfax, AutoCheck, NMVTIS, EuroCarCheck, MOT records, Interpol, Japanese auctions, Chinese registration data) and returns a single JSON response",
	},
	{
		label: "Data ownership",
		value:
			"GenAILabs built the platform, API and dashboard. The underlying records belong to the third-party sources, so accuracy and coverage depend on them. GlobalVIN is not affiliated with GlobalVinSolutions.com",
	},
	{
		label: "Business model",
		value:
			"Free developer access with pay-per-use pricing, plus white-label plans from $500 setup and $150 a month, and a complete enterprise white-label option",
	},
];

const evidence = [
	{
		label: "Search visibility",
		value: "9 ranking keywords, best at #10",
		source:
			"Includes carfax api (#15), autocheck api (#13), korean vin (#10) and chinese vin decoder (#19), each on its own landing page",
	},
	{
		label: "Coverage",
		value: "150+ countries, 20+ data sources",
		source: "As stated on globalvin.co and in the GenAI Labs company profile",
	},
	{
		label: "Key outcome",
		value: "One API, 99.9% uptime",
		source:
			"A single endpoint replaces many separate regional integrations. 99.9% uptime is the SLA stated on the live site",
		highlight: true,
	},
];

const capabilities: NumberedCard[] = [
	{
		title: "Web Platform & API Engineering",
		description:
			"The whole product: data aggregation API, customer dashboard, reports, developer portal, white-label sites and SEO landing pages.",
	},
	{
		title: "In-house delivery",
		description:
			"Designed, built, deployed and maintained by the same team, every day, with new data sources and regional APIs added over time.",
	},
];

const screens = [
	{
		src: "/figma/globalvin-hero.png",
		alt: "GlobalVIN home page: Global VIN Solution, vehicle history reports and VIN check API",
		caption: "Home page",
	},
	{
		src: "/figma/globalvin-report.png",
		alt: "GlobalVIN report data: ownership history, accident and damage, title and status, theft and recovery, specifications and mileage records",
		caption: "What one VIN lookup returns",
	},
];

const relatedWork = [
	{
		category: "Mobile Product Engineering",
		cycle: "Production",
		title: "Sino 360",
		description:
			"Companion mobile app to China Vehicle History: Chinese VIN decoder with specs, accident and title history and mileage checks, in five languages.",
		glow: true,
		image: "/figma/sino360-hero.png",
		href: "/case-study/sino360",
	},
	{
		category: "Car data",
		cycle: "Production",
		title: "Mingcheji",
		description:
			"Find used cars from China and check them first, with vehicle history reports drawn from the GlobalVIN data network.",
		glow: false,
		image: "/figma/mingcheji-hero.png",
		href: "/case-study/mingcheji",
	},
];

// Shared shell for the 1280px content bands below the snapshot.
const bandClass =
	"flex flex-col gap-12 section-x section-y max-[640px]:gap-8";

const cardClass = "rounded-[8px] border border-line bg-[#0f1417]";

// Subtle lift + orange border on hover; no movement for reduced-motion users.
const hoverClass =
	"transition duration-200 ease-out hover:-translate-y-1 hover:border-orange/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

function SectionHeading({
	eyebrow,
	title,
	description,
}: {
	eyebrow: string;
	title: string;
	description: string;
}) {
	return (
		<div className="flex items-end justify-between gap-8 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-4">
			<div className="flex max-w-[760px] flex-col gap-3">
				<p className="font-mono text-xs font-bold tracking-[1.2px] uppercase text-[#999ea2]">
					{eyebrow}
				</p>
				<h2 className="text-[clamp(30px,4vw,40px)] font-medium leading-[1.15] text-text">
					{title}
				</h2>
			</div>
			<p className="w-[430px] max-w-full shrink-0 text-[15px] leading-6 text-muted max-[900px]:w-auto">
				{description}
			</p>
		</div>
	);
}

function IndexBadge({ index }: { index: number }) {
	return (
		<span className="rounded-[4px] border border-orange px-2.5 py-1.5 font-mono text-xs font-bold tracking-[0.5px] text-orange">
			{String(index + 1).padStart(2, "0")}
		</span>
	);
}

function NumberedCards({ items, gap }: { items: NumberedCard[]; gap: string }) {
	return (
		<div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
			{items.map((item, i) => (
				<article
					key={item.title}
					className={`${cardClass} ${hoverClass} flex flex-col items-start p-6 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)] ${gap}`}
				>
					<IndexBadge index={i} />
					<div className="h-px w-full bg-[#1c2328]" aria-hidden="true" />
					<h3 className="text-lg font-bold leading-6 text-text">{item.title}</h3>
					<p className="text-[15px] leading-6 text-muted">{item.description}</p>
				</article>
			))}
		</div>
	);
}

export function GlobalVinCaseStudyPage() {
	return (
		<main className="w-full">
			{/* 1. HERO */}
			<section className="bg-deep section-x pt-20 pb-10 max-[640px]:pt-12">
				<div className="flex items-center gap-12 max-[900px]:flex-col max-[900px]:items-stretch">
					<div className="flex min-w-0 flex-1 flex-col items-start gap-6">
						<ul className="flex flex-wrap gap-2">
							{heroTags.map((tag) => (
								<li
									key={tag}
									className="rounded-full border border-line bg-[#0f1417] px-3 py-1 font-mono text-xs font-bold tracking-[0.6px] uppercase text-orange transition-colors duration-200 hover:border-orange"
								>
									{tag}
								</li>
							))}
						</ul>
						<h1 className="text-[clamp(40px,5vw,58px)] font-medium leading-[1.1] tracking-[-1.2px] text-text">
							GlobalVIN
						</h1>
						<p className="text-lg leading-7 text-muted">
							One API. Every vehicle. 150+ countries. Dealers, fleets, insurers and developers get a vehicle&apos;s full history in one request, or launch their own white-label vehicle check platform.
						</p>
						<div className="flex flex-wrap items-center gap-3">
							<span className="inline-flex items-center gap-1.5 rounded-full border border-orange px-2.5 py-1.5 font-mono text-xs font-bold tracking-[0.5px] uppercase text-orange">
								<span className="size-[5px] rounded-full bg-orange" aria-hidden="true" />
								Live at globalvin.co
							</span>
							<a
								href={siteUrl}
								target="_blank"
								rel="noreferrer"
								className="font-mono text-xs font-bold uppercase text-orange underline-offset-4 transition-colors duration-200 hover:text-text hover:underline"
							>
								Visit globalvin.co →
							</a>
						</div>
					</div>

					<div className="relative h-[360px] min-w-0 flex-1 max-[900px]:flex-none overflow-clip rounded-[8px] border border-line bg-[#0f1417] max-[640px]:h-[240px]">
						<ImageLightbox
							fit="cover"
							src="/figma/globalvin-hero.png"
							alt="GlobalVIN home page: Global VIN Solution, vehicle history reports and VIN check API"
							sizes="(max-width: 640px) 100vw, 50vw"
						/>
						<span className="pointer-events-none absolute bottom-6 left-6 rounded-[4px] border border-line bg-[rgba(13,14,15,0.8)] px-3 py-1.5 font-mono text-xs font-bold tracking-[0.6px] uppercase text-[#747d81]">
							Live website
						</span>
					</div>
				</div>
			</section>

			{/* 2. PROJECT SNAPSHOT */}
			<section className="border-y border-[#1c2328] bg-ink section-x py-[60px] max-[640px]:py-12">
				<div className="flex flex-col gap-8">
					<div className="flex items-end justify-between gap-8 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-4">
						<div className="flex flex-col gap-3">
							<p className="font-mono text-xs font-bold tracking-[1.2px] uppercase text-[#999ea2]">
								Snapshot
							</p>
							<h2 className="max-w-[447px] text-[clamp(30px,4vw,40px)] font-medium leading-[1.15] text-text">
								Production status &amp; delivery details.
							</h2>
						</div>
						<p className="text-[15px] leading-6 text-muted">
							Verified production status, stack, and maintenance model.
						</p>
					</div>
					<dl className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
						{snapshot.map((fact) => (
							<div key={fact.label} className={`${cardClass} ${hoverClass} flex flex-col gap-2 p-6`}>
								<dt className="font-mono text-xs font-bold tracking-[1px] uppercase text-[#747d81]">
									{fact.label}
								</dt>
								<dd className="text-[17px] font-bold leading-7 text-text">
									{fact.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</section>

			{/* 3. THE CHALLENGE */}
			<section className="bg-deep">
				<div className={bandClass}>
					<SectionHeading
						eyebrow="The challenge"
						title="What problem had to be solved?"
						description="The context, constraints, and risk surface that shaped every decision."
					/>
					<div className="flex items-start gap-8 max-[900px]:flex-col max-[900px]:items-stretch">
						<div className="flex min-w-0 flex-1 flex-col gap-6">
							<p className="border-l-4 border-orange pl-6 text-[clamp(24px,3vw,32px)] font-bold leading-[1.2] text-text">
								Vehicle history is scattered across dozens of regional databases, and most providers cover only one region.
							</p>
							<p className="text-[17px] leading-7 text-muted">
								Carfax and AutoCheck cover North America, auction and export records sit in Japan, registrations in China, MOT and EuroCarCheck in Europe, and theft data with Interpol. Getting a full picture meant juggling many providers, integrations and formats. GlobalVIN removes three pain points: data fragmentation (one VIN lookup returns everything), integration cost for developers (REST endpoints, SDKs, a sandbox and pay-per-use pricing), and time-to-market for non-developers (white-label platforms on their own domain). The buyers split the same way: dealers want instant lot checks, fleets want lifecycle and cross-border export data, insurers want claims verification and odometer rollback screening, and developers want raw API access.
							</p>
						</div>
						<aside className={`${cardClass} flex w-[380px] shrink-0 flex-col gap-5 p-6 max-[900px]:w-full`}>
							<p className="font-mono text-xs font-bold tracking-[1px] uppercase text-[#747d81]">
								Operational risk bounds
							</p>
							{riskBounds.map((metric, i) => (
								<div key={metric.value} className="flex flex-col gap-5">
									<div
										className={`h-px w-full ${i === 0 ? "bg-line" : "bg-[#1c2328]"}`}
										aria-hidden="true"
									/>
									<div className="flex flex-col gap-1">
										<p className="text-[clamp(18px,4vw,24px)] font-medium tracking-[-1px] text-orange">
											{metric.value}
										</p>
										<p className="text-[15px] leading-6 text-muted">
											{metric.label}
										</p>
									</div>
								</div>
							))}
						</aside>
					</div>
				</div>
			</section>

			{/* 4. CONTRIBUTIONS */}
			<section className="border-y border-[#1c2328] bg-ink">
				<div className={bandClass}>
					<SectionHeading
						eyebrow="Contributions"
						title="What GenAILabs built."
						description="Everything in-house except the vehicle records, which come from third-party sources."
					/>
					<NumberedCards items={contributions} gap="gap-5" />
				</div>
			</section>

			{/* 5. SYSTEM / SOLUTION */}
			<section className="bg-deep">
				<div className={bandClass}>
					<SectionHeading
						eyebrow="System / solution"
						title="How the product works."
						description="A Next.js web app and Node.js API that turn many regional databases into one response."
					/>
					<div className="grid grid-cols-2 gap-6 max-[900px]:grid-cols-1">
						{screens.map((screen) => (
							<figure key={screen.src} className="flex w-full flex-col gap-3">
								<Image
									src={screen.src}
									alt={screen.alt}
									width={1440}
									height={900}
									sizes="(max-width: 900px) 100vw, 50vw"
									className={`${hoverClass} h-auto w-full rounded-[8px] border border-line`}
								/>
								<figcaption className="text-center font-mono text-xs font-bold tracking-[0.8px] uppercase text-[#747d81]">
									{screen.caption}
								</figcaption>
							</figure>
						))}
					</div>
					<div className="flex items-center gap-4 rounded-[4px] border border-[#1c2328] bg-panel px-[18px] py-3.5 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2">
						<p className="shrink-0 font-mono text-xs font-bold tracking-[0.8px] uppercase text-orange">
							System architecture
						</p>
						<p className="text-[13px] leading-[19px] text-muted">
							Customer or white-label site, dashboard or API client → Next.js app and Node.js API → one VIN request fans out to primary sources by region (North America, Japan, China, Europe, global theft and customs data) → results merged into one report or JSON response → Stripe for billing. Hosted on AWS with auto-scaling and a global CDN, according to the live site.
						</p>
					</div>
				</div>
			</section>

			{/* 6. FLYWHEEL IMPULSE */}
			<section className="border-y border-[#1c2328] bg-ink">
				<div className={bandClass}>
					<SectionHeading
						eyebrow="Flywheel impulse"
						title="Deployment, integration, and real-world use."
						description="How the product is run today and where its data comes from."
					/>
					<div className="flex flex-col gap-6">
						<p className="border-l-4 border-orange pl-6 text-[17px] leading-7 text-muted">
							GlobalVIN is live at globalvin.co and maintained every day. It is an in-house GenAILabs product, so there is no client engagement: the same team designs, builds, deploys and runs it. It also powers the vehicle data behind our other automotive products.
						</p>
						<dl className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
							{deploymentDetails.map((detail) => (
								<div
									key={detail.label}
									className={`${hoverClass} flex flex-col gap-2 rounded-[4px] border border-[#1c2328] bg-[#0f1417] p-5`}
								>
									<dt className="font-mono text-xs font-bold tracking-[0.8px] uppercase text-[#747d81]">
										{detail.label}
									</dt>
									<dd className="text-[15px] leading-6 text-text">
										{detail.value}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</section>

			{/* 7. OUTCOMES / EVIDENCE */}
			<section className="bg-deep">
				<div className={bandClass}>
					<SectionHeading
						eyebrow="Outcomes / evidence"
						title="What is live today."
						description="Facts from the live site and search ranking data."
					/>
					<div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
						{evidence.map((item, i) => (
							<article
								key={i}
								className={`flex flex-col items-center gap-3 rounded-[8px] p-8 text-center ${item.highlight
										? "border-2 border-orange bg-panel shadow-[0_0_30px_rgba(255,152,0,0.25)] transition-shadow duration-200 hover:shadow-[0_0_44px_rgba(255,152,0,0.4)] motion-reduce:transition-none"
										: `${hoverClass} border border-line bg-[#0f1417] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)]`
									}`}
							>
								<p
									className={`font-mono text-xs font-bold tracking-[1px] uppercase ${item.highlight ? "text-orange" : "text-[#747d81]"
										}`}
								>
									{item.label}
								</p>
								<div
									className={`h-px w-full ${item.highlight ? "bg-line" : "bg-[#1c2328]"}`}
									aria-hidden="true"
								/>
								<p className="text-[clamp(18px,3.5vw,24px)] font-medium tracking-[-1px] text-text">
									{item.value}
								</p>
								<p className="text-[13px] leading-[19px] text-muted">
									{item.source}
								</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<ServicesProofSlider />

			{/* 8. CAPABILITIES INVOLVED */}
			<section className="border-y border-[#1c2328] bg-ink">
				<div className={bandClass}>
					<SectionHeading
						eyebrow="Capabilities involved"
						title="How core competencies were applied."
						description="Built, deployed and maintained end to end by the GenAILabs team."
					/>
					<NumberedCards items={capabilities} gap="gap-4" />
				</div>
			</section>

			{/* 9. RELATED WORK */}
			<section className="bg-deep">
				<div className={bandClass}>
					<SectionHeading
						eyebrow="Related work"
						title="Other vehicle data products."
						description="Two more products built on the same vehicle data."
					/>
					<div className="grid grid-cols-2 gap-8 max-[900px]:grid-cols-1">
						{relatedWork.map((project) => (
							<article
								key={project.title}
								className={`${cardClass} ${hoverClass} group flex flex-col gap-5 p-6 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)]`}
							>
								<div className="relative h-[180px] overflow-clip rounded-[4px] border border-[#1c2328] bg-deep">
									<Image
										src={project.image}
										alt=""
										fill
										sizes="(max-width: 900px) 100vw, 50vw"
										className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
									/>
									{project.glow && (
										<div className="absolute -right-px -top-px h-[140px] w-[150px] bg-[linear-gradient(223deg,rgba(255,152,0,0.1)_0%,rgba(255,152,0,0)_50%)] opacity-50 blur-[16px]" />
									)}
								</div>
								<div className="flex items-center justify-between">
									<span className="rounded-full border border-line bg-[#0f1417] px-2.5 py-1 font-mono text-xs font-bold tracking-[0.5px] uppercase text-orange">
										{project.category}
									</span>
									<span className="font-mono text-xs text-[#747d81]">
										{project.cycle}
									</span>
								</div>
								<div className="flex flex-col gap-2">
									<h3 className="text-2xl font-bold leading-[30px] text-text">
										{project.title}
									</h3>
									<p className="text-[15px] leading-6 text-muted">
										{project.description}
									</p>
								</div>
								<Link
									href={project.href}
									className="inline-flex min-h-11 items-center gap-2 font-bold text-orange"
								>
									<span className="text-[13px] leading-4 tracking-[0.65px] uppercase">
										View Case Study
									</span>
									<span
										aria-hidden="true"
										className="text-base transition-transform duration-200 group-hover:translate-x-1"
									>
										→
									</span>
								</Link>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* 10. CALLOUT CTA */}
			<section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#080b0d,#0f1417_50%,#080b0d)] section-x section-y">
				<div
					className="absolute left-1/2 top-1/2 h-[340px] w-[720px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-[12px] bg-[rgba(255,152,0,0.1)] blur-[65px]"
					aria-hidden="true"
				/>
				<div className="cta-panel cta-panel--sentence relative">
					<p className="eyebrow">
						<span className="cta-panel-dot" aria-hidden="true" />
						Let&apos;s talk
					</p>
					<h2>Have a similar challenge?</h2>
					<p>Let&apos;s discuss the problem you&apos;re trying to solve.</p>
					<a className="button button-primary" href="/contact">
						Talk to our team <span aria-hidden="true">→</span>
					</a>
				</div>
			</section>
		</main>
	);
}
