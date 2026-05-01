import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Demonstration() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-24 bg-[#0A0A0A]" ref={ref}>
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Veja como funciona na prática
          </h2>
          <p className="text-lg text-brand-textSec max-w-2xl mx-auto font-light">
            Acompanhe uma simulação real de como a Inteligência Artificial interage com seus clientes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto relative"
        >
          {/* Simulated phone frame */}
          <div className="relative rounded-[2.5rem] border-[8px] border-[#1A1A27] bg-[#0A0A0A] overflow-hidden shadow-2xl shadow-brand-purple/20">
            {/* Header */}
            <div className="bg-[#111111] border-b border-white/5 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white font-bold text-sm">
                  IA
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Assistente da Loja</h4>
                  <span className="text-brand-textSec text-xs">Online agora</span>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="p-6 space-y-6 bg-[url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] bg-cover bg-center bg-blend-overlay bg-black/80 h-[400px] overflow-y-auto">
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-3 justify-end"
              >
                <div className="bg-[#1A1A27] border border-white/10 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-gray-300 max-w-[80%]">
                  Oi! Vocês têm a camiseta preta tamanho M disponível?
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="flex gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex-shrink-0 flex items-center justify-center font-bold text-[10px] text-white">IA</div>
                <div className="bg-gradient-to-r from-brand-blue/90 to-brand-purple/90 backdrop-blur-md rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-white max-w-[80%] shadow-lg">
                  Olá! 👋 Temos sim, a camiseta preta M está disponível em estoque. Ela custa R$89,90. Gostaria que eu enviasse o link para pagamento?
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 2.5 }}
                className="flex gap-3 justify-end"
              >
                <div className="bg-[#1A1A27] border border-white/10 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-gray-300 max-w-[80%]">
                  Sim, por favor! Qual o prazo de entrega para SP?
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 3.5 }}
                className="flex gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex-shrink-0 flex items-center justify-center font-bold text-[10px] text-white">IA</div>
                <div className="bg-gradient-to-r from-brand-blue/90 to-brand-purple/90 backdrop-blur-md rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-white max-w-[80%] shadow-lg">
                  Para São Paulo (Capital), o envio é expresso e chega em até 2 dias úteis! 🚀<br/><br/>Aqui está o seu link seguro para finalizar a compra: [Link]<br/><br/>Qualquer dúvida, estou por aqui!
                </div>
              </motion.div>

            </div>

            {/* Input Area */}
            <div className="bg-[#111111] p-4 border-t border-white/5 flex gap-3">
              <div className="flex-1 bg-[#1A1A27] rounded-full border border-white/10 px-4 py-2 text-sm text-gray-500">
                Mensagem...
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center text-white">
                ↑
              </div>
            </div>
          </div>
          
          {/* Glow effects */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-purple/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        </motion.div>

      </div>
    </section>
  )
}
