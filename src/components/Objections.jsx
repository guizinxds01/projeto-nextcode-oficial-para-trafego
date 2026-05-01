import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const objections = [
  {
    title: "Funciona para qualquer loja?",
    description: "Sim! A IA aprende sobre os seus produtos, seja roupa, eletrônicos, serviços ou qualquer outro nicho. Ela se adapta ao seu negócio."
  },
  {
    title: "Preciso entender de tecnologia?",
    description: "De forma alguma. Nós cuidamos de toda a instalação, configuração e treinamento da IA. Você só precisa ver as vendas acontecendo."
  },
  {
    title: "A instalação é demorada?",
    description: "Não. Após entendermos o seu negócio, conectamos e configuramos tudo rapidamente para que você comece a vender no automático o quanto antes."
  },
  {
    title: "O suporte está incluso?",
    description: "Sim, você terá suporte direto para qualquer dúvida ou necessidade de ajuste no comportamento da inteligência artificial."
  }
]

export default function Objections() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-24 bg-[#0A0A0A] relative" ref={ref}>
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ainda com dúvidas?
          </h2>
          <p className="text-lg text-brand-textSec max-w-2xl mx-auto font-light">
            Nós resolvemos tudo para que você foque apenas em crescer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {objections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#111111] border border-white/5 hover:border-brand-purple/30 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-brand-textSec leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
