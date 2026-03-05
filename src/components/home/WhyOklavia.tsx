'use client'

import { Shield, Leaf, Heart, Award, Truck, Users } from 'lucide-react'
import { OttomanDivider, OttomanTulip, OttomanMedallion, OttomanStar, OttomanRumi } from '@/components/ui/OttomanMotifs'
import AnimateIn from '@/components/ui/AnimateIn'

const features = [
  { icon: Heart, title: 'El Yapımı Üretim', description: 'Her ürünümüz geleneksel yöntemlerle, usta ellerde özenle hazırlanır. Makineleşmiş üretimden uzak, annelerimizden öğrendiğimiz tariflerle.', accent: 'from-rose-500/10' },
  { icon: Leaf, title: 'Doğal Malzemeler', description: 'Katkı maddesi kullanmadan, en kaliteli ve taze malzemelerle üretim yapıyoruz. Doğallığın tadına varın.', accent: 'from-emerald-500/10' },
  { icon: Shield, title: 'Hijyen Garantisi', description: 'Gıda güvenliği standartlarına uygun, hijyenik üretim tesislerinde her aşama kontrollü olarak hazırlanır.', accent: 'from-blue-500/10' },
  { icon: Award, title: 'Geleneksel Tarifler', description: 'Anadolu\'nun yüzyıllık tariflerini koruyarak modern sofralara sunuyoruz. Her lokmada gelenek.', accent: 'from-amber-500/10' },
  { icon: Truck, title: 'Soğuk Zincir Teslimat', description: 'Frigolu araçlarla tüm Türkiye\'ye soğuk zincir garantili teslimat. Lezzet kapınıza kadar.', accent: 'from-cyan-500/10' },
  { icon: Users, title: 'Kurumsal & Bireysel', description: 'Bireysel müşterilerden restoranlar ve kafelere, herkese özel çözümler sunuyoruz.', accent: 'from-purple-500/10' },
]

export default function WhyOklavia() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-navy-950" />
      <div className="absolute inset-0 cini-pattern-bg" />

      {/* Decorative motif mix */}
      <div className="absolute top-12 right-8 hidden lg:block">
        <OttomanMedallion size={140} />
      </div>
      <div className="absolute bottom-16 left-8 hidden lg:block">
        <OttomanStar size={80} />
      </div>
      <div className="absolute top-1/2 right-[3%] hidden xl:block">
        <OttomanRumi size={55} />
      </div>

      {/* Large decorative circle */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-gold-500/[0.04]" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-gold-500/[0.03]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-gold-500/2 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <OttomanTulip size={16} className="opacity-40" />
            <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-gold-500/15 bg-gold-500/3">
              <span className="text-gold-500/70 text-xs font-medium tracking-[0.2em] uppercase">Neden Biz?</span>
            </div>
            <OttomanTulip size={16} className="opacity-40 -scale-x-100" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-cream-50 mb-2">
            Neden <span className="text-gold-gradient">OKLAVİA?</span>
          </h2>
          <p className="text-cream-200/40 text-sm max-w-lg mx-auto mt-4 mb-6">
            Kalite, gelenek ve güven — her ürünümüzde bu üç değeri bir arada sunuyoruz
          </p>
          <OttomanDivider />
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimateIn key={feature.title} delay={i * 0.08}>
              <div className={`group relative rounded-2xl border border-gold-500/8 bg-gradient-to-br ${feature.accent} to-navy-900/50 p-8 h-full hover:border-gold-500/20 transition-all duration-500 overflow-hidden`}>
                {/* Hover glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/3 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-gold-500/15 to-gold-500/5 flex items-center justify-center border border-gold-500/10 group-hover:border-gold-500/25 group-hover:shadow-lg group-hover:shadow-gold-500/5 transition-all duration-500">
                    <feature.icon size={26} className="text-gold-400" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-lg text-cream-50 mb-3 group-hover:text-gold-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <div className="w-6 h-px bg-gold-500/20 mb-3 group-hover:w-10 transition-all duration-500" />
                  <p className="text-cream-200/45 text-[13px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
