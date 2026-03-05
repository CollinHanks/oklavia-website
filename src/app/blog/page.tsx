'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight, Tag, BookOpen } from 'lucide-react'
import { OttomanDivider, OttomanTulip, OttomanMedallion, OttomanRumi } from '@/components/ui/OttomanMotifs'
import AnimateIn from '@/components/ui/AnimateIn'
import { getSupabase, type BlogPost } from '@/lib/supabase'

const FALLBACK_POSTS = [
  { id: '1', title: 'Evde Mükemmel Su Böreği Yapmanın Sırları', slug: 'evde-mukemmel-su-boregi-yapmanin-sirlari', excerpt: 'Hamur yoğurma, oklavayla açma, haşlama ve katmerleme tekniklerini adım adım anlatıyoruz. Ustalarımızın püf noktalarıyla evde profesyonel su böreği yapın.', category: 'tarifler' as const, author: 'OKLAVİA Mutfağı', published_at: '2025-02-15', cover_image: '/images/products/su-boregi-2.jpg' },
  { id: '2', title: 'Türk Kahvesinin Tarihi ve Kültürel Önemi', slug: 'turk-kahvesinin-tarihi-ve-kulturel-onemi', excerpt: 'Osmanlı sarayından kahvehanelere, UNESCO mirasından modern sofralara: 500 yıllık Türk kahvesi geleneğinin büyüleyici hikayesi ve kültürel önemi.', category: 'hikayeler' as const, author: 'OKLAVİA', published_at: '2025-02-01', cover_image: '/images/blog/turk-kahvesi.jpg' },
  { id: '3', title: 'OKLAVİA Artık Tüm Türkiye\'ye Teslimat Yapıyor!', slug: 'oklavia-artik-tum-turkiyeye-teslimat-yapiyor', excerpt: 'İstanbul\'dan Hakkari\'ye 81 ile soğuk zincir garantisiyle teslimat! Frigolu araçlarımızla ürünleriniz -18°C\'de kapınıza kadar. Teslimat süreleri ve sipariş detayları.', category: 'duyurular' as const, author: 'OKLAVİA', published_at: '2025-01-20', cover_image: '/images/general/borek-melting.jpg' },
  { id: '4', title: 'Fıstıklı Baklava: Antep\'ten Sofralarınıza', slug: 'fistikli-baklava-antepten-sofralariniza', excerpt: 'Fıstıklı baklavanın yüzyıllık serüveni, Osmanlı sarayından günümüze uzanan hikayesi ve Antep fıstığının baklavadaki önemi.', category: 'hikayeler' as const, author: 'OKLAVİA Mutfağı', published_at: '2025-01-10', cover_image: '/images/general/baklava-ottoman.jpg' },
  { id: '5', title: 'Tereyağlı Su Böreği Neden Bu Kadar Seviliyor?', slug: 'tereyagli-su-boregi-neden-bu-kadar-seviliyor', excerpt: 'Klasik su böreğinin tereyağıyla buluşunca nasıl bambaşka bir lezzete dönüştüğünü, hangi tereyağının kullanılması gerektiğini ve en iyi servis önerilerini keşfedin.', category: 'tarifler' as const, author: 'OKLAVİA Mutfağı', published_at: '2025-03-01', cover_image: '/images/products/tereyagli-su-boregi.jpg' },
  { id: '6', title: 'Dondurulmuş Börek Nasıl Pişirilir? Püf Noktaları', slug: 'dondurulmus-borek-nasil-pisirilir', excerpt: 'Dondurulmuş böreği mükemmel pişirmenin 5 altın kuralı: çözdürme, fırın sıcaklığı, yumurta sürme, süre kontrolü ve dinlendirme. Pratik ipuçları.', category: 'tarifler' as const, author: 'OKLAVİA Mutfağı', published_at: '2025-02-20', cover_image: '/images/products/su-boregi.jpg' },
]

const categories = [
  { value: 'all', label: 'Tümü' },
  { value: 'tarifler', label: 'Tarifler' },
  { value: 'hikayeler', label: 'Hikayeler' },
  { value: 'duyurular', label: 'Duyurular' },
]

