'use client'

import { Phone } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import { OttomanMedallion, OttomanStar } from '@/components/ui/OttomanMotifs'
import AnimateIn from '@/components/ui/AnimateIn'

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function CTASection() {
  return (
    <section className="py-14 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-r from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0 cini-pattern-bg" />

      <div className="absolute top-2 left-6 hidden md:block">
        <OttomanStar size={70} />
      </div>
      <div className="absolute bottom-2 right-6 hidden md:block">
        <OttomanMedallion size={80} />
      </div>

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-gold-500/5 rounded-full blur-[100px]" />

      {/* Top & bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimateIn>
          {/* Ornamental top */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-linear-to-r from-transparent to-gold-500/30" />
            <div className="w-2 h-2 rounded-full bg-gold-500/25" />
            <div className="w-12 h-px bg-linear-to-l from-transparent to-gold-500/30" />
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-cream-50 mb-4">
            Geleneksel Lezzetler{' '}
            <span className="text-gold-gradient">Kapınızda</span>
          </h2>
          <p className="text-cream-200/50 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            İstanbul Başakşehir&apos;deki üretim tesisimizden, frigolu soğutmalı araçlarımızla 81 ile
            soğuk zincir teslimat yapıyoruz. WhatsApp&apos;tan yazın veya bizi arayın, aynı gün siparişinizi hazırlayalım.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=Merhaba, sipariş vermek istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-4 text-base flex items-center gap-3 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(212,175,55,0.4)]"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #B8962E)',
                boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
              }}
            >
              <WhatsAppIcon size={20} />
              WhatsApp ile Sipariş Ver
            </a>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="btn-outline-gold rounded-full px-8 py-4 text-base flex items-center gap-3"
            >
              <Phone size={18} />
              {CONTACT.phone}
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}