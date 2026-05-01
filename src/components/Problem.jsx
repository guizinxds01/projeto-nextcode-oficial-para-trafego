import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const questions = [
  "Você demora pra responder clientes?",
  "Já perdeu vendas por não ver mensagens?",
  "Fica preso respondendo sempre as mesmas perguntas?"
]

export default function Problem() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-24 bg-[#0A0A0A] relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6 mb-16"
          >
            {questions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-brand-card border border-white/5 hover:border-brand-purple/30 transition-colors duration-300"
              >
                <p className="text-xl md:text-2xl text-gray-300 font-light">
                  {question}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative p-1 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-purple"
          >
            <div className="bg-[#0A0A0A] rounded-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                "Enquanto você demora, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">outro vende.</span>"
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid md:grid-cols-2 gap-6 text-left"
          >
            {/* O Jeito Antigo */}
            <div className="bg-[#111111] p-8 rounded-2xl border border-red-500/20 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 opacity-[0.03] text-9xl">❌</div>
              <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-3">
                <span className="text-2xl drop-shadow-md">❌</span> Atendimento Manual
              </h3>
              <ul className="space-y-4 text-brand-textSec font-light">
                <li className="flex items-start gap-3">
                  <span className="text-red-500/70 mt-1 text-sm">●</span>
                  Perde vendas de madrugada
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500/70 mt-1 text-sm">●</span>
                  Cliente fica esperando
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500/70 mt-1 text-sm">●</span>
                  Trabalho chato e repetitivo
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500/70 mt-1 text-sm">●</span>
                  Erros ao enviar links
                </li>
              </ul>
            </div>

            {/* O Jeito NextCode */}
            <div className="bg-[#111111] p-8 rounded-2xl border border-green-500/30 relative overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.05)]">
              <div className="absolute -top-4 -right-4 opacity-[0.03] text-9xl">✅</div>
              <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-3">
                <span className="text-2xl drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">✅</span> Com a NextCode
              </h3>
              <ul className="space-y-4 text-white">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-0.5 font-bold">✓</span>
                  Vendas 24/7 (até de madrugada)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-0.5 font-bold">✓</span>
                  Respostas em 10 segundos
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-0.5 font-bold">✓</span>
                  Links perfeitos e humanizados
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-0.5 font-bold">✓</span>
                  Zero trabalho manual
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
