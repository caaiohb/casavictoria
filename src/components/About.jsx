import { motion } from 'framer-motion'

const HIGHLIGHTS = [
  { label: 'Arquitetura contemporânea', desc: 'Linhas limpas e volumes que dialogam com o terreno.' },
  { label: 'Ambientes integrados', desc: 'Living, jantar e gourmet em fluxo contínuo.' },
  { label: 'Conexão com a natureza', desc: 'Aberturas amplas que emolduram o entorno verde.' },
  { label: 'Privacidade', desc: 'Um refúgio protegido dentro do Condomínio Entre Serras.' },
]

const stats = [
  { value: '250', unit: 'm²', label: 'Área construída' },
  { value: '300', unit: 'm²', label: 'Terreno' },
  { value: '4', unit: '', label: 'Suítes' },
  { value: '6', unit: '', label: 'Banheiros' },
]

export default function About() {
  return (
    <section id="sobre" className="bg-branco py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.25em] uppercase text-dourado mb-4">A residência</p>
            <h2 className="font-display text-4xl md:text-5xl text-verde-900 leading-tight mb-8">
              Pensada para famílias que valorizam o essencial
            </h2>
            <p className="text-tinta/70 leading-relaxed text-lg font-light">
              A Casa Victória foi concebida para famílias que valorizam conforto, privacidade e
              sofisticação. Um projeto moderno, integrado e pensado para proporcionar uma
              experiência única de viver.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 mt-12 pt-10 border-t border-verde-900/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl sm:text-3xl md:text-4xl text-verde-900 whitespace-nowrap">
                    {s.value}
                    <span className="text-base sm:text-lg text-dourado">{s.unit}</span>
                  </p>
                  <p className="text-xs text-tinta/50 mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-champagne-100/60 p-8 border border-verde-900/10"
              >
                <span className="font-display text-dourado text-2xl">0{i + 1}</span>
                <h3 className="font-display text-xl text-verde-900 mt-4 mb-2">{h.label}</h3>
                <p className="text-sm text-tinta/60 leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
