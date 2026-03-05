import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kullanım Koşulları',
  description: 'OKLAVİA Unlu Mamülleri Kullanım Koşulları — Web sitesi kullanım şartları, sipariş koşulları, iade politikası ve yasal bilgiler.',
}

export default function KullanimKosullariPage() {
  return (
    <div className="py-10 sm:py-14 relative">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <article className="card-premium rounded-2xl p-6 sm:p-10">
          <h1 className="font-heading font-black text-2xl sm:text-3xl text-cream-50 mb-2">Kullanım Koşulları</h1>
          <p className="text-cream-200/30 text-sm mb-8">Son güncelleme: 5 Mart 2026</p>

          <div className="space-y-6 text-cream-200/55 text-[15px] leading-[1.85]">
            <p>
              Bu Kullanım Koşulları, <strong className="text-cream-100/70">OKLAVİA Unlu Mamülleri</strong> (&quot;OKLAVİA&quot;, &quot;biz&quot;, &quot;bizim&quot;)
              tarafından işletilen www.oklavia.com web sitesinin (&quot;Site&quot;) kullanımına ilişkin şart ve koşulları
              düzenlemektedir. Siteyi kullanarak bu koşulları kabul etmiş sayılırsınız.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">1. Genel Bilgiler</h2>
            <p>
              <strong>Ticaret Unvanı:</strong> OKLAVİA Unlu Mamülleri<br/>
              <strong>Adres:</strong> Şahintepe Mah. Eski İstanbul Cd. Oğulcan İş Merkezi NO:114 İç Kapı NO:2 Başakşehir / İstanbul<br/>
              <strong>E-posta:</strong> info@oklavia.com<br/>
              <strong>Telefon:</strong> 0532 455 45 76<br/>
              <strong>Web sitesi:</strong> www.oklavia.com
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">2. Hizmet Kapsamı</h2>
            <p>
              OKLAVİA, geleneksel Türk unlu mamülleri (su böreği, tereyağlı su böreği, fıstıklı baklava)
              ve Türk kahvesi üretimi, satışı ve teslimatı hizmetleri sunmaktadır. Sipariş işlemleri
              WhatsApp ve telefon aracılığıyla gerçekleştirilmektedir. Web sitesi, ürün tanıtımı,
              bilgilendirme ve iletişim amacıyla kullanılmaktadır.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">3. Sipariş ve Ödeme Koşulları</h2>
            <p>
              • Siparişler WhatsApp (0532 455 45 76) veya telefon aracılığıyla alınmaktadır.<br/>
              • Sipariş onayı, müşteri temsilcimiz tarafından iletilecektir.<br/>
              • Ödeme koşulları sipariş sırasında bildirilir. Havale/EFT ve kapıda ödeme seçenekleri mevcuttur.<br/>
              • Fiyatlar KDV dahildir ve önceden haber verilmeksizin değiştirilebilir.<br/>
              • Minimum sipariş tutarı teslimat bölgesine göre değişiklik gösterebilir.<br/>
              • B2B müşterilere özel fiyatlandırma ve ödeme koşulları uygulanabilir.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">4. Teslimat Koşulları</h2>
            <p>
              • Teslimat, frigolu soğutmalı araçlarla soğuk zincir garantisi altında yapılır.<br/>
              • İstanbul ve çevre illere 1-2 iş günü, diğer illere 1-3 iş günü içinde teslimat yapılır.<br/>
              • Teslimat adresi doğru ve eksiksiz bildirilmelidir. Yanlış adres bilgisinden kaynaklanan gecikmeler ve ek masraflar müşteriye aittir.<br/>
              • Teslimat sırasında alıcının veya yetkilisinin bulunması gerekmektedir.<br/>
              • Ürünlerin teslim anında kontrol edilmesi ve varsa hasarın tutanak altına alınması gerekmektedir.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">5. İade ve İptal Politikası</h2>
            <p>
              Gıda ürünleri söz konusu olduğundan, iade ve iptal koşulları aşağıdaki şekilde uygulanır:
            </p>
            <p>
              • <strong className="text-cream-100/70">Sipariş iptali:</strong> Sipariş hazırlığına başlanmadan önce yapılan iptaller kabul edilir. Hazırlığı başlayan siparişlerde iptal kabul edilmez.<br/>
              • <strong className="text-cream-100/70">Hasarlı ürün:</strong> Teslimat sırasında ürünün hasarlı olduğu tespit edilirse, fotoğraflı bildirim ile 24 saat içinde info@oklavia.com adresine bildirilmelidir. Haklı görülen taleplerde ürün değişimi veya iade yapılır.<br/>
              • <strong className="text-cream-100/70">Soğuk zincir kırılması:</strong> Teslimat sırasında soğuk zincirin kırıldığı tespit edilirse, ürün tamamen değiştirilir.<br/>
              • <strong className="text-cream-100/70">Cayma hakkı:</strong> 6502 sayılı Tüketicinin Korunması Hakkında Kanun uyarınca, çabuk bozulabilir nitelikteki gıda ürünlerinde cayma hakkı uygulanmaz.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">6. Fikri Mülkiyet Hakları</h2>
            <p>
              Web sitesindeki tüm içerik (metin, görsel, logo, tasarım, yazılım kodu, grafik, marka)
              OKLAVİA&apos;nın fikri mülkiyetidir ve telif hakkı ile korunmaktadır. Bu içeriklerin izinsiz
              kopyalanması, çoğaltılması, dağıtılması veya ticari amaçlarla kullanılması yasaktır.
              &quot;OKLAVİA&quot; markası ve logosu tescilli ticari markadır.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">7. Web Sitesi Kullanım Kuralları</h2>
            <p>
              Siteyi kullanırken aşağıdaki kurallara uymayı kabul edersiniz:<br/><br/>
              • Siteyi yasal amaçlarla ve bu koşullara uygun şekilde kullanmak<br/>
              • Siteye zarar verebilecek, devre dışı bırakabilecek veya aşırı yükleyebilecek faaliyetlerde bulunmamak<br/>
              • Siteye yetkisiz erişim sağlamaya çalışmamak<br/>
              • Formlara doğru ve güncel bilgiler girmek<br/>
              • Başkalarının kişisel bilgilerini izinsiz paylaşmamak
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">8. Sorumluluk Sınırlandırması</h2>
            <p>
              OKLAVİA, web sitesinin kesintisiz, hatasız veya güvenli olacağını garanti etmez.
              Web sitesindeki bilgiler genel bilgilendirme amaçlıdır ve zaman zaman güncellenebilir.
              Mücbir sebepler (doğal afet, savaş, pandemi, hükümet kısıtlamaları, teknik arızalar)
              nedeniyle oluşan aksaklıklardan OKLAVİA sorumlu tutulamaz.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">9. Uygulanacak Hukuk ve Uyuşmazlık Çözümü</h2>
            <p>
              Bu Kullanım Koşulları, Türkiye Cumhuriyeti kanunlarına tabidir. Uyuşmazlık halinde
              İstanbul Mahkemeleri ve İcra Daireleri yetkilidir. Tüketici uyuşmazlıklarında ilgili
              Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri&apos;ne başvurulabilir.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">10. Değişiklikler</h2>
            <p>
              OKLAVİA, bu Kullanım Koşulları&apos;nı önceden bildirim yapmaksızın güncelleme hakkını saklı tutar.
              Güncel koşullar bu sayfada yayınlanır. Siteyi kullanmaya devam etmeniz, güncel koşulları kabul
              ettiğiniz anlamına gelir.
            </p>

            <h2 className="font-heading font-bold text-xl text-cream-50 mt-8 border-l-2 border-gold-500/30 pl-4">11. İletişim</h2>
            <p>
              Kullanım Koşulları hakkında sorularınız için:<br/><br/>
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
