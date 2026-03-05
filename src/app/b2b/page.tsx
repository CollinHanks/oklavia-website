'use client'

import { useState } from 'react'
import { Percent, Package, Truck, ChefHat, Headphones, CreditCard, Send, MessageCircle, Mail, Building2 } from 'lucide-react'
import { CONTACT, B2B_ADVANTAGES, PRODUCTS } from '@/lib/constants'
import { OttomanDivider, OttomanTulip, OttomanMedallion, OttomanStar } from '@/components/ui/OttomanMotifs'
import AnimateIn from '@/components/ui/AnimateIn'

const iconMap: Record<string, React.ElementType> = {
  percent: Percent, package: Package, truck: Truck, 'chef-hat': ChefHat, headphones: Headphones, 'credit-card': CreditCard,
}

export default function B2BPage() {
  const [formData, setFormData] = useState({
    company_name: '', contact_person: '', email: '', phone: '', tax_number: '', city: '', business_type: '', estimated_monthly_order: '', products_interested: [] as string[], message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/b2b-application', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
      if (res.ok) {
        setSuccess(true)
        setFormData({ company_name: '', contact_person: '', email: '', phone: '', tax_number: '', city: '', business_type: '', estimated_monthly_order: '', products_interested: [], message: '' })
      }
    } catch { alert('Bir hata oluştu. Lütfen WhatsApp üzerinden iletişime geçin.') }
    finally { setLoading(false) }
  }

  const toggleProduct = (id: string) => setFormData(prev => ({
    ...prev, products_interested: prev.products_interested.includes(id) ? prev.products_interested.filter(p => p !== id) : [...prev.products_interested, id]
  }))

  const inputClass = 'w-full px-4 py-3.5 rounded-xl bg-navy-800/40 border border-gold-500/10 text-cream-100 text-sm placeholder:text-cream-200/25 focus:outline-none focus:border-gold-500/30 focus:bg-navy-800/60 transition-all duration-300'

  return (
    <div className="py-16 sm:py-14 relative">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 ottoman-pattern-bg" />

      <div className="absolute top-20 right-8 hidden lg:block">
        <OttomanStar size={90} />
      </div>
      <div className="absolute bottom-32 left-6 hidden lg:block">
        <OttomanMedallion size={100} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <OttomanTulip size={16} className="opacity-40" />
            <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-gold-500/15 bg-gold-500/3">
              <Building2 size={12} className="text-gold-500/60" />
              <span className="text-gold-500/70 text-xs font-medium tracking-[0.2em] uppercase">Kurumsal</span>
            </div>
            <OttomanTulip size={16} className="opacity-40 -scale-x-100" />
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-cream-50 mb-3">
            B2B & <span className="text-gold-gradient">Toptan Satış</span>
          </h1>
          <p className="text-cream-200/40 text-sm max-w-xl mx-auto mt-4 mb-6">
            Restoran, kafe, otel ve toptan alıcılarımıza özel fiyatlandırma ve hizmetler sunuyoruz
          </p>
          <OttomanDivider />
        </AnimateIn>

        {/* Advantages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {B2B_ADVANTAGES.map((adv, i) => {
            const Icon = iconMap[adv.icon] || Package
            return (
              <AnimateIn key={adv.title} delay={i * 0.08}>
                <div className="group card-premium rounded-2xl p-7 h-full hover:border-gold-500/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/15 flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-gold-500/5 transition-all duration-500">
                    <Icon size={22} className="text-gold-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-cream-50 mb-2">{adv.title}</h3>
                  <div className="w-6 h-px bg-gold-500/20 mb-3" />
                  <p className="text-cream-200/45 text-[13px] leading-relaxed">{adv.description}</p>
                </div>
              </AnimateIn>
            )
          })}
        </div>

        {/* Quick contact */}
        <AnimateIn className="mb-10">
          <div className="card-premium rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-lg text-cream-50">Hemen iletişime geçin</h3>
              <p className="text-cream-200/35 text-sm mt-1">Toptan sipariş ve fiyat bilgisi için</p>
            </div>
            <div className="flex gap-3">
              <a href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Merhaba, B2B / toptan satış hakkında bilgi almak istiyorum.')}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp rounded-full px-6 py-3 text-sm flex items-center gap-2">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href={`mailto:${CONTACT.email}?subject=B2B Toptan Satış Başvurusu`} className="btn-outline-gold rounded-full px-6 py-3 text-sm flex items-center gap-2">
                <Mail size={14} /> E-posta
              </a>
            </div>
          </div>
        </AnimateIn>

        {/* Application Form */}
        <AnimateIn>
          <div className="card-premium rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/2 rounded-full blur-[80px]" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center border border-gold-500/15">
                  <Building2 size={18} className="text-gold-400" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-xl text-cream-50">B2B Başvuru Formu</h2>
                  <p className="text-cream-200/30 text-xs">Formu doldurun, en kısa sürede sizinle iletişime geçelim</p>
                </div>
              </div>

              {success ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <Send size={32} className="text-green-400" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-cream-50 mb-2">Başvurunuz Alındı!</h3>
                  <p className="text-cream-200/40">En kısa sürede sizinle iletişime geçeceğiz.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gold-400/60 text-[11px] font-semibold uppercase tracking-[0.15em] mb-2">Firma Adı *</label>
                      <input required type="text" value={formData.company_name} onChange={(e) => setFormData({ ...formData, company_name: e.target.value })} className={inputClass} placeholder="Firma adınız" />
                    </div>
                    <div>
                      <label className="block text-gold-400/60 text-[11px] font-semibold uppercase tracking-[0.15em] mb-2">Yetkili Kişi *</label>
                      <input required type="text" value={formData.contact_person} onChange={(e) => setFormData({ ...formData, contact_person: e.target.value })} className={inputClass} placeholder="Ad Soyad" />
                    </div>
                    <div>
                      <label className="block text-gold-400/60 text-[11px] font-semibold uppercase tracking-[0.15em] mb-2">E-posta *</label>
                      <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="firma@ornek.com" />
                    </div>
                    <div>
                      <label className="block text-gold-400/60 text-[11px] font-semibold uppercase tracking-[0.15em] mb-2">Telefon *</label>
                      <input required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} placeholder="05XX XXX XX XX" />
                    </div>
                    <div>
                      <label className="block text-gold-400/60 text-[11px] font-semibold uppercase tracking-[0.15em] mb-2">Vergi Numarası</label>
                      <input type="text" value={formData.tax_number} onChange={(e) => setFormData({ ...formData, tax_number: e.target.value })} className={inputClass} placeholder="Vergi numaranız" />
                    </div>
                    <div>
                      <label className="block text-gold-400/60 text-[11px] font-semibold uppercase tracking-[0.15em] mb-2">Şehir *</label>
                      <input required type="text" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className={inputClass} placeholder="Şehir" />
                    </div>
                    <div>
                      <label className="block text-gold-400/60 text-[11px] font-semibold uppercase tracking-[0.15em] mb-2">İşletme Türü *</label>
                      <select required value={formData.business_type} onChange={(e) => setFormData({ ...formData, business_type: e.target.value })} className={inputClass}>
                        <option value="">Seçiniz</option>
                        <option value="restoran">Restoran</option>
                        <option value="kafe">Kafe</option>
                        <option value="otel">Otel</option>
                        <option value="market">Market / Bakkal</option>
                        <option value="catering">Catering</option>
                        <option value="toptan">Toptan Satıcı</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gold-400/60 text-[11px] font-semibold uppercase tracking-[0.15em] mb-2">Tahmini Aylık Sipariş *</label>
                      <select required value={formData.estimated_monthly_order} onChange={(e) => setFormData({ ...formData, estimated_monthly_order: e.target.value })} className={inputClass}>
                        <option value="">Seçiniz</option>
                        <option value="1-5-tepsi">1-5 Tepsi</option>
                        <option value="5-15-tepsi">5-15 Tepsi</option>
                        <option value="15-50-tepsi">15-50 Tepsi</option>
                        <option value="50+-tepsi">50+ Tepsi</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gold-400/60 text-[11px] font-semibold uppercase tracking-[0.15em] mb-3">İlgilendiğiniz Ürünler</label>
                    <div className="flex flex-wrap gap-2">
                      {PRODUCTS.map(p => (
                        <button key={p.id} type="button" onClick={() => toggleProduct(p.id)}
                          className={`px-4 py-2.5 rounded-xl text-sm transition-all duration-300 ${
                            formData.products_interested.includes(p.id)
                              ? 'bg-gold-500/15 border-gold-400/60 text-gold-300 border shadow-md shadow-gold-500/5'
                              : 'border border-gold-500/10 text-cream-200/50 hover:border-gold-500/25'
                          }`}
                        >{p.name}</button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gold-400/60 text-[11px] font-semibold uppercase tracking-[0.15em] mb-2">Ek Notlar</label>
                    <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={inputClass} placeholder="Özel istekleriniz veya sorularınız..." />
                  </div>

                  <button type="submit" disabled={loading} className="w-full btn-gold rounded-xl px-6 py-4 text-sm flex items-center justify-center gap-2 disabled:opacity-50 font-semibold">
                    {loading ? 'Gönderiliyor...' : <><Send size={16} /> Başvuruyu Gönder</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </AnimateIn>
      </div>
    </div>
  )
}
