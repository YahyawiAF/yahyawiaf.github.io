import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type StackLogoId =
  | "react"
  | "nextjs"
  | "nestjs"
  | "typescript"
  | "nodejs"
  | "postgresql"
  | "prisma"
  | "docker"
  | "react-native"
  | "langchain"
  | "odyssey";

const logos: Record<
  StackLogoId,
  { name: string; color: string; path: ReactNode }
> = {
  react: {
    name: "React",
    color: "#61DAFB",
    path: (
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    ),
  },
  "react-native": {
    name: "React Native",
    color: "#61DAFB",
    path: (
      <>
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.4" transform="rotate(120 12 12)" />
      </>
    ),
  },
  nextjs: {
    name: "Next.js",
    color: "#111111",
    path: (
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.2 14.7h-1.7l-4.4-6.3v6.3H8.3V7.3h1.8l4.3 6.2V7.3h1.8Z"
      />
    ),
  },
  nestjs: {
    name: "NestJS",
    color: "#E0234E",
    path: (
      <path
        fill="currentColor"
        d="M12 2.4c-.4 0-.8.1-1.1.3L5.4 5.7A2.1 2.1 0 0 0 4.4 7.5v8.9c0 .8.4 1.5 1.1 1.8l5.5 3c.6.4 1.4.4 2 0l5.5-3c.7-.3 1.1-1 1.1-1.8V7.5c0-.7-.4-1.4-1.1-1.8l-5.5-3c-.3-.2-.7-.3-1-.3Zm0 2.2 5.2 2.8v6.1L12 18.3l-5.2-2.8V7.4L12 4.6Z"
      />
    ),
  },
  typescript: {
    name: "TypeScript",
    color: "#3178C6",
    path: (
      <path
        fill="currentColor"
        d="M3 3h18v18H3V3Zm9.4 8.2H8.9v1.5h1.5v5.2h1.9v-5.2h1.5v-1.5h-1.4Zm3.6 1.3c-.6-.4-1.4-.5-2.2-.5v1.6c.4 0 .9 0 1.2.2.3.2.4.5.4.8 0 .4-.2.7-.6.9-.5.3-1.2.3-1.9.3v1.6c1 0 2 0 2.8-.5.9-.5 1.4-1.4 1.4-2.5 0-.8-.4-1.5-1.1-1.9Z"
      />
    ),
  },
  nodejs: {
    name: "Node.js",
    color: "#339933",
    path: (
      <path
        fill="currentColor"
        d="M12 2.2 4.8 6.3v8.3L12 18.8l7.2-4.2V6.3L12 2.2Zm0 2.3 5.1 3v5.1L12 15.7 6.9 12.6V7.5L12 4.5Z"
      />
    ),
  },
  postgresql: {
    name: "PostgreSQL",
    color: "#336791",
    path: (
      <path
        fill="currentColor"
        d="M12.4 2c-2.6 0-4.3 1.2-4.3 2.7v.5c0 .2.1.5.3.7-.8.5-1.3 1.3-1.3 2.3 0 .8.4 1.5 1 2-.3.5-.4 1-.3 1.6.2 1.2 1.2 1.9 2.4 1.9.4 0 .8-.1 1.1-.2.4.9 1.2 1.5 2.2 1.5.5 0 1-.2 1.4-.5.3.7.9 1.1 1.6 1.1 1.1 0 1.9-1 1.9-2.4 0-.4-.1-.8-.2-1.1.7-.5 1.1-1.3 1.1-2.2 0-1-.6-1.9-1.5-2.4.1-.2.1-.4.1-.6C17.9 3.5 15.5 2 12.4 2Z"
      />
    ),
  },
  prisma: {
    name: "Prisma",
    color: "#2D3748",
    path: (
      <path
        fill="currentColor"
        d="M7.2 18.8 16.5 3.4c.3-.5.9-.7 1.4-.5.5.2.8.7.7 1.2L14 20.1c-.1.5-.6.9-1.1.9H8.2c-.7 0-1.2-.7-.9-1.4l-.1-.8Z"
      />
    ),
  },
  docker: {
    name: "Docker",
    color: "#2496ED",
    path: (
      <path
        fill="currentColor"
        d="M13.2 8.4h2v2h-2v-2Zm-2.4 0h2v2h-2v-2Zm-2.4 0h2v2h-2v-2Zm-2.4 0h2v2H6v-2Zm2.4-2.4h2v2h-2v-2Zm2.4 0h2v2h-2v-2Zm2.4 0h2v2h-2v-2Zm5.6 3.7c-.2-.1-.5-.1-.8 0-.1-.8-.6-1.2-1.1-1.6l-.3-.2-.2.3c-.3.4-.4.9-.3 1.4-.3.2-.6.4-.6.8 0 .5.5.8 1.1.9 1.2.2 3.4 0 3.9-1.2.2-.4 0-.7-.2-.8l-.4-.1Zm-11.2 1.5h2v2h-2v-2Zm2.4 0h2v2h-2v-2Zm2.4 0h2v2h-2v-2Zm2.4 0h2v2h-2v-2Z"
      />
    ),
  },
  langchain: {
    name: "LangChain",
    color: "#1C3C3C",
    path: (
      <path
        fill="currentColor"
        d="M5 7.5h4.5v9H5V7.5Zm5 0h4v4h-4v-4Zm5 0H19v9h-4V7.5Zm-5 5h4v4h-4v-4Z"
      />
    ),
  },
  odyssey: {
    name: "Odyssey",
    color: "#5B4BFF",
    path: (
      <>
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path
          fill="currentColor"
          d="M12 6.5c2.2 1.2 3.6 3.2 3.6 5.5S14.2 16.3 12 17.5C9.8 16.3 8.4 14.3 8.4 12S9.8 7.7 12 6.5Z"
        />
      </>
    ),
  },
};

export type StackLogoItem = {
  id: StackLogoId;
  comingSoon?: boolean;
};

export function StackLogoGrid({
  items,
  className,
}: {
  items: StackLogoItem[];
  className?: string;
}) {
  return (
    <ul className={cn("grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5", className)}>
      {items.map((item) => {
        const logo = logos[item.id];
        return (
          <li
            key={item.id}
            className={cn(
              "relative flex flex-col items-center gap-1.5 rounded-xl border border-border/70 bg-white/90 px-2 py-3 text-center shadow-sm",
              item.comingSoon && "opacity-90",
            )}
          >
            {item.comingSoon && (
              <span className="absolute -top-2 right-1 rounded-full bg-accent px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-accent-foreground shadow">
                Soon
              </span>
            )}
            <span
              className="flex size-10 items-center justify-center rounded-lg bg-[#e8f4fc]"
              style={{ color: logo.color }}
              aria-hidden
            >
              <svg viewBox="0 0 24 24" className="size-6">
                {logo.path}
              </svg>
            </span>
            <span className="text-[11px] font-semibold leading-tight text-foreground">
              {logo.name}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
