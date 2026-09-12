import Image from "next/image";
import Link from "next/link";
import { founder } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { SkyClouds } from "@/components/sky-clouds";
import { cn } from "@/lib/utils";

export function FounderSection({
  variant = "section",
}: {
  /** Full-bleed hero on profile page, or inline section elsewhere */
  variant?: "section" | "hero";
}) {
  const content = (
    <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[auto_1fr]">
      <div className="relative mx-auto size-40 overflow-hidden rounded-full shadow-lg ring-4 ring-[#7ec4ef] md:size-48">
        <Image
          src={founder.photo}
          alt={founder.name}
          fill
          className="object-cover object-top"
          unoptimized
          sizes="192px"
          priority
        />
      </div>
      <div>
        <p
          className={cn(
            "text-sm font-bold uppercase tracking-widest",
            variant === "hero" ? "text-white/85" : "text-sky-mid",
          )}
        >
          Player one · Profile & parcours
        </p>
        <h1
          className={cn(
            "mt-2 font-heading text-3xl font-semibold sm:text-4xl",
            variant === "hero" ? "text-white drop-shadow-md" : "text-foreground",
          )}
        >
          {founder.name}
        </h1>
        <p
          className={cn(
            "mt-1 text-sm font-semibold",
            variant === "hero" ? "text-accent" : "text-primary",
          )}
        >
          {founder.roles.join(" · ")}
        </p>
        <p
          className={cn(
            "mt-4 max-w-2xl leading-relaxed",
            variant === "hero" ? "text-white/90" : "text-muted-foreground",
          )}
        >
          {founder.summary}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {founder.stack.map((skill) => (
            <li
              key={skill}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-semibold transition hover:-translate-y-0.5",
                variant === "hero"
                  ? "border-white/30 bg-white/15 text-white"
                  : "border-border bg-white/80 text-foreground",
              )}
            >
              {skill}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={founder.linkedin}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "transition hover:-translate-y-0.5",
              variant === "hero" &&
                "border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white",
            )}
          >
            LinkedIn
          </a>
          <a
            href={founder.upwork}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-[#14A800] text-white hover:bg-[#108a00] transition hover:-translate-y-0.5",
            )}
          >
            Upwork
          </a>
          <a
            href={founder.github}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "transition hover:-translate-y-0.5",
            )}
          >
            GitHub
          </a>
          {variant === "hero" && (
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "bg-white/90 text-primary hover:bg-white transition hover:-translate-y-0.5",
              )}
            >
              ← ALGOSAMA home
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  if (variant === "hero") {
    return (
      <section
        id="founder"
        className="relative flex min-h-[70svh] items-center overflow-hidden pb-16 pt-28"
      >
        <SkyClouds />
        <div className="animate-soft-rise relative z-10 w-full">{content}</div>
      </section>
    );
  }

  return (
    <section id="founder" className="scroll-mt-20 bg-[#e8f4fc] py-20 sm:py-24">
      {content}
    </section>
  );
}
