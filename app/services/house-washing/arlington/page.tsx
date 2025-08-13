'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhone, FaCheckCircle, FaHome, FaLeaf, FaStar, FaClock, FaShieldAlt } from 'react-icons/fa'

const HouseWashingArlingtonPage = () => {
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
              House Washing in Arlington, Jacksonville
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 text-shadow max-w-3xl mx-auto">
              Professional house washing services in Arlington, FL. Transform your home's appearance with our eco-friendly soft-wash technology.
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
              Arlington House Washing - Professional Exterior Cleaning Services
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Looking for reliable house washing services in Arlington, Jacksonville? Our professional team specializes in soft-wash house cleaning that safely removes dirt, mold, mildew, and algae without damaging your home's exterior surfaces.
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Arlington Homeowners Choose Us</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Local Expertise:</strong> Serving Arlington since 2019 with deep knowledge of local climate challenges</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Eco-Friendly Solutions:</strong> Safe for your family, pets, and Arlington's beautiful landscaping</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Proven Results:</strong> Hundreds of satisfied Arlington homeowners trust us year after year</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Same-Day Service:</strong> Quick response times for Arlington's busy families</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Arlington House Washing Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Soft-Wash House Cleaning:</strong> Gentle yet effective cleaning for all siding types</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Mold & Mildew Removal:</strong> Combat Arlington's humid climate challenges</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Gutter Cleaning:</strong> Prevent water damage to your Arlington home</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Deck & Patio Cleaning:</strong> Extend the life of your outdoor living spaces</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-blue-600 text-white p-8 rounded-xl text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Arlington House Washing - Local SEO Focus</h3>
            <p className="text-lg mb-6">
              Serving Arlington, Jacksonville Beach, Mandarin, and surrounding areas with professional house washing services. 
              Our Arlington location expertise ensures the best results for your home.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <strong>Service Areas:</strong> Arlington, Jacksonville Beach, Mandarin, San Marco
              </div>
              <div>
                <strong>Specialties:</strong> Soft-wash, Mold removal, Eco-friendly cleaning
              </div>
              <div>
                <strong>Experience:</strong> 5+ years serving Arlington homeowners
              </div>
            </div>
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
                Professional House Washing in Arlington
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Arlington homeowners trust us for their house washing needs. Our technology safely removes dirt, stains, and contaminants without damaging your home's exterior surfaces.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Serving Arlington and surrounding areas with eco-friendly cleaning solutions that protect your family, pets, and landscaping while delivering exceptional results.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <FaMapMarkerAlt className="mr-2" />
                <span>Serving Arlington, Jacksonville, FL</span>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Our House Washing?</h3>
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
              Arlington House Washing Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Arlington's unique environment requires specialized house washing approaches. We understand the local challenges and provide solutions that work.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">
                <FaLeaf />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Florida Climate Protection</h3>
              <p className="text-gray-600">
                Arlington's humid subtropical climate creates perfect conditions for mold and algae growth. Our treatments provide long-lasting protection against these common issues.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">
                <FaHome />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Property Value Enhancement</h3>
              <p className="text-gray-600">
                Clean homes in Arlington sell faster and for more money. Regular house washing maintains your property's curb appeal and market value.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Surface Protection</h3>
              <p className="text-gray-600">
                Our soft-wash method protects your siding, stucco, and other exterior surfaces from damage while effectively removing contaminants.
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
              Our Arlington House Washing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven 5-step process to ensure your Arlington home gets the best possible house washing service.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-5 gap-6"
          >
            {[
              { step: "1", title: "Inspection", desc: "Assess your home's condition and identify problem areas" },
              { step: "2", title: "Preparation", desc: "Protect landscaping and prepare surfaces for cleaning" },
              { step: "3", title: "Cleaning", desc: "Apply eco-friendly cleaning solution with appropriate system" },
              { step: "4", title: "Rinse", desc: "Thoroughly rinse all surfaces to remove all contaminants" },
              { step: "5", title: "Final Check", desc: "Inspect results and ensure complete satisfaction" }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
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
              Arlington House Washing Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive pricing for Arlington homeowners. Get a free quote today!
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Small Home</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$150-250</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  Up to 1,500 sq ft
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  Basic cleaning
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  Standard service
                </li>
              </ul>
              <Link 
                href="/contact"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-center block"
              >
                Get Quote
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Medium Home</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$250-400</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  1,500-2,500 sq ft
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  Deep cleaning
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  Enhanced service
                </li>
              </ul>
              <Link 
                href="/contact"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-center block"
              >
                Get Quote
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Large Home</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$400-600</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  2,500+ sq ft
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  Premium cleaning
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-500" />
                  Full service
                </li>
              </ul>
              <Link 
                href="/contact"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-center block"
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
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Arlington Home?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join hundreds of satisfied Arlington homeowners who trust us with their house washing needs. Get your free quote today!
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
              Frequently Asked Questions - Arlington House Washing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about house washing services in Arlington, Jacksonville
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">How often should I wash my house in Arlington?</h3>
              <p className="text-gray-600">
                Arlington's humid subtropical climate means homes should be washed every 6-12 months. This prevents mold, mildew, and algae buildup that's common in our area.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What is soft-wash house cleaning?</h3>
              <p className="text-gray-600">
                Soft-wash uses low-pressure cleaning with eco-friendly solutions to safely remove dirt and contaminants without damaging your siding, stucco, or other exterior surfaces.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Do you serve all of Arlington?</h3>
              <p className="text-gray-600">
                Yes! We serve all Arlington neighborhoods including Arlington Heights, Arlington Manor, and surrounding areas. We also cover nearby communities like Jacksonville Beach and Mandarin.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How long does house washing take?</h3>
              <p className="text-gray-600">
                Most Arlington homes take 2-4 hours depending on size and condition. We work efficiently to minimize disruption to your daily routine.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Is your cleaning safe for pets and plants?</h3>
              <p className="text-gray-600">
                Absolutely! We use eco-friendly solutions that are safe for your family, pets, and Arlington's beautiful landscaping. We also take precautions to protect your plants during cleaning.
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
              Arlington House Washing - Your Local Pressure Washing Experts
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Serving Arlington and surrounding Jacksonville communities with professional, reliable house washing services. 
              Our local expertise and commitment to quality make us the preferred choice for Arlington homeowners.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Service Coverage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Arlington Heights & Arlington Manor</li>
                  <li>• Jacksonville Beach & Neptune Beach</li>
                  <li>• Mandarin & San Marco</li>
                  <li>• Riverside & Avondale</li>
                  <li>• All Jacksonville neighborhoods</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Local?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Arlington-based business since 2019</li>
                  <li>• Deep knowledge of local climate challenges</li>
                  <li>• Quick response times for Arlington residents</li>
                  <li>• Community-focused service approach</li>
                  <li>• Supporting local Jacksonville economy</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/house-washing" className="hover:text-blue-400 transition duration-300">House Washing</Link></li>
                <li><Link href="/services/driveway-cleaning" className="hover:text-blue-400 transition duration-300">Driveway Cleaning</Link></li>
                <li><Link href="/services/roof-cleaning" className="hover:text-blue-400 transition duration-300">Roof Cleaning</Link></li>
                <li><Link href="/services" className="hover:text-blue-400 transition duration-300">View All Services</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Locations</h3>
              <ul className="space-y-2">
                <li><Link href="/locations/arlington" className="hover:text-blue-400 transition duration-300">Arlington</Link></li>
                <li><Link href="/locations/atlantic-beach" className="hover:text-blue-400 transition duration-300">Atlantic Beach</Link></li>
                <li><Link href="/locations/mandarin" className="hover:text-blue-400 transition duration-300">Mandarin</Link></li>
                <li><Link href="/locations" className="hover:text-blue-400 transition duration-300">View All Locations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-blue-400 transition duration-300">About Us</Link></li>
                <li><Link href="/gallery" className="hover:text-blue-400 transition duration-300">Gallery</Link></li>
                <li><Link href="/testimonials" className="hover:text-blue-400 transition duration-300">Testimonials</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <FaPhone className="mr-2" />
                  (904) 456-3851
                </p>
                <p className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  Arlington, Jacksonville, FL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HouseWashingArlingtonPage