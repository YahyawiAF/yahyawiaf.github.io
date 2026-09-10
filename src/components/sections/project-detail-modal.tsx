"use client";

import { useState } from "react";
import Image from "next/image";
import {
  capabilities,
  type Capability,
  type Project,
} from "@/content/site";
import { ProjectPreview } from "@/components/project-previews";
import { ImageLightbox } from "@/components/sections/image-lightbox";
import { StackLogoGrid, type StackLogoItem } from "@/components/stack-logo-grid";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const capabilityStyles: Record<Capability, string> = {
  web: "bg-[#1a3a6b]/10 text-[#1a3a6b]",
  mobile: "bg-[#4a9fd8]/15 text-[#1a3a6b]",
  backend: "bg-[#3d8c4a]/15 text-[#1f5a2e]",
  design: "bg-[#f0c14a]/25 text-[#1a2744]",
};

export function ProjectDetailModal({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  function handleProjectOpenChange(next: boolean) {
    if (!next) setLightboxOpen(false);
    onOpenChange(next);
  }

  return (
    <>
      <Dialog open={open} onOpenChange={handleProjectOpenChange}>
        {project ? (
          <DialogContent
            className="max-h-[90vh] overflow-y-auto sm:max-w-3xl"
            showCloseButton
          >
            <DialogHeader>
              <div className="flex flex-wrap items-center gap-2 pr-8">
                <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                  {project.level}
                </span>
                {project.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className={cn(
                      "rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                      capabilityStyles[cap],
                    )}
                  >
                    {capabilities.find((c) => c.id === cap)?.label ?? cap}
                  </span>
                ))}
              </div>
              <DialogTitle className="font-heading text-2xl font-semibold">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-sky-mid font-semibold">
                {project.caption}
              </DialogDescription>
            </DialogHeader>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.blurb}
            </p>

            {project.roleNote && (
              <p className="rounded-lg border border-border bg-secondary/60 px-3 py-2 text-sm font-medium text-foreground">
                {project.roleNote}
              </p>
            )}

            {project.comingSoonNote && (
              <p className="rounded-xl border border-dashed border-sky-mid/50 bg-[#e8f4fc] px-3 py-3 text-sm text-foreground">
                <span className="ia-snow-badge mr-2 inline-flex rounded-full px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide align-middle">
                  <span className="relative z-10">Coming soon</span>
                </span>
                {project.comingSoonNote}
              </p>
            )}

            {project.stackLogos && project.stackLogos.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-heading text-sm font-semibold">
                  Stack we ship with
                </h4>
                <StackLogoGrid
                  items={project.stackLogos as StackLogoItem[]}
                />
              </div>
            )}

            {project.apps && project.apps.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-heading text-sm font-semibold">
                  Surfaces — web + mobile
                </h4>
                <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {project.apps.map((app) => (
                    <li
                      key={app.name}
                      className="rounded-lg border border-border bg-white/80 px-3 py-2"
                    >
                      <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                        {app.kind}
                      </p>
                      <p className="font-heading text-sm font-semibold text-foreground">
                        {app.name}
                      </p>
                      <p
                        className={cn(
                          "mt-0.5 text-[10px] font-bold uppercase",
                          app.status === "ready"
                            ? "text-[#3d8c4a]"
                            : "text-[#b07a00]",
                        )}
                      >
                        {app.status === "ready" ? "Screens ready" : "Mobile next"}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-heading text-sm font-semibold">
                  Product features
                </h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-lg border border-border/70 bg-white/70 px-3 py-2 text-sm text-muted-foreground"
                    >
                      <span className="mr-1.5 font-bold text-sky-mid">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                {project.iaSoon && (
                  <span className="ia-snow-badge inline-flex rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wide">
                    <span className="relative z-10">IA soon</span>
                  </span>
                )}
              </div>
            )}

            {project.pipeline && project.pipeline.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-heading text-sm font-semibold">
                  Data intelligence architecture
                </h4>
                <p className="text-xs text-muted-foreground">
                  Built to treat large operational databases end-to-end — from raw
                  events to AI recommendations.
                </p>
                <ol className="flex flex-wrap items-center gap-1.5">
                  {project.pipeline.map((step, index) => (
                    <li key={step} className="flex items-center gap-1.5">
                      <span className="rounded-full bg-primary px-2.5 py-1 text-[11px] font-bold text-primary-foreground">
                        {step}
                      </span>
                      {index < project.pipeline!.length - 1 && (
                        <span className="text-sky-mid font-bold" aria-hidden>
                          →
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <div className="preview-stage h-44 overflow-hidden rounded-xl border border-border/60 bg-gradient-to-b from-[#9ad4f5]/50 via-[#e8f4fc] to-[#d6ebf8]">
              <ProjectPreview id={project.preview} />
            </div>

            {project.videoId && (
              <div className="space-y-2">
                <h4 className="font-heading text-sm font-semibold">Product video</h4>
                <div className="aspect-video overflow-hidden rounded-xl border border-border bg-black">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${project.videoId}`}
                    title={`${project.title} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {project.images && project.images.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-heading text-sm font-semibold">
                  {project.id === "erp-supply"
                    ? "Web app screenshots"
                    : "Screenshots"}
                </h4>
                <p className="text-xs text-muted-foreground">
                  Click an image to enlarge — use arrows to slide.
                </p>
                <div
                  className={cn(
                    "grid gap-3",
                    project.id === "tjwaal"
                      ? "grid-cols-2 sm:grid-cols-3"
                      : project.id === "collabora-hub"
                        ? "grid-cols-2 sm:grid-cols-3"
                        : "sm:grid-cols-2",
                  )}
                >
                  {project.images.map((src, index) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => openLightbox(index)}
                      className={cn(
                        "relative overflow-hidden rounded-lg border border-border bg-[#0b1f33]/5 transition hover:ring-2 hover:ring-sky-mid/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        project.id === "tjwaal" || src.includes("app-mobile")
                          ? "aspect-[9/16]"
                          : "aspect-video",
                      )}
                      aria-label={`Open screenshot ${index + 1}`}
                    >
                      <Image
                        src={src}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className={
                          project.id === "tjwaal" || src.includes("app-mobile")
                            ? "object-contain p-1"
                            : "object-cover object-top"
                        }
                        unoptimized
                        sizes="(max-width: 640px) 50vw, 300px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <ul className="flex flex-wrap gap-1.5">
              {project.stack.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-secondary px-2 py-0.5 text-xs font-semibold text-secondary-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <DialogFooter
              className={project.href ? "sm:justify-between" : undefined}
              showCloseButton={!project.href}
            >
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "bg-accent text-accent-foreground hover:bg-accent/90",
                  )}
                >
                {project.href.includes("apps.apple.com")
                  ? "View on App Store"
                  : project.href.includes("upwork.com")
                    ? "Open Upwork profile"
                    : "Visit site"}
                </a>
              ) : null}
            </DialogFooter>
          </DialogContent>
        ) : null}
      </Dialog>

      {project?.images && project.images.length > 0 && (
        <ImageLightbox
          images={project.images}
          index={lightboxIndex}
          alt={project.title}
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </>
  );
}
