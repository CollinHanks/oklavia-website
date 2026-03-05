'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, Mail, Clock, Instagram, ArrowRight, Heart } from 'lucide-react'
import { CONTACT, SOCIAL, NAV_LINKS, SITE_CONFIG } from '@/lib/constants'
import { FooterOrnament, OttomanTulip, OttomanMedallion, OttomanStar, OttomanRumi } from '@/components/ui/OttomanMotifs'

function GoldSocialIcon({ href, label, children, i }: { href: string; label: string; children: React.ReactNode; i: number }) {
  return (
    <motion.a
      href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 + i * 0.1, type: 'spring', stiffness: 300, damping: 15 }}
      whileHover={{ y: -5, scale: 1.2, boxShadow: '0 8px 30px rgba(212,175,55,0.3)' }}
      whileTap={{ scale: 0.85 }}
      className="w-11 h-11 rounded-full border border-gold-500/20 bg-gradient-to-br from-gold-500/[0.05] to-transparent flex items-center justify-center text-gold-400/50 hover:text-gold-300 hover:border-gold-400/60 hover:bg-gold-500/15 transition-colors duration-300 backdrop-blur-sm"
    >
      {children}
    </motion.a>
  )
}

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <footer ref={ref} className="relative overflow-hidden">
      {/* ═══ TRANSITION ZONE ═══ */}
      <div className="h-20 bg-gradient-to-b from-transparent via-navy-900/60 to-navy-900" />

      {/* Animated shimmer line - sweeping gold */}
      <div className="relative h-[2px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
          className="absolute inset-y-0 w-1/4"
          style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, #E5C76B, #D4AF37, transparent)' }}
        />
      </div>

      {/* Gold ornament centerpiece */}
      <div className="relative z-10">
        <FooterOrnament />
      </div>

      {/* ═══ BACKGROUND ═══ */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-[#0D1630] to-[#080E1F]" style={{ top: '80px' }} />

      {/* Pulsing gold aura */}
      <motion.div
        animate={{ opacity: [0.02, 0.05, 0.02], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-48 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gold-400 rounded-full blur-[200px] pointer-events-none"
      />

      {/* Medallion decorations */}
      <div className="absolute top-36 right-[5%] hidden xl:block pointer-events-none">
        <OttomanStar size={80} />
      </div>
      <div className="absolute bottom-24 left-[3%] hidden xl:block pointer-events-none">
        <OttomanRumi size={70} />
      </div>
      <div className="absolute top-1/2 left-[8%] hidden xl:block pointer-events-none">
        <OttomanMedallion size={60} />
      </div>

      {/* ═══ CTA STRIP ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative border-b border-gold-500/[0.08]"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="text-center sm:text-left">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-cream-50">
                Sipariş vermek mi istiyorsunuz?
              </h3>
              <p className="text-cream-200/40 text-sm mt-1">WhatsApp ile anında sipariş verin veya bizi arayın</p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${CONTACT.whatsapp}?text=Merhaba, sipariş vermek istiyorum.`}
                target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp rounded-full px-6 py-3 text-sm flex items-center gap-2 flex-1 sm:flex-none justify-center shadow-lg shadow-green-900/30">
                WhatsApp ile Yazın
              </motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href={`tel:${CONTACT.phoneRaw}`}
                className="btn-outline-gold rounded-full px-6 py-3 text-sm flex items-center gap-2 flex-1 sm:flex-none justify-center">
                <Phone size={14} /> Arayın
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ═══ MAIN CONTENT ═══ */}
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Brand Column ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-4">
              <Image src="/images/logo.png" alt="OKLAVİA" width={140} height={50} className="h-9 w-auto object-contain" />
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <OttomanTulip size={14} />
              <div className="w-10 h-px bg-gradient-to-r from-gold-400/50 to-transparent" />
              <OttomanTulip size={14} className="-scale-x-100" />
            </div>

            <p className="text-cream-100/40 text-sm leading-relaxed mb-6">
              {SITE_CONFIG.slogan}. 1960&apos;dan bu yana geleneksel Türk lezzetlerini sofralarınıza taşıyoruz.
            </p>

            <div className="flex gap-2.5">
              {[
                { href: SOCIAL.instagram, label: 'Instagram', icon: <Instagram size={16} /> },
                { href: SOCIAL.facebook, label: 'Facebook', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                { href: SOCIAL.tiktok, label: 'TikTok', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-.81.07 4.84 4.84 0 01-2.38-.63V6.69h4z"/></svg> },
                { href: SOCIAL.youtube, label: 'YouTube', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
              ].map((s, i) => (
                <GoldSocialIcon key={s.label} href={s.href} label={s.label} i={i}>{s.icon}</GoldSocialIcon>
              ))}
            </div>
          </motion.div>

          {/* ── Quick Links ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-gold-400 font-heading font-semibold text-xs uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <div className="w-4 h-px bg-gold-400/50" />
              Hızlı Erişim
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  <Link href={link.href} className="group flex items-center gap-2 text-cream-100/50 hover:text-gold-300 text-sm transition-all duration-300">
                    <ArrowRight size={11} className="text-gold-500/0 group-hover:text-gold-400 -ml-4 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── Contact ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-gold-400 font-heading font-semibold text-xs uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <div className="w-4 h-px bg-gold-400/50" />
              İletişim
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-gold-500/[0.08] border border-gold-500/10 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-gold-400/60" />
                </div>
                <span className="text-cream-100/50 leading-relaxed">{CONTACT.fullAddress}</span>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneRaw}`} className="flex gap-3 text-sm text-cream-100/50 hover:text-gold-300 transition-colors group items-center">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/[0.08] border border-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/15 group-hover:border-gold-500/25 transition-all">
                    <Phone size={14} className="text-gold-400/60 group-hover:text-gold-400" />
                  </div>
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex gap-3 text-sm text-cream-100/50 hover:text-gold-300 transition-colors group items-center">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/[0.08] border border-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/15 group-hover:border-gold-500/25 transition-all">
                    <Mail size={14} className="text-gold-400/60 group-hover:text-gold-400" />
                  </div>
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* ── Hours ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-gold-400 font-heading font-semibold text-xs uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <div className="w-4 h-px bg-gold-400/50" />
              Çalışma Saatleri
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3 text-sm items-center">
                <div className="w-8 h-8 rounded-lg bg-gold-500/[0.08] border border-gold-500/10 flex items-center justify-center shrink-0">
                  <Clock size={14} className="text-gold-400/60" />
                </div>
                <div>
                  <p className="text-cream-100/50">Pazartesi — Cumartesi</p>
                  <p className="text-gold-400/80 font-semibold">08:00 — 20:00</p>
                </div>
              </div>
              <div className="flex gap-3 text-sm items-center">
                <div className="w-8 h-8 rounded-lg bg-gold-500/[0.08] border border-gold-500/10 flex items-center justify-center shrink-0">
                  <Clock size={14} className="text-gold-400/60" />
                </div>
                <div>
                  <p className="text-cream-100/50">Pazar</p>
                  <p className="text-gold-400/80 font-semibold">10:00 — 18:00</p>
                </div>
              </div>
            </div>

            {/* Gold delivery badge with shimmer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: 'spring' }}
              className="mt-6 relative overflow-hidden rounded-xl border border-gold-500/15"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/[0.04] via-gold-500/[0.08] to-gold-500/[0.04]" />
              {/* Shimmer sweep */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
                className="absolute inset-y-0 w-1/3 pointer-events-none"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.08), transparent)' }}
              />
              <p className="relative text-gold-400/60 text-[11px] font-semibold text-center py-3 px-4 tracking-wide">
                Tüm Türkiye&apos;ye Soğuk Zincir Teslimat
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ═══ BOTTOM BAR ═══ */}
      <div className="relative">
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-cream-200/30 text-xs flex items-center gap-1.5">
            © {new Date().getFullYear()} OKLAVİA Unlu Mamülleri. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-gold-400"
            />
            <span className="text-cream-200/25 text-xs">{SITE_CONFIG.slogan}</span>
          </div>
        </div>

        {/* Final animated gold line */}
        <div className="relative h-[3px] overflow-hidden">
          <div className="absolute inset-0 bg-gold-500/[0.08]" />
          <motion.div
            animate={{ x: ['-60%', '160%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-y-0 w-1/5"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, #F0DB8A, #D4AF37, transparent)' }}
          />
        </div>
      </div>
    </footer>
  )
}
