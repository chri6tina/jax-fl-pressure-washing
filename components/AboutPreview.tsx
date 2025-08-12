'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaShieldAlt, FaLeaf, FaAward, FaUsers } from 'react-icons/fa'

const AboutPreview = () => {
  const highlights = [
    {
      icon: FaShieldAlt,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your peace of mind'
    },
    {
      icon: FaLeaf,
      title: 'Eco-Friendly',
      description: 'Safe cleaning solutions that protect your family and environment'
    },
    {
      icon: FaAward,
      title: '5+ Years Experience',
      description: 'Trusted pressure washing experts in Jacksonville'
    },
    {
      icon: FaUsers,
      title: 'Family-Owned',
      description: 'Local business committed to community satisfaction'
    }
  ]

  return (
    <section className="section-padding bg-neutral-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-6">
              Your Trusted Partner in Jacksonville
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Jax FL Pressure Washing is a family-owned, veteran-owned business serving the Jacksonville 
              community with pride. We understand that your home is your biggest investment, and we treat 
              it with the care and respect it deserves.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to eco-friendly cleaning methods means you can trust us to safely restore 
              your property's beauty without harming your family, pets, or the environment. We use 
              professional-grade equipment and proven techniques to deliver exceptional results every time.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 bg-accent-eco rounded-lg flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="text-neutral-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-text mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Professional pressure washing technician at work"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-neutral-white rounded-xl shadow-lg p-6 max-w-xs"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
                <div className="text-xs text-gray-500 mt-1">Serving Jacksonville</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
