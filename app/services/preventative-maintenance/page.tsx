'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPhone, FaCheckCircle, FaStar, FaLeaf, FaShieldAlt, FaHome, FaWater, FaClock, FaUsers, FaAward, FaTools, FaLeaf as FaLeafIcon } from 'react-icons/fa'

const PreventativeMaintenancePage = () => {
  const services = [
    {
      title: "Annual Maintenance Packages",
      description: "Comprehensive yearly maintenance plans for residential and commercial properties",
      benefits: ["Cost savings", "Property protection", "Consistent appearance"]
    },
    {
      title: "Seasonal Maintenance Plans",
      description: "Spring, summer, fall, and winter maintenance schedules",
      benefits: ["Seasonal preparation", "Preventive care", "Year-round protection"]
    },
    {
      title: "Quarterly Maintenance Programs",
      description: "Regular quarterly maintenance for high-traffic commercial properties",
      benefits: ["Regular upkeep", "Professional standards", "Minimal disruption"]
    },
    {
      title: "Custom Maintenance Contracts",
      description: "Tailored maintenance plans designed for your specific property needs",
      benefits: ["Personalized service", "Flexible scheduling", "Priority support"]
    },
    {
      title: "Preventive Treatment Programs",
      description: "Proactive treatments to prevent mold, algae, and surface damage",
      benefits: ["Damage prevention", "Long-term savings", "Property value protection"]
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Property Assessment",
      description: "Comprehensive evaluation of your property's maintenance needs and requirements"
    },
    {
      step: 2,
      title: "Plan Development",
      description: "Customized maintenance plan creation based on property type and conditions"
    },
    {
      step: 3,
      title: "Schedule Coordination",
      description: "Coordination of maintenance schedules to minimize disruption to your operations"
    },
    {
      step: 4,
      title: "Regular Maintenance",
      description: "Scheduled maintenance services following established protocols and standards"
    },
    {
      step: 5,
      title: "Quality Inspection",
      description: "Thorough inspection and documentation of all maintenance work completed"
    },
    {
      step: 6,
      title: "Plan Optimization",
      description: "Continuous improvement of maintenance plans based on results and feedback"
    }
  ]

  const benefits = [
    {
      icon: FaTools,
      title: "Cost Savings",
      description: "Preventive maintenance reduces long-term costs and prevents expensive repairs"
    },
    {
      icon: FaStar,
      title: "Property Protection",
      description: "Regular maintenance protects your investment and maintains property value"
    },
    {
      icon: FaShieldAlt,
      title: "Preventive Care",
      description: "Proactive maintenance prevents damage before it becomes a problem"
    },
    {
      icon: FaHome,
      title: "Consistent Appearance",
      description: "Regular maintenance ensures your property always looks its best"
    },
    {
      icon: FaClock,
      title: "Minimal Disruption",
      description: "Scheduled maintenance minimizes disruption to your daily operations"
    },
    {
      icon: FaAward,
      title: "Professional Standards",
      description: "Maintain professional appearance standards year-round with scheduled care"
    }
  ]

  const testimonials = [
    {
      name: "David Thompson",
      location: "Ponte Vedra Beach",
      rating: 5,
      text: "The preventative maintenance plan from Jax FL Pressure Washing has saved us thousands! Our property always looks professional and we never have to worry about unexpected cleaning needs."
    },
    {
      name: "Jennifer Martinez",
      location: "Jacksonville Beach Resort",
      rating: 5,
      text: "Our seasonal maintenance plan keeps our resort looking amazing year-round. The team is reliable, professional, and always delivers exceptional results."
    },
    {
      name: "Robert Williams",
      location: "Mandarin Financial Center",
      rating: 5,
      text: "The quarterly maintenance program for our financial center is perfect. Our building always maintains the professional appearance our clients expect."
    }
  ]

  const faqs = [
    {
      question: "How much do preventative maintenance plans cost?",
      answer: "Maintenance plan costs vary based on property size, frequency, and services included. We offer flexible plans starting from monthly to annual contracts, with volume discounts for larger properties."
    },
    {
      question: "Can I customize my maintenance plan?",
      answer: "Absolutely! We create customized maintenance plans based on your specific property needs, budget, and schedule preferences. No two plans are exactly alike."
    },
    {
      question: "What's included in a typical maintenance plan?",
      answer: "Maintenance plans typically include regular cleaning, preventive treatments, seasonal maintenance, priority scheduling, and discounted rates for additional services."
    },
    {
      question: "How often should maintenance be performed?",
      answer: "Frequency depends on property type, location, and usage. Residential properties typically need quarterly maintenance, while commercial properties may need monthly or quarterly service."
    },
    {
      question: "Can I change my maintenance plan after signing up?",
      answer: "Yes, maintenance plans are flexible and can be adjusted based on changing needs. We work with you to ensure your plan always meets your requirements."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Preventative Maintenance Plans
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Protect your investment with comprehensive maintenance plans that prevent damage and maintain value
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition duration-300 text-lg"
              >
                Get Maintenance Quote
              </Link>
              <a
                href="tel:904-555-0123"
                className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition duration-300 text-lg flex items-center justify-center gap-2"
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
              Complete Maintenance Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From annual packages to custom contracts, we offer maintenance plans that fit your property and budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
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
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Jax FL Maintenance Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that preventive maintenance is the key to protecting your investment and maintaining property value.
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
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
              Our Maintenance Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your maintenance plan delivers consistent, reliable results.
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
                <div className="bg-gradient-to-br from-green-600 to-teal-600 text-white p-8 rounded-xl shadow-lg">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 text-gray-800 rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 mt-4">{step.title}</h3>
                  <p className="text-green-100">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Our Maintenance Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from clients who have experienced the benefits of our maintenance plans.
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
              Get answers to common questions about our preventative maintenance plans and services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Protect Your Investment?
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
              Join the many property owners who trust Jax FL Pressure Washing to maintain their investments with comprehensive maintenance plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition duration-300 text-lg"
              >
                Get Maintenance Quote
              </Link>
              <a
                href="tel:904-555-0123"
                className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition duration-300 text-lg flex items-center justify-center gap-2"
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
              Explore our other services that complement our maintenance plans for complete property care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/services/house-washing"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaHome className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">House Washing</h3>
              <p className="text-gray-600 text-sm">Professional house cleaning services</p>
            </Link>

            <Link
              href="/services/roof-cleaning"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaHome className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Roof Cleaning</h3>
              <p className="text-gray-600 text-sm">Professional roof cleaning services</p>
            </Link>

            <Link
              href="/services/emergency-services"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaTools className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Emergency Services</h3>
              <p className="text-gray-600 text-sm">24/7 emergency response services</p>
            </Link>

            <Link
              href="/services/eco-friendly-solutions"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaTools className="text-white text-2xl" />
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

export default PreventativeMaintenancePage
