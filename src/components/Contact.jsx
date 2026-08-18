import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { whatsappLink, WHATSAPP_NUMBER } from '../lib/whatsapp'

export default function Contact() {
  const [confirmedRead, setConfirmedRead] = useState(false)
  const [form, setForm] = useState({ nome: '', telefone: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      const leads = JSON.parse(localStorage.getItem('casa-victoria-leads') || '[]')
      leads.push({ ...form, data: new Date().toISOString() })
      localStorage.setItem('casa-victoria-leads', JSON.stringify(leads))
    } catch {
      // localStorage indisponível — segue apenas para o WhatsApp
    }

    const msg = `Olá, meu nome é ${form.nome}. Tenho interesse em conhecer a Casa Victória.${
      form.mensagem ? ` ${form.mensagem}` : ''
    } (Telefone: ${form.telefone})`

    window.open(whatsappLink(msg), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <section
      id="contato"
      className="relative py-28 md:py-36 bg-verde-950 text-champagne-50 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/piscina.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-15"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Tenha a oportunidade de viver
            <br /> em uma residência <span className="italic text-dourado-light">única</span>.
          </h2>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10 text-sm text-champagne-100/70">
            <span>250m² construídos</span>
            <span className="text-dourado-light/40">·</span>
            <span>4 suítes</span>
            <span className="text-dourado-light/40">·</span>
            <span>Piscina privativa</span>
            <span className="text-dourado-light/40">·</span>
            <span>Santa Isabel/SP</span>
            <span className="text-dourado-light/40">·</span>
            <span>R$ 2.500.000</span>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!confirmedRead ? (
            <motion.div
              key="gate"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="max-w-lg mx-auto border border-champagne-100/15 p-8 md:p-10 text-center"
            >
              <p className="font-display text-xl md:text-2xl mb-8">
                Você já conheceu as informações da Casa Victória nesta página?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#topo"
                  className="border border-champagne-100/40 text-champagne-100/85 px-8 py-3.5 text-sm tracking-wide hover:border-dourado-light hover:text-dourado-light transition-colors"
                >
                  Ainda não, quero ver
                </a>
                <button
                  type="button"
                  onClick={() => setConfirmedRead(true)}
                  className="bg-dourado-light text-verde-950 px-8 py-3.5 text-sm tracking-wide font-medium hover:bg-champagne-50 transition-colors"
                >
                  Sim, quero entrar em contato
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="contact-area"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-10">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-dourado-light text-verde-950 px-10 py-4 text-sm tracking-wide font-medium hover:bg-champagne-50 transition-colors"
                >
                  Solicitar informações
                </a>
              </div>

              <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto grid gap-4 border border-champagne-100/15 p-8 md:p-10"
              >
                <p className="text-xs tracking-[0.2em] uppercase text-champagne-100/50 mb-2">
                  Prefere deixar seus dados?
                </p>
                <p className="text-xs text-champagne-100/40 mb-2 normal-case tracking-normal">
                  Preenchemos sua mensagem automaticamente para você enviar pelo WhatsApp.
                </p>
                <input
                  required
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="bg-transparent border border-champagne-100/25 px-4 py-3 text-sm placeholder:text-champagne-100/40 focus:outline-none focus:border-dourado-light"
                />
                <input
                  required
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  placeholder="Telefone / WhatsApp"
                  className="bg-transparent border border-champagne-100/25 px-4 py-3 text-sm placeholder:text-champagne-100/40 focus:outline-none focus:border-dourado-light"
                />
                <textarea
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  placeholder="Mensagem (opcional)"
                  rows={3}
                  className="bg-transparent border border-champagne-100/25 px-4 py-3 text-sm placeholder:text-champagne-100/40 focus:outline-none focus:border-dourado-light resize-none"
                />
                <button
                  type="submit"
                  className="mt-2 border border-dourado-light text-champagne-50 py-3.5 text-sm tracking-wide hover:bg-dourado-light hover:text-verde-950 transition-colors"
                >
                  Enviar e abrir WhatsApp
                </button>
                {sent && (
                  <p className="text-xs text-dourado-light text-center">
                    Pronto! Abrimos o WhatsApp ({WHATSAPP_NUMBER}) com sua mensagem.
                  </p>
                )}
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
