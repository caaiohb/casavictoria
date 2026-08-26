import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineX, HiOutlineChevronLeft, HiOutlineChevronRight, HiCheckCircle } from 'react-icons/hi'
import { HiOutlineWrenchScrewdriver, HiOutlineCalendarDays } from 'react-icons/hi2'

const NEW_PHOTOS = Array.from({ length: 22 }, (_, i) =>
  `/images/obra/obra-21-08-${String(i + 1).padStart(2, '0')}.jpg`
)
const OLDER_PHOTOS = [
  '/images/obra/obra-01.jpg',
  '/images/obra/obra-02.jpg',
  '/images/obra/obra-03.jpg',
  '/images/obra/obra-04.jpg',
  '/images/obra/obra-05.jpg',
  '/images/obra/obra-06.jpg',
  '/images/obra/obra-07.jpg',
]
const PHOTOS = [...NEW_PHOTOS, ...OLDER_PHOTOS]

const VIDEOS = [
  {
    src: 'https://www.youtube.com/embed/2jxGNj2V_Qg',
    label: 'Imagens aéreas da construção — 27 de julho de 2026',
  },
  {
    src: 'https://www.youtube.com/embed/jQoenxDotJM',
    label: '10 de agosto de 2026',
  },
]

const DONE = ['Estrutura concluída', 'Caixote finalizado', 'Duas lajes concretadas']
const DELIVERY_DATE = new Date('2026-12-01T00:00:00')
const PROGRESS_PCT = 62

function useCountdown(target) {
  const [days, setDays] = useState(null)

  useEffect(() => {
    const update = () => {
      const diff = target.getTime() - Date.now()
      setDays(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))))
    }
    update()
    const id = setInterval(update, 1000 * 60 * 60)
    return () => clearInterval(id)
  }, [target])

  return days
}

export default function Video() {
  const [index, setIndex] = useState(null)
  const days = useCountdown(DELIVERY_DATE)

  const close = () => setIndex(null)
  const prev = () => setIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length)
  const next = () => setIndex((i) => (i + 1) % PHOTOS.length)

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
    <section className="bg-verde-950 py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-dourado-light mb-4">Atualização da obra</p>
          <h2 className="font-display text-4xl md:text-5xl text-champagne-50">
            Acompanhe a evolução da Casa Victória
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-3 mb-3">
          <div className="border border-champagne-100/15 p-4">
            <p className="text-[10px] tracking-[0.15em] uppercase text-dourado-light mb-2">Concluído</p>
            <ul className="space-y-1.5">
              {DONE.map((d) => (
                <li key={d} className="flex items-center gap-2 text-xs text-champagne-100/75">
                  <HiCheckCircle className="text-dourado-light text-sm shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-champagne-100/15 p-4 flex items-center gap-2">
            <HiOutlineWrenchScrewdriver className="text-lg text-champagne-100/60 shrink-0" />
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-dourado-light mb-1">Em andamento</p>
              <span className="text-xs text-champagne-100/75">Continuidade da obra</span>
            </div>
          </div>
          <div className="bg-champagne-100/10 p-4">
            <p className="text-[10px] tracking-[0.15em] uppercase text-dourado-light mb-1 flex items-center gap-1.5">
              <HiOutlineCalendarDays /> Entrega prevista
            </p>
            <p className="font-display text-lg">Dezembro de 2026</p>
            {days !== null && (
              <p className="text-[10px] text-champagne-100/50">
                faltam aproximadamente <span className="text-dourado-light">{days}</span> dias
              </p>
            )}
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] tracking-[0.15em] uppercase text-dourado-light">Progresso da obra</span>
            <span className="text-xs font-display text-champagne-50">{PROGRESS_PCT}% concluída</span>
          </div>
          <div className="h-1.5 w-full bg-champagne-100/10 overflow-hidden">
            <div
              className="h-full bg-dourado-light"
              style={{ width: `${PROGRESS_PCT}%` }}
            />
          </div>
        </div>

        <p className="text-center text-xs text-champagne-100/40 mb-4 tracking-wide">
          Fotos do canteiro de obras — 21 de agosto de 2026
        </p>
        <div className="flex gap-2.5 overflow-x-auto pb-3 mb-10 snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 [scrollbar-width:thin]">
          {NEW_PHOTOS.map((src, i) => (
            <button
              key={src}
              onClick={() => setIndex(i)}
              className="shrink-0 w-32 h-32 sm:w-40 sm:h-40 overflow-hidden snap-start group"
            >
              <img
                src={src}
                alt={`Obra da Casa Victória — 21 de agosto de 2026, foto ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </button>
          ))}
        </div>

        <details className="mb-10 group">
          <summary className="cursor-pointer text-center text-xs text-champagne-100/40 tracking-wide mb-4 list-none flex items-center justify-center gap-2">
            <span>Ver fotos anteriores — 10 de agosto de 2026</span>
            <span className="transition-transform group-open:rotate-180">▾</span>
          </summary>
          <div className="flex gap-2.5 overflow-x-auto pb-3 snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0">
            {OLDER_PHOTOS.map((src, i) => (
              <button
                key={src}
                onClick={() => setIndex(NEW_PHOTOS.length + i)}
                className="shrink-0 w-32 h-32 sm:w-40 sm:h-40 overflow-hidden snap-start group"
              >
                <img
                  src={src}
                  alt={`Obra da Casa Victória — 10 de agosto de 2026, foto ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </button>
            ))}
          </div>
        </details>

        <div className="grid grid-cols-2 gap-5 max-w-xs sm:max-w-md mx-auto">
          {VIDEOS.map((video, i) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="w-full"
            >
              <div className="aspect-[9/16] overflow-hidden border border-champagne-100/15 shadow-2xl shadow-black/30">
                <iframe
                  className="h-full w-full"
                  src={video.src}
                  title={`Casa Victória — ${video.label}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="text-center text-[10px] text-champagne-100/50 mt-3 tracking-wide">{video.label}</p>
            </motion.div>
          ))}
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
              aria-label="Foto anterior"
            >
              <HiOutlineChevronLeft />
            </button>
            <motion.img
              key={PHOTOS[index]}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              src={PHOTOS[index]}
              alt="Obra da Casa Victória"
              className="max-w-4xl w-full max-h-[80vh] object-contain mx-auto"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-3 md:right-8 text-champagne-50 text-3xl hover:text-dourado-light transition-colors"
              aria-label="Próxima foto"
            >
              <HiOutlineChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
