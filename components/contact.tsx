import Image from "next/image";

import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <section
      className="grid grid-cols-2 gap-16 border-t border-[#2a2d34] px-[max(40px,calc((100%_-_1280px)_/_2))] py-16 max-[900px]:grid-cols-1 max-[640px]:px-5 max-[640px]:py-[68px]"
      id="contact"
    >
      <div className="self-center">
        <h2 className="mt-3.5 text-[clamp(40px,4vw,56px)] leading-[1.08] tracking-[-1.5px]">
          Contact us
        </h2>
        <p className="max-w-[520px] text-[18px] leading-[1.55] text-[#d1d5db]">
          Stop experimenting and start engineering. Let&apos;s discuss how we
          can turn your complex requirements into a deployed solution.
        </p>
        <div className="mt-[34px] flex flex-col gap-4">
          {/* Each contact row is one link (icon + label + value) with a
              group-hover accent so the whole row reads as clickable. Email
              opens a Gmail web compose (mailto would fight with desktop
              mail apps), phone opens WhatsApp chat, address opens Google
              Maps — official universal-link formats for each. */}
          <a
            className="group flex cursor-pointer items-start gap-3 text-[14px] text-[#9ca3af]"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=support@genailabs.agency"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="mt-1"
              src="/figma/contact/mail.svg"
              alt=""
              width={16}
              height={16}
            />
            <span className="flex flex-col gap-[3px]">
              Email
              <strong className="text-base font-normal text-white group-hover:text-orange">
                support@genailabs.agency
              </strong>
            </span>
          </a>
          <a
            className="group flex cursor-pointer items-start gap-3 text-[14px] text-[#9ca3af]"
            href="https://wa.me/962776424784"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="mt-1"
              src="/figma/contact/phone.svg"
              alt=""
              width={16}
              height={16}
            />
            <span className="flex flex-col gap-[3px]">
              Phone
              <strong className="text-base font-normal text-white group-hover:text-orange">
                +962776424784
              </strong>
            </span>
          </a>
          <a
            className="group flex cursor-pointer items-start gap-3 text-[14px] text-[#9ca3af]"
            href="https://www.google.com/maps/search/?api=1&query=Amman%2C+Jordan"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="mt-1"
              src="/figma/contact/pin.svg"
              alt=""
              width={12}
              height={16}
            />
            <span className="flex flex-col gap-[3px]">
              Office
              <strong className="text-base font-normal text-white group-hover:text-orange">
                Amman, Jordan
              </strong>
            </span>
          </a>
        </div>
        <div className="mt-9 flex gap-3">
          {/* lucide-react (v1.52) no longer ships brand glyphs, so the social
              icons are inline SVGs: Instagram (rounded square + lens + dot,
              stroke) and LinkedIn (the classic "in", filled). They inherit
              `currentColor`, so the site-wide orange link hover applies. */}
          <a
            aria-label="GenAILabs on Instagram"
            className="flex size-9 items-center justify-center rounded-full border border-[#293137] bg-[#191c1e] text-white"
            href="https://www.instagram.com/gen_ai_labs?cplk=aXEyZXc4M2pmcDM1"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              aria-hidden="true"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect height="19" rx="5.5" width="19" x="2.5" y="2.5" />
              <circle cx="12" cy="12" r="4.25" />
              <circle cx="17.4" cy="6.6" fill="currentColor" r="1.3" stroke="none" />
            </svg>
          </a>
          <a
            aria-label="GenAILabs on LinkedIn"
            className="flex size-9 items-center justify-center rounded-full border border-[#293137] bg-[#191c1e] text-white"
            href="https://www.linkedin.com/company/generative-ai-labs/posts/?feedView=all"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              aria-hidden="true"
              className="size-4"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 119.4z" />
            </svg>
          </a>
        </div>
      </div>
      {/* Form itself is a client component (fetch + status states). */}
      <ContactForm />
    </section>
  );
}
