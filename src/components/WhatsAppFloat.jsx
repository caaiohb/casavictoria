import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { whatsappLink } from '../lib/whatsapp'

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.6 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white text-2xl shadow-lg shadow-black/25"
      aria-label="Conversar no WhatsApp"
    >
      <FaWhatsapp />
    </motion.a>
  )
}
