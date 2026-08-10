import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { whatsappLink } from '../lib/whatsapp'

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 200])
  const scale = useTransform(scrollY, [0, 800], [1, 1.12])
  const overlayOpacity = useTransform(scrollY, [0, 600], [0.45, 0.8])

  return (
    <section id="topo" ref={ref} className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="/images/fachada-frente.jpg"
          alt="Fachada da Casa Victória, residência contemporânea"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-verde-950 via-verde-950/50 to-verde-950/20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-verde-950/60 via-transparent to-verde-950/30" />

      <div className="relative z-10 flex h-full flex-col items-start justify-end px-6 pb-24 md:px-16 md:pb-28 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-3 border border-champagne-100/30 px-4 py-2 blueprint-rule"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-dourado-light" />
          <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-champagne-100/90">
            Alto padrão · Condomínio Entre Serras · Santa Isabel/SP
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-6xl md:text-8xl text-champagne-50 leading-[0.95]"
        >
          Casa <span className="italic text-dourado-light">Victória</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-6 max-w-xl text-lg md:text-xl text-champagne-100/90 font-light leading-relaxed"
        >
          Uma residência contemporânea onde arquitetura, tecnologia e natureza se encontram.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dourado-light text-verde-950 px-8 py-4 text-sm tracking-wide font-medium hover:bg-champagne-50 transition-colors duration-300"
          >
            Tenho interesse
          </a>
          <a
            href="#contato"
            className="border border-champagne-100/50 text-champagne-50 px-8 py-4 text-sm tracking-wide hover:border-dourado-light hover:text-dourado-light transition-colors duration-300"
          >
            Agendar visita
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-champagne-100/70"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase [writing-mode:vertical-rl]">Role para conhecer</span>
        <span className="h-10 w-px bg-champagne-100/40" />
      </motion.div>
    </section>
  )
}
