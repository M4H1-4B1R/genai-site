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

const heroTags = ["AI Product Engineering", "In-house Product"];

const snapshot: Fact[] = [
	{
		label: "Client / Context",
		value:
			"Mashtal AI (تشخيص النبات بالذكاء الاصطناعي) — Arabic AI plant doctor app, built by GenAILabs",
	},
	{
		label: "Engagement",
		value: "In-house GenAILabs product — no client engagement",
	},
	{
		label: "Status",
		value: "Launching. In Google Play submission; iOS not confirmed",
	},
	{
		label: "Technology",
		value:
			"Flutter/Dart, GetX, Hive · Firebase (Remote Config, Firestore) · Google Gemini 2.5 Flash · Microsoft Clarity · speech_to_text, camera, image_picker",
	},
];

const riskBounds: Fact[] = [
	{
		label:
			"No accounts or logins. Photos and notes go to Google's Gemini API; Clarity records sessions with an anonymous device ID; scan history stays on the device. No health data, so HIPAA does not apply",
		value: "No accounts, no health data",
	},
	{
		label:
			"AI diagnosis can be wrong, so results are advisory. Users can flag a result and trigger a corrected re-analysis",
		value: "Advisory results",
	},
];

const contributions: NumberedCard[] = [
	{
		title: "Photo-to-diagnosis flow",
		description:
			"Photograph a plant or pick one from the gallery, add a typed or spoken note, and get a structured Arabic diagnosis from Gemini 2.5 Flash.",
	},
	{
		title: "Structured Arabic report",
		description:
			"Plant ID, disease and severity, a treatment plan, care schedule, pet safety and seasonal tips — 41 structured fields per scan, from one Gemini prompt and JSON schema.",
	},
	{
		title: "Wrong-result feedback",
		description:
			"A feedback flow lets users challenge a diagnosis and get a corrected re-analysis.",
	},
	{
		title: "Arabic-first Flutter app",
		description:
			"Fully Arabic and right-to-left, with voice input and an on-device scan history in Hive that works offline.",
	},
	{
		title: "Firebase config",
		description:
			"Remote Config delivers the Gemini key and runtime settings, so the key can be rotated without a release.",
	},
	{
		title: "Branding & store compliance",
		description:
			"Logo, feature graphic, store listing, Data Safety form and privacy documentation, prepared for Google Play submission.",
	},
];

const deploymentDetails: Fact[] = [
	{
		label: "Integration pattern",
		value:
			"Photo and notes sent to the Google Gemini 2.5 Flash API; Remote Config for the key and settings; Microsoft Clarity for session insight; scan history stored on the device only",
	},
	{
		label: "Scale protocol",
		value:
			"The Gemini key is fetched through Remote Config but still reaches the client app, so Gemini calls move behind a backend before scaling",
	},
	{
		label: "Maintenance mode",
		value:
			"Maintained in-house. Monetization (freemium, with the full breakdown behind a paywall) has been discussed but is not decided or built",
	},
];

const evidence = [
	{
		label: "Per scan",
		value: "41 structured fields",
		source: "One photo returns 41 structured Arabic data fields",
	},
	{
		label: "Feedback loop",
		value: "Challenge & re-analyze",
		source: "Users can flag a wrong diagnosis and get a corrected re-analysis",
	},
	{
		label: "Pre-launch",
		value: "Offline history, no sign-up",
		source:
			"Scan history works offline and no sign-up is needed. Store assets and compliance documents are prepared for Play submission",
		highlight: true,
	},
];

const capabilities: NumberedCard[] = [
	{
		title: "AI Product Engineering",
		description:
			"The whole product: Flutter app, a Gemini prompt and JSON schema for structured Arabic diagnoses, voice input, on-device history and a feedback loop.",
	},
	{
		title: "In-house delivery",
		description:
			"Branding, store listing and compliance documents prepared by the same team, ready for Google Play submission.",
	},
];

const screens = [
	{ caption: "Scan a plant" },
	{ caption: "Arabic diagnosis" },
	{ caption: "Treatment & care plan" },
];

