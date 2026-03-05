import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ürünlerimiz',
  description: 'OKLAVİA el yapımı su böreği, tereyağlı su böreği, fıstıklı baklava ve Türk kahvesi. Dondurulmuş veya sıcak sipariş verin.',
}

export default function UrunlerLayout({ children }: { children: React.ReactNode }) {
  return children
}
