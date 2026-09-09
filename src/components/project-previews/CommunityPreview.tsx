export function CommunityPreview() {
  const nodes = [
    { cx: 160, cy: 78, r: 22, delay: "0s", center: true },
    { cx: 70, cy: 46, r: 12, delay: "0.3s" },
    { cx: 250, cy: 50, r: 11, delay: "0.6s" },
    { cx: 84, cy: 118, r: 10, delay: "0.9s" },
    { cx: 240, cy: 116, r: 13, delay: "1.2s" },
    { cx: 160, cy: 28, r: 9, delay: "0.45s" },
  ];

  return (
    <svg viewBox="0 0 320 160" className="h-full w-full" role="img" aria-label="Community network lighting up">
      {nodes.slice(1).map((n, i) => (
        <line
          key={i}
          x1={160}
          y1={78}
          x2={n.cx}
          y2={n.cy}
          stroke="#7ec4ef"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="animate-flow-dash"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill={n.center ? "#1a3a6b" : "#4a9fd8"}
          className="animate-node-pulse"
          style={{
            transformOrigin: `${n.cx}px ${n.cy}px`,
            animationDelay: n.delay,
          }}
        />
      ))}
      <text
        x="160"
        y="82"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontWeight="700"
        fontFamily="var(--font-fredoka), sans-serif"
      >
        Feed
      </text>
    </svg>
  );
}
