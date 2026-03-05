export const SITE_CONFIG = {
  name: 'OKLAVİA',
  fullName: 'OKLAVİA Unlu Mamülleri',
  slogan: 'Anadolu\'nun Mirası, Sofralarınızın Tacı',
  description: 'OKLAVİA — 1960\'dan bu yana İstanbul Başakşehir\'de el yapımı su böreği, tereyağlı su böreği, Antep fıstıklı baklava ve geleneksel Türk kahvesi üretiyoruz. Katkı maddesi kullanmadan, nesilden nesile aktarılan tariflerle hazırlanan ürünlerimiz soğuk zincir garantisiyle tüm Türkiye\'ye ulaştırılır. WhatsApp ile sipariş verin.',
  url: 'https://www.oklavia.com',
  foundedYear: 1960,
} as const

export const CONTACT = {
  phone: '0532 455 45 76',
  phoneRaw: '+905324554576',
  whatsapp: '+905324554576',
  email: 'merhaba@oklavia.com',
  address: 'Şahintepe Mah. Eski İstanbul Cd. Oğulcan İş Merkezi NO:114 İç Kapı NO:2',
  district: 'Başakşehir',
  city: 'İstanbul',
  fullAddress: 'Şahintepe Mah. Eski İstanbul Cd. Oğulcan İş Merkezi NO:114 İç Kapı NO:2 BAŞAKŞEHİR / İSTANBUL',
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
    shortDescription: 'Annelerimizden öğrendiğimiz tarifle, usta ellerde kat kat açılan el yapımı su böreği.',
    description: 'Su böreği, Türk mutfağının en emek isteyen ve en sevilen lezzetlerinden biridir. OKLAVİA\'nın su böreği, 1960\'dan bu yana değişmeyen aile tarifimizle hazırlanır. Her yufka, ustalarımızın elinde oklava ile ince ince açılır ve kaynar suda haşlanarak o eşsiz yumuşaklığını kazanır. İç harcımızda taze süzme beyaz peynir ve lor peyniri kullanılır — hiçbir katkı maddesi, koruyucu veya yapay aroma eklenmez. Dondurulmuş olarak evinize ulaştırılan su böreğimizi fırınınızda ısıtarak birkaç dakikada sıcacık sofranıza sunabilirsiniz. Aile kahvaltılarının, misafir ağırlamaların ve özel günlerin vazgeçilmez lezzeti.',
    sizes: [
      { label: '1 Kilogram', value: '1kg', weight: '1 kg' },
      { label: '2 Kilogram', value: '2kg', weight: '2 kg' },
      { label: '1 Tepsi', value: '1tepsi', weight: '3 kg' },
    ],
    hasManualInput: true,
    manualInputLabel: 'Özel miktar (tepsi veya kg)',
    allergens: ['Gluten', 'Süt Ürünleri', 'Yumurta'],
    ingredients: ['Un', 'Su', 'Yumurta', 'Beyaz Peynir', 'Lor Peyniri', 'Tuz', 'Ayçiçek Yağı'],
    storageInfo: 'Dondurulmuş ürün: -18°C\'de 6 ay saklanabilir. Çözdükten sonra aynı gün tüketilmelidir. Fırında 180°C\'de 25-30 dakika pişirin.',
    image: '/images/su-boregi.jpg',
    frozen: true,
    hot: true,
  },
  {
    id: 'tereyagli-su-boregi',
    name: 'Tereyağlı Su Böreği',
    slug: 'tereyagli-su-boregi',
    shortDescription: 'Her katına gerçek tereyağı sürülen, kıtır kıtır premium su böreği.',
    description: 'Tereyağlı su böreği, klasik su böreğimizin bir üst versiyonudur. Farkı, her yufka katının arasına özenle sürülen gerçek tereyağıdır. Bu sayede piştiğinde hem iç kısmı yumuşacık kalır hem de üstü muhteşem bir kıtırlık yakalar. Tereyağının o kendine has aroması, peynirli iç harçla buluştuğunda ortaya unutulmaz bir tat çıkar. Kahvaltıda, beş çayında veya akşam yemeğinde — günün her saatine yakışan bir lezzet. İster dondurulmuş saklayın, ister sıcak sıcak sipariş edin. Soğuk zincir garantisiyle kapınıza kadar gelir.',
    sizes: [
      { label: '1 Kilogram', value: '1kg', weight: '1 kg' },
      { label: '2 Kilogram', value: '2kg', weight: '2 kg' },
      { label: '1 Tepsi', value: '1tepsi', weight: '3 kg' },
    ],
    hasManualInput: true,
    manualInputLabel: 'Özel miktar (tepsi veya kg)',
    allergens: ['Gluten', 'Süt Ürünleri', 'Yumurta'],
    ingredients: ['Un', 'Su', 'Yumurta', 'Beyaz Peynir', 'Lor Peyniri', 'Tereyağı', 'Tuz'],
    storageInfo: 'Dondurulmuş ürün: -18°C\'de 6 ay saklanabilir. Çözdükten sonra aynı gün tüketilmelidir. Fırında 180°C\'de 25-30 dakika pişirin.',
    image: '/images/tereyagli-su-boregi.jpg',
    frozen: true,
    hot: true,
  },
  {
    id: 'fistikli-baklava',
    name: 'Fıstıklı Baklava',
    slug: 'fistikli-baklava',
    shortDescription: 'Birinci sınıf Antep fıstığıyla hazırlanan, ince yufkalı geleneksel baklava.',
    description: 'OKLAVİA fıstıklı baklava, Gaziantep\'in yüzyıllık baklava geleneğini İstanbul\'a taşır. 40\'tan fazla ince ince açılmış yufka katmanının arasına bolca birinci sınıf Antep fıstığı serpiştirilerek hazırlanır. Tereyağıyla pişirildikten sonra özel şerbetiyle buluşan baklavamız, ne çok tatlı ne de yavan — tam kıvamında bir denge sunar. Bayramların, kutlamaların, misafir sofralarının yıldızı. Dondurulmuş olarak sipariş edip dilediğiniz zaman oda sıcaklığında çözdürerek servis edebilirsiniz. Hediye paketi seçeneği de mevcuttur.',
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
    storageInfo: 'Dondurulmuş ürün: -18°C\'de 3 ay saklanabilir. Oda sıcaklığında çözdürüp 10 gün içinde tüketin.',
    image: '/images/fistikli-baklava.jpg',
    frozen: true,
    hot: false,
  },
  {
    id: 'turk-kahvesi',
    name: 'Türk Kahvesi',
    slug: 'turk-kahvesi',
    shortDescription: 'Yüksek kalite Arabica çekirdeklerden, geleneksel yöntemle kavrulmuş Türk kahvesi.',
    description: 'UNESCO Somut Olmayan Kültürel Miras listesinde yer alan Türk kahvesi, OKLAVİA\'da özel bir özenle hazırlanır. Brezilya ve Kolombiya\'dan seçilmiş %100 Arabica çekirdekleri, orta-koyu kavurma seviyesinde geleneksel yöntemlerle kavrulur ve Türk kahvesine özgü ince öğütme ile toz haline getirilir. Cezvenizde pişirdiğinizde yoğun aroması ve bol köpüğüyle kendinizi Osmanlı kahvehanelerinde hissedeceksiniz. Misafirlerinize ikram edin, sohbetinize lezzet katın. Hava almayan özel ambalajıyla tazeliğini uzun süre korur.',
    sizes: [
      { label: '100 Gram', value: '100g', weight: '100 g' },
      { label: '250 Gram', value: '250g', weight: '250 g' },
      { label: '500 Gram', value: '500g', weight: '500 g' },
      { label: '1 Kilogram', value: '1kg', weight: '1 kg' },
    ],
    hasManualInput: false,
    allergens: [],
    ingredients: ['%100 Arabica Kahve Çekirdeği'],
    storageInfo: 'Serin ve kuru yerde, ağzı kapalı olarak 12 ay saklanabilir. Açıldıktan sonra 1 ay içinde tüketilmesi tavsiye edilir.',
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
    description: 'Düzenli ve yüksek adetli siparişlerinizde hacme özel fiyatlandırma sunuyoruz. Aylık sipariş planı oluşturarak bütçenizi önceden planlayabilirsiniz.',
    icon: 'percent',
  },
  {
    title: 'Özel Kutu & Ambalaj',
    description: 'İşletmenizin logosunu ve marka kimliğini yansıtan özel ambalaj tasarımı yapıyoruz. Kurumsal hediye paketleri ve etkinlik siparişleri için ideal.',
    icon: 'package',
  },
  {
    title: 'Düzenli Teslimat',
    description: 'Haftalık veya aylık teslimat planı oluşturarak stok takibi derdinize son verin. Frigolu araçlarımızla soğuk zincir hiç kırılmadan kapınıza kadar geliyoruz.',
    icon: 'truck',
  },
  {
    title: 'Özel Ürün Geliştirme',
    description: 'Menünüze özel gramaj ve porsiyon seçenekleri, farklı iç harç alternatifleri ve mevsimsel ürünler geliştirebiliyoruz. R&D ekibimiz sizinle çalışır.',
    icon: 'chef-hat',
  },
  {
    title: 'Öncelikli Destek',
    description: 'B2B müşterilerimize atanmış özel müşteri temsilcisi, WhatsApp üzerinden 7/24 iletişim ve sipariş takibi. Acil siparişlerde öncelikli üretim.',
    icon: 'headphones',
  },
  {
    title: 'Esnek Ödeme',
    description: 'Kurumsal fatura, açık hesap çalışma imkânı ve 30 güne kadar vade seçenekleri. İşletmenizin nakit akışına uygun ödeme planları oluşturuyoruz.',
    icon: 'credit-card',
  },
] as const
