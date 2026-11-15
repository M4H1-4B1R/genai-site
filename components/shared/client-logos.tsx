import type { ReactNode } from "react";

// Real clients and products only (from the 2026 company profile).
// Mono (currentColor) marks are simplified redraws of each client's logo,
// not exact traces; swap for the official vector files if supplied.
const svgProps = {
  "aria-hidden": true,
  fill: "none",
  height: 24,
  viewBox: "0 0 24 24",
  width: 24,
  xmlns: "http://www.w3.org/2000/svg",
} as const;

function SpruceupMark() {
  return (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 5.5 8.2 10.5h2.4L7.4 14.5h3.2V18h2.8v-3.5h3.2l-3.2-4h2.4z"
        fill="currentColor"
      />
    </svg>
  );
}

function RennzoneMark() {
  return (
    <svg {...svgProps}>
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="2">
        <path d="M2 8h5M1 12h6M3 16h4" />
        <path d="M10.5 19V5h4.5a3.5 3.5 0 0 1 0 7h-4.5M14.5 12l4 7" strokeWidth="2.4" />
      </g>
    </svg>
  );
}

function ResinwerksMark() {
  return (
    <svg {...svgProps}>
      <path
        d="M7 4h10l5 8-5 8H7l-5-8z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M7 12h10" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function HuntoraMark() {
  return (
    <svg {...svgProps}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="2" />
      <path d="M13.2 6 8 13h3.6L10.8 18 16 11h-3.6z" fill="currentColor" />
    </svg>
  );
}

function RennworksMark() {
  return (
    <svg {...svgProps}>
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
        transform="skewX(-12) translate(3 0)"
      >
        <path d="M2 19V5h5a3 3 0 0 1 0 6H2M7 11l3 8" />
        <path d="M11 5l2 14 3-8 3 8 2-14" />
      </g>
    </svg>
  );
}

function KayaMark() {
  return (
    <svg {...svgProps}>
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="7" r="1.6" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 10 8 17.5M12 10l4 7.5M8.6 20q1.7-1.4 3.4 0t3.4 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

type Client = { name: string; tagline: string; icon?: ReactNode };

const clients: Client[] = [
  { name: "Spruceup", tagline: "Marketplace · Ireland", icon: <SpruceupMark /> },
  { name: "Rennzone", tagline: "Porsche marketplace", icon: <RennzoneMark /> },
  { name: "Resinwerks", tagline: "AI chatbot", icon: <ResinwerksMark /> },
  { name: "Huntora", tagline: "AI lead finder", icon: <HuntoraMark /> },
  { name: "Kaya", tagline: "AI health coach", icon: <KayaMark /> },
  { name: "Rennworks", tagline: "Porsche workshop site", icon: <RennworksMark /> },
  { name: "Vendor Hub", tagline: "Events app · UAE" },
];

export const clientStripItems = clients.map((c) => (
  <span className="client-logo" key={c.name}>
    <span className="client-logo-row">
      {c.icon}
      <strong>{c.name}</strong>
    </span>
    <small>{c.tagline}</small>
  </span>
));
