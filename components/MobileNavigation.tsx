'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  }

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/locations', label: 'Locations' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ]

  const serviceItems = [
    { href: '/services/house-washing', label: 'House Washing' },
    { href: '/services/driveway-cleaning', label: 'Driveway Cleaning' },
    { href: '/services/roof-cleaning', label: 'Roof Cleaning' },
    { href: '/services/gutter-cleaning', label: 'Gutter Cleaning' }
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed top-4 right-4 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-secondary transition-colors duration-200"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={toggleMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="relative w-16 h-16">
                    <Image
                      src="/new_logo_v2.png"
                      alt="Jax FL Pressure Washing Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">Jax FL Pressure Washing</h2>
                    <p className="text-sm text-gray-600">Jacksonville, Florida</p>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="p-6">
                <div className="space-y-6">
                  {/* Main Menu */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Main Menu
                    </h3>
                    <div className="space-y-2">
                      {menuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={toggleMenu}
                          className="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Services
                    </h3>
                    <div className="space-y-2">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={toggleMenu}
                          className="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Contact
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-gray-700">
                        <FaPhone className="text-primary" />
                        <a href="tel:+19044563851" className="hover:text-primary transition-colors">
                          (904) 456-3851
                        </a>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700">
                        <FaEnvelope className="text-primary" />
                        <a href="mailto:info@jaxflpressurewashing.com" className="hover:text-primary transition-colors">
                          info@jaxflpressurewashing.com
                        </a>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700">
                        <FaMapMarkerAlt className="text-primary" />
                        <span>Jacksonville, FL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>

              {/* CTA Button */}
              <div className="p-6 border-t border-gray-200">
                <Link
                  href="/contact"
                  onClick={toggleMenu}
                  className="block w-full bg-primary text-white text-center py-4 px-6 rounded-lg font-semibold hover:bg-secondary transition-colors duration-200"
                >
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}