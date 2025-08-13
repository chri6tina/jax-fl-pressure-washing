'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPhone, FaEnvelope, FaCalendar, FaArrowRight, FaStar, FaCheckCircle } from 'react-icons/fa'

export default function EnhancedCTA() {
  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join 500+ happy customers who trust Jax FL Pressure Washing for professional, 
            eco-friendly cleaning services. Get your free quote today!
          </p>
        </motion.div>

        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          {/* Primary CTA */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCalendar className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Get Free Quote</h3>
            <p className="text-gray-600 mb-4">Professional assessment and competitive pricing</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary transition-all duration-200 transform hover:scale-105"
            >
              Request Quote
              <FaArrowRight className="ml-2" />
            </Link>
          </div>

          {/* Phone CTA */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Call Now</h3>
            <p className="text-gray-600 mb-4">Speak directly with our team</p>
            <a
              href="tel:+19044563851"
              className="inline-flex items-center justify-center w-full bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary transition-all duration-200 transform hover:scale-105"
            >
              (904) 456-3851
            </a>
          </div>

          {/* Email CTA */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-16 h-16 bg-accent-eco rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Email Us</h3>
            <p className="text-gray-600 mb-4">Send us your project details</p>
            <a
              href="mailto:info@jaxflpressurewashing.com"
              className="inline-flex items-center justify-center w-full bg-accent-eco text-white py-3 px-6 rounded-lg font-semibold hover:bg-accent-attention transition-all duration-200 transform hover:scale-105"
            >
              Send Email
            </a>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-8 text-white/80"
        >
          <div className="flex items-center space-x-2">
            <FaStar className="text-yellow-400" />
            <span>4.9/5 Rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-400" />
            <span>500+ Happy Customers</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-400" />
            <span>Licensed & Insured</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}