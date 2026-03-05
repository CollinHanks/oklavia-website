import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Tarifler, Hikayeler & Duyurular',
  description: 'OKLAVİA blog — geleneksel su böreği tarifleri, Türk kahvesi kültürü, baklava hikayesi ve güncel duyurular. Türk mutfak kültürünü keşfedin.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'OKLAVİA Blog — Geleneksel Türk Mutfağı',
    description: 'Tarifler, hikayeler ve duyurular.',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
