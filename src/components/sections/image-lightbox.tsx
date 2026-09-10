"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImageLightbox({
  images,
  index,
  alt,
  open,
  onClose,
  onIndexChange,
}: {
  images: string[];
  index: number;
  alt: string;
  open: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}) {
  const total = images.length;
  const current = images[index];

  const goPrev = useCallback(() => {
    if (total < 2) return;
    onIndexChange((index - 1 + total) % total);
  }, [index, onIndexChange, total]);

  const goNext = useCallback(() => {
    if (total < 2) return;
    onIndexChange((index + 1) % total);
  }, [index, onIndexChange, total]);

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, goPrev, goNext]);

  if (!open || !current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"
        aria-label="Close image viewer"
        onClick={onClose}
      />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-4">
        <div className="relative flex max-h-[78vh] w-full items-center justify-center">
          {total > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-0 z-20 rounded-full bg-white/90 p-2 text-primary shadow-lg transition hover:bg-white sm:-left-4"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-6" />
            </button>
          )}

          <div className="relative mx-auto max-h-[78vh] w-full overflow-hidden rounded-xl bg-black/20 shadow-2xl">
            <Image
              src={current}
              alt={`${alt} — image ${index + 1} of ${total}`}
              width={1600}
              height={1200}
              className="mx-auto max-h-[78vh] w-auto object-contain"
              unoptimized
              priority
            />
          </div>

          {total > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-0 z-20 rounded-full bg-white/90 p-2 text-primary shadow-lg transition hover:bg-white sm:-right-4"
              aria-label="Next image"
            >
              <ChevronRight className="size-6" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-3">
          <p className="rounded-full bg-black/55 px-3 py-1 text-sm font-semibold text-white">
            {index + 1} / {total}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-primary shadow"
          >
            <X className="size-4" />
            Close
          </button>
        </div>

        {total > 1 && (
          <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => onIndexChange(i)}
                className={cn(
                  "relative h-14 w-20 shrink-0 overflow-hidden rounded-md border-2 transition",
                  i === index
                    ? "border-accent opacity-100"
                    : "border-transparent opacity-60 hover:opacity-100",
                )}
                aria-label={`Go to image ${i + 1}`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  unoptimized
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
