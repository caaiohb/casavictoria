import { motion } from 'framer-motion'

export default function Personalization() {
  return (
    <section className="bg-verde-900 py-24 md:py-32 text-champagne-50">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.25em] uppercase text-dourado-light mb-4">Personalização</p>
          <h2 className="font-display text-4xl md:text-5xl mb-8">Sua casa, seu estilo</h2>
          <p className="text-champagne-100/70 leading-relaxed font-light text-lg mb-6">
            A residência será entregue sem móveis, marcenaria planejada ou armários embutidos.
          </p>
          <p className="text-champagne-100/70 leading-relaxed font-light">
            Essa característica permite que o comprador personalize completamente os ambientes
            conforme seu gosto, estilo de vida e padrão de acabamento desejado.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
