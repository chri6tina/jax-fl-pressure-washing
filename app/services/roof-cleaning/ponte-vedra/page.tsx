'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaShieldAlt, FaClock, FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWater, FaLeaf, FaTools } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const RoofCleaningPontevedraPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 text-center text-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Professional Roof Cleaning in Ponte-vedra
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-blue-100"
            variants={itemVariants}
          >
            Expert roof cleaning services to protect your home and enhance curb appeal in Ponte-vedra
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Free Quote
            </Link>
            <Link href="tel:+19041234567" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Call Now
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Overview */}
      <motion.section 
        className="py-16 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Expert Roof Cleaning Services in Ponte-vedra
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our professional roof cleaning services in Ponte-vedra safely remove algae, moss, and debris 
              that can damage your roof and reduce its lifespan. We use eco-friendly methods to restore your 
              roof's appearance and protect your investment.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={itemVariants}>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Roof Protection</h3>
              <p className="text-gray-600">Prevent costly damage and extend your roof's lifespan</p>
            </div>
            <div className="text-center p-6 bg-cyan-50 rounded-lg">
              <FaTools className="text-4xl text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Safe & Effective</h3>
              <p className="text-gray-600">Professional equipment and eco-friendly cleaning solutions</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <FaStar className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-600">Thousands of satisfied customers throughout Ponte-vedra</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="py-16 px-4 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16" variants={itemVariants}>
            Why Choose Jax FL Pressure Washing for Roof Cleaning in Ponte-vedra
          </motion.h2>
          
          <motion.div className="grid md:grid-cols-2 gap-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Local Expertise</h3>
              <p className="text-gray-600 mb-4">
                As your trusted Ponte-vedra pressure washing company, we understand the unique challenges 
                that Florida weather presents to roofs. Our team has extensive experience with all roof types 
                and knows how to handle the humidity, heat, and storms common in the Ponte-vedra area.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Licensed and insured professionals</li>
                <li>• Local knowledge of Ponte-vedra building codes</li>
                <li>• Familiar with area-specific weather challenges</li>
                <li>• Community-focused service approach</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Advanced Equipment</h3>
              <p className="text-gray-600 mb-4">
                We use state-of-the-art roof cleaning equipment including specialized pumps, 
                safety gear, and eco-friendly cleaning solutions to ensure thorough cleaning 
                without damage to your roof or home exterior.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Professional roof cleaning systems</li>
                <li>• Safety equipment and harnesses</li>
                <li>• Eco-friendly cleaning solutions</li>
                <li>• Damage-free cleaning methods</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Process */}
      <motion.section 
        className="py-16 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16" variants={itemVariants}>
            Our Roof Cleaning Process in Ponte-vedra
          </motion.h2>
          
          <motion.div className="grid md:grid-cols-4 gap-6" variants={itemVariants}>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Inspection</h3>
              <p className="text-gray-600">Thorough roof assessment to identify algae, moss, and cleaning needs</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Safety Setup</h3>
              <p className="text-gray-600">Proper safety equipment and roof access setup for secure cleaning</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Gentle Cleaning</h3>
              <p className="text-gray-600">Remove algae and moss using low-pressure, eco-friendly methods</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-3">Protection</h3>
              <p className="text-gray-600">Apply protective treatment to prevent future growth</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Local Benefits */}
      <motion.section 
        className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-16" variants={itemVariants}>
            Why Ponte-vedra Homeowners Choose Professional Roof Cleaning
          </motion.h2>
          
          <motion.div className="grid md:grid-cols-2 gap-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Florida Weather Challenges</h3>
              <p className="text-blue-100 mb-4">
                Ponte-vedra experiences high humidity, frequent rain, and intense sun that create 
                perfect conditions for algae and moss growth on roofs. Professional cleaning prevents 
                damage and maintains your roof's integrity.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li>• Prevents roof deterioration</li>
                <li>• Maintains energy efficiency</li>
                <li>• Protects against leaks</li>
                <li>• Enhances curb appeal</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Property Protection</h3>
              <p className="text-blue-100 mb-4">
                Algae and moss can cause serious damage to your roof shingles, leading to leaks, 
                structural issues, and costly repairs. In Ponte-vedra's climate, regular roof 
                maintenance is essential for protecting your investment.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li>• Extends roof lifespan</li>
                <li>• Prevents water damage</li>
                <li>• Maintains home value</li>
                <li>• Reduces repair costs</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>

      
    {/* CTA Section */}
      <motion.section 
        className="py-16 px-4 bg-gray-800 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={itemVariants}>
            Ready for a Cleaner Roof in Ponte-vedra?
          </motion.h2>
          <motion.p className="text-xl mb-8 text-gray-300" variants={itemVariants}>
            Join hundreds of satisfied Ponte-vedra homeowners who trust us with their roof cleaning needs. 
            Get your free quote today!
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Free Quote
            </Link>
            <Link href="tel:+19041234567" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors">
              Call (904) 123-4567
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Jax FL Pressure Washing</h3>
              <p className="text-gray-400 mb-4">
                Your trusted Ponte-vedra pressure washing company, providing professional 
                roof cleaning services throughout Jacksonville and surrounding areas.
              </p>
              <div className="flex space-x-4">
                <FaPhone className="text-blue-400" />
                <span className="text-gray-400">(904) 123-4567</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
              <p className="text-gray-400 mb-4">
                Serving Ponte-vedra and all of Jacksonville, Florida including: We also offer <Link href="/services/house-washing/ponte-vedra" className="text-blue-400 hover:text-white">house washing</Link>, <Link href="/services/driveway-cleaning/ponte-vedra" className="text-blue-400 hover:text-white">driveway cleaning</Link>, <Link href="/services/roof-cleaning/ponte-vedra" className="text-blue-400 hover:text-white">roof cleaning</Link>, and <Link href="/services/gutter-cleaning/ponte-vedra" className="text-blue-400 hover:text-white">gutter cleaning</Link> services in Ponte-vedra.
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                <span>• Arlington</span>
                <span>• Atlantic Beach</span>
                <span>• Avondale</span>
                <span>• Eastside</span>
                <span>• Jacksonville Beach</span>
                <span>• Mandarin</span>
                <span>• Neptune Beach</span>
                <span>• Northside</span>
                <span>• Ortega</span>
                <span>• Ponte Vedra</span>
                <span>• Riverside</span>
                <span>• San Marco</span>
                <span>• Southside</span>
                <span>• Westside</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span>Jacksonville, FL</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPhone className="text-blue-400" />
                  <span>(904) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-blue-400" />
                  <span>info@jaxflpressurewashing.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Jax FL Pressure Washing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RoofCleaningPontevedraPage;