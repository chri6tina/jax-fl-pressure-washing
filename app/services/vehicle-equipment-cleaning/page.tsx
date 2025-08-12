'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPhone, FaCheckCircle, FaStar, FaLeaf, FaShieldAlt, FaHome, FaWater, FaClock, FaUsers, FaAward, FaTruck, FaLeaf as FaLeafIcon } from 'react-icons/fa'

const VehicleEquipmentCleaningPage = () => {
  const services = [
    {
      title: "Fleet Vehicle Cleaning",
      description: "Professional cleaning of business and commercial vehicle fleets",
      benefits: ["Brand protection", "Professional image", "Vehicle longevity"]
    },
    {
      title: "Construction Equipment Cleaning",
      description: "Heavy machinery and construction equipment cleaning services",
      benefits: ["Equipment protection", "Safety compliance", "Operational efficiency"]
    },
    {
      title: "RV & Motorhome Cleaning",
      description: "Recreational vehicle and motorhome exterior cleaning",
      benefits: ["Aesthetic appeal", "Resale value", "Travel comfort"]
    },
    {
      title: "Boat & Marine Vessel Cleaning",
      description: "Professional cleaning of boats, yachts, and marine vessels",
      benefits: ["Corrosion prevention", "Aesthetic appeal", "Marine safety"]
    },
    {
      title: "Equipment Maintenance Plans",
      description: "Ongoing cleaning and maintenance for consistent performance",
      benefits: ["Regular cleaning", "Cost efficiency", "Equipment protection"]
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Equipment Assessment",
      description: "Professional evaluation of vehicle/equipment condition and cleaning requirements"
    },
    {
      step: 2,
      title: "Surface Preparation",
      description: "Proper preparation and protection of sensitive equipment areas"
    },
    {
      step: 3,
      title: "Specialized Cleaning",
      description: "Application of appropriate cleaning methods for each equipment type"
    },
    {
      step: 4,
      title: "Protective Treatment",
      description: "Application of protective coatings and treatments where appropriate"
    },
    {
      step: 5,
      title: "Quality Inspection",
      description: "Thorough inspection to ensure cleaning quality and equipment safety"
    },
    {
      step: 6,
      title: "Documentation",
      description: "Complete service documentation and maintenance recommendations"
    }
  ]

  const benefits = [
    {
      icon: FaTruck,
      title: "Equipment Protection",
      description: "Professional cleaning protects your valuable equipment from corrosion and damage"
    },
    {
      icon: FaStar,
      title: "Professional Image",
      description: "Clean equipment and vehicles project a professional, well-maintained business image"
    },
    {
      icon: FaShieldAlt,
      title: "Safety Compliance",
      description: "Clean equipment meets safety standards and reduces operational risks"
    },
    {
      icon: FaHome,
      title: "Longevity",
      description: "Regular cleaning extends the life of your equipment and vehicles"
    },
    {
      icon: FaClock,
      title: "Operational Efficiency",
      description: "Clean equipment operates more efficiently and requires less maintenance"
    },
    {
      icon: FaAward,
      title: "Resale Value",
      description: "Well-maintained equipment and vehicles command higher resale values"
    }
  ]

  const testimonials = [
    {
      name: "Tom Wilson",
      location: "Jacksonville Construction Co.",
      rating: 5,
      text: "Jax FL Pressure Washing transformed our construction equipment! Our machinery looks professional and operates better. The team understands heavy equipment and always delivers exceptional results."
    },
    {
      name: "Maria Rodriguez",
      location: "Ponte Vedra Fleet Services",
      rating: 5,
      text: "Professional service that keeps our fleet looking amazing. Our vehicles always represent our brand professionally, and the maintenance plans keep everything running smoothly."
    },
    {
      name: "James Thompson",
      location: "Atlantic Beach Marine",
      rating: 5,
      text: "The team at Jax FL Pressure Washing is incredible with marine vessels. They understand the unique needs of boats and always deliver exceptional results. Highly recommend!"
    }
  ]

  const faqs = [
    {
      question: "How often should vehicles and equipment be cleaned?",
      answer: "We recommend monthly cleaning for most vehicles and quarterly cleaning for heavy equipment. Fleet vehicles may need more frequent cleaning depending on usage and environmental conditions."
    },
    {
      question: "Do you clean all types of vehicles and equipment?",
      answer: "Yes, we clean all types including cars, trucks, construction equipment, RVs, boats, and industrial machinery. We use appropriate methods for each type to ensure safety and effectiveness."
    },
    {
      question: "Will cleaning damage sensitive equipment?",
      answer: "No, we use specialized methods and protective measures to ensure sensitive equipment is not damaged. Our team is trained in proper equipment cleaning protocols."
    },
    {
      question: "Can you work around our operating schedule?",
      answer: "Absolutely! We offer flexible scheduling including evenings and weekends to accommodate your equipment usage schedule and minimize operational disruption."
    },
    {
      question: "Do you offer maintenance plans for equipment cleaning?",
      answer: "Yes, we offer customized maintenance plans that include regular cleaning, protective treatments, and seasonal maintenance to keep your equipment looking its best year-round."
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
              Vehicle & Equipment Cleaning
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Protect your investment with professional cleaning that extends equipment life and maintains professional appearance
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
              Complete Vehicle & Equipment Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From fleet vehicles to heavy machinery, we provide comprehensive cleaning services that protect your investment and maintain professional standards.
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
              We understand the unique needs of different equipment types and deliver results that protect your investment and maintain professional standards.
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
              We follow a systematic approach to ensure your vehicles and equipment receive the highest quality cleaning service with maximum protection.
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
              What Our Equipment Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from equipment owners who have transformed their vehicles and machinery with our services.
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
              Get answers to common questions about our vehicle and equipment cleaning services.
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
              Ready to Protect Your Equipment Investment?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join the many equipment owners who trust Jax FL Pressure Washing to maintain their vehicles and machinery to the highest standards.
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
              Explore our other specialized cleaning services to keep your entire property and equipment looking its best.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/services/commercial-signage-cleaning"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaTruck className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Commercial Signage</h3>
              <p className="text-gray-600 text-sm">Professional sign cleaning services</p>
            </Link>

            <Link
              href="/services/warehouse-factory-cleaning"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaTruck className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Warehouse Cleaning</h3>
              <p className="text-gray-600 text-sm">Industrial facility cleaning services</p>
            </Link>

            <Link
              href="/services/office-building-cleaning"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaTruck className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Office Buildings</h3>
              <p className="text-gray-600 text-sm">Professional office building cleaning</p>
            </Link>

            <Link
              href="/services/pool-deck-cleaning"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaTruck className="text-white text-2xl" />
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

export default VehicleEquipmentCleaningPage
