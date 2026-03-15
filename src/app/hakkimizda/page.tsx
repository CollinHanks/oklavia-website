'use client'

import Image from 'next/image'
import { Target, Eye, Heart, Star, Shield, Leaf, Users, Award, Truck, Factory, ChevronRight } from 'lucide-react'
import { OttomanDivider, OttomanTulip, OttomanMedallion, OttomanFloral, OttomanRumi, OttomanStar, OttomanCorner } from '@/components/ui/OttomanMotifs'
import AnimateIn from '@/components/ui/AnimateIn'
import { CONTACT } from '@/lib/constants'

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const generations = [
  {
    era: '1960 – 1985',
    title: 'Kök',
    subtitle: 'Birinci Nesil',
    desc: 'Küçük bir İstanbul mutfağında başlayan hikaye. Kağıda dökülmemiş ama ellerin hafızasına kazınmış tariflerle, sevgiyle yoğrulan ilk su börekleri. Her kat sabırla açıldı; her lokma, ailenin sofrasına sunulacakmış gibi hazırlandı. Yazar ailesinin gıda sektöründeki ilk adımları, sıcak bir Anadolu mutfağının duvarları arasında atıldı.',
    accent: 'from-amber-500/8',
  },
  {
    era: '1985 – 2005',
    title: 'Büyüme',
    subtitle: 'İkinci Nesil',
    desc: 'İkinci nesil geleneği modernleştirdi. Tereyağlı su böreği ve fıstıklı baklava ürün yelpazesine eklendi. Restoranlar, kafeler ve oteller OKLAVİA\'nın müşteri portföyüne dahil oldu. Aile aynı zamanda tekstil ve ticaret sektöründe 25 yıllık deneyim biriktirdi. Ancak bir şey hiç değişmedi: tarifler.',
    accent: 'from-gold-500/8',
  },
  {
    era: '2005 – Bugün',
    title: 'Vizyon',
    subtitle: 'Üçüncü Nesil',
    desc: 'Başakşehir\'de ISO standartlarına uygun modern üretim tesisi açıldı. Şok dondurma teknolojisi, soğuk zincir lojistik ve 81 ile teslimat ağı kuruldu. 2024\'te %100 Arabica çekirdeklerden üretilen Türk kahvesi aileye katıldı. 2025\'te dijital dönüşüm başlatıldı. Ve şimdi, OKLAVİA büyük marka olma yolculuğunda yeni bir sayfa açıyor.',
    accent: 'from-emerald-500/8',
  },
]

const values = [
  {
    icon: Heart,
    title: 'El Emeği, Gönül Emeği',
    desc: 'Fabrika tipi seri üretim bizim işimiz değil. Her yufka oklavayla tek tek açılır, her baklava katmanı elle serilir. Ürünlerimizin her santimetresi insan elinin dokunuşunu taşır.',
  },
  {
    icon: Leaf,
    title: '%100 Doğal, Sıfır Taviz',
    desc: 'Katkı maddesi, koruyucu, yapay aroma veya renklendirici kesinlikle kullanmayız. Sadece doğanın sunduğu en kaliteli malzemeler. Türkiye\'nin en nadide coğrafyalarından tedarik edilen hammaddeler.',
  },
  {
    icon: Shield,
    title: 'Steril Üretim Kültürü',
    desc: 'Her gün detaylı temizlik, gıda mühendisleri tarafından denetim, çalışma ortamlarının sterilizasyonu. Tesis içinde sigara bile içilmez. Hijyen bizde kural değil, kültürdür.',
  },
  {
    icon: Users,
    title: 'Aşkla Çalışan Ekip',
    desc: 'Personellerimize piyasa üstü maaş veriyoruz çünkü mutlu insanların elleri daha lezzetli ürünler yaratır. Her ürünümüzü kendi ailemize yedireceğimiz özenle hazırlarız.',
  },
  {
    icon: Award,
    title: 'Sertifikalandırılmış Güven',
    desc: 'ISO 9001, ISO 14001, ISO 22000, ISO 45001, ISO 10002, GMP ve GHP sertifikalarımız sadece kağıt üzerinde değil, her üretim anında yaşayan standartlardır.',
  },
  {
    icon: Target,
    title: 'Ticaret Etiği',
    desc: 'İnsana, doğaya ve topluma saygı, iş yapma biçimimizin temelini oluşturur. Şeffaflık ve dürüstlük vazgeçilmezimizdir. Her ilişkimizde güvene dayalı, uzun vadeli ortaklıklar kurarız.',
  },
]

const certifications = [
  { code: 'ISO 9001:2015', label: 'Kalite Yönetim Sistemi' },
  { code: 'ISO 14001:2015', label: 'Çevre Yönetim Sistemi' },
  { code: 'ISO 22000:2018', label: 'Gıda Güvenliği Yönetim Sistemi' },
  { code: 'ISO 45001:2018', label: 'İş Sağlığı ve Güvenliği' },
  { code: 'ISO 10002:2018', label: 'Müşteri Memnuniyeti Yönetimi' },
  { code: 'GMP', label: 'İyi Üretim Uygulamaları' },
  { code: 'GHP', label: 'İyi Hijyen Uygulamaları' },
]

const timeline = [
  { year: '1960', title: 'Kuruluş', desc: 'İstanbul\'un dar sokaklarında, Yazar ailesinin mutfağında bir oklava dönmeye başladı. Nesilden nesile aktarılan tariflerle ilk su börekleri üretildi.' },
  { year: '1985', title: 'Ürün Çeşitliliği', desc: 'İkinci nesil devraldığında tereyağlı su böreği ve fıstıklı baklavayı ürün yelpazemize kattık. Müşteri portföyümüz restoranlar ve kafelere genişledi.' },
  { year: '2005', title: 'Modern Tesis', desc: 'Başakşehir\'de ISO standartlarına uygun hijyenik üretim tesisimizi hizmete açtık. Şok dondurma teknolojisi sayesinde dondurulmuş ürün hattımızı başlattık.' },
  { year: '2020', title: '81 İle Teslimat', desc: 'Frigolu soğutmalı araç filomuzla soğuk zincir teslimat ağımızı tüm Türkiye\'ye yaydık. WhatsApp entegrasyonuyla online sipariş altyapısını güçlendirdik.' },
  { year: '2024', title: 'Türk Kahvesi', desc: '%100 Arabica çekirdeklerden geleneksel kavurma yöntemiyle hazırlanan Türk kahvesini ürün ailemize kattık. B2B hizmetlerimizi genişlettik.' },
  { year: '2025', title: 'Dijital Dönüşüm', desc: 'Yeni web sitemiz, güçlendirilmiş online sipariş altyapımız ve genişleyen ürün yelpazemizle OKLAVİA\'nın yeni dönemine giriyoruz.' },
]

