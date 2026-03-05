import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import GoogleAnalytics from '@/components/layout/GoogleAnalytics'
import JsonLd from '@/components/layout/JsonLd'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — El Yapımı Su Böreği, Baklava & Türk Kahvesi | ${SITE_CONFIG.slogan}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'OKLAVİA', 'oklavia', 'su böreği', 'el yapımı su böreği', 'tereyağlı su böreği',
    'fıstıklı baklava', 'Antep fıstıklı baklava', 'baklava sipariş',
    'türk kahvesi', 'geleneksel türk kahvesi',
    'geleneksel türk yemekleri', 'dondurulmuş börek', 'toptan börek',
    'istanbul börek sipariş', 'soğuk zincir teslimat', 'ev yapımı börek',
    'Başakşehir börek', 'online börek sipariş', 'toptan baklava',
  ],
  authors: [{ name: SITE_CONFIG.fullName, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.fullName,
  publisher: SITE_CONFIG.fullName,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — El Yapımı Su Böreği, Baklava & Türk Kahvesi`,
    description: SITE_CONFIG.description,
    images: [{ url: '/images/logo-large.png', width: 943, height: 500, alt: 'OKLAVİA Unlu Mamülleri' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.slogan}`,
    description: SITE_CONFIG.description,
    images: ['/images/logo-large.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
  category: 'food',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/images/logo-icon.png" />
        <link rel="apple-touch-icon" href="/images/logo-icon.png" />
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
