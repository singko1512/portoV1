export function GlassCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-3xl border border-red-900/30 bg-burgundy-900/40 p-6 shadow-cinematic backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  )
}
