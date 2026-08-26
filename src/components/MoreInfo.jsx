import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineCpuChip,
  HiOutlineBolt,
  HiOutlineSun,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentText,
  HiOutlineBuildingLibrary,
  HiOutlineUserGroup,
  HiOutlineScale,
} from 'react-icons/hi2'

const TECH_ITEMS = [
  { icon: HiOutlineCpuChip, label: 'Automação residencial' },
  { icon: HiOutlineBolt, label: 'Energia fotovoltaica' },
  { icon: HiOutlineSun, label: 'Aquecimento solar' },
  { icon: HiOutlineChartBar, label: 'Maior eficiência energética' },
  { icon: HiOutlineCurrencyDollar, label: 'Menor custo operacional' },
]

const SUPPORT_ITEMS = [
  { icon: HiOutlineDocumentText, label: 'Orientação inicial sobre documentação necessária' },
  { icon: HiOutlineCurrencyDollar, label: 'Apoio na organização do fluxo de pagamento' },
  { icon: HiOutlineBuildingLibrary, label: 'Auxílio no encaminhamento para análise de crédito junto a instituições financeiras ou parceiros bancários' },
  { icon: HiOutlineUserGroup, label: 'Acompanhamento das etapas até a estruturação final da compra' },
  { icon: HiOutlineScale, label: 'Facilidade para o comprador avaliar alternativas de crédito para aquisição do imóvel junto ao incorporador' },
]

const TABS = [
  { key: 'tech', label: 'Tecnologia' },
  { key: 'support', label: 'Suporte ao comprador' },
  { key: 'custom', label: 'Personalização' },
]

export default function MoreInfo() {
  const [tab, setTab] = useState('tech')

  return (
    <section className="bg-verde-950 py-14 md:py-20 text-champagne-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-5 py-2.5 text-xs tracking-wide uppercase border transition-colors ${
                tab === t.key
                  ? 'border-dourado-light bg-dourado-light text-verde-950'
                  : 'border-champagne-100/25 text-champagne-100/70 hover:border-dourado-light hover:text-dourado-light'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === 'tech' && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-5">
                <h2 className="font-display text-3xl md:text-4xl leading-tight">
                  Uma casa preparada para o futuro
                </h2>
                <p className="mt-5 text-champagne-100/65 leading-relaxed font-light">
                  Sistemas integrados que reduzem o custo de operação da casa e aumentam o conforto
                  do dia a dia, sem abrir mão da estética contemporânea.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid sm:grid-cols-2 gap-4">
                  {TECH_ITEMS.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.label}
                        className={`flex items-center gap-4 p-5 border border-champagne-100/15 ${
                          i === TECH_ITEMS.length - 1 ? 'sm:col-span-2' : ''
                        }`}
                      >
                        <Icon className="text-xl text-dourado-light shrink-0" />
                        <span className="font-display text-base">{item.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {tab === 'support' && (
            <motion.div
              key="support"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="font-display text-3xl md:text-4xl mb-4">
                  Segurança em cada etapa da compra
                </h2>
                <p className="text-champagne-100/65 font-light leading-relaxed">
                  O incorporador auxilia o comprador em todas as etapas de organização para
                  aquisição da casa, inclusive no direcionamento para crédito e financiamento
                  bancário, quando aplicável.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {SUPPORT_ITEMS.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className={`flex items-start gap-4 border border-champagne-100/15 p-5 ${
                        i === SUPPORT_ITEMS.length - 1 ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <Icon className="text-xl text-dourado-light shrink-0 mt-0.5" />
                      <span className="text-champagne-100/85 leading-relaxed text-sm">{item.label}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {tab === 'custom' && (
            <motion.div
              key="custom"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-display text-3xl md:text-4xl mb-6">Sua casa, seu estilo</h2>
              <p className="text-champagne-100/70 leading-relaxed font-light text-lg mb-4">
                A residência será entregue sem móveis, marcenaria planejada ou armários embutidos.
              </p>
              <p className="text-champagne-100/70 leading-relaxed font-light">
                Essa característica permite que o comprador personalize completamente os ambientes
                conforme seu gosto, estilo de vida e padrão de acabamento desejado.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
