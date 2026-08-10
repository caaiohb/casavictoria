import { motion } from 'framer-motion'
import { HiOutlineDocumentText, HiOutlineCurrencyDollar, HiOutlineBuildingLibrary, HiOutlineUserGroup, HiOutlineScale } from 'react-icons/hi2'

const ITEMS = [
  {
    icon: HiOutlineDocumentText,
    label: 'Orientação inicial sobre documentação necessária',
  },
  {
    icon: HiOutlineCurrencyDollar,
    label: 'Apoio na organização do fluxo de pagamento',
  },
  {
    icon: HiOutlineBuildingLibrary,
    label: 'Auxílio no encaminhamento para análise de crédito junto a instituições financeiras ou parceiros bancários',
  },
  {
    icon: HiOutlineUserGroup,
    label: 'Acompanhamento das etapas até a estruturação final da compra',
  },
  {
    icon: HiOutlineScale,
    label: 'Facilidade para o comprador avaliar alternativas de crédito para aquisição do imóvel junto ao incorporador',
  },
]

export default function BuyerSupport() {
  return (
    <section className="bg-champagne-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-dourado mb-4">Suporte ao comprador</p>
          <h2 className="font-display text-4xl md:text-5xl text-verde-900 mb-6">
            Segurança em cada etapa da compra
          </h2>
          <p className="text-tinta/65 font-light leading-relaxed">
            O incorporador auxilia o comprador em todas as etapas de organização para aquisição da
            casa, inclusive no direcionamento para crédito e financiamento bancário, quando
            aplicável.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={`flex items-start gap-4 bg-branco border border-verde-900/10 p-6 ${
                  i === ITEMS.length - 1 ? 'sm:col-span-2' : ''
                }`}
              >
                <Icon className="text-2xl text-dourado shrink-0 mt-0.5" />
                <span className="text-tinta/80 leading-relaxed text-sm">{item.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
