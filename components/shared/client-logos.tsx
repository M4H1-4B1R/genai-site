import type { ReactNode } from "react";

const iconProps = {
  fill: "none",
  height: 24,
  viewBox: "0 0 24 24",
  width: 24,
  xmlns: "http://www.w3.org/2000/svg",
} as const;

function TechSolutionMark() {
  return (
    <svg {...iconProps} fill="currentColor" aria-hidden="true">
      <rect height="5" rx="1" width="5" x="2" y="2" />
      <rect height="12" rx="1" width="5" x="2" y="10" />
      <rect height="20" rx="1" width="5" x="10" y="2" />
      <rect height="5" rx="1" width="10" x="12" y="7" />
    </svg>
  );
}

function FrostbiteMark() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="2.4">
        <path d="M12 3v18" />
        <path d="M3 12h18" />
        <path d="M5.6 5.6l12.8 12.8" />
        <path d="M18.4 5.6L5.6 18.4" />
      </g>
    </svg>
  );
}

function DatawatchMark() {
  return (
    <svg {...iconProps} fill="currentColor" aria-hidden="true">
      <ellipse cx="12" cy="15.5" rx="6" ry="5.5" />
      <circle cx="5.2" cy="8.6" r="2.6" />
      <circle cx="12" cy="6.4" r="2.6" />
      <circle cx="18.8" cy="8.6" r="2.6" />
    </svg>
  );
}

function DataInsightMark() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="2.4">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.8v8.4" />
        <path d="M7.8 12h8.4" />
      </g>
    </svg>
  );
}

function NextgenMark() {
  return (
    <svg {...iconProps} fill="currentColor" aria-hidden="true">
      <path d="M12 3.5l9.5 17h-19z" />
    </svg>
  );
}

function ElevateMark() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="2.4">
        <path d="M3 20L8 4l5 16" />
        <path d="M5.4 14h5.2" />
        <path d="M15 4l6 16" />
      </g>
    </svg>
  );
}

type ClientLogo = {
  icon: ReactNode;
  name?: ReactNode;
  tagline: string;
};

const clientLogos: ClientLogo[] = [
  { icon: <TechSolutionMark />, tagline: "Tech Solution" },
  {
    icon: <FrostbiteMark />,
    name: <strong>Frostbite</strong>,
    tagline: "Cloud Data Architecture",
  },
  {
    icon: <DatawatchMark />,
    name: <strong>DATAWATCH</strong>,
    tagline: "System Monitoring",
  },
  {
    icon: <DataInsightMark />,
    name: <span className="name-light">DATA INSIGHT</span>,
    tagline: "Security & Strategy",
  },
  {
    icon: <NextgenMark />,
    name: <strong>NextGen</strong>,
    tagline: "Cloud Edge Computing",
  },
  {
    icon: <ElevateMark />,
    name: <strong>ELEVATE AI</strong>,
    tagline: "Next Generation Models",
  },
];

export const clientStripItems = clientLogos.map((logo) => (
  <span className="client-logo" key={logo.tagline}>
    <span className="client-logo-row">
      {logo.icon}
      {logo.name}
    </span>
    <small>{logo.tagline}</small>
  </span>
));
