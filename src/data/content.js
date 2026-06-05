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
import carbonCalculatorImg from '../assets/carbon-calculator.png'
import firstPortfolioImg from '../assets/first-portfolio.png'

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
    title: 'Kalkulator Jejak Karbon',
    category: 'Web Application',
    description:
      'Aplikasi web interaktif berbasis HTML, CSS, dan JS untuk menghitung emisi karbon harian (elektronik & listrik) secara real-time sebagai media edukasi lingkungan.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://github.com/ikhsanalfaridzi/Karbon',
    github: 'https://github.com/ikhsanalfaridzi/Karbon',
    image: carbonCalculatorImg,
  },
  {
    title: 'First Portofolio',
    category: 'Personal Website',
    description:
      'Situs portofolio personal pertama dengan desain bersih, responsif, dan modern untuk menampilkan profil serta karya PPLG saya secara terstruktur.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://github.com/singko1512/personal.web',
    github: 'https://github.com/singko1512/personal.web',
    image: firstPortfolioImg,
  },
  {
    title: 'Project 3 (Coming Soon)',
    category: 'Future Project',
    description:
      'Proyek berikutnya sedang dalam tahap pengembangan dan akan segera dipublikasikan.',
    stack: ['React', 'Tailwind', 'JavaScript'],
    demo: '#',
    github: '#',
    image: null,
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
  email: 'hibbandaffa107@gmail.com',
  formspreeUrl: 'https://formspree.io/f/maqkdkkg',
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
