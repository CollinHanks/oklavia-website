import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda — OKLAVİA | 1960\'dan Bu Yana Üç Neslin Lezzet Mirası',
  description: 'OKLAVİA, 1960 yılında İstanbul\'da kurulan ve üç nesil boyunca aynı özenle sürdürülen geleneksel Türk lezzet markasıdır. El yapımı su böreği, tereyağlı su böreği, fıstıklı baklava ve Türk kahvesi. ISO sertifikalı üretim, soğuk zincir teslimat, 81 ile hizmet.',
  keywords: 'oklavia hakkında, oklavia hikayesi, geleneksel börek üretimi, el yapımı su böreği, istanbul börek, türk gıda markası, 1960 kuruluş, üç nesil lezzet, soğuk zincir teslimat, ISO sertifikalı gıda',
  openGraph: {
    title: 'Hakkımızda — OKLAVİA | 1960\'dan Bu Yana Üç Neslin Lezzet Mirası',
    description: 'Bir oklavanın dönüşünden doğan marka: OKLAVİA. 1960\'dan bu yana İstanbul\'da el yapımı geleneksel lezzetler üretiyoruz.',
    images: ['/images/general/hero-bg.jpg'],
  },
}

export default function HakkimizdaLayout({ children }: { children: React.ReactNode }) {
  return children
}