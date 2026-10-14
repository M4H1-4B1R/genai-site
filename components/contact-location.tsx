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
        <div className="relative flex h-[500px] min-w-0 flex-1 flex-col justify-end overflow-hidden rounded border border-[#293137] p-6 max-[640px]:h-[380px]">
          <Image
            src="/figma/contact/map.png"
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 824px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#080b0d]/[0.27]" aria-hidden="true" />
          <Image
            src="/figma/contact/h-line.png"
            alt=""
            width={824}
            height={1}
            className="absolute left-0 top-[56%] h-px w-full"
            aria-hidden="true"
          />
          <Image
            src="/figma/contact/v-line.png"
            alt=""
            width={1}
            height={500}
            className="absolute left-[57.4%] top-0 h-full w-px"
            aria-hidden="true"
          />
          <div className="absolute left-[53.3%] top-[48.8%] flex w-[190px] -translate-x-1/2 flex-col items-center gap-2.5 max-[640px]:left-1/2">
            <div className="flex w-full flex-col gap-1 rounded-[2px] border border-orange bg-[#141a1e] p-3">
              <p className="text-[10px] uppercase text-orange">
                GenAI Lab / amman hq
              </p>
              <p className="text-[12px] text-[#f4f4f1]">Adress</p>
            </div>
            <Image src="/figma/contact/marker.svg" alt="" width={30} height={30} />
          </div>
          <p className="relative text-[10px] uppercase tracking-[0.8px] text-[#747d81]">
            Layer / Street / Transit / UTC +01:00
          </p>
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
