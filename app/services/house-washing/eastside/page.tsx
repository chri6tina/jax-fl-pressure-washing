'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhone, FaCheckCircle, FaHome, FaLeaf, FaStar, FaClock, FaShieldAlt } from 'react-icons/fa'

const HouseWashingEastsidePage = () => {
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
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              House Washing in Eastside, Jacksonville
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional house washing services in Eastside, FL. Transform your property's appearance with our eco-friendly technology.
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
                href="/gallery"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300 inline-flex items-center justify-center"
              >
                View Our Work
              </Link>
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
                Professional House Washing in Eastside
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Eastside property owners trust us for their house washing needs. Our technology safely removes dirt, stains, and contaminants without damaging your surfaces.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Serving Eastside and surrounding areas with eco-friendly cleaning solutions that protect your property and landscaping while delivering exceptional results.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <FaMapMarkerAlt className="mr-2" />
                <span>Serving Eastside, Jacksonville, FL</span>
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
              Eastside House Washing Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eastside's unique environment requires specialized house washing approaches. We understand the local challenges and provide solutions that work.
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
              Our Eastside House Washing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven 5-step process to ensure your Eastside property gets the best possible house washing service.
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
              { step: "1", title: "Inspection", desc: "Assess your property's condition and identify problem areas" },
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
              Eastside House Washing Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive pricing for Eastside property owners. Get a free quote today!
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Small Project</h3>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Medium Project</h3>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Large Project</h3>
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
              Ready to Transform Your Eastside Property?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join hundreds of satisfied Eastside property owners who trust us with their house washing needs. Get your free quote today!
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
                  Eastside, Jacksonville, FL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HouseWashingEastsidePage