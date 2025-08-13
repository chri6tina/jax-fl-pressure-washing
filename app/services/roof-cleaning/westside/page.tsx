'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhone, FaCheckCircle, FaHome, FaLeaf, FaStar, FaClock, FaShieldAlt } from 'react-icons/fa'

const RoofCleaningWestsidePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
          <div className="absolute inset-0 bg-blue-600/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow">
              Roof Cleaning in Westside, Jacksonville
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 text-shadow max-w-3xl mx-auto">
              Professional roof cleaning services in Westside, FL. Transform your property's appearance with our eco-friendly technology.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-400" />
                <span>Same Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-400" />
                <span>Free Estimates</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition duration-300 inline-flex items-center justify-center"
              >
                <FaPhone className="mr-2" />
                Get Free Quote
              </Link>
              <Link 
                href="tel:+19044563851"
                className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <FaPhone />
                <span>(904) 456-3851</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

            {/* SEO Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Westside Roof Cleaning - Professional Exterior Cleaning Services
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Looking for reliable roof cleaning services in Westside, Jacksonville? Our professional team specializes in roof cleaning that safely removes dirt, mold, mildew, and algae without damaging your property's exterior surfaces.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Westside Property Owners Choose Us</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Local Expertise:</strong> Serving Westside since 2019 with deep knowledge of local climate challenges</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Eco-Friendly Solutions:</strong> Safe for your family, pets, and Westside's beautiful landscaping</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Proven Results:</strong> Hundreds of satisfied Westside property owners trust us year after year</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Same-Day Service:</strong> Quick response times for Westside's busy families</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Westside Roof Cleaning Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Professional Roof Cleaning:</strong> Expert cleaning for all surface types</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Mold & Mildew Removal:</strong> Combat Westside's humid climate challenges</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Eco-Friendly Cleaning:</strong> Safe solutions for your Westside property</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Preventive Maintenance:</strong> Extend the life of your exterior surfaces</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-blue-600 text-white p-8 rounded-xl text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">Westside Roof Cleaning - Local SEO Focus</h3>
            <p className="text-lg mb-6">
              Serving Westside, Jacksonville Beach, Mandarin, and surrounding areas with professional roof cleaning services. 
              Our Westside location expertise ensures the best results for your property.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <strong>Service Areas:</strong> Westside, Jacksonville Beach, Mandarin, San Marco
              </div>
              <div>
                <strong>Specialties:</strong> Roof Cleaning, Mold removal, Eco-friendly cleaning
              </div>
              <div>
                <strong>Experience:</strong> 5+ years serving Westside property owners
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Services in Westside</h3>
              <p className="text-gray-600 mb-6">
                While you're here, explore our other professional cleaning services available in Westside:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                
                  <Link 
                    href="/services/house-washing" 
                    className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></div>
                    <span className="text-gray-700 group-hover:text-blue-700 font-medium">House Washing</span>
                  </Link>
                
                  <Link 
                    href="/services/driveway-cleaning" 
                    className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></div>
                    <span className="text-gray-700 group-hover:text-blue-700 font-medium">Driveway Cleaning</span>
                  </Link>
                
                  <Link 
                    href="/services/gutter-cleaning" 
                    className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></div>
                    <span className="text-gray-700 group-hover:text-blue-700 font-medium">Gutter Cleaning</span>
                  </Link>
                
                  <Link 
                    href="/services/deck-fence-cleaning" 
                    className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></div>
                    <span className="text-gray-700 group-hover:text-blue-700 font-medium">Deck & Fence Cleaning</span>
                  </Link>
                
                  <Link 
                    href="/services/pool-deck-cleaning" 
                    className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></div>
                    <span className="text-gray-700 group-hover:text-blue-700 font-medium">Pool Deck Cleaning</span>
                  </Link>
                
                  <Link 
                    href="/services/patio-cleaning" 
                    className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></div>
                    <span className="text-gray-700 group-hover:text-blue-700 font-medium">Patio Cleaning</span>
                  </Link>
                
                  <Link 
                    href="/services/paver-stone-services" 
                    className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></div>
                    <span className="text-gray-700 group-hover:text-blue-700 font-medium">Paver & Stone Services</span>
                  </Link>
                
                  <Link 
                    href="/services/eco-friendly-solutions" 
                    className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></div>
                    <span className="text-gray-700 group-hover:text-blue-700 font-medium">Eco-Friendly Solutions</span>
                  </Link>
                
              </div>
              <div className="mt-6 text-center">
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  View All Services
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Westside Service Coverage</h3>
              <p className="text-gray-600 mb-6">
                We provide comprehensive cleaning services throughout Westside and surrounding Jacksonville areas:
              </p>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  <span><strong>Residential:</strong> <Link href="/services/house-washing" className="text-blue-600 hover:text-blue-700 underline">House Washing</Link>, <Link href="/services/driveway-cleaning" className="text-blue-600 hover:text-blue-700 underline">Driveway Cleaning</Link></span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  <span><strong>Commercial:</strong> <Link href="/services/office-building-cleaning" className="text-blue-600 hover:text-blue-700 underline">Office Buildings</Link>, <Link href="/services/retail-storefronts" className="text-blue-600 hover:text-blue-700 underline">Retail Storefronts</Link></span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  <span><strong>Specialized:</strong> <Link href="/services/roof-cleaning" className="text-blue-600 hover:text-blue-700 underline">Roof Cleaning</Link>, <Link href="/services/gutter-cleaning" className="text-blue-600 hover:text-blue-700 underline">Gutter Cleaning</Link></span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  <span><strong>Outdoor:</strong> <Link href="/services/deck-fence-cleaning" className="text-blue-600 hover:text-blue-700 underline">Deck & Fence</Link>, <Link href="/services/patio-cleaning" className="text-blue-600 hover:text-blue-700 underline">Patio Cleaning</Link></span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Professional Roof Cleaning in Westside
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Professional roof cleaning services in Westside, Jacksonville. Our safe, low-pressure cleaning methods remove algae, moss, and debris without damaging your roof shingles.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Serving Westside and surrounding areas with eco-friendly cleaning solutions that protect your family, pets, and landscaping while delivering exceptional results.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <FaMapMarkerAlt className="mr-2" />
                <span>Serving Westside, Jacksonville, FL</span>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Our Roof Cleaning?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaCheckCircle className="mr-3 text-green-300" />
                    Eco-friendly technology
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="mr-3 text-green-300" />
                    Licensed and insured professionals
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="mr-3 text-green-300" />
                    Same-day service available
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="mr-3 text-green-300" />
                    Satisfaction guaranteed
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Location-Specific Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Westside Roof Cleaning Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Westside's unique environment requires specialized roof cleaning approaches. We understand the local challenges and provide solutions that work.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">
                <FaStar />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Extends roof lifespan by 5-10 years</h3>
              <p className="text-gray-600">
                Professional roof cleaning in Westside provides long-term benefits that protect your investment and maintain your property's value.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">
                <FaStar />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Prevents costly water damage</h3>
              <p className="text-gray-600">
                Professional roof cleaning in Westside provides long-term benefits that protect your investment and maintain your property's value.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">
                <FaStar />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Improves home energy efficiency</h3>
              <p className="text-gray-600">
                Professional roof cleaning in Westside provides long-term benefits that protect your investment and maintain your property's value.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">
                <FaStar />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Maintains property value</h3>
              <p className="text-gray-600">
                Professional roof cleaning in Westside provides long-term benefits that protect your investment and maintain your property's value.
              </p>
            </motion.div>
            
          </motion.div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Westside Roof Cleaning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure your Westside property gets the best possible roof cleaning service.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto"
          >
            
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Roof inspection and assessment</h3>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Safe cleaning solution application</h3>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Low-pressure rinsing</h3>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Final inspection and cleanup</h3>
            </motion.div>
            
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Westside Roof Cleaning Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive pricing for Westside property owners. Get a free quote today!
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg ">
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Small Roof</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$200-350</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  <span>Up to 1,500 sq ft</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  <span>Professional service</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  <span>Eco-friendly solutions</span>
                </li>
              </ul>
              <Link 
                href="/contact"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block text-center"
              >
                Get Quote
              </Link>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg ring-2 ring-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Medium Roof</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$350-550</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  <span>1,500-2,500 sq ft</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  <span>Professional service</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  <span>Eco-friendly solutions</span>
                </li>
              </ul>
              <Link 
                href="/contact"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block text-center"
              >
                Get Quote
              </Link>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg ">
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Large Roof</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$550-800</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  <span>2,500+ sq ft</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  <span>Professional service</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  <span>Eco-friendly solutions</span>
                </li>
              </ul>
              <Link 
                href="/contact"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block text-center"
              >
                Get Quote
              </Link>
            </motion.div>
            
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Westside Property?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join hundreds of satisfied Westside property owners who trust us with their roof cleaning needs. Get your free quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition duration-300 inline-flex items-center justify-center"
              >
                <FaPhone className="mr-2" />
                Get Free Quote
              </Link>
              <Link 
                href="tel:+19044563851"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300 inline-flex items-center justify-center"
              >
                <FaPhone className="mr-2" />
                Call Now: (904) 456-3851
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

            {/* FAQ Section for SEO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions - Westside Roof Cleaning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about roof cleaning services in Westside, Jacksonville
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How often should I roof clean my property in Westside?</h3>
              <p className="text-gray-600">
                Westside's humid subtropical climate means properties should be roof cleaned every 6-12 months. This prevents mold, mildew, and algae buildup that's common in our area. For comprehensive protection, consider our <Link href="/services/preventative-maintenance" className="text-blue-600 hover:text-blue-700 underline">preventative maintenance services</Link>.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What is professional roof cleaning?</h3>
              <p className="text-gray-600">
                Professional roof cleaning uses advanced techniques and eco-friendly solutions to safely remove dirt and contaminants without damaging your surfaces. We also offer <Link href="/services/eco-friendly-solutions" className="text-blue-600 hover:text-blue-700 underline">eco-friendly cleaning solutions</Link> that are safe for your family and pets.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Do you serve all of Westside?</h3>
              <p className="text-gray-600">
                Yes! We serve all Westside neighborhoods and surrounding areas. We also cover nearby communities like Jacksonville Beach, Mandarin, and San Marco. Check our <Link href="/locations" className="text-blue-600 hover:text-blue-700 underline">locations page</Link> for complete coverage details.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How long does roof cleaning take?</h3>
              <p className="text-gray-600">
                Most Westside properties take 2-4 hours depending on size and condition. We work efficiently to minimize disruption to your daily routine. For urgent needs, we offer <Link href="/services/emergency-services" className="text-blue-600 hover:text-blue-700 underline">emergency cleaning services</Link>.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Is your cleaning safe for pets and plants?</h3>
              <p className="text-gray-600">
                Absolutely! We use eco-friendly solutions that are safe for your family, pets, and Westside's beautiful landscaping. We also take precautions to protect your plants during cleaning. Learn more about our <Link href="/services/eco-friendly-solutions" className="text-blue-600 hover:text-blue-700 underline">eco-friendly approach</Link>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

            {/* Local Business Information */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Westside Roof Cleaning - Your Local Pressure Washing Experts
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Serving Westside and surrounding Jacksonville communities with professional, reliable roof cleaning services. 
              Our local expertise and commitment to quality make us the preferred choice for Westside property owners.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Service Coverage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Westside & surrounding areas</li>
                  <li>• Jacksonville Beach & Neptune Beach</li>
                  <li>• Mandarin & San Marco</li>
                  <li>• Riverside & Avondale</li>
                  <li>• All Jacksonville neighborhoods</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Local?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Westside-based business since 2019</li>
                  <li>• Deep knowledge of local climate challenges</li>
                  <li>• Quick response times for Westside residents</li>
                  <li>• Community-focused service approach</li>
                  <li>• Supporting local Jacksonville economy</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default RoofCleaningWestsidePage