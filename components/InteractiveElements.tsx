'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FaPlay, FaPause, FaExpand, FaCompress, FaShare, FaHeart, FaStar, FaCheckCircle } from 'react-icons/fa'

export default function InteractiveElements() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Arlington',
      service: 'House Washing',
      rating: 5,
      comment: 'Amazing service! My house looks brand new. Professional team and eco-friendly cleaning.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      location: 'Mandarin',
      service: 'Driveway Cleaning',
      rating: 5,
      comment: 'Outstanding work on my driveway. Oil stains completely removed. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Lisa Chen',
      location: 'Ponte Vedra',
      service: 'Roof Cleaning',
      rating: 5,
      comment: 'Professional roof cleaning service. Safe, thorough, and reasonably priced.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ]

  const services = [
    {
      name: 'House Washing',
      description: 'Professional soft-wash cleaning for your home\'s exterior',
      price: 'From $150',
      features: ['Safe for all siding types', 'Removes algae and mildew', 'Eco-friendly solutions']
    },
    {
      name: 'Driveway Cleaning',
      description: 'Restore your driveway to its original condition',
      price: 'From $100',
      features: ['Removes oil stains', 'Eliminates algae', 'Improves safety']
    },
    {
      name: 'Roof Cleaning',
      description: 'Safe roof cleaning that extends roof life',
      price: 'From $200',
      features: ['Removes harmful algae', 'Prevents damage', 'Maintains warranty']
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Interactive Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Experience Our Interactive Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our services, read customer experiences, and discover why Jacksonville 
            chooses Jax FL Pressure Washing for all their cleaning needs.
          </p>
        </motion.div>

        {/* Interactive Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setRating(Math.floor(Math.random() * 5) + 1)}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors duration-200">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        {/* Interactive Testimonials */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-12">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                <p className="text-sm text-primary font-medium">{testimonial.service}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Rating System */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-12 shadow-lg text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Rate Our Service
          </h3>
          <p className="text-gray-600 mb-8">
            Help us improve by rating your experience with Jax FL Pressure Washing
          </p>
          
          <div className="flex justify-center items-center space-x-2 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`text-3xl cursor-pointer transition-colors duration-200 ${
                  star <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              />
            ))}
          </div>
          
          <p className="text-gray-600 mb-6">
            {rating > 0 ? `Thank you for rating us ${rating} stars!` : 'Click on a star to rate us'}
          </p>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                isLiked ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <FaHeart className={`${isLiked ? 'text-white' : 'text-red-500'}`} />
              <span>{isLiked ? 'Liked!' : 'Like'}</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200">
              <FaShare />
              <span>Share</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}