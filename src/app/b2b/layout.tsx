import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'B2B Toptan Satış — Restoran, Kafe & Kurumsal',
  description: 'OKLAVİA toptan satış ve B2B hizmetleri. Restoran, kafe, otel ve toptan alıcılara özel fiyatlandırma. Soğuk zincir teslimat, özel ambalaj.',
  alternates: { canonical: '/b2b' },
  openGraph: {
    title: 'OKLAVİA B2B Toptan Satış',
    description: 'Kurumsal müşterilerimize özel fiyatlandırma ve avantajlar.',
  },
}

export default function B2BLayout({ children }: { children: React.ReactNode }) {
  return children
}
