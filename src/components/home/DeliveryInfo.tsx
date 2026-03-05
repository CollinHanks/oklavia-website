'use client'

import { Truck, Snowflake, MapPin, Clock, Package, ShieldCheck } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import { OttomanDivider, OttomanTulip } from '@/components/ui/OttomanMotifs'
import AnimateIn from '@/components/ui/AnimateIn'

const deliveryFeatures = [
  { icon: MapPin, title: '81 İl', desc: 'Tüm Türkiye\'ye teslimat', color: 'text-blue-400', bg: 'from-blue-500/10' },
  { icon: Clock, title: '1-3 Gün', desc: 'Hızlı teslimat süresi', color: 'text-gold-400', bg: 'from-gold-500/10' },
  { icon: Snowflake, title: 'Soğuk Zincir', desc: 'Frigolu araç garantisi', color: 'text-cyan-400', bg: 'from-cyan-500/10' },
  { icon: Package, title: 'Özel Ambalaj', desc: 'Koruyucu paketleme', color: 'text-emerald-400', bg: 'from-emerald-500/10' },
  { icon: Truck, title: 'İstanbul Çıkışlı', desc: 'Başakşehir merkezli', color: 'text-purple-400', bg: 'from-purple-500/10' },
  { icon: ShieldCheck, title: 'Güvenli', desc: 'Sigortalı teslimat', color: 'text-orange-400', bg: 'from-orange-500/10' },
]

export default function DeliveryInfo() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateIn className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <OttomanTulip size={16} className="opacity-40" />
            <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-gold-500/15 bg-gold-500/3">
              <span className="text-gold-500/70 text-xs font-medium tracking-[0.2em] uppercase">Teslimat</span>
            </div>
            <OttomanTulip size={16} className="opacity-40 -scale-x-100" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-cream-50 mb-2">
            Tüm Türkiye&apos;ye{' '}
            <span className="text-gold-gradient">Soğuk Zincir</span>{' '}
            Teslimat
          </h2>
          <p className="text-cream-200/40 text-sm max-w-xl mx-auto mt-4 mb-6">
            İstanbul merkezli üretim tesisimizden, frigolu soğutmalı araçlarımızla dondurulmuş ürünlerimizi tüm Türkiye&apos;ye güvenle ulaştırıyoruz
          </p>
          <OttomanDivider />
        </AnimateIn>

        {/* Main delivery card */}
        <AnimateIn>
          <div className="card-premium rounded-3xl p-6 sm:p-8 relative overflow-hidden mb-12">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/2 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/[0.02] rounded-full blur-[80px]" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left - Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                    <Truck size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-cream-50">Teslimat Bilgileri</h3>
                    <p className="text-cream-200/40 text-xs">İstanbul çıkışlı soğuk zincir</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-navy-800/30 border border-gold-500/5">
                    <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={14} className="text-gold-400" />
                    </div>
                    <div>
                      <p className="text-cream-50 text-sm font-medium">Yakın Şehirler</p>
                      <p className="text-cream-200/40 text-xs">İstanbul ve çevre iller — 1-2 iş günü</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-navy-800/30 border border-gold-500/5">
                    <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Truck size={14} className="text-gold-400" />
                    </div>
                    <div>
                      <p className="text-cream-50 text-sm font-medium">Uzak Şehirler</p>
                      <p className="text-cream-200/40 text-xs">Tüm Türkiye geneli — 1-3 iş günü</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-navy-800/30 border border-gold-500/5">
                    <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Snowflake size={14} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-cream-50 text-sm font-medium">Soğuk Zincir Garantisi</p>
                      <p className="text-cream-200/40 text-xs">Tüm dondurulmuş ürünler frigolu araçlarla taşınır</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Merhaba, teslimat bilgisi almak istiyorum.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold rounded-full px-6 py-3 text-sm inline-flex items-center justify-center gap-2"
                  >
                    <Truck size={16} />
                    Teslimat Bilgisi Alın
                  </a>
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="btn-outline-gold rounded-full px-6 py-3 text-sm inline-flex items-center justify-center gap-2"
                  >
                    Bizi Arayın
                  </a>
                </div>
              </div>

              {/* Right - Feature grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {deliveryFeatures.map((item, i) => (
                  <AnimateIn key={item.title} delay={i * 0.06} direction="right">
                    <div className={`group p-4 rounded-xl bg-linear-to-br ${item.bg} to-navy-900/50 border border-gold-500/6 hover:border-gold-500/15 transition-all duration-300 text-center`}>
                      <item.icon size={22} className={`${item.color} mx-auto mb-2.5`} strokeWidth={1.5} />
                      <h4 className="font-heading font-bold text-cream-50 text-sm">{item.title}</h4>
                      <p className="text-cream-200/35 text-[10px] mt-1">{item.desc}</p>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
