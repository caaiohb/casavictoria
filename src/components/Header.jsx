import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { whatsappLink } from '../lib/whatsapp'

const LINKS = [
  { href: '#sobre', label: 'A Residência' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#planta', label: 'Planta' },
  { href: '#investimento', label: 'Investimento' },
  { href: '#localizacao', label: 'Localização' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-verde-900/95 backdrop-blur-md py-3 shadow-lg shadow-black/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#topo" className="font-display text-champagne-100 text-xl md:text-2xl tracking-wide">
          Casa <span className="text-dourado-light italic">Victória</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-champagne-100/85 hover:text-dourado-light transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappLink('Olá! Vi o anúncio da Casa Victória (Condomínio Entre Serras, Santa Isabel/SP — 250m², 4 suítes, piscina privativa) e gostaria de agendar uma visita.')}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-dourado-light/70 text-champagne-100 text-sm tracking-wide px-5 py-2.5 hover:bg-dourado-light hover:text-verde-950 transition-colors duration-300"
          >
            Agendar visita
          </a>
        </div>

        <button
          className="lg:hidden text-champagne-100 text-2xl"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-verde-900/98 backdrop-blur-md"
          >
            <nav className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="py-3 text-champagne-100/90 border-b border-champagne-100/10 text-sm tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappLink('Olá! Vi o anúncio da Casa Victória (Condomínio Entre Serras, Santa Isabel/SP — 250m², 4 suítes, piscina privativa) e gostaria de agendar uma visita.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-center border border-dourado-light text-champagne-100 py-3 text-sm tracking-wide"
              >
                Agendar visita
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
