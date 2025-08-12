'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  FaHome, 
  FaRoad, 
  FaBuilding, 
  FaWindowMaximize, 
  FaCubes, 
  FaIndustry 
} from 'react-icons/fa'

const services = [
  {
    icon: FaHome,
    title: 'House & Soft Washing',
    description: 'Gentle soft-wash cleaning for your home\'s exterior, removing dirt, algae, and mildew safely.',
    href: '/services#house-washing'
  },
  {
    icon: FaRoad,
    title: 'Driveway & Concrete',
    description: 'Restore your driveway, sidewalks, and concrete surfaces to their original condition.',
    href: '/services#concrete-cleaning'
  },
  {
    icon: FaBuilding,
    title: 'Roof Cleaning',
    description: 'Professional roof cleaning to remove algae, moss, and debris while protecting your shingles.',
    href: '/services#roof-cleaning'
  },
  {
    icon: FaWindowMaximize,
    title: 'Gutter & Window',
    description: 'Clean gutters and windows to improve functionality and enhance your home\'s appearance.',
    href: '/services#gutter-cleaning'
  },
  {
    icon: FaCubes,
    title: 'Paver Sealing',
    description: 'Protect and enhance your paver surfaces with professional sealing services.',
    href: '/services#paver-sealing'
  },
  {
    icon: FaIndustry,
    title: 'Commercial Washing',
    description: 'Comprehensive cleaning solutions for commercial properties and businesses.',
    href: '/services#commercial'
  }
]

const ServicesSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional pressure washing and soft-wash services to restore your property's beauty and value
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-neutral-white text-2xl" />
              </div>
              
              <h3 className="text-xl font-semibold text-neutral-text mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <Link 
                href={service.href}
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors duration-200 group-hover:translate-x-1"
              >
                Learn More
                <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-secondary text-lg px-8 py-4">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
