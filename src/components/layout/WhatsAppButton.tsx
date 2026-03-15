'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [visible, setVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Show button after 2s
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Show tooltip after 4s — only on desktop
  useEffect(() => {
    if (visible && !isMobile) {
      const tooltipTimer = setTimeout(() => setShowTooltip(true), 4000)
      return () => clearTimeout(tooltipTimer)
    }
  }, [visible, isMobile])

  if (!visible) return null

  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Merhaba, bilgi almak istiyorum.')}`

  return (
    <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip — desktop only */}
      <AnimatePresence>
        {showTooltip && !isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="relative bg-white rounded-2xl shadow-xl p-4 max-w-60"
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowTooltip(false)
              }}
              className="absolute -top-3 -right-3 w-8 h-8 bg-navy-800 rounded-full flex items-center justify-center text-white hover:bg-navy-600 transition-colors shadow-md"
            >
              <X size={14} />
            </button>
            <p className="text-navy-900 text-sm font-medium">
              Merhaba! Size nasıl yardımcı olabiliriz?
            </p>
            <p className="text-navy-600 text-xs mt-1">
              Sipariş ve bilgi için yazın
            </p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 shadow-xl" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gold pulse ring — separate from button to avoid hover bug */}
        {!isHovered && (
          <motion.span
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)',
            }}
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(212, 175, 55, 0.4)',
                '0 0 0 16px rgba(212, 175, 55, 0)',
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        )}

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-13 h-13 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow"
          aria-label="WhatsApp ile iletişime geçin"
        >
          <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.a>
      </div>
    </div>
  )
}