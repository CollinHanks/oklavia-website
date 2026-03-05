'use client'

import Image from 'next/image'
import { Target, Eye, Sparkles, Heart, Star } from 'lucide-react'
import { OttomanDivider, OttomanTulip, OttomanMedallion, OttomanFloral, OttomanRumi } from '@/components/ui/OttomanMotifs'
import AnimateIn from '@/components/ui/AnimateIn'

const values = [
  { icon: Target, title: 'Misyonumuz', text: 'Anadolu mutfağının geleneksel lezzetlerini, en yüksek kalite ve hijyen standartlarında üreterek her sofraya ulaştırmak.', accent: 'from-blue-500/10' },
  { icon: Eye, title: 'Vizyonumuz', text: 'Türk mutfak kültürünün en güvenilir temsilcisi olarak, geleneksel tarifleri gelecek nesillere aktaran bir marka olmak.', accent: 'from-gold-500/10' },
  { icon: Heart, title: 'Değerlerimiz', text: 'Geleneksel tariflerden şaşmadan, doğal malzemelerle, sevgiyle üretmek ve müşteri memnuniyetini her şeyin önünde tutmak.', accent: 'from-rose-500/10' },
]

const timeline = [
  { year: '1960', title: 'Kuruluş', desc: 'İstanbul\'da geleneksel lezzetlerin hikayesi başladı. El yapımı su böreği ile yola çıktık.' },
  { year: '1985', title: 'Büyüme', desc: 'Nesilden nesile aktarılan tariflerle ürün yelpazemizi genişlettik. Fıstıklı baklava ailemize katıldı.' },
  { year: '2005', title: 'Modern Tesis', desc: 'Başakşehir\'de hijyenik üretim tesisimizi kurduk. Geleneksel tarifleri modern standartlarla buluşturduk.' },
  { year: '2020', title: 'Türkiye Geneli', desc: 'Soğuk zincir teslimat ağımızı 81 ile yaydık. Frigolu araç filomuz büyüdü.' },
  { year: '2024', title: 'Dijitalleşme', desc: 'Online sipariş altyapımızı güçlendirdik. Türk kahvesini ürün yelpazemize ekledik.' },
  { year: '2025', title: 'Yeni Dönem', desc: 'Yeni hedefler, yeni ürünler. OKLAVİA olarak büyümeye devam ediyoruz.' },
]

const stats = [
  { value: '65+', label: 'Yıl' },
  { value: '81', label: 'İl' },
  { value: '4', label: 'Ürün' },
  { value: '1000+', label: 'Mutlu Müşteri' },
]

