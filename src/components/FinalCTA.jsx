import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function FinalCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-32 bg-[#111111] relative overflow-hidden" ref={ref}>
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Pare de perder vendas por <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">não responder rápido.</span>
            </h2>
            
            <p className="text-xl text-brand-textSec mb-12 font-light">
              Transforme seu Instagram na sua melhor máquina de vendas automáticas.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <motion.a 
                href="https://api.whatsapp.com/send?phone=5511930149643&text=Quero%20automatizar%20meu%20Direct" 
                target="_blank" 
                rel="noopener noreferrer"
                animate={{ 
                  boxShadow: ["0px 0px 20px rgba(139,92,246,0.4)", "0px 0px 60px rgba(139,92,246,0.8)", "0px 0px 20px rgba(139,92,246,0.4)"] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="px-10 py-5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold text-xl inline-flex items-center gap-3 hover:scale-105 transition-all duration-300"
              >
                Falar com um especialista agora
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
