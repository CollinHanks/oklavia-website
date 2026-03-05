import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda — OKLAVİA Hikayesi',
  description: 'OKLAVİA Unlu Mamülleri — 1960\'dan bu yana geleneksel Türk lezzetlerini özenle üretiyoruz. Başakşehir İstanbul merkezli, 81 ile soğuk zincir teslimat.',
  alternates: { canonical: '/hakkimizda' },
  openGraph: {
    title: 'OKLAVİA Hikayesi — 1960\'dan Bu Yana',
    description: 'Bir oklava, bir hayal, bir lezzet yolculuğu. 65+ yıllık geleneksel tarifler.',
    images: [{ url: '/images/general/hero-bg.jpg', width: 1600, height: 1030, alt: 'OKLAVİA Geleneksel Üretim' }],
  },
}

export default function HakkimizdaLayout({ children }: { children: React.ReactNode }) {
  return children
}
