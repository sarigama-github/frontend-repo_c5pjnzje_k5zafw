import { useMemo } from 'react'

export default function SimpleLineChart({ data = [] }) {
  // Simple SVG line chart for mobile
  const { points, min, max } = useMemo(() => {
    if (!data.length) return { points: '', min: 0, max: 0 }
    const values = data.map(d => d.value)
    const min = Math.min(...values)
    const max = Math.max(...values)
    const range = max - min || 1
    const w = 320
    const h = 120
    const step = w / (data.length - 1)

    const pts = data.map((d, i) => {
      const x = i * step
      const y = h - ((d.value - min) / range) * h
      return `${x},${y}`
    }).join(' ')

    return { points: pts, min, max }
  }, [data])

  if (!data.length) return null

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3">
      <svg viewBox="0 0 320 120" className="w-full h-28">
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline fill="none" stroke="#14b8a6" strokeWidth="3" points={points} />
        <polyline fill="url(#grad)" stroke="none" points={`0,120 ${points} 320,120`} />
      </svg>
      <div className="flex items-center justify-between text-xs text-gray-500 px-1">
        <span>Min {min}</span>
        <span>Max {max}</span>
      </div>
    </div>
  )
}
