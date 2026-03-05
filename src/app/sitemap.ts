import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.oklavia.com'

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/urunler`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/hakkimizda`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/b2b`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/iletisim`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    // Blog posts
    { url: `${baseUrl}/blog/evde-mukemmel-su-boregi-yapmanin-sirlari`, lastModified: new Date('2025-02-15'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/turk-kahvesinin-tarihi-ve-kulturel-onemi`, lastModified: new Date('2025-02-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/oklavia-artik-tum-turkiyeye-teslimat-yapiyor`, lastModified: new Date('2025-01-20'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/fistikli-baklava-antepten-sofralariniza`, lastModified: new Date('2025-01-10'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/tereyagli-su-boregi-neden-bu-kadar-seviliyor`, lastModified: new Date('2025-03-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/dondurulmus-borek-nasil-pisirilir`, lastModified: new Date('2025-02-20'), changeFrequency: 'monthly', priority: 0.6 },
    // Legal pages
    { url: `${baseUrl}/yasal/kvkk`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/yasal/gizlilik-politikasi`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/yasal/cerez-politikasi`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/yasal/kullanim-kosullari`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
