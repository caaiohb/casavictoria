import { motion } from 'framer-motion'
import { HiOutlineCheck } from 'react-icons/hi'
import { whatsappLink } from '../lib/whatsapp'

const CONDITIONS = [
  'Fluxo flexível durante a obra',
  'Possibilidade de pagamento final na entrega',
  'Possibilidade de financiamento bancário conforme aprovação',
]

export default function Payment() {
  return (
    <section id="investimento" className="relative bg-verde-950 py-24 md:py-32 text-champagne-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-dourado-light mb-4">Investimento</p>
          <h2 className="font-display text-4xl md:text-5xl">Uma oportunidade de aquisição antecipada</h2>
          <p className="mt-6 text-champagne-100/60 font-light leading-relaxed">
            Antes da valorização projetada para a entrega.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="border border-champagne-100/15 p-10 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-champagne-100/50 mb-3">Valor atual</p>
              <p className="font-display text-3xl sm:text-4xl md:text-5xl text-champagne-50 mb-8 whitespace-nowrap">R$ 2.500.000</p>

              <p className="text-xs tracking-[0.2em] uppercase text-champagne-100/50 mb-3">Valor projetado na entrega</p>
              <p className="font-display text-xl sm:text-2xl md:text-3xl text-dourado-light">R$ 2.700.000 – R$ 2.800.000</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-champagne-100 text-verde-950 p-10 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-verde-900/50 mb-3">Condições de pagamento</p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div>
                  <p className="font-display text-xl sm:text-2xl md:text-3xl whitespace-nowrap">R$ 1.000.000</p>
                  <p className="text-xs text-verde-900/50 mt-1">Entrada</p>
                </div>
                <div>
                  <p className="font-display text-xl sm:text-2xl md:text-3xl whitespace-nowrap">R$ 1.500.000</p>
                  <p className="text-xs text-verde-900/50 mt-1">Saldo</p>
                </div>
              </div>
              <ul className="space-y-3">
                {CONDITIONS.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm">
                    <HiOutlineCheck className="text-dourado mt-0.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={whatsappLink('Olá, gostaria de saber mais sobre as condições de pagamento da Casa Victória.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-center bg-verde-950 text-champagne-50 py-4 text-sm tracking-wide hover:bg-verde-900 transition-colors"
            >
              Falar sobre condições
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
