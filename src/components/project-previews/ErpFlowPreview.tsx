export function ErpFlowPreview() {
  const mobiles = [
    { x: 18, label: "Admin" },
    { x: 94, label: "Entrepôt" },
    { x: 170, label: "Commercial" },
    { x: 246, label: "Chauffeur" },
  ];

  return (
    <svg
      viewBox="0 0 320 160"
      className="h-full w-full"
      role="img"
      aria-label="Supply Chain Pro web app and four mobile apps"
    >
      <defs>
        <linearGradient id="erp-hub" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4a9fd8" />
          <stop offset="100%" stopColor="#1a3a6b" />
        </linearGradient>
      </defs>

      {/* 4 mobile apps */}
      {mobiles.map((m, i) => (
        <g key={m.label}>
          <path
            d={`M${m.x + 28} 52 L160 88`}
            fill="none"
            stroke="#7ec4ef"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-flow-dash"
          />
          <rect
            x={m.x}
            y="10"
            width="56"
            height="42"
            rx="8"
            fill="white"
            stroke="#b8d4ea"
          />
          <rect x={m.x + 16} y="16" width="24" height="30" rx="4" fill="#e8f4fc" />
          <circle cx={m.x + 28} cy="42" r="2" fill="#7ec4ef" />
          <text
            x={m.x + 28}
            y="64"
            textAnchor="middle"
            fontSize="7"
            fontWeight="700"
            fill="#1a3a6b"
            fontFamily="var(--font-fredoka), sans-serif"
          >
            {m.label}
          </text>
          <circle r="3" fill={["#f0c14a", "#3d8c4a", "#e07a5f", "#4a9fd8"][i]} className="preview-packet">
            <animateMotion
              dur={`${2.2 + i * 0.2}s`}
              begin={`${i * 0.25}s`}
              repeatCount="indefinite"
              path={`M${m.x + 28} 52 L160 88`}
            />
          </circle>
        </g>
      ))}

      {/* Web hub */}
      <g className="animate-node-pulse" style={{ transformOrigin: "160px 104px" }}>
        <rect x="100" y="86" width="120" height="36" rx="10" fill="url(#erp-hub)" />
        <text
          x="160"
          y="102"
          textAnchor="middle"
          fill="white"
          fontSize="11"
          fontWeight="700"
          fontFamily="var(--font-fredoka), sans-serif"
        >
          Web Admin
        </text>
        <text
          x="160"
          y="114"
          textAnchor="middle"
          fill="#c8e8f8"
          fontSize="8"
          fontFamily="var(--font-nunito), sans-serif"
        >
          Supply Chain Pro
        </text>
      </g>

      <text
        x="160"
        y="140"
        textAnchor="middle"
        fontSize="7"
        fill="#4a5f7a"
        fontFamily="var(--font-nunito), sans-serif"
      >
        Data → Analyse → Insight → Rules → Reco → IA
      </text>
      <rect x="40" y="146" width="240" height="6" rx="3" fill="#d6ebf8" />
      <rect x="40" y="146" width="150" height="6" rx="3" fill="#4a9fd8" />
    </svg>
  );
}
