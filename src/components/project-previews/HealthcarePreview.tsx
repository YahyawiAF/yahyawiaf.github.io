export function HealthcarePreview() {
  return (
    <svg viewBox="0 0 320 160" className="h-full w-full" role="img" aria-label="Healthcare tablet checklist">
      <rect x="95" y="18" width="130" height="124" rx="14" fill="#1a3a6b" />
      <rect x="104" y="30" width="112" height="92" rx="6" fill="#e8f4fc" />
      <circle cx="160" cy="132" r="4" fill="#7ec4ef" />

      {/* Vitals wave */}
      <path
        d="M112 52 C124 40, 136 64, 148 52 C160 40, 172 64, 184 52 C196 40, 208 58, 212 52"
        fill="none"
        stroke="#4a9fd8"
        strokeWidth="2.5"
        strokeDasharray="6 4"
        className="animate-flow-dash"
      />

      {/* Checklist rows */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="114" y={68 + i * 16} width="92" height="10" rx="3" fill="#d6ebf8" />
          <circle
            cx="120"
            cy={73 + i * 16}
            r="3.5"
            fill="#3d8c4a"
            className="animate-checklist-tick"
            style={{ animationDelay: `${i * 0.45}s` }}
          />
        </g>
      ))}
    </svg>
  );
}