const categoryColors: Record<string, string> = {
  tarifler: 'bg-orange-500/10 text-orange-400 border-orange-500/15',
  hikayeler: 'bg-blue-500/10 text-blue-400 border-blue-500/15',
  duyurular: 'bg-green-500/10 text-green-400 border-green-500/15',
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [posts, setPosts] = useState(FALLBACK_POSTS)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const sb = getSupabase(); if (!sb) throw new Error('no sb'); const { data, error } = await sb
          .from('blog_posts')
          .select('*')
          .eq('published', true)
          .order('published_at', { ascending: false })

        if (data && data.length > 0 && !error) {
          // Map fallback images for posts without cover_image
          const imageMap: Record<string, string> = {
            'evde-mukemmel-su-boregi-yapmanin-sirlari': '/images/products/su-boregi-2.jpg',
            'turk-kahvesinin-tarihi-ve-kulturel-onemi': '/images/blog/turk-kahvesi.jpg',
            'oklavia-artik-tum-turkiyeye-teslimat-yapiyor': '/images/general/borek-melting.jpg',
            'fistikli-baklava-antepten-sofralariniza': '/images/general/baklava-ottoman.jpg',
            'tereyagli-su-boregi-neden-bu-kadar-seviliyor': '/images/products/tereyagli-su-boregi.jpg',
            'dondurulmus-borek-nasil-pisirilir': '/images/products/su-boregi.jpg',
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const postsWithImages = data.map((p: any) => ({
            ...p,
            cover_image: p.cover_image || imageMap[p.slug] || '/images/general/baklava-pyramid.jpg',
          }))
          setPosts(postsWithImages as typeof FALLBACK_POSTS)
        }
      } catch {
        // Use fallback
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const filteredPosts = activeCategory === 'all' ? posts : posts.filter(p => p.category === activeCategory)

  return (
    <div className="py-10 sm:py-14 relative">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 cini-pattern-bg" />

      <div className="absolute top-20 right-8 hidden lg:block">
        <OttomanRumi size={80} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <OttomanTulip size={16} className="opacity-40" />
            <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-gold-500/15 bg-gold-500/3">
              <BookOpen size={12} className="text-gold-500/60" />
              <span className="text-gold-500/70 text-xs font-medium tracking-[0.2em] uppercase">Blog</span>
            </div>
            <OttomanTulip size={16} className="opacity-40 -scale-x-100" />
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-cream-50 mb-3">
            Tarifler, Hikayeler & <span className="text-gold-gradient">Duyurular</span>
          </h1>
          <OttomanDivider />
        </AnimateIn>

        <AnimateIn className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button key={cat.value} onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.value
                  ? 'bg-gold-500/15 text-gold-300 border border-gold-400/50 shadow-md shadow-gold-500/5'
                  : 'border border-gold-500/10 text-cream-200/50 hover:border-gold-500/25 hover:text-gold-400'
              }`}
            >{cat.label}</button>
          ))}
        </AnimateIn>

        {loading ? (
          <div className="text-center py-16">
            <div className="w-10 h-10 mx-auto rounded-full border-2 border-gold-500/10 border-t-gold-500 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredPosts.map((post, i) => (
              <AnimateIn key={post.id} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="card-premium rounded-2xl overflow-hidden h-full flex flex-col">
                    <div className="aspect-[16/9] bg-linear-to-br from-navy-700/80 to-navy-800 relative overflow-hidden">
                      <Image src={post.cover_image || '/images/general/baklava-ottoman.jpg'} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-semibold border ${categoryColors[post.category] || 'bg-gold-500/10 text-gold-400 border-gold-500/15'}`}>
                          <Tag size={9} className="inline mr-1" />
                          {categories.find(c => c.value === post.category)?.label}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-navy-900/60 to-transparent" />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-cream-200/30 text-xs mb-3">
                        <Calendar size={11} />
                        {new Date(post.published_at).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                        <span className="text-gold-500/20">•</span>
                        <span>{post.author}</span>
                      </div>
                      <h2 className="font-heading font-bold text-lg text-cream-50 mb-2 group-hover:text-gold-300 transition-colors line-clamp-2">{post.title}</h2>
                      <div className="w-6 h-px bg-gold-500/15 mb-3" />
                      <p className="text-cream-200/40 text-[13px] leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-gold-400/70 text-sm font-medium group-hover:text-gold-300 group-hover:gap-2.5 transition-all">
                        Devamını Oku <ArrowRight size={14} />
                      </span>
                    </div>
                  </article>
                </Link>
              </AnimateIn>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
