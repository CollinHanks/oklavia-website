import { SITE_CONFIG, CONTACT, SOCIAL } from '@/lib/constants'

export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: SITE_CONFIG.fullName,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: CONTACT.phoneRaw,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address,
      addressLocality: CONTACT.district,
      addressRegion: CONTACT.city,
      addressCountry: 'TR',
    },
    sameAs: [
      SOCIAL.instagram,
      SOCIAL.facebook,
      SOCIAL.tiktok,
      SOCIAL.youtube,
    ],
    foundingDate: `${SITE_CONFIG.foundedYear}`,
    areaServed: {
      '@type': 'Country',
      name: 'Türkiye',
    },
    priceRange: '₺₺',
    servesCuisine: 'Türk Mutfağı',
    hasMenu: `${SITE_CONFIG.url}/urunler`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
