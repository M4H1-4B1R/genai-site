import Link from "next/link";

import { ImageLightbox } from "@/components/shared/image-lightbox";

type Fact = {
  label: string;
  value: string;
};

type NumberedCard = {
  title: string;
  description: string;
};

const heroTags = ["Our Product", "Mobile Product Engineering"];

const snapshot: Fact[] = [
  {
    label: "Product",
    value: "Ask Sinai — travel and local services mobile app, with discovery content focused on Dahab",
  },
  {
    label: "Our role",
    value:
      "Product design, Flutter development, Firebase integration, travel and business API integration, and in-app admin tooling",
  },
  {
    label: "Platforms and languages",
    value: "iOS and Android, in Arabic and English with right-to-left layout support",
  },
  {
    label: "Technology",
    value: "Flutter, Dart, GetX, Firebase Auth, Firestore, Cloud Storage, Google Maps, Hive, Microsoft Clarity",
  },
];

const riskBounds: Fact[] = [
  {
    label:
      "Contact details, location data, profile information, booking requests and driver verification photos",
    value: "Personal data handled",
  },
  {
    label:
      "Transport is paid in cash. Experience bookings may continue through an external checkout or WhatsApp flow supplied by the booking service",
    value: "No in-app card payments",
  },
  {
    label:
      "Customer and driver deletion removes profile records and uploaded photos. SOS records are retained separately for safety",
    value: "Safety kept on record",
  },
];

const contributions: NumberedCard[] = [
  {
    title: "For travellers and residents",
    description:
      "Request a car or boat ride, compare driver offers and pick a fare. Discover hotels, experiences, beaches, dive centers, restaurants and bars, save favorites, and send an SOS during a trip.",
  },
  {
    title: "For drivers and captains",
    description:
      "Phone and one-time-code sign-in, vehicle or boat registration with document upload, approval status, ride requests with offers, trip progress and daily earnings.",
  },
  {
    title: "For businesses and providers",
    description:
      "Email-and-password accounts to manage profiles, photos, experience offers and tourism job posts, accept or decline booking requests, and report reviews.",
  },
  {
    title: "In-app operations tools",
    description:
      "Approve or reject driver registrations, review document updates, view SOS alerts, lock or unlock accounts with a reason, and look up users by phone number.",
  },
  {
    title: "Bilingual, right-to-left",
    description:
      "Arabic and English interfaces, including right-to-left layouts, share one consistent navigation across discovery, transport and services.",
  },
  {
    title: "Ask Dahab integration",
    description:
      "Ask Dahab APIs connect experience booking requests, trip planning, inquiries, business accounts, job management and provider tools.",
  },
];

const deploymentDetails: Fact[] = [
  {
    label: "Verification before access",
    value:
      "Drivers must be approved and unlocked before going online. Replacement documents stay separate until reviewed.",
  },
  {
    label: "Separate sessions",
    value:
      "Customers and drivers sign in with phone authentication. Business and provider accounts use a separate email-and-password session.",
  },
  {
    label: "Backend-confirmed bookings",
    value:
      "Catalogue prices are indicative. Final pricing and availability for experiences depend on the booking service.",
  },
];

const evidence = [
  {
    label: "Design decision",
    value: "Customer-chosen fares",
    source: "Offer-based booking lets customers review driver proposals before selecting one",
  },
  {
    label: "Design decision",
    value: "Fresher request lists",
    source: "The active driver feed filters expired pending requests and starts cleanup",
  },
  {
    label: "Design decision",
    value: "Fair ratings",
    source: "Skipped ratings do not count toward a driver's average",
  },
  {
    label: "Key outcome",
    value: "One bilingual app, four audiences",
    source:
      "Travellers, drivers and captains, tourism businesses and the operations team work in one product for iOS and Android.",
    highlight: true,
  },
];

const capabilities: NumberedCard[] = [
  {
    title: "Mobile Product Engineering",
    description:
      "Product design and a shared Flutter codebase for iOS and Android, from role selection to live trip tracking.",
  },
  {
    title: "Real-time Transport Workflows",
    description:
      "Ride requests, driver offers, live location, trip progress and verification, backed by Firebase and Google Maps.",
  },
];

