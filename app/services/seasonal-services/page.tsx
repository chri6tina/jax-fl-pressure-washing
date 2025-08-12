'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPhone, FaCheckCircle, FaStar, FaLeaf, FaShieldAlt, FaHome, FaWater, FaClock, FaUsers, FaAward, FaCalendarAlt, FaLeaf as FaLeafIcon } from 'react-icons/fa'

const SeasonalServicesPage = () => {
  const services = [
    {
      title: "Spring Cleaning Services",
      description: "Post-winter restoration and preparation for the growing season",
      benefits: ["Winter damage repair", "Seasonal preparation", "Fresh start"]
    },
    {
      title: "Summer Maintenance",
      description: "Peak season upkeep and protection from summer weather",
      benefits: ["Weather protection", "Peak season appearance", "Guest satisfaction"]
    },
    {
      title: "Fall Preparation",
      description: "Autumn cleanup and winter readiness services",
      benefits: ["Winter preparation", "Leaf removal", "Seasonal maintenance"]
    },
    {
      title: "Winter Emergency Services",
      description: "Cold weather response and emergency winter services",
      benefits: ["Emergency response", "Winter damage prevention", "Safety maintenance"]
    },
    {
      title: "Holiday Preparation",
      description: "Special event and holiday season cleaning services",
      benefits: ["Event preparation", "Holiday appearance", "Special occasions"]
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Seasonal Assessment",
      description: "Evaluation of seasonal needs and weather-related damage"
    },
    {
      step: 2,
      title: "Weather Planning",
      description: "Planning services around weather conditions and seasonal challenges"
    },
    {
      step: 3,
      title: "Seasonal Preparation",
      description: "Preparation and protection for upcoming seasonal changes"
    },
    {
      step: 4,
      title: "Specialized Cleaning",
      description: "Application of season-appropriate cleaning methods and treatments"
    },
    {
      step: 5,
      title: "Protection Application",
      description: "Application of protective treatments for seasonal challenges"
    },
    {
      step: 6,
      title: "Seasonal Documentation",
      description: "Documentation of seasonal work and recommendations for next season"
    }
  ]

  const benefits = [
    {
      icon: FaCalendarAlt,
      title: "Seasonal Preparation",
      description: "Proper preparation for each season ensures your property is ready for weather challenges"
    },
    {
      icon: FaStar,
      title: "Year-Round Appeal",
      description: "Seasonal services maintain your property's appearance throughout the year"
    },
    {
      icon: FaShieldAlt,
      title: "Weather Protection",
      description: "Seasonal treatments protect your property from weather-related damage"
    },
    {
      icon: FaHome,
      title: "Property Value",
      description: "Regular seasonal maintenance protects and enhances your property's value"
    },
    {
      icon: FaClock,
      title: "Proactive Care",
      description: "Seasonal services address issues before they become major problems"
    },
    {
      icon: FaAward,
      title: "Professional Standards",
      description: "Maintain professional appearance standards year-round with seasonal care"
    }
  ]

  const testimonials = [
    {
      name: "Amanda Foster",
      location: "Atlantic Beach",
      rating: 5,
      text: "The seasonal services from Jax FL Pressure Washing are incredible! Our property looks amazing year-round, and we're always prepared for whatever weather comes our way."
    },
    {
      name: "Michael Johnson",
      location: "Ponte Vedra Beach",
      rating: 5,
      text: "Spring cleaning after winter storms, summer maintenance, fall preparation - they handle it all perfectly. Our property has never looked better throughout the year!"
    },
    {
      name: "Sarah Chen",
      location: "Mandarin",
      rating: 5,
      text: "The holiday preparation services are fantastic. Our property always looks perfect for special occasions and family gatherings. Highly recommend!"
    }
  ]

  const faqs = [
    {
      question: "What seasonal services do you offer?",
      answer: "We offer comprehensive seasonal services including spring cleaning, summer maintenance, fall preparation, winter emergency services, and holiday preparation. Each season has specific needs we address."
    },
    {
      question: "How often should seasonal services be performed?",
      answer: "Seasonal services are typically performed quarterly to align with weather changes. Spring and fall are the most important seasons, with summer and winter maintenance as needed."
    },
    {
      question: "Do seasonal services cost more than regular cleaning?",
      answer: "Seasonal services may have different pricing due to specialized treatments and seasonal challenges, but we offer package deals and maintenance plans that provide excellent value."
    },
    {
      question: "Can you handle emergency winter services?",
      answer: "Yes, we provide 24/7 emergency winter services for storm damage, ice removal, and other cold weather emergencies that require immediate attention."
    },
    {
      question: "Do you offer seasonal maintenance plans?",
      answer: "Absolutely! We offer comprehensive seasonal maintenance plans that include all seasonal services, priority scheduling, and discounted rates for year-round property care."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Seasonal Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Year-round property care with specialized services for every season
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition duration-300 text-lg"
              >
                Get Seasonal Quote
              </Link>
              <a
                href="tel:904-555-0123"
                className="bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition duration-300 text-lg flex items-center justify-center gap-2"
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
              Complete Seasonal Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From spring cleaning to winter preparation, we provide comprehensive seasonal services that keep your property looking its best year-round.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
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
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Jax FL Seasonal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that each season brings unique challenges and opportunities for property maintenance.
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
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
              Our Seasonal Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic seasonal approach to ensure your property receives the right care at the right time.
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
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 rounded-xl shadow-lg">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 text-gray-800 rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 mt-4">{step.title}</h3>
                  <p className="text-purple-100">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Our Seasonal Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from clients who have experienced our year-round seasonal services.
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
              Get answers to common questions about our seasonal services and year-round property care.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Year-Round Property Care?
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Join the many property owners who trust Jax FL Pressure Washing for comprehensive seasonal services that keep their properties looking amazing year-round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition duration-300 text-lg"
              >
                Get Seasonal Quote
              </Link>
              <a
                href="tel:904-555-0123"
                className="bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition duration-300 text-lg flex items-center justify-center gap-2"
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
              Explore our other services that complement our seasonal offerings for complete property care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/services/preventative-maintenance"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaCalendarAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Maintenance Plans</h3>
              <p className="text-gray-600 text-sm">Preventative maintenance services</p>
            </Link>

            <Link
              href="/services/emergency-services"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaCalendarAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Emergency Services</h3>
              <p className="text-gray-600 text-sm">24/7 emergency response services</p>
            </Link>

            <Link
              href="/services/house-washing"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaCalendarAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">House Washing</h3>
              <p className="text-gray-600 text-sm">Professional house cleaning services</p>
            </Link>

            <Link
              href="/services/eco-friendly-solutions"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaCalendarAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Eco-Friendly Solutions</h3>
              <p className="text-gray-600 text-sm">Environmentally responsible cleaning</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SeasonalServicesPage
