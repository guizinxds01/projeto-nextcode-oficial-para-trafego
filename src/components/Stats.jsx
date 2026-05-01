import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const stats = [
  { value: 30, suffix: '%', label: 'Aumento médio em conversões', prefix: '+' },
  { value: 100, suffix: '%', label: 'Clientes respondidos', prefix: '' },
  { value: 1, suffix: 'min', label: 'Tempo médio de resposta', prefix: '' },
  { value: 2000, suffix: '', label: 'Mensagens automatizadas/dia', prefix: '+' },
]

export default function Stats() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section ref={ref} className="py-20 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/5 via-transparent to-brand-blue/5 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass rounded-2xl p-6 text-center card-hover border border-white/5"
            >
              <div className="text-4xl lg:text-5xl font-black gradient-text mb-2">
                {inView ? (
                  <CountUp
                    start={0}
                    end={s.value}
                    duration={2.2}
                    delay={i * 0.12}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    separator="."
                  />
                ) : (
                  `${s.prefix}0${s.suffix}`
                )}
              </div>
              <p className="text-white/50 text-sm leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
