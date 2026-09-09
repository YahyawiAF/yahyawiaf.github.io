export function ErpFlowPreview() {
  return (
    <svg
      viewBox="0 0 320 160"
      className="h-full w-full"
      role="img"
      aria-label="ERP connecting web admin, mobile admin, warehouse, and commercial"
    >
      <defs>
        <linearGradient id="erp-hub" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4a9fd8" />
          <stop offset="100%" stopColor="#1a3a6b" />
        </linearGradient>
      </defs>

      {/* Paths */}
      <path
        id="erp-p1"
        d="M80 40 C110 40, 130 70, 160 80"
        fill="none"
        stroke="#7ec4ef"
        strokeWidth="2"
        strokeDasharray="6 6"
        className="animate-flow-dash"
      />
      <path
        id="erp-p2"
        d="M240 40 C210 40, 190 70, 160 80"
        fill="none"
        stroke="#7ec4ef"
        strokeWidth="2"
        strokeDasharray="6 6"
        className="animate-flow-dash"
      />
      <path
        id="erp-p3"
        d="M80 120 C110 120, 130 90, 160 80"
        fill="none"
        stroke="#7ec4ef"
        strokeWidth="2"
        strokeDasharray="6 6"
        className="animate-flow-dash"
      />
      <path
        id="erp-p4"
        d="M240 120 C210 120, 190 90, 160 80"
        fill="none"
        stroke="#7ec4ef"
        strokeWidth="2"
        strokeDasharray="6 6"
        className="animate-flow-dash"
      />

      {/* Packets */}
      <circle r="4" fill="#f0c14a" className="preview-packet">
        <animateMotion dur="2.4s" repeatCount="indefinite" path="M80 40 C110 40, 130 70, 160 80" />
      </circle>
      <circle r="4" fill="#f0c14a" className="preview-packet">
        <animateMotion dur="2.8s" begin="0.4s" repeatCount="indefinite" path="M240 40 C210 40, 190 70, 160 80" />
      </circle>
      <circle r="4" fill="#3d8c4a" className="preview-packet">
        <animateMotion dur="2.6s" begin="0.8s" repeatCount="indefinite" path="M80 120 C110 120, 130 90, 160 80" />
      </circle>
      <circle r="4" fill="#e07a5f" className="preview-packet">
        <animateMotion dur="3s" begin="1.1s" repeatCount="indefinite" path="M240 120 C210 120, 190 90, 160 80" />
      </circle>

      {/* Hub */}
      <g className="animate-node-pulse origin-center" style={{ transformOrigin: "160px 80px" }}>
        <circle cx="160" cy="80" r="26" fill="url(#erp-hub)" />
        <text
          x="160"
          y="84"
          textAnchor="middle"
          fill="white"
          fontSize="11"
          fontWeight="700"
          fontFamily="var(--font-fredoka), sans-serif"
        >
          ERP
        </text>
      </g>

      {/* Nodes */}
      <g>
        <rect x="18" y="22" width="78" height="36" rx="8" fill="white" stroke="#b8d4ea" />
        <text x="57" y="37" textAnchor="middle" fontSize="8" fill="#4a5f7a" fontFamily="var(--font-nunito), sans-serif">
          Web
        </text>
        <text x="57" y="49" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1a3a6b" fontFamily="var(--font-fredoka), sans-serif">
          Admin
        </text>
      </g>
      <g>
        <rect x="224" y="22" width="78" height="36" rx="8" fill="white" stroke="#b8d4ea" />
        <text x="263" y="37" textAnchor="middle" fontSize="8" fill="#4a5f7a" fontFamily="var(--font-nunito), sans-serif">
          Mobile
        </text>
        <text x="263" y="49" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1a3a6b" fontFamily="var(--font-fredoka), sans-serif">
          Admin
        </text>
      </g>
      <g>
        <rect x="18" y="102" width="78" height="36" rx="8" fill="white" stroke="#b8d4ea" />
        <text x="57" y="117" textAnchor="middle" fontSize="8" fill="#4a5f7a" fontFamily="var(--font-nunito), sans-serif">
          Warehouse
        </text>
        <text x="57" y="129" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1a3a6b" fontFamily="var(--font-fredoka), sans-serif">
          Entrepôt
        </text>
      </g>
      <g>
        <rect x="224" y="102" width="78" height="36" rx="8" fill="white" stroke="#b8d4ea" />
        <text x="263" y="117" textAnchor="middle" fontSize="8" fill="#4a5f7a" fontFamily="var(--font-nunito), sans-serif">
          Sales
        </text>
        <text x="263" y="129" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1a3a6b" fontFamily="var(--font-fredoka), sans-serif">
          Commercial
        </text>
      </g>
    </svg>
  );
}
