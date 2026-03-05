'use client'

import { ShoppingBag, Phone } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import { OttomanMedallion, OttomanStar } from '@/components/ui/OttomanMotifs'
import AnimateIn from '@/components/ui/AnimateIn'

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
              className="btn-whatsapp rounded-full px-8 py-4 text-base flex items-center gap-3 shadow-lg shadow-green-500/20"
            >
              <ShoppingBag size={20} />
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
