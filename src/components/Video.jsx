import { motion } from 'framer-motion'

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
          <p className="text-xs tracking-[0.25em] uppercase text-dourado-light mb-4">Tour em vídeo</p>
          <h2 className="font-display text-4xl md:text-5xl text-champagne-50">
            Conheça a Casa Victória em movimento
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-sm aspect-[9/16] overflow-hidden border border-champagne-100/15 shadow-2xl shadow-black/30"
        >
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/2jxGNj2V_Qg"
            title="Tour em vídeo da Casa Victória"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  )
}
