'use client'

import { useState } from 'react'
import { Send, MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import { OttomanDivider, OttomanTulip, OttomanMedallion, OttomanFloral } from '@/components/ui/OttomanMotifs'
import AnimateIn from '@/components/ui/AnimateIn'

const contactCards = [
  { icon: MessageCircle, title: 'WhatsApp', value: CONTACT.phone, href: `https://wa.me/${CONTACT.whatsapp}?text=Merhaba, bilgi almak istiyorum.`, accent: 'from-green-500/10', iconColor: 'text-green-400' },
  { icon: Phone, title: 'Telefon', value: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}`, accent: 'from-blue-500/10', iconColor: 'text-blue-400' },
  { icon: Mail, title: 'E-posta', value: CONTACT.email, href: `mailto:${CONTACT.email}`, accent: 'from-purple-500/10', iconColor: 'text-purple-400' },
  { icon: Clock, title: 'Çalışma Saatleri', value: 'Pzt-Cmt: 08:00-20:00', href: undefined, accent: 'from-gold-500/10', iconColor: 'text-gold-400' },
]

export default function IletisimPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
      if (res.ok) { setSuccess(true); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }) }
    } catch { alert('Bir hata oluştu. Lütfen WhatsApp üzerinden iletişime geçin.') }
    finally { setLoading(false) }
  }

  const inputClass = 'w-full px-4 py-3.5 rounded-xl bg-navy-800/40 border border-gold-500/10 text-cream-100 text-sm placeholder:text-cream-200/25 focus:outline-none focus:border-gold-500/30 focus:bg-navy-800/60 transition-all duration-300'

  return (
    <div className="py-16 sm:py-14 relative">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 cini-pattern-bg" />
      <div className="absolute top-20 right-8 hidden lg:block">
        <OttomanFloral size={100} />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <OttomanTulip size={16} className="opacity-40" />
            <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-gold-500/15 bg-gold-500/[0.03]">
              <span className="text-gold-500/70 text-xs font-medium tracking-[0.2em] uppercase">İletişim</span>
            </div>
            <OttomanTulip size={16} className="opacity-40 -scale-x-100" />
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-cream-50 mb-3">
            Bize <span className="text-gold-gradient">Ulaşın</span>
          </h1>
          <p className="text-cream-200/40 text-sm max-w-lg mx-auto mt-4 mb-6">
            Sipariş, bilgi ve önerileriniz için bizimle iletişime geçin
          </p>
          <OttomanDivider />
        </AnimateIn>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {contactCards.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.08}>
              <div className={`group card-premium rounded-2xl p-5 bg-gradient-to-br ${item.accent} to-navy-900/50 h-full hover:border-gold-500/20 transition-all duration-300`}>
                <div className={`w-11 h-11 rounded-xl bg-navy-800/50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={20} className={item.iconColor} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-semibold text-cream-50 text-sm mb-1">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-cream-200/50 text-[13px] hover:text-gold-300 transition-colors break-all">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-cream-200/50 text-[13px]">{item.value}</p>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form - larger */}
          <AnimateIn direction="left" className="lg:col-span-3">
            <div className="card-premium rounded-2xl p-5 sm:p-7">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center border border-gold-500/15">
                  <Mail size={18} className="text-gold-400" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-xl text-cream-50">İletişim Formu</h2>
                  <p className="text-cream-200/30 text-xs">En kısa sürede dönüş yapacağız</p>
                </div>
              </div>

              {success ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <Send size={32} className="text-green-400" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-cream-50 mb-2">Mesajınız İletildi!</h3>
                  <p className="text-cream-200/40">En kısa sürede dönüş yapacağız.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input required type="text" placeholder="Adınız Soyadınız *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} />
                    <input required type="email" placeholder="E-posta Adresiniz *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="tel" placeholder="Telefon Numaranız" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} />
                    <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className={inputClass} required>
                      <option value="">Konu Seçin *</option>
                      <option value="siparis">Sipariş Bilgisi</option>
                      <option value="urun">Ürün Hakkında</option>
                      <option value="teslimat">Teslimat Bilgisi</option>
                      <option value="oneri">Öneri / Şikayet</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                  <textarea required rows={6} placeholder="Mesajınız *" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={inputClass} />
                  <button type="submit" disabled={loading} className="w-full btn-gold rounded-xl px-6 py-4 text-sm flex items-center justify-center gap-2 disabled:opacity-50 font-semibold">
                    {loading ? 'Gönderiliyor...' : <><Send size={16} /> Mesajı Gönder</>}
                  </button>
                </form>
              )}
            </div>
          </AnimateIn>

          {/* Right column - Map & Address */}
          <AnimateIn direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              {/* Map */}
              <div className="card-premium rounded-2xl overflow-hidden h-64 lg:h-72">
                <iframe
                  src={CONTACT.googleMapsEmbed}
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="OKLAVİA Konum"
                />
              </div>

              {/* Address */}
              <div className="card-premium rounded-2xl p-6">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0 border border-gold-500/15">
                    <MapPin size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-cream-50 mb-1">Adresimiz</h3>
                    <p className="text-cream-200/45 text-sm leading-relaxed">{CONTACT.fullAddress}</p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp */}
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=Merhaba, bilgi almak istiyorum.`}
                target="_blank" rel="noopener noreferrer"
                className="card-premium rounded-2xl p-6 flex items-center gap-4 group hover:border-green-500/20 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/15 group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle size={18} className="text-green-400" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-cream-50 mb-0.5">Hızlı İletişim</h3>
                  <p className="text-cream-200/40 text-sm">WhatsApp ile anında yazın</p>
                </div>
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </div>
  )
}
