"use client";

import Image from "next/image";
import { useRef } from "react";

type Props = { src: string; alt: string; sizes: string; fit?: "cover" | "contain" };

// Fills a `relative` parent; click opens the full, uncropped image in a modal.
export function ImageLightbox({ src, alt, sizes, fit = "cover" }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        aria-label={`View full image: ${alt}`}
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
        className="absolute inset-0 cursor-zoom-in"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={fit === "contain" ? "object-contain p-4" : "object-cover"}
        />
      </button>
      <dialog
        ref={dialog}
        aria-label={alt}
        // click on the backdrop (the dialog element itself) closes
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/85"
      >
        <div className="relative h-[88vh] w-[92vw]">
          <Image src={src} alt={alt} fill sizes="92vw" className="object-contain" />
        </div>
        <button
          type="button"
          aria-label="Close"
          onClick={() => dialog.current?.close()}
          className="absolute top-2 right-2 rounded-[4px] border border-line bg-[rgba(13,14,15,0.8)] px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.6px] uppercase text-text"
        >
          Close
        </button>
      </dialog>
    </>
  );
}
