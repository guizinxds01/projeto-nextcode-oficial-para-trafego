import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const nextcodeItems = [
  '✅ Atendimento 24h por dia',
  '✅ Resposta em segundos',
  '✅ Atende mil clientes ao mesmo tempo',
  '✅ Nunca falta, nunca adoece',
  '✅ R$197/mês — custo previsível',
  '✅ Qualifica leads automaticamente',
  '✅ Fecha vendas enquanto você dorme',
]

const manualItems = [
  '❌ Só funciona em horário comercial',
  '❌ Demora horas para responder',
  '❌ Uma pessoa por vez',
  '❌ Falta, adoece, pede demissão',
  '❌ R$1.500+ em salário + encargos',
  '❌ Esquece de qualificar leads',
  '❌ Perde vendas fora do horário',
]

export default function Comparison() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="py-24 bg-[#0D0D14] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="inline-block text-brand-blue text-xs font-bold tracking-[3px] uppercase border border-brand-blue/30 bg-brand-blue/5 px-4 py-1.5 rounded-full mb-4">
            A diferença é clara
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            NextCode <span className="gradient-text">vs</span> Manual
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          {/* NextCode */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-purple rounded-2xl p-8 border border-brand-purple/40 glow-purple"
          >
            <div className="text-xl font-black gradient-text mb-6">⚡ NextCode</div>
            <ul className="space-y-4">
              {nextcodeItems.map((item, i) => (
                <li key={i} className="text-sm text-white/80 flex items-center gap-2">{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* VS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="text-3xl font-black text-white/20 px-4">VS</div>
          </motion.div>

          {/* Manual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 border border-white/8 opacity-60"
          >
            <div className="text-xl font-black text-white/60 mb-6">👤 Atendimento Manual</div>
            <ul className="space-y-4">
              {manualItems.map((item, i) => (
                <li key={i} className="text-sm text-white/50 flex items-center gap-2">{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
