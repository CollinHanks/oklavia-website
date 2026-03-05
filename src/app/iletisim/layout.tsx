import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim — Sipariş & Bilgi',
  description: 'OKLAVİA ile iletişime geçin. WhatsApp 0532 455 45 76, e-posta merhaba@oklavia.com. Başakşehir İstanbul. Sipariş, bilgi ve önerileriniz için.',
  alternates: { canonical: '/iletisim' },
  openGraph: {
    title: 'OKLAVİA İletişim',
    description: 'WhatsApp, telefon veya e-posta ile ulaşın. Başakşehir İstanbul.',
  },
}

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return children
}
