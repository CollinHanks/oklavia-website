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
    image: `${SITE_CONFIG.url}/images/logo-large.png`,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address,
      addressLocality: CONTACT.district,
      addressRegion: CONTACT.city,
      postalCode: '34200',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.0738354,
      longitude: 28.7230463,
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
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '20:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '10:00', closes: '18:00' },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
