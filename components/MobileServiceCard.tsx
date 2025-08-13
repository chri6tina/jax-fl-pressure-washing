'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaStar } from 'react-icons/fa'

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  benefits?: string[];
}

interface MobileServiceCardProps {
  service: Service;
  location: string;
}

export default function MobileServiceCard({ service, location }: MobileServiceCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 md:h-56">
        <Image
          src={service.image || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
          alt={service.title}
          width={400}
          height={224}
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Service Badge */}
        <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
          {service.category}
        </div>
        
        {/* Rating */}
        <div className="absolute top-3 right-3 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
          <FaStar className="text-yellow-500" />
          <span>4.9</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
          {service.title}
        </h3>
        
        <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3">
          {service.description}
        </p>

        {/* Benefits */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</h4>
          <ul className="space-y-1">
            {service.benefits?.slice(0, 3).map((benefit, index) => (
              <li key={index} className="text-xs md:text-sm text-gray-600 flex items-start">
                <span className="text-primary mr-2">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Link
          href={`/services/${service.id}/${location}`}
          className="inline-flex items-center justify-center w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-secondary transition-colors duration-200 group"
        >
          Get Quote
          <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </motion.div>
  )
}