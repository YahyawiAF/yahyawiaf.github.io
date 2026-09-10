import { company, portfolio } from "@/content/site";
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
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/85">
          Portfolio · Player one
        </p>
        <p className="mt-3 font-heading text-4xl font-bold tracking-tight text-white drop-shadow-md sm:text-6xl md:text-7xl">
          {portfolio.name}
        </p>
        <p className="mt-3 font-heading text-3xl font-semibold text-accent drop-shadow-sm sm:text-4xl">
          {company.name}
        </p>
        <h1 className="mt-5 max-w-2xl font-heading text-xl font-semibold text-white/95 sm:text-2xl">
          {portfolio.headline}
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">
          {portfolio.blurb}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#founder"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition hover:-translate-y-1 hover:shadow-xl",
            )}
          >
            Meet player one
          </a>
          <a
            href="#work"
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "bg-white/90 text-primary hover:bg-white shadow-md transition hover:-translate-y-1",
            )}
          >
            See all levels
          </a>
        </div>
      </div>
    </section>
  );
}
