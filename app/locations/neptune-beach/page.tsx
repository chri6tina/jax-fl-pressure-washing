'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhone, FaCheckCircle, FaStar, FaUmbrellaBeach, FaWater, FaLeaf, FaSun } from 'react-icons/fa'

const NeptuneBeachPage = () => {
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
              <span className="text-sm font-semibold">Neptune Beach, Florida</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow leading-tight"
            >
              <span className="block">Pressure Washing</span>
              <span className="block text-accent">Neptune Beach</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-4 text-accent-eco">
                Coastal Community Specialists
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl mb-8 text-shadow max-w-4xl mx-auto leading-relaxed"
            >
              Coastal pressure washing specialists serving 
              <span className="text-accent font-semibold"> Neptune Beach</span>, 
              <span className="text-accent font-semibold"> Neptune Beach Oceanfront</span>, 
              <span className="text-accent font-semibold"> Neptune Beach Central</span>, and 
              <span className="text-accent font-semibold"> Neptune Beach South</span>.
            </motion.p>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            >
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">16+ Years</div>
                <div className="text-white/90 text-sm md:text-base">Coastal Experience</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-accent-eco mb-2">600+</div>
                <div className="text-white/90 text-sm md:text-base">Neptune Beach Properties</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-white/90 text-sm md:text-base">Community Satisfaction</div>
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
                <span className="font-semibold">Coastal Community Experts</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="font-semibold">Salt Air Specialists</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="font-semibold">Family-Friendly Service</span>
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
                Get Free Neptune Beach Quote
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
              <p className="text-white/80 text-sm mb-4">Trusted by Neptune Beach Residents for Over 16 Years</p>
              <div className="flex justify-center space-x-6 text-white/60">
                <span className="text-sm">✓ Licensed & Insured</span>
                <span className="text-sm">✓ Coastal Protection</span>
                <span className="text-sm">✓ Community-Focused</span>
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
              Neptune Beach Pressure Washing Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              As the trusted pressure washing company serving Neptune Beach, we understand the unique demands of this close-knit coastal community. 
              Our community-focused approach combines professional service with the care and attention that Neptune Beach residents expect.
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
                Why Neptune Beach Needs Professional Pressure Washing
              </h3>
              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong>Coastal Environment:</strong> Neptune Beach's proximity to the ocean exposes properties to constant salt air, sand, and coastal weather that requires specialized cleaning.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong>High Humidity:</strong> Florida's coastal humidity creates ideal conditions for mold, mildew, and algae growth on roofs, siding, and outdoor surfaces.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong>Community Standards:</strong> Neptune Beach's family-oriented community requires safe, eco-friendly cleaning that protects children, pets, and the environment.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong>Property Value:</strong> Regular maintenance helps preserve the value of Neptune Beach's well-maintained coastal properties.</p>
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
              <h4 className="text-2xl font-bold mb-6">Neptune Beach Quick Facts</h4>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between">
                  <span>Population:</span>
                  <span className="font-semibold">~7,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Beach Length:</span>
                  <span className="font-semibold">1.5 Miles</span>
                </div>
                <div className="flex justify-between">
                  <span>Established:</span>
                  <span className="font-semibold">1931</span>
                </div>
                <div className="flex justify-between">
                  <span>Property Types:</span>
                  <span className="font-semibold">Coastal/Residential</span>
                </div>
                <div className="flex justify-between">
                  <span>Lifestyle:</span>
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
              Neptune Beach Service Areas We Cover
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Neptune Beach Oceanfront',
                'Central Neptune Beach',
                'South Neptune Beach',
                'Neptune Beach Village',
                'Neptune Beach Estates',
                'Oceanfront Condos',
                'Near-Beach Homes',
                'Coastal Communities'
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
              Why Choose Us for Neptune Beach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Neptune Beach is a charming coastal community known for its family-friendly atmosphere, beautiful beaches, and tight-knit community. 
              We understand the unique needs of this special beach town.
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
                <FaUmbrellaBeach className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-text mb-3">Coastal Property Experts</h3>
              <p className="text-gray-600">
                We specialize in maintaining coastal properties with specialized approaches for Neptune Beach's unique environment.
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
                <FaWater className="text-2xl text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-text mb-3">Salt Air Specialists</h3>
              <p className="text-gray-600">
                Neptune Beach's salt air requires specialized cleaning approaches we've mastered over years of experience.
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
                <FaLeaf className="text-2xl text-accent-eco" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-text mb-3">Community-Focused Service</h3>
              <p className="text-gray-600">
                We understand Neptune Beach's community values and provide service that respects and enhances the neighborhood.
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
              Our Neptune Beach Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive cleaning services designed for Neptune Beach's coastal environment and community lifestyle
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
              <h3 className="text-2xl font-bold mb-4">Coastal Property Care</h3>
              <ul className="space-y-2 text-lg">
                <li>• House exterior washing</li>
                <li>• Roof and gutter cleaning</li>
                <li>• Deck and patio restoration</li>
                <li>• Beach access area cleaning</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent to-accent-eco text-white p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Community Environment Services</h3>
              <ul className="space-y-2 text-lg">
                <li>• Salt air damage prevention</li>
                <li>• Storm debris removal</li>
                <li>• Sand and salt buildup cleaning</li>
                <li>• Family-safe cleaning solutions</li>
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
              What Neptune Beach Residents Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied Neptune Beach clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jennifer & Tom Wilson",
                location: "Neptune Beach Oceanfront",
                rating: 5,
                text: "Living in Neptune Beach means dealing with constant salt air and sand. Jax FL Pressure Washing keeps our coastal home looking pristine year-round. Their community-focused approach is exactly what Neptune Beach needs!",
                service: "Oceanfront Home Washing & Protection"
              },
              {
                name: "Robert Martinez",
                location: "Central Neptune Beach",
                rating: 5,
                text: "As a long-time Neptune Beach resident, I appreciate a company that understands our unique coastal challenges. These professionals deliver exceptional results while respecting our community values.",
                service: "Annual Coastal Maintenance Package"
              },
              {
                name: "Lisa & David Thompson",
                location: "South Neptune Beach",
                rating: 5,
                text: "Our Neptune Beach home needed attention after a storm season. The team handled everything professionally and used eco-friendly solutions that are safe for our family and the beach environment.",
                service: "Storm Recovery & Salt Air Protection"
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
              Neptune Beach Pressure Washing FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about pressure washing services in Neptune Beach, Florida
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How often should I pressure wash my Neptune Beach home?",
                answer: "For Neptune Beach's coastal environment, we recommend pressure washing every 6-8 months. Oceanfront properties may need service every 4-6 months due to constant salt air exposure and beach debris accumulation."
              },
              {
                question: "Do you use special techniques for salt air damage?",
                answer: "Absolutely! We use specialized low-pressure techniques and salt-neutralizing cleaning solutions specifically designed for coastal properties. Our approach prevents further corrosion while effectively removing salt buildup."
              },
              {
                question: "What makes Neptune Beach properties different for pressure washing?",
                answer: "Neptune Beach properties face unique challenges: constant salt air exposure, high humidity, beach debris, and coastal weather patterns. We use specialized equipment and techniques designed specifically for these coastal conditions."
              },
              {
                question: "How long does a typical Neptune Beach home cleaning take?",
                answer: "Most Neptune Beach homes take 3-5 hours depending on size, oceanfront location, and services needed. Oceanfront properties often require extra time for salt buildup removal and protective treatments."
              },
              {
                question: "Do you offer coastal protection packages?",
                answer: "Yes! We offer specialized coastal protection packages for Neptune Beach properties, including regular cleaning schedules, salt air protection treatments, storm recovery services, and priority booking for oceanfront properties."
              },
              {
                question: "What areas of my Neptune Beach property do you clean?",
                answer: "We clean your entire exterior: house siding, roof, driveway, deck, patio, beach access areas, and outdoor structures. For oceanfront properties, we also clean beach-facing surfaces and provide protective treatments."
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
              Ready to Protect Your Neptune Beach Property?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our satisfied Neptune Beach clients who trust us to maintain their beautiful coastal properties.
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
            "name": "Jax FL Pressure Washing - Neptune Beach",
            "description": "Professional pressure washing services in Neptune Beach, FL. Specialized coastal cleaning for salt air, humidity, and beachfront properties.",
            "url": "https://jaxflpressurewashing.com/locations/neptune-beach",
            "telephone": "+19044563851",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Neptune Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.3119",
              "longitude": "-81.3965"
            },
            "areaServed": [
              "Neptune Beach",
              "Neptune Beach Oceanfront",
              "Central Neptune Beach",
              "South Neptune Beach",
              "Neptune Beach Village",
              "Coastal Jacksonville"
            ],
            "serviceType": [
              "House Washing",
              "Roof Cleaning",
              "Driveway Cleaning",
              "Commercial Services",
              "Coastal Property Care",
              "Salt Air Damage Prevention"
            ],
            "priceRange": "$$",
            "openingHours": "Mo-Su 07:00-19:00"
          })
        }}
      />
    </div>
  )
}

export default NeptuneBeachPage
