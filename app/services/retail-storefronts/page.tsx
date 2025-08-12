'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPhone, FaCheckCircle, FaStar, FaLeaf, FaShieldAlt, FaHome, FaWater, FaClock, FaUsers, FaAward, FaStore, FaLeaf as FaLeafIcon } from 'react-icons/fa'

const RetailStorefrontsPage = () => {
  const services = [
    {
      title: "Storefront Exterior Cleaning",
      description: "Complete exterior cleaning of retail storefronts and facades",
      benefits: ["Customer attraction", "Professional image", "Brand visibility"]
    },
    {
      title: "Window & Display Cleaning",
      description: "Professional cleaning of store windows and display areas",
      benefits: ["Product visibility", "Customer attraction", "Professional appearance"]
    },
    {
      title: "Entrance & Walkway Cleaning",
      description: "Cleaning of store entrances, walkways, and customer access areas",
      benefits: ["Customer safety", "Professional image", "Accessibility"]
    },
    {
      title: "Retail Signage Cleaning",
      description: "Professional cleaning of store signs and branding elements",
      benefits: ["Brand visibility", "Professional appearance", "Customer attraction"]
    },
    {
      title: "Retail Maintenance Plans",
      description: "Ongoing maintenance for consistent cleanliness and customer appeal",
      benefits: ["Regular cleaning", "Cost efficiency", "Customer satisfaction"]
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Storefront Assessment",
      description: "Professional evaluation of retail storefront condition and cleaning requirements"
    },
    {
      step: 2,
      title: "Business Coordination",
      description: "Coordination with store staff to minimize disruption to customers"
    },
    {
      step: 3,
      title: "Display Protection",
      description: "Protection of window displays and merchandise during cleaning"
    },
    {
      step: 4,
      title: "Specialized Cleaning",
      description: "Application of retail-appropriate cleaning methods for each surface type"
    },
    {
      step: 5,
      title: "Final Inspection",
      description: "Thorough inspection to ensure customer-ready appearance"
    },
    {
      step: 6,
      title: "Documentation",
      description: "Complete service documentation and maintenance recommendations"
    }
  ]

  const benefits = [
    {
      icon: FaStore,
      title: "Customer Attraction",
      description: "Clean, attractive storefronts draw more customers into your retail business"
    },
    {
      icon: FaStar,
      title: "Professional Image",
      description: "Well-maintained retail spaces command higher customer satisfaction and sales"
    },
    {
      icon: FaShieldAlt,
      title: "Brand Protection",
      description: "Professional cleaning protects your brand image and reputation"
    },
    {
      icon: FaHome,
      title: "Increased Sales",
      description: "Clean storefronts have been shown to increase customer foot traffic and sales"
    },
    {
      icon: FaClock,
      title: "Minimal Disruption",
      description: "Efficient cleaning with minimal disruption to retail operations and customers"
    },
    {
      icon: FaAward,
      title: "Competitive Advantage",
      description: "Stand out from competitors with consistently clean, professional storefronts"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Jacksonville Beach",
      rating: 5,
      text: "Jax FL Pressure Washing transformed our storefront! Our customers constantly compliment how clean and professional our store looks. Sales have definitely increased since we started regular cleaning."
    },
    {
      name: "Mike Rodriguez",
      location: "Ponte Vedra Beach",
      rating: 5,
      text: "Professional service that never disrupts our business. Our storefront always looks amazing and our brand image has never been stronger. Highly recommend!"
    },
    {
      name: "Lisa Chen",
      location: "Mandarin",
      rating: 5,
      text: "The team at Jax FL Pressure Washing understands retail. They work around our hours and always deliver exceptional results. Our customers notice the difference!"
    }
  ]

  const faqs = [
    {
      question: "How often should retail storefronts be cleaned?",
      answer: "We recommend monthly cleaning for most retail storefronts, with more frequent cleaning for high-traffic areas or locations near construction. Seasonal deep cleaning is also recommended."
    },
    {
      question: "Will cleaning disrupt our business operations?",
      answer: "We schedule cleaning during off-peak hours and work efficiently to minimize disruption. Most storefront cleaning can be completed in 2-4 hours depending on size."
    },
    {
      question: "Do you clean all types of retail surfaces?",
      answer: "Yes, we clean all retail surfaces including glass, metal, stone, brick, concrete, and composite materials. We use appropriate methods for each surface type."
    },
    {
      question: "Can you work around our business hours?",
      answer: "Absolutely! We offer flexible scheduling including early morning, evening, and weekend appointments to accommodate your business hours and minimize customer disruption."
    },
    {
      question: "Do you offer maintenance plans for retail businesses?",
      answer: "Yes, we offer customized maintenance plans that include regular storefront cleaning, window maintenance, and seasonal deep cleaning to keep your retail space looking its best year-round."
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
              Retail Storefront Cleaning
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform your retail space with professional storefront cleaning that attracts customers and boosts sales
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
              Complete Retail Storefront Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From storefront facades to entrance areas, we provide comprehensive cleaning services that enhance your retail business's professional appearance and customer appeal.
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
              We understand the unique needs of retail businesses and deliver results that enhance your brand image and customer experience.
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
              We follow a systematic approach to ensure your retail storefront receives the highest quality cleaning service with minimal disruption to your business.
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
              What Our Retail Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from retail business owners who have transformed their storefronts with our services.
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
              Get answers to common questions about our retail storefront cleaning services.
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
              Ready to Transform Your Retail Storefront?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join the many retail businesses that trust Jax FL Pressure Washing to keep their storefronts looking professional and attractive year-round.
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
              Explore our other commercial cleaning services to keep your entire business property looking its best.
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
                <FaStore className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Shopping Centers</h3>
              <p className="text-gray-600 text-sm">Large-scale commercial cleaning solutions</p>
            </Link>

            <Link
              href="/services/restaurant-cleaning"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaStore className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Restaurants</h3>
              <p className="text-gray-600 text-sm">Food service facility cleaning</p>
            </Link>

            <Link
              href="/services/commercial-signage-cleaning"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaStore className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Commercial Signage</h3>
              <p className="text-gray-600 text-sm">Professional sign cleaning services</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RetailStorefrontsPage
