import Image from "next/image";
import { founder } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FounderSection() {
  return (
    <section id="founder" className="scroll-mt-20 bg-[#e8f4fc] py-20 sm:py-24">
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
          <p className="text-sm font-bold uppercase tracking-widest text-sky-mid">
            Player one
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold sm:text-4xl">
            {founder.name}
          </h2>
          <p className="mt-1 text-sm font-semibold text-primary">
            {founder.roles.join(" · ")}
          </p>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            {founder.summary}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {founder.stack.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-semibold text-foreground transition hover:-translate-y-0.5"
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
          </div>
        </div>
      </div>
    </section>
  );
}
