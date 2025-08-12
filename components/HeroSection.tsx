'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HeroSectionProps {
  children: ReactNode
  backgroundImage?: string
  className?: string
  showScrollIndicator?: boolean
}

const HeroSection = ({ 
  children, 
  backgroundImage = "url('/hero_section.png')",
  className = "",
  showScrollIndicator = true 
}: HeroSectionProps) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32 ${className}`}>
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: backgroundImage
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/85"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-neutral-white px-4">
        {children}
      </div>

      {/* Scroll Indicator - Always positioned safely */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 pointer-events-none"
        >
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-4 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default HeroSection
