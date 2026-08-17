import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { whatsappLink } from '../lib/whatsapp'

export default function MobileStickyCTA() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="sm:hidden fixed bottom-0 inset-x-0 z-50 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 text-sm font-medium tracking-wide shadow-[0_-4px_16px_rgba(0,0,0,0.2)]"
    >
      <FaWhatsapp className="text-lg" />
      Falar no WhatsApp agora
    </motion.a>
  )
}
