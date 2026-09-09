"use client";

import { useEffect, useRef, useState } from "react";
import {
  capabilities,
  projects,
  type Capability,
  type Project,
} from "@/content/site";
import { ProjectPreview } from "@/components/project-previews";
import { ProjectDetailModal } from "@/components/sections/project-detail-modal";
import { cn } from "@/lib/utils";

const capabilityStyles: Record<Capability, string> = {
  web: "bg-[#1a3a6b]/10 text-[#1a3a6b]",
  mobile: "bg-[#4a9fd8]/15 text-[#1a3a6b]",
  backend: "bg-[#3d8c4a]/15 text-[#1f5a2e]",
  design: "bg-[#f0c14a]/25 text-[#1a2744]",
};

function WorkCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(project);
        }
      }}
      className={cn(
        "group/card flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border/70 bg-card text-left shadow-sm transition hover:-translate-y-1 hover:border-sky-mid/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        visible && "animate-card-enter",
      )}
      style={{ animationDelay: visible ? `${index * 80}ms` : undefined }}
      aria-label={`Open details for ${project.title}`}
    >
      <div className="preview-stage relative h-44 overflow-hidden bg-gradient-to-b from-[#9ad4f5]/50 via-[#e8f4fc] to-[#d6ebf8]">
        <ProjectPreview id={project.preview} />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-fit rounded-md bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
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

        <h3 className="mt-3 font-heading text-lg font-semibold">{project.title}</h3>
        <p className="mt-1 text-xs font-semibold text-sky-mid">{project.caption}</p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.blurb}
        </p>
        <p className="mt-3 text-xs font-bold uppercase tracking-wide text-primary/70">
          Click for screenshots
          {project.videoId ? " & video" : ""}
          {project.href ? " · visit site" : ""}
        </p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-secondary px-2 py-0.5 text-xs font-semibold text-secondary-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function WorkSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  function openProject(project: Project) {
    setSelected(project);
    setOpen(true);
  }

  return (
    <section id="work" className="scroll-mt-20 bg-[#d6ebf8]/50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-sky-mid">
          World map
        </p>
        <h2 className="mt-2 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Selected levels
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Living product stories — web, mobile, backend, and design working
          together. Click a card for screenshots, video, and links.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <WorkCard
              key={project.id}
              project={project}
              index={index}
              onOpen={openProject}
            />
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={selected}
        open={open}
        onOpenChange={setOpen}
      />
    </section>
  );
}
