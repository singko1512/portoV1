import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedinIn, Mail, MessageCircle } from './icons'
import { GlassCard } from './GlassCard'
import { ProfileImage } from './ProfileImage'
import { Reveal } from './Reveal'
import { contactInfo, socialLinks } from '../data/content'

const iconMap = {
  instagram: FaInstagram,
  whatsapp: MessageCircle,
  mail: Mail,
  github: FaGithub,
  linkedin: FaLinkedinIn,
}

function QrBlock({ label, href, image }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col items-center rounded-2xl border border-red-800/40 bg-black/40 p-4 transition duration-300 hover:border-red-500/60 hover:shadow-glow"
    >
      <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-xl border border-red-700/50 bg-slate-950/80 p-1 transition group-hover:scale-105">
        <img src={image} alt={`QR ${label}`} className="h-full w-full object-contain" />
      </div>
      <p className="mt-3 text-xs uppercase tracking-[0.2em] text-cream-100/70">{label}</p>
    </a>
  )
}

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)

    const subject = encodeURIComponent(
      formData.name ? `Portfolio Contact — ${formData.name}` : 'Portfolio Contact',
    )
    const body = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )
    const mailto = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`

    window.location.href = mailto

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setLoading(false)
    }, 600)
  }

  return (
    <section id="contact" className="relative snap-start px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(153,27,27,0.25),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-red-400/90">
            Kolaborasi
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-cream-50 md:text-6xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 max-w-xl font-sans text-sm text-cream-100/60">
            Form akan membuka aplikasi email Anda dengan pesan siap kirim. Untuk chat cepat,
            gunakan tombol WhatsApp.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center gap-8 lg:items-start">
              <ProfileImage variant="circle" />

              <div className="grid w-full max-w-md grid-cols-2 gap-4">
                <QrBlock
                  label="Instagram"
                  href={contactInfo.instagramUrl}
                  image={contactInfo.qrInstagram}
                />
                <QrBlock
                  label="LinkedIn"
                  href={contactInfo.linkedinUrl}
                  image={contactInfo.qrLinkedin}
                />
              </div>

              <div className="flex w-full flex-wrap justify-center gap-3 lg:justify-start">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon]
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.icon === 'mail' ? undefined : '_blank'}
                      rel={link.icon === 'mail' ? undefined : 'noreferrer'}
                      whileHover={{ scale: 1.08 }}
                      className="flex items-center gap-2 rounded-full border border-red-800/50 bg-red-950/40 px-4 py-2 text-sm text-cream-50 transition hover:border-red-500 hover:shadow-glow"
                    >
                      <Icon size={16} />
                      {link.label}
                    </motion.a>
                  )
                })}
              </div>

              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-cream-100/50 transition hover:text-red-300"
              >
                WhatsApp: {contactInfo.whatsappDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <GlassCard>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <input
                  type="text"
                  placeholder="Nama"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-xl border border-red-900/50 bg-black/50 px-4 py-3 text-sm text-cream-50 placeholder:text-cream-100/40 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500/50"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-xl border border-red-900/50 bg-black/50 px-4 py-3 text-sm text-cream-50 placeholder:text-cream-100/40 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500/50"
                />
                <textarea
                  rows={5}
                  placeholder="Pesan"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="rounded-xl border border-red-900/50 bg-black/50 px-4 py-3 text-sm text-cream-50 placeholder:text-cream-100/40 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500/50"
                />
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden rounded-full bg-gradient-to-r from-red-800 to-red-600 py-3 text-sm font-semibold text-cream-50 shadow-glow transition disabled:opacity-70"
                >
                  {loading ? 'Membuka email...' : 'Kirim via Email'}
                </motion.button>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
