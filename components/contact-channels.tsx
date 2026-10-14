import { SectionHeading } from "@/components/shared/section-heading";

const channels = [
  {
    tag: "01 / VOICE",
    title: "Call the studio",
    lines: ["00962776424784", "Mon–Fri / 09:00–18:00 GMT"],
    href: "tel:00962776424784",
  },
  {
    tag: "02 / INBOX",
    title: "Write to the team",
    lines: ["support@genailabs.agency", "Replies typically within 24 hours"],
    href: "mailto:support@genailabs.agency",
  },
  {
    tag: "03 / LOCATION",
    title: "Amman, Jordan",
    lines: ["Amman, Jordan", "Visits by appointment"],
  },
];

export function ContactChannels() {
  return (
    <section className="flex flex-col gap-12 border-y border-[#293137] bg-ink px-[max(80px,calc((100%_-_1280px)_/_2))] py-24 max-[900px]:px-8 max-[640px]:px-5 max-[640px]:py-[68px]">
      <SectionHeading
        eyebrow="DIRECT CHANNELS"
        title="Reach us your way"
        description="For time-sensitive questions, procurement, and scheduled studio visits, use a direct channel."
      />
      <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
        {channels.map(({ tag, title, lines, href }) => {
          const Card = href ? "a" : "div";
          return (
            <Card
              key={tag}
              className="flex min-h-[190px] flex-col gap-3 rounded-lg border border-[#293137] bg-[#191c1e] p-6"
              href={href}
            >
              <p className="text-[11px] font-medium text-orange">{tag}</p>
              <p className="text-[22px] font-bold text-white">{title}</p>
              <div className="text-[14px] text-[#c8c1c5]">
                <p className="break-words">{lines[0]}</p>
                <p>{lines[1]}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
