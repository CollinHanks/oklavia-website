export const SITE_CONFIG = {
  name: 'OKLAVİA',
  fullName: 'OKLAVİA Unlu Mamülleri',
  slogan: 'Anadolu\'nun Mirası, Sofralarınızın Tacı',
  description: 'OKLAVİA — 1960\'dan bu yana geleneksel Türk lezzetlerini, özenle hazırlanmış el yapımı ürünlerle sofralarınıza taşıyoruz. Su böreği, baklava ve Türk kahvesi.',
  url: 'https://www.oklavia.com',
  foundedYear: 1960,
} as const

export const CONTACT = {
  phone: '0532 455 45 76',
  phoneRaw: '+905324554576',
  whatsapp: '+905324554576',
  email: 'merhaba@oklavia.com',
  address: 'Şahintepe Mah. Eski İstanbul Cd. Gülcan İş Merkez NO:114 İç Kapı NO:2',
  district: 'Başakşehir',
  city: 'İstanbul',
  fullAddress: 'Şahintepe Mah. Eski İstanbul Cd. Gülcan İş Merkez NO:114 İç Kapı NO:2 BAŞAKŞEHİR / İSTANBUL',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.2!2d28.7735!3d41.0925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5e0a9b1c8d9%3A0x0!2zxZ5haGludGVwZSBNYWguIEJhxZ9hayxlaGly!5e0!3m2!1str!2str!4v1709600000000',
} as const

export const SOCIAL = {
  instagram: 'https://www.instagram.com/oklavia2025',
  facebook: 'https://www.facebook.com/oklavia.tr',
  tiktok: 'https://www.tiktok.com/@oklavia.tr',
  youtube: 'https://www.youtube.com/@oklavia.tr',
} as const

export const NAV_LINKS = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Ürünler', href: '/urunler' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'B2B / Toptan', href: '/b2b' },
  { label: 'Blog', href: '/blog' },
  { label: 'İletişim', href: '/iletisim' },
] as const

export type ProductSize = {
  label: string
  value: string
  weight: string
}

