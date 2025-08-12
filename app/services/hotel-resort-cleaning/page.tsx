'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPhone, FaCheckCircle, FaStar, FaLeaf, FaShieldAlt, FaHome, FaWater, FaClock, FaUsers, FaAward, FaHotel, FaLeaf as FaLeafIcon } from 'react-icons/fa'

const HotelResortCleaningPage = () => {
  const services = [
    {
      title: "Hotel Exterior Cleaning",
      description: "Complete exterior cleaning of hotel buildings and facades",
      benefits: ["Guest satisfaction", "Professional image", "Brand reputation"]
    },
    {
      title: "Resort Grounds Maintenance",
      description: "Comprehensive cleaning of resort grounds and outdoor areas",
      benefits: ["Guest experience", "Property value", "Safety standards"]
    },
    {
      title: "Pool & Spa Area Cleaning",
      description: "Professional cleaning of pool decks, spa areas, and water features",
      benefits: ["Guest safety", "Aesthetic appeal", "Health compliance"]
    },
    {
      title: "Outdoor Dining Areas",
      description: "Cleaning of outdoor restaurants, bars, and dining spaces",
      benefits: ["Guest comfort", "Dining experience", "Health standards"]
    },
    {
      title: "Resort Maintenance Plans",
      description: "Ongoing maintenance for consistent cleanliness and guest satisfaction",
      benefits: ["Regular cleaning", "Cost efficiency", "Guest satisfaction"]
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Property Assessment",
      description: "Professional evaluation of hotel/resort condition and cleaning requirements"
    },
    {
      step: 2,
      title: "Guest Experience Planning",
      description: "Coordination with management to minimize disruption to guest experience"
    },
    {
      step: 3,
      title: "Area Protection",
      description: "Protection of guest areas and amenities during cleaning operations"
    },
    {
      step: 4,
      title: "Specialized Cleaning",
      description: "Application of hospitality-appropriate cleaning methods for each area"
    },
    {
      step: 5,
      title: "Quality Inspection",
      description: "Thorough inspection to ensure guest-ready appearance and safety"
    },
    {
      step: 6,
      title: "Documentation",
      description: "Complete service documentation and maintenance recommendations"
    }
  ]

  const benefits = [
    {
      icon: FaHotel,
      title: "Guest Satisfaction",
      description: "Clean, attractive exteriors significantly improve guest satisfaction and reviews"
    },
    {
      icon: FaStar,
      title: "Brand Reputation",
      description: "Well-maintained properties command higher rates and better guest loyalty"
    },
    {
      icon: FaShieldAlt,
      title: "Safety Standards",
      description: "Professional cleaning ensures all areas meet hospitality safety requirements"
    },
    {
      icon: FaHome,
      title: "Property Value",
      description: "Regular maintenance protects and enhances your property's market value"
    },
    {
      icon: FaClock,
      title: "Minimal Disruption",
      description: "Efficient cleaning with minimal disruption to guest experience and operations"
    },
    {
      icon: FaAward,
      title: "Industry Standards",
      description: "Meet or exceed hospitality industry standards for property maintenance"
    }
  ]

  const testimonials = [
    {
      name: "Jennifer Martinez",
      location: "Jacksonville Beach Resort",
      rating: 5,
      text: "Jax FL Pressure Washing transformed our resort's appearance! Our guests constantly compliment how clean and beautiful our property looks. Our TripAdvisor ratings have improved significantly."
    },
    {
      name: "David Thompson",
      location: "Ponte Vedra Hotel",
      rating: 5,
      text: "Professional service that understands hospitality. They work around our guest schedule and always deliver exceptional results. Our property has never looked better!"
    },
    {
      name: "Amanda Foster",
      location: "Atlantic Beach Resort",
      rating: 5,
      text: "The team at Jax FL Pressure Washing is incredible. They maintain our resort to the highest standards without ever disrupting our guests' experience. Highly recommend!"
    }
  ]

  const faqs = [
    {
      question: "How often should hotel and resort exteriors be cleaned?",
      answer: "We recommend monthly cleaning for most areas, with more frequent cleaning for high-traffic zones like pool areas and entrances. Seasonal deep cleaning is also essential for maintaining property standards."
    },
    {
      question: "Will cleaning disrupt our guests' experience?",
      answer: "We schedule cleaning during low-occupancy periods and work efficiently to minimize disruption. Most exterior cleaning can be completed during off-peak hours with minimal guest impact."
    },
    {
      question: "Do you clean all types of resort surfaces?",
      answer: "Yes, we clean all hospitality surfaces including buildings, pool decks, outdoor dining areas, walkways, and landscaping features. We use appropriate methods for each surface type."
    },
    {
      question: "Can you work around our occupancy schedule?",
      answer: "Absolutely! We offer flexible scheduling including early morning, evening, and low-occupancy periods to accommodate your hospitality operations and ensure minimal guest disruption."
    },
    {
      question: "Do you offer maintenance plans for hospitality properties?",
      answer: "Yes, we offer customized maintenance plans that include regular exterior cleaning, seasonal deep cleaning, and emergency response services to maintain your property's appearance year-round."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hotel & Resort Exterior Cleaning
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Elevate your hospitality property with professional exterior cleaning that enhances guest experience and protects your investment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 text-lg"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:904-555-0123"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition duration-300 text-lg flex items-center justify-center gap-2"
              >
                <FaPhone /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Complete Hospitality Exterior Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From hotel facades to resort grounds, we provide comprehensive cleaning services that enhance your property's appeal and ensure guest satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Jax FL Pressure Washing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique needs of hospitality properties and deliver results that enhance guest experience and protect your investment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Professional Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your hospitality property receives the highest quality cleaning service with minimal disruption to guest experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-8 rounded-xl shadow-lg">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 text-gray-800 rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 mt-4">{step.title}</h3>
                  <p className="text-blue-100">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Our Hospitality Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from hotel and resort managers who have transformed their properties with our services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our hotel and resort exterior cleaning services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Hospitality Property?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join the many hotels and resorts that trust Jax FL Pressure Washing to maintain their properties to the highest hospitality standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 text-lg"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:904-555-0123"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition duration-300 text-lg flex items-center justify-center gap-2"
              >
                <FaPhone /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Related Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our other commercial cleaning services to keep your entire hospitality property looking its best.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/services/office-building-cleaning"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaHome className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Office Buildings</h3>
              <p className="text-gray-600 text-sm">Professional office building cleaning services</p>
            </Link>

            <Link
              href="/services/shopping-center-cleaning"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaHotel className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Shopping Centers</h3>
              <p className="text-gray-600 text-sm">Large-scale commercial cleaning solutions</p>
            </Link>

            <Link
              href="/services/restaurant-cleaning"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaHotel className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Restaurants</h3>
              <p className="text-gray-600 text-sm">Food service facility cleaning</p>
            </Link>

            <Link
              href="/services/pool-deck-cleaning"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaHotel className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pool Decks</h3>
              <p className="text-gray-600 text-sm">Pool area cleaning and maintenance</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HotelResortCleaningPage
