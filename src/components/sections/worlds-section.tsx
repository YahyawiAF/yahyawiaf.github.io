"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { projects, stages, type Project } from "@/content/site";
import { ProjectDetailModal } from "@/components/sections/project-detail-modal";
import { cn } from "@/lib/utils";

function Ship({ facingRight }: { facingRight: boolean }) {
  return (
    <svg
      viewBox="0 0 64 40"
      className={cn(
        "h-10 w-16 drop-shadow-md transition-transform duration-500",
        !facingRight && "-scale-x-100",
      )}
      aria-hidden
    >
      <path d="M6 28 L58 28 L50 36 L14 36 Z" fill="#1a3a6b" />
      <path d="M18 28 L32 8 L34 28 Z" fill="#f0c14a" />
      <path d="M34 28 L46 14 L48 28 Z" fill="#e8f4fc" />
      <rect x="30" y="4" width="3" height="24" fill="#4a3b2a" />
      <circle cx="20" cy="30" r="2" fill="#7ec4ef" className="animate-soft-float" />
      <circle cx="40" cy="30" r="2" fill="#7ec4ef" className="animate-soft-float" />
    </svg>
  );
}

const SHIP_LEFT = ["8%", "42%", "76%"] as const;

export function WorldsSection() {
  const [active, setActive] = useState(0);
  const [prevActive, setPrevActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const activeStage = stages[active];
  const shipLeft = SHIP_LEFT[active] ?? "8%";
  const facingRight = active >= prevActive;

  const stageProject = useMemo(
    () => projects.find((p) => p.id === activeStage.projectId) ?? null,
    [activeStage.projectId],
  );

  function selectStage(index: number) {
    setPrevActive(active);
    setActive(index);
  }

  function openStageDetails() {
    if (!stageProject) return;
    setSelected(stageProject);
    setModalOpen(true);
  }

  return (
    <section id="worlds" className="scroll-mt-20 bg-[#d6ebf8]/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-sky-mid">
          World select
        </p>
        <h2 className="mt-2 font-heading text-3xl font-semibold sm:text-4xl">
          Three stages · one ship
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Sail between <strong>ALGOSAMA</strong> (studio),{" "}
          <strong>Collabora Hub</strong> (working space), and{" "}
          <strong>Upwork</strong> (freelance track). Pick a world — the ship
          moves — then open the level.
        </p>

        <div className="relative mt-10 overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-[#7ec4ef]/40 via-[#e8f4fc] to-[#c8e8f8] p-4 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {stages.map((stage, index) => (
              <button
                key={stage.id}
                type="button"
                onClick={() => selectStage(index)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border text-left transition",
                  active === index
                    ? "border-primary shadow-lg ring-2 ring-primary/30"
                    : "border-border/70 opacity-90 hover:opacity-100",
                  stage.id === "upwork" && active === index && "ring-[#14A800]/40",
                )}
              >
                <div className="relative h-44 sm:h-52">
                  <Image
                    src={stage.image}
                    alt={stage.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    unoptimized
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  {stage.id === "collabora" && (
                    <span className="ia-snow-badge absolute top-3 right-3 z-10 rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-wide uppercase">
                      <span className="relative z-10">IA soon</span>
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f33]/85 via-[#0b1f33]/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-accent sm:text-xs">
                      {stage.subtitle}
                    </p>
                    <p className="font-heading text-xl font-semibold sm:text-2xl">
                      {stage.title}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs text-white/85 sm:text-sm">
                      {stage.blurb}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="relative mt-6 h-16 rounded-2xl border border-white/50 bg-[#4a9fd8]/35">
            <div className="absolute inset-x-6 top-1/2 h-0.5 -translate-y-1/2 border-t-2 border-dashed border-white/70" />
            {/* Stage markers */}
            {stages.map((stage, index) => (
              <span
                key={stage.id}
                className="absolute top-1 text-[9px] font-bold uppercase tracking-wide text-primary/80"
                style={{ left: SHIP_LEFT[index] }}
              >
                {index + 1}
              </span>
            ))}
            <div
              className="absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-out"
              style={{ left: shipLeft }}
            >
              <Ship facingRight={facingRight} />
            </div>
            <p className="absolute bottom-1 left-0 right-0 text-center text-[10px] font-bold uppercase tracking-widest text-primary">
              Ship en route → {activeStage.title}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              Active world:{" "}
              <span className="font-heading font-semibold text-foreground">
                {activeStage.title}
              </span>
            </p>
            <button
              type="button"
              onClick={openStageDetails}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-bold shadow transition hover:-translate-y-0.5",
                activeStage.id === "upwork"
                  ? "bg-[#14A800] text-white hover:bg-[#108a00]"
                  : "bg-accent text-accent-foreground",
              )}
            >
              {activeStage.id === "upwork"
                ? "Open Upwork level"
                : `Enter ${activeStage.title}`}
            </button>
          </div>
        </div>
      </div>

      <ProjectDetailModal
        project={selected}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
