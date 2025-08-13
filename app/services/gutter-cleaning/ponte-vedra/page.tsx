'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaShieldAlt, FaClock, FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWater, FaLeaf } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const GutterCleaningPontevedraPage = () => {
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
            Professional Gutter Cleaning in Ponte-vedra
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-blue-100"
            variants={itemVariants}
          >
            Expert gutter cleaning services to protect your home from water damage in Ponte-vedra
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
              Expert Gutter Cleaning Services in Ponte-vedra
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our professional gutter cleaning services in Ponte-vedra remove leaves, debris, and blockages 
              that can cause water damage to your home. We ensure proper water flow and protect your foundation, 
              roof, and landscaping from costly water-related issues.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={itemVariants}>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <FaWater className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Water Damage Prevention</h3>
              <p className="text-gray-600">Prevent costly water damage to your foundation, roof, and siding</p>
            </div>
            <div className="text-center p-6 bg-cyan-50 rounded-lg">
              <FaClock className="text-4xl text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quick & Efficient</h3>
              <p className="text-gray-600">Professional team completes most gutter cleaning projects in 2-4 hours</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <FaStar className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-600">Thousands of satisfied customers throughout Ponte-vedra and surrounding areas</p>
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
            Why Choose Jax FL Pressure Washing for Gutter Cleaning in Ponte-vedra
          </motion.h2>
          
          <motion.div className="grid md:grid-cols-2 gap-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Local Expertise</h3>
              <p className="text-gray-600 mb-4">
                As your trusted Ponte-vedra pressure washing company, we understand the unique challenges 
                that Florida weather presents to gutters. Our team has extensive experience with all gutter types 
                and knows how to handle the heavy rainfall and debris common in the Ponte-vedra area.
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
                We use state-of-the-art gutter cleaning equipment including high-powered vacuums, 
                specialized tools, and safety gear to ensure thorough cleaning without damage to your 
                gutters or home exterior.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Professional gutter vacuum systems</li>
                <li>• Safety equipment and harnesses</li>
                <li>• Specialized cleaning tools</li>
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
            Our Gutter Cleaning Process in Ponte-vedra
          </motion.h2>
          
          <motion.div className="grid md:grid-cols-4 gap-6" variants={itemVariants}>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Inspection</h3>
              <p className="text-gray-600">Thorough gutter assessment to identify blockages, damage, and cleaning needs</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Safety Setup</h3>
              <p className="text-gray-600">Proper safety equipment and ladder stabilization for secure access</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Deep Cleaning</h3>
              <p className="text-gray-600">Remove all leaves, debris, and blockages using professional equipment</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-3">Water Test</h3>
              <p className="text-gray-600">Test water flow to ensure gutters are functioning properly</p>
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
            Why Ponte-vedra Homeowners Choose Professional Gutter Cleaning
          </motion.h2>
          
          <motion.div className="grid md:grid-cols-2 gap-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Florida Weather Challenges</h3>
              <p className="text-blue-100 mb-4">
                Ponte-vedra experiences heavy rainfall, high humidity, and frequent storms that can 
                quickly clog gutters with leaves, pine needles, and debris. Professional cleaning prevents 
                water damage and maintains proper drainage.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li>• Prevents foundation water damage</li>
                <li>• Protects roof and siding</li>
                <li>• Maintains proper drainage</li>
                <li>• Reduces mosquito breeding</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Property Protection</h3>
              <p className="text-blue-100 mb-4">
                Clogged gutters can cause water to overflow and damage your home's foundation, 
                landscaping, and exterior. In Ponte-vedra's climate, regular gutter maintenance 
                is essential for protecting your investment.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li>• Foundation protection</li>
                <li>• Landscape preservation</li>
                <li>• Exterior damage prevention</li>
                <li>• Long-term home value</li>
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
            Ready for Cleaner Gutters in Ponte-vedra?
          </motion.h2>
          <motion.p className="text-xl mb-8 text-gray-300" variants={itemVariants}>
            Join hundreds of satisfied Ponte-vedra homeowners who trust us with their gutter cleaning needs. 
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
                gutter cleaning services throughout Jacksonville and surrounding areas.
              </p>
              <div className="flex space-x-4">
                <FaPhone className="text-blue-400" />
                <span className="text-gray-400">(904) 123-4567</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
              <p className="text-gray-400 mb-4">
                Serving Ponte-vedra and all of Jacksonville, Florida including:
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

export default GutterCleaningPontevedraPage;