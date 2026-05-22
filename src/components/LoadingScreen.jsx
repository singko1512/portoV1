import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function LoadingScreen({ onComplete }) {
  const doneRef = useRef(onComplete)

  useEffect(() => {
    doneRef.current = onComplete
  })

  useEffect(() => {
    const timer = setTimeout(() => doneRef.current(), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0000]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.2),transparent_55%)]" />
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-display text-4xl font-bold uppercase tracking-[0.35em] text-[#fdf5e6] md:text-6xl"
      >
        DAPA
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-3 font-serif text-sm text-[#f5e6d3]/70 md:text-base"
      >
        Portfolio Experience
      </motion.p>
      <motion.div
        className="mt-10 h-1 w-48 overflow-hidden rounded-full bg-red-950"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-red-800 to-red-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  )
}

export function LoadingGate({ children }) {
  const [ready, setReady] = useState(false)

  if (!ready) {
    return <LoadingScreen onComplete={() => setReady(true)} />
  }

  return children
}
