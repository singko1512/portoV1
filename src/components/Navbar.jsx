import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from './icons'
import { navItems } from '../data/content'

export function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-zinc-800/40 bg-black/50 shadow-cinematic backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-[0.2em] text-cream-50 md:text-2xl"
        >
          DAPA
        </a>

        <button
          type="button"
          className="rounded-xl border border-zinc-700/50 p-2 text-cream-50 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`relative text-sm font-medium tracking-wide transition ${
                activeSection === item.id
                  ? 'text-cream-50'
                  : 'text-cream-100/60 hover:text-cream-50'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-white to-zinc-400"
                />
              )}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-zinc-700 bg-zinc-900/40 px-5 py-2 text-sm font-semibold text-cream-50 shadow-glow transition hover:scale-105 hover:bg-zinc-800/60 hover:border-white"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-zinc-850 bg-black/80 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-5 py-5">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium ${
                    activeSection === item.id ? 'text-cream-50' : 'text-cream-100/70'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2 text-center text-sm font-semibold text-cream-50 hover:border-white transition"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