const screens = [
  { src: "/figma/asksinai/roles.webp", label: "Choose a role", alt: "Ask Sinai role selection screen in Arabic with customer and driver or captain options" },
  { src: "/figma/asksinai/destination.webp", label: "Pick a destination", alt: "Ask Sinai map with route from Dahab to Blue Hole and address search" },
  { src: "/figma/asksinai/offer.webp", label: "Driver offer", alt: "Ask Sinai driver screen to adjust fare and send an offer for a ride request" },
  { src: "/figma/asksinai/trip.webp", label: "Live trip", alt: "Ask Sinai trip in progress with remaining time and a route on the map" },
];

const relatedWork = [
  {
    category: "AI Product Engineering",
    cycle: "Production",
    title: "Ask Dahab",
    description:
      "The web platform behind Ask Sinai: multilingual travel and booking for Dahab, with bookable experiences, an admin panel and a job portal.",
    image: "/figma/askdahab-hero.png",
    href: "/case-study/askdahab",
  },
  {
    category: "Client Project",
    cycle: "Pre-launch",
    title: "Vendor Hub",
    description:
      "A Flutter mobile app where UAE event organisers and vendors connect, find work and manage events.",
    image: "/figma/vendorhub-hero.png",
    href: "/case-study/vendorhub",
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

export function AskSinaiCaseStudyPage() {
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
              Ask Sinai
            </h1>
            <p className="text-lg leading-7 text-muted">
              Ask Sinai is a bilingual iOS and Android app that brings places
              to stay, local experiences and rides by road or water into one
              place, with discovery content focused on Dahab. It connects
              travelers, drivers, boat captains and tourism businesses, with
              built-in tools for the operations team.</p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange px-2.5 py-1.5 font-mono text-xs font-bold tracking-[0.5px] uppercase text-orange">
                <span className="size-[5px] rounded-full bg-orange" aria-hidden="true" />
                Live on App Store and Google Play
              </span>
              <a
                href="https://play.google.com/store/apps/details?id=com.genialabs.asksinai&hl=en"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs font-bold uppercase text-orange underline-offset-4 transition-colors duration-200 hover:text-text hover:underline"
              >
                View on Google Play →
              </a>
            </div>
          </div>

          <div className="relative h-[360px] min-w-0 flex-1 max-[900px]:flex-none overflow-clip rounded-[8px] border border-line bg-[#0f1417] max-[640px]:h-[240px]">
            <ImageLightbox
              src="/figma/asksinai-hero.webp"
              alt="Ask Sinai — mobile app for rides, local discovery and tourism services in Dahab"
              sizes="(max-width: 640px) 100vw, 32vw"
            />
            <span className="absolute bottom-6 left-6 rounded-[4px] border border-line bg-[rgba(13,14,15,0.8)] px-3 py-1.5 font-mono text-xs font-bold tracking-[0.6px] uppercase text-[#747d81]">
              App screens
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
                Delivery, status and stack.
              </h2>
            </div>
            <p className="text-[15px] leading-6 text-muted">
              Verified status, engagement and technology.
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

      {/* 4. THE CHALLENGE */}
      <section className="bg-deep">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="The challenge"
            title="One journey, many different needs."
            description="The context, constraints and data handling that shaped every decision."
          />
          <div className="flex items-start gap-8 max-[900px]:flex-col max-[900px]:items-stretch">
            <div className="flex min-w-0 flex-1 flex-col gap-6">
              <p className="border-l-4 border-orange pl-6 text-[clamp(24px,3vw,32px)] font-bold leading-[1.2] text-text">
                Exploring Sinai means connecting stays, local experiences and
                transport by road or water. These needs had to live together in
                one consistent mobile experience.</p>
              <p className="text-[17px] leading-7 text-muted">
                Travelers needed straightforward booking flows and a choice of
                ride offers. Drivers and boat captains needed clear tools for
                daily work. Tourism businesses needed to manage their services,
                and operations staff needed oversight of driver verification
                and safety reports.</p>
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

      {/* 5. CONTRIBUTIONS */}
      <section className="border-y border-[#1c2328] bg-ink">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Contributions"
            title="What we built."
            description="One bilingual app serving four audiences."
          />
          <NumberedCards items={contributions} gap="gap-5" />
        </div>
      </section>

      {/* 6. SYSTEM / SOLUTION */}
      <section className="bg-deep">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="System / solution"
            title="The app, screen by screen."
            description="Flutter app, Firebase and Ask Dahab APIs."
          />
          <ul className="grid grid-cols-4 gap-6 max-[900px]:grid-cols-2">
            {screens.map((screen) => (
              <li key={screen.src} className="flex flex-col gap-3">
                <div className="relative aspect-[1/2] overflow-clip rounded-[8px] border border-line bg-[#0f1417]">
                  <ImageLightbox
                    src={screen.src}
                    alt={screen.alt}
                    sizes="(max-width: 900px) 50vw, 25vw"
                    fit="contain"
                  />
                </div>
                <p className="font-mono text-xs font-bold tracking-[0.6px] uppercase text-[#747d81]">
                  {screen.label}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 rounded-[4px] border border-[#1c2328] bg-panel px-[18px] py-3.5 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2">
            <p className="shrink-0 font-mono text-xs font-bold tracking-[0.8px] uppercase text-orange">
              System architecture
            </p>
            <p className="text-[13px] leading-[19px] text-muted">
              One Flutter app (Dart, GetX) with Firebase Authentication, Cloud Firestore and Cloud Storage for accounts, transport data and document uploads. Google Maps, location and geocoding power ride workflows; Hive stores data locally; Microsoft Clarity supports usage analysis.</p>
          </div>
        </div>
      </section>

      {/* 7. FLYWHEEL IMPULSE */}
      <section className="border-y border-[#1c2328] bg-ink">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Flywheel impulse"
            title="Verification, sessions and bookings."
            description="How access, accounts and bookings are controlled."
          />
          <div className="flex flex-col gap-6">
            <p className="border-l-4 border-orange pl-6 text-[17px] leading-7 text-muted">
              Ask Sinai is live on the App Store and Google Play. It brings
              transport, local discovery and tourism services together with the
              tools local operators need to manage their work.</p>
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

      {/* 8. OUTCOMES / EVIDENCE */}
      <section className="bg-deep">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Outcomes / evidence"
            title="Design decisions that mattered."
            description="Choices that shaped how transport, verification and ratings work."
          />
          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {evidence.map((item, i) => (
              <article
                key={i}
                className={`flex flex-col items-center gap-3 rounded-[8px] p-8 text-center ${
                  item.highlight
                    ? "border-2 border-orange bg-panel shadow-[0_0_30px_rgba(255,152,0,0.25)] transition-shadow duration-200 hover:shadow-[0_0_44px_rgba(255,152,0,0.4)] motion-reduce:transition-none"
                    : `${hoverClass} border border-line bg-[#0f1417] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)]`
                }`}
              >
                <p
                  className={`font-mono text-xs font-bold tracking-[1px] uppercase ${
                    item.highlight ? "text-orange" : "text-[#747d81]"
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

      {/* 9. TESTIMONIAL */}

      {/* 10. CAPABILITIES INVOLVED */}
      <section className="bg-deep">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Capabilities involved"
            title="How core competencies were applied."
            description="Mobile product design and real-time transport workflows."
          />
          <NumberedCards items={capabilities} gap="gap-4" />
        </div>
      </section>

      {/* 11. RELATED WORK */}
      <section className="border-y border-[#1c2328] bg-ink">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Related work"
            title="Related work."
            description="Related travel, booking and mobile products built by the same team."
          />
          <div className="grid grid-cols-2 gap-8 max-[900px]:grid-cols-1">
            {relatedWork.map((project) => (
              <article
                key={project.title}
                className={`${cardClass} ${hoverClass} group flex flex-col gap-5 p-6 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)]`}
              >
                <div className="relative h-[180px] overflow-clip rounded-[4px] border border-[#1c2328] bg-deep">
                  <ImageLightbox
                    src={project.image}
                    alt=""
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
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

      {/* 12. CALLOUT CTA */}
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
