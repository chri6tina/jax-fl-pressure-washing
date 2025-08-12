'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhone, FaCheckCircle, FaStar, FaHome, FaBuilding, FaLeaf } from 'react-icons/fa'

const PonteVedraPage = () => {
  return (
    <div className="min-h-screen bg-neutral-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero_section.png')"
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/85"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute top-32 left-16 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="absolute bottom-32 right-16 w-40 h-40 bg-accent-eco/20 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-neutral-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30 mt-8"
            >
              <FaMapMarkerAlt className="text-accent text-lg" />
              <span className="text-sm font-semibold">Ponte Vedra Beach, Florida</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow leading-tight"
            >
              <span className="block">Pressure Washing</span>
              <span className="block text-accent">Ponte Vedra Beach</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-4 text-accent-eco">
                Luxury Home Specialists
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl mb-8 text-shadow max-w-4xl mx-auto leading-relaxed"
            >
              Premium pressure washing services for luxury homes, golf course communities, and upscale properties in 
              <span className="text-accent font-semibold"> Ponte Vedra Beach</span>, 
              <span className="text-accent font-semibold"> Sawgrass</span>, 
              <span className="text-accent font-semibold"> Marsh Landing</span>, and 
              <span className="text-accent font-semibold"> Ponte Vedra Lakes</span>.
            </motion.p>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            >
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+ Years</div>
                <div className="text-white/90 text-sm md:text-base">Luxury Home Experience</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-accent-eco mb-2">500+</div>
                <div className="text-white/90 text-sm md:text-base">Ponte Vedra Properties</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-white/90 text-sm md:text-base">Satisfaction Rate</div>
              </div>
            </motion.div>

            {/* Enhanced Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base"
            >
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="font-semibold">Luxury Home Specialists</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="font-semibold">Golf Course Communities</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="font-semibold">Coastal Property Experts</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="font-semibold">Free Estimates</span>
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Link href="/contact" className="btn-primary text-xl px-10 py-5 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Get Free Luxury Home Quote
              </Link>
              <Link href="tel:+19044563851" className="flex items-center space-x-3 bg-white/20 hover:bg-white/30 text-neutral-white px-8 py-5 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/50 transform hover:scale-105">
                <FaPhone className="text-xl" />
                <span className="text-xl">(904) 456-3851</span>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="text-white/80 text-sm mb-4">Trusted by Ponte Vedra's Most Prestigious Properties</p>
              <div className="flex justify-center space-x-6 text-white/60">
                <span className="text-sm">✓ Licensed & Insured</span>
                <span className="text-sm">✓ Eco-Friendly</span>
                <span className="text-sm">✓ 24/7 Emergency Service</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-4 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Local SEO Content Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-text mb-6">
              Ponte Vedra Beach Pressure Washing Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              As the premier pressure washing company serving Ponte Vedra Beach, we understand the unique demands of luxury coastal properties. 
              Our specialized approach combines premium service with the attention to detail that Ponte Vedra residents expect.
            </p>
          </motion.div>

          {/* Local Area Information */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-neutral-text mb-6">
                Why Ponte Vedra Beach Needs Professional Pressure Washing
              </h3>
              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong>Salt Air Corrosion:</strong> Ponte Vedra's coastal location exposes properties to salt air that accelerates deterioration of exterior surfaces.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong>High Humidity:</strong> Florida's humidity creates ideal conditions for mold, mildew, and algae growth on roofs and siding.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong>Luxury Standards:</strong> Ponte Vedra's upscale properties require meticulous care to maintain their premium appearance and value.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong>Golf Course Communities:</strong> Properties near golf courses face additional challenges from irrigation systems and landscaping debris.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-2xl shadow-xl"
            >
              <h4 className="text-2xl font-bold mb-6">Ponte Vedra Beach Quick Facts</h4>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between">
                  <span>Population:</span>
                  <span className="font-semibold">~25,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Median Home Value:</span>
                  <span className="font-semibold">$1.2M+</span>
                </div>
                <div className="flex justify-between">
                  <span>Coastal Miles:</span>
                  <span className="font-semibold">3.5 miles</span>
                </div>
                <div className="flex justify-between">
                  <span>Golf Courses:</span>
                  <span className="font-semibold">5+</span>
                </div>
                <div className="flex justify-between">
                  <span>Luxury Properties:</span>
                  <span className="font-semibold">80%+</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Local Service Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-neutral-text mb-8">
              Ponte Vedra Beach Service Areas We Cover
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Ponte Vedra Beach',
                'Sawgrass',
                'Marsh Landing',
                'Ponte Vedra Lakes',
                'Ponte Vedra Club',
                'Ponte Vedra Golf Club',
                'Ponte Vedra Inn & Club',
                'Ponte Vedra Oceanfront'
              ].map((area, index) => (
                <div key={area} className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <FaMapMarkerAlt className="text-accent mx-auto mb-2 text-xl" />
                  <h4 className="font-semibold text-neutral-text text-sm">{area}</h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Area Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
              Why Choose Us for Ponte Vedra
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ponte Vedra Beach is known for its pristine beaches, luxury homes, and upscale lifestyle. 
              We understand the unique challenges of maintaining coastal properties in this exclusive area.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaHome className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-text mb-3">Luxury Home Specialists</h3>
              <p className="text-gray-600">
                We specialize in high-end properties and understand the attention to detail required for luxury homes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaLeaf className="text-2xl text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-text mb-3">Coastal Environment Experts</h3>
              <p className="text-gray-600">
                Salt air, humidity, and coastal weather require specialized cleaning approaches we've mastered.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-accent-eco/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaStar className="text-2xl text-accent-eco" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-text mb-3">Premium Service</h3>
              <p className="text-gray-600">
                Discreet, professional service that respects the privacy and standards of Ponte Vedra residents.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
              Services in Ponte Vedra
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive cleaning services tailored for Ponte Vedra's unique coastal environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Luxury Home Washing</h3>
              <ul className="space-y-2 text-lg">
                <li>• Soft wash exterior cleaning</li>
                <li>• Roof and gutter maintenance</li>
                <li>• Driveway and walkway restoration</li>
                <li>• Pool deck and patio cleaning</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent to-accent-eco text-white p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Coastal Property Care</h3>
              <ul className="space-y-2 text-lg">
                <li>• Salt air damage prevention</li>
                <li>• Humidity-resistant treatments</li>
                <li>• Beach access area cleaning</li>
                <li>• Storm debris removal</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
              Ponte Vedra Neighborhoods We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From the beachfront to the inland communities, we cover all of Ponte Vedra
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Ponte Vedra Beach',
              'Ponte Vedra Lakes',
              'Ponte Vedra Club',
              'Ponte Vedra Golf Club',
              'Ponte Vedra Inn & Club',
              'Ponte Vedra Oceanfront',
              'Ponte Vedra Shores',
              'Ponte Vedra South'
            ].map((neighborhood, index) => (
              <motion.div
                key={neighborhood}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <FaMapMarkerAlt className="text-accent mx-auto mb-2" />
                <h3 className="font-semibold text-neutral-text">{neighborhood}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-text mb-6">
              Frequently Asked Questions About Pressure Washing in Ponte Vedra Beach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our Ponte Vedra Beach pressure washing services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How often should I pressure wash my Ponte Vedra Beach home?",
                answer: "Due to Ponte Vedra's coastal environment with salt air and high humidity, we recommend pressure washing your home annually. Luxury properties may benefit from bi-annual cleaning to maintain their premium appearance and protect against salt air corrosion."
              },
              {
                question: "What makes Ponte Vedra Beach properties different from other areas?",
                answer: "Ponte Vedra Beach properties face unique challenges including salt air corrosion, high humidity, golf course irrigation, and luxury standards. Our specialized approach addresses these specific challenges with premium cleaning solutions and attention to detail."
              },
              {
                question: "Do you serve all Ponte Vedra Beach neighborhoods?",
                answer: "Yes, we provide comprehensive pressure washing services throughout Ponte Vedra Beach, including Sawgrass, Marsh Landing, Ponte Vedra Lakes, Ponte Vedra Club, and all surrounding areas. We're your local Ponte Vedra Beach pressure washing experts."
              },
              {
                question: "What pressure washing services do you offer in Ponte Vedra Beach?",
                answer: "We offer complete pressure washing services including house washing, roof cleaning, driveway restoration, pool deck cleaning, and commercial services. All services are tailored for Ponte Vedra's coastal environment and luxury property standards."
              },
              {
                question: "How do you protect luxury properties during pressure washing?",
                answer: "We use soft wash techniques and eco-friendly solutions specifically designed for luxury properties. Our team is trained to handle high-end materials and finishes with the care and attention that Ponte Vedra Beach residents expect."
              },
              {
                question: "Are your services eco-friendly for Ponte Vedra's coastal environment?",
                answer: "Absolutely. We use environmentally safe cleaning solutions that protect Ponte Vedra's beautiful coastal environment while effectively cleaning your property. Our methods are safe for plants, pets, and the local ecosystem."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-neutral-text mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Ponte Vedra Beach Residents Say
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Real testimonials from satisfied customers in Ponte Vedra Beach and surrounding areas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & Michael Thompson",
                neighborhood: "Sawgrass",
                service: "Luxury Home Washing",
                rating: 5,
                comment: "Exceptional service for our Ponte Vedra Beach home. The team understood the luxury standards we expect and delivered beyond our expectations."
              },
              {
                name: "Dr. Robert Chen",
                neighborhood: "Marsh Landing",
                service: "Roof Cleaning",
                rating: 5,
                comment: "Professional service that protected our investment. They handled our coastal property with the care it deserves."
              },
              {
                name: "Jennifer Martinez",
                neighborhood: "Ponte Vedra Lakes",
                service: "Complete Exterior Cleaning",
                rating: 5,
                comment: "Outstanding attention to detail. Our home looks brand new and they were respectful of our upscale community standards."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-300 text-lg" />
                  ))}
                </div>
                <p className="text-white/90 mb-4 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-white/80 text-sm">{testimonial.neighborhood}</p>
                  <p className="text-accent-eco text-sm font-medium">{testimonial.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Restore Your Ponte Vedra Property?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our satisfied Ponte Vedra clients who trust us with their luxury homes and coastal properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Get Free Estimate
              </Link>
              <Link href="tel:+19044563851" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call (904) 456-3851
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Jax FL Pressure Washing - Ponte Vedra Beach",
            "description": "Premium pressure washing services in Ponte Vedra Beach, FL. Luxury home specialists for coastal properties and golf course communities.",
            "url": "https://jaxflpressurewashing.com/locations/ponte-vedra",
            "telephone": "+19044563851",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ponte Vedra Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.2394",
              "longitude": "-81.3859"
            },
            "areaServed": [
              "Ponte Vedra Beach",
              "Sawgrass",
              "Marsh Landing",
              "Ponte Vedra Lakes",
              "Ponte Vedra Club",
              "Ponte Vedra Golf Club"
            ],
            "serviceType": [
              "Luxury Home Washing",
              "Coastal Property Care",
              "Roof Maintenance",
              "Pool Deck Cleaning",
              "Driveway Restoration",
              "Commercial Pressure Washing"
            ],
            "priceRange": "$$",
            "openingHours": "Mo-Su 07:00-19:00"
          })
        }}
      />
    </div>
  )
}

export default PonteVedraPage
