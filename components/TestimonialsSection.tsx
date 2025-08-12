'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Sarah Johnson',
    neighborhood: 'San Marco',
    rating: 5,
    text: 'Jax FL Pressure Washing did an amazing job on our house! The soft-wash method was gentle on our siding and the results were incredible. Our home looks brand new!',
    service: 'House Washing'
  },
  {
    name: 'Mike Rodriguez',
    neighborhood: 'Riverside',
    rating: 5,
    text: 'Professional, punctual, and thorough. They cleaned our driveway and it looks like it was just poured. Highly recommend for any pressure washing needs.',
    service: 'Driveway Cleaning'
  },
  {
    name: 'Jennifer Williams',
    neighborhood: 'Avondale',
    rating: 5,
    text: 'The roof cleaning service was excellent. They removed all the algae and didn\'t damage our shingles. The crew was very professional and cleaned up after themselves.',
    service: 'Roof Cleaning'
  }
]

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers across Jacksonville
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-white rounded-xl shadow-lg p-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <FaQuoteLeft className="text-neutral-white text-sm" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-neutral-text">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.neighborhood}, Jacksonville
                </div>
                <div className="text-xs text-primary font-medium">
                  {testimonial.service}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/testimonials" className="btn-secondary text-lg px-8 py-4">
            Read More Reviews
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
