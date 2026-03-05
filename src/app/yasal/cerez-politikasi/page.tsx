import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Çerez Politikası',
  description: 'OKLAVİA Unlu Mamülleri Çerez Politikası — Web sitemizde kullanılan çerezler, amaçları ve yönetim seçenekleri hakkında bilgi.',
}

export default function CerezPage() {
  return (
    <div className="py-10 sm:py-14 relative">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <article className="card-premium rounded-2xl p-6 sm:p-10">
          <h1 className="font-heading font-black text-2xl sm:text-3xl text-cream-50 mb-2">Çerez Politikası</h1>
          <p className="text-cream-200/30 text-sm mb-8">Son güncelleme: 5 Mart 2026</p>

          <div className="space-y-6 text-cream-200/55 text-[15px] leading-[1.85]">
            <p>
              Bu Çerez Politikası, <strong className="text-cream-100/70">OKLAVİA Unlu Mamülleri</strong>&apos;nin
              www.oklavia.com web sitesinde çerez ve benzeri teknolojilerin nasıl kullanıldığını açıklamaktadır.
              Web sitemizi kullanarak bu politikada açıklanan çerez uygulamalarını kabul etmiş sayılırsınız.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">1. Çerez Nedir?</h2>
            <p>
              Çerezler, web sitelerinin tarayıcınıza gönderdiği ve cihazınızda saklanan küçük metin dosyalarıdır.
              Çerezler, web sitesinin düzgün çalışmasını sağlamak, kullanıcı deneyimini iyileştirmek ve
              site trafiğini analiz etmek gibi çeşitli amaçlarla kullanılır. Çerezler kişisel bilgisayarınıza
              zarar vermez ve virüs içermez.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">2. Kullandığımız Çerez Türleri</h2>

            <h3 className="font-heading font-semibold text-lg text-cream-100/80 mt-4">2.1 Zorunlu Çerezler</h3>
            <p>
              Web sitesinin temel işlevlerinin çalışması için gerekli çerezlerdir. Bu çerezler olmadan
              site düzgün çalışamaz. Sayfa gezinme, güvenli alan erişimi gibi temel işlevleri sağlarlar.
              Bu çerezler kişisel veri toplamaz ve devre dışı bırakılamaz.
            </p>

            <h3 className="font-heading font-semibold text-lg text-cream-100/80 mt-4">2.2 Performans ve Analitik Çerezler</h3>
            <p>
              Bu çerezler, ziyaretçilerin web sitemizi nasıl kullandığına dair anonim bilgi toplar.
              Hangi sayfaların en çok ziyaret edildiğini, hangi bağlantıların tıklandığını ve olası
              hata mesajlarını takip etmemize yardımcı olur. Web sitemizde <strong className="text-cream-100/70">Google Analytics</strong> kullanılmaktadır.
            </p>
            <p>
              Google Analytics çerezleri:<br/>
              • <strong>_ga:</strong> Benzersiz kullanıcıları ayırt etmek için kullanılır (süre: 2 yıl)<br/>
              • <strong>_ga_*:</strong> Oturum durumunu korumak için kullanılır (süre: 2 yıl)<br/>
              • <strong>_gid:</strong> Benzersiz kullanıcıları ayırt etmek için kullanılır (süre: 24 saat)
            </p>

            <h3 className="font-heading font-semibold text-lg text-cream-100/80 mt-4">2.3 İşlevsel Çerezler</h3>
            <p>
              Bu çerezler, web sitesinin daha gelişmiş işlevsellik ve kişiselleştirme sunmasını sağlar.
              Dil tercihinizi, bölgenizi veya önceki ziyaretlerinize ait bilgileri hatırlamak için kullanılabilir.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">3. Üçüncü Taraf Çerezleri</h2>
            <p>
              Web sitemizde aşağıdaki üçüncü taraf hizmetleri çerez kullanmaktadır:
            </p>
            <p>
              • <strong className="text-cream-100/70">Google Analytics:</strong> Web sitesi trafiğini analiz etmek için (google.com)<br/>
              • <strong className="text-cream-100/70">Google Maps:</strong> İletişim sayfasında harita gösterimi için (google.com)<br/>
              • <strong className="text-cream-100/70">Vercel Analytics:</strong> Performans ölçümü için (vercel.com)
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">4. Çerezleri Yönetme</h2>
            <p>
              Tarayıcınızın ayarlarını değiştirerek çerezleri kontrol edebilir veya silebilirsiniz.
              Çerezleri tamamen engellemek web sitesinin bazı özelliklerinin düzgün çalışmamasına neden olabilir.
            </p>
            <p>
              Tarayıcınıza göre çerez ayarları:<br/>
              • <strong>Google Chrome:</strong> Ayarlar → Gizlilik ve güvenlik → Çerezler<br/>
              • <strong>Mozilla Firefox:</strong> Seçenekler → Gizlilik ve Güvenlik → Çerezler<br/>
              • <strong>Safari:</strong> Tercihler → Gizlilik → Çerezler<br/>
              • <strong>Microsoft Edge:</strong> Ayarlar → Çerezler ve site izinleri
            </p>
            <p>
              Google Analytics tarafından kullanılan çerezleri devre dışı bırakmak için
              Google Analytics Opt-out Browser Add-on eklentisini yükleyebilirsiniz.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">5. Politika Değişiklikleri</h2>
            <p>
              Bu Çerez Politikası&apos;nı zaman zaman güncelleyebiliriz. Değişiklikler bu sayfada yayınlanır.
              Web sitemizi kullanmaya devam etmeniz, güncel politikayı kabul ettiğiniz anlamına gelir.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">6. İletişim</h2>
            <p>
              Çerez uygulamalarımız hakkında sorularınız için:<br/><br/>
              <strong>E-posta:</strong> info@oklavia.com<br/>
              <strong>Telefon:</strong> 0532 455 45 76<br/>
              <strong>Adres:</strong> Şahintepe Mah. Eski İstanbul Cd. Oğulcan İş Merkezi NO:114 İç Kapı NO:2 Başakşehir / İstanbul
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
