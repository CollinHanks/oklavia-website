import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ürünlerimiz — Su Böreği, Baklava & Türk Kahvesi',
  description: 'OKLAVİA el yapımı su böreği, tereyağlı su böreği, fıstıklı baklava ve Türk kahvesi. Dondurulmuş veya sıcak, WhatsApp ile sipariş verin. Tüm Türkiye\'ye soğuk zincir teslimat.',
  alternates: { canonical: '/urunler' },
  openGraph: {
    title: 'OKLAVİA Ürünleri — Geleneksel Türk Lezzetleri',
    description: 'El yapımı su böreği, fıstıklı baklava ve Türk kahvesi. 1960\'dan bu yana geleneksel tariflerle.',
    images: [{ url: '/images/products/su-boregi.jpg', width: 1482, height: 1180, alt: 'OKLAVİA Su Böreği' }],
  },
}

export default function UrunlerLayout({ children }: { children: React.ReactNode }) {
  return children
}
