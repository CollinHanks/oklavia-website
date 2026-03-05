'use client'

import { Shield, Leaf, Heart, Award, Truck, Users } from 'lucide-react'
import { OttomanDivider, OttomanTulip, OttomanMedallion, OttomanStar, OttomanRumi } from '@/components/ui/OttomanMotifs'
import AnimateIn from '@/components/ui/AnimateIn'

const features = [
  { icon: Heart, title: 'El Yapımı Üretim', description: 'Fabrika üretimi değil, gerçek el emeği. Her su böreği yufkası oklavayla tek tek açılır, her baklava katmanı elle serilir. Annelerimizden ve ninelerimizden öğrendiğimiz tariflere sadık kalarak, sevgiyle üretiyoruz.', accent: 'from-rose-500/10' },
  { icon: Leaf, title: '%100 Doğal Malzeme', description: 'Ürünlerimizde katkı maddesi, koruyucu, yapay aroma veya renklendirici kesinlikle bulunmaz. Taze süzme peynir, gerçek tereyağı, birinci sınıf Antep fıstığı — sadece doğanın sunduğu en kaliteli malzemeler.', accent: 'from-emerald-500/10' },
  { icon: Shield, title: 'Hijyen & Gıda Güvenliği', description: 'ISO standartlarına uygun üretim tesisimizde her aşama kontrol altındadır. Hammadde girişinden ambalajlamaya kadar tüm süreçlerde hijyen protokollerimiz titizlikle uygulanır.', accent: 'from-blue-500/10' },
  { icon: Award, title: '65 Yıllık Gelenek', description: '1960\'dan bu yana üç nesil boyunca aynı tariflerle üretim yapıyoruz. Anadolu mutfağının yüzyıllık birikimini modern standartlarla harmanlayarak sofralarınıza taşıyoruz. Her lokmada tarih var.', accent: 'from-amber-500/10' },
  { icon: Truck, title: 'Soğuk Zincir Teslimat', description: 'Frigolu soğutmalı araçlarımızla İstanbul\'dan tüm Türkiye\'nin 81 iline teslimat yapıyoruz. Ürünleriniz üretim tesisimizden evinize kadar -18°C\'de, soğuk zincir asla kırılmadan ulaşır.', accent: 'from-cyan-500/10' },
  { icon: Users, title: 'Bireysel & Kurumsal Hizmet', description: 'Evlerinize tek tepsi börek göndermekten, restoran ve otellere düzenli toptan teslimat yapmaya kadar her ölçekte hizmet veriyoruz. B2B müşterilerimize özel fiyatlandırma ve ödeme koşulları sunuyoruz.', accent: 'from-purple-500/10' },
]

export default function WhyOklavia() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-navy-900/60 via-navy-900/40 to-navy-950" />
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

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
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
            Neden binlerce aile ve işletme OKLAVİA'yı tercih ediyor? İşte 65 yıldır değişmeyen altı sebebimiz
          </p>
          <OttomanDivider />
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimateIn key={feature.title} delay={i * 0.08}>
              <div className={`group relative rounded-2xl border border-gold-500/8 bg-linear-to-br ${feature.accent} to-navy-900/50 p-8 h-full hover:border-gold-500/20 transition-all duration-500 overflow-hidden`}>
                {/* Hover glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/3 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 mb-6 rounded-xl bg-linear-to-br from-gold-500/15 to-gold-500/5 flex items-center justify-center border border-gold-500/10 group-hover:border-gold-500/25 group-hover:shadow-lg group-hover:shadow-gold-500/5 transition-all duration-500">
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
