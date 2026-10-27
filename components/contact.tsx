import Image from "next/image";

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
          <span className="flex items-start gap-3 text-[14px] text-[#9ca3af]">
            <Image
              className="mt-1"
              src="/figma/contact/mail.svg"
              alt=""
              width={16}
              height={16}
            />
            <span className="flex flex-col gap-[3px]">
              Email
              <strong className="text-base font-normal text-white">
                support@genailabs.agency
              </strong>
            </span>
          </span>
          <span className="flex items-start gap-3 text-[14px] text-[#9ca3af]">
            <Image
              className="mt-1"
              src="/figma/contact/phone.svg"
              alt=""
              width={16}
              height={16}
            />
            <span className="flex flex-col gap-[3px]">
              Phone
              <strong className="text-base font-normal text-white">
                +962776424784
              </strong>
            </span>
          </span>
          <span className="flex items-start gap-3 text-[14px] text-[#9ca3af]">
            <Image
              className="mt-1"
              src="/figma/contact/pin.svg"
              alt=""
              width={12}
              height={16}
            />
            <span className="flex flex-col gap-[3px]">
              Office
              <strong className="text-base font-normal text-white">
                Amman, Jordan
              </strong>
            </span>
          </span>
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
      <form className="border border-[#2a2d34] px-10 pt-9 pb-10 max-[640px]:px-[18px] max-[640px]:py-6">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="m-0 text-[28px]">Project intake</h3>
          <span className="text-[#747d81] font-mono text-[10px] tracking-[0.7px] uppercase">
            * Required fields
          </span>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 max-[640px]:grid-cols-1 max-[640px]:gap-0">
          <label className="mb-6 flex flex-col gap-2 text-[#747d81] font-mono text-[10px] tracking-[0.7px] uppercase">
            Name *
            <input
              className="border border-[#424a50] bg-ink p-3.5 text-white outline-none focus:border-orange"
              placeholder="Your full name"
            />
          </label>
          <label className="mb-6 flex flex-col gap-2 text-[#747d81] font-mono text-[10px] tracking-[0.7px] uppercase">
            Work email *
            <input
              className="border border-[#424a50] bg-ink p-3.5 text-white outline-none focus:border-orange"
              placeholder="name@company.com"
              type="email"
            />
          </label>
        </div>
        <label className="mb-6 flex flex-col gap-2 text-[#747d81] font-mono text-[10px] tracking-[0.7px] uppercase">
          What are you working on? *
          <textarea
            className="min-h-[130px] resize-y border border-[#424a50] bg-ink p-3.5 text-white outline-none focus:border-orange"
            placeholder="Describe the problem, current constraints, and what success needs to look like."
          />
        </label>
        <label className="mb-6 grid grid-cols-[18px_120px_1fr] items-start gap-2.5 leading-[1.5] text-[#747d81] font-mono text-[10px] tracking-[0.7px] uppercase max-[640px]:grid-cols-[18px_1fr]">
          <input className="m-0 size-[18px] accent-orange" type="checkbox" />{" "}
          <span>Marketing consent</span>
          <small className="col-auto max-[640px]:col-start-2 font-sans text-[12px] leading-[1.5] tracking-normal text-[#747d81] normal-case">
            I agree to receive relevant project and product updates. I can
            withdraw consent at any time.{" "}
            <a className="underline" href="/privacy-policy">
              View the Privacy Policy.
            </a>
          </small>
        </label>
        <button className="button button-primary" type="submit">
          Talk to our team →
        </button>
      </form>
    </section>
  );
}
