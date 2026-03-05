import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import GoogleAnalytics from '@/components/layout/GoogleAnalytics'
import JsonLd from '@/components/layout/JsonLd'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.slogan}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ['su böreği', 'baklava', 'fıstıklı baklava', 'türk kahvesi', 'geleneksel türk yemekleri', 'oklavia', 'dondurulmuş börek', 'toptan börek', 'istanbul börek'],
  authors: [{ name: SITE_CONFIG.fullName }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.slogan}`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.slogan}`,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col">
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