const stats = [
  { value: '65+', label: 'Yıllık Deneyim' },
  { value: '81', label: 'İle Teslimat' },
  { value: '3', label: 'Nesil' },
  { value: '7', label: 'ISO & Sertifika' },
  { value: '1000+', label: 'Mutlu Müşteri' },
]

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */

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
      <div className="absolute top-[70%] left-[3%] hidden xl:block">
        <OttomanStar size={70} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ═══ HEADER ═══ */}
        <AnimateIn className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <OttomanTulip size={16} className="opacity-40" />
            <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-gold-500/15 bg-gold-500/3">
              <span className="text-gold-500/70 text-xs font-medium tracking-[0.2em] uppercase">Hakkımızda</span>
            </div>
            <OttomanTulip size={16} className="opacity-40 -scale-x-100" />
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-cream-50 mb-3">
            Bir Oklavanın Dönüşünden{' '}
            <span className="text-gold-gradient">Doğan Marka</span>
          </h1>
          <p className="text-cream-200/40 text-sm sm:text-base max-w-2xl mx-auto mt-4 mb-6 leading-relaxed">
            Anadolu&apos;nun en kadim mutfak aracı &ldquo;oklava&rdquo; ile Türkiye&apos;nin her evinde, her sofrada yaşayan derin lezzet geleneğinin birleşimi: OKLAVİA.
          </p>
          <OttomanDivider />
        </AnimateIn>

        {/* ═══ HERO IMAGE + BRAND STORY ═══ */}
        <AnimateIn className="mb-16">
          <div className="card-premium rounded-3xl overflow-hidden relative group">
            {/* Ottoman corners */}
            <div className="absolute top-4 left-4 z-10 opacity-20 group-hover:opacity-50 transition-opacity duration-700">
              <OttomanCorner position="top-left" className="w-14 h-14" />
            </div>
            <div className="absolute top-4 right-4 z-10 opacity-20 group-hover:opacity-50 transition-opacity duration-700">
              <OttomanCorner position="top-right" className="w-14 h-14" />
            </div>

            {/* Hero image */}
            <div className="aspect-21/9 sm:aspect-24/9 relative">
              <Image src="/images/general/hero-bg.jpg" alt="OKLAVİA — 1960'dan bu yana geleneksel üretim, el yapımı börek ve baklava" fill className="object-cover" sizes="100vw" priority />
              <div className="absolute inset-0 bg-linear-to-t from-navy-900 via-navy-900/60 to-navy-900/20" />

              {/* Overlay content */}
              <div className="absolute bottom-6 left-6 sm:left-10 right-6 sm:right-10">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-gold-400/80 text-xs font-semibold tracking-[0.2em] uppercase mb-2">EST. 1960 • İSTANBUL</p>
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-cream-50">
                      Anadolu&apos;nun Mirası,<br />
                      <span className="text-gold-gradient">Sofralarınızın Tacı</span>
                    </h2>
                  </div>
                  <div className="hidden sm:block">
                    <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-gold-400 font-heading font-black text-2xl">65</span>
                    </div>
                    <p className="text-gold-400/50 text-[10px] text-center mt-1 tracking-wider uppercase">Yıl</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand story content */}
            <div className="p-6 sm:p-8 lg:p-12 relative">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/3 rounded-full blur-[120px] pointer-events-none" />

              {/* Quote */}
              <div className="relative mb-8 pl-5 border-l-2 border-gold-500/30">
                <p className="text-gold-400/70 text-base sm:text-lg italic leading-relaxed font-medium">
                  &ldquo;Biz sadece börek ve baklava üretmiyoruz. Biz Anadolu&apos;nun ruhunu, bir oklavanın dönüşünde saklanan yüzyılların bilgeliğini sofralarınıza taşıyoruz.&rdquo;
                </p>
              </div>

              <div className="relative space-y-5 text-cream-200/55 text-[15px] leading-[1.9]">
                <p>
                  Her büyük markanın başlangıcında bir el, bir yürek ve bir alet vardır. OKLAVİA&apos;nın başlangıcında ise bunların üçü de aynı nesnede birleşir: <strong className="text-gold-400 font-semibold">oklava</strong>. 1960 yılında İstanbul&apos;un dar sokaklarında, Yazar ailesinin mutfağında bir oklava dönmeye başladı. O oklava sıradan bir mutfak aracı değildi; nesilden nesile aktarılan bir mirasın, bir yaşam felsefesinin ve her lokmaya işlenen sevginin taşıyıcısıydı.
                </p>
                <p>
                  OKLAVİA ismi, Anadolu&apos;nun en kadim mutfak aracı &ldquo;oklava&rdquo; ile Türkiye&apos;nin her evinde, her sofrada yaşayan derin lezzet geleneğinin birleşimidir. Türk kadınının dünyanın en büyük ustalarına taş çıkartacak ustalığını, <strong className="text-cream-100/70">Yazar ailesinin 65 yıllık birikimi</strong>yle buluşturan bir isimdir.
                </p>
                <p>
                  Aile, unlu mamüller ve gıda sektörünün yanı sıra <strong className="text-cream-100/70">25 yıllık tekstil ve ticaret tecrübesi</strong>yle Türkiye&apos;nin farklı sektörlerinde derin bir iş deneyimine sahiptir. Bu çok yönlü birikim, OKLAVİA&apos;ya sadece lezzet değil, aynı zamanda profesyonel yönetim, kalite standartları ve kurumsal disiplin kazandırmıştır.
                </p>
                <p>
                  Bugün OKLAVİA olarak dört temel ürün üretiyoruz: klasik <strong className="text-cream-100/70">su böreği</strong>, <strong className="text-cream-100/70">tereyağlı su böreği</strong>, Gaziantep&apos;in gururu <strong className="text-cream-100/70">fıstıklı baklava</strong> ve geleneksel <strong className="text-cream-100/70">Türk kahvesi</strong>. Her birini katkı maddesi kullanmadan, taze ve doğal malzemelerle, el emeğiyle üretiyoruz. Dondurulmuş ürünlerimiz üretildiği gün şok dondurma yöntemiyle &minus;18°C&apos;ye düşürülür ve frigolu soğutmalı araçlarımızla soğuk zincir hiç kırılmadan kapınıza kadar taşınır.
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* ═══ STATS BAR ═══ */}
        <AnimateIn className="mb-16">
          <div className="card-premium rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-gold-500/3 via-transparent to-gold-500/3" />
            <div className="relative grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-0">
              {stats.map((stat, i, arr) => (
                <div key={stat.label} className="flex items-center">
                  <div className="text-center w-full sm:px-4 md:px-8">
                    <p className="text-gold-400 font-heading font-black text-2xl sm:text-3xl md:text-4xl">{stat.value}</p>
                    <p className="text-cream-200/35 text-[10px] sm:text-xs mt-1.5 tracking-wider uppercase">{stat.label}</p>
                  </div>
                  {i < arr.length - 1 && <div className="hidden sm:block w-px h-14 bg-linear-to-b from-transparent via-gold-500/15 to-transparent" />}
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* ═══ THREE GENERATIONS ═══ */}
        <AnimateIn className="mb-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <OttomanTulip size={14} className="opacity-40" />
              <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-gold-500/15 bg-gold-500/3">
                <Users size={12} className="text-gold-500/60" />
                <span className="text-gold-500/70 text-xs font-medium tracking-[0.2em] uppercase">Aile Mirası</span>
              </div>
              <OttomanTulip size={14} className="opacity-40 -scale-x-100" />
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-cream-50">
              Üç Neslin Özveriyle <span className="text-gold-gradient">Yoğurduğu Lezzet</span>
            </h2>
            <p className="text-cream-200/40 text-sm max-w-xl mx-auto mt-3">
              Her nesil kendi damgasını vurdu ama bir şey hiç değişmedi: tarifler ve özen.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {generations.map((gen, i) => (
            <AnimateIn key={gen.era} delay={i * 0.12}>
              <div className={`group card-premium rounded-2xl p-7 h-full bg-linear-to-br ${gen.accent} to-navy-900/50 relative overflow-hidden`}>
                <div className="absolute top-3 right-3 opacity-15 group-hover:opacity-30 transition-opacity duration-500">
                  <OttomanTulip size={28} />
                </div>
                <div className="relative">
                  <p className="text-gold-400/60 text-xs font-semibold tracking-[0.15em] uppercase mb-1">{gen.era}</p>
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="font-heading font-bold text-xl text-cream-50">{gen.title}</h3>
                    <span className="text-gold-500/40 text-xs">— {gen.subtitle}</span>
                  </div>
                  <div className="w-8 h-px bg-gold-500/25 mb-4" />
                  <p className="text-cream-200/50 text-[13px] leading-[1.8]">{gen.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* ═══ BRAND PERSONALITY ═══ */}
        <AnimateIn className="mb-16">
          <div className="card-premium rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gold-500/4 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-4 right-4 opacity-15">
              <OttomanMedallion size={80} />
            </div>

            <div className="relative text-center max-w-3xl mx-auto">
              <p className="text-gold-400/60 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Marka Kişiliği</p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-cream-50 mb-4">
                İstanbul <span className="text-gold-gradient">Beyefendisi</span>
              </h2>
              <div className="w-10 h-px bg-gold-500/25 mx-auto mb-6" />
              <p className="text-cream-200/50 text-[15px] leading-[1.9] mb-6">
                OKLAVİA bir kişi olsaydı, 35–40 yaşlarında, enerjik ama ölçülü, doğayı ve insanı seven bir İstanbul beyefendisi ya da hanımefendisi olurdu. Old money zarafetini modern lüksle harmanlayan, Türk örf ve adetlerine bağlı ama dünyaya açık biri. Gerçek kalitenin peşinde koşar; gösteriş değil, öz değer arar. Karnı doyurmaktan öte ruha hitap etmeyi amaçlar.
              </p>
              <div className="pl-5 border-l-2 border-gold-500/30 text-left inline-block">
                <p className="text-gold-400/70 text-sm italic leading-relaxed">
                  &ldquo;OKLAVİA, sofrada lüksü demokratikleştirir: en seçkin damak zevkini tatmin ederken, samimiyetinden hiçbir şey kaybetmez.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* ═══ VALUES — ALTIN STANDART ═══ */}
        <AnimateIn className="mb-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <OttomanTulip size={14} className="opacity-40" />
              <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-gold-500/15 bg-gold-500/3">
                <Award size={12} className="text-gold-500/60" />
                <span className="text-gold-500/70 text-xs font-medium tracking-[0.2em] uppercase">Değerlerimiz</span>
              </div>
              <OttomanTulip size={14} className="opacity-40 -scale-x-100" />
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-cream-50">
              Altın <span className="text-gold-gradient">Standart</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {values.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.08}>
              <div className="group card-premium rounded-2xl p-7 h-full hover:border-gold-500/25 transition-all duration-500">
                <div className="w-12 h-12 mb-5 rounded-xl bg-gold-500/10 border border-gold-500/15 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-gold-500/5 transition-all duration-500">
                  <item.icon size={22} className="text-gold-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-base text-cream-50 mb-2">{item.title}</h3>
                <div className="w-6 h-px bg-gold-500/20 mb-3" />
                <p className="text-cream-200/45 text-[13px] leading-[1.8]">{item.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* ═══ CERTIFICATIONS ═══ */}
        <AnimateIn className="mb-16">
          <div className="card-premium rounded-2xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-gold-500/3 to-transparent" />
            <div className="absolute top-4 right-4 opacity-15">
              <OttomanFloral size={60} />
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <Shield size={20} className="text-gold-400" />
                <h3 className="font-heading font-bold text-lg text-cream-50">Sertifikalarımız</h3>
                <div className="flex-1 h-px bg-gold-500/10" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {certifications.map((cert) => (
                  <div key={cert.code} className="flex items-center gap-3 p-3 rounded-xl bg-navy-800/30 border border-gold-500/8 hover:border-gold-500/20 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
                      <Award size={14} className="text-gold-400/70" />
                    </div>
                    <div>
                      <p className="text-cream-100/70 text-sm font-semibold">{cert.code}</p>
                      <p className="text-cream-200/35 text-[11px]">{cert.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* ═══ TIMELINE ═══ */}
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
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-cream-50">
              Zaman <span className="text-gold-gradient">Çizelgesi</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="relative mb-16">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-gold-500/30 via-gold-500/15 to-transparent md:-translate-x-px" />

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
                    <p className="text-cream-200/40 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-24px)]" />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* ═══ VISION ═══ */}
        <AnimateIn className="mb-16">
          <div className="card-premium rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gold-500/4 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-4 left-4 opacity-10">
              <OttomanRumi size={70} />
            </div>

            <div className="relative max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Eye size={20} className="text-gold-400" />
                <h3 className="font-heading font-bold text-xl text-cream-50">Vizyonumuz</h3>
              </div>
              <p className="text-cream-200/50 text-[15px] leading-[1.9] mb-4">
                Türkiye, Avrupa ve Dubai başta olmak üzere büyük şehirlerde <strong className="text-cream-100/70">OKLAVİA Concept Store</strong>&apos;lar açmak. Etkinlik ve deneyim odaklı, Türk mutfak kültürünün en güvenilir global temsilcisi olmak.
              </p>
              <div className="pl-5 border-l-2 border-gold-500/30">
                <p className="text-gold-400/70 text-sm italic leading-relaxed">
                  &ldquo;OKLAVİA sadece bir gıda markası değildir. OKLAVİA, Anadolu&apos;nun ruhunu, İstanbul&apos;un zarafetini ve Türk misafirperverliğinin sıcaklığını dünyaya taşıyan bir yaşam biçimidir.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* ═══ BOTTOM CTA ═══ */}
        <AnimateIn>
          <div className="card-premium rounded-3xl p-10 sm:p-14 relative overflow-hidden text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gold-500/4 rounded-full blur-[60px]" />
            <div className="relative">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-cream-50 mb-3">
                Sofralarınıza Değer Katalım
              </h2>
              <p className="text-cream-200/40 text-sm mb-8 max-w-lg mx-auto">
                65 yıllık deneyimimizle hazırlanan geleneksel lezzetlerimizi keşfedin. Bireysel veya kurumsal, sipariş vermek için hemen yazın.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=Merhaba, bilgi almak istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-8 py-3.5 text-sm flex items-center justify-center gap-2 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(212,175,55,0.4)]"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37, #B8962E)',
                    boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
                  }}
                >
                  <WhatsAppIcon size={18} />
                  WhatsApp ile Yazın
                </a>
                <a href="/urunler" className="btn-outline-gold rounded-full px-8 py-3.5 text-sm flex items-center justify-center gap-2">
                  Ürünlerimizi Keşfedin
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>

      </div>
    </div>
  )
}