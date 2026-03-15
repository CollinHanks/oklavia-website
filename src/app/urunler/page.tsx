'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingBag, Info, Snowflake, Flame, ChevronDown, AlertTriangle, Thermometer } from 'lucide-react'
import { PRODUCTS, CONTACT, type Product } from '@/lib/constants'
import { OttomanDivider, OttomanCorner, OttomanTulip } from '@/components/ui/OttomanMotifs'
import AnimateIn from '@/components/ui/AnimateIn'

const productImages: Record<string, string> = {
  'su-boregi': '/images/products/su-boregi.jpg',
  'tereyagli-su-boregi': '/images/products/tereyagli-su-boregi.jpg',
  'fistikli-baklava': '/images/products/fistikli-baklava.jpg',
  'turk-kahvesi': '/images/products/turk-kahvesi.jpg',
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]?.value || '')
  const [customAmount, setCustomAmount] = useState('')
  const [showDetails, setShowDetails] = useState(false)

  const getOrderText = () => {
    const size = product.sizes.find(s => s.value === selectedSize)
    const sizeText = customAmount
      ? `Özel miktar: ${customAmount}`
      : size ? `${size.label} (${size.weight})` : ''
    return `Merhaba, ${product.name} sipariş vermek istiyorum.\n\nMiktar: ${sizeText}`
  }

  const productImage = productImages[product.id] || ''

  return (
    <AnimateIn delay={index * 0.1}>
      <div id={product.slug} className="scroll-mt-28">
        <div className="card-premium rounded-3xl overflow-hidden relative group">
          {/* Ottoman corners */}
          <div className="absolute top-4 left-4 z-10 opacity-30 group-hover:opacity-60 transition-opacity duration-700">
            <OttomanCorner position="top-left" className="w-12 h-12" />
          </div>
          <div className="absolute top-4 right-4 z-10 opacity-30 group-hover:opacity-60 transition-opacity duration-700">
            <OttomanCorner position="top-right" className="w-12 h-12" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="aspect-video sm:aspect-4/3 lg:aspect-auto lg:min-h-100 bg-linear-to-br from-navy-700/80 via-navy-800 to-navy-900 relative overflow-hidden">
              {/* Center glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gold-500/6 rounded-full blur-[60px] group-hover:w-64 group-hover:h-64 group-hover:bg-gold-500/10 transition-all duration-700" />

              {/* Product image */}
              <div className="absolute inset-0 flex items-center justify-center">
                {productImage ? (
                  <Image src={productImage} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 1024px) 100vw, 50vw" />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-navy-700 to-navy-800" />
                )}
              </div>

              {/* Badges */}
              <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
                {product.frozen && (
                  <span className="flex items-center gap-1.5 bg-navy-950/70 backdrop-blur-sm text-cyan-400 text-xs px-3 py-1.5 rounded-full border border-cyan-500/20">
                    <Snowflake size={12} /> Dondurulmuş
                  </span>
                )}
                {product.hot && (
                  <span className="flex items-center gap-1.5 bg-navy-950/70 backdrop-blur-sm text-orange-400 text-xs px-3 py-1.5 rounded-full border border-orange-500/20">
                    <Flame size={12} /> Sıcak Seçenek
                  </span>
                )}
              </div>

              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-navy-900/60 to-transparent" />
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              {/* Product number badge */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 text-xs font-bold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="w-8 h-px bg-gold-500/20" />
              </div>

              <h2 className="font-heading font-black text-2xl sm:text-3xl text-cream-50 mb-3 tracking-tight">
                {product.name}
              </h2>

              <div className="w-10 h-px bg-gold-500/30 mb-4" />

              <p className="text-cream-200/50 text-sm leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Size selector */}
              <div className="mb-5">
                <p className="text-gold-400/70 text-[11px] font-semibold uppercase tracking-[0.15em] mb-3">
                  Miktar Seçin
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.value}
                      onClick={() => { setSelectedSize(size.value); setCustomAmount('') }}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${selectedSize === size.value && !customAmount
                          ? 'bg-gold-500/15 border-gold-400/60 text-gold-300 border shadow-md shadow-gold-500/5'
                          : 'border border-gold-500/10 text-cream-200/50 hover:border-gold-500/25 hover:text-gold-400 hover:bg-gold-500/3'
                        }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom amount */}
              {product.hasManualInput && (
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder={product.manualInputLabel || 'Özel miktar giriniz...'}
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setSelectedSize('') }}
                    className="w-full px-4 py-3 rounded-xl bg-navy-800/40 border border-gold-500/10 text-cream-100 text-sm placeholder:text-cream-200/25 focus:outline-none focus:border-gold-500/40 focus:bg-navy-800/60 transition-all duration-300"
                  />
                </div>
              )}

              {/* Order button — GOLD */}
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(getOrderText())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl px-6 py-3.5 text-sm flex items-center justify-center gap-2 mb-5 text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(212,175,55,0.4)]"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37, #B8962E)',
                  boxShadow: '0 4px 20px rgba(212, 175, 55, 0.2)',
                }}
              >
                <WhatsAppIcon size={18} />
                WhatsApp ile Sipariş Ver
              </a>

              {/* Expandable details */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center justify-between w-full py-3.5 border-t border-gold-500/8 text-cream-200/40 text-sm hover:text-gold-400 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Info size={14} />
                  Ürün Bilgileri & Alerjenler
                </span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`} />
              </button>

              {showDetails && (
                <div className="pt-4 space-y-5 text-sm animate-fade-in">
                  {product.ingredients.length > 0 && (
                    <div>
                      <p className="text-gold-400/60 font-semibold text-[11px] uppercase tracking-[0.15em] mb-2 flex items-center gap-1.5">
                        İçindekiler
                      </p>
                      <p className="text-cream-200/45 text-[13px] leading-relaxed">{product.ingredients.join(', ')}</p>
                    </div>
                  )}
                  {product.allergens.length > 0 && (
                    <div>
                      <p className="text-gold-400/60 font-semibold text-[11px] uppercase tracking-[0.15em] mb-2 flex items-center gap-1.5">
                        <AlertTriangle size={11} /> Alerjen Bilgisi
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {product.allergens.map((a) => (
                          <span key={a} className="px-2.5 py-1 rounded-lg bg-red-500/8 text-red-400/70 text-[11px] border border-red-500/10 font-medium">
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div>
                    <p className="text-gold-400/60 font-semibold text-[11px] uppercase tracking-[0.15em] mb-2 flex items-center gap-1.5">
                      <Thermometer size={11} /> Saklama Koşulları
                    </p>
                    <p className="text-cream-200/45 text-[13px] leading-relaxed">{product.storageInfo}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimateIn>
  )
}

export default function UrunlerPage() {
  return (
    <div className="py-16 sm:py-14 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-950" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <OttomanTulip size={16} className="opacity-40" />
            <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-gold-500/15 bg-gold-500/3">
              <span className="text-gold-500/70 text-xs font-medium tracking-[0.2em] uppercase">Ürünlerimiz</span>
            </div>
            <OttomanTulip size={16} className="opacity-40 -scale-x-100" />
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-cream-50 mb-3">
            Geleneksel <span className="text-gold-gradient">Lezzetlerimiz</span>
          </h1>
          <p className="text-cream-200/40 text-sm max-w-xl mx-auto mt-4 mb-6">
            Tüm ürünlerimiz el yapımı, katkı maddesi içermez ve soğuk zincir garantisiyle kapınıza kadar ulaştırılır.
          </p>
          <OttomanDivider />
        </AnimateIn>

        {/* Product cards */}
        <div className="space-y-7">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateIn className="text-center mt-14">
          <div className="card-premium rounded-3xl p-10 sm:p-14 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gold-500/4 rounded-full blur-[60px]" />
            <div className="relative">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-cream-50 mb-3">
                Özel Sipariş mi Vermek İstiyorsunuz?
              </h2>
              <p className="text-cream-200/40 text-sm mb-8 max-w-lg mx-auto">
                Farklı gramaj, özel ambalaj veya toptan sipariş için bizimle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=Merhaba, özel sipariş vermek istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-8 py-3.5 text-sm flex items-center justify-center gap-2 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(212,175,55,0.4)]"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37, #B8962E)',
                    boxShadow: '0 4px 20px rgba(212, 175, 55, 0.2)',
                  }}
                >
                  <WhatsAppIcon size={18} />
                  WhatsApp ile Yazın
                </a>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="btn-outline-gold rounded-full px-8 py-3.5 text-sm flex items-center justify-center gap-2"
                >
                  Bizi Arayın
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </div>
  )
}