'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPhone, FaCheckCircle, FaStar, FaLeaf, FaShieldAlt, FaHome, FaWater, FaClock, FaUsers, FaAward, FaBuilding, FaLeaf as FaLeafIcon } from 'react-icons/fa'

const GovernmentBuildingCleaningPage = () => {
  const services = [
    {
      title: "Government Building Exterior Cleaning",
      description: "Complete exterior cleaning of government buildings and municipal facilities",
      benefits: ["Public trust", "Professional image", "Regulatory compliance"]
    },
    {
      title: "Municipal Facility Maintenance",
      description: "Professional cleaning and maintenance of city and county facilities",
      benefits: ["Public safety", "Professional appearance", "Budget efficiency"]
    },
    {
      title: "Public Building Cleaning",
      description: "Cleaning of public access areas, entrances, and government property",
      benefits: ["Public safety", "Accessibility", "Professional standards"]
    },
    {
      title: "Government Signage Cleaning",
      description: "Professional cleaning of government signs and official branding elements",
      benefits: ["Public visibility", "Professional appearance", "Official standards"]
    },
    {
      title: "Government Maintenance Plans",
      description: "Ongoing maintenance for consistent cleanliness and public trust",
      benefits: ["Regular cleaning", "Cost efficiency", "Public standards"]
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Facility Assessment",
      description: "Professional evaluation of government building condition and cleaning requirements"
    },
    {
      step: 2,
      title: "Security Coordination",
      description: "Coordination with security staff and government officials for safety protocols"
    },
    {
      step: 3,
      title: "Public Area Protection",
      description: "Protection of public areas and sensitive government equipment during cleaning"
    },
    {
      step: 4,
      title: "Specialized Cleaning",
      description: "Application of government-appropriate cleaning methods for each surface type"
    },
    {
      step: 5,
      title: "Compliance Inspection",
      description: "Thorough inspection to ensure compliance with government standards"
    },
    {
      step: 6,
      title: "Documentation",
      description: "Complete service documentation and maintenance recommendations for government records"
    }
  ]

  const benefits = [
    {
      icon: FaBuilding,
      title: "Public Trust",
      description: "Clean, professional government buildings build public confidence and trust in local government"
    },
    {
      icon: FaStar,
      title: "Professional Standards",
      description: "Well-maintained government facilities demonstrate commitment to public service excellence"
    },
    {
      icon: FaShieldAlt,
      title: "Regulatory Compliance",
      description: "Professional cleaning ensures all areas meet government facility standards and requirements"
    },
    {
      icon: FaHome,
      title: "Public Safety",
      description: "Regular maintenance protects public safety and accessibility to government services"
    },
    {
      icon: FaClock,
      title: "Minimal Disruption",
      description: "Efficient cleaning with minimal disruption to government operations and public access"
    },
    {
      icon: FaAward,
      title: "Budget Efficiency",
      description: "Preventative maintenance reduces long-term costs and protects taxpayer investments"
    }
  ]

  const testimonials = [
    {
      name: "City Manager Johnson",
      location: "Jacksonville City Hall",
      rating: 5,
      text: "Jax FL Pressure Washing transformed our city hall! The public constantly compliments how clean and professional our building looks. It's made a real difference in public perception."
    },
    {
      name: "County Commissioner Davis",
      location: "Duval County Courthouse",
      rating: 5,
      text: "Professional service that understands government facilities. They work around our public hours and always deliver exceptional results. Our courthouse has never looked better!"
    },
    {
      name: "Municipal Director Foster",
      location: "Jacksonville Beach City Center",
      rating: 5,
      text: "The team at Jax FL Pressure Washing is incredible. They maintain our government buildings to the highest standards without ever disrupting public access. Highly recommend!"
    }
  ]

  const faqs = [
    {
      question: "How often should government buildings be cleaned?",
      answer: "We recommend monthly cleaning for most areas, with more frequent cleaning for high-traffic public zones like entrances and public areas. Seasonal deep cleaning is also essential for maintaining government standards."
    },
    {
      question: "Will cleaning disrupt government operations?",
      answer: "We schedule cleaning during off-peak hours and work efficiently to minimize disruption. Most exterior cleaning can be completed during low-traffic periods with minimal impact on government services."
    },
    {
      question: "Do you clean all types of government building surfaces?",
      answer: "Yes, we clean all government building surfaces including buildings, public areas, walkways, and landscaping features. We use appropriate methods for each surface type and follow government safety protocols."
    },
    {
      question: "Can you work around government operating hours?",
      answer: "Absolutely! We offer flexible scheduling including early morning, evening, and weekend appointments to accommodate government operations and ensure minimal disruption to public access."
    },
    {
      question: "Do you offer maintenance plans for government facilities?",
      answer: "Yes, we offer customized maintenance plans that include regular exterior cleaning, seasonal deep cleaning, and emergency response services to maintain your government buildings to the highest standards year-round."
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
              Government Building Cleaning
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Maintain the highest standards of public service with professional exterior cleaning that builds public trust and confidence
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
              Complete Government Facility Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From city halls to courthouses, we provide comprehensive cleaning services that enhance your government facility's professional appearance and public trust.
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
              We understand the unique needs of government facilities and deliver results that enhance public trust and maintain the highest standards of public service.
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
              We follow a systematic approach to ensure your government facility receives the highest quality cleaning service with minimal disruption to public services.
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
              What Our Government Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from government officials who have transformed their facilities with our services.
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
              Get answers to common questions about our government building cleaning services.
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
              Ready to Elevate Your Government Facility?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join the many government facilities that trust Jax FL Pressure Washing to maintain their buildings to the highest public service standards.
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
              Explore our other commercial cleaning services to keep your entire government property looking its best.
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
              href="/services/medical-facility-cleaning"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaBuilding className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Medical Facilities</h3>
              <p className="text-gray-600 text-sm">Healthcare facility cleaning services</p>
            </Link>

            <Link
              href="/services/educational-facility-cleaning"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaBuilding className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Educational Facilities</h3>
              <p className="text-gray-600 text-sm">School and university cleaning services</p>
            </Link>

            <Link
              href="/services/commercial-signage-cleaning"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <FaBuilding className="text-white text-2xl" />
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

export default GovernmentBuildingCleaningPage
