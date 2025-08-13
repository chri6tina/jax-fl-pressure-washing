'use client'

import { motion } from 'framer-motion'
import { FaLightbulb, FaShieldAlt, FaLeaf, FaClock, FaUsers, FaAward } from 'react-icons/fa'

export default function ContentReadabilityEnhancer() {
  const features = [
    {
      icon: FaLightbulb,
      title: 'Expert Knowledge',
      description: 'Our team brings 5+ years of specialized pressure washing experience to every project.',
      color: 'text-yellow-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Fully Insured',
      description: 'Complete coverage including general liability and workers compensation insurance.',
      color: 'text-blue-500'
    },
    {
      icon: FaLeaf,
      title: 'Eco-Friendly',
      description: 'Safe cleaning solutions that protect your family, pets, and the environment.',
      color: 'text-green-500'
    },
    {
      icon: FaClock,
      title: 'Reliable Service',
      description: 'On-time, professional service with clear communication throughout the process.',
      color: 'text-purple-500'
    },
    {
      icon: FaUsers,
      title: 'Local Business',
      description: 'Jacksonville-based company committed to serving our community with pride.',
      color: 'text-red-500'
    },
    {
      icon: FaAward,
      title: 'Quality Guaranteed',
      description: 'We\'re not done until you\'re completely satisfied with the results.',
      color: 'text-orange-500'
    }
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
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Choose Jax FL Pressure Washing?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We understand that choosing a pressure washing service is an important decision. 
            Here's what makes us the trusted choice for Jacksonville homeowners and businesses.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${feature.color} bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of satisfied customers who have transformed their properties with our professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19044563851"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors duration-200"
              >
                Call (904) 456-3851
              </a>
              <a
                href="/contact"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}