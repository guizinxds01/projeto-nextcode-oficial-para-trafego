import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B0B0F]/90 backdrop-blur-xl border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo-nextcode.png" alt="NextCode" className="h-14 object-contain drop-shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:scale-105 transition-transform" />
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Como Funciona', 'Resultados', 'Preço'].map((item, i) => (
            <a
              key={i}
              href={`#${item === 'Como Funciona' ? 'como-funciona' : item === 'Resultados' ? 'cases' : 'preco'}`}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="https://wa.me/5500000000000?text=Quero+começar"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient text-white text-sm font-bold px-5 py-2.5 rounded-full"
        >
          Começar Agora
        </a>
      </div>
    </motion.nav>
  )
}
