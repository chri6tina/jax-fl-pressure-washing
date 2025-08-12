'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'

const services = [
  'House & Soft Washing',
  'Driveway & Concrete Cleaning',
  'Roof Cleaning',
  'Gutter & Window Cleaning',
  'Paver Sealing',
  'Commercial Washing',
  'Other'
]

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    services: [] as string[],
    comments: '',
    photos: null as File | null
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
    }

    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one service'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
    
    if (errors.services) {
      setErrors(prev => ({ ...prev, services: '' }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, photos: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitted(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        services: [],
        comments: '',
        photos: null
      })
      
      // Reset form after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaCheckCircle className="text-green-600 text-2xl" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700 mb-4">
          Your quote request has been submitted successfully. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-green-600 hover:text-green-800 font-medium"
        >
          Submit Another Request
        </button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-neutral-white rounded-2xl shadow-xl p-8"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-neutral-text mb-2">
          Get Your Free Quote
        </h3>
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Phone */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <div className="flex items-center mt-2 text-red-600 text-sm">
                <FaExclamationTriangle className="mr-1" />
                {errors.name}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="(904) 456-3851"
            />
            {errors.phone && (
              <div className="flex items-center mt-2 text-red-600 text-sm">
                <FaExclamationTriangle className="mr-1" />
                {errors.phone}
              </div>
            )}
          </div>
        </div>

        {/* Email and Address */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <div className="flex items-center mt-2 text-red-600 text-sm">
                <FaExclamationTriangle className="mr-1" />
                {errors.email}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
              Property Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 ${
                errors.address ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your property address"
            />
            {errors.address && (
              <div className="flex items-center mt-2 text-red-600 text-sm">
                <FaExclamationTriangle className="mr-1" />
                {errors.address}
              </div>
            )}
          </div>
        </div>

        {/* Services */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Services Requested *
          </label>
          <div className="grid md:grid-cols-2 gap-3">
            {services.map((service) => (
              <label key={service} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceChange(service)}
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
                />
                <span className="text-gray-700">{service}</span>
              </label>
            ))}
          </div>
          {errors.services && (
            <div className="flex items-center mt-2 text-red-600 text-sm">
              <FaExclamationTriangle className="mr-1" />
              {errors.services}
            </div>
          )}
        </div>

        {/* Comments */}
        <div>
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
            placeholder="Tell us about your specific needs, concerns, or questions..."
          />
        </div>

        {/* Photo Upload */}
        <div>
          <label htmlFor="photos" className="block text-sm font-medium text-gray-700 mb-2">
            Upload Photos (Optional)
          </label>
          <input
            type="file"
            id="photos"
            name="photos"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
          />
          <p className="text-sm text-gray-500 mt-1">
            Upload photos of the areas you'd like cleaned to help us provide a more accurate quote
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-accent-attention hover:bg-accent-attention/90 text-neutral-white'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-neutral-white border-t-transparent rounded-full animate-spin"></div>
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <FaPaperPlane />
              <span>Submit Quote Request</span>
            </>
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </motion.div>
  )
}

export default ContactForm
