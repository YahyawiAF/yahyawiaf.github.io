export function HubPreview() {
  return (
    <svg
      viewBox="0 0 320 160"
      className="h-full w-full"
      role="img"
      aria-label="Collabora Hub web admin and mobile reservation app"
    >
      {/* Web dashboard */}
      <rect x="16" y="28" width="170" height="104" rx="10" fill="#1a3a6b" />
      <rect x="24" y="36" width="36" height="88" rx="4" fill="#0b1f33" />
      <rect x="28" y="44" width="28" height="6" rx="2" fill="#4a9fd8" />
      <rect x="28" y="56" width="28" height="4" rx="1" fill="#7ec4ef" opacity="0.5" />
      <rect x="28" y="64" width="28" height="4" rx="1" fill="#7ec4ef" opacity="0.5" />
      <rect x="28" y="72" width="28" height="4" rx="1" fill="#7ec4ef" opacity="0.5" />
      <rect x="68" y="40" width="50" height="22" rx="4" fill="#e8f4fc" />
      <rect x="124" y="40" width="50" height="22" rx="4" fill="#e8f4fc" />
      {/* Mini seat map */}
      <rect x="68" y="72" width="106" height="48" rx="4" fill="#e8f4fc" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={82 + col * 22}
            cy={86 + row * 14}
            r="5"
            fill={row === 1 && col === 2 ? "#e07a5f" : "#3d8c4a"}
            className={row === 0 && col === 0 ? "animate-node-pulse" : undefined}
            style={
              row === 0 && col === 0
                ? { transformOrigin: "82px 86px" }
                : undefined
            }
          />
        )),
      )}

      {/* Mobile phone */}
      <rect x="210" y="22" width="78" height="118" rx="12" fill="#1a3a6b" />
      <rect x="218" y="34" width="62" height="90" rx="4" fill="#e8f4fc" />
      <rect x="224" y="42" width="50" height="18" rx="4" fill="#4a9fd8" className="animate-soft-float" />
      <rect x="224" y="68" width="50" height="14" rx="4" fill="#5e4ae3" opacity="0.85" />
      <rect x="224" y="88" width="22" height="12" rx="3" fill="#d6ebf8" />
      <rect x="252" y="88" width="22" height="12" rx="3" fill="#d6ebf8" />
      <circle cx="249" cy="130" r="3" fill="#7ec4ef" />

      <text
        x="100"
        y="20"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fill="#1a3a6b"
        fontFamily="var(--font-fredoka), sans-serif"
      >
        Web · Seat map
      </text>
      <text
        x="249"
        y="18"
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        fill="#1a3a6b"
        fontFamily="var(--font-fredoka), sans-serif"
      >
        Mobile
      </text>
    </svg>
  );
}
