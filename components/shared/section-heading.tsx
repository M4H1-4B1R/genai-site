export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-end justify-between gap-10 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-5">
      <div className="flex max-w-[760px] flex-col gap-3.5">
        <p className="text-[12px] uppercase tracking-[1.2px] text-[#999ea2]">
          {eyebrow}
        </p>
        <h2 className="text-[clamp(30px,3.5vw,40px)] font-medium uppercase leading-[1.08] tracking-[-1px] text-white">
          {title}
        </h2>
      </div>
      <p className="max-w-[400px] text-[17px] leading-[1.55] text-[#c8c1c5] max-[900px]:max-w-none">
        {description}
      </p>
    </div>
  );
}
