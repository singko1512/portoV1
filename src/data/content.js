import profilePerson from '../assets/profile-person.png'
import qrInstagram from '../assets/qr-instagram.png'
import qrLinkedin from '../assets/qr-linkedin.png'
import cert1 from '../assets/certificates/cert-1.png'
import cert2 from '../assets/certificates/cert-2.png'
import cert3 from '../assets/certificates/cert-3.png'
import cert4 from '../assets/certificates/cert-4.png'
import cert5 from '../assets/certificates/cert-5.png'
import cert6 from '../assets/certificates/cert-6.png'
import cert7 from '../assets/certificates/cert-7.png'
import cert8 from '../assets/certificates/cert-8.png'
import cert9 from '../assets/certificates/cert-9.png'

export const profileImage = profilePerson

export const navItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'certificates', label: 'Certificates', href: '#certificates' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const stats = [
  { label: 'Project Selesai', value: '3+' },
  { label: 'Sertifikat', value: '9' },
  { label: 'Skill', value: '12+' },
  { label: 'Pengalaman', value: '2+ Thn' },
]

export const projects = [
  {
    title: 'EduVerse Landing Platform',
    category: 'Web Design',
    description:
      'Landing page education platform dengan fokus conversion, hierarki visual yang kuat, dan UX yang mudah dipahami.',
    stack: ['React', 'Tailwind', 'Figma'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Finance Tracker Dashboard',
    category: 'Frontend Development',
    description:
      'Dashboard interaktif untuk monitoring cashflow dengan chart dinamis, filter data, dan layout responsif.',
    stack: ['React', 'Chart.js', 'CSS'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Luma Commerce Redesign',
    category: 'UI/UX Case Study',
    description:
      'Redesign checkout flow e-commerce agar lebih cepat, sederhana, dan meningkatkan conversion rate.',
    stack: ['Figma', 'UI/UX', 'Prototyping'],
    demo: '#',
    github: '#',
  },
]

export const certificates = [
  {
    name: 'Express Course',
    issuer: 'Code.org',
    year: '2021',
    type: 'Online',
    image: cert1,
    description:
      'Mempelajari dasar computer science melalui kurikulum interaktif dan project dasar.',
  },
  {
    name: 'Creating Your Own Digital World',
    issuer: 'Sentra Bisnis Wikrama',
    year: '2024',
    type: 'Bootcamp',
    image: cert2,
    description:
      'Workshop coding adventure for teens dengan fokus praktik dan problem solving.',
  },
  {
    name: 'Keselamatan dan Kesehatan Kerja',
    issuer: 'ILO - Safety + Health for All',
    year: '2024',
    type: 'Online',
    image: cert3,
    description:
      'E-learning K3 untuk memahami budaya kerja aman dan standar keselamatan dasar.',
  },
  {
    name: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding',
    year: '2025',
    type: 'Online',
    image: cert4,
    description:
      'Mempelajari fondasi JavaScript modern, struktur data, dan logika pemrograman.',
  },
  {
    name: 'Pertamuda Workshop Series #4',
    issuer: 'Pertamina',
    year: '2025',
    type: 'Online',
    image: cert5,
    description:
      'Partisipasi aktif dalam workshop pengembangan wawasan inovasi dan bisnis berkelanjutan.',
  },
  {
    name: 'Memulai Pemrograman Dengan Java',
    issuer: 'Dicoding',
    year: '2025',
    type: 'Online',
    image: cert6,
    description: 'Belajar konsep OOP, alur program, dan implementasi Java untuk aplikasi dasar.',
  },
  {
    name: 'Belajar Dasar AI',
    issuer: 'Dicoding',
    year: '2025',
    type: 'Online',
    image: cert7,
    description:
      'Pengenalan artificial intelligence, alur kerja model, dan penerapan AI dasar.',
  },
  {
    name: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding',
    year: '2024',
    type: 'Online',
    image: cert8,
    description:
      'Mempelajari fondasi HTML, CSS, dan struktur pembuatan website responsif.',
  },
  {
    name: 'Level Up Your CV: From Draft to Opportunity',
    issuer: 'Sentra Bisnis Wikrama',
    year: '2025',
    type: 'Bootcamp',
    image: cert9,
    description:
      'Workshop penguatan personal branding, CV writing, dan kesiapan karier profesional.',
  },
]

export const contactInfo = {
  email: 'dapahiben@gmail.com',
  whatsappUrl: 'https://wa.me/6283875109156',
  whatsappDisplay: '083875109156',
  linkedinUrl: 'https://www.linkedin.com/in/m-fadli-ramadhan-0a37032a1/',
  instagramUrl: 'https://www.instagram.com/daffahibann/',
  qrInstagram,
  qrLinkedin,
}

export const socialLinks = [
  { label: 'Instagram', href: contactInfo.instagramUrl, icon: 'instagram' },
  { label: 'WhatsApp', href: contactInfo.whatsappUrl, icon: 'whatsapp' },
  { label: 'Email', href: `mailto:${contactInfo.email}`, icon: 'mail' },
  { label: 'Github', href: 'https://github.com', icon: 'github' },
  { label: 'LinkedIn', href: contactInfo.linkedinUrl, icon: 'linkedin' },
]
