export function RealtyPreview() {
  return (
    <svg viewBox="0 0 320 160" className="h-full w-full" role="img" aria-label="Real estate map and listings">
      {/* Map panel */}
      <rect x="24" y="24" width="150" height="112" rx="12" fill="#d6ebf8" stroke="#b8d4ea" />
      <path d="M40 110 C70 70, 90 100, 120 60 C140 40, 155 80, 160 90" fill="none" stroke="#4a9fd8" strokeWidth="2" />
      <g className="animate-soft-float" style={{ transformOrigin: "110px 70px" }}>
        <path d="M110 55 C110 45, 125 45, 125 55 C125 68, 110 78, 110 78 C110 78, 95 68, 95 55 C95 45, 110 45, 110 55 Z" fill="#e07a5f" />
        <circle cx="110" cy="54" r="4" fill="white" />
      </g>

      {/* Listing cards */}
      <g className="animate-listing-slide">
        <rect x="190" y="30" width="106" height="36" rx="8" fill="white" stroke="#b8d4ea" />
        <rect x="198" y="38" width="28" height="20" rx="4" fill="#7ec4ef" />
        <rect x="232" y="40" width="52" height="6" rx="2" fill="#1a3a6b" />
        <rect x="232" y="52" width="36" height="5" rx="2" fill="#b8d4ea" />
      </g>
      <g className="animate-listing-slide" style={{ animationDelay: "0.4s" }}>
        <rect x="190" y="76" width="106" height="36" rx="8" fill="white" stroke="#b8d4ea" />
        <rect x="198" y="84" width="28" height="20" rx="4" fill="#f0c14a" />
        <rect x="232" y="86" width="52" height="6" rx="2" fill="#1a3a6b" />
        <rect x="232" y="98" width="36" height="5" rx="2" fill="#b8d4ea" />
      </g>
    </svg>
  );
}
