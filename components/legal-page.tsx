export type LegalSection = { heading: string; paragraphs: string[] };

export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <main className="flex flex-col gap-20 px-[max(120px,calc((100%_-_1280px)_/_2+56px))] pb-20 pt-12 max-[900px]:px-8 max-[640px]:gap-12 max-[640px]:px-5">
      <div className="flex flex-col gap-12 max-[640px]:gap-8">
        <h1 className="text-[clamp(32px,4vw,44px)] font-bold text-[#f4f4f1]">
          {title}
        </h1>
        <p className="text-[12px] text-[#747d81]">{updated}</p>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 col-start-3 flex flex-col gap-3 p-5 max-[900px]:col-span-12 max-[900px]:col-start-1 max-[640px]:px-0">
          {sections.map(({ heading, paragraphs }) => (
            <section key={heading} className="flex flex-col gap-3">
              <h2 className="text-[25px] font-bold text-[#f4f4f1] max-[640px]:text-[22px]">
                {heading}
              </h2>
              {paragraphs.map((text, i) => (
                <p key={i} className="text-[17px] leading-[1.5] text-[#d1d5d6]">
                  {text}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
