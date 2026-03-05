'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Snowflake, Flame } from 'lucide-react'
import { PRODUCTS, CONTACT } from '@/lib/constants'
import { OttomanDivider, OttomanCorner, OttomanTulip } from '@/components/ui/OttomanMotifs'
import AnimateIn from '@/components/ui/AnimateIn'

const productVisuals: Record<string, { image: string; gradient: string }> = {
  'su-boregi': { image: '/images/products/su-boregi.jpg', gradient: 'from-amber-900/30 via-navy-800 to-navy-900' },
  'tereyagli-su-boregi': { image: '/images/products/tereyagli-su-boregi.jpg', gradient: 'from-yellow-900/20 via-navy-800 to-navy-900' },
  'fistikli-baklava': { image: '/images/products/fistikli-baklava.jpg', gradient: 'from-emerald-900/20 via-navy-800 to-navy-900' },
  'turk-kahvesi': { image: '/images/products/turk-kahvesi.jpg', gradient: 'from-amber-950/30 via-navy-800 to-navy-900' },
}

export default function FeaturedProducts() {
  return (
    <section className="py-16 relative">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />
      <div className="absolute inset-0 ottoman-pattern-bg" />

      {/* Side accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold-500/2 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-navy-600/10 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateIn className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <OttomanTulip size={22} className="opacity-25" />
            <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-gold-500/15 bg-gold-500/3">
              <span className="text-gold-500/70 text-xs font-medium tracking-[0.2em] uppercase">Ürünlerimiz</span>
            </div>
            <OttomanTulip size={20} className="opacity-40 -scale-x-100" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-cream-50 mb-2">
            Geleneksel <span className="text-gold-gradient">Lezzetler</span>
          </h2>
          <p className="text-cream-200/40 text-sm max-w-lg mx-auto mt-4 mb-6">
            El yapımı su böreği, tereyağlı su böreği, fıstıklı baklava ve Türk kahvesi — hiçbirinde katkı maddesi yok, hepsi gerçek malzemeyle hazırlanıyor
          </p>
          <OttomanDivider />
        </AnimateIn>

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((product, i) => {
            const visual = productVisuals[product.id] || { image: '', gradient: 'from-navy-700 to-navy-900' }
            return (
              <AnimateIn key={product.id} delay={i * 0.12} className="group">
                <div className="relative h-full">
                  {/* Card */}
                  <div className="card-premium rounded-2xl overflow-hidden h-full flex flex-col relative">
                    {/* Ottoman corner decorations */}
                    <div className="absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <OttomanCorner position="top-left" className="w-10 h-10" />
                    </div>
                    <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <OttomanCorner position="top-right" className="w-10 h-10" />
                    </div>
                    <div className="absolute bottom-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <OttomanCorner position="bottom-left" className="w-10 h-10" />
                    </div>
                    <div className="absolute bottom-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <OttomanCorner position="bottom-right" className="w-10 h-10" />
                    </div>

                    {/* Image area */}
                    <div className={`aspect-[4/3] bg-gradient-to-br ${visual.gradient} relative overflow-hidden`}>
                      {/* Subtle pattern */}

                      {/* Glow */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold-500/6 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 group-hover:bg-gold-500/[0.1] transition-all duration-700" />

                      {/* Product image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {visual.image ? (
                          <Image src={visual.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-navy-700 to-navy-800" />
                        )}
                      </div>

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        {product.frozen && (
                          <span className="flex items-center gap-1 bg-navy-950/70 backdrop-blur-sm text-cyan-400 text-[10px] px-2.5 py-1 rounded-full border border-cyan-500/20">
                            <Snowflake size={10} /> Dondurulmuş
                          </span>
                        )}
                        {product.hot && (
                          <span className="flex items-center gap-1 bg-navy-950/70 backdrop-blur-sm text-orange-400 text-[10px] px-2.5 py-1 rounded-full border border-orange-500/20">
                            <Flame size={10} /> Sıcak
                          </span>
                        )}
                      </div>

                      {/* Bottom gradient */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-900/80 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-heading font-bold text-lg text-cream-50 mb-2 group-hover:text-gold-300 transition-colors duration-300">
                        {product.name}
                      </h3>

                      {/* Gold separator */}
                      <div className="w-8 h-px bg-gold-500/30 mb-3 group-hover:w-12 transition-all duration-500" />

                      <p className="text-cream-200/45 text-[13px] leading-relaxed mb-5 flex-1">
                        {product.shortDescription}
                      </p>

                      {/* Size tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {product.sizes.slice(0, 3).map((size) => (
                          <span key={size.value} className="px-2 py-0.5 rounded text-[10px] border border-gold-500/10 text-cream-200/40 bg-gold-500/3">
                            {size.weight}
                          </span>
                        ))}
                        {product.sizes.length > 3 && (
                          <span className="px-2 py-0.5 rounded text-[10px] text-gold-500/50">+{product.sizes.length - 3}</span>
                        )}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-2">
                        <a
                          href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`Merhaba, ${product.name} hakkında bilgi almak istiyorum.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 btn-gold rounded-lg px-3 py-2.5 text-[11px] text-center font-semibold"
                        >
                          Sipariş Ver
                        </a>
                        <Link
                          href={`/urunler#${product.slug}`}
                          className="btn-outline-gold rounded-lg px-3 py-2.5 text-[11px] flex items-center gap-1 font-medium"
                        >
                          Detay <ArrowRight size={11} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            )
          })}
        </div>

        {/* View all link */}
        <AnimateIn delay={0.5} className="text-center mt-10">
          <Link href="/urunler" className="group inline-flex items-center gap-3 text-gold-400/80 hover:text-gold-300 font-medium transition-all duration-300">
            <span className="text-sm">Tüm Ürünleri Görüntüle</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </AnimateIn>
      </div>
    </section>
  )
}