export default function HakkimizdaPage() {
  return (
    <div className="py-10 sm:py-14 relative">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 cini-pattern-bg" />

      {/* Decorative motifs */}
      <div className="absolute top-20 right-6 hidden lg:block">
        <OttomanFloral size={110} />
      </div>
      <div className="absolute bottom-40 left-6 hidden lg:block">
        <OttomanRumi size={80} />
      </div>
      <div className="absolute top-1/2 right-[2%] hidden xl:block">
        <OttomanMedallion size={90} />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <OttomanTulip size={16} className="opacity-40" />
            <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-gold-500/15 bg-gold-500/3">
              <span className="text-gold-500/70 text-xs font-medium tracking-[0.2em] uppercase">Hakkımızda</span>
            </div>
            <OttomanTulip size={16} className="opacity-40 -scale-x-100" />
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-cream-50 mb-3">
            OKLAVİA <span className="text-gold-gradient">Hikayesi</span>
          </h1>
          <p className="text-cream-200/40 text-sm max-w-lg mx-auto mt-4 mb-6">
            Bir oklava, bir hayal, bir lezzet yolculuğu
          </p>
          <OttomanDivider />
        </AnimateIn>

        {/* Hero Image + Story */}
        <AnimateIn className="mb-14">
          <div className="card-premium rounded-3xl overflow-hidden relative">
            {/* Hero image */}
            <div className="aspect-[21/9] relative">
              <Image src="/images/general/hero-bg.jpg" alt="OKLAVİA - Geleneksel üretim" fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 sm:left-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/20 flex items-center justify-center backdrop-blur-sm">
                    <Sparkles size={22} className="text-gold-400" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-xl sm:text-2xl text-cream-50">Bir Oklava&apos;dan Doğan Lezzet</h2>
                    <p className="text-cream-200/40 text-xs mt-0.5">1960&apos;dan bu yana</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story content */}
            <div className="p-6 sm:p-8 lg:p-10 relative">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gold-500/3 rounded-full blur-[100px]" />

              <div className="relative space-y-5 text-cream-200/55 text-[15px] leading-[1.85]">
                <p>
                  OKLAVİA, adını Anadolu mutfağının en kadim aracından alır: <strong className="text-gold-400 font-semibold">oklava</strong>.
                  Nesilden nesile aktarılan bu basit ama güçlü araç, hamuru inceltmenin, lezzeti katlamanın ve
                  sevgiyi sofraya taşımanın sembolüdür.
                </p>
                <p>
                  1960 yılında İstanbul&apos;da kurulan OKLAVİA, geleneksel Türk
                  mutfağının en sevilen lezzetlerini modern standartlarda üretmek ve tüm Türkiye&apos;ye
                  ulaştırmak amacıyla yola çıktı. Kurucularımız, annelerinden ve ninelerinden öğrendikleri
                  tarifleri, hijyenik üretim tesislerinde aynı özen ve sevgiyle hayata geçiriyor.
                </p>
                <p>
                  Her su böreğimizin katlarında, her baklavamızın şerbetinde ve her fincan Türk kahvesinde
                  Anadolu&apos;nun binlerce yıllık mutfak kültürünü yaşatıyoruz. Ürünlerimizi dondurulmuş
                  olarak saklayabilir, istediğiniz zaman sıcacık sofralarınızda sunabilirsiniz.
                </p>
                <p>
                  Frigolu soğutmalı araçlarımızla İstanbul&apos;dan tüm Türkiye&apos;ye soğuk zincir
                  garantisiyle ulaşıyoruz. Bireysel müşterilerimizden restoranlar ve kafelere, toptan
                  alıcılardan özel etkinliklere kadar herkese hizmet veriyoruz.
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Stats Bar */}
        <AnimateIn className="mb-14">
          <div className="card-premium rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-6 sm:gap-0">
              {stats.map((stat, i, arr) => (
                <div key={stat.label} className="flex items-center">
                  <div className="text-center w-full sm:px-8 md:px-12">
                    <p className="text-gold-400 font-heading font-black text-2xl sm:text-3xl md:text-4xl">{stat.value}</p>
                    <p className="text-cream-200/35 text-[10px] sm:text-xs mt-1.5 tracking-wider uppercase">{stat.label}</p>
                  </div>
                  {i < arr.length - 1 && <div className="hidden sm:block w-px h-14 bg-gradient-to-b from-transparent via-gold-500/15 to-transparent" />}
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {values.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.1}>
              <div className={`group card-premium rounded-2xl p-7 h-full bg-gradient-to-br ${item.accent} to-navy-900/50 text-center`}>
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gold-500/10 border border-gold-500/15 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-gold-500/5 transition-all duration-500">
                  <item.icon size={24} className="text-gold-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-lg text-cream-50 mb-2">{item.title}</h3>
                <div className="w-6 h-px bg-gold-500/20 mx-auto mb-3" />
                <p className="text-cream-200/45 text-[13px] leading-relaxed">{item.text}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Timeline */}
        <AnimateIn className="mb-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <OttomanTulip size={14} className="opacity-40" />
              <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-gold-500/15 bg-gold-500/3">
                <Star size={12} className="text-gold-500/60" />
                <span className="text-gold-500/70 text-xs font-medium tracking-[0.2em] uppercase">Yolculuğumuz</span>
              </div>
              <OttomanTulip size={14} className="opacity-40 -scale-x-100" />
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-cream-50">Zaman Çizelgesi</h2>
          </div>
        </AnimateIn>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/30 via-gold-500/15 to-transparent md:-translate-x-px" />

          <div className="space-y-7">
            {timeline.map((item, i) => (
              <AnimateIn key={item.year} delay={i * 0.06} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Desktop content */}
                  <div className={`hidden md:block md:w-[calc(50%-24px)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="card-premium rounded-xl p-5 inline-block hover:border-gold-500/25 transition-colors duration-300">
                      <p className="text-gold-400 font-heading font-black text-2xl">{item.year}</p>
                      <h3 className="font-heading font-bold text-cream-50 text-lg mt-1">{item.title}</h3>
                      <p className="text-cream-200/40 text-sm mt-2 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="relative shrink-0 z-10">
                    <div className="w-12 h-12 rounded-full bg-navy-900 border-2 border-gold-500/30 flex items-center justify-center shadow-lg shadow-gold-500/5">
                      <div className="w-3 h-3 rounded-full bg-gold-400" />
                    </div>
                  </div>

                  {/* Mobile content */}
                  <div className="md:hidden flex-1">
                    <p className="text-gold-400 font-heading font-black text-xl">{item.year}</p>
                    <h3 className="font-heading font-bold text-cream-50 mt-1">{item.title}</h3>
                    <p className="text-cream-200/40 text-sm mt-1">{item.desc}</p>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-24px)]" />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
