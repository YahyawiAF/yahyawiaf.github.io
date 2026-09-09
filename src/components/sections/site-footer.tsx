import { company, contact } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-heading text-xl font-semibold">{company.name}</p>
          <p className="mt-1 text-sm text-primary-foreground/80">
            {company.hq} · Founded {company.founded}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <a href={contact.emailHref} className="hover:underline">
            Email
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
