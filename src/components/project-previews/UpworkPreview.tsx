export function UpworkPreview() {
  return (
    <svg
      viewBox="0 0 320 160"
      className="h-full w-full"
      role="img"
      aria-label="Upwork freelance profile level"
    >
      <rect x="40" y="28" width="240" height="104" rx="16" fill="#14A800" opacity="0.12" />
      <rect x="70" y="48" width="180" height="64" rx="12" fill="white" stroke="#14A800" strokeWidth="2" />
      <text
        x="160"
        y="78"
        textAnchor="middle"
        fontSize="22"
        fontWeight="700"
        fill="#14A800"
        fontFamily="var(--font-fredoka), sans-serif"
      >
        Upwork
      </text>
      <text
        x="160"
        y="96"
        textAnchor="middle"
        fontSize="10"
        fill="#1a3a6b"
        fontFamily="var(--font-nunito), sans-serif"
      >
        Reviews · hours · revenue → live profile
      </text>
      <g className="animate-soft-float">
        <path d="M250 40 L268 48 L250 56 Z" fill="#14A800" />
      </g>
    </svg>
  );
}
