import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'B2B / Toptan Satış',
  description: 'OKLAVİA toptan satış ve B2B hizmetleri. Restoran, kafe, otel ve toptan alıcılara özel fiyatlandırma ve avantajlar.',
}

export default function B2BLayout({ children }: { children: React.ReactNode }) {
  return children
}
