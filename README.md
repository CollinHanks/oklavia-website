# 🏺 Oklavia - Geleneksel Türk Lezzetleri Web Sitesi

> **Anadolu'nun Mirası, Sofralarınızın Tacı**

Oklavia Unlu Mamülleri'nin resmi web sitesi. Next.js 16.1, Tailwind CSS v4, Supabase ve Vercel ile geliştirilmiştir.

## 🛠️ Teknoloji Stack

- **Next.js 16.1** - App Router, Turbopack, React 19.2
- **Tailwind CSS v4** - CSS-first konfigürasyon
- **Supabase** - Veritabanı (formlar + blog CMS)
- **Framer Motion** - Animasyonlar
- **TypeScript** - Tip güvenliği
- **Vercel** - Hosting & Deployment

## 🚀 Kurulum

### 1. Bağımlılıkları Yükleyin

```bash
cd oklavia-website
npm install
```

### 2. Ortam Değişkenlerini Ayarlayın

`.env.local.example` dosyasını `.env.local` olarak kopyalayın ve doldurun:

```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://www.oklavia.com
```

### 3. Supabase Veritabanını Hazırlayın

Supabase Dashboard > SQL Editor'e gidin ve `supabase/migration.sql` dosyasındaki SQL'i çalıştırın. Bu:
- `contact_messages` tablosunu oluşturur
- `b2b_applications` tablosunu oluşturur
- `blog_posts` tablosunu oluşturur
- 4 adet örnek blog yazısı ekler
- RLS (Row Level Security) politikalarını ayarlar

### 4. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

### 5. Ürün Fotoğraflarını Ekleyin

`public/images/` klasörüne aşağıdaki fotoğrafları ekleyin:
- `su-boregi.jpg`
- `tereyagli-su-boregi.jpg`
- `fistikli-baklava.jpg`
- `turk-kahvesi.jpg`
- `logo.png` (PNG logo dosyanız)
- Blog kapak görselleri

### 6. Logo Entegrasyonu

Logo PNG dosyanızı `public/images/logo.png` olarak ekleyin.
Navbar ve Footer'daki text logosunu resim logosuyla değiştirmek için:
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
dosyalarındaki logo bölümünü güncelleyin.

## 📁 Proje Yapısı

```
oklavia-website/
├── public/
│   ├── images/          # Ürün fotoğrafları, logo
│   └── svg/             # SVG dosyaları
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Ana layout (Navbar + Footer + WhatsApp)
│   │   ├── page.tsx         # Ana sayfa
│   │   ├── globals.css      # Tailwind v4 theme + Ottoman patterns
│   │   ├── urunler/         # Ürünler sayfası
│   │   ├── hakkimizda/      # Hakkımızda sayfası
│   │   ├── b2b/             # B2B / Toptan satış sayfası
│   │   ├── blog/            # Blog listesi + detay
│   │   ├── iletisim/        # İletişim sayfası
│   │   └── api/             # API routes (contact + b2b)
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, WhatsApp button
│   │   ├── ui/              # Ottoman motifs, AnimateIn
│   │   ├── home/            # Ana sayfa bölümleri
│   │   └── ...
│   └── lib/
│       ├── constants.ts     # Tüm site verileri
│       └── supabase.ts      # Supabase client
└── supabase/
    └── migration.sql        # Veritabanı migration
```

## 🌐 Vercel'e Deploy

1. GitHub'a push edin
2. Vercel'de yeni proje oluşturun
3. Environment variables ekleyin
4. Deploy!

```bash
npm run build  # Önce local'de build test edin
```

## 🎨 Özellikler

- ✅ Koyu lacivert + altın premium tasarım
- ✅ Osmanlı çini motifleri (SVG)
- ✅ Sticky header, WhatsApp floating button
- ✅ Ürün kartları + miktar seçimi
- ✅ WhatsApp sipariş yönlendirme
- ✅ İletişim formu → Supabase
- ✅ B2B başvuru formu → Supabase
- ✅ Blog CMS (Supabase)
- ✅ Responsive tasarım
- ✅ Framer Motion animasyonlar
- ✅ SEO optimizasyonu
- ✅ Türkçe dil desteği

## 📝 Google Maps Güncelleme

`src/lib/constants.ts` dosyasındaki `googleMapsEmbed` değerini gerçek Google Maps embed URL'niz ile güncelleyin:
1. Google Maps'te adresinizi açın
2. "Paylaş" > "Harita yerleştir" seçin
3. iframe src URL'sini kopyalayın

## 📞 İletişim

- WhatsApp: 0532 455 45 76
- E-posta: merhaba@oklavia.com
- Instagram: @oklavia2025
