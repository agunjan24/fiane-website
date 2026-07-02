/**
 * A faint field of US-flag stars, arranged like the flag's canton (staggered
 * rows, alternating counts). Balances the Ashoka chakra on the hero's right
 * side to reinforce the India + USA blend. Purely decorative.
 */

function starPoints(cx: number, cy: number, r: number, innerR: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const radius = i % 2 === 0 ? r : innerR;
    const angle = (Math.PI / 5) * i - Math.PI / 2; // start at top point
    pts.push(`${(cx + radius * Math.cos(angle)).toFixed(2)},${(cy + radius * Math.sin(angle)).toFixed(2)}`);
  }
  return pts.join(" ");
}

// Star colors — mostly white with a scattered few in patriotic red/blue
// (brightened from the brand tokens so they read on the dark hero).
const WHITE = "#FFFFFF";
const RED = "#D23B52";
const BLUE = "#6E6DE0";

export default function StarField({ className = "" }: { className?: string }) {
  const spacingX = 30;
  const spacingY = 26;
  const rows = 6;
  const margin = 16;

  const stars: { x: number; y: number; delay: number; color: string }[] = [];
  let idx = 0;
  for (let r = 0; r < rows; r++) {
    const oddRow = r % 2 === 1;
    const cols = oddRow ? 5 : 6;
    const offset = oddRow ? spacingX / 2 : 0;
    for (let c = 0; c < cols; c++) {
      // Scatter red/blue accents without clustering them.
      const color = idx % 7 === 2 ? RED : idx % 7 === 5 ? BLUE : WHITE;
      stars.push({
        x: margin + offset + c * spacingX,
        y: margin + r * spacingY,
        delay: (r + c) * 0.18,
        color,
      });
      idx++;
    }
  }

  const width = margin * 2 + 5 * spacingX + spacingX / 2;
  const height = margin * 2 + (rows - 1) * spacingY;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {stars.map((s, i) => (
        <polygon
          key={i}
          points={starPoints(s.x, s.y, 7, 2.9)}
          fill={s.color}
          className="star-twinkle"
          style={{ animationDelay: `${s.delay}s` }}
        />
      ))}
    </svg>
  );
}
