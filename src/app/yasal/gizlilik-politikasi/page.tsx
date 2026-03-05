import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'OKLAVİA Unlu Mamülleri Gizlilik Politikası — Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgi.',
}

export default function GizlilikPage() {
  return (
    <div className="py-10 sm:py-14 relative">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <article className="card-premium rounded-2xl p-6 sm:p-10">
          <h1 className="font-heading font-black text-2xl sm:text-3xl text-cream-50 mb-2">Gizlilik Politikası</h1>
          <p className="text-cream-200/30 text-sm mb-8">Son güncelleme: 5 Mart 2026</p>

          <div className="space-y-6 text-cream-200/55 text-[15px] leading-[1.85]">
            <p>
              <strong className="text-cream-100/70">OKLAVİA Unlu Mamülleri</strong> olarak gizliliğinize saygı duyuyor
              ve kişisel verilerinizin korunmasını en üst düzeyde önemsiyoruz. Bu Gizlilik Politikası,
              www.oklavia.com web sitesini ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda kişisel
              verilerinizin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">1. Toplanan Bilgiler</h2>

            <h3 className="font-heading font-semibold text-lg text-cream-100/80 mt-4">1.1 Doğrudan Sağladığınız Bilgiler</h3>
            <p>
              Web sitemizde form doldurduğunuzda, sipariş verdiğinizde veya bizimle iletişime geçtiğinizde
              aşağıdaki bilgileri doğrudan sizden toplarız: ad-soyad, e-posta adresi, telefon numarası,
              teslimat adresi, firma bilgileri (B2B başvurularında), mesaj içerikleri.
            </p>

            <h3 className="font-heading font-semibold text-lg text-cream-100/80 mt-4">1.2 Otomatik Olarak Toplanan Bilgiler</h3>
            <p>
              Web sitemizi ziyaret ettiğinizde bazı bilgiler otomatik olarak toplanır: IP adresi, tarayıcı
              türü ve versiyonu, işletim sistemi, ziyaret edilen sayfalar, ziyaret tarihi ve saati,
              yönlendiren URL, ekran çözünürlüğü. Bu bilgiler çerezler ve benzeri teknolojiler aracılığıyla toplanır.
            </p>

            <h3 className="font-heading font-semibold text-lg text-cream-100/80 mt-4">1.3 Üçüncü Taraf Hizmetleri</h3>
            <p>
              Web sitemizde Google Analytics kullanılmaktadır. Google Analytics, web sitesi trafiğini
              analiz etmek için çerezler kullanır. Google&apos;ın bu verileri nasıl işlediğine dair
              bilgiye Google Gizlilik Politikası&apos;ndan ulaşabilirsiniz.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">2. Bilgilerin Kullanım Amaçları</h2>
            <p>Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:</p>
            <p>
              • Siparişlerinizi işlemek ve teslimat süreçlerini yönetmek<br/>
              • İletişim taleplerinize yanıt vermek<br/>
              • B2B başvurularını değerlendirmek<br/>
              • Web sitesi deneyimini iyileştirmek ve kişiselleştirmek<br/>
              • İstatistiksel analizler yapmak (anonim olarak)<br/>
              • Yasal yükümlülüklerimizi yerine getirmek<br/>
              • Hizmet kalitemizi artırmak<br/>
              • Açık rızanız doğrultusunda pazarlama iletişimi göndermek
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">3. Bilgilerin Paylaşılması</h2>
            <p>
              Kişisel bilgilerinizi üçüncü taraflarla satmayız. Ancak aşağıdaki durumlarda bilgileriniz
              paylaşılabilir:
            </p>
            <p>
              • <strong className="text-cream-100/70">Hizmet sağlayıcılar:</strong> Kargo firmaları (teslimat için), ödeme işlemcileri, sunucu ve veritabanı hizmetleri (Vercel, Supabase)<br/>
              • <strong className="text-cream-100/70">Yasal zorunluluk:</strong> Mahkeme kararı veya yasal düzenleme gereği yetkili kurumlara<br/>
              • <strong className="text-cream-100/70">İş ortakları:</strong> Toptan satış süreçlerinde ilgili lojistik partnerlere (minimum düzeyde)
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">4. Veri Güvenliği</h2>
            <p>
              Kişisel verilerinizin güvenliğini sağlamak için endüstri standardı güvenlik önlemleri uyguluyoruz.
              Web sitemiz SSL/TLS şifreleme ile korunmaktadır. Veritabanı erişimleri yetkilendirme ile
              sınırlandırılmıştır. Düzenli güvenlik güncellemeleri yapılmaktadır. Ancak, internet üzerinden
              hiçbir veri iletimi veya elektronik depolama yönteminin %100 güvenli olmadığını belirtmek isteriz.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">5. Üçüncü Taraf Bağlantıları</h2>
            <p>
              Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir (WhatsApp, sosyal medya platformları).
              Bu sitelerin gizlilik uygulamalarından sorumlu değiliz. Bu siteleri ziyaret ettiğinizde kendi gizlilik
              politikalarını incelemenizi tavsiye ederiz.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">6. Çocukların Gizliliği</h2>
            <p>
              Web sitemiz 18 yaşın altındaki bireylere yönelik değildir. Bilerek 18 yaşın altındaki kişilerden
              kişisel veri toplamayız. Eğer bir çocuğun bize kişisel veri sağladığını fark edersek, bu bilgileri
              derhal sileriz.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">7. Politika Değişiklikleri</h2>
            <p>
              Bu Gizlilik Politikası&apos;nı zaman zaman güncelleyebiliriz. Önemli değişiklikler yapıldığında
              web sitemizde bildirim yayınlarız. Bu sayfayı düzenli olarak kontrol etmenizi öneririz.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">8. İletişim</h2>
            <p>
              Gizlilik Politikası hakkında sorularınız veya talepleriniz için bizimle iletişime geçebilirsiniz:<br/><br/>
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
