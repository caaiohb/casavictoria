import { motion } from 'framer-motion'
import {
  HiOutlineHome,
  HiOutlineCpuChip,
  HiOutlineSun,
  HiOutlineBoltSlash,
  HiOutlineTv,
  HiOutlineCake,
  HiOutlineFire,
  HiOutlineSparkles,
  HiOutlineCloud,
} from 'react-icons/hi2'
import { GiBarbecue, GiSwimfins } from 'react-icons/gi'
import { LuBath } from 'react-icons/lu'

const FEATURES = [
  { icon: HiOutlineHome, label: 'Casa moderna', desc: 'Arquitetura contemporânea assinada.' },
  { icon: HiOutlineCpuChip, label: 'Casa inteligente', desc: 'Preparada para automação residencial.' },
  { icon: HiOutlineSun, label: 'Aquecimento solar', desc: 'Água aquecida por energia solar.' },
  { icon: HiOutlineBoltSlash, label: 'Energia fotovoltaica', desc: 'Eficiência e economia todos os dias.' },
  { icon: HiOutlineCloud, label: 'Preparada para ar-condicionado', desc: 'Infraestrutura pronta para instalação em todos os ambientes.' },
  { icon: HiOutlineTv, label: 'Sala de estar e TV', desc: 'Ambiente amplo para o convívio.' },
  { icon: HiOutlineCake, label: 'Cozinha integrada', desc: 'Aberta à sala de jantar.' },
  { icon: HiOutlineFire, label: 'Espaço gourmet', desc: 'Feito para receber com estilo.' },
  { icon: GiBarbecue, label: 'Churrasqueira', desc: 'Estrutura completa ao ar livre.' },
  { icon: GiSwimfins, label: 'Piscina privativa', desc: 'Lazer e exclusividade no quintal.' },
  { icon: LuBath, label: '6 banheiros', desc: 'Conforto para toda a família.' },
]

export default function Features() {
  return (
    <section id="diferenciais" className="bg-verde-950 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[length:28px_28px]" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-dourado-light mb-4">Diferenciais premium</p>
          <h2 className="font-display text-4xl md:text-5xl text-champagne-50">
            Cada detalhe, uma escolha deliberada
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-champagne-100/10">
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.08 }}
                className="bg-verde-950 p-7 group hover:bg-verde-900 transition-colors duration-300"
              >
                <Icon className="text-3xl text-dourado-light mb-5" />
                <h3 className="font-display text-lg text-champagne-50 mb-1.5">{f.label}</h3>
                <p className="text-xs text-champagne-100/50 leading-relaxed">{f.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
