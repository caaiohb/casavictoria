export const WHATSAPP_NUMBER = '5511983318615'

export function whatsappLink(
  message = 'Olá! Vi o anúncio da Casa Victória (residência de alto padrão, Condomínio Entre Serras, Santa Isabel/SP — 250m², 4 suítes, piscina privativa) e gostaria de mais informações.'
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
