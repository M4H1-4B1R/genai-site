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

const heroTags = ["Mobile Product Engineering", "In-house Product"];

const playStoreUrl =
	"https://play.google.com/store/apps/details?id=com.sino360.chinavin&hl=en";

const snapshot: Fact[] = [
	{
		label: "Client / Context",
		value:
			"Sino 360 – Chinese VIN Decoder (com.sino360.chinavin), a mobile app for Android and iOS, built and published by GenAILabs",
	},
	{
		label: "Engagement",
		value: "GenAI Labs product (in-house build)",
	},
	{
		label: "Status",
		value: "Live on Google Play. The iOS version is not live yet",
	},
	{
		label: "Technology",
		value:
			"Flutter/Dart · Firebase (Auth, Firestore, Remote Config, Messaging) · Stripe, PayPal, Apple In-App Purchase · Google ML Kit",
	},
];

const riskBounds: Fact[] = [
	{
		label:
			"Email-linked accounts, Firebase and session analytics. Account deletion is built in. No medical data, so HIPAA does not apply",
		value: "Account deletion built in",
	},
	{
		label:
			"Reports are informational and compiled from third-party sources, with an in-app disclaimer",
		value: "Informational reports",
	},
];

const contributions: NumberedCard[] = [
	{
		title: "VIN decoding & vehicle reports",
		description:
			"Decodes any VIN into specs, accident and title history, and mileage verification for Chinese-market vehicles.",
	},
	{
		title: "Three ways to enter a VIN",
		description:
			"Camera scan (text and barcode) with Google ML Kit, gallery upload with crop, or typing it in.",
	},
	{
		title: "Free & paid report tiers",
		description:
			"A free tier plus paid reports, with payments through Stripe, PayPal and Apple In-App Purchase.",
	},
	{
		title: "Five-language localization",
		description:
			"The full app in English, Arabic, Spanish, French and Russian.",
	},
	{
		title: "Accounts & privacy",
		description:
			"Sign in with Apple, Google or email through Firebase Auth, plus account deletion built to App Store requirements.",
	},
	{
		title: "Flutter app & store releases",
		description:
			"One Flutter codebase for Android and iOS, with Firestore, Remote Config and Messaging, and the Google Play releases.",
	},
];

const deploymentDetails: Fact[] = [
	{
		label: "Integration pattern",
		value:
			"Vehicle data from a licensed data provider; Firebase for auth, data, runtime config and messaging; Stripe, PayPal and Apple In-App Purchase for payments; Google ML Kit for scanning",
	},
	{
		label: "Data ownership",
		value:
			"GenAILabs built the app, integrations, localization and store releases. The vehicle data belongs to the licensed provider, not to GenAILabs",
	},
	{
		label: "Maintenance mode",
		value:
			"Maintained in-house with regular releases for features, fixes and store compliance, tracked through Google Play Console and Firebase",
	},
];

const evidence = [
	{
		label: "Distribution",
		value: "Live on Google Play",
		source: "Published on Google Play. The iOS version is not live yet",
	},
	{
		label: "Play Console",
		value: "29.1 MB install size",
		source: "From Google Play Console. Refresh before relying on it",
	},
	{
		label: "Key outcome",
		value: "5 languages + VIN scan",
		source:
			"English, Arabic, Spanish, French and Russian, with camera scan, gallery upload and manual entry. Sign in with Apple, Google or email, plus account deletion built to App Store requirements",
		highlight: true,
	},
];

const capabilities: NumberedCard[] = [
	{
		title: "Mobile Product Engineering",
		description:
			"The whole product: Flutter app, VIN scanning, report tiers with in-app payments, five-language localization, accounts and store releases.",
	},
	{
		title: "In-house delivery",
		description:
			"Built, released to Google Play and maintained by the same team, with regular updates for features, fixes and store compliance.",
	},
];

const screens = [
	{
		src: "/figma/sino360/home.png",
		alt: "Sino 360 home screen with VIN entry field, scan button and Check VIN button",
		caption: "Enter or scan a VIN",
	},
	{
		src: "/figma/sino360/reports.png",
		alt: "Sino 360 paid reports list: accident check, title status, specs decoder and maintenance records",
		caption: "Paid report tiers",
	},
	{
		src: "/figma/sino360/report.png",
		alt: "Sino 360 vehicle report for a 2022 Toyota Corolla with vehicle identity details",
		caption: "Vehicle report",
	},
];

const relatedWork = [
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
];

// Shared shell for the 1280px content bands below the snapshot.
const bandClass =
	"mx-auto flex max-w-[1280px] flex-col gap-12 px-[60px] py-20 max-[900px]:px-10 max-[640px]:gap-8 max-[640px]:px-5 max-[640px]:py-14";

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

