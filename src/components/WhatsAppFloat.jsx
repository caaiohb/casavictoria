import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden sm:flex flex-col items-center gap-2">
      <motion.a
        href="#contato"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className="bg-verde-950 text-champagne-50 text-xs font-medium tracking-wide px-3 py-1.5 rounded-full shadow-md shadow-black/20 whitespace-nowrap hover:bg-verde-900 transition-colors"
      >
        Conheça a Casa Victória
      </motion.a>
      <motion.a
        href="#contato"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        whileHover={{ scale: 1.08 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white text-2xl shadow-lg shadow-black/25"
        aria-label="Conhecer a residência e falar no WhatsApp"
      >
        <FaWhatsapp />
      </motion.a>
    </div>
  )
}
