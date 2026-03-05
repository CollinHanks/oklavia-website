import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni',
  description: 'OKLAVİA Unlu Mamülleri KVKK Aydınlatma Metni — 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin işlenmesine ilişkin bilgilendirme.',
  robots: { index: true, follow: true },
}

export default function KVKKPage() {
  return (
    <div className="py-10 sm:py-14 relative">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <article className="card-premium rounded-2xl p-6 sm:p-10">
          <h1 className="font-heading font-black text-2xl sm:text-3xl text-cream-50 mb-2">KVKK Aydınlatma Metni</h1>
          <p className="text-cream-200/30 text-sm mb-8">Son güncelleme: 5 Mart 2026</p>

          <div className="space-y-6 text-cream-200/55 text-[15px] leading-[1.85]">
            <p>
              İşbu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca,
              <strong className="text-cream-100/70"> OKLAVİA Unlu Mamülleri</strong> (&quot;Şirket&quot;) tarafından
              veri sorumlusu sıfatıyla kişisel verilerinizin işlenmesine ilişkin olarak sizleri bilgilendirmek
              amacıyla hazırlanmıştır.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">1. Veri Sorumlusu</h2>
            <p>
              Veri sorumlusu, OKLAVİA Unlu Mamülleri&apos;dir.<br/>
              <strong>Adres:</strong> Şahintepe Mah. Eski İstanbul Cd. Oğulcan İş Merkezi NO:114 İç Kapı NO:2 Başakşehir / İstanbul<br/>
              <strong>E-posta:</strong> info@oklavia.com<br/>
              <strong>Telefon:</strong> 0532 455 45 76
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">2. İşlenen Kişisel Veriler</h2>
            <p>Web sitemiz ve hizmetlerimiz kapsamında aşağıdaki kişisel verileriniz işlenebilmektedir:</p>
            <p>
              <strong className="text-cream-100/70">Kimlik Bilgileri:</strong> Ad, soyad, unvan<br/>
              <strong className="text-cream-100/70">İletişim Bilgileri:</strong> E-posta adresi, telefon numarası, adres bilgileri<br/>
              <strong className="text-cream-100/70">İşlem Güvenliği Bilgileri:</strong> IP adresi, tarayıcı bilgisi, çerez verileri, log kayıtları<br/>
              <strong className="text-cream-100/70">Müşteri İşlem Bilgileri:</strong> Sipariş bilgileri, talep ve şikayet kayıtları<br/>
              <strong className="text-cream-100/70">Ticari Bilgiler:</strong> Firma adı, vergi numarası (B2B başvurularında)
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">3. Kişisel Verilerin İşlenme Amaçları</h2>
            <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
            <p>
              • Sipariş süreçlerinin yürütülmesi ve teslimat işlemlerinin gerçekleştirilmesi<br/>
              • İletişim formları aracılığıyla gelen talep ve şikayetlerin değerlendirilmesi<br/>
              • B2B başvurularının işlenmesi ve kurumsal müşteri ilişkilerinin yönetimi<br/>
              • Yasal yükümlülüklerin yerine getirilmesi (vergi mevzuatı, tüketici hakları vb.)<br/>
              • Hizmet kalitesinin artırılması ve müşteri memnuniyetinin ölçülmesi<br/>
              • Web sitesi güvenliğinin sağlanması ve kötüye kullanımın önlenmesi<br/>
              • İstatistiksel analizlerin yapılması (anonim olarak)<br/>
              • Açık rızanızın bulunması halinde, ürün ve hizmetlerimize ilişkin tanıtım ve bilgilendirme yapılması
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">4. Kişisel Verilerin İşlenme Hukuki Sebepleri</h2>
            <p>
              Kişisel verileriniz, KVKK&apos;nın 5. maddesinde belirtilen aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:
            </p>
            <p>
              • Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması (sipariş işlemleri)<br/>
              • Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi (vergi, muhasebe)<br/>
              • Meşru menfaatlerimiz için zorunlu olması (hizmet kalitesi, güvenlik)<br/>
              • İlgili kişinin açık rızası (pazarlama iletişimi)
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">5. Kişisel Verilerin Aktarılması</h2>
            <p>
              Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda; iş ortaklarımıza,
              kargo ve lojistik firmalarına, yasal zorunluluk halinde kamu kurumlarına, bilgi teknolojileri
              hizmet sağlayıcılarına (sunucu, veritabanı, e-posta) KVKK&apos;nın 8. ve 9. maddelerine uygun olarak
              aktarılabilmektedir.
            </p>
            <p>
              Web sitemizde kullanılan altyapı hizmetleri (Vercel, Supabase) yurt dışında sunucular üzerinde
              barındırılmakta olup, bu kapsamda verileriniz KVKK&apos;nın 9. maddesi çerçevesinde yurt dışına
              aktarılabilmektedir.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">6. Kişisel Verilerin Saklanma Süresi</h2>
            <p>
              Kişisel verileriniz, işlenme amaçlarının gerektirdiği süre boyunca ve yasal yükümlülüklerimiz
              kapsamında (Türk Ticaret Kanunu uyarınca 10 yıl, Vergi Usul Kanunu uyarınca 5 yıl) saklanmaktadır.
              Bu sürelerin sona ermesinin ardından kişisel verileriniz silinir, yok edilir veya anonim hale getirilir.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">7. Veri Sahibinin Hakları</h2>
            <p>KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
            <p>
              • Kişisel verilerinizin işlenip işlenmediğini öğrenme<br/>
              • Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme<br/>
              • Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme<br/>
              • Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme<br/>
              • Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme<br/>
              • KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme<br/>
              • Kişisel verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme<br/>
              • Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">8. Başvuru Yöntemi</h2>
            <p>
              Yukarıda sayılan haklarınıza ilişkin taleplerinizi, kimliğinizi tespit edici bilgiler ile birlikte
              aşağıdaki yöntemlerden biriyle iletebilirsiniz:
            </p>
            <p>
              <strong>E-posta:</strong> info@oklavia.com (konu kısmına &quot;KVKK Başvurusu&quot; yazınız)<br/>
              <strong>Posta:</strong> Şahintepe Mah. Eski İstanbul Cd. Oğulcan İş Merkezi NO:114 İç Kapı NO:2 Başakşehir / İstanbul
            </p>
            <p>
              Başvurularınız en geç 30 gün içinde ücretsiz olarak sonuçlandırılacaktır.
              İşlemin ayrıca bir maliyet gerektirmesi halinde, Kişisel Verileri Koruma Kurulu tarafından
              belirlenen tarifedeki ücret alınabilecektir.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
