'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { NAV_LINKS, CONTACT } from '@/lib/constants'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-navy shadow-lg shadow-navy-950/50 py-0' : 'bg-transparent py-1'}`}>
      <div className={`h-[1px] bg-linear-to-r from-transparent via-gold-500/30 to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />
      <nav className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <Link href="/" className="flex items-center group relative shrink-0">
            <Image src="/images/logo.png" alt="OKLAVİA" width={85} height={45} className="h-[26px] w-auto" priority />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}
                className={`relative px-4 py-2.5 text-[13px] font-medium transition-all duration-300 group ${pathname === link.href ? 'text-gold-400' : 'text-cream-200/70 hover:text-gold-300'}`}>
                {link.label}
                {pathname === link.href ? (
                  <motion.span layoutId="navbar-active" className="absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-linear-to-r from-gold-500/0 via-gold-400 to-gold-500/0" />
                ) : (
                  <span className="absolute bottom-0.5 left-3 right-3 h-[1px] rounded-full bg-gold-500/0 group-hover:bg-gold-500/20 transition-colors duration-300" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href={`https://wa.me/${CONTACT.whatsapp}?text=Merhaba, sipariş vermek istiyorum.`} target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 btn-gold rounded-full px-5 py-2.5 text-xs font-semibold shadow-md shadow-gold-500/10">
              <ShoppingBag size={14} /> Sipariş Ver
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-cream-100 hover:text-gold-400 transition-colors" aria-label="Menü">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden glass-navy border-t border-gold-500/10">
            <div className="px-4 py-6 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link href={link.href} className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${pathname === link.href ? 'text-gold-400 bg-gold-500/5' : 'text-cream-200/80 hover:text-gold-300 hover:bg-navy-800/50'}`}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: NAV_LINKS.length * 0.05 }} className="pt-4">
                <a href={`https://wa.me/${CONTACT.whatsapp}?text=Merhaba, sipariş vermek istiyorum.`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 btn-gold rounded-full px-5 py-3 text-sm w-full">
                  <ShoppingBag size={16} /> Sipariş Ver
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
