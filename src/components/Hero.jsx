import { motion } from 'framer-motion'

const FloatingLogos = () => {
  const logos = [
    { type: 'instagram', size: 'w-24 h-24', top: '10%', left: '5%', delay: 0, duration: 6, blur: 'blur-[4px]' },
    { type: 'whatsapp', size: 'w-24 h-24', top: '35%', right: '10%', delay: 1, duration: 8, blur: 'blur-md' },
    { type: 'instagram', size: 'w-16 h-16', bottom: '20%', left: '15%', delay: 2, duration: 5, blur: 'blur-[2px]' },
    { type: 'whatsapp', size: 'w-20 h-20', top: '15%', right: '25%', delay: 0.5, duration: 7, blur: 'blur-[3px]' },
    { type: 'instagram', size: 'w-28 h-28', bottom: '10%', right: '5%', delay: 1.5, duration: 9, blur: 'blur-sm' },
    { type: 'whatsapp', size: 'w-16 h-16', top: '60%', left: '8%', delay: 0.8, duration: 6.5, blur: 'blur-[5px]' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {logos.map((logo, i) => (
        <motion.img
          key={i}
          src={logo.type === 'instagram' ? "/instagram-3d.png" : "/logo-whatsapp.png"}
          alt={logo.type}
          className={`absolute ${logo.size} ${logo.blur} opacity-60 drop-shadow-2xl`}
          style={{ top: logo.top, left: logo.left, right: logo.right, bottom: logo.bottom }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: logo.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: logo.delay,
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      <FloatingLogos />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 backdrop-blur-sm"
          >
            <span className="text-brand-purple text-sm font-medium tracking-wide">
              ✨ Oferta exclusiva para Instagram
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Automatize seu Whatsapp ou seu Direct e venda <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">todos os dias no automático</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-textSec mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Responda seus clientes no Instagram 24h por dia e nunca mais perca vendas por demora no atendimento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-14"
          >
            <motion.a
              href="https://api.whatsapp.com/send?phone=5511930149643&text=Quero%20automatizar%20meu%20Direct"
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                boxShadow: ["0px 0px 20px rgba(139,92,246,0.4)", "0px 0px 60px rgba(139,92,246,0.8)", "0px 0px 20px rgba(139,92,246,0.4)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-full sm:w-auto px-10 py-5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold text-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3"
            >
              Falar com um especialista
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mx-auto max-w-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10 h-full w-full bottom-0" />
            <div className="relative rounded-t-3xl border border-white/10 bg-brand-card2/50 backdrop-blur-xl p-4 overflow-hidden mx-4 md:mx-auto shadow-2xl">
              <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-brand-textSec font-medium">Instagram Direct</span>
              </div>

              <div className="space-y-4 px-2 pb-10">
                <div className="flex gap-3 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex-shrink-0" />
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-gray-300">
                    Olá! Qual o valor do plano mensal?
                  </div>
                </div>

                <div className="flex gap-3 max-w-[80%] ml-auto justify-end">
                  <div className="bg-gradient-to-r from-brand-blue to-brand-purple rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-white shadow-lg shadow-brand-purple/20">
                    Olá! 👋 O plano mensal de automação sai de R$397 por apenas R$197/mês na nossa oferta exclusiva para Instagram. Gostaria de assinar agora?
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex-shrink-0 border border-white/20 flex items-center justify-center font-bold text-xs">IA</div>
                </div>

                <div className="flex gap-3 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex-shrink-0" />
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-gray-300">
                    Sim, eu quero! Como faço?
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
