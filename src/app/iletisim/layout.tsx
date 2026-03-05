import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'OKLAVİA ile iletişime geçin. Sipariş, bilgi ve önerileriniz için WhatsApp, telefon veya e-posta ile ulaşın.',
}

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return children
}
