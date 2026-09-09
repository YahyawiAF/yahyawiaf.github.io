export function AgencyPreview() {
  return (
    <svg
      viewBox="0 0 320 160"
      className="h-full w-full"
      role="img"
      aria-label="Agency website collaboration"
    >
      <rect x="40" y="28" width="240" height="104" rx="12" fill="#1a3a6b" />
      <rect x="48" y="36" width="224" height="16" rx="4" fill="#4a9fd8" />
      <circle cx="60" cy="44" r="3" fill="#e07a5f" />
      <circle cx="72" cy="44" r="3" fill="#f0c14a" />
      <circle cx="84" cy="44" r="3" fill="#3d8c4a" />

      <rect x="56" y="64" width="88" height="52" rx="6" fill="#e8f4fc" className="animate-soft-float" />
      <rect x="64" y="72" width="56" height="6" rx="2" fill="#1a3a6b" />
      <rect x="64" y="84" width="72" height="4" rx="2" fill="#b8d4ea" />
      <rect x="64" y="94" width="48" height="4" rx="2" fill="#b8d4ea" />

      <rect
        x="156"
        y="64"
        width="108"
        height="52"
        rx="6"
        fill="#d6ebf8"
        className="animate-listing-slide"
      />
      <rect x="166" y="74" width="40" height="32" rx="4" fill="#7ec4ef" />
      <rect x="214" y="76" width="40" height="6" rx="2" fill="#1a3a6b" />
      <rect x="214" y="88" width="32" height="5" rx="2" fill="#b8d4ea" />
      <rect x="214" y="98" width="28" height="5" rx="2" fill="#b8d4ea" />

      <g className="animate-node-pulse" style={{ transformOrigin: "280px 40px" }}>
        <circle cx="280" cy="40" r="14" fill="#f0c14a" />
        <text
          x="280"
          y="44"
          textAnchor="middle"
          fontSize="10"
          fontWeight="700"
          fill="#1a2744"
          fontFamily="var(--font-fredoka), sans-serif"
        >
          Dev
        </text>
      </g>
    </svg>
  );
}
