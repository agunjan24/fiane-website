/**
 * FIANE emblem — a deliberate blend of the two identities:
 *   • navy roundel + 24-spoke Ashoka chakra ring  → India
 *   • white five-point star at the center         → USA
 *   • saffron / green outer arcs                   → the Indian tricolor
 *
 * Pure inline SVG so it stays razor-sharp at any size (unlike the old raster
 * logo) and inherits the brand colors directly.
 */
export default function Logo({
  size = 44,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const cx = 100;
  const cy = 100;

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="FIANE emblem"
    >
      {/* Saffron top arc + green bottom arc — the tricolor framing */}
      <circle cx={cx} cy={cy} r="94" fill="#000080" />
      <path
        d="M100 6 A94 94 0 0 1 194 100 L100 100 Z"
        fill="#FF9933"
        opacity="0.9"
      />
      <path
        d="M100 194 A94 94 0 0 1 6 100 L100 100 Z"
        fill="#138808"
        opacity="0.9"
      />
      <circle cx={cx} cy={cy} r="94" fill="#000080" opacity="0.15" />
      <circle cx={cx} cy={cy} r="72" fill="#000080" />

      {/* Chakra ring — 24 spokes (India) */}
      <circle
        cx={cx}
        cy={cy}
        r="60"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
        opacity="0.85"
      />
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * 15 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={cx + 60 * Math.cos(a)}
            y2={cy + 60 * Math.sin(a)}
            stroke="#FFFFFF"
            strokeWidth="1"
            opacity="0.35"
          />
        );
      })}

      {/* White five-point star (USA) at center */}
      <Star cx={cx} cy={cy} r={34} innerR={14} fill="#FFFFFF" />
      <circle cx={cx} cy={cy} r="6" fill="#000080" />
    </svg>
  );
}

function Star({
  cx,
  cy,
  r,
  innerR,
  fill,
}: {
  cx: number;
  cy: number;
  r: number;
  innerR: number;
  fill: string;
}) {
  const points: string[] = [];
  for (let i = 0; i < 10; i++) {
    const radius = i % 2 === 0 ? r : innerR;
    // Start at the top point (-90°)
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    points.push(`${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`);
  }
  return <polygon points={points.join(" ")} fill={fill} />;
}
