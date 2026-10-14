import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { SectionHeading } from "@/components/shared/section-heading";

export function ContactLocation() {
  return (
    <section className="flex flex-col gap-16 bg-[#0d1114] px-[max(80px,calc((100%_-_1280px)_/_2))] py-28 max-[900px]:px-8 max-[640px]:gap-10 max-[640px]:px-5 max-[640px]:py-[68px]">
      <SectionHeading
        eyebrow="LOCATION"
        title="Amman base. Global reach."
        description="Our core team operates from Amman with partners across North America, Europe, and Asia-Pacific."
      />
      <div className="flex gap-8 max-[900px]:flex-col">
        <div className="h-[500px] min-w-0 flex-1 overflow-hidden rounded border border-[#293137] bg-[#0f1417] max-[640px]:h-[380px]">
          {/* Keyless embed; the filter darkens Google's light tiles to fit the site. */}
          <iframe
            title="Map showing GenAILabs in Amman, Jordan"
            src="https://www.google.com/maps?q=Amman,+Jordan&z=12&output=embed"
            className="size-full border-0 [filter:invert(90%)_hue-rotate(180deg)_saturate(0.7)]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="flex min-h-[500px] w-[424px] shrink-0 flex-col justify-between gap-8 rounded border border-[#293137] bg-[#0f1417] p-10 max-[900px]:min-h-0 max-[900px]:w-full max-[640px]:p-6">
          <div className="flex flex-col gap-7">
            <Image src="/figma/contact/building.svg" alt="" width={32} height={32} />
            <div className="flex flex-col gap-3">
              <p className="text-[32px] font-bold text-white">AMMAN</p>
              <p className="text-[16px] leading-[1.55] text-[#c8c1c5]">Adress</p>
            </div>
            <div className="flex flex-col gap-3 border-t border-[#293137] pt-5">
              <p className="text-[11px] uppercase text-[#747d81]">
                Nearby transit stations
              </p>
              <p className="text-[15px] leading-[1.45] text-[#f4f4f1]">
                nearby station from base
              </p>
            </div>
          </div>
          <a
            className="flex h-[50px] items-center justify-center gap-3 rounded-[2px] border border-[#485359] px-6 text-[12px] font-bold uppercase tracking-[0.8px] text-white"
            href="https://maps.google.com/?q=Amman,+Jordan"
            target="_blank"
            rel="noreferrer"
          >
            Get directions
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
