import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function MouseGlow() {
  const reduced = usePrefersReducedMotion()
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const enabled = useMemo(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const mobile = window.matchMedia('(max-width: 768px)').matches
    return fine && !mobile && !reduced
  }, [reduced])

  useEffect(() => {
    if (!enabled) return

    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [enabled])

  if (!enabled) return null

  return (
    <motion.div
      className="pointer-events-none fixed z-[60] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-3xl"
      animate={{ left: pos.x, top: pos.y }}
      transition={{ type: 'spring', stiffness: 80, damping: 20, mass: 0.4 }}
    />
  )
}
