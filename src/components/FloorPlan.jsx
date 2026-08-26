import { motion } from 'framer-motion'

const ROOMS = [
  { n: '01', label: 'Living integrado' },
  { n: '02', label: 'Sala de jantar' },
  { n: '03', label: 'Cozinha aberta' },
  { n: '04', label: 'Espaço gourmet' },
  { n: '05', label: 'Piscina' },
  { n: '06', label: 'Suíte térrea' },
  { n: '07', label: 'Suítes superiores' },
]

// A simple architectural line-drawing of the house footprint, drawn on scroll.
function BlueprintLine() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto" fill="none">
      <motion.path
        d="M20 240 V90 L120 20 L220 90 V240 M20 240 H220 M120 20 V240 M20 150 H220 M260 240 V150 L340 100 L380 150 V240 M260 240 H380 M320 100 V240"
        stroke="currentColor"
        strokeWidth="1.25"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export default function FloorPlan() {
  return (
    <section id="planta" className="bg-verde-900 py-14 md:py-20 text-champagne-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-dourado-light mb-4">Planta e distribuição</p>
          <h2 className="font-display text-4xl md:text-5xl">Pense em cada detalhe</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5 text-dourado-light/70">
            <BlueprintLine />
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {ROOMS.map((r, i) => (
              <motion.div
                key={r.n}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-baseline gap-4 border-b border-champagne-100/10 pb-4"
              >
                <span className="font-display text-dourado-light text-xl">{r.n}</span>
                <span className="text-champagne-50/90 tracking-wide">{r.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <figure className="relative overflow-hidden">
            <img src="/images/pavimento-terreo.jpg" alt="Planta baixa do pavimento térreo" className="w-full object-cover" />
            <figcaption className="absolute bottom-0 left-0 bg-verde-950/80 px-4 py-2 text-xs tracking-wide">
              Pavimento térreo
            </figcaption>
          </figure>
          <figure className="relative overflow-hidden">
            <img src="/images/pavimento-superior.jpg" alt="Planta baixa do pavimento superior" className="w-full object-cover" />
            <figcaption className="absolute bottom-0 left-0 bg-verde-950/80 px-4 py-2 text-xs tracking-wide">
              Pavimento superior
            </figcaption>
          </figure>
        </div>
        <p className="text-xs text-champagne-100/40 mb-10 italic text-center">
          As imagens exibidas são referentes ao projeto desenvolvido para a Casa Victória. Móveis,
          eletrodomésticos e itens de decoração são meramente ilustrativos.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="border border-dourado-light/30 bg-verde-950/50 p-8 md:p-10 text-center max-w-3xl mx-auto"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-dourado-light mb-3">Suíte térrea</p>
          <p className="font-display text-xl md:text-2xl text-champagne-50/90 leading-snug">
            Uma solução inteligente para acessibilidade, hóspedes ou familiares que desejam maior
            comodidade.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
