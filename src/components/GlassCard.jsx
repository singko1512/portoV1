export function GlassCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-3xl border border-zinc-800/40 bg-black/40 p-6 shadow-cinematic backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  )
}
