import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from './icons'
import { projects } from '../data/content'
import { Reveal } from './Reveal'

function ProjectCard({ project, index }) {
  const handleClick = (e) => {
    // Prevent redirecting if we clicked on a link inside the card
    if (e.target.closest('a')) return
    if (project.github && project.github !== '#') {
      window.open(project.github, '_blank', 'noopener,noreferrer')
    }
  }

  const isComingSoon = !project.github || project.github === '#'

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={!isComingSoon ? handleClick : undefined}
      className={`group relative overflow-hidden rounded-3xl border border-zinc-800/40 bg-zinc-950/25 p-6 shadow-cinematic backdrop-blur-xl transition duration-500 ${
        isComingSoon 
          ? 'opacity-60' 
          : 'hover:-translate-y-2 hover:border-white/50 hover:shadow-glow cursor-pointer'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 via-transparent to-black/50 opacity-0 transition duration-500 group-hover:opacity-100" />
      
      <div className="relative mb-5 h-48 overflow-hidden rounded-2xl border border-zinc-800/30 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black transition duration-500 group-hover:scale-[1.02] flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_55%)]" />
            <p className="absolute bottom-4 left-4 font-display text-2xl uppercase tracking-wider text-cream-50/20">
              {isComingSoon ? 'Coming Soon' : 'Case Study'}
            </p>
          </>
        )}
      </div>

      <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">{project.category}</p>
      <h3 className="mt-2 font-serif text-2xl font-bold text-cream-50">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-cream-100/70">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-zinc-800 bg-black/40 px-3 py-1 text-xs text-cream-100/80"
          >
            {tech}
          </span>
        ))}
      </div>

      {!isComingSoon && (
        <div className="relative mt-6 flex gap-3">
          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-xs font-semibold text-cream-50 transition hover:bg-zinc-700"
            >
              Live Demo <FaExternalLinkAlt size={14} />
            </a>
          )}
          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-xs font-semibold text-cream-50 transition hover:border-white"
            >
              Github <FaGithub size={14} />
            </a>
          )}
        </div>
      )}
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative snap-start px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-zinc-400">My Work</p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-cream-50 md:text-5xl">
            Recent Projects
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-cream-100/70">
            Showcase project premium dengan pendekatan desain modern, interaktif, dan fokus pada
            pengalaman pengguna.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
