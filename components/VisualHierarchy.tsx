'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCheckCircle, FaStar, FaClock, FaShieldAlt } from 'react-icons/fa'

export default function VisualHierarchy() {
  const benefits = [
    'Professional-grade equipment and techniques',
    'Eco-friendly cleaning solutions',
    'Licensed and fully insured',
    '5+ years of experience',
    'Satisfaction guaranteed',
    'Competitive pricing'
  ]

  const stats = [
    { number: '500+', label: 'Happy Customers', icon: FaStar },
    { number: '1000+', label: 'Projects Completed', icon: FaCheckCircle },
    { number: '5+', label: 'Years Experience', icon: FaClock },
    { number: '24/7', label: 'Customer Support', icon: FaShieldAlt }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Professional Pressure Washing
            <span className="block text-primary">Jacksonville, Florida</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your property with our expert pressure washing services. 
            Eco-friendly, professional, and guaranteed to exceed your expectations.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white text-3xl" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Jacksonville Trusts Us
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              As a family-owned, veteran-owned business, we bring military precision and 
              family values to every pressure washing project. Our commitment to excellence 
              has made us Jacksonville's most trusted pressure washing company.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-all duration-200 transform hover:scale-105"
              >
                Get Your Free Quote
                <FaCheckCircle className="ml-2" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional pressure washing service in Jacksonville"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Property?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Don't wait any longer. Our team is ready to restore your property's beauty 
            with professional pressure washing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19044563851"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Call Now: (904) 456-3851
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Get Free Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}