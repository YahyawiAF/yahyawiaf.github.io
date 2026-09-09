import { company, navLinks } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <a
          href="#home"
          className="font-heading text-lg font-semibold tracking-wide text-white drop-shadow-sm"
        >
          {company.name}
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/90 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className={cn(
            buttonVariants({ size: "sm" }),
            "bg-accent text-accent-foreground hover:bg-accent/90 shadow-md transition hover:-translate-y-0.5",
          )}
        >
          Start a quest
        </a>
      </div>
    </header>
  );
}
