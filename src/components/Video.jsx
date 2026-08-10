import { motion } from 'framer-motion'

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

export default function Video() {
  return (
    <section className="bg-verde-950 py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-dourado-light mb-4">Atualização da obra</p>
          <h2 className="font-display text-4xl md:text-5xl text-champagne-50">
            Acompanhe a evolução da Casa Victória
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto sm:max-w-none">
          {VIDEOS.map((video, i) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="mx-auto w-full max-w-sm"
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
              <p className="text-center text-xs text-champagne-100/50 mt-4 tracking-wide">{video.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
