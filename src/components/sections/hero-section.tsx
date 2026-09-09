import { company } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { SkyClouds } from "@/components/sky-clouds";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      <SkyClouds />
      <div className="animate-soft-rise relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 pt-28 sm:px-6">
        <p className="font-heading text-5xl font-bold tracking-tight text-white drop-shadow-md sm:text-7xl md:text-8xl">
          {company.name}
        </p>
        <h1 className="mt-5 max-w-2xl font-heading text-2xl font-semibold text-white/95 sm:text-3xl">
          Software that helps teams clear the next level.
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">
          Web, mobile, backend, and design — shipped as one craft from Tunisia
          since {company.founded}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition hover:-translate-y-1 hover:shadow-xl",
            )}
          >
            Start a quest
          </a>
          <a
            href="#work"
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "bg-white/90 text-primary hover:bg-white shadow-md transition hover:-translate-y-1",
            )}
          >
            See our levels
          </a>
        </div>
      </div>
    </section>
  );
}
