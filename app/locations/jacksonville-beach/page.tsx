'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheckCircle, FaStar, FaArrowRight, FaShieldAlt, FaLeaf, FaClock } from 'react-icons/fa'

const jacksonvilleBeachData = {
  name: 'Jacksonville Beach',
  description: 'Beachfront properties and coastal homes requiring specialized cleaning for salt air and humidity.',
  challenges: [
    'Salt air corrosion and buildup',
    'High humidity and mold growth',
    'Sand and debris accumulation',
    'UV damage from intense sun exposure',
    'Coastal weather wear and tear'
  ],
  services: [
    {
      name: 'House Washing (Soft Wash)',
      description: 'Gentle cleaning for coastal homes using eco-friendly solutions that protect your siding.',
      benefits: ['Removes salt buildup', 'Prevents mold growth', 'Safe for all siding types', 'Long-lasting results']
    },
    {
      name: 'Roof Cleaning',
      description: 'Specialized roof cleaning that removes algae and moss without damaging shingles.',
      benefits: ['Extends roof life', 'Improves energy efficiency', 'Prevents water damage', 'Maintains warranty']
    },
    {
      name: 'Driveway & Concrete Cleaning',
      description: 'Deep cleaning for driveways and walkways affected by coastal elements.',
      benefits: ['Removes salt stains', 'Restores appearance', 'Prevents deterioration', 'Improves safety']
    },
    {
      name: 'Commercial Services',
      description: 'Professional cleaning for beachfront businesses and commercial properties.',
      benefits: ['Maintains curb appeal', 'Complies with regulations', 'Protects investments', 'Professional appearance']
    }
  ],
  neighborhoods: [
    'Beach Haven',
    'Ponte Vedra Beach',
    'Atlantic Beach',
    'Neptune Beach',
    'Mayport',
    'Hanna Park',
    'Dunes',
    'Oceanfront'
  ],
  testimonials: [
    {
      name: 'Sarah & Mike Johnson',
      neighborhood: 'Beach Haven',
      rating: 5,
      comment: 'Our beachfront home looks brand new! The salt buildup was completely removed and they used eco-friendly products that are safe for our family and the environment.',
      service: 'House Washing'
    },
    {
      name: 'David Chen',
      neighborhood: 'Atlantic Beach',
      rating: 5,
      comment: 'Professional service from start to finish. They understood the unique challenges of coastal properties and delivered exceptional results.',
      service: 'Roof Cleaning'
    },
    {
      name: 'Lisa Rodriguez',
      neighborhood: 'Ponte Vedra Beach',
      rating: 5,
      comment: 'Our driveway was covered in salt stains from the ocean air. They restored it completely and it looks better than when we first moved in.',
      service: 'Driveway Cleaning'
    }
  ],
  whyChooseUs: [
    'Coastal cleaning specialists with 10+ years experience',
    'Eco-friendly solutions safe for marine environments',
    'Licensed and insured for your protection',
    'Free estimates and competitive pricing',
    'Local Jacksonville Beach business you can trust'
  ]
}

const JacksonvilleBeachPage = () => {
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
              <span className="text-sm font-semibold">Jacksonville Beach, Florida</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow leading-tight"
            >
              <span className="block">Pressure Washing</span>
              <span className="block text-accent">Jacksonville Beach</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-4 text-accent-eco">
                Coastal Property Specialists
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl mb-8 text-shadow max-w-4xl mx-auto leading-relaxed"
            >
              Professional pressure washing specialists serving 
              <span className="text-accent font-semibold"> Jacksonville Beach</span>, 
              <span className="text-accent font-semibold"> Ponte Vedra Beach</span>, 
              <span className="text-accent font-semibold"> Atlantic Beach</span>, and 
              <span className="text-accent font-semibold"> Neptune Beach</span>.
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
                <div className="text-white/90 text-sm md:text-base">Coastal Experience</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-accent-eco mb-2">1200+</div>
                <div className="text-white/90 text-sm md:text-base">Beach Properties</div>
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
                <span className="font-semibold">Coastal Property Specialists</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="font-semibold">Salt Air Experts</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="font-semibold">Beachfront Specialists</span>
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
                Get Free Coastal Home Quote
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
              <p className="text-white/80 text-sm mb-4">Trusted by Jacksonville Beach Residents for Over 15 Years</p>
              <div className="flex justify-center space-x-6 text-white/60">
                <span className="text-sm">✓ Licensed & Insured</span>
                <span className="text-sm">✓ Coastal Protection</span>
                <span className="text-sm">✓ Eco-Friendly Solutions</span>
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

      {/* Area Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-6">
                Jacksonville Beach Area
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Jacksonville Beach is a vibrant coastal community known for its beautiful beaches, 
                oceanfront properties, and unique coastal lifestyle. Our location provides specialized 
                pressure washing services designed specifically for the challenges of coastal living.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From salt air corrosion to high humidity and UV damage, coastal properties require 
                specialized care and attention. Our eco-friendly solutions are designed to protect 
                your investment while restoring its beauty.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-neutral-text mb-4">Neighborhoods We Serve:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {jacksonvilleBeachData.neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <FaCheckCircle className="text-accent text-sm" />
                      <span className="text-gray-600">{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-neutral-text mb-6">
                Coastal Challenges We Solve
              </h3>
              <div className="space-y-4">
                {jacksonvilleBeachData.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaShieldAlt className="text-white text-xs" />
                    </div>
                    <span className="text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
              Services in Jacksonville Beach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized pressure washing services designed for coastal properties
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {jacksonvilleBeachData.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-neutral-text mb-4">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-text mb-3">Key Benefits:</h4>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <FaCheckCircle className="text-accent text-sm flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                  className="text-primary hover:text-secondary font-semibold text-sm flex items-center group"
                >
                  Learn More
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
              Why Choose Us for Jacksonville Beach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local expertise combined with coastal cleaning specialization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jacksonvilleBeachData.whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaLeaf className="text-white text-2xl" />
                </div>
                <p className="text-gray-700 font-medium">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
              What Jacksonville Beach Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real testimonials from satisfied customers in your area
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {jacksonvilleBeachData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-neutral-text">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.neighborhood}</p>
                  <p className="text-xs text-accent">{testimonial.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-neutral-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Restore Your Jacksonville Beach Property?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get a free quote for pressure washing services in Jacksonville Beach. 
              Our coastal cleaning specialists are ready to help!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Get Free Quote
              </Link>
              <Link 
                href="tel:+19044563851" 
                className="flex items-center space-x-2 bg-neutral-white/20 hover:bg-neutral-white/30 px-6 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <FaPhone />
                <span>(904) 456-3851</span>
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
            "name": "Jax FL Pressure Washing - Jacksonville Beach",
            "description": "Professional pressure washing services in Jacksonville Beach, FL. Specialized coastal cleaning for salt air, humidity, and beachfront properties.",
            "url": "https://jaxflpressurewashing.com/locations/jacksonville-beach",
            "telephone": "+19044563851",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jacksonville Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.2949",
              "longitude": "-81.3931"
            },
            "areaServed": [
              "Jacksonville Beach",
              "Ponte Vedra Beach",
              "Atlantic Beach",
              "Neptune Beach",
              "Beach Haven",
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

export default JacksonvilleBeachPage
