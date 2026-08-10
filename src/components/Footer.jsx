import { whatsappLink } from '../lib/whatsapp'

export default function Footer() {
  return (
    <footer className="bg-verde-950 border-t border-champagne-100/10 py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="font-display text-2xl text-champagne-50">
            Casa <span className="italic text-dourado-light">Victória</span>
          </p>
          <p className="text-xs text-champagne-100/40 mt-2">
            Condomínio Entre Serras, Santa Isabel — SP
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-xs tracking-wide text-champagne-100/60">
          <a href="#sobre" className="hover:text-dourado-light transition-colors">A Residência</a>
          <a href="#galeria" className="hover:text-dourado-light transition-colors">Galeria</a>
          <a href="#investimento" className="hover:text-dourado-light transition-colors">Investimento</a>
          <a href="#localizacao" className="hover:text-dourado-light transition-colors">Localização</a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-dourado-light transition-colors"
          >
            WhatsApp
          </a>
        </nav>

        <p className="text-[11px] text-champagne-100/30 text-center md:text-right">
          © {new Date().getFullYear()} Casa Victória.
          <br className="md:hidden" /> Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
