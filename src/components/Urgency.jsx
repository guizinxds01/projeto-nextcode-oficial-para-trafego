import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

export default function Urgency() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [vagas, setVagas] = useState(7)
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true)
      setTimeout(() => setPulse(false), 400)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center glass rounded-3xl border border-brand-red/20 p-10 md:p-14 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(255,77,109,0.06), rgba(108,99,255,0.06))' }}
        >
          <div className="absolute inset-0 bg-brand-red/3 rounded-3xl pointer-events-none" />

          <span className="inline-block bg-brand-red/15 border border-brand-red/40 text-brand-red text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            ⚠️ Atenção
          </span>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
            Estamos selecionando apenas{' '}
            <span className="text-brand-red">20 novos clientes</span>{' '}
            este mês
          </h2>

          <p className="text-white/45 mb-10 leading-relaxed max-w-lg mx-auto">
            Para garantir qualidade e resultados reais para cada cliente, limitamos as novas ativações. Quando as vagas fecharem, você entra em lista de espera.
          </p>

          <div className="inline-flex flex-col items-center bg-brand-red/10 border border-brand-red/30 rounded-2xl px-12 py-6 mb-10">
            <motion.span
              animate={pulse ? { scale: 1.15 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-6xl font-black text-brand-red leading-none"
            >
              {vagas}
            </motion.span>
            <span className="text-white/40 text-sm mt-1">vagas restantes</span>
          </div>

          <div>
            <a
              href="https://wa.me/5500000000000?text=Quero+garantir+minha+vaga"
              target="_blank"
              rel="noopener noreferrer"
              id="urgency-cta"
              className="btn-gradient text-white font-bold px-10 py-4 rounded-full text-lg inline-flex items-center gap-2"
            >
              Garantir minha vaga agora →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
