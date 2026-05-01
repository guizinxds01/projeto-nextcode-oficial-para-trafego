import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Offer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="offer" className="py-24 bg-[#111111] relative" ref={ref}>
      <div className="container mx-auto px-6">
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Tudo que você precisa para <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">escalar</span>
            </h2>
            <p className="text-lg text-brand-textSec max-w-2xl mx-auto font-light">
              Escolha o plano ideal e comece a vender no automático ainda hoje.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-1 rounded-3xl bg-gradient-to-br from-brand-blue to-brand-purple max-w-lg mx-auto shadow-[0_0_50px_rgba(139,92,246,0.3)]"
          >
            <div className="absolute top-0 right-6 -translate-y-1/2 flex items-center gap-2 bg-gradient-to-r from-brand-blue to-brand-purple px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-xl uppercase tracking-wider border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Restam apenas 3 vagas
            </div>
            
            <div className="bg-[#0A0A0A] rounded-[1.4rem] p-8 md:p-10 relative overflow-hidden">
              
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-purple/20 blur-[50px] rounded-full mix-blend-screen pointer-events-none" />

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Plano Instagram PRO</h3>
                <p className="text-brand-textSec text-sm">A máquina de vendas completa para o seu Direct</p>
              </div>

              <div className="text-center mb-8 flex flex-col items-center">
                <span className="text-gray-500 line-through text-lg mb-1">De R$ 397/mês</span>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-xl font-medium">R$</span>
                  <span className="text-7xl font-black tracking-tight drop-shadow-lg">197</span>
                  <span className="text-brand-textSec">/mês</span>
                </div>
                <span className="text-green-400 text-sm font-bold mt-3 bg-green-400/10 px-4 py-1.5 rounded-full border border-green-400/20">
                  Desconto de 50% aplicado
                </span>
              </div>

              <div className="space-y-4 mb-8 bg-white/5 p-6 rounded-2xl border border-white/5">
                {[
                  "Atendimento inteligente 24h",
                  "Vendas automáticas no Direct",
                  "Integração oficial com Instagram",
                  "Treinamento com dados da sua loja",
                  "Suporte técnico exclusivo"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                      <span className="text-green-400 text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-100 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.a 
                href="https://api.whatsapp.com/send?phone=5511930149643&text=Quero%20automatizar%20meu%20Direct" 
                target="_blank" 
                rel="noopener noreferrer"
                animate={{ 
                  boxShadow: ["0px 0px 20px rgba(139,92,246,0.4)", "0px 0px 60px rgba(139,92,246,0.8)", "0px 0px 20px rgba(139,92,246,0.4)"] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center justify-center gap-3 w-full py-5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold text-xl hover:scale-105 transition-transform duration-300"
              >
                Falar com um especialista
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>

              <div className="mt-5 text-center flex items-center justify-center gap-2 text-sm text-brand-textSec">
                <span className="text-lg">🛡️</span>
                <span>Risco Zero: <span className="font-bold text-gray-300">Garantia de 7 dias</span> ou seu dinheiro de volta.</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
