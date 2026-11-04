// Degradado de barras verticales (gradientool): #fbf0ee → #ff9dc5 → #2345e0 → #000, un pico central, grano 0.5.
const COUNT = 9
export default function GradientBars() {
  return (
    <div className="gbars" aria-hidden="true">
      {Array.from({ length: COUNT }, (_, i) => {
        const t = i / (COUNT - 1)
        const peak = Math.cos((t - 0.5) * Math.PI) // 1 en el centro
        const shift = 18 + peak * 40 // % que sube el degradado
        return <span key={i} style={{ '--shift': `${shift}%`, '--i': i }} />
      })}
      <svg className="grain" xmlns="http://www.w3.org/2000/svg">
        <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
        <rect width="100%" height="100%" filter="url(#n)" />
      </svg>
    </div>
  )
}
