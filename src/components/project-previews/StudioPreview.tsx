export function StudioPreview() {
  return (
    <svg
      viewBox="0 0 320 160"
      className="h-full w-full"
      role="img"
      aria-label="ALGOSAMA studio stage"
    >
      <defs>
        <linearGradient id="studio-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5eb3e8" />
          <stop offset="100%" stopColor="#c8e8f8" />
        </linearGradient>
      </defs>
      <rect width="320" height="160" fill="url(#studio-sky)" />
      <ellipse cx="70" cy="48" rx="36" ry="16" fill="white" opacity="0.85" className="animate-soft-float" />
      <ellipse cx="250" cy="40" rx="40" ry="18" fill="white" opacity="0.75" className="animate-soft-float" />
      {/* Arcade / lounge arch */}
      <path d="M40 140 V80 A40 40 0 0 1 120 80 V140" fill="#e8f4fc" stroke="#1a3a6b" strokeWidth="3" />
      <rect x="150" y="70" width="120" height="70" rx="8" fill="#1a3a6b" />
      <rect x="160" y="80" width="100" height="48" rx="4" fill="#4a9fd8" className="animate-soft-float" />
      <text
        x="210"
        y="108"
        textAnchor="middle"
        fill="white"
        fontSize="12"
        fontWeight="700"
        fontFamily="var(--font-fredoka), sans-serif"
      >
        ALGOSAMA
      </text>
      <rect x="55" y="125" width="50" height="14" rx="6" fill="#f0c14a" />
    </svg>
  );
}
