import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Tarifler, Hikayeler & Duyurular',
  description: 'OKLAVİA blog — geleneksel tarifler, mutfak hikayeleri ve güncel duyurular. Türk mutfak kültürünü keşfedin.',
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
