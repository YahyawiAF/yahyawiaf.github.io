export function TravelPreview() {
  return (
    <svg
      viewBox="0 0 320 160"
      className="h-full w-full"
      role="img"
      aria-label="Flight and hotel booking app"
    >
      <rect x="0" y="0" width="320" height="160" fill="#0ea5a8" opacity="0.2" />
      <path
        d="M40 110 Q100 40 160 70 T280 50"
        fill="none"
        stroke="#4a9fd8"
        strokeWidth="2"
        strokeDasharray="5 5"
        className="animate-flow-dash"
      />
      <g className="animate-soft-float">
        <path
          d="M250 48 L268 42 L272 48 L268 52 Z"
          fill="#1a3a6b"
        />
        <circle cx="250" cy="48" r="3" fill="#f0c14a" className="preview-packet">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M40 110 Q100 40 160 70 T280 50" />
        </circle>
      </g>

      {/* Phone frame */}
      <rect x="118" y="22" width="84" height="116" rx="12" fill="#1a3a6b" />
      <rect x="124" y="32" width="72" height="88" rx="4" fill="#e8f4fc" />
      <rect x="130" y="40" width="28" height="22" rx="3" fill="#0ea5a8" />
      <rect x="162" y="40" width="28" height="22" rx="3" fill="#4a9fd8" />
      <rect x="130" y="70" width="60" height="6" rx="2" fill="#b8d4ea" />
      <rect x="130" y="82" width="48" height="6" rx="2" fill="#b8d4ea" />
      <circle cx="160" cy="128" r="3" fill="#7ec4ef" />

      <text
        x="40"
        y="36"
        fill="#1a3a6b"
        fontSize="11"
        fontWeight="700"
        fontFamily="var(--font-fredoka), sans-serif"
      >
        Flights
      </text>
      <text
        x="40"
        y="52"
        fill="#1a3a6b"
        fontSize="11"
        fontWeight="700"
        fontFamily="var(--font-fredoka), sans-serif"
      >
        Hotels
      </text>
    </svg>
  );
}
