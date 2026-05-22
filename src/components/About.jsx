import { Reveal } from './Reveal'
import { GlassCard } from './GlassCard'
import { ProfileImage } from './ProfileImage'
import { stats } from '../data/content'

export function About() {
  return (
    <section id="about" className="relative snap-start px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(153,27,27,0.12),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-red-400/90">About Me</p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-cream-50 md:text-5xl">
            Kto <span className="text-red-400/90">Я?</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.1}>
            <div className="flex justify-center lg:justify-start">
              <ProfileImage variant="default" className="mx-auto" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <GlassCard>
              <p className="font-sans text-base leading-relaxed text-cream-100/80 md:text-lg">
                Saya adalah siswa SMK Wikrama jurusan PPLG/RPL yang memiliki minat di bidang
                frontend development, UI/UX design, dan web modern development. Saya senang
                membuat website yang modern, interaktif, dan memiliki pengalaman pengguna yang
                menarik.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group rounded-2xl border border-red-900/40 bg-black/30 p-4 transition duration-300 hover:border-red-500/50 hover:shadow-glow"
                  >
                    <p className="font-display text-2xl font-bold text-cream-50 md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-cream-100/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