const relatedWork = [
	{
		category: "AI Product Engineering",
		cycle: "Production",
		title: "Smart Teacher",
		description:
			"Arabic AI tutor that explains homework from a photo — step-by-step answers, an AI teacher chat, lessons and a quiz mode.",
		glow: false,
		image: "/figma/smart-teacher-hero.png",
		href: "/case-study/smart-teacher",
	},
	{
		category: "AI Product Engineering",
		cycle: "Production",
		title: "Kaya Health Coach",
		description:
			"AI functional medicine coach live on both app stores — Flutter app, FastAPI backend, real-time LLM streaming, structured health journeys.",
		glow: true,
		image: "/figma/work/8b005.png",
		href: "/case-study/kaya",
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
				<p className="font-mono text-[11px] font-bold tracking-[1.2px] uppercase text-[#999ea2]">
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
		<span className="rounded-[4px] border border-orange px-2.5 py-1.5 font-mono text-[10px] font-bold tracking-[0.5px] text-orange">
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

export function MashtalCaseStudyPage() {
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
									className="rounded-full border border-line bg-[#0f1417] px-3 py-1 font-mono text-[10px] font-bold tracking-[0.6px] uppercase text-orange transition-colors duration-200 hover:border-orange"
								>
									{tag}
								</li>
							))}
						</ul>
						<h1 className="text-[clamp(40px,5vw,58px)] font-medium leading-[1.1] tracking-[-1.2px] text-text">
							Mashtal AI
						</h1>
						<p className="text-lg leading-7 text-muted">
							An Arabic AI plant doctor. Photograph a sick plant, add a typed or spoken note, and get a structured Arabic diagnosis with a treatment plan and care schedule.
						</p>
						<div className="flex flex-wrap items-center gap-3">
							<span className="inline-flex items-center gap-1.5 rounded-full border border-orange px-2.5 py-1.5 font-mono text-[10px] font-bold tracking-[0.5px] uppercase text-orange">
								<span className="size-[5px] rounded-full bg-orange" aria-hidden="true" />
								Launching — Google Play submission
							</span>
						</div>
					</div>

					<div className="relative h-[360px] min-w-0 flex-1 max-[900px]:flex-none overflow-clip rounded-[8px] border border-line bg-[#0f1417] max-[640px]:h-[240px]">
						<ImageLightbox
							fit="contain"
							src="/figma/mashtal-ai.jpg"
							alt="Mashtal AI mobile app — Arabic plant diagnosis screen"
							sizes="(max-width: 640px) 100vw, 50vw"
						/>
						<span className="pointer-events-none absolute bottom-6 left-6 rounded-[4px] border border-line bg-[rgba(13,14,15,0.8)] px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.6px] uppercase text-[#747d81]">
							Mobile app interface
						</span>
					</div>
				</div>
			</section>

			{/* 2. PROJECT SNAPSHOT */}
			<section className="border-y border-[#1c2328] bg-ink section-x py-[60px] max-[640px]:py-12">
				<div className="flex flex-col gap-8">
					<div className="flex items-end justify-between gap-8 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-4">
						<div className="flex flex-col gap-3">
							<p className="font-mono text-[11px] font-bold tracking-[1.2px] uppercase text-[#999ea2]">
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
								<dt className="font-mono text-[10px] font-bold tracking-[1px] uppercase text-[#747d81]">
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
								Arabic-speaking plant owners rarely find Arabic-first help when a plant is sick. Most identification apps are English-first, so users cannot tell what is wrong or what to do about it.
							</p>
							<p className="text-[17px] leading-7 text-muted">
								Mashtal AI had to turn one photo into a clear Arabic diagnosis and a plan the owner can act on. AI diagnosis can be wrong, so results are advisory and users can challenge them. It also had to stay light on data: no accounts, with scan history kept on the device.
							</p>
						</div>
						<aside className={`${cardClass} flex w-[380px] shrink-0 flex-col gap-5 p-6 max-[900px]:w-full`}>
							<p className="font-mono text-[10px] font-bold tracking-[1px] uppercase text-[#747d81]">
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
						description="Everything in-house except the Gemini API, Firebase and Clarity."
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
						description="A Flutter client talking directly to Gemini and Firebase, with history stored on the device."
					/>
					<div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1 max-[900px]:justify-items-center">
						{screens.map((screen) => (
							<figure
								key={screen.caption}
								className="flex w-full max-w-[360px] flex-col gap-3"
							>
								<div
									className={`${hoverClass} flex aspect-[9/16] w-full items-center justify-center rounded-[8px] border border-dashed border-line bg-[#0f1417] font-mono text-[10px] font-bold tracking-[1px] uppercase text-[#747d81]`}
								>
									Screenshot placeholder
								</div>
								<figcaption className="text-center font-mono text-[10px] font-bold tracking-[0.8px] uppercase text-[#747d81]">
									{screen.caption}
								</figcaption>
							</figure>
						))}
					</div>
					<div className="flex items-center gap-4 rounded-[4px] border border-[#1c2328] bg-panel px-[18px] py-3.5 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2">
						<p className="shrink-0 font-mono text-[10px] font-bold tracking-[0.8px] uppercase text-orange">
							System architecture
						</p>
						<p className="text-[13px] leading-[19px] text-muted">
							Flutter app (GetX, Hive) → photo and optional typed or spoken note sent to Google Gemini 2.5 Flash with a fixed prompt and JSON schema → structured Arabic diagnosis (41 fields) → saved to on-device history. A feedback flow re-runs the analysis on request. Remote Config delivers the key and settings; Microsoft Clarity records sessions.
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
						description="How the product is set up for launch, and what changes before it scales."
					/>
					<div className="flex flex-col gap-6">
						<p className="border-l-4 border-orange pl-6 text-[17px] leading-7 text-muted">
							Mashtal AI is in Google Play submission, with the listing, Data Safety form and store assets prepared. It is an in-house GenAILabs product, so there is no client engagement. iOS is not confirmed.
						</p>
						<dl className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
							{deploymentDetails.map((detail) => (
								<div
									key={detail.label}
									className={`${hoverClass} flex flex-col gap-2 rounded-[4px] border border-[#1c2328] bg-[#0f1417] p-5`}
								>
									<dt className="font-mono text-[10px] font-bold tracking-[0.8px] uppercase text-[#747d81]">
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
						title="What the product does today."
						description="Pre-launch, so only what the product does today. Traction figures follow after launch."
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
									className={`font-mono text-[10px] font-bold tracking-[1px] uppercase ${item.highlight ? "text-orange" : "text-[#747d81]"
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
						description="Built and prepared for launch end to end by the GenAILabs team."
					/>
					<NumberedCards items={capabilities} gap="gap-4" />
				</div>
			</section>

			{/* 9. RELATED WORK */}
			<section className="bg-deep">
				<div className={bandClass}>
					<SectionHeading
						eyebrow="Related work"
						title="Other production builds."
						description="Two more apps from the same team."
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
									<span className="rounded-full border border-line bg-[#0f1417] px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.5px] uppercase text-orange">
										{project.category}
									</span>
									<span className="font-mono text-[10px] text-[#747d81]">
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
									className="inline-flex items-center gap-2 font-bold text-orange"
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
