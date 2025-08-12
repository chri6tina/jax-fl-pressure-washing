'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    neighborhood: 'San Marco',
    rating: 5,
    text: 'Jax FL Pressure Washing did an amazing job on our house! The soft-wash method was gentle on our siding and the results were incredible. Our home looks brand new! The team was professional, punctual, and cleaned up after themselves. I highly recommend their services.',
    service: 'House Washing',
    date: 'December 2023',
    verified: true
  },
  {
    id: 2,
    name: 'Mike Rodriguez',
    neighborhood: 'Riverside',
    rating: 5,
    text: 'Professional, punctual, and thorough. They cleaned our driveway and it looks like it was just poured. The oil stains that had been there for years are completely gone. The crew was very respectful of our property and the pricing was fair.',
    service: 'Driveway Cleaning',
    date: 'November 2023',
    verified: true
  },
  {
    id: 3,
    name: 'Jennifer Williams',
    neighborhood: 'Avondale',
    rating: 5,
    text: 'The roof cleaning service was excellent. They removed all the algae and didn\'t damage our shingles. The crew was very professional and cleaned up after themselves. Our roof looks great and we\'re confident it will last longer now.',
    service: 'Roof Cleaning',
    date: 'October 2023',
    verified: true
  },
  {
    id: 4,
    name: 'David Thompson',
    neighborhood: 'Mandarin',
    rating: 5,
    text: 'Outstanding service! They cleaned our entire house exterior, driveway, and patio. The transformation was incredible. The team was knowledgeable about different surfaces and used the right cleaning methods for each area.',
    service: 'Full Property Cleaning',
    date: 'September 2023',
    verified: true
  },
  {
    id: 5,
    name: 'Lisa Chen',
    neighborhood: 'Beaches',
    rating: 5,
    text: 'We\'ve been using Jax FL Pressure Washing for our commercial property for over 2 years. They\'re reliable, professional, and always do an excellent job. Our building always looks its best, which is important for our business.',
    service: 'Commercial Washing',
    date: 'August 2023',
    verified: true
  },
  {
    id: 6,
    name: 'Robert Martinez',
    neighborhood: 'Orange Park',
    rating: 5,
    text: 'The paver sealing service was top-notch. Our patio looks beautiful and the sealant has held up perfectly through the rainy season. The crew was careful around our landscaping and the results exceeded our expectations.',
    service: 'Paver Sealing',
    date: 'July 2023',
    verified: true
  },
  {
    id: 7,
    name: 'Amanda Foster',
    neighborhood: 'Fleming Island',
    rating: 5,
    text: 'I was impressed with their attention to detail. They didn\'t just clean the obvious areas - they took care of the gutters, windows, and even the mailbox. Everything looks spotless and they were very reasonably priced.',
    service: 'Comprehensive Cleaning',
    date: 'June 2023',
    verified: true
  },
  {
    id: 8,
    name: 'James Wilson',
    neighborhood: 'Ponte Vedra',
    rating: 5,
    text: 'As a veteran myself, I appreciate supporting other veterans. The quality of work and professionalism exceeded my expectations. They restored our concrete driveway to like-new condition. Highly recommend!',
    service: 'Concrete Cleaning',
    date: 'May 2023',
    verified: true
  }
]

const stats = [
  { label: 'Average Rating', value: '5.0', icon: FaStar },
  { label: 'Total Reviews', value: '500+', icon: FaQuoteLeft },
  { label: 'Happy Customers', value: '98%', icon: FaCheckCircle },
  { label: 'Service Areas', value: '15+', icon: FaMapMarkerAlt }
]

const TestimonialsDetail = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-gray-50 rounded-xl p-6"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-neutral-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
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
                {testimonial.verified && (
                  <span className="ml-2 text-xs bg-accent-eco text-neutral-white px-2 py-1 rounded-full">
                    Verified
                  </span>
                )}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold text-neutral-text">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 flex items-center">
                      <FaMapMarkerAlt className="mr-1" />
                      {testimonial.neighborhood}, Jacksonville
                    </div>
                    <div className="text-xs text-primary font-medium">
                      {testimonial.service}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 text-right">
                    {testimonial.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Our Customers Love Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-neutral-text mb-4">
              Why Our Customers Love Us
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional results and outstanding customer service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-neutral-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-neutral-text mb-2">Quality Work</h4>
              <p className="text-gray-600">
                We don't just clean - we restore and protect your property's beauty and value
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-neutral-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-neutral-text mb-2">Professional Service</h4>
              <p className="text-gray-600">
                Courteous, punctual, and respectful of your property and time
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-eco rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-neutral-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-neutral-text mb-2">Eco-Friendly</h4>
              <p className="text-gray-600">
                Safe cleaning methods that protect your family and the environment
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-attention rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-neutral-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-neutral-text mb-2">Fair Pricing</h4>
              <p className="text-gray-600">
                Competitive rates with no hidden fees or surprise charges
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-neutral-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-neutral-text mb-2">Satisfaction Guaranteed</h4>
              <p className="text-gray-600">
                We're not done until you're completely satisfied with the results
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-neutral-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-neutral-text mb-2">Local Business</h4>
              <p className="text-gray-600">
                Family-owned and operated, serving Jacksonville with pride
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-neutral-text mb-4">
            Ready to Join Our Happy Customers?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Get your free quote today and experience the Jax FL Pressure Washing difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Get Free Quote
            </a>
                          <a href="tel:+19044563851" className="btn-secondary">
                Call (904) 456-3851
              </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsDetail
