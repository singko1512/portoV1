import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function LoadingScreen({ onComplete }) {
  const doneRef = useRef(onComplete)

  useEffect(() => {
    doneRef.current = onComplete
  })

  useEffect(() => {
    const timer = setTimeout(() => doneRef.current(), 700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080808] pointer-events-none"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_55%)]" />
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.4 }}
        className="font-mono text-3xl font-bold uppercase tracking-[0.35em] text-[#E5E5E5] md:text-5xl text-glow-white"
      >
        DAFFA HIBBAN
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="mt-3 font-serif text-sm text-[#f5e6d3]/70 md:text-base"
      >
        Portfolio Experience
      </motion.p>
    </motion.div>
  )
}

export function LoadingGate({ children }) {
  const [showOverlay, setShowOverlay] = useState(true)

  return (
    <>
      {children}
      <AnimatePresence>
        {showOverlay && (
          <LoadingScreen onComplete={() => setShowOverlay(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

