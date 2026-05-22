import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { profileImage } from '../data/content'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function ProfileImage({ variant = 'hero', className = '' }) {
  const reduced = usePrefersReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 120, damping: 18 })
  const springY = useSpring(my, { stiffness: 120, damping: 18 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6])

  const isHero = variant === 'hero'
  const isCircle = variant === 'circle'

  const handleMove = (e) => {
    if (reduced) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mx.set(x)
    my.set(y)
  }

  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  const sizeClass = isHero
    ? 'h-[min(72vh,520px)] w-full max-w-lg'
    : isCircle
      ? 'h-56 w-56 md:h-64 md:w-64'
      : 'h-80 w-full max-w-sm'

  const motionProps = reduced
    ? {}
    : {
        style: { rotateX, rotateY },
        animate: isHero ? { y: [0, -10, 0] } : undefined,
        transition: isHero
          ? { duration: 5, repeat: Infinity, ease: 'easeInOut' }
          : undefined,
        whileHover: { scale: 1.03 },
      }

  return (
    <motion.div
      className={`group relative ${sizeClass} ${className}`}
      style={{ perspective: 1000 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...motionProps}
    >
      <div className="absolute inset-0 rounded-full bg-red-600/25 blur-3xl" />
      <div
        className={`relative h-full w-full overflow-hidden border border-red-500/25 bg-burgundy-950/50 shadow-cinematic backdrop-blur-md ${
          isCircle ? 'rounded-full' : 'rounded-[2rem]'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-black/60" />
        <img
          src={profileImage}
          alt="Daffa Hibban Gunawan"
          loading="lazy"
          className={`relative z-10 h-full w-full object-contain object-bottom p-4 transition duration-500 group-hover:brightness-110 ${
            isCircle ? 'p-2' : 'p-6'
          }`}
        />
      </div>
    </motion.div>
  )
}
