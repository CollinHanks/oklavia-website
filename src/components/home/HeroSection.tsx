'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShoppingBag, ChevronDown, Phone } from 'lucide-react'
import { CONTACT, SITE_CONFIG } from '@/lib/constants'
import { OttomanMedallion, OttomanRumi, OttomanStar, OttomanFloral } from '@/components/ui/OttomanMotifs'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1F3050_0%,#0F1A35_50%,#0B1426_100%)]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      <div className="absolute inset-0 cini-pattern-bg" />

      {/* Gold motif accents — diverse types with animations */}
      <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 120, repeat: Infinity, ease: 'linear' }} className="absolute top-[8%] right-[6%] hidden md:block">
        <OttomanMedallion size={160} />
      </motion.div>
      <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-[55%] right-[3%] hidden lg:block">
        <OttomanStar size={70} />
      </motion.div>
      <motion.div animate={{ rotate: [0, -360] }} transition={{ duration: 90, repeat: Infinity, ease: 'linear' }} className="absolute bottom-[15%] left-[4%] hidden md:block">
        <OttomanFloral size={120} />
      </motion.div>
      <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute top-[35%] left-[2%] hidden lg:block">
        <OttomanRumi size={80} />
      </motion.div>
      <motion.div animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }} className="absolute bottom-[40%] right-[12%] hidden xl:block">
        <OttomanRumi size={50} className="-scale-x-100" />
      </motion.div>

      {/* Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-150 bg-gold-500/4 rounded-full blur-[120px]" />
      <div className="absolute top-0 left-0 w-100 h-100 bg-navy-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-gold-600/3 rounded-full blur-[100px]" />

      {/* Floating dots */}
      {[
        { top: '15%', left: '8%', right: undefined, delay: 0 },
        { top: '25%', left: undefined, right: '15%', delay: 1 },
        { top: '60%', left: '12%', right: undefined, delay: 2 },
        { top: '75%', left: undefined, right: '8%', delay: 0.5 },
        { top: '40%', left: '5%', right: undefined, delay: 1.5 },
      ].map((dot, i) => (
        <motion.div key={i} animate={{ opacity: [0.2, 0.6, 0.2], y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, delay: dot.delay }} className="absolute w-0.75 h-0.75 rounded-full bg-gold-500" style={{ top: dot.top, left: dot.left, right: dot.right }} />
      ))}

      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-linear-to-b from-transparent via-gold-500/10 to-transparent" />
      <div className="absolute bottom-0 left-1/3 w-px h-40 bg-linear-to-t from-transparent via-gold-500/6 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ duration: 1.2 }} className="mx-auto w-48 h-px bg-linear-to-r from-transparent via-gold-500/50 to-transparent mb-8" />

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-gold-400/90 text-xs font-medium tracking-[0.2em] uppercase">{SITE_CONFIG.foundedYear}&apos;den beri geleneksel lezzetler</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
        </motion.div>

        {/* Brand logo */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.1 }} className="mb-4 sm:mb-6">
          <Image src="/images/logo-large.png" alt="OKLAVİA" width={400} height={250} className="h-24 sm:h-32 md:h-44 lg:h-56 w-auto mx-auto object-contain" priority />
        </motion.div>

        {/* Decorative divider */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-linear-to-r from-transparent to-gold-500/30" />
          <div className="w-2 h-2 rounded-full bg-gold-500/30" />
          <div className="w-16 h-px bg-linear-to-l from-transparent to-gold-500/30" />
        </motion.div>

        {/* Slogan */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-heading font-semibold text-lg sm:text-xl md:text-2xl lg:text-4xl leading-tight mb-3 text-cream-50 px-2">
          Anadolu&apos;nun Mirası,{' '}<span className="text-gold-400">Sofralarınızın Tacı</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }} className="text-cream-200/50 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
          1960&apos;dan bu yana İstanbul&apos;da el yapımı su böreği, tereyağlı su böreği, Antep fıstıklı baklava
          ve geleneksel Türk kahvesi üretiyoruz. Katkı maddesi kullanmadan, soğuk zincir garantisiyle tüm Türkiye&apos;ye.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 sm:mb-14 px-4">
          <a href={`https://wa.me/${CONTACT.whatsapp}?text=Merhaba, sipariş vermek istiyorum.`} target="_blank" rel="noopener noreferrer" className="group btn-gold rounded-full px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base flex items-center gap-3 shadow-lg w-full sm:w-auto justify-center shadow-gold-500/20">
            <ShoppingBag size={20} />Hemen Sipariş Ver
          </a>
          <a href={`tel:${CONTACT.phoneRaw}`} className="btn-outline-gold rounded-full px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base flex items-center gap-3 w-full sm:w-auto justify-center">
            <Phone size={18} />Bizi Arayın
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }} className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-4 sm:gap-0 px-4">
          {[
            { value: '65+', label: 'Yıllık Deneyim' },
            { value: '81 İl', label: 'Teslimat Ağı' },
            { value: '%100', label: 'El Yapımı' },
            { value: '7/24', label: 'WhatsApp Destek' },
          ].map((stat, i, arr) => (
            <div key={stat.label} className="flex items-center">
              <div className="text-center w-full sm:px-6 md:px-8">
                <p className="text-gold-400 font-heading font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">{stat.value}</p>
                <p className="text-cream-200/40 text-[10px] sm:text-xs mt-1.5 tracking-wider uppercase">{stat.label}</p>
              </div>
              {i < arr.length - 1 && <div className="hidden sm:block w-px h-10 bg-linear-to-b from-transparent via-gold-500/20 to-transparent" />}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-navy-950 to-transparent" />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2">
          <span className="text-gold-500/30 text-[10px] tracking-[0.3em] uppercase">Keşfet</span>
          <ChevronDown size={20} className="text-gold-500/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
