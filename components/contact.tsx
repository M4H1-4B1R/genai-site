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
          <span className="flex flex-col gap-[3px] text-[14px] text-[#9ca3af]">
            Email
            <strong className="text-base font-normal text-white">
              support@genailabs.agency
            </strong>
          </span>
          <span className="flex flex-col gap-[3px] text-[14px] text-[#9ca3af]">
            Phone
            <strong className="text-base font-normal text-white">
              00962776424784
            </strong>
          </span>
          <span className="flex flex-col gap-[3px] text-[14px] text-[#9ca3af]">
            Office
            <strong className="text-base font-normal text-white">
              Amman, Jordan
            </strong>
          </span>
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
          <label className="mb-6 flex flex-col gap-2 text-[#747d81] font-mono text-[10px] tracking-[0.7px] uppercase">
            Company
            <input
              className="border border-[#424a50] bg-ink p-3.5 text-white outline-none focus:border-orange"
              placeholder="Organization or studio"
            />
          </label>
          <label className="mb-6 flex flex-col gap-2 text-[#747d81] font-mono text-[10px] tracking-[0.7px] uppercase">
            Region
            <select
              className="border border-[#424a50] bg-ink p-3.5 text-white outline-none focus:border-orange"
              defaultValue=""
            >
              <option value="" disabled>
                Select a region
              </option>
              <option>Jordan</option>
              <option>North America</option>
              <option>Europe</option>
            </select>
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
          <input
            className="m-0 size-[18px] accent-orange"
            type="checkbox"
          />{" "}
          <span>Marketing consent</span>
          <small className="col-auto max-[640px]:col-start-2 font-sans text-[12px] leading-[1.5] tracking-normal text-[#747d81] normal-case">
            I agree to receive relevant project and product updates. I can
            withdraw consent at any time.
          </small>
        </label>
        <button className="button button-primary" type="submit">
          Talk to our team →
        </button>
      </form>
    </section>
  );
}