export type Product = {
  id: string
  name: string
  slug: string
  shortDescription: string
  description: string
  sizes: ProductSize[]
  hasManualInput: boolean
  manualInputLabel?: string
  allergens: string[]
  ingredients: string[]
  storageInfo: string
  image: string
  frozen: boolean
  hot: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: 'su-boregi',
    name: 'Su Böreği',
    slug: 'su-boregi',
    shortDescription: 'Geleneksel el açması su böreği, kat kat lezzet.',
    description: 'Ustalarımızın elinde ince ince açılan yufkalar, özel peynir harciyle buluşuyor. Her lokmada Anadolu\'nun eşsiz börek geleneğini yaşayın. Dondurulmuş veya sıcak olarak sipariş verebilirsiniz.',
    sizes: [
      { label: '1 Kilogram', value: '1kg', weight: '1 kg' },
      { label: '2 Kilogram', value: '2kg', weight: '2 kg' },
      { label: '1 Tepsi', value: '1tepsi', weight: '3 kg' },
    ],
    hasManualInput: true,
    manualInputLabel: 'Özel miktar (tepsi veya kg)',
    allergens: ['Gluten', 'Süt Ürünleri', 'Yumurta'],
    ingredients: ['Un', 'Su', 'Yumurta', 'Beyaz Peynir', 'Lor Peyniri', 'Tuz', 'Ayçiçek Yağı'],
    storageInfo: 'Dondurulmuş ürün: -18°C\'de 6 ay saklanabilir. Çözdükten sonra aynı gün tüketilmelidir.',
    image: '/images/su-boregi.jpg',
    frozen: true,
    hot: true,
  },
  {
    id: 'tereyagli-su-boregi',
    name: 'Tereyağlı Su Böreği',
    slug: 'tereyagli-su-boregi',
    shortDescription: 'Bol tereyağlı, geleneksel tarifle hazırlanan özel su böreği.',
    description: 'Klasik su böreğimizin tereyağı ile taçlandırılmış premium versiyonu. Her katına sürülen tereyağı, böreğe eşsiz bir lezzet ve kıtırlık katıyor. Dondurulmuş veya sıcak olarak sipariş verebilirsiniz.',
    sizes: [
      { label: '1 Kilogram', value: '1kg', weight: '1 kg' },
      { label: '2 Kilogram', value: '2kg', weight: '2 kg' },
      { label: '1 Tepsi', value: '1tepsi', weight: '3 kg' },
    ],
    hasManualInput: true,
    manualInputLabel: 'Özel miktar (tepsi veya kg)',
    allergens: ['Gluten', 'Süt Ürünleri', 'Yumurta'],
    ingredients: ['Un', 'Su', 'Yumurta', 'Beyaz Peynir', 'Lor Peyniri', 'Tereyağı', 'Tuz'],
    storageInfo: 'Dondurulmuş ürün: -18°C\'de 6 ay saklanabilir. Çözdükten sonra aynı gün tüketilmelidir.',
    image: '/images/tereyagli-su-boregi.jpg',
    frozen: true,
    hot: true,
  },
  {
    id: 'fistikli-baklava',
    name: 'Fıstıklı Baklava',
    slug: 'fistikli-baklava',
    shortDescription: 'Antep fıstıklı, ince yufkalı geleneksel baklava.',
    description: 'İnce ince açılmış yufkalar arasına serpiştirilen Antep fıstığı ve özel şerbetiyle hazırlanan baklavamız, her lokmasında Güneydoğu\'nun eşsiz lezzetini sunar. Dondurulmuş olarak da sipariş edilebilir.',
    sizes: [
      { label: '100 Gram', value: '100g', weight: '100 g' },
      { label: '1 Kilogram', value: '1kg', weight: '1 kg' },
      { label: '2 Kilogram', value: '2kg', weight: '2 kg' },
      { label: '1 Tepsi', value: '1tepsi', weight: '3 kg' },
    ],
    hasManualInput: true,
    manualInputLabel: 'Özel miktar (tepsi veya kg)',
    allergens: ['Gluten', 'Fıstık', 'Süt Ürünleri'],
    ingredients: ['Un', 'Nişasta', 'Antep Fıstığı', 'Tereyağı', 'Şeker', 'Su', 'Limon Suyu'],
    storageInfo: 'Dondurulmuş ürün: -18°C\'de 3 ay saklanabilir. Oda sıcaklığında 10 gün taze kalır.',
    image: '/images/fistikli-baklava.jpg',
    frozen: true,
    hot: false,
  },
  {
    id: 'turk-kahvesi',
    name: 'Türk Kahvesi',
    slug: 'turk-kahvesi',
    shortDescription: 'Özenle kavrulmuş, geleneksel Türk kahvesi.',
    description: 'Özenle seçilmiş kahve çekirdekleri, geleneksel yöntemlerle kavrulup ince ince öğütülür. Köpüklü, lezzetli bir Türk kahvesi deneyimi için sofranızda yerini alsın.',
    sizes: [
      { label: '100 Gram', value: '100g', weight: '100 g' },
      { label: '250 Gram', value: '250g', weight: '250 g' },
      { label: '500 Gram', value: '500g', weight: '500 g' },
      { label: '1 Kilogram', value: '1kg', weight: '1 kg' },
    ],
    hasManualInput: false,
    allergens: [],
    ingredients: ['%100 Arabica Kahve Çekirdeği'],
    storageInfo: 'Serin ve kuru yerde, ağzı kapalı olarak 12 ay saklanabilir.',
    image: '/images/turk-kahvesi.jpg',
    frozen: false,
    hot: false,
  },
]

export const DELIVERY_CITIES = {
  near: {
    label: 'Yakın Şehirler',
    time: '1-2 iş günü',
    description: 'İstanbul ve çevre iller',
  },
  far: {
    label: 'Uzak Şehirler',
    time: '1-3 iş günü',
    description: 'Tüm Türkiye geneli',
  },
} as const

export const B2B_ADVANTAGES = [
  {
    title: 'Toptan İndirim',
    description: 'Yüksek adetli siparişlerde özel fiyatlandırma ile karlılığınızı artırın.',
    icon: 'percent',
  },
  {
    title: 'Özel Kutu & Ambalaj',
    description: 'Markanıza özel kutu ve ambalaj tasarımı ile ürünlerinizi farklılaştırın.',
    icon: 'package',
  },
  {
    title: 'Düzenli Teslimat',
    description: 'Frigolu araçlarla düzenli teslimat planı, soğuk zincir garantisi.',
    icon: 'truck',
  },
  {
    title: 'Özel Ürün Geliştirme',
    description: 'İşletmenize özel gramaj ve porsiyon seçenekleri ile özel üretim imkânı.',
    icon: 'chef-hat',
  },
  {
    title: 'Öncelikli Destek',
    description: 'B2B müşterilerimize özel iletişim hattı ve öncelikli sipariş yönetimi.',
    icon: 'headphones',
  },
  {
    title: 'Esnek Ödeme',
    description: 'Kurumsal müşterilerimize özel ödeme koşulları ve vade seçenekleri.',
    icon: 'credit-card',
  },
] as const
