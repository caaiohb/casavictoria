import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import { HiOutlineWrenchScrewdriver, HiOutlineCalendarDays } from 'react-icons/hi2'

const DONE = ['Estrutura concluída', 'Caixote finalizado', 'Duas lajes concretadas']
const DELIVERY_DATE = new Date('2026-11-01T00:00:00')

function useCountdown(target) {
  const [days, setDays] = useState(null)

  useEffect(() => {
    const update = () => {
      const diff = target.getTime() - Date.now()
      setDays(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))))
    }
    update()
    const id = setInterval(update, 1000 * 60 * 60)
    return () => clearInterval(id)
  }, [target])

  return days
}

export default function Timeline() {
  const days = useCountdown(DELIVERY_DATE)

  return (
    <section className="bg-champagne-50 py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-dourado mb-4">Status da obra</p>
          <h2 className="font-display text-4xl md:text-5xl text-verde-900">Acompanhe cada etapa</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-branco border border-verde-900/10 p-8"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-dourado mb-5">Concluído</p>
            <ul className="space-y-3">
              {DONE.map((d) => (
                <li key={d} className="flex items-center gap-3 text-sm text-tinta/75">
                  <HiCheckCircle className="text-dourado text-lg shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-branco border border-verde-900/10 p-8 flex flex-col justify-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-dourado mb-5">Em andamento</p>
            <div className="flex items-center gap-3 text-tinta/75">
              <HiOutlineWrenchScrewdriver className="text-xl text-verde-800 shrink-0" />
              <span className="text-sm">Continuidade da obra</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-verde-900 text-champagne-50 p-8 flex flex-col justify-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-dourado-light mb-5 flex items-center gap-2">
              <HiOutlineCalendarDays /> Entrega prevista
            </p>
            <p className="font-display text-2xl mb-1">Novembro de 2026</p>
            {days !== null && (
              <p className="text-xs text-champagne-100/50">
                faltam aproximadamente <span className="text-dourado-light">{days}</span> dias
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
