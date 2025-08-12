'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const CTASection = () => {
  return (
    <section className="section-padding bg-primary text-neutral-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Property?
            </h2>
            
            <p className="text-lg text-neutral-white/90 mb-8 leading-relaxed">
              Get your free, no-obligation quote today. Our team will assess your needs and provide 
              a detailed estimate for professional pressure washing services in Jacksonville.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-secondary text-xl" />
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-neutral-white/80">(904) 456-3851</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-secondary text-xl" />
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-neutral-white/80">info@jaxflpressurewashing.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-secondary text-xl" />
                <div>
                  <div className="font-semibold">Service Area</div>
                  <div className="text-neutral-white/80">Jacksonville & Surrounding Areas</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaClock className="text-secondary text-xl" />
                <div>
                  <div className="font-semibold">Business Hours</div>
                  <div className="text-neutral-white/80">Mon-Fri: 7AM-6PM, Sat: 8AM-4PM</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary bg-accent-attention hover:bg-accent-attention/90 text-center">
                Get Free Quote
              </Link>
              <Link href="tel:+19044563851" className="btn-secondary text-center">
                Call Now
              </Link>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-neutral-white rounded-2xl p-8 shadow-2xl"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-neutral-text mb-2">
                Why Choose Us?
              </h3>
              <p className="text-gray-600">
                Professional, reliable, and eco-friendly pressure washing services
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent-eco rounded-full flex items-center justify-center">
                  <span className="text-neutral-white text-sm font-bold">✓</span>
                </div>
                <span className="text-neutral-text">Licensed & Insured</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent-eco rounded-full flex items-center justify-center">
                  <span className="text-neutral-white text-sm font-bold">✓</span>
                </div>
                <span className="text-neutral-text">Eco-Friendly Methods</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent-eco rounded-full flex items-center justify-center">
                  <span className="text-neutral-white text-sm font-bold">✓</span>
                </div>
                <span className="text-neutral-text">Free Estimates</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent-eco rounded-full flex items-center justify-center">
                  <span className="text-neutral-white text-sm font-bold">✓</span>
                </div>
                <span className="text-neutral-text">Satisfaction Guaranteed</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent-eco rounded-full flex items-center justify-center">
                  <span className="text-neutral-white text-sm font-bold">✓</span>
                </div>
                <span className="text-neutral-text">Same Day Service Available</span>
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-gray-600">Happy Customers in Jacksonville</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
