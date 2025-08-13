const fs = require('fs');
const path = require('path');

const locations = [
  'arlington', 'atlantic-beach', 'avondale', 'eastside', 'jacksonville-beach',
  'mandarin', 'neptune-beach', 'northside', 'ortega', 'ponte-vedra',
  'riverside', 'san-marco', 'southside', 'westside'
];

const service = {
  name: 'roof-cleaning',
  title: 'Roof Cleaning',
  cleanName: 'RoofCleaning'
};

function generatePage(service, location) {
  const serviceName = service.name;
  const serviceTitle = service.title;
  const locationName = location.charAt(0).toUpperCase() + location.slice(1);
  
  return `'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaShieldAlt, FaClock, FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const RoofCleaning${locationName.charAt(0).toUpperCase() + locationName.slice(1)}Page = () => {
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
            Professional Roof Cleaning in {locationName}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-blue-100"
            variants={itemVariants}
          >
            Expert roof cleaning services to protect your home and enhance curb appeal in ${locationName}
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
              Expert Roof Cleaning Services in {locationName}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our professional roof cleaning services in ${locationName} remove harmful algae, moss, and debris while protecting your roof's integrity. 
              We use safe, eco-friendly methods that extend your roof's lifespan and improve your home's appearance.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={itemVariants}>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Safe & Effective</h3>
              <p className="text-gray-600">Gentle cleaning methods that won't damage your roof shingles or tiles</p>
            </div>
            <div className="text-center p-6 bg-cyan-50 rounded-lg">
              <FaClock className="text-4xl text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quick Service</h3>
              <p className="text-gray-600">Professional team completes most roof cleaning projects in 1-2 days</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <FaStar className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-600">Thousands of satisfied customers throughout ${locationName} and surrounding areas</p>
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
            Why Choose Jax FL Pressure Washing for Roof Cleaning in {locationName}
          </motion.h2>
          
          <motion.div className="grid md:grid-cols-2 gap-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Local Expertise</h3>
              <p className="text-gray-600 mb-4">
                As your trusted ${locationName} pressure washing company, we understand the unique challenges 
                that Florida weather presents to roofs. Our team has extensive experience with all roof types 
                common in the ${locationName} area.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Licensed and insured professionals</li>
                <li>• Local knowledge of ${locationName} building codes</li>
                <li>• Familiar with area-specific weather challenges</li>
                <li>• Community-focused service approach</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Advanced Technology</h3>
              <p className="text-gray-600 mb-4">
                We use state-of-the-art roof cleaning equipment and eco-friendly cleaning solutions 
                that are safe for your family, pets, and landscaping while effectively removing 
                stubborn roof stains and growth.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Soft wash technology for gentle cleaning</li>
                <li>• Eco-friendly cleaning solutions</li>
                <li>• Professional-grade equipment</li>
                <li>• Safety-first approach</li>
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
            Our Roof Cleaning Process in {locationName}
          </motion.h2>
          
          <motion.div className="grid md:grid-cols-4 gap-6" variants={itemVariants}>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Inspection</h3>
              <p className="text-gray-600">Thorough roof assessment to identify problem areas and determine the best cleaning approach</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Preparation</h3>
              <p className="text-gray-600">Protect landscaping and surrounding areas before beginning the cleaning process</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Cleaning</h3>
              <p className="text-gray-600">Apply eco-friendly cleaning solution and gently remove algae, moss, and debris</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-3">Final Inspection</h3>
              <p className="text-gray-600">Quality check to ensure your roof is clean and protected for years to come</p>
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
            Why {locationName} Homeowners Choose Professional Roof Cleaning
          </motion.h2>
          
          <motion.div className="grid md:grid-cols-2 gap-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Florida Weather Challenges</h3>
              <p className="text-blue-100 mb-4">
                ${locationName} experiences high humidity, frequent rain, and intense sun exposure that can 
                accelerate roof deterioration. Professional cleaning removes harmful growth and extends 
                your roof's lifespan.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li>• Prevents algae and moss growth</li>
                <li>• Protects against UV damage</li>
                <li>• Maintains roof warranty</li>
                <li>• Improves energy efficiency</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Property Value Protection</h3>
              <p className="text-blue-100 mb-4">
                A clean, well-maintained roof significantly enhances your home's curb appeal and 
                market value. In ${locationName}'s competitive real estate market, this attention 
                to detail can make a real difference.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li>• Enhanced curb appeal</li>
                <li>• Higher property value</li>
                <li>• Faster home sales</li>
                <li>• Professional appearance</li>
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
            Ready for a Cleaner Roof in {locationName}?
          </motion.h2>
          <motion.p className="text-xl mb-8 text-gray-300" variants={itemVariants}>
            Join hundreds of satisfied ${locationName} homeowners who trust us with their roof cleaning needs. 
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
                Your trusted ${locationName} pressure washing company, providing professional 
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
                Serving ${locationName} and all of Jacksonville, Florida including:
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

export default RoofCleaning${locationName.charAt(0).toUpperCase() + locationName.slice(1)}Page;`;
}

// Generate pages for each location
locations.forEach(location => {
  const dirPath = path.join(__dirname, 'app', 'services', service.name, location);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const filePath = path.join(dirPath, 'page.tsx');
  const content = generatePage(service, location);
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Generated: ${service.name}/${location}/page.tsx`);
});

console.log(`\\n🎉 Section 4 Complete! Generated ${locations.length} Roof Cleaning location pages!`);
console.log(`📊 Total pages created: ${locations.length}`);
console.log(`🌍 Locations covered: ${locations.join(', ')}`);
console.log(`🚀 Ready for local SEO domination in Jacksonville!`);
