import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center relative">
      <div className="relative text-center px-4">
        <h1 className="font-heading font-black text-8xl sm:text-9xl text-gold-gradient mb-4">404</h1>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-cream-50 mb-4">
          Sayfa Bulunamadı
        </h2>
        <p className="text-cream-200/50 text-base mb-8 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn-gold rounded-full px-8 py-3 text-sm">
            Ana Sayfaya Dön
          </Link>
          <Link href="/urunler" className="btn-outline-gold rounded-full px-8 py-3 text-sm">
            Ürünleri İncele
          </Link>
        </div>
      </div>
    </div>
  )
}
