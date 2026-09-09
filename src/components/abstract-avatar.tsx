import type { AvatarVariant } from "@/content/site";
import { cn } from "@/lib/utils";

const palettes: Record<
  AvatarVariant,
  { a: string; b: string; c: string; ring: string }
> = {
  sky: {
    a: "#4a9fd8",
    b: "#1a3a6b",
    c: "#f0c14a",
    ring: "#7ec4ef",
  },
  coral: {
    a: "#e07a5f",
    b: "#9b3d2e",
    c: "#f0c14a",
    ring: "#f4a891",
  },
  mint: {
    a: "#3d8c4a",
    b: "#1f5a2e",
    c: "#9ad4f5",
    ring: "#7bc48a",
  },
};

export function AbstractAvatar({
  variant,
  name,
  className,
}: {
  variant: AvatarVariant;
  name: string;
  className?: string;
}) {
  const p = palettes[variant];
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "animate-avatar-bob relative mx-auto size-28 overflow-hidden rounded-full",
        className,
      )}
      style={{ boxShadow: `0 0 0 4px ${p.ring}` }}
      aria-hidden
    >
      <svg viewBox="0 0 120 120" className="size-full">
        <defs>
          <linearGradient id={`g-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={p.a} />
            <stop offset="100%" stopColor={p.b} />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="60" fill={`url(#g-${variant})`} />
        <g className="animate-avatar-spin origin-center" style={{ transformOrigin: "60px 60px" }}>
          <circle cx="60" cy="60" r="38" fill="none" stroke={p.c} strokeWidth="3" strokeDasharray="8 10" opacity="0.85" />
        </g>
        <circle cx="42" cy="48" r="10" fill="white" opacity="0.35" />
        <path
          d="M28 78 Q60 98 92 78"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.45"
        />
        <text
          x="60"
          y="68"
          textAnchor="middle"
          fill="white"
          fontSize="22"
          fontWeight="700"
          fontFamily="var(--font-fredoka), sans-serif"
        >
          {initials}
        </text>
      </svg>
    </div>
  );
}
