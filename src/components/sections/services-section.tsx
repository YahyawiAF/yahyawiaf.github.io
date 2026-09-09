import { capabilities, services } from "@/content/site";

const capabilityAccent: Record<string, string> = {
  web: "border-l-[#1a3a6b]",
  mobile: "border-l-[#4a9fd8]",
  backend: "border-l-[#3d8c4a]",
  design: "border-l-[#f0c14a]",
};

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-[#e8f4fc] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-sky-mid">
          Power-ups
        </p>
        <h2 className="mt-2 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          What we build
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Full-stack delivery — we cover web, mobile, backend, and design so
          your product ships as one coherent quest.
        </p>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {capabilities.map((cap) => (
            <li
              key={cap.id}
              className="rounded-xl border border-border/70 bg-white/90 px-4 py-3 text-center shadow-sm"
            >
              <p className="font-heading text-lg font-semibold text-primary">
                {cap.label}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{cap.hint}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className={`group rounded-2xl border border-border/60 border-l-4 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${capabilityAccent[service.capability]}`}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-coin">
                {service.metaphor}
              </p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
