'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Service Areas', href: '/locations' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'House Washing', href: '/services#house-washing' },
    { name: 'Driveway Cleaning', href: '/services#concrete-cleaning' },
    { name: 'Roof Cleaning', href: '/services#roof-cleaning' },
    { name: 'Gutter Cleaning', href: '/services#gutter-cleaning' },
    { name: 'Paver Sealing', href: '/services#paver-sealing' },
    { name: 'Commercial Washing', href: '/services#commercial' },
  ]

  return (
    <footer className="bg-primary text-neutral-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-20 h-20">
                <Image
                  src="/new_logo.png"
                  alt="Jax FL Pressure Washing Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h3 className="text-xl font-bold">Jax FL Pressure Washing</h3>
            </div>
            <p className="text-neutral-white/80 mb-4 leading-relaxed">
              Professional, eco-friendly pressure washing services in Jacksonville, Florida. 
              Licensed, insured, and committed to customer satisfaction.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary hover:bg-secondary-dark rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebook className="text-neutral-white text-lg" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary hover:bg-secondary-dark rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="text-neutral-white text-lg" />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary hover:bg-secondary-dark rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="TikTok"
              >
                <FaTiktok className="text-neutral-white text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-neutral-white/80 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-neutral-white/80 hover:text-secondary transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-secondary" />
                <a 
                  href="tel:+19044563851" 
                  className="text-neutral-white/80 hover:text-secondary transition-colors duration-200"
                >
                  (904) 456-3851
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-secondary" />
                <a 
                  href="mailto:info@jaxflpressurewashing.com"
                  className="text-neutral-white/80 hover:text-secondary transition-colors duration-200"
                >
                  info@jaxflpressurewashing.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-secondary" />
                <span className="text-neutral-white/80">
                  Jacksonville, FL
                </span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-4">
              <h5 className="font-semibold text-secondary mb-2">Business Hours</h5>
              <div className="text-sm text-neutral-white/80 space-y-1">
                <div>Monday - Friday: 7:00 AM - 6:00 PM</div>
                <div>Saturday: 8:00 AM - 4:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-white/80 text-sm">
              © {currentYear} Jax FL Pressure Washing. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-neutral-white/80 hover:text-secondary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-white/80 hover:text-secondary transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
