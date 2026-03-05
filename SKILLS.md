# OKLAVİA WEB SİTESİ — TEKNİK DOKÜMANTASYON

## Teknoloji Stack
- **Framework:** Next.js 16.1 (App Router, Turbopack)
- **Stil:** Tailwind CSS v4 (custom theme)
- **Animasyon:** Framer Motion
- **Veritabanı:** Supabase (PostgreSQL)
- **Deploy:** Vercel (Frankfurt region)
- **Domain:** oklavia.com (Squarespace DNS → Vercel)

## Renk Paleti
```
Navy:  #0B1426 (950) → #0F1A35 (900) → #162548 (800) → #1F3050 (700)
Gold:  #A68A3A (600) → #C9A84C (500) → #D4AF37 (400) → #E5C76B (300)
Cream: #FDFBF5 (50) → #F5F0E8 (100) → #EDE5D5 (200)
```

## Font
- **Başlık:** Cormorant Garamond (serif)
- **Gövde:** Montserrat (sans-serif)

## Proje Yapısı
```
src/
├── app/
│   ├── page.tsx          # Ana sayfa
│   ├── layout.tsx        # Root layout (metadata, navbar, footer)
│   ├── globals.css       # Global stiller + Tailwind theme
│   ├── urunler/          # Ürünler sayfası
│   ├── hakkimizda/       # Hakkımızda sayfası  
│   ├── b2b/              # B2B / Toptan sayfası
│   ├── blog/             # Blog listesi + [slug] detay
│   ├── iletisim/         # İletişim sayfası
│   ├── api/              # API routes (contact, b2b)
│   ├── sitemap.ts        # Dinamik sitemap
│   └── robots.ts         # robots.txt
├── components/
│   ├── home/             # Ana sayfa bileşenleri
│   ├── layout/           # Navbar, Footer, WhatsApp, GA, JsonLd
│   └── ui/               # OttomanMotifs, AnimateIn, PageTransition
├── lib/
│   ├── constants.ts      # Ürünler, iletişim, config
│   └── supabase.ts       # Supabase client
└── public/images/        # Optimize görseller (6.7MB toplam)
```

## Supabase Tabloları
| Tablo | Açıklama |
|-------|----------|
| `contact_messages` | İletişim formu gönderileri |
| `b2b_applications` | B2B başvuruları |
| `blog_posts` | Blog yazıları (CMS) |

## Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL      # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY # Supabase anonymous key
NEXT_PUBLIC_SITE_URL          # https://www.oklavia.com
NEXT_PUBLIC_GA_ID             # Google Analytics ID (opsiyonel)
RESEND_API_KEY                # E-posta bildirimi (opsiyonel)
```

## E-posta Bildirimi Kurulumu (Opsiyonel)
1. resend.com'da hesap açın
2. Domain doğrulayın (oklavia.com)
3. API Key oluşturun
4. Vercel → Settings → Environment Variables → `RESEND_API_KEY` ekleyin
5. Redeploy

## Geliştirme Komutları
```bash
npm run dev          # Geliştirme sunucusu (localhost:3000)
npm run build        # Production build
npm run start        # Production sunucusu
```

## Deploy
```bash
git add .
git commit -m "açıklama"
git push              # Vercel otomatik deploy eder
```
