import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, FaInstagram, FaGithub, FaLinkedinIn } from './icons'
import { Reveal } from './Reveal'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { contactInfo } from '../data/content'
import UnicornScene from 'unicornstudio-react'
import { Play } from 'lucide-react'
import carbonCalculatorImg from '../assets/carbon-calculator.png'

export function Hero() {
  const reduced = usePrefersReducedMotion()

  return (
    <section
      id="home"
      className="relative flex min-h-screen snap-start flex-col justify-center overflow-hidden px-5 pb-16 pt-28 md:px-8 bg-[#080808]"
    >
      {/* Hero Content Grid (3-column layout) */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 grid-cols-1 lg:grid-cols-12 z-10">

        {/* Left Column: Title & Intro */}
        <div className="col-span-12 lg:col-span-4 text-center lg:text-left flex flex-col justify-center space-y-6">
          <div>
            <Reveal>
              <p className="mb-2 font-sans text-xs uppercase tracking-[0.4em] text-zinc-400 font-bold md:text-sm">
                MARVEL
              </p>
            </Reveal>

            <motion.h1
              className="font-display text-5xl font-black leading-[0.95] text-cream-50 sm:text-6xl md:text-7xl uppercase tracking-tighter"
              initial={reduced ? undefined : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              SPIDER-MAN
              <span className="block font-serif text-3xl font-semibold tracking-normal text-white/80 capitalize mt-2 italic">
                Daffa Hibban
              </span>
            </motion.h1>
          </div>

          <Reveal delay={0.15}>
            <p className="mx-auto max-w-md font-sans text-sm leading-relaxed text-cream-100/75 lg:mx-0">
              Siswa SMK Wikrama Bogor jurusan Pengembangan Perangkat Lunak &amp; Gim. Memiliki keahlian di bidang frontend development, merancang antarmuka Web &amp; Game yang modern dan interaktif.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="rounded-full bg-cream-50 hover:bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-glow transition hover:scale-105"
              >
                Lihat Karya
              </a>
              <a
                href="#contact"
                className="rounded-full border border-zinc-750 bg-zinc-900/30 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-cream-50 backdrop-blur-md transition hover:border-white hover:bg-zinc-800/40"
              >
                Hubungi Saya
              </a>
            </div>
          </Reveal>

          {/* Social Links */}
          <Reveal delay={0.35}>
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-cream-100/50">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
                <FaGithub size={18} />
              </a>
              <a href={contactInfo.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-white transition">
                <FaInstagram size={18} />
              </a>
              <a href={contactInfo.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-white transition">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Center Column: Portrait Container */}
        <div className="col-span-12 lg:col-span-4 min-h-[350px] sm:min-h-[450px] lg:h-[70vh] relative flex items-center justify-center overflow-visible z-0">
          <div
            className="absolute w-[90vw] max-w-[400px] sm:max-w-[500px] lg:w-[900px] lg:max-w-none aspect-[16/10] flex items-center justify-center"
            style={{
              WebkitMaskImage: 'radial-gradient(circle at 50% 45%, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0) 70%)',
              maskImage: 'radial-gradient(circle at 50% 45%, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0) 70%)',
            }}
          >
            <UnicornScene
              projectId="ceD2mQXyBHE8FGVKjqOo"
              width="1440px"
              height="900px"
              scale={1}
              dpi={1.5}
              sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.5/dist/unicornStudio.umd.js"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Right Column: Developer Metrics & Featured Showcase */}
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-center space-y-8 lg:pl-6 text-center lg:text-left mt-8 lg:mt-0">

          {/* Metrics Widget */}
          <div className="space-y-4 max-w-sm mx-auto lg:mx-0 w-full">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream-100/40 font-bold">
              Developer Metrics
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-3 bg-black/40 border border-zinc-800/40 rounded-xl px-4 py-3 backdrop-blur-md">
                <span className="font-display text-2xl font-bold text-white text-glow-white">9.9</span>
                <div className="font-mono text-[9px] leading-tight text-left">
                  <p className="font-bold text-cream-50">LIGHTHOUSE</p>
                  <p className="text-cream-100/40">Performance Score</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 bg-black/40 border border-zinc-800/40 rounded-xl px-4 py-3 backdrop-blur-md">
                <span className="font-display text-2xl font-bold text-cream-50">9.8</span>
                <div className="font-mono text-[9px] leading-tight text-left">
                  <p className="font-bold text-cream-50">CLEAN_CODE</p>
                  <p className="text-cream-100/40">Maintainability Index</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card Showcase */}
          <div className="space-y-3 max-w-sm mx-auto lg:mx-0 w-full">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream-100/40 font-bold">
              Featured Showcase
            </p>
            <a
              href="#projects"
              className="group cursor-pointer block relative overflow-hidden rounded-xl border border-zinc-800/40 bg-black/40 p-2.5 backdrop-blur-md transition-all duration-300 hover:border-white/50"
            >
              <div className="relative h-28 overflow-hidden rounded-lg bg-[#080808] flex items-center justify-center">
                <img
                  src={carbonCalculatorImg}
                  alt="Kalkulator Jejak Karbon"
                  className="h-full w-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition duration-300 border border-white/20">
                    <Play size={14} className="text-white fill-current translate-x-0.5" />
                  </div>
                </div>
              </div>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-cream-50 font-bold leading-none text-left pl-1">
                Kalkulator Jejak Karbon
              </p>
            </a>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-cream-100/50 hover:text-white transition z-10"
        animate={reduced ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Scroll</span>
        <ChevronDown size={20} />
      </motion.a>
    </section>
  )
}
