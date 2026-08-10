export const WHATSAPP_NUMBER = '5511983318615'

export function whatsappLink(message = 'Olá, tenho interesse em conhecer a Casa Victória.') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
