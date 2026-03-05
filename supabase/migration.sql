-- ============================================
-- OKLAVIA - SUPABASE DATABASE MIGRATION
-- Run this in Supabase SQL Editor
-- ============================================

-- 1. Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anonymous users (for contact form)
CREATE POLICY "Allow anonymous inserts" ON contact_messages
  FOR INSERT TO anon WITH CHECK (true);

-- 2. B2B Applications Table
CREATE TABLE IF NOT EXISTS b2b_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  tax_number TEXT,
  city TEXT NOT NULL,
  business_type TEXT NOT NULL,
  estimated_monthly_order TEXT NOT NULL,
  products_interested TEXT[] DEFAULT '{}',
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'approved', 'rejected')),
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE b2b_applications ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anonymous users (for B2B form)
CREATE POLICY "Allow anonymous inserts" ON b2b_applications
  FOR INSERT TO anon WITH CHECK (true);

-- 3. Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image TEXT,
  category TEXT NOT NULL CHECK (category IN ('tarifler', 'hikayeler', 'duyurular')),
  author TEXT NOT NULL DEFAULT 'Oklavia',
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow anonymous reads for published posts
CREATE POLICY "Allow anonymous reads for published posts" ON blog_posts
  FOR SELECT TO anon USING (published = true);

-- Create index for slug lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts (slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts (published, published_at DESC);

-- ============================================
-- SAMPLE BLOG DATA
-- ============================================

INSERT INTO blog_posts (title, slug, excerpt, content, category, author, published, published_at) VALUES
(
  'Evde Mükemmel Su Böreği Yapmanın Sırları',
  'evde-mukemmel-su-boregi-yapmanin-sirlari',
  'Ustalarımızdan öğrendiğimiz püf noktalarıyla evde profesyonel su böreği yapmanın tüm incelikleri.',
  '<p>Su böreği, Türk mutfağının en sevilen ve en zahmetli lezzetlerinden biridir...</p>',
  'tarifler',
  'Oklavia Mutfağı',
  true,
  '2025-02-15T10:00:00Z'
),
(
  'Türk Kahvesinin Tarihi ve Kültürel Önemi',
  'turk-kahvesinin-tarihi-ve-kulturel-onemi',
  'UNESCO Somut Olmayan Kültürel Miras Listesi''nde yer alan Türk kahvesinin büyüleyici hikayesi.',
  '<p>Türk kahvesi, 2013 yılında UNESCO Somut Olmayan Kültürel Miras Listesi''ne alınarak dünya genelinde kültürel önemini tescillemiştir...</p>',
  'hikayeler',
  'Oklavia',
  true,
  '2025-02-01T10:00:00Z'
),
(
  'Oklavia Artık Tüm Türkiye''ye Teslimat Yapıyor!',
  'oklavia-artik-tum-turkiyeye-teslimat-yapiyor',
  'Soğuk zincir teslimat ağımızı genişlettik. Artık 81 ile frigolu araçlarımızla ulaşıyoruz.',
  '<p>Büyük heyecanla duyuruyoruz: Oklavia artık tüm Türkiye''ye soğuk zincir garantisiyle teslimat yapıyor!</p>',
  'duyurular',
  'Oklavia',
  true,
  '2025-01-20T10:00:00Z'
),
(
  'Fıstıklı Baklava: Antep''ten Sofralarınıza',
  'fistikli-baklava-antepten-sofralariniza',
  'Fıstıklı baklavanın yüzyıllık serüveni, Antep fıstığının önemi ve baklavamızın hikayesi.',
  '<p>Fıstıklı baklava, Türk tatlı kültürünün taçsız kraliçesidir...</p>',
  'hikayeler',
  'Oklavia Mutfağı',
  true,
  '2025-01-10T10:00:00Z'
);
