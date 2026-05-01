import { motion } from 'framer-motion'

const tools = [
  { name: 'WhatsApp', icon: '📱' },
  { name: 'Instagram', icon: '📸' },
  { name: 'OpenAI', icon: '🧠' },
  { name: 'Shopify', icon: '🛍️' },
  { name: 'n8n', icon: '⚙️' },
  // Duplicate for infinite scroll
  { name: 'WhatsApp', icon: '📱' },
  { name: 'Instagram', icon: '📸' },
  { name: 'OpenAI', icon: '🧠' },
  { name: 'Shopify', icon: '🛍️' },
  { name: 'n8n', icon: '⚙️' },
]

export default function Tools() {
  return (
    <section className="py-20 relative overflow-hidden bg-transparent border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center relative z-10">
        <p className="text-brand-textSec text-sm tracking-widest uppercase font-medium">
          Integrado com as melhores ferramentas do mercado
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Left/Right Fades */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap gap-16 px-8 items-center"
          animate={{ x: [0, -1035] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
          style={{ width: 'fit-content' }}
        >
          {tools.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300 group-hover:opacity-40"
            >
              <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300">{t.icon}</span>
              <span className="text-xl font-semibold text-brand-textSec group-hover:text-white transition-colors duration-300">{t.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
