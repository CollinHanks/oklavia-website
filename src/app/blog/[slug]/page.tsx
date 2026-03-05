'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'
import { getSupabase, type BlogPost } from '@/lib/supabase'

const categoryColors: Record<string, string> = {
  tarifler: 'bg-orange-500/10 text-orange-400 border-orange-500/15',
  hikayeler: 'bg-blue-500/10 text-blue-400 border-blue-500/15',
  duyurular: 'bg-green-500/10 text-green-400 border-green-500/15',
}

const categoryLabels: Record<string, string> = {
  tarifler: 'Tarifler', hikayeler: 'Hikayeler', duyurular: 'Duyurular',
}

const FALLBACK: Record<string, { title: string; author: string; published_at: string; category: string; image: string; content: string }> = {
  'evde-mukemmel-su-boregi-yapmanin-sirlari': {
    title: 'Evde Mükemmel Su Böreği Yapmanın Sırları', author: 'OKLAVİA Mutfağı', published_at: '2025-02-15', category: 'tarifler', image: '/images/products/su-boregi-2.jpg',
    content: `
      <p>Su böreği, Türk mutfağının taçsız kraliçesidir. Kahvaltı sofralarının vazgeçilmezi, misafir ağırlamanın en zarif yolu ve bayramların olmazsa olmazı olan su böreği, aynı zamanda yapımı en zahmetli lezzetlerden biridir. Peki, evde profesyonel düzeyde bir su böreği yapmak mümkün mü? Cevap: Evet — doğru tekniklerle kesinlikle mümkün.</p>

      <h2>Malzemeler</h2>
      <p>Klasik bir su böreği için ihtiyacınız olan malzemeler oldukça basittir: un, su, yumurta, tuz, süzme beyaz peynir, lor peyniri ve ayçiçek yağı. <strong>OKLAVİA olarak biz de aynı malzemeleri kullanıyoruz</strong> — hiçbir katkı maddesi, koruyucu veya yapay aroma eklemiyoruz. Sırrımız malzemelerin kalitesinde ve el emeğinde gizli.</p>

      <h2>Hamurun Hazırlanması</h2>
      <p>Su böreğinin temeli, doğru kıvamda yoğrulmuş elastik bir hamurdur. 500 gram un, 1 yumurta, 1 çay kaşığı tuz ve yaklaşık 200 ml ılık su ile hamur yoğurun. Hamur kulak memesi yumuşaklığında olmalı — ne çok sert ne de yapışkan. Yoğurduktan sonra <strong>en az 30 dakika</strong> dinlendirin. Bu süre hamurun gluteninin gevşemesi ve açılırken yırtılmaması için kritiktir.</p>

      <h2>Açma Tekniği: Oklava ile İnce Açmanın Sırrı</h2>
      <p>Dinlenen hamuru 8-10 eşit parçaya bölün. Her parçayı unlanmış tezgahta oklava ile açın. İşin püf noktası: <strong>her seferinde hamuru çeyrek tur çevirerek açmak</strong>. Böylece yuvarlak kalır ve eşit incelir. Yufkanız ne kadar ince olursa, böreğiniz o kadar katmerli ve lezzetli olur. İdeal kalınlık, altındaki gazete yazısını okuyabileceğiniz kadar incedir.</p>

      <h2>Haşlama İşlemi — Su Böreğini Özel Kılan Adım</h2>
      <p>Su böreğini diğer böreklerden ayıran şey <strong>haşlama</strong> adımıdır. Geniş bir tencerede bol su kaynatın ve bir kaşık yağ ekleyin. Açtığınız yufkaları teker teker 2-3 dakika haşlayın. Haşlanan yufkayı hemen buzlu suya alın — bu şok, yufkanın yapısını korur ve yumuşacık kalmasını sağlar.</p>

      <h2>Katmerli Dizim</h2>
      <p>Yağlanmış tepsinize ilk 3-4 yufkayı sererek başlayın, aralarına yağ sürün. Ortaya süzme beyaz peynir ve lor peyniri karışımından oluşan iç harcınızı yayın. Üzerine kalan yufkaları serin, yine aralarına yağ sürün. En üste yumurta sarısı ve biraz süt karışımı sürün.</p>

      <h2>Pişirme</h2>
      <p>Önceden ısıtılmış 180°C fırında <strong>35-40 dakika</strong> pişirin. Üstü altın sarısı renk alana kadar bekleyin. Fırından çıkardıktan sonra 10 dakika dinlendirin — böylece katlar oturur ve kesim yaparken dağılmaz.</p>

      <h2>Zahmetine Değmez mi Diyorsanız...</h2>
      <p>Eğer bu sürece zaman ayıramıyorsanız, <a href="/urunler" style="color: #D4AF37; text-decoration: underline;">OKLAVİA'nın el yapımı su böreğini</a> dondurulmuş olarak kapınıza kadar getiriyoruz. Aynı geleneksel tarif, aynı doğal malzemeler, aynı el emeği — sadece siz fırına atıp 25-30 dakikada sıcacık servis yapın. <a href="https://wa.me/+905324554576?text=Merhaba, su böreği sipariş vermek istiyorum." style="color: #D4AF37; text-decoration: underline;">WhatsApp'tan hemen sipariş verin</a>.</p>
    `,
  },
  'turk-kahvesinin-tarihi-ve-kulturel-onemi': {
    title: 'Türk Kahvesinin Tarihi ve Kültürel Önemi', author: 'OKLAVİA', published_at: '2025-02-01', category: 'hikayeler', image: '/images/blog/turk-kahvesi.jpg',
    content: `
      <p>Türk kahvesi, sadece bir içecek değildir. Yüzyıllardır süren bir gelenek, bir sohbet ritüeli, bir misafirperverlik simgesi ve 2013'ten bu yana <strong>UNESCO Somut Olmayan Kültürel Miras</strong> listesinde yer alan bir kültürel hazinedir. Peki, bir fincan kahvenin arkasında nasıl bu kadar derin bir tarih yatıyor?</p>

      <h2>Osmanlı'dan Günümüze: 500 Yıllık Yolculuk</h2>
      <p>Kahvenin Anadolu'ya gelişi 16. yüzyılın ortalarına dayanır. Yemen valisi Özdemir Paşa'nın İstanbul'a getirdiği kahve çekirdekleri, kısa sürede saraydan sokaklara yayıldı. İlk kahvehaneler 1554'te İstanbul'da açıldı ve burada sadece kahve içilmez; şiir okunur, satranç oynanır, siyaset tartışılırdı. Kahvehaneler, Osmanlı'nın "sosyal medyası" gibiydi.</p>

      <h2>Türk Kahvesi Nasıl Yapılır?</h2>
      <p>Gerçek Türk kahvesi, <strong>ince öğütülmüş kahve</strong>, soğuk su ve isteğe göre şeker ile cezveye konularak kısık ateşte pişirilir. En önemli kural: kahve <strong>asla kaynatılmaz</strong>. Yüzeyde köpük oluşmaya başladığında ateşten alınır, köpük fincanlara paylaştırılır ve tekrar ateşe konur. Bu işlem 2-3 kez tekrarlanır. Sonuç: yoğun aromalı, bol köpüklü, telvesiyle karakteristik bir Türk kahvesi.</p>

      <h2>Kültürel Önemi</h2>
      <p>Türk toplumunda kahve, sadece bir içecek olmanın çok ötesindedir. "Bir fincan kahvenin 40 yıl hatırı vardır" sözü, kahvenin ikram kültüründeki yerini özetler. Kız isteme merasimlerinde gelinin damada kahve sunması, düğünlerde kahve ikramı, cenaze evlerinde acı kahve geleneği — hepsi Türk kahvesinin sosyal yaşamdaki derin izleridir.</p>

      <h2>Falda Ne Var?</h2>
      <p>Kahve falı, Türk kahve kültürünün en eğlenceli yanıdır. Fincan içilip ters çevrildikten sonra telveden okunan şekiller, yüzyıllardır sohbetin ve merakın kaynağıdır. Bilimsel bir yanı olmasa da, insanları bir araya getiren güzel bir gelenektir.</p>

      <h2>OKLAVİA Türk Kahvesi</h2>
      <p><a href="/urunler" style="color: #D4AF37; text-decoration: underline;">OKLAVİA Türk kahvesi</a>, Brezilya ve Kolombiya'dan özenle seçilmiş %100 Arabica çekirdeklerden üretilir. Orta-koyu kavurma seviyesinde, geleneksel yöntemlerle kavrulup Türk kahvesine özgü ince öğütme ile hazırlanır. Hava almayan özel ambalajı sayesinde tazeliğini uzun süre korur.</p>
      <p>Misafirlerinize gerçek bir Türk kahvesi deneyimi yaşatmak mı istiyorsunuz? <a href="https://wa.me/+905324554576?text=Merhaba, Türk kahvesi sipariş vermek istiyorum." style="color: #D4AF37; text-decoration: underline;">WhatsApp'tan sipariş verin</a>, kapınıza kadar gelsin.</p>
    `,
  },
  'oklavia-artik-tum-turkiyeye-teslimat-yapiyor': {
    title: 'OKLAVİA Artık Tüm Türkiye\'ye Teslimat Yapıyor!', author: 'OKLAVİA', published_at: '2025-01-20', category: 'duyurular', image: '/images/general/borek-melting.jpg',
    content: `
      <p>Büyük heyecanla duyuruyoruz: OKLAVİA artık <strong>tüm Türkiye'nin 81 iline</strong> soğuk zincir garantisiyle teslimat yapıyor! İstanbul'dan Hakkari'ye, Edirne'den Artvin'e — nerede olursanız olun, geleneksel lezzetlerimiz kapınıza kadar geliyor.</p>

      <h2>Soğuk Zincir Nedir ve Neden Önemli?</h2>
      <p>Soğuk zincir teslimat, dondurulmuş ürünlerin üretim noktasından tüketim noktasına kadar kesintisiz olarak -18°C'de muhafaza edilmesi demektir. Bu zincir herhangi bir noktada kırılırsa, ürünün kalitesi, lezzeti ve güvenliği tehlikeye girer. OKLAVİA olarak <strong>frigolu soğutmalı araç filomuz</strong> sayesinde bu zinciri hiçbir aşamada kırmadan ürünlerinizi ulaştırıyoruz.</p>

      <h2>Teslimat Süreleri</h2>
      <p>İstanbul ve çevre illere (Kocaeli, Bursa, Tekirdağ, Edirne, Sakarya) <strong>1-2 iş günü</strong> içinde teslimat yapıyoruz. Türkiye'nin geri kalan tüm illerine ise <strong>1-3 iş günü</strong> içinde ulaşıyoruz. Siparişiniz aynı gün hazırlanır ve en kısa sürede yola çıkar.</p>

      <h2>Nasıl Sipariş Verebilirsiniz?</h2>
      <p>Sipariş vermek çok kolay:</p>
      <p>1. <a href="https://wa.me/+905324554576?text=Merhaba, sipariş vermek istiyorum." style="color: #D4AF37; text-decoration: underline;">WhatsApp'tan yazın</a> veya <strong>0532 455 45 76</strong> numarasını arayın.<br/>
      2. İstediğiniz <a href="/urunler" style="color: #D4AF37; text-decoration: underline;">ürünleri</a> ve miktarları belirtin.<br/>
      3. Adres bilgilerinizi paylaşın.<br/>
      4. Ödemenizi yapın — siparişiniz aynı gün hazırlanır!</p>

      <h2>Toptan Alıcılar İçin</h2>
      <p>Restoran, kafe, otel veya catering firması mısınız? <a href="/b2b" style="color: #D4AF37; text-decoration: underline;">B2B sayfamızdan</a> kurumsal başvuru yaparak özel fiyatlandırma ve düzenli teslimat planı avantajlarından yararlanabilirsiniz.</p>

      <p>OKLAVİA ile mesafe artık bir engel değil. <strong>Anadolu'nun mirası, sofralarınızın tacı</strong> — nerede olursanız olun.</p>
    `,
  },
  'fistikli-baklava-antepten-sofralariniza': {
    title: 'Fıstıklı Baklava: Antep\'ten Sofralarınıza', author: 'OKLAVİA Mutfağı', published_at: '2025-01-10', category: 'hikayeler', image: '/images/general/baklava-ottoman.jpg',
    content: `
      <p>Fıstıklı baklava, Türk tatlı kültürünün en görkemli ve en köklü temsilcisidir. Bayramların, kutlamaların, düğünlerin ve özel günlerin olmazsa olmazı olan baklava, yüzyıllar boyunca Osmanlı sarayından Anadolu'nun en mütevazı sofralarına kadar her yerde sevgiyle ikram edilmiştir.</p>

      <h2>Baklavanın Kökeni</h2>
      <p>Baklavanın tarihi, bazı kaynaklara göre Asur İmparatorluğu'na kadar uzanır. Ancak bugün bildiğimiz şekliyle, ince yufkalı, fıstıklı, şerbetli baklava <strong>Osmanlı saray mutfağında</strong> mükemmelleştirilmiştir. Topkapı Sarayı'nda her Ramazan ayının 15. gününde askerlere baklava dağıtılan "Baklava Alayı" geleneği, baklavanın kültürel önemini gözler önüne serer.</p>

      <h2>Antep Fıstığı: Yeşil Altın</h2>
      <p>Baklavanın kalitesini belirleyen en kritik faktör fıstıktır. <strong>Gaziantep fıstığı</strong>, dünyada eşi benzeri olmayan aroması, canlı yeşil rengi ve yağ oranıyla baklavanın olmazsa olmaz malzemesidir. OKLAVİA olarak baklavalarımızda yalnızca <strong>birinci sınıf, taze Antep fıstığı</strong> kullanıyoruz. Fıstıklarımız Gaziantep'in en kaliteli bahçelerinden tedarik edilir.</p>

      <h2>OKLAVİA Baklavası Nasıl Hazırlanır?</h2>
      <p>Baklavamızın yapımı sabır ve ustalık ister. <strong>40'tan fazla ince yufka katmanı</strong> tek tek açılır, her katmanın arasına eritilmiş tereyağı sürülür ve bol miktarda Antep fıstığı serpiştilir. Pişirildikten sonra özel şerbetimizle buluşturulur. Şerbetimiz ne çok tatlı ne de yavan — tam kıvamında bir denge sunar.</p>

      <h2>Saklama ve Servis</h2>
      <p>OKLAVİA baklavası dondurulmuş olarak gönderilir. -18°C'de 3 aya kadar saklayabilirsiniz. Servis etmek istediğinizde oda sıcaklığında 2-3 saat çözdürmeniz yeterlidir. Hediye paketi seçeneğimiz, bayram ve özel günler için idealdir.</p>

      <p><a href="/urunler" style="color: #D4AF37; text-decoration: underline;">Fıstıklı baklavamızı keşfedin</a> ve <a href="https://wa.me/+905324554576?text=Merhaba, fıstıklı baklava sipariş vermek istiyorum." style="color: #D4AF37; text-decoration: underline;">WhatsApp'tan hemen sipariş verin</a>. Antep'in yeşil altını, sofralarınızın tacı olsun.</p>
    `,
  },
  'tereyagli-su-boregi-neden-bu-kadar-seviliyor': {
    title: 'Tereyağlı Su Böreği Neden Bu Kadar Seviliyor?', author: 'OKLAVİA Mutfağı', published_at: '2025-03-01', category: 'tarifler', image: '/images/products/tereyagli-su-boregi.jpg',
    content: `
      <p>Türk mutfağında börek denince akla ilk gelen su böreğidir. Peki, su böreğinin bir de <strong>tereyağlı versiyonu</strong> olduğunu ve bunun bambaşka bir lezzet dünyasının kapısını araladığını biliyor muydunuz?</p>

      <h2>Tereyağı Farkı</h2>
      <p>Klasik su böreğinde yufkalar arasına genellikle ayçiçek yağı veya zeytinyağı sürülür. Tereyağlı su böreğinde ise her katmanın arasına <strong>gerçek tereyağı</strong> uygulanır. Bu basit değişiklik, böreğin lezzetini tamamen dönüştürür: üst kısım çıtır çıtır olurken, iç kısım kremamsı bir yumuşaklık kazanır. Tereyağının kendine has aroması, peynirli iç harçla buluştuğunda ortaya çıkan tat, kelimelerle anlatılmaktan çok, deneyimlenmesi gereken bir şeydir.</p>

      <h2>Hangi Tereyağı Kullanılmalı?</h2>
      <p>Tereyağlı su böreğinde kullanılan tereyağının kalitesi büyük önem taşır. OKLAVİA'da <strong>%100 saf, katkısız tereyağı</strong> kullanıyoruz. Margarin veya bitkisel yağ karışımları kesinlikle tercih etmiyoruz. Gerçek tereyağı hem lezzet hem de doku açısından çok büyük fark yaratır.</p>

      <h2>Ne Zaman Yenmeli?</h2>
      <p>Tereyağlı su böreği, günün her öğünüyle uyumludur. Sabah kahvaltısında bir dilim çay ile mükemmel uyum sağlar. Öğle yemeğinde yanına bir kase çorba ekleyerek doyurucu bir öğün elde edebilirsiniz. Akşam yemeğinde ise salata eşliğinde hafif ama tatmin edici bir seçenek sunar. Misafir sofralarında ise her zaman göz dolduran bir lezzettir.</p>

      <h2>OKLAVİA'dan Sipariş Edin</h2>
      <p><a href="/urunler" style="color: #D4AF37; text-decoration: underline;">Tereyağlı su böreğimizi</a> dondurulmuş olarak kapınıza getiriyoruz. Fırınınızda 180°C'de 25-30 dakika pişirmeniz yeterli. <a href="https://wa.me/+905324554576?text=Merhaba, tereyağlı su böreği sipariş vermek istiyorum." style="color: #D4AF37; text-decoration: underline;">WhatsApp'tan sipariş verin</a>, tereyağının büyüsünü sofralarınızda yaşayın.</p>
    `,
  },
  'dondurulmus-borek-nasil-pisirilir': {
    title: 'Dondurulmuş Börek Nasıl Pişirilir? Püf Noktaları', author: 'OKLAVİA Mutfağı', published_at: '2025-02-20', category: 'tarifler', image: '/images/products/su-boregi.jpg',
    content: `
      <p>Dondurulmuş börek, modern yaşamın en pratik lezzetlerinden biridir. Ancak doğru pişirme tekniğini bilmezseniz, sonuç hayal kırıklığı olabilir. İşte <a href="/urunler" style="color: #D4AF37; text-decoration: underline;">OKLAVİA dondurulmuş böreklerini</a> mükemmel pişirmenin altın kuralları.</p>

      <h2>Kural #1: Çözdürmeden Pişirmeyin</h2>
      <p>En yaygın hata, dondurulmuş böreği direkt fırına vermektir. Böreğinizi fırına koymadan önce <strong>buzdolabında 4-6 saat</strong> veya tezgahta 1-2 saat bekletin. Tamamen çözmesine gerek yok — hafif yumuşaması yeterli. Bu sayede iç kısım düzgün pişerken dış kısım yanmaz.</p>

      <h2>Kural #2: Fırını Önceden Isıtın</h2>
      <p>Fırınınızı <strong>180°C</strong>'ye önceden ısıtın. Soğuk fırına konan börek, eşit pişmez ve istenilen kıtırlığa ulaşamaz. Elektrikli fırınlarda üst-alt ısıtıcıyı açın; fan destekli modda 170°C yeterlidir.</p>

      <h2>Kural #3: Üstüne Yumurta Sürün</h2>
      <p>Pişirmeden önce böreğin üstüne <strong>yumurta sarısı + 1 yemek kaşığı süt</strong> karışımı sürün. Bu, üstünün güzel altın rengi almasını sağlar. İsterseniz üzerine birkaç çörek otu veya susam da serpebilirsiniz.</p>

      <h2>Kural #4: Süre ve Kontrol</h2>
      <p>OKLAVİA su böreği için ortalama pişirme süresi <strong>25-30 dakika</strong>. Ancak her fırın farklıdır, bu yüzden 20. dakikadan itibaren kontrol edin. Üstü altın sarısı, kenarları hafifçe kızarmış olduğunda hazırdır.</p>

      <h2>Kural #5: Dinlendirin</h2>
      <p>Fırından çıkan böreği <strong>5-10 dakika dinlendirin</strong>. Bu sürede böreğin içi oturur, katlar birbirine yapışır ve kestiğinizde dağılmaz. Sabırsızlanmayın — bu 5 dakika sonucu büyük ölçüde iyileştirir.</p>

      <h2>Bonus: Kalan Böreği Nasıl Isıtırsınız?</h2>
      <p>Artan böreği ertesi gün ısıtmak için en iyi yöntem <strong>tavada kısık ateşte</strong> ısıtmaktır. Üzerine birkaç damla su serpip kapağını kapatın — böylece hem kıtırlar hem de içi yumuşar. Mikrodalga kullanmaktan kaçının çünkü böreği lastik gibi yapar.</p>

      <p><a href="/urunler" style="color: #D4AF37; text-decoration: underline;">OKLAVİA ürünlerini keşfedin</a> ve bu püf noktalarını uygulayarak mükemmel sonuçlar elde edin. <a href="/iletisim" style="color: #D4AF37; text-decoration: underline;">Sorularınız mı var? Bize ulaşın.</a></p>
    `,
  },
}

export default function BlogDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<{ title: string; author: string; published_at: string; category: string; image: string; content: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      try {
        const sb = getSupabase(); if (!sb) throw new Error('no sb'); const { data, error } = await sb
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .eq('published', true)
          .single()

        if (data && !error) {
          setPost({ title: data.title, author: data.author, published_at: data.published_at, category: data.category, image: data.cover_image || '/images/general/baklava-ottoman.jpg', content: data.content })
        } else if (FALLBACK[slug]) {
          setPost(FALLBACK[slug])
        }
      } catch {
        if (FALLBACK[slug]) setPost(FALLBACK[slug])
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative w-10 h-10 rounded-full border-2 border-gold-500/10 border-t-gold-500 animate-spin" />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative text-center">
          <h1 className="font-heading font-black text-6xl text-gold-gradient mb-4">404</h1>
          <p className="text-cream-200/50 mb-6">Bu blog yazısı bulunamadı.</p>
          <Link href="/blog" className="btn-gold rounded-full px-6 py-3 text-sm">Blog&apos;a Dön</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-10 sm:py-14 relative">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <Link href="/blog" className="inline-flex items-center gap-2 text-cream-200/40 hover:text-gold-400 text-sm mb-8 transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Blog&apos;a Dön
          </Link>
        </AnimateIn>

        <AnimateIn>
          <div className="aspect-[16/8] rounded-2xl overflow-hidden mb-8 relative">
            <Image src={post.image} alt={post.title} fill className="object-cover" sizes="100vw" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-navy-900/60 to-transparent" />
          </div>
        </AnimateIn>

        <AnimateIn>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className={`px-3 py-1 rounded-full text-[11px] font-semibold border ${categoryColors[post.category] || 'bg-gold-500/10 text-gold-400 border-gold-500/15'}`}>
              <Tag size={10} className="inline mr-1" />
              {categoryLabels[post.category] || post.category}
            </span>
            <span className="text-cream-200/30 text-sm flex items-center gap-1.5">
              <Calendar size={12} />
              {new Date(post.published_at).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="text-cream-200/20">•</span>
            <span className="text-cream-200/30 text-sm">{post.author}</span>
          </div>
        </AnimateIn>

        <AnimateIn>
          <h1 className="font-heading font-black text-3xl sm:text-4xl text-cream-50 mb-3 leading-tight">{post.title}</h1>
          <div className="w-12 h-px bg-gold-500/30 mb-8" />
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <article
            className="prose prose-invert prose-gold max-w-none
              [&_p]:text-cream-200/55 [&_p]:text-[15px] [&_p]:leading-[1.9] [&_p]:mb-5
              [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-xl [&_h2]:text-cream-50 [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:border-l-2 [&_h2]:border-gold-500/30 [&_h2]:pl-4
              [&_strong]:text-gold-400 [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div className="mt-12 pt-6 border-t border-gold-500/8">
            <div className="card-premium rounded-2xl p-6 sm:p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-cream-50 mb-2">Bu yazıyı beğendiniz mi?</h3>
              <p className="text-cream-200/40 text-sm mb-6">OKLAVİA ürünlerini keşfedin.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link href="/urunler" className="btn-gold rounded-full px-6 py-3 text-sm">Ürünleri İncele</Link>
                <Link href="/blog" className="btn-outline-gold rounded-full px-6 py-3 text-sm">Diğer Yazılar</Link>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </div>
  )
}
