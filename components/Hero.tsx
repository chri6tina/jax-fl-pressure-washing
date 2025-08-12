'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPhone, FaCheckCircle } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero_section.png')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-neutral-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow">
            Professional Pressure Washing
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow max-w-3xl mx-auto">
            Expert soft-wash and pressure washing services in Jacksonville, Florida. 
            Transform your property with our proven, effective cleaning solutions.
          </p>
          
          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-accent-eco" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-accent-eco" />
              <span>Same Day Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-accent-eco" />
              <span>Free Estimates</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Free Quote
            </Link>
            <Link href="tel:+19044563851" className="flex items-center space-x-2 bg-neutral-white/20 hover:bg-neutral-white/30 text-neutral-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
              <FaPhone />
              <span>(904) 456-3851</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-neutral-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-neutral-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
