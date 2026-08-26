import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineX, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

const IMAGES = [
  { src: '/images/fachada-frente.jpg', label: 'Fachada principal', tag: 'Fachada', span: 'lg:col-span-2 lg:row-span-2' },
  { src: '/images/fachada-lado.jpg', label: 'Fachada em perspectiva', tag: 'Fachada' },
  { src: '/images/cozinha.jpg', label: 'Cozinha integrada', tag: 'Cozinha' },
  { src: '/images/piscina.jpg', label: 'Piscina e espaço gourmet', tag: 'Lazer' },
  { src: '/images/suite.jpg', label: 'Suíte', tag: 'Suítes' },
  { src: '/images/quarto-crianca.jpg', label: 'Quarto de bebê', tag: 'Suítes' },
]

const REFERENCE_SHEETS = [
  { src: '/images/fotos-projeto-1.jpg', label: 'Ambientes do projeto' },
  { src: '/images/fotos-projeto-2.jpg', label: 'Suítes e banheiros do projeto' },
]

export default function Gallery() {
  const [index, setIndex] = useState(null)

  const close = () => setIndex(null)
  const prev = () => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length)
  const next = () => setIndex((i) => (i + 1) % IMAGES.length)

  useEffect(() => {
    if (index === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index])

  return (
    <section id="galeria" className="bg-champagne-50 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14 flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-dourado mb-4">Galeria</p>
            <h2 className="font-display text-4xl md:text-5xl text-verde-900">Um passeio pela residência</h2>
          </div>
          <p className="text-sm text-tinta/50 max-w-xs">Clique em qualquer imagem para ampliar e navegar pela coleção completa.</p>
        </div>

        <p className="text-xs text-tinta/40 mb-8 italic">
          As imagens exibidas são referentes ao projeto desenvolvido para a Casa Victória. Móveis,
          eletrodomésticos e itens de decoração são meramente ilustrativos.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px] gap-3">
          {IMAGES.map((img, i) => (
            <motion.button
              key={img.src}
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className={`relative group overflow-hidden text-left ${img.span || ''}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="h-full w-full object-cover min-h-[220px] transition-transform duration-700 group-hover:scale-110"
              />
            </motion.button>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-verde-900/10">
          <p className="text-xs tracking-[0.25em] uppercase text-dourado mb-2">Material de referência</p>
          <p className="text-sm text-tinta/50 mb-5 max-w-2xl">
            Pranchas com múltiplos ambientes do projeto. Clique para ampliar.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {REFERENCE_SHEETS.map((sheet) => (
              <a
                key={sheet.src}
                href={sheet.src}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-verde-900/10 bg-branco p-2 overflow-hidden"
              >
                <img src={sheet.src} alt={sheet.label} className="w-full h-40 object-cover object-top hover:scale-105 transition-transform duration-500" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-verde-950/97 flex items-center justify-center p-4 md:p-10"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 text-champagne-50 text-3xl hover:text-dourado-light transition-colors"
              aria-label="Fechar"
            >
              <HiOutlineX />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-3 md:left-8 text-champagne-50 text-3xl hover:text-dourado-light transition-colors"
              aria-label="Imagem anterior"
            >
              <HiOutlineChevronLeft />
            </button>

            <motion.div
              key={IMAGES[index].src}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={IMAGES[index].src}
                alt={IMAGES[index].label}
                className="w-full max-h-[75vh] object-contain mx-auto"
              />
              <p className="text-center text-xs text-champagne-100/40 mt-4">
                {index + 1} / {IMAGES.length}
              </p>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-3 md:right-8 text-champagne-50 text-3xl hover:text-dourado-light transition-colors"
              aria-label="Próxima imagem"
            >
              <HiOutlineChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
