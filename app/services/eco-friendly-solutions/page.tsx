'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPhone, FaCheckCircle, FaStar, FaLeaf, FaShieldAlt, FaHome, FaWater, FaClock, FaUsers, FaAward, FaLeaf as FaLeafIcon } from 'react-icons/fa'

const EcoFriendlySolutionsPage = () => {
  const services = [
    {
      title: "Green Cleaning Products",
      description: "Environmentally safe cleaning solutions that protect surfaces and the environment",
      benefits: ["Eco-friendly", "Surface safe", "Health conscious"]
    },
    {
      title: "Water Conservation Methods",
      description: "Efficient water usage techniques that reduce consumption and environmental impact",
      benefits: ["Water savings", "Environmental protection", "Cost efficiency"]
    },
    {
      title: "Safe Chemical Alternatives",
      description: "Non-toxic cleaning agents that are safe for people, pets, and plants",
      benefits: ["Non-toxic", "Pet safe", "Plant friendly"]
    },
    {
      title: "Biodegradable Solutions",
      description: "Earth-friendly cleaning products that break down naturally",
      benefits: ["Natural breakdown", "Soil safe", "Ocean friendly"]
    },
    {
      title: "Sustainable Practices",
      description: "Environmentally responsible business practices and cleaning methods",
      benefits: ["Carbon reduction", "Waste minimization", "Green certification"]
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Environmental Assessment",
      description: "Evaluation of environmental impact and eco-friendly cleaning requirements"
    },
    {
      step: 2,
      title: "Green Product Selection",
      description: "Selection of certified eco-friendly cleaning products and methods"
    },
    {
      step: 3,
      title: "Water Conservation Planning",
      description: "Implementation of water-efficient cleaning techniques and equipment"
    },
    {
      step: 4,
      title: "Eco-Friendly Application",
      description: "Application of green cleaning methods using sustainable practices"
    },
    {
      step: 5,
      title: "Environmental Monitoring",
      description: "Monitoring and documentation of environmental impact and results"
    },
    {
      step: 6,
      title: "Sustainability Reporting",
      description: "Complete documentation of eco-friendly practices and environmental benefits"
    }
  ]

  const benefits = [
    {
      icon: FaLeaf,
      title: "Environmental Protection",
      description: "Eco-friendly cleaning protects local ecosystems, waterways, and air quality"
    },
    {
      icon: FaStar,
      title: "Health & Safety",
      description: "Non-toxic cleaning products are safer for people, pets, and plants"
    },
    {
      icon: FaShieldAlt,
      title: "Surface Protection",
      description: "Gentle, eco-friendly methods protect surfaces while maintaining effectiveness"
    },
    {
      icon: FaHome,
      title: "Property Value",
      description: "Green cleaning practices enhance property value and market appeal"
    },
    {
      icon: FaClock,
      title: "Long-term Benefits",
      description: "Sustainable cleaning provides long-term environmental and financial benefits"
    },
    {
      icon: FaAward,
      title: "Green Certification",
      description: "Meet environmental standards and qualify for green building certifications"
    }
  ]

  const testimonials = [
    {
      name: "Lisa Thompson",
      location: "Jacksonville Beach",
      rating: 5,
      text: "The eco-friendly cleaning from Jax FL Pressure Washing is amazing! Our home is spotless, and we feel good knowing we're not harming the environment. Our pets and plants are safe too!"
    },
    {
      name: "David Rodriguez",
      location: "Ponte Vedra Beach",
      rating: 5,
      text: "As a business owner, I appreciate their commitment to sustainability. The green cleaning methods are just as effective as traditional methods, but much better for our environment."
    },
    {
      name: "Maria Foster",
      location: "Mandarin",
      rating: 5,
      text: "Their water conservation techniques are impressive. We've seen a significant reduction in our water usage while maintaining the same high-quality cleaning results."
    }
  ]

  const faqs = [
    {
      question: "Are eco-friendly cleaning methods as effective as traditional methods?",
      answer: "Yes, modern eco-friendly cleaning methods are just as effective as traditional methods. Advances in green technology have created products that clean thoroughly while being environmentally responsible."
    },
    {
      question: "What makes your cleaning products eco-friendly?",
      answer: "Our eco-friendly products are biodegradable, non-toxic, free from harsh chemicals, and safe for people, pets, and plants. They're also certified by environmental organizations."
    },
    {
      question: "How do you conserve water during cleaning?",
      answer: "We use high-efficiency equipment, targeted cleaning methods, and water recycling systems to minimize water usage while maintaining cleaning effectiveness."
    },
    {
      question: "Are eco-friendly services more expensive?",
      answer: "Eco-friendly services may have a slightly higher initial cost, but they provide long-term savings through reduced water usage, surface protection, and environmental benefits."
    },
    {
      question: "Do you offer green certification support?",
      answer: "Yes, we provide documentation and support for green building certifications and environmental compliance requirements for businesses and properties."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Eco-Friendly Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Professional cleaning that protects your property and the environment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition duration-300 text-lg"
              >
                Get Green Quote
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
              Complete Eco-Friendly Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From green cleaning products to sustainable practices, we provide environmentally responsible cleaning that doesn't compromise on quality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
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
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Jax FL Eco-Friendly Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that professional cleaning can and should be environmentally responsible without sacrificing quality or effectiveness.
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
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
              Our Eco-Friendly Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your property receives the highest quality eco-friendly cleaning service.
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
                <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white p-8 rounded-xl shadow-lg">
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
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Our Eco-Friendly Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from clients who have experienced our environmentally responsible cleaning services.
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
              Get answers to common questions about our eco-friendly cleaning services and environmental practices.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Go Green?
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
              Join the many environmentally conscious property owners who trust Jax FL Pressure Washing for eco-friendly cleaning that protects your property and the planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition duration-300 text-lg"
              >
                Get Green Quote
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
              Explore our other services that complement our eco-friendly solutions for complete property care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/services/preventative-maintenance"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Maintenance Plans</h3>
              <p className="text-gray-600 text-sm">Preventative maintenance services</p>
            </Link>

            <Link
              href="/services/seasonal-services"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Seasonal Services</h3>
              <p className="text-gray-600 text-sm">Year-round property care</p>
            </Link>

            <Link
              href="/services/house-washing"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">House Washing</h3>
              <p className="text-gray-600 text-sm">Professional house cleaning services</p>
            </Link>

            <Link
              href="/services/emergency-services"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Emergency Services</h3>
              <p className="text-gray-600 text-sm">24/7 emergency response services</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EcoFriendlySolutionsPage