export function Sino360CaseStudyPage() {
	return (
		<main className="w-full">
			{/* 1. HERO */}
			<section className="bg-deep px-[120px] pt-20 max-[900px]:px-10 max-[900px]:pb-16 max-[640px]:px-5 max-[640px]:pt-12 pb-10">
				<div className="mx-auto flex max-w-[1200px] items-center gap-12 max-[900px]:flex-col max-[900px]:items-stretch">
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
							Sino 360
						</h1>
						<p className="text-lg leading-7 text-muted">
							Chinese VIN decoding in your pocket. Buyers, importers and dealers scan or type a VIN and get specs, accident and title history, and mileage verification, in five languages.
						</p>
						<div className="flex flex-wrap items-center gap-3">
							<span className="inline-flex items-center gap-1.5 rounded-full border border-orange px-2.5 py-1.5 font-mono text-[10px] font-bold tracking-[0.5px] uppercase text-orange">
								<span className="size-[5px] rounded-full bg-orange" aria-hidden="true" />
								Live on Google Play
							</span>
							<a
								href={playStoreUrl}
								target="_blank"
								rel="noreferrer"
								className="font-mono text-[10px] font-bold uppercase text-orange underline-offset-4 transition-colors duration-200 hover:text-text hover:underline"
							>
								View on Google Play →
							</a>
						</div>
					</div>

					<div className="relative h-[360px] min-w-0 flex-1 max-[900px]:flex-none overflow-clip rounded-[8px] border border-line bg-[#0f1417] max-[640px]:h-[240px]">
						<ImageLightbox
							fit="contain"
							src="/figma/sino360-hero.png"
							alt="Sino 360 mobile app — VIN entry, report tiers and vehicle report screens"
							sizes="(max-width: 640px) 100vw, 50vw"
						/>
						<span className="pointer-events-none absolute bottom-6 left-6 rounded-[4px] border border-line bg-[rgba(13,14,15,0.8)] px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.6px] uppercase text-[#747d81]">
							Mobile app interface
						</span>
					</div>
				</div>
			</section>

			{/* 2. PROJECT SNAPSHOT */}
			<section className="border-y border-[#1c2328] bg-ink px-[120px] py-[60px] max-[900px]:px-10 max-[640px]:px-5 max-[640px]:py-12">
				<div className="mx-auto flex max-w-[1200px] flex-col gap-8">
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
								Buyers, importers and dealers have no easy way to verify the real history and specs of Chinese-market vehicles. Data is scattered, mostly in Chinese, and VINs are slow to type and check.
							</p>
							<p className="text-[17px] leading-7 text-muted">
								Sino 360 had to turn a VIN into a readable report in the buyer’s own language, and make the VIN itself fast to capture by scan, photo or typing. Reports are informational and compiled from third-party sources, so the app carries an in-app disclaimer, and account deletion is built in to meet store requirements.
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
						description="Everything in-house except the vehicle data, which comes from a licensed provider."
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
						description="A Flutter client backed by Firebase, a licensed vehicle data provider and three payment rails."
					/>
					<div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1 max-[900px]:justify-items-center">
						{screens.map((screen) => (
							<figure
								key={screen.src}
								className="flex w-full max-w-[360px] flex-col gap-3"
							>
								<Image
									src={screen.src}
									alt={screen.alt}
									width={725}
									height={1440}
									sizes="360px"
									className={`${hoverClass} h-auto w-full rounded-[8px] border border-line`}
								/>
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
							Flutter app on Android and iOS → VIN captured by camera scan (Google ML Kit text and barcode), gallery upload with crop, or typing → report built from a licensed vehicle data provider, free or paid tier → payments through Stripe, PayPal or Apple In-App Purchase. Firebase Auth, Firestore, Remote Config and Messaging for accounts, data, runtime settings and notifications.
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
							Sino 360 is live on Google Play; the iOS version is not live yet. It is an in-house GenAILabs product, so there is no client engagement: the same team builds, releases and maintains it.
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
						title="What is live today."
						description="Facts from Google Play, Play Console, Firebase and the build logs."
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

			<section className="border-y border-[#1c2328] bg-ink">
				<div className={bandClass}>
				<ServicesProofSlider />
				</div>
			</section>

			{/* 8. CAPABILITIES INVOLVED */}
			<section className="border-y border-[#1c2328] bg-ink">
				<div className={bandClass}>
					<SectionHeading
						eyebrow="Capabilities involved"
						title="How core competencies were applied."
						description="Built, released and maintained end to end by the GenAILabs team."
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
						description="Two more engagements from the same team."
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
			<section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#080b0d,#0f1417_50%,#080b0d)] px-20 py-24 max-[900px]:px-10 max-[640px]:px-5 max-[640px]:py-14">
				<div
					className="absolute left-1/2 top-1/2 h-[340px] w-[720px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-[12px] bg-[rgba(255,152,0,0.1)] blur-[65px]"
					aria-hidden="true"
				/>
				<div className="cta-panel cta-panel--sentence relative mx-auto max-w-[1280px]">
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
