import { motion } from 'framer-motion'
import { ChevronDown } from './icons'
import { ProfileImage } from './ProfileImage'
import { Reveal } from './Reveal'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function Hero() {
  const reduced = usePrefersReducedMotion()

  return (
    <section
      id="home"
      className="relative flex min-h-screen snap-start flex-col justify-center overflow-hidden px-5 pb-16 pt-28 md:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(127,29,29,0.35),transparent_50%)]" />
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-red-900/30 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-red-700/20 blur-[90px]" />

      <p className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 font-display text-[12vw] font-bold uppercase leading-none tracking-tighter text-red-950/80 md:block">
        Portfolio
      </p>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <Reveal>
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.35em] text-red-300/90 md:text-sm">
              SMK Wikrama • PPLG / RPL
            </p>
          </Reveal>

          <motion.h1
            className="font-serif text-4xl font-bold leading-[1.05] text-cream-50 sm:text-5xl md:text-6xl lg:text-7xl"
            initial={reduced ? undefined : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Daffa Hibban
            <span className="block bg-gradient-to-r from-cream-50 via-red-200 to-red-500 bg-clip-text font-display text-5xl uppercase tracking-wide text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
              Gunawan
            </span>
          </motion.h1>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-cream-100/75 md:text-lg lg:mx-0">
              SMK Wikrama Student • PPLG / RPL • Frontend Developer &amp; UI Designer
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-red-800 to-red-600 px-7 py-3 text-sm font-semibold text-cream-50 shadow-glow transition hover:scale-105 hover:from-red-700 hover:to-red-500"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-red-500/40 bg-red-950/30 px-7 py-3 text-sm font-semibold text-cream-50 backdrop-blur-md transition hover:border-red-400 hover:bg-red-900/40"
              >
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <Reveal delay={0.2} className="w-full max-w-lg">
            <ProfileImage variant="hero" />
          </Reveal>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-cream-100/50"
        animate={reduced ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown size={20} />
      </motion.a>
    </section>
  )
}
