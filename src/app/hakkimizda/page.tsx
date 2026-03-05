'use client'

import Image from 'next/image'
import { Target, Eye, Sparkles, Heart, Star } from 'lucide-react'
import { OttomanDivider, OttomanTulip, OttomanMedallion, OttomanFloral, OttomanRumi } from '@/components/ui/OttomanMotifs'
import AnimateIn from '@/components/ui/AnimateIn'

const values = [
  { icon: Target, title: 'Misyonumuz', text: 'Anadolu mutfağının nesillerdir süregelen lezzetlerini, en yüksek kalite ve hijyen standartlarında üreterek Türkiye\'nin dört bir köşesindeki sofrara ulaştırmak. Geleneksel tarifleri bozmadan, modern gıda güvenliği standartlarıyla harmanlayarak her müşterimize güvenle sunmak.', accent: 'from-blue-500/10' },
  { icon: Eye, title: 'Vizyonumuz', text: 'Türk mutfak kültürünün en güvenilir temsilcisi olarak, yurt içi ve yurt dışında tanınan bir marka olmak. Geleneksel tarifleri gelecek nesillere aktarırken, sürdürülebilir üretim pratikleriyle çevreye ve topluma katkıda bulunmak.', accent: 'from-gold-500/10' },
  { icon: Heart, title: 'Değerlerimiz', text: 'İnsana ve doğaya saygı, ürünlerimizin temelini oluşturur. Katkı maddesi kullanmama sözümüzden asla taviz vermeyiz. Müşteri memnuniyeti, şeffaflık ve dürüstlük iş yapma biçimimizin ayrılmaz parçasıdır. Her ürünümüzü kendi ailemize yedireceğimiz özenle hazırlarız.', accent: 'from-rose-500/10' },
]

const timeline = [
  { year: '1960', title: 'Kuruluş', desc: 'İstanbul\'da küçük bir aile mutfağında el yapımı su böreği üretimine başladık. Nesilden nesile aktarılan tariflerle ilk adımlarımızı attık.' },
  { year: '1985', title: 'Ürün Çeşitliliği', desc: 'İkinci nesil devraldığında tereyağlı su böreği ve fıstıklı baklavayı ürün yelpazemize kattık. Müşteri portföyümüz restoranlar ve kafelere genişledi.' },
  { year: '2005', title: 'Modern Tesis', desc: 'Başakşehir\'de ISO standartlarına uygun hijyenik üretim tesisimizi hizmete açtık. Şok dondurma teknolojisi sayesinde dondurulmuş ürün hattımızı başlattık.' },
  { year: '2020', title: '81 İle Teslimat', desc: 'Frigolu soğutmalı araç filomuzla soğuk zincir teslimat ağımızı tüm Türkiye\'ye yaydık. Online sipariş altyapımızı WhatsApp entegrasyonuyla güçlendirdik.' },
  { year: '2024', title: 'Türk Kahvesi', desc: '%100 Arabica çekirdeklerden geleneksel kavurma yöntemiyle hazırlanan Türk kahvesini ürün ailemize kattık. B2B hizmetlerimizi kurumsal müşterilerimiz için genişlettik.' },
  { year: '2025', title: 'Dijital Dönüşüm', desc: 'Yeni web sitemiz, güçlendirilmiş online sipariş altyapımız ve genişleyen ürün yelpazemizle OKLAVİA\'nın yeni dönemine giriyoruz.' },
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
            1960&apos;dan bu yana üç nesil boyunca aynı özenle üretilen geleneksel lezzetlerin hikayesi
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
                  sevgiyi sofraya taşımanın sembolüdür. Bizim için oklava sadece bir mutfak aracı değil — bir aile
                  mirası, bir yaşam felsefesi ve her ürünümüzün arkasındaki hikayedir.
                </p>
                <p>
                  1960 yılında İstanbul&apos;da mütevazı bir aile mutfağında başlayan yolculuğumuz, bugün
                  Başakşehir&apos;deki modern üretim tesisimize kadar uzandı. Üç kuşaktır aynı tarifleri
                  kullanıyoruz — annelerimizin annelerinden öğrendiği, kağıda dökülmemiş ama ellerin hafızasına
                  kazınmış tarifler. Bu tariflerde sır yoktur; sır, yıllarca tekrarlanan özendir.
                </p>
                <p>
                  Bugün OKLAVİA olarak dört temel ürün üretiyoruz: klasik <strong className="text-cream-100/70">su böreği</strong>,
                  {' '}<strong className="text-cream-100/70">tereyağlı su böreği</strong>, Gaziantep&apos;in gururu
                  {' '}<strong className="text-cream-100/70">fıstıklı baklava</strong> ve geleneksel
                  {' '}<strong className="text-cream-100/70">Türk kahvesi</strong>. Her birini katkı maddesi kullanmadan,
                  taze ve doğal malzemelerle, el emeğiyle üretiyoruz. Fabrika tipi seri üretim bizim işimiz değil —
                  biz her ürüne tek tek emek veriyoruz.
                </p>
                <p>
                  Dondurulmuş ürünlerimiz, üretildiği gün şok dondurma yöntemiyle -18°C&apos;ye düşürülür ve
                  bu sıcaklıkta frigolu soğutmalı araçlarımızla kapınıza kadar taşınır. Soğuk zincir hiçbir
                  aşamada kırılmaz. Bu sayede evinizde fırına attığınızda, sanki o gün yapılmış gibi taze ve
                  lezzetli bir ürün elde edersiniz.
                </p>
                <p>
                  İstanbul&apos;dan tüm Türkiye&apos;nin 81 iline teslimat yapıyoruz. Bireysel müşterilerimizden
                  restoran ve kafelere, otellerden catering firmalarına kadar her ölçekte hizmet sunuyoruz.
                  Amacımız basit: Anadolu sofrasının eşsiz lezzetlerini, her kim olursanız olun, nerede
                  olursanız olun, sofralarınıza taşımak.
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
