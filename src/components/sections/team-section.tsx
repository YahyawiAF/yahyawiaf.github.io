import { team } from "@/content/site";
import { AbstractAvatar } from "@/components/abstract-avatar";

export function TeamSection() {
  return (
    <section id="team" className="scroll-mt-20 bg-[#d6ebf8]/50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-sky-mid">
          Character select
        </p>
        <h2 className="mt-2 font-heading text-3xl font-semibold sm:text-4xl">
          Équipe
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Pick your party — the humans behind ALGOSAMA. Abstract avatars for
          now; real portraits welcome when you are ready.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.id}
              className="rounded-2xl border border-border/70 bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <AbstractAvatar variant={member.avatar} name={member.name} />
              <h3 className="mt-5 font-heading text-lg font-semibold">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-primary">
                {member.role}
              </p>
              <p className="mt-3 text-sm italic text-muted-foreground">
                “{member.witty}”
              </p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-sky-mid underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
