import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ZoomIn } from './icons'
import { certificates } from '../data/content'
import { Reveal } from './Reveal'

function CertificateCard({ item, onOpen }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-red-900/35 bg-burgundy-900/35 shadow-cinematic backdrop-blur-xl transition duration-300 hover:border-red-500/50 hover:shadow-glow"
      onClick={() => onOpen(item)}
    >
      <div className="relative overflow-hidden bg-black/50 p-3">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-48 w-full object-contain transition duration-500 group-hover:scale-[1.03] md:h-52"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
          <ZoomIn className="text-cream-50" size={28} />
        </div>
      </div>
      <div className="p-5">
        <span className="rounded-full border border-red-700/50 bg-red-950/50 px-3 py-1 text-[10px] uppercase tracking-wider text-red-200">
          {item.type}
        </span>
        <h3 className="mt-3 font-serif text-lg font-bold text-cream-50">{item.name}</h3>
        <p className="mt-1 text-sm text-cream-100/60">
          {item.issuer} • {item.year}
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-cream-100/55">{item.description}</p>
      </div>
    </motion.article>
  )
}

export function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="relative snap-start px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(127,29,29,0.15),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-red-400/90">Achievements</p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-cream-50 md:text-5xl">Certificates</h2>
          <p className="mt-4 max-w-3xl font-sans text-cream-100/70">
            Koleksi sertifikat resmi yang menunjukkan progres belajar dan kompetensi di bidang
            teknologi, desain, dan pengembangan web.
          </p>
        </Reveal>

        <div className="mt-12 columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
          {certificates.map((item) => (
            <div key={item.name} className="break-inside-avoid">
              <CertificateCard item={item} onOpen={setSelected} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-red-800/50 bg-burgundy-950 p-4 shadow-glow"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-red-700/50 bg-black/60 p-2 text-cream-50"
                aria-label="Close preview"
              >
                <X size={18} />
              </button>
              <img
                src={selected.image}
                alt={selected.name}
                className="max-h-[70vh] w-full object-contain"
              />
              <div className="mt-4 px-2">
                <h3 className="font-serif text-xl font-bold text-cream-50">{selected.name}</h3>
                <p className="mt-1 text-sm text-cream-100/70">{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
