'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhone, FaCheckCircle, FaStar, FaHistory, FaBuilding, FaLeaf, FaTree } from 'react-icons/fa'

const RiversidePage = () => {
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
              <span className="text-sm font-semibold">Riverside, Jacksonville FL</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow leading-tight"
            >
              <span className="block">Pressure Washing</span>
              <span className="block text-accent">Riverside</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-4 text-accent-eco">
                Historic District Specialists
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl mb-8 text-shadow max-w-4xl mx-auto leading-relaxed"
            >
              Historic district pressure washing specialists serving 
              <span className="text-accent font-semibold"> Riverside Historic District</span>, 
              <span className="text-accent font-semibold"> Riverside Arts Market</span>, 
              <span className="text-accent font-semibold"> Five Points</span>, and 
              <span className="text-accent font-semibold"> King Street District</span>.
            </motion.p>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            >
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">22+ Years</div>
                <div className="text-white/90 text-sm md:text-base">Historic Experience</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-accent-eco mb-2">900+</div>
                <div className="text-white/90 text-sm md:text-base">Riverside Properties</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-white/90 text-sm md:text-base">Preservation Rate</div>
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
                <span className="font-semibold">Historic District Experts</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="font-semibold">Urban Property Specialists</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="font-semibold">Arts District Care</span>
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
                Get Free Riverside Quote
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
              <p className="text-white/80 text-sm mb-4">Trusted by Riverside Residents for Over 22 Years</p>
              <div className="flex justify-center space-x-6 text-white/60">
                <span className="text-sm">✓ Licensed & Insured</span>
                <span className="text-sm">✓ Historic Preservation</span>
                <span className="text-sm">✓ Urban Expertise</span>
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
              Riverside Pressure Washing Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              As the trusted pressure washing company serving Riverside, we understand the unique demands of this historic urban district. 
              Our preservation-focused approach combines professional service with the care and attention that Riverside's architectural heritage deserves.
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
                Why Riverside Needs Professional Pressure Washing
              </h3>
              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong>Historic Architecture:</strong> Riverside's historic buildings require gentle, preservation-focused cleaning that protects original materials and architectural details.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong>Urban Environment:</strong> City pollution, traffic residue, and urban grime accumulate faster on Riverside's commercial and residential properties.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong>Cultural Significance:</strong> As Jacksonville's historic heart, Riverside properties require service that respects and enhances their cultural importance.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong>Mixed-Use Properties:</strong> Riverside's blend of residential and commercial properties requires versatile cleaning solutions and scheduling flexibility.</p>
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
              <h4 className="text-2xl font-bold mb-6">Riverside Quick Facts</h4>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between">
                  <span>Established:</span>
                  <span className="font-semibold">1869</span>
                </div>
                <div className="flex justify-between">
                  <span>Historic District:</span>
                  <span className="font-semibold">National Register</span>
                </div>
                <div className="flex justify-between">
                  <span>Architecture:</span>
                  <span className="font-semibold">Victorian/Arts & Crafts</span>
                </div>
                <div className="flex justify-between">
                  <span>Landmarks:</span>
                  <span className="font-semibold">15+ Cultural Sites</span>
                </div>
                <div className="flex justify-between">
                  <span>Property Types:</span>
                  <span className="font-semibold">Mixed Use</span>
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
              Riverside Service Areas We Cover
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Riverside Historic District',
                'Five Points',
                'King Street District',
                'Riverside Arts Market',
                'Riverside Park',
                'Memorial Park',
                'Riverside Avenue',
                'Cultural District'
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
              Why Choose Us for Riverside
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Riverside is Jacksonville's historic heart, known for its beautiful architecture, cultural landmarks, and vibrant community. 
              We understand the unique challenges of maintaining historic and urban properties.
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
                <FaHistory className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-text mb-3">Historic Building Specialists</h3>
              <p className="text-gray-600">
                We specialize in preserving the beauty of historic buildings while providing modern cleaning solutions.
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
                <FaBuilding className="text-2xl text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-text mb-3">Urban Property Experts</h3>
              <p className="text-gray-600">
                Riverside's urban environment requires specialized approaches for commercial and residential properties.
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
                <FaTree className="text-2xl text-accent-eco" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-text mb-3">Cultural Heritage Focus</h3>
              <p className="text-gray-600">
                We respect Riverside's rich history and provide service that enhances its architectural beauty.
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
              Our Riverside Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized cleaning services for Riverside's historic buildings and urban properties
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
              <h3 className="text-2xl font-bold mb-4">Historic Building Care</h3>
              <ul className="space-y-2 text-lg">
                <li>• Gentle exterior cleaning</li>
                <li>• Historic brick restoration</li>
                <li>• Stone and masonry cleaning</li>
                <li>• Architectural detail preservation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent to-accent-eco text-white p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Urban Property Services</h3>
              <ul className="space-y-2 text-lg">
                <li>• Commercial building washing</li>
                <li>• Sidewalk and street cleaning</li>
                <li>• Storefront maintenance</li>
                <li>• Parking area restoration</li>
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
              What Riverside Residents Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied Riverside clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Martinez",
                location: "Riverside Historic District",
                rating: 5,
                text: "As a homeowner in the historic district, I was concerned about preserving my Victorian home's original features. Jax FL Pressure Washing handled everything with the care and expertise that historic properties deserve. My home looks magnificent!",
                service: "Historic Home Washing & Restoration"
              },
              {
                name: "Michael & Jennifer Chen",
                location: "Five Points",
                rating: 5,
                text: "Our commercial building in Five Points needed professional cleaning that wouldn't disrupt our business. The team was professional, efficient, and respectful of our historic building. Highly recommend for any Riverside property!",
                service: "Commercial Building Washing"
              },
              {
                name: "Elizabeth Thompson",
                location: "King Street District",
                rating: 5,
                text: "Living in Riverside means being part of Jacksonville's cultural heritage. These professionals understand that and provide service that enhances our neighborhood's beauty while preserving its historic character.",
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
              Riverside Pressure Washing FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about pressure washing services in Riverside, Jacksonville
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How do you protect historic building materials during cleaning?",
                answer: "We use specialized low-pressure techniques and gentle cleaning solutions specifically designed for historic materials. Our approach preserves original brick, stone, and architectural details while effectively removing dirt and grime."
              },
              {
                question: "Do you offer commercial pressure washing in Riverside?",
                answer: "Absolutely! We provide comprehensive commercial pressure washing services for Riverside's business district, including storefronts, office buildings, and mixed-use properties. We work around your business hours to minimize disruption."
              },
              {
                question: "What makes Riverside properties different for pressure washing?",
                answer: "Riverside's historic architecture, urban environment, and cultural significance require specialized care. We understand the unique challenges of preserving historic buildings while maintaining their beauty in an urban setting."
              },
              {
                question: "How long does a typical Riverside property cleaning take?",
                answer: "Most Riverside properties take 3-6 hours depending on size, historic features, and services needed. Historic buildings require extra care and attention to detail, which we factor into our timeline estimates."
              },
              {
                question: "Do you offer preservation-focused maintenance packages?",
                answer: "Yes! We offer specialized maintenance packages for Riverside's historic properties, including regular cleaning schedules, preservation treatments, and priority booking for cultural landmark properties."
              },
              {
                question: "What areas of my Riverside property do you clean?",
                answer: "We clean your entire exterior: historic siding, roofs, walkways, storefronts, and architectural details. For commercial properties, we also clean sidewalks, parking areas, and building facades while preserving historic elements."
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
              Ready to Preserve Your Riverside Property?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our satisfied Riverside clients who trust us to maintain their beautiful historic properties.
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
            "name": "Jax FL Pressure Washing - Riverside",
            "description": "Professional pressure washing services in Riverside, Jacksonville FL. Specialized historic district cleaning for preservation and urban property maintenance.",
            "url": "https://jaxflpressurewashing.com/locations/riverside",
            "telephone": "+19044563851",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Riverside",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.3322",
              "longitude": "-81.6557"
            },
            "areaServed": [
              "Riverside Historic District",
              "Five Points",
              "King Street District",
              "Riverside Arts Market",
              "Riverside Park",
              "Memorial Park",
              "Riverside Avenue",
              "Cultural District"
            ],
            "serviceType": [
              "House Washing",
              "Roof Cleaning",
              "Driveway Cleaning",
              "Commercial Services",
              "Historic Building Care",
              "Urban Property Maintenance"
            ],
            "priceRange": "$$",
            "openingHours": "Mo-Su 07:00-19:00"
          })
        }}
      />
    </div>
  )
}

export default RiversidePage
