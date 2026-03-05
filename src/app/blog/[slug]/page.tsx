'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'
import { getSupabase, type BlogPost } from '@/lib/supabase'

const categoryColors: Record<string, string> = {
  tarifler: 'bg-orange-500/10 text-orange-400 border-orange-500/15',
  hikayeler: 'bg-blue-500/10 text-blue-400 border-blue-500/15',
  duyurular: 'bg-green-500/10 text-green-400 border-green-500/15',
}

const categoryLabels: Record<string, string> = {
  tarifler: 'Tarifler', hikayeler: 'Hikayeler', duyurular: 'Duyurular',
}

const FALLBACK: Record<string, { title: string; author: string; published_at: string; category: string; image: string; content: string }> = {
  'evde-mukemmel-su-boregi-yapmanin-sirlari': {
    title: 'Evde Mükemmel Su Böreği Yapmanın Sırları', author: 'OKLAVİA Mutfağı', published_at: '2025-02-15', category: 'tarifler', image: '/images/products/su-boregi-2.jpg',
    content: '<p>Su böreği, Türk mutfağının en sevilen ve en zahmetli lezzetlerinden biridir. Ancak doğru tekniklerle evde de mükemmel su böreği yapabilirsiniz.</p><h2>Hamurun Hazırlanması</h2><p>Su böreğinin temeli, ince ve elastik bir hamurdur. Un, su, yumurta ve bir tutam tuz ile yoğurulan hamur, en az 30 dakika dinlendirilmelidir.</p><h2>Açma Tekniği</h2><p>Hamuru açarken oklava ile düzenli baskı uygulayın. Her seferinde hamuru çeyrek tur çevirerek açın ki yuvarlak kalmasını sağlayın.</p><h2>Haşlama İşlemi</h2><p>Su böreğini özel kılan haşlama adımıdır. Kaynar suda 2-3 dakika haşlanan yufkalar, buzlu suya alınır.</p><h2>OKLAVİA Farkı</h2><p>Eğer bu zahmete girmek istemiyorsanız, OKLAVİA\'nın el yapımı su böreğini dondurulmuş veya sıcak olarak sipariş edebilirsiniz.</p>',
  },
  'turk-kahvesinin-tarihi-ve-kulturel-onemi': {
    title: 'Türk Kahvesinin Tarihi ve Kültürel Önemi', author: 'OKLAVİA', published_at: '2025-02-01', category: 'hikayeler', image: '/images/blog/turk-kahvesi.jpg',
    content: '<p>Türk kahvesi, sadece bir içecek değil; yüzyıllardır süren bir kültürel mirastır.</p><h2>Tarihi</h2><p>Türk kahvesinin serüveni 16. yüzyılda Osmanlı İmparatorluğu döneminde başlar.</p><h2>OKLAVİA Türk Kahvesi</h2><p>OKLAVİA olarak, özenle seçilmiş Arabica çekirdeklerini geleneksel yöntemlerle kavurup öğütüyoruz.</p>',
  },
  'oklavia-artik-tum-turkiyeye-teslimat-yapiyor': {
    title: 'OKLAVİA Artık Tüm Türkiye\'ye Teslimat Yapıyor!', author: 'OKLAVİA', published_at: '2025-01-20', category: 'duyurular', image: '/images/general/borek-melting.jpg',
    content: '<p>Büyük heyecanla duyuruyoruz: OKLAVİA artık tüm Türkiye\'ye soğuk zincir garantisiyle teslimat yapıyor!</p><h2>Soğuk Zincir Teslimat</h2><p>Frigolu araçlarımız sayesinde dondurulmuş ürünlerimiz, üretim tesisimizden kapınıza kadar soğuk zincir kırılmadan ulaştırılır.</p>',
  },
  'fistikli-baklava-antepten-sofralariniza': {
    title: 'Fıstıklı Baklava: Antep\'ten Sofralarınıza', author: 'OKLAVİA Mutfağı', published_at: '2025-01-10', category: 'hikayeler', image: '/images/general/baklava-ottoman.jpg',
    content: '<p>Fıstıklı baklava, Türk mutfağının en görkemli tatlılarından biridir.</p><h2>Antep Fıstığının Önemi</h2><p>Baklavanın kalitesini belirleyen en önemli faktör fıstıktır. OKLAVİA olarak, baklavalarımızda yalnızca birinci sınıf Antep fıstığı kullanıyoruz.</p><h2>OKLAVİA Baklavası</h2><p>Usta eller tarafından geleneksel yöntemlerle hazırlanan baklavamız, dondurulmuş olarak kapınıza ulaştırılır.</p>',
  },
}

