import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const cases = [
  {
    name: "Oliveira Drops",
    username: "@oliveira_drops",
    followers: 81.9,
    posts: 205,
    logoUrl: "/oliveira.jpg",
    segment: "Loja de Roupas",
    badge: "Loja consolidada no Instagram",
    resultsList: [
      "+300 atendimentos por semana",
      "Respostas automáticas no Direct",
      "Envio de fotos de produtos",
      "Recuperação de carrinho"
    ],
    problem: "Demora no atendimento",
    solution: "Automação com IA",
    result: "Mais vendas e mais agilidade",
    chart: {
      time: { before: "2h", after: "10s", afterWidth: "5%" },
      volume: { before: "50", after: "300+", beforeWidth: "15%" }
    }
  },
  {
    name: "Perify Style",
    username: "@perifystyle",
    followers: 62.6,
    posts: 86,
    logoUrl: "/perify.jpg",
    segment: "Loja de Roupas",
    badge: "Alta conversão no Direct",
    resultsList: [
      "Atendimento automatizado",
      "Respostas instantâneas",
      "Mais conversões"
    ],
    problem: "Perda de clientes no Direct",
    solution: "IA respondendo automaticamente",
    result: "Mais organização e aumento nas vendas",
    chart: {
      time: { before: "1.5h", after: "15s", afterWidth: "5%" },
      volume: { before: "40", after: "250+", beforeWidth: "20%" }
    }
  },
  {
    name: "Lasanharia da Maria",
    username: "@lasanhariadamaria",
    followers: 42.3,
    posts: 919,
    logoUrl: "/lasanharia.jpg",
    segment: "Restaurante",
    badge: "Referência em Delivery",
    resultsList: [
      "Atendimento rápido no WhatsApp",
      "Rastreamento automático",
      "Mais organização"
    ],
    problem: "Demora no atendimento",
    solution: "Automação via WhatsApp",
    result: "Melhor experiência do cliente e mais eficiência",
    chart: {
      time: { before: "30m", after: "1m", afterWidth: "8%" },
      volume: { before: "100", after: "400+", beforeWidth: "25%" }
    }
  }
]

export default function Cases() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden" ref={ref}>
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-sm font-semibold tracking-wide mb-6 shadow-[0_0_30px_rgba(139,92,246,0.2)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-purple"></span>
            </span>
            Resultados Comprovados
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Cases de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Sucesso</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-textSec max-w-2xl mx-auto font-light leading-relaxed">
            Empresas reais que automatizaram o atendimento e escalaram suas vendas com nossa Inteligência Artificial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group flex flex-col p-8 rounded-[2rem] bg-[#111111] border border-white/5 hover:border-brand-purple/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.15)] relative overflow-hidden"
            >
              
              {/* Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-brand-purple/20 to-transparent px-6 py-2 rounded-bl-3xl">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-purple">{item.badge}</span>
              </div>

              {/* Header Instagram Style */}
              <div className="flex items-center gap-4 mb-8 mt-2">
                <div className="w-16 h-16 rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-yellow-500 via-brand-purple to-brand-blue flex-shrink-0">
                  <div className="w-full h-full bg-[#111111] rounded-full p-[2px]">
                    <img src={item.logoUrl} alt={item.name} className="w-full h-full rounded-full object-cover" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-lg font-bold text-white leading-tight">{item.name}</h3>
                    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="text-brand-textSec text-sm">{item.username}</span>
                </div>
              </div>

              {/* Instagram Stats */}
              <div className="flex justify-between items-center mb-8 px-4 py-4 bg-[#1A1A27]/50 rounded-2xl border border-white/5">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {inView ? <CountUp end={item.followers} decimals={1} duration={2.5} suffix="k" /> : "0.0k"}
                  </div>
                  <div className="text-[10px] text-brand-textSec uppercase tracking-wider font-semibold">Seguidores</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{item.posts}</div>
                  <div className="text-[10px] text-brand-textSec uppercase tracking-wider font-semibold">Posts</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">24/7</div>
                  <div className="text-[10px] text-brand-textSec uppercase tracking-wider font-semibold">Autom.</div>
                </div>
              </div>

              {/* Improvements List */}
              <div className="mb-6 space-y-3">
                {item.resultsList.map((res, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm font-light leading-snug">{res}</span>
                  </div>
                ))}
              </div>

              {/* PSR Block */}
              <div className="space-y-4 mb-8 bg-[#0A0A0A] rounded-xl p-5 border border-white/5 flex-1">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Problema</span>
                  <span className="text-gray-400 text-sm">{item.problem}</span>
                </div>
                <div className="w-full h-px bg-white/5" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">Solução</span>
                  <span className="text-gray-400 text-sm">{item.solution}</span>
                </div>
                <div className="w-full h-px bg-white/5" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">Resultado</span>
                  <span className="text-white text-sm font-medium">{item.result}</span>
                </div>
              </div>

              {/* Visual Chart */}
              <div className="mt-auto bg-[#1A1A27] rounded-xl p-5 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 blur-[30px] rounded-full pointer-events-none" />
                
                <span className="text-xs font-semibold text-white mb-5 block relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Impacto da Automação
                </span>
                
                {/* Tempo de Resposta */}
                <div className="mb-5 relative z-10">
                  <div className="flex justify-between text-[10px] uppercase font-bold text-gray-500 mb-2">
                    <span>Tempo Resposta (Antes: {item.chart.time.before})</span>
                    <span className="text-brand-blue">Agora: {item.chart.time.after}</span>
                  </div>
                  <div className="h-1.5 bg-black/50 rounded-full overflow-hidden flex">
                    <motion.div 
                      initial={{ width: "100%" }} 
                      animate={inView ? { width: item.chart.time.afterWidth } : {}} 
                      transition={{ duration: 1.5, delay: 0.5 + (index * 0.2) }} 
                      className="h-full bg-gradient-to-r from-brand-blue to-brand-purple rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                    />
                  </div>
                </div>

                {/* Volume de Atendimento */}
                <div className="relative z-10">
                  <div className="flex justify-between text-[10px] uppercase font-bold text-gray-500 mb-2">
                    <span>Volume Diário (Antes: {item.chart.volume.before})</span>
                    <span className="text-green-400">Agora: {item.chart.volume.after}</span>
                  </div>
                  <div className="h-1.5 bg-black/50 rounded-full overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full bg-white/10 rounded-full" style={{ width: item.chart.volume.beforeWidth }} />
                    <motion.div 
                      initial={{ width: item.chart.volume.beforeWidth }} 
                      animate={inView ? { width: "100%" } : {}} 
                      transition={{ duration: 1.5, delay: 0.8 + (index * 0.2) }} 
                      className="h-full bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.3)] relative z-10" 
                    />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
