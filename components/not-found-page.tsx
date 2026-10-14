import Image from "next/image";

export function NotFoundPage() {
  return (
    <main className="relative flex min-h-[720px] flex-col bg-[#080b0d] items-center justify-center gap-12 overflow-clip px-[120px] pb-20 pt-12 text-center max-[900px]:px-8 max-[640px]:min-h-[560px] max-[640px]:px-5">
      <Image
        src="/figma/not-found/artwork.png"
        alt=""
        width={1170}
        height={720}
        priority
        className="pointer-events-none absolute right-0 top-0 h-[720px] w-[1170px] max-w-none max-[900px]:hidden"
        aria-hidden="true"
      />
      <p className="relative text-[12px] font-bold text-orange">ERROR / 404</p>
      <div className="relative flex flex-col items-center gap-6 font-bold text-[#f4f4f1]">
        <h1 className="text-[120px] leading-none max-[640px]:text-[80px]">404</h1>
        <p className="text-[30px] max-[640px]:text-[24px]">Page not found</p>
      </div>
      <p className="relative text-[14px] text-[#aeb5b8]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
    </main>
  );
}
