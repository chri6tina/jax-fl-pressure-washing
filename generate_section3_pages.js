const fs = require('fs');
const path = require('path');

const locations = [
  'arlington', 'atlantic-beach', 'avondale', 'eastside', 'jacksonville-beach',
  'mandarin', 'neptune-beach', 'northside', 'ortega', 'ponte-vedra',
  'riverside', 'san-marco', 'southside', 'westside'
];

const services = [
  {
    name: 'deck-cleaning-restoration',
    title: 'Deck Cleaning & Restoration',
    description: 'Professional deck cleaning and restoration services'
  },
  {
    name: 'fence-cleaning',
    title: 'Fence Cleaning',
    description: 'Expert fence cleaning and maintenance'
  },
  {
    name: 'pool-deck-cleaning',
    title: 'Pool Deck Cleaning',
    description: 'Professional pool deck cleaning and restoration'
  },
  {
    name: 'outdoor-furniture-cleaning',
    title: 'Outdoor Furniture Cleaning',
    description: 'Outdoor furniture cleaning and restoration'
  },
  {
    name: 'pergola-cleaning',
    title: 'Pergola Cleaning',
    description: 'Pergola cleaning and maintenance services'
  },
  {
    name: 'gazebo-cleaning',
    title: 'Gazebo Cleaning',
    description: 'Gazebo cleaning and restoration'
  },
  {
    name: 'outdoor-kitchen-cleaning',
    title: 'Outdoor Kitchen Cleaning',
    description: 'Outdoor kitchen and BBQ area cleaning'
  },
  {
    name: 'garden-structure-cleaning',
    title: 'Garden Structure Cleaning',
    description: 'Garden structure and feature cleaning'
  },
  {
    name: 'playground-equipment-cleaning',
    title: 'Playground Equipment Cleaning',
    description: 'Playground equipment cleaning and maintenance'
  },
  {
    name: 'outdoor-lighting-cleaning',
    title: 'Outdoor Lighting Cleaning',
    description: 'Outdoor lighting cleaning and enhancement'
  }
];

function generatePage(service, location) {
  const serviceName = service.name;
  const serviceTitle = service.title;
  const locationName = location.charAt(0).toUpperCase() + location.slice(1);
  
  return `'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhone, FaCheckCircle, FaHome, FaLeaf, FaStar, FaClock, FaShieldAlt } from 'react-icons/fa'

const ${serviceTitle.replace(/\s+/g, '')}${locationName.charAt(0).toUpperCase() + locationName.slice(1)}Page = () => {
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
              ${serviceTitle} in ${locationName}, Jacksonville
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 text-shadow max-w-3xl mx-auto">
              Professional ${serviceTitle.toLowerCase()} services in ${locationName}, FL. Transform your outdoor living space with our expert cleaning solutions.
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
              ${locationName} ${serviceTitle} - Professional Outdoor Living Space Services
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Looking for reliable ${serviceTitle.toLowerCase()} services in ${locationName}, Jacksonville? Our professional team specializes in outdoor living space cleaning that safely restores and maintains your outdoor areas.
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why ${locationName} Homeowners Choose Us</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Local Expertise:</strong> Serving ${locationName} since 2019 with deep knowledge of local climate challenges</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Eco-Friendly Solutions:</strong> Safe for your family, pets, and ${locationName}'s beautiful landscaping</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Proven Results:</strong> Hundreds of satisfied ${locationName} homeowners trust us year after year</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Same-Day Service:</strong> Quick response times for ${locationName}'s busy families</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">${locationName} ${serviceTitle} Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Professional ${serviceTitle}:</strong> Expert cleaning for all outdoor surfaces</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Restoration Services:</strong> Bring new life to your outdoor living spaces</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Eco-Friendly Cleaning:</strong> Safe solutions for your ${locationName} outdoor areas</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Preventive Maintenance:</strong> Extend the life of your outdoor structures</span>
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
            <h3 className="text-2xl font-bold mb-4">${locationName} ${serviceTitle} - Local SEO Focus</h3>
            <p className="text-lg mb-6">
              Serving ${locationName}, Jacksonville Beach, Mandarin, and surrounding areas with professional ${serviceTitle.toLowerCase()} services. 
              Our ${locationName} location expertise ensures the best results for your outdoor living spaces.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <strong>Service Areas:</strong> ${locationName}, Jacksonville Beach, Mandarin, San Marco
              </div>
              <div>
                <strong>Specialties:</strong> ${serviceTitle}, Outdoor living spaces, Eco-friendly cleaning
              </div>
              <div>
                <strong>Experience:</strong> 5+ years serving ${locationName} homeowners
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
                Professional ${serviceTitle} in ${locationName}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                ${locationName} homeowners trust us for their ${serviceTitle.toLowerCase()} needs. Our technology safely restores and maintains your outdoor living spaces without damaging surfaces.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Serving ${locationName} and surrounding areas with eco-friendly cleaning solutions that protect your family, pets, and landscaping while delivering exceptional results.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <FaMapMarkerAlt className="mr-2" />
                <span>Serving ${locationName}, Jacksonville, FL</span>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Our ${serviceTitle}?</h3>
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
              Ready to Transform Your ${locationName} Outdoor Living Space?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join hundreds of satisfied ${locationName} homeowners who trust us with their ${serviceTitle.toLowerCase()} needs. Get your free quote today!
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
    </div>
  )
}

export default ${serviceTitle.replace(/\s+/g, '')}${locationName.charAt(0).toUpperCase() + locationName.slice(1)}Page`;
}

// Generate all pages
services.forEach(service => {
  locations.forEach(location => {
    const dirPath = path.join(__dirname, 'app', 'services', service.name, location);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    const pageContent = generatePage(service, location);
    const filePath = path.join(dirPath, 'page.tsx');
    
    fs.writeFileSync(filePath, pageContent);
    console.log(`Generated: ${service.name}/${location}/page.tsx`);
  });
});

console.log(`\\n✅ Generated ${services.length * locations.length} pages for Section 3: Outdoor Living Spaces!`);
console.log(`📁 Pages created in: app/services/[service]/[location]/`);
console.log(`🌍 Total pages now: ${21 + 56 + (services.length * locations.length)}`);
