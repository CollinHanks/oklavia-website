import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'OKLAVİA Unlu Mamülleri — 1960\'dan bu yana geleneksel Türk lezzetlerini özenle üretiyoruz. Hikayemiz, vizyonumuz ve değerlerimiz.',
}

export default function HakkimizdaLayout({ children }: { children: React.ReactNode }) {
  return children
}
