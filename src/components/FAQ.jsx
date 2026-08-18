import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiPlus, HiMinus } from 'react-icons/hi'

const FAQS = [
  {
    q: 'Posso financiar a Casa Victória?',
    a: 'Sim. Há possibilidade de financiamento bancário conforme aprovação de crédito, além de condições facilitadas diretamente com o incorporador durante a obra — entrada de R$ 1.000.000, saldo de R$ 1.500.000 com fluxo flexível.',
  },
  {
    q: 'Posso visitar o imóvel antes de decidir?',
    a: 'Sim, agende uma visita ao canteiro de obras pelo WhatsApp para conhecer a residência e o Condomínio Entre Serras pessoalmente.',
  },
  {
    q: 'A casa vem com móveis ou armários planejados?',
    a: 'Não. A residência será entregue sem móveis, marcenaria planejada ou armários embutidos, para que você personalize completamente os ambientes conforme seu gosto e padrão de acabamento.',
  },
  {
    q: 'Qual a data prevista de entrega?',
    a: 'A entrega está prevista para novembro de 2026. A estrutura, o caixote e as duas lajes já estão concluídos — acompanhe a evolução na seção de Atualização da Obra.',
  },
  {
    q: 'O incorporador ajuda com a documentação e o crédito?',
    a: 'Sim. O incorporador auxilia em toda a organização da compra: orientação sobre documentação, apoio no fluxo de pagamento e encaminhamento para análise de crédito junto a instituições financeiras ou parceiros bancários.',
  },
  {
    q: 'O valor do imóvel pode aumentar?',
    a: 'A compra durante a obra é uma oportunidade de aquisição antecipada: o valor atual é R$ 2.500.000, com projeção de R$ 2.700.000 a R$ 2.800.000 na entrega.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="bg-champagne-50 py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-dourado mb-4">Perguntas frequentes</p>
          <h2 className="font-display text-4xl md:text-5xl text-verde-900">Tire suas dúvidas</h2>
        </div>

        <div className="border-t border-verde-900/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="border-b border-verde-900/10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg md:text-xl text-verde-900">{item.q}</span>
                  <span className="shrink-0 text-dourado text-xl">
                    {isOpen ? <HiMinus /> : <HiPlus />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-tinta/65 leading-relaxed pb-6 pr-10 font-light">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
