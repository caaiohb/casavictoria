import { motion } from 'framer-motion'
import { HiOutlineMapPin } from 'react-icons/hi2'

const DISTANCES = [
  { place: 'Rodoanel Mário Covas', time: '4 min' },
  { place: 'Aeroporto Internacional de Guarulhos', time: '40 min' },
  { place: 'São José dos Campos', time: '37 min' },
  { place: 'São Paulo — Capital', time: '1h' },
  { place: 'Riviera de São Lourenço — Litoral Norte', time: '1h30' },
  { place: 'Campos do Jordão', time: '1h35' },
]

export default function Location() {
  return (
    <section id="localizacao" className="bg-branco py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-14 items-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <p className="text-xs tracking-[0.25em] uppercase text-dourado mb-4">Localização</p>
            <h2 className="font-display text-4xl md:text-5xl text-verde-900 leading-tight mb-6">
              Santa Isabel, um cenário privilegiado
            </h2>
            <p className="text-tinta/70 leading-relaxed font-light text-lg">
              Um cenário privilegiado cercado por natureza, tranquilidade e qualidade de vida —
              dentro do Condomínio Entre Serras.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 aspect-video w-full overflow-hidden border border-verde-900/10"
          >
            <iframe
              title="Localização da Casa Victória — Condomínio Entre Serras, Santa Isabel/SP"
              src="https://www.google.com/maps?q=Condom%C3%ADnio+Entre+Serras,+Santa+Isabel,+SP&output=embed"
              className="h-full w-full grayscale-[15%]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DISTANCES.map((d, i) => (
            <motion.div
              key={d.place}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-center gap-4 border border-verde-900/10 bg-champagne-100/40 p-5"
            >
              <HiOutlineMapPin className="text-2xl text-dourado shrink-0" />
              <div>
                <p className="font-display text-lg text-verde-900">{d.time}</p>
                <p className="text-xs text-tinta/55">{d.place}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
