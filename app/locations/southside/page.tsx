'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhone, FaCheckCircle, FaStar, FaBuilding, FaHome, FaLeaf, FaShieldAlt } from 'react-icons/fa'

const SouthsidePage = () => {
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
              <span className="text-sm font-semibold">Southside, Jacksonville FL</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow leading-tight"
            >
              <span className="block">Pressure Washing</span>
              <span className="block text-accent">Southside</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-4 text-accent-eco">
                Suburban Excellence Specialists
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl mb-8 text-shadow max-w-4xl mx-auto leading-relaxed"
            >
              Suburban excellence pressure washing specialists serving 
              <span className="text-accent font-semibold"> Southside Estates</span>, 
              <span className="text-accent font-semibold"> Southside Business District</span>, 
              <span className="text-accent font-semibold"> Southside Residential</span>, and 
              <span className="text-accent font-semibold"> Southside Commercial</span>.
            </motion.p>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            >
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">28+ Years</div>
                <div className="text-white/90 text-sm md:text-base">Suburban Experience</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-accent-eco mb-2">800+</div>
                <div className="text-white/90 text-sm md:text-base">Southside Properties</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-white/90 text-sm md:text-base">Customer Satisfaction</div>
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
                <span className="font-semibold">Suburban Experts</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="font-semibold">Commercial Specialists</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="font-semibold">Residential Care</span>
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
                Get Free Southside Quote
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
              <p className="text-white/80 text-sm mb-4">Trusted by Southside Residents for Over 28 Years</p>
              <div className="flex justify-center space-x-6 text-white/60">
                <span className="text-sm">✓ Licensed & Insured</span>
                <span className="text-sm">✓ Suburban Expertise</span>
                <span className="text-sm">✓ Commercial & Residential</span>
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
              Southside Pressure Washing Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              As the trusted pressure washing company serving Southside, we understand the unique demands of this diverse suburban community. 
              Our comprehensive approach combines professional service with the care and attention that Southside's commercial and residential properties deserve.
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
                Why Southside Needs Professional Pressure Washing
              </h3>
              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong>Suburban Environment:</strong> Southside's suburban setting exposes properties to pollen, dust, and seasonal weather that requires regular cleaning.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong>Mixed-Use Properties:</strong> Southside's blend of commercial and residential properties requires versatile cleaning solutions and scheduling flexibility.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong>Business District:</strong> Southside's commercial areas require professional cleaning that enhances business appearance and customer appeal.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong>Community Standards:</strong> Southside's family-oriented community requires service that maintains neighborhood beauty and property values.</p>
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
              <h4 className="text-2xl font-bold mb-6">Southside Quick Facts</h4>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between">
                  <span>Established:</span>
                  <span className="font-semibold">1960s</span>
                </div>
                <div className="flex justify-between">
                  <span>Property Types:</span>
                  <span className="font-semibold">Mixed Use</span>
                </div>
                <div className="flex justify-between">
                  <span>Architecture:</span>
                  <span className="font-semibold">Modern/Contemporary</span>
                </div>
                <div className="flex justify-between">
                  <span>Business Areas:</span>
                  <span className="font-semibold">Multiple Districts</span>
                </div>
                <div className="flex justify-between">
                  <span>Community:</span>
                  <span className="font-semibold">Family-Friendly</span>
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
              Southside Service Areas We Cover
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Southside Estates',
                'Southside Business District',
                'Southside Residential',
                'Southside Commercial',
                'Southside Park',
                'Southside Circle',
                'Southside Boulevard',
                'Business Areas'
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
              Why Choose Us for Southside
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Southside is Jacksonville's diverse suburban community, known for its mix of commercial and residential properties, family-friendly atmosphere, and business opportunities. 
              We understand the unique needs of this dynamic neighborhood.
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
                <FaBuilding className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-text mb-3">Commercial Specialists</h3>
              <p className="text-gray-600">
                We specialize in maintaining commercial properties with professional cleaning solutions.
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
                <FaHome className="text-2xl text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-text mb-3">Residential Care</h3>
              <p className="text-gray-600">
                Southside's residential properties require careful cleaning approaches that protect families and landscaping.
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
                <FaShieldAlt className="text-2xl text-accent-eco" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-text mb-3">Suburban Expertise</h3>
              <p className="text-gray-600">
                We understand Southside's suburban environment and provide service that enhances community standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
              Our Southside Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive cleaning services for Southside's commercial and residential properties
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
              <h3 className="text-2xl font-bold mb-4">Commercial Excellence</h3>
              <ul className="space-y-2 text-lg">
                <li>• Office building washing</li>
                <li>• Storefront maintenance</li>
                <li>• Parking area restoration</li>
                <li>• Business district cleaning</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent to-accent-eco text-white p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Residential Care</h3>
              <ul className="space-y-2 text-lg">
                <li>• House exterior washing</li>
                <li>• Roof and gutter cleaning</li>
                <li>• Driveway and walkway restoration</li>
                <li>• Landscape-safe cleaning</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
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
              What Southside Residents Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied Southside clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael & Sarah Rodriguez",
                location: "Southside Estates",
                rating: 5,
                text: "As Southside homeowners, we needed a pressure washing company that understood suburban properties. Jax FL Pressure Washing provided exceptional service while protecting our landscaping and maintaining our home's curb appeal.",
                service: "Residential Washing & Landscape Protection"
              },
              {
                name: "Jennifer & David Chen",
                location: "Southside Business District",
                rating: 5,
                text: "Our Southside business needed professional cleaning that wouldn't disrupt our operations. The team was professional, efficient, and respectful of our business hours. Highly recommend for any Southside commercial property!",
                service: "Commercial Building Washing"
              },
              {
                name: "Robert & Lisa Thompson",
                location: "Southside Residential",
                rating: 5,
                text: "Living in Southside means being part of a family-friendly community. These professionals understand that and provide service that enhances our neighborhood's beauty while maintaining the highest standards.",
                service: "Annual Maintenance Package"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-accent">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-xl" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-neutral-text">{testimonial.name}</h4>
                  <p className="text-accent text-sm">{testimonial.location}</p>
                  <p className="text-gray-500 text-sm">{testimonial.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-text mb-6">
              Southside Pressure Washing FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about pressure washing services in Southside, Jacksonville
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Do you offer commercial pressure washing in Southside?",
                answer: "Absolutely! We provide comprehensive commercial pressure washing services for Southside's business district, including office buildings, storefronts, and parking areas. We work around your business hours to minimize disruption."
              },
              {
                question: "How do you protect landscaping during residential cleaning?",
                answer: "We take special care to protect Southside's landscaping during cleaning. We use landscape-safe techniques and cover delicate plants to ensure your gardens remain beautiful and unharmed."
              },
              {
                question: "What makes Southside properties different for pressure washing?",
                answer: "Southside's suburban environment, mixed-use properties, and family-friendly atmosphere require specialized care. We understand the unique challenges of maintaining both commercial and residential properties in this diverse community."
              },
              {
                question: "How long does a typical Southside property cleaning take?",
                answer: "Most Southside properties take 3-6 hours depending on size, property type, and services needed. Commercial properties may require extra time for business area cleaning and scheduling flexibility."
              },
              {
                question: "Do you offer maintenance packages for Southside properties?",
                answer: "Yes! We offer specialized maintenance packages for Southside properties, including regular cleaning schedules, commercial maintenance programs, and priority booking for business district properties."
              },
              {
                question: "What areas of my Southside property do you clean?",
                answer: "We clean your entire exterior: building siding, roofs, walkways, driveways, and outdoor areas. For commercial properties, we also clean business facades, parking areas, and storefronts while maintaining professional appearance."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
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
              Ready to Enhance Your Southside Property?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our satisfied Southside clients who trust us to maintain their beautiful properties.
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
            "name": "Jax FL Pressure Washing - Southside",
            "description": "Professional pressure washing services in Southside, Jacksonville FL. Specialized suburban excellence cleaning for commercial and residential properties.",
            "url": "https://jaxflpressurewashing.com/locations/southside",
            "telephone": "+19044563851",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Southside",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.3322",
              "longitude": "-81.6557"
            },
            "areaServed": [
              "Southside Estates",
              "Southside Business District",
              "Southside Residential",
              "Southside Commercial",
              "Southside Park",
              "Southside Circle",
              "Southside Boulevard",
              "Business Areas"
            ],
            "serviceType": [
              "House Washing",
              "Roof Cleaning",
              "Driveway Cleaning",
              "Commercial Services",
              "Residential Care",
              "Suburban Excellence"
            ],
            "priceRange": "$$",
            "openingHours": "Mo-Su 07:00-19:00"
          })
        }}
      />
    </div>
  )
}

export default SouthsidePage
