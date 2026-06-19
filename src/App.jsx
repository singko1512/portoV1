import { LoadingGate } from './components/LoadingScreen'
import { AnimatedBackground } from './components/AnimatedBackground'
import { MouseGlow } from './components/MouseGlow'
import { ScrollProgress } from './components/ScrollProgress'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Certificates } from './components/Certificates'
import { Contact } from './components/Contact'
import { BackToTop } from './components/BackToTop'
import { useActiveSection } from './hooks/useActiveSection'
import { navItems } from './data/content'

function Portfolio() {
  const sectionIds = navItems.map((item) => item.id)
  const activeSection = useActiveSection(sectionIds)

  return (
    <div className="relative min-h-screen font-sans text-cream-50">
      <AnimatedBackground />
      <MouseGlow />
      <ScrollProgress />
      <Navbar activeSection={activeSection} />

      <main className="snap-y snap-proximity scroll-smooth">
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <footer className="border-t border-zinc-800/40 px-5 py-10 text-center md:px-8">
        <p className="font-sans text-sm text-cream-100/50">
          © 2026 Daffa Hibban Gunawan. All rights reserved.
        </p>
        <p className="mt-2 font-display text-xs uppercase tracking-[0.3em] text-zinc-500/60">
          Designed with passion
        </p>
      </footer>

      <BackToTop />
    </div>
  )
}

function App() {
  return (
    <LoadingGate>
      <Portfolio />
    </LoadingGate>
  )
}

export default App
