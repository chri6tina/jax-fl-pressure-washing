'use client'

import { motion } from 'framer-motion'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaShieldAlt, 
  FaLeaf,
  FaAward,
  FaUsers
} from 'react-icons/fa'

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Company Info */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <h3 className="text-2xl font-bold text-neutral-text mb-4">
          Contact Information
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <FaPhone className="text-neutral-white" />
            </div>
            <div>
              <div className="font-semibold text-neutral-text">Phone</div>
              <a 
                href="tel:+19044563851" 
                className="text-primary hover:text-primary-dark transition-colors duration-200"
              >
                (904) 456-3851
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <FaEnvelope className="text-neutral-white" />
            </div>
            <div>
              <div className="font-semibold text-neutral-text">Email</div>
              <a 
                href="mailto:info@jaxflpressurewashing.com"
                className="text-primary hover:text-primary-dark transition-colors duration-200"
              >
                info@jaxflpressurewashing.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent-eco rounded-lg flex items-center justify-center">
              <FaMapMarkerAlt className="text-neutral-white" />
            </div>
            <div>
              <div className="font-semibold text-neutral-text">Service Area</div>
              <div className="text-gray-600">Jacksonville & Surrounding Areas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <h3 className="text-2xl font-bold text-neutral-text mb-4 flex items-center">
          <FaClock className="mr-2 text-secondary" />
          Business Hours
        </h3>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Monday - Friday</span>
            <span className="font-semibold">7:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Saturday</span>
            <span className="font-semibold">8:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Sunday</span>
            <span className="font-semibold text-red-600">Closed</span>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-accent-eco/10 border border-accent-eco/20 rounded-lg">
          <p className="text-sm text-accent-eco font-medium">
            Emergency services available for existing customers
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <h3 className="text-2xl font-bold text-neutral-text mb-4">
          Why Choose Us?
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <FaShieldAlt className="text-primary text-lg" />
            <span className="text-gray-700">Licensed & Insured</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaLeaf className="text-accent-eco text-lg" />
            <span className="text-gray-700">Eco-Friendly Methods</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaAward className="text-secondary text-lg" />
            <span className="text-gray-700">5+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaUsers className="text-accent-attention text-lg" />
            <span className="text-gray-700">Family-Owned Business</span>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <h3 className="text-2xl font-bold text-neutral-text mb-4">
          Service Areas
        </h3>
        
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="text-gray-600">• San Marco</div>
          <div className="text-gray-600">• Riverside</div>
          <div className="text-gray-600">• Avondale</div>
          <div className="text-gray-600">• Mandarin</div>
          <div className="text-gray-600">• Beaches</div>
          <div className="text-gray-600">• Orange Park</div>
          <div className="text-gray-600">• Fleming Island</div>
          <div className="text-gray-600">• Ponte Vedra</div>
        </div>
        
        <p className="text-sm text-gray-500 mt-3">
          Don't see your area? Contact us - we may still be able to help!
        </p>
      </div>

      {/* Google Maps */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <h3 className="text-2xl font-bold text-neutral-text mb-4">
          Our Location
        </h3>
        
        <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <FaMapMarkerAlt className="text-4xl mx-auto mb-2" />
            <p className="text-sm">Google Maps Integration</p>
            <p className="text-xs">Jacksonville, Florida</p>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mt-3 text-center">
          We serve the greater Jacksonville metropolitan area
        </p>
      </div>

      {/* Emergency Contact */}
      <div className="bg-accent-attention/10 border border-accent-attention/20 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-accent-attention mb-3">
          Need Immediate Service?
        </h3>
        <p className="text-gray-700 mb-4">
          For urgent pressure washing needs, call us directly:
        </p>
        <a 
          href="tel:+19044563851"
          className="inline-flex items-center space-x-2 bg-accent-attention text-neutral-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-attention/90 transition-colors duration-200"
        >
          <FaPhone />
          <span>Call Now: (904) 456-3851</span>
        </a>
      </div>
    </motion.div>
  )
}

export default ContactInfo
