"use client";

import Image from "next/image";
import {
  capabilities,
  type Capability,
  type Project,
} from "@/content/site";
import { ProjectPreview } from "@/components/project-previews";
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
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
              <h4 className="font-heading text-sm font-semibold">Screenshots</h4>
              <div
                className={cn(
                  "grid gap-3",
                  project.id === "tjwaal"
                    ? "grid-cols-2 sm:grid-cols-3"
                    : "sm:grid-cols-2",
                )}
              >
                {project.images.map((src) => (
                  <div
                    key={src}
                    className={cn(
                      "relative overflow-hidden rounded-lg border border-border bg-[#0b1f33]/5",
                      project.id === "tjwaal" ? "aspect-[9/16]" : "aspect-video",
                    )}
                  >
                    <Image
                      src={src}
                      alt={`${project.title} screenshot`}
                      fill
                      className={
                        project.id === "tjwaal"
                          ? "object-contain p-1"
                          : "object-cover object-top"
                      }
                      unoptimized
                      sizes="(max-width: 640px) 50vw, 300px"
                    />
                  </div>
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
                  : "Visit site"}
              </a>
            ) : null}
          </DialogFooter>
        </DialogContent>
      ) : null}
    </Dialog>
  );
}
