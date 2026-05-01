import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    number: "01",
    title: "Conectamos ao seu Instagram",
    description: "Integração segura e rápida, diretamente com o seu perfil comercial."
  },
  {
    number: "02",
    title: "Treinamos com suas respostas",
    description: "A IA aprende sobre seus produtos, preços e forma de falar com os clientes."
  },
  {
    number: "03",
    title: "Ele responde automaticamente",
    description: "Sua loja começa a atender clientes 24 horas por dia, 7 dias por semana."
  }
]

export default function HowItWorks() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-24 bg-[#111111] relative" ref={ref}>
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Como funciona a automação?
          </h2>
          <p className="text-lg text-brand-textSec max-w-2xl mx-auto font-light">
            Três passos simples para transformar seu Instagram em uma máquina de vendas autônoma.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center group cursor-default"
              >
                <div className="w-24 h-24 mx-auto bg-[#1A1A27] rounded-full border border-white/10 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] group-hover:border-brand-purple/50 group-hover:bg-[#1A1A27]/80">
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-brand-blue to-brand-purple">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-brand-textSec leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 max-w-2xl mx-auto text-center p-6 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 backdrop-blur-sm"
        >
          <p className="text-white font-medium">
            💡 <span className="font-bold">Você não precisa entender de tecnologia.</span> Nós configuramos tudo para você.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
