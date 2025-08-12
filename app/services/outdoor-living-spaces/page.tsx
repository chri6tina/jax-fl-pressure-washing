'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPhone, FaCheckCircle, FaStar, FaLeaf, FaShieldAlt, FaHome, FaWater, FaClock, FaUsers, FaAward, FaTree, FaLeaf as FaLeafIcon } from 'react-icons/fa'

const OutdoorLivingSpacesPage = () => {
  const services = [
    {
      title: "Outdoor Kitchen Cleaning",
      description: "Deep cleaning of outdoor kitchens, grills, and cooking areas",
      benefits: ["Hygienic cooking", "Extends equipment life", "Improves appearance"]
    },
    {
      title: "Fire Pit & Fireplace Care",
      description: "Professional cleaning and maintenance of outdoor fire features",
      benefits: ["Safe operation", "Prevents damage", "Maintains beauty"]
    },
    {
      title: "Outdoor Furniture Restoration",
      description: "Cleaning and restoration of outdoor furniture and seating areas",
      benefits: ["Restores comfort", "Extends life", "Improves aesthetics"]
    },
    {
      title: "Garden & Landscape Features",
      description: "Cleaning of garden walls, pathways, and decorative elements",
      benefits: ["Enhances beauty", "Prevents damage", "Maintains value"]
    },
    {
      title: "Outdoor Entertainment Areas",
      description: "Comprehensive cleaning of outdoor living and entertainment spaces",
      benefits: ["Welcoming space", "Increases usability", "Boosts curb appeal"]
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Space Assessment",
      description: "Professional evaluation of outdoor living area condition and cleaning needs"
    },
    {
      step: 2,
      title: "Equipment Protection",
      description: "Protection of sensitive equipment, furniture, and landscaping before cleaning"
    },
    {
      step: 3,
      title: "Surface Preparation",
      description: "Removal of debris and preparation of surfaces for deep cleaning"
    },
    {
      step: 4,
      title: "Specialized Cleaning",
      description: "Application of appropriate cleaning methods for each surface type"
    },
    {
      step: 5,
      title: "Equipment Maintenance",
      description: "Cleaning and maintenance of outdoor equipment and appliances"
    },
    {
      step: 6,
      title: "Final Inspection",
      description: "Quality check and recommendations for ongoing maintenance"
    }
  ]

  const benefits = [
    {
      icon: FaTree,
      title: "Enhanced Outdoor Living",
      description: "Transform your outdoor space into a beautiful, functional living area"
    },
    {
      icon: FaLeaf,
      title: "Eco-Friendly",
      description: "Safe cleaning methods that protect your landscaping and family"
    },
    {
      icon: FaHome,
      title: "Increased Property Value",
      description: "Well-maintained outdoor spaces significantly increase your home's value"
    },
    {
      icon: FaWater,
      title: "Weather Protection",
      description: "Proper cleaning and maintenance protects against weather damage"
    },
    {
      icon: FaClock,
      title: "Extended Enjoyment",
      description: "Professional care extends the life of your outdoor investments"
    },
    {
      icon: FaUsers,
      title: "Family Safe",
      description: "Non-toxic solutions safe for children, pets, and outdoor entertaining"
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero_section.png')"
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/85"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-neutral-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Service Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30"
            >
              <FaTree className="text-accent text-lg" />
              <span className="text-sm font-semibold">Outdoor Living Experts</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow leading-tight"
            >
              <span className="block">Outdoor Living</span>
              <span className="block text-accent">Spaces</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-4 text-accent-eco">
                Complete Outdoor Care
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl mb-8 text-shadow max-w-4xl mx-auto leading-relaxed"
            >
              Professional outdoor living space cleaning services in Jacksonville, Florida. 
              <span className="text-accent font-semibold"> Transform your outdoor areas, enhance functionality,</span> and 
              create beautiful spaces for entertaining and relaxation.
            </motion.p>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            >
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+ Years</div>
                <div className="text-white/90 text-sm md:text-base">Outdoor Living Experience</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-accent-eco mb-2">500+</div>
                <div className="text-white/90 text-sm md:text-base">Outdoor Spaces Transformed</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-white/90 text-sm md:text-base">Satisfaction Guaranteed</div>
              </div>
            </motion.div>

            {/* Enhanced Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base"
            >
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="font-semibold">Complete Care</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="font-semibold">Equipment Maintenance</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="font-semibold">Professional Service</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="font-semibold">Free Estimates</span>
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24"
            >
              <Link href="/contact" className="btn-primary text-xl px-10 py-5 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Get Free Outdoor Living Quote
              </Link>
              <Link href="tel:+19044563851" className="flex items-center space-x-3 bg-white/20 hover:bg-white/30 text-neutral-white px-8 py-5 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/50 transform hover:scale-105">
                <FaPhone className="text-xl" />
                <span className="text-xl">(904) 456-3851</span>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="text-white/80 text-sm mb-4">Trusted by Jacksonville Homeowners for Over 15 Years</p>
              <div className="flex justify-center space-x-6 text-white/60">
                <span className="text-sm">✓ Licensed & Insured</span>
                <span className="text-sm">✓ Eco-Friendly</span>
                <span className="text-sm">✓ Satisfaction Guaranteed</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-4 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-text mb-6">
              Complete Outdoor Living Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our specialized outdoor living space services focus on functionality, beauty, and 
              enjoyment, ensuring your outdoor areas remain both attractive and fully functional.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaTree className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-text mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <FaCheckCircle className="text-accent text-sm flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-text mb-6">
              Our Professional Process
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We follow a comprehensive approach to ensure your outdoor living spaces receive 
              the highest quality care while protecting your investments and landscaping.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-6 mx-auto text-white text-3xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-neutral-text mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-text mb-6">
              Why Choose Jax FL Pressure Washing
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're not just another pressure washing company. We're your neighbors, committed to 
              providing the highest quality outdoor living care with the latest technology and proven results.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                  <benefit.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-text mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-text mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Get answers to the most common questions about our outdoor living space services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-neutral-text mb-4">
                What outdoor living areas do you service?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We service all types of outdoor living areas including outdoor kitchens, fire pits, 
                patios, decks, outdoor furniture, garden features, and entertainment spaces. Each 
                area receives specialized care appropriate for its materials and function.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-neutral-text mb-4">
                Can you clean my outdoor kitchen equipment?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! We specialize in cleaning outdoor kitchen equipment including grills, smokers, 
                countertops, and cooking surfaces. We use safe, food-safe cleaning methods that 
                won't damage your equipment or leave harmful residues.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-neutral-text mb-4">
                How often should outdoor living spaces be cleaned?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Most outdoor living spaces benefit from cleaning every 6-12 months, depending on 
                usage, climate, and exposure to elements. High-traffic areas and humid climates 
                like Jacksonville may need more frequent cleaning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-neutral-text mb-4">
                Do you offer maintenance plans for outdoor living spaces?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! We offer customized maintenance plans that include regular cleaning, inspection, 
                and minor repairs. This helps extend the life of your outdoor investments and keeps 
                your spaces looking great year-round.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-neutral-text mb-4">
                Can you clean outdoor furniture without damaging it?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely! We use gentle cleaning methods appropriate for each furniture material 
                including wood, metal, wicker, and fabric. Our process removes dirt and stains 
                while preserving the furniture's finish and structural integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-white mb-6">
              Ready to Transform Your Outdoor Living?
            </h2>
            <p className="text-xl text-neutral-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Get your free estimate today and see the difference professional outdoor living care can make. 
              Our team is ready to enhance your outdoor spaces for maximum enjoyment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Get Free Quote
              </Link>
              <Link href="tel:+19044563851" className="flex items-center space-x-3 bg-white/20 hover:bg-white/30 text-neutral-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                <FaPhone />
                <span>(904) 456-3851</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default OutdoorLivingSpacesPage
