'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa'

export default function MobileContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 3000)
  }

  const services = [
    'House Washing',
    'Driveway Cleaning',
    'Roof Cleaning',
    'Gutter Cleaning',
    'Deck & Fence Cleaning',
    'Other'
  ]

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
        <p className="text-gray-600">We'll get back to you within 24 hours.</p>
      </motion.div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Get Your Free Quote
        </h2>
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Phone & Service Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              placeholder="(904) 456-3851"
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Needed *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Tell us about your project, address, and any specific requirements..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Get Free Quote'}
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
              <FaPhone className="text-primary text-xl" />
              <span className="font-semibold text-gray-800">Call Us</span>
            </div>
            <a href="tel:+19044563851" className="text-primary hover:text-secondary transition-colors">
              (904) 456-3851
            </a>
          </div>
          
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <FaEnvelope className="text-primary text-xl" />
              <span className="font-semibold text-gray-800">Email Us</span>
            </div>
            <a href="mailto:info@jaxflpressurewashing.com" className="text-primary hover:text-secondary transition-colors">
              info@jaxflpressurewashing.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}