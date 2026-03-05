# OKLAVİA WEB SİTESİ - TEKNİK BECERİLER & STACK

## 🛠️ KULLANILAN TEKNOLOJİLER

### Frontend
| Teknoloji | Versiyon | Kullanım Amacı |
|-----------|----------|----------------|
| Next.js | 16.1 | Ana framework (App Router, Turbopack) |
| React | 19.2 | UI kütüphanesi |
| TypeScript | 5.7+ | Tip güvenliği |
| Tailwind CSS | 4.0 | CSS-first utility framework |
| Framer Motion | 12.0+ | Animasyonlar & geçişler |
| Lucide React | 0.470+ | İkon kütüphanesi |

### Backend & Veritabanı
| Teknoloji | Kullanım Amacı |
|-----------|----------------|
| Supabase | PostgreSQL veritabanı + Auth + API |
| Next.js API Routes | Form submission endpoint'leri |

### Deployment
| Teknoloji | Kullanım Amacı |
|-----------|----------------|
| Vercel | Hosting & CI/CD |
| GitHub | Versiyon kontrolü |

## 📁 DOSYA YAPISI KURALLARI

### Klasör Organizasyonu
```
src/
├── app/                    # Next.js App Router sayfaları
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Ana sayfa
│   ├── globals.css         # Global stiller + Tailwind theme
│   ├── [sayfa]/page.tsx    # Alt sayfalar
│   └── api/                # API route'ları
├── components/
│   ├── layout/             # Navbar, Footer, WhatsApp
│   ├── ui/                 # Genel UI bileşenleri (AnimateIn, Motifs)
│   ├── home/               # Ana sayfa bileşenleri
│   ├── products/           # Ürün bileşenleri
│   └── blog/               # Blog bileşenleri
├── lib/
│   ├── constants.ts        # Tüm sabit veriler
│   └── supabase.ts         # Supabase client
└── types/                  # TypeScript tipleri
```

### Dosya İsimlendirme
- Bileşenler: PascalCase (HeroSection.tsx)
- Sayfalar: page.tsx (Next.js convention)
- Lib dosyaları: camelCase (constants.ts)
- CSS: globals.css (tek dosya)

## 🎨 TASARIM SİSTEMİ

### Renk Paleti (CSS Variables)
```
Navy: #050A18, #0A1128, #0F1B3D, #1B2845, #1E3A5F
Gold: #A68A3A, #C9A84C, #D4AF37, #E5C76B, #F0DB8A
Cream: #FDFBF5, #F5F0E8, #EDE5D5
```

### Font Hiyerarşisi
- H1: Montserrat Bold, 48-72px
- H2: Montserrat Bold, 32-48px
- H3: Montserrat SemiBold, 20-24px
- Body: Inter Regular, 14-16px
- Small: Inter, 12-13px
- Label: Inter Medium, 11-12px, UPPERCASE, letter-spacing: 0.1em+

### Bileşen Stilleri
- `.card-premium` - Gradient bg + gold border + hover efekti
- `.btn-gold` - Altın gradient buton + shimmer
- `.btn-outline-gold` - Gold outline buton
- `.btn-whatsapp` - Yeşil WhatsApp butonu
- `.glass-navy` - Glassmorphism efekti
- `.text-gold-gradient` - Altın gradient text
- `.ottoman-pattern-bg` - Osmanlı desen arka plan
- `.cini-pattern-bg` - Çini motif arka plan

### Osmanlı Motifleri
- OttomanDivider: Bölüm ayırıcı (lale motifli)
- OttomanBorder: Sürekli tekrarlayan border pattern
- OttomanCorner: Kart köşe süslemesi

## 📋 SUPABASE TABLOLARI

### contact_messages
- id, name, email, phone, subject, message, is_read, created_at

### b2b_applications
- id, company_name, contact_person, email, phone, tax_number, city, business_type, estimated_monthly_order, products_interested[], message, status, is_read, created_at

### blog_posts
- id, title, slug, excerpt, content, cover_image, category, author, published, published_at, created_at, updated_at

## 🔧 GELİŞTİRME KOMUTLARI
```bash
npm run dev          # Development (Turbopack)
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint
```

## 📝 KOD YAZIM KURALLARI
1. Tüm component'ler 'use client' ile başlamalı (client-side interactivity gerekirse)
2. Server component'ler default olarak tercih edilmeli
3. Animasyonlar için Framer Motion kullanılmalı
4. İkonlar için Lucide React kullanılmalı
5. Renkler CSS variable'lar üzerinden kullanılmalı
6. Responsive tasarım: mobile-first yaklaşım
7. Accessibility: aria-label, semantic HTML
8. Her yerde "OKLAVİA" (İ harfi ile) yazılmalı
