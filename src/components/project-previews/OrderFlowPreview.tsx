export function OrderFlowPreview() {
  return (
    <svg viewBox="0 0 320 160" className="h-full w-full" role="img" aria-label="Phone order to kitchen ready">
      {/* Phone */}
      <rect x="36" y="28" width="56" height="104" rx="10" fill="#1a3a6b" />
      <rect x="42" y="38" width="44" height="76" rx="4" fill="#e8f4fc" />
      <rect x="48" y="46" width="32" height="8" rx="2" fill="#4a9fd8" />
      <rect x="48" y="60" width="32" height="6" rx="2" fill="#b8d4ea" />
      <rect x="48" y="72" width="24" height="6" rx="2" fill="#b8d4ea" />
      <circle cx="64" cy="122" r="4" fill="#7ec4ef" />

      {/* Path phone → kitchen → ready */}
      <path
        d="M100 80 H150"
        fill="none"
        stroke="#7ec4ef"
        strokeWidth="2"
        strokeDasharray="5 5"
        className="animate-flow-dash"
      />
      <path
        d="M210 80 H250"
        fill="none"
        stroke="#7ec4ef"
        strokeWidth="2"
        strokeDasharray="5 5"
        className="animate-flow-dash"
      />

      <circle r="5" fill="#f0c14a" className="preview-packet">
        <animateMotion dur="2.2s" repeatCount="indefinite" path="M92 80 H150" />
      </circle>
      <circle r="5" fill="#3d8c4a" className="preview-packet">
        <animateMotion dur="2.2s" begin="1.1s" repeatCount="indefinite" path="M210 80 H250" />
      </circle>

      {/* Kitchen ticket */}
      <g className="animate-soft-float">
        <rect x="150" y="52" width="60" height="56" rx="6" fill="white" stroke="#b8d4ea" />
        <rect x="158" y="62" width="44" height="6" rx="2" fill="#1a3a6b" />
        <rect x="158" y="74" width="36" height="5" rx="2" fill="#d6ebf8" />
        <rect x="158" y="84" width="28" height="5" rx="2" fill="#d6ebf8" />
        <text
          x="180"
          y="102"
          textAnchor="middle"
          fontSize="8"
          fill="#4a5f7a"
          fontFamily="var(--font-nunito), sans-serif"
        >
          Kitchen
        </text>
      </g>

      {/* Ready badge */}
      <g className="animate-node-pulse" style={{ transformOrigin: "278px 80px" }}>
        <circle cx="278" cy="80" r="22" fill="#3d8c4a" />
        <text
          x="278"
          y="84"
          textAnchor="middle"
          fill="white"
          fontSize="9"
          fontWeight="700"
          fontFamily="var(--font-fredoka), sans-serif"
        >
          Ready
        </text>
      </g>
    </svg>
  );
}
