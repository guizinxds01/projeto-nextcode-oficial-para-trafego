import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const benefits = [
  {
    icon: "⏱️",
    title: "Atendimento 24h",
    description: "Sua loja aberta e vendendo mesmo enquanto você dorme."
  },
  {
    icon: "⚡",
    title: "Respostas Instantâneas",
    description: "Clientes não esperam. Responda em segundos e aumente a conversão."
  },
  {
    icon: "💰",
    title: "Mais Conversões",
    description: "Atendimento rápido no Direct é o maior gerador de vendas."
  },
  {
    icon: "🧘‍♂️",
    title: "Menos Trabalho Manual",
    description: "Chega de copiar e colar textos para as mesmas perguntas."
  },
  {
    icon: "📈",
    title: "Escalabilidade",
    description: "Atenda 10 ou 1000 pessoas ao mesmo tempo sem contratar equipe."
  }
]

export default function Benefits() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-24 bg-[#111111]" ref={ref}>
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Venda no piloto automático
          </h2>
          <p className="text-lg text-brand-textSec max-w-2xl mx-auto font-light">
            Os resultados que sua loja alcança quando implementa nossa inteligência artificial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#1A1A27] border border-white/5 hover:border-brand-purple/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-brand-textSec leading-relaxed font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
