export function SchoolStorePreview() {
  const steps = [
    { x: 36, label: "School" },
    { x: 112, label: "Catalog" },
    { x: 188, label: "Cart" },
    { x: 264, label: "Order" },
  ];

  return (
    <svg viewBox="0 0 320 160" className="h-full w-full" role="img" aria-label="School store order flow">
      <path
        d="M50 78 H270"
        fill="none"
        stroke="#7ec4ef"
        strokeWidth="3"
        strokeDasharray="8 8"
        className="animate-flow-dash"
      />
      <circle r="6" fill="#f0c14a" className="preview-packet">
        <animateMotion dur="3.2s" repeatCount="indefinite" path="M50 78 H270" />
      </circle>

      {steps.map((step, i) => (
        <g key={step.label}>
          <circle
            cx={step.x}
            cy="78"
            r="18"
            fill={i === 3 ? "#3d8c4a" : "#1a3a6b"}
            className={i === 3 ? "animate-node-pulse" : undefined}
            style={i === 3 ? { transformOrigin: `${step.x}px 78px` } : undefined}
          />
          <text
            x={step.x}
            y="82"
            textAnchor="middle"
            fill="white"
            fontSize="10"
            fontWeight="700"
            fontFamily="var(--font-fredoka), sans-serif"
          >
            {i + 1}
          </text>
          <text
            x={step.x}
            y="118"
            textAnchor="middle"
            fill="#1a2744"
            fontSize="10"
            fontWeight="600"
            fontFamily="var(--font-nunito), sans-serif"
            className="hidden sm:fill-current"
          >
            {step.label}
          </text>
        </g>
      ))}

      {/* Abstract school roof */}
      <path d="M24 42 L36 28 L48 42 Z" fill="#4a9fd8" className="animate-soft-float" />
      <rect x="26" y="42" width="20" height="14" rx="2" fill="#ffffff" stroke="#b8d4ea" />
    </svg>
  );
}
