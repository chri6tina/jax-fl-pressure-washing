'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPhone, FaCheckCircle, FaStar, FaLeaf, FaShieldAlt, FaHome, FaWater, FaClock, FaUsers, FaAward, FaExclamationTriangle, FaLeaf as FaLeafIcon } from 'react-icons/fa'

const EmergencyServicesPage = () => {
  const services = [
    {
      title: "Storm Damage Cleanup",
      description: "Emergency response for hurricane, tornado, and storm damage restoration",
      benefits: ["24/7 availability", "Quick response", "Damage prevention"]
    },
    {
      title: "Fire Damage Restoration",
      description: "Post-fire cleanup and restoration of fire-damaged properties",
      benefits: ["Safety restoration", "Property protection", "Insurance support"]
    },
    {
      title: "Graffiti Removal",
      description: "Quick response vandalism cleanup and prevention services",
      benefits: ["Immediate response", "Brand protection", "Prevention coating"]
    },
    {
      title: "Flood Damage Cleanup",
      description: "Water damage restoration and flood cleanup services",
      benefits: ["Mold prevention", "Structural protection", "Health safety"]
    },
    {
      title: "Emergency Response Plans",
      description: "Customized emergency response plans for businesses and properties",
      benefits: ["Preparedness", "Quick response", "Minimal disruption"]
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Emergency Assessment",
      description: "Immediate evaluation of damage and safety requirements"
    },
    {
      step: 2,
      title: "Safety Protocols",
      description: "Implementation of safety measures and protective equipment"
    },
    {
      step: 3,
      title: "Emergency Response",
      description: "Rapid deployment of specialized cleaning and restoration teams"
    },
    {
      step: 4,
      title: "Damage Mitigation",
      description: "Immediate action to prevent further damage and deterioration"
    },
    {
      step: 5,
      title: "Restoration Services",
      description: "Complete restoration and cleanup of affected areas"
    },
    {
      step: 6,
      title: "Prevention Planning",
      description: "Development of future prevention and response strategies"
    }
  ]

  const benefits = [
    {
      icon: FaExclamationTriangle,
      title: "24/7 Emergency Response",
      description: "Round-the-clock availability for immediate emergency response when you need it most"
    },
    {
      icon: FaStar,
      title: "Rapid Response Time",
      description: "Quick response teams minimize damage and restore your property faster"
    },
    {
      icon: FaShieldAlt,
      title: "Safety First",
      description: "Professional safety protocols ensure all work is completed safely and effectively"
    },
    {
      icon: FaHome,
      title: "Property Protection",
      description: "Immediate response prevents further damage and protects your investment"
    },
    {
      icon: FaClock,
      title: "Insurance Support",
      description: "Professional documentation and restoration services support insurance claims"
    },
    {
      icon: FaAward,
      title: "Expert Restoration",
      description: "Specialized expertise in emergency cleanup and restoration services"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Martinez",
      location: "Jacksonville Beach",
      rating: 5,
      text: "When Hurricane Ian hit, Jax FL Pressure Washing was there within hours. Their emergency response team saved our property from further damage. Professional, fast, and reliable!"
    },
    {
      name: "Mike Johnson",
      location: "Ponte Vedra Beach",
      rating: 5,
      text: "Graffiti appeared on our building overnight. Jax FL Pressure Washing had it removed by morning and applied prevention coating. Incredible emergency service!"
    },
    {
      name: "Lisa Chen",
      location: "Mandarin",
      rating: 5,
      text: "After a fire in our restaurant, their emergency cleanup team restored everything quickly. We were back in business faster than expected. Highly recommend!"
    }
  ]

  const faqs = [
    {
      question: "How quickly can you respond to emergencies?",
      answer: "We provide 24/7 emergency response with teams typically arriving within 2-4 hours. For critical situations, we can respond even faster depending on location and circumstances."
    },
    {
      question: "Do you handle all types of emergency damage?",
      answer: "Yes, we handle all types of emergency situations including storm damage, fire damage, graffiti, flood damage, and other emergency cleanup needs. Our teams are trained for various scenarios."
    },
    {
      question: "Will emergency services cost more than regular cleaning?",
      answer: "Emergency services may have different pricing due to urgency and specialized requirements, but we provide transparent pricing and work with insurance companies when applicable."
    },
    {
      question: "Do you work with insurance companies?",
      answer: "Yes, we work with all major insurance companies and provide detailed documentation to support your claims. Our emergency services are designed to meet insurance requirements."
    },
    {
      question: "Can you create emergency response plans for our business?",
      answer: "Absolutely! We offer customized emergency response planning for businesses and properties to ensure quick, effective response when emergencies occur."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Emergency Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              24/7 emergency response for storm damage, fire cleanup, graffiti removal, and more
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition duration-300 text-lg"
              >
                Get Emergency Quote
              </Link>
              <a
                href="tel:904-555-0123"
                className="bg-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-800 transition duration-300 text-lg flex items-center justify-center gap-2"
              >
                <FaPhone /> Call Now - 24/7
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
              Complete Emergency Response Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When emergencies strike, our rapid response teams are ready to restore your property and prevent further damage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
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
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Jax FL Emergency Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that emergencies require immediate, professional response to protect your property and minimize damage.
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
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
              Our Emergency Response Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic emergency response approach to ensure your property receives immediate, effective restoration.
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
                <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white p-8 rounded-xl shadow-lg">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 text-gray-800 rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 mt-4">{step.title}</h3>
                  <p className="text-red-100">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Our Emergency Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from clients who have experienced our emergency response services.
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
              Get answers to common questions about our emergency services and response capabilities.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Emergency Services?
            </h2>
            <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
              Don't wait when emergencies strike. Our 24/7 emergency response teams are ready to help restore your property immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition duration-300 text-lg"
              >
                Get Emergency Quote
              </Link>
              <a
                href="tel:904-555-0123"
                className="bg-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-800 transition duration-300 text-lg flex items-center justify-center gap-2"
              >
                <FaPhone /> Call Now - 24/7
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
              Explore our other specialized cleaning services to keep your property protected year-round.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/services/house-washing"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaHome className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">House Washing</h3>
              <p className="text-gray-600 text-sm">Professional house cleaning services</p>
            </Link>

            <Link
              href="/services/roof-cleaning"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaHome className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Roof Cleaning</h3>
              <p className="text-gray-600 text-sm">Professional roof cleaning services</p>
            </Link>

            <Link
              href="/services/vehicle-equipment-cleaning"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaExclamationTriangle className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Equipment Cleaning</h3>
              <p className="text-gray-600 text-sm">Vehicle and equipment cleaning</p>
            </Link>

            <Link
              href="/services/commercial-signage-cleaning"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaExclamationTriangle className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Signage Cleaning</h3>
              <p className="text-gray-600 text-sm">Professional sign cleaning services</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EmergencyServicesPage