export default function BlogDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<{ title: string; author: string; published_at: string; category: string; image: string; content: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      try {
        const sb = getSupabase(); if (!sb) throw new Error('no sb'); const { data, error } = await sb
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .eq('published', true)
          .single()

        if (data && !error) {
          setPost({ title: data.title, author: data.author, published_at: data.published_at, category: data.category, image: data.cover_image || '/images/general/baklava-ottoman.jpg', content: data.content })
        } else if (FALLBACK[slug]) {
          setPost(FALLBACK[slug])
        }
      } catch {
        if (FALLBACK[slug]) setPost(FALLBACK[slug])
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative w-10 h-10 rounded-full border-2 border-gold-500/10 border-t-gold-500 animate-spin" />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative text-center">
          <h1 className="font-heading font-black text-6xl text-gold-gradient mb-4">404</h1>
          <p className="text-cream-200/50 mb-6">Bu blog yazısı bulunamadı.</p>
          <Link href="/blog" className="btn-gold rounded-full px-6 py-3 text-sm">Blog&apos;a Dön</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-10 sm:py-14 relative">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <Link href="/blog" className="inline-flex items-center gap-2 text-cream-200/40 hover:text-gold-400 text-sm mb-8 transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Blog&apos;a Dön
          </Link>
        </AnimateIn>

        <AnimateIn>
          <div className="aspect-[16/8] rounded-2xl overflow-hidden mb-8 relative">
            <Image src={post.image} alt={post.title} fill className="object-cover" sizes="100vw" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-navy-900/60 to-transparent" />
          </div>
        </AnimateIn>

        <AnimateIn>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className={`px-3 py-1 rounded-full text-[11px] font-semibold border ${categoryColors[post.category] || 'bg-gold-500/10 text-gold-400 border-gold-500/15'}`}>
              <Tag size={10} className="inline mr-1" />
              {categoryLabels[post.category] || post.category}
            </span>
            <span className="text-cream-200/30 text-sm flex items-center gap-1.5">
              <Calendar size={12} />
              {new Date(post.published_at).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="text-cream-200/20">•</span>
            <span className="text-cream-200/30 text-sm">{post.author}</span>
          </div>
        </AnimateIn>

        <AnimateIn>
          <h1 className="font-heading font-black text-3xl sm:text-4xl text-cream-50 mb-3 leading-tight">{post.title}</h1>
          <div className="w-12 h-px bg-gold-500/30 mb-8" />
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <article
            className="prose prose-invert prose-gold max-w-none
              [&_p]:text-cream-200/55 [&_p]:text-[15px] [&_p]:leading-[1.9] [&_p]:mb-5
              [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-xl [&_h2]:text-cream-50 [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:border-l-2 [&_h2]:border-gold-500/30 [&_h2]:pl-4
              [&_strong]:text-gold-400 [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div className="mt-12 pt-6 border-t border-gold-500/8">
            <div className="card-premium rounded-2xl p-6 sm:p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-cream-50 mb-2">Bu yazıyı beğendiniz mi?</h3>
              <p className="text-cream-200/40 text-sm mb-6">OKLAVİA ürünlerini keşfedin.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link href="/urunler" className="btn-gold rounded-full px-6 py-3 text-sm">Ürünleri İncele</Link>
                <Link href="/blog" className="btn-outline-gold rounded-full px-6 py-3 text-sm">Diğer Yazılar</Link>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </div>
  )
}
