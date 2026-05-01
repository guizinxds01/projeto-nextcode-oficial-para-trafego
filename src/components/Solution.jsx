import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  { icon: '🤖', title: 'Respostas automáticas inteligentes', desc: 'A IA entende o contexto e responde como um humano treinado para vender — 24h por dia.' },
  { icon: '🌙', title: 'Atendimento 24h, 7 dias', desc: 'Seus clientes recebem resposta às 3h da manhã, no domingo, no feriado. Sempre.' },
  { icon: '📈', title: 'Escala sem contratar equipe', desc: 'Atenda 10 ou 10.000 clientes simultaneamente sem aumentar sua folha de pagamento.' },
  { icon: '💰', title: 'Custo previsível e baixo', desc: 'Por R$197/mês você tem um vendedor que nunca falta, nunca fica doente e nunca pede aumento.' },
]

export default function Solution() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block text-brand-green text-xs font-bold tracking-[3px] uppercase border border-brand-green/30 bg-brand-green/5 px-4 py-1.5 rounded-full mb-4">
            A Solução
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Conheça a <span className="gradient-text">NextCode</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            A NextCode cria <strong className="text-white/80">agentes de inteligência artificial</strong> que respondem seus clientes automaticamente, aumentam suas conversões e fazem você{' '}
            <strong className="text-white/80">vender todos os dias sem esforço.</strong>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mt-14">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-purple rounded-2xl p-7 card-hover group border border-brand-purple/20"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
