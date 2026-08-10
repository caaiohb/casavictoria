import { motion } from 'framer-motion'
import { HiOutlineCpuChip, HiOutlineBolt, HiOutlineSun, HiOutlineChartBar, HiOutlineCurrencyDollar } from 'react-icons/hi2'

const ITEMS = [
  { icon: HiOutlineCpuChip, label: 'Automação residencial' },
  { icon: HiOutlineBolt, label: 'Energia fotovoltaica' },
  { icon: HiOutlineSun, label: 'Aquecimento solar' },
  { icon: HiOutlineChartBar, label: 'Maior eficiência energética' },
  { icon: HiOutlineCurrencyDollar, label: 'Menor custo operacional' },
]

export default function Technology() {
  return (
    <section className="bg-branco py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.25em] uppercase text-dourado mb-4">Tecnologia e eficiência</p>
            <h2 className="font-display text-4xl md:text-5xl text-verde-900 leading-tight">
              Uma casa preparada para o futuro
            </h2>
            <p className="mt-6 text-tinta/60 leading-relaxed font-light">
              Sistemas integrados que reduzem o custo de operação da casa e aumentam o conforto do
              dia a dia, sem abrir mão da estética contemporânea.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {ITEMS.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, delay: i * 0.1 }}
                    className={`flex items-center gap-4 p-6 border border-verde-900/10 bg-champagne-100/50 ${
                      i === ITEMS.length - 1 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <Icon className="text-2xl text-dourado shrink-0" />
                    <span className="font-display text-lg text-verde-900">{item.label}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
