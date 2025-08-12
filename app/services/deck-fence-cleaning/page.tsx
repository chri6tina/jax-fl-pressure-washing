'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPhone, FaCheckCircle, FaStar, FaLeaf, FaShieldAlt, FaHome, FaWater, FaClock, FaUsers, FaAward, FaTree, FaLeaf as FaLeafIcon } from 'react-icons/fa'

const DeckFenceCleaningPage = () => {
  const services = [
    {
      title: "Wood Deck Cleaning",
      description: "Professional cleaning and restoration of wood decks to extend their lifespan",
      benefits: ["Prevents rot", "Extends life", "Improves appearance"]
    },
    {
      title: "Composite Deck Care",
      description: "Gentle cleaning of composite decking materials without damage",
      benefits: ["Safe cleaning", "Maintains warranty", "Restores beauty"]
    },
    {
      title: "Wood Fence Restoration",
      description: "Complete cleaning and treatment of wood fences for long-term protection",
      benefits: ["Prevents decay", "Maintains strength", "Improves curb appeal"]
    },
    {
      title: "Vinyl Fence Cleaning",
      description: "Safe cleaning of vinyl fences to restore their original appearance",
      benefits: ["Removes stains", "Maintains color", "Extends life"]
    },
    {
      title: "Deck & Fence Sealing",
      description: "Professional sealing to protect wood surfaces from weather damage",
      benefits: ["Weather protection", "Prevents staining", "Easier maintenance"]
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Surface Assessment",
      description: "Professional evaluation of deck/fence condition and cleaning requirements"
    },
    {
      step: 2,
      title: "Pre-Treatment",
      description: "Application of eco-friendly cleaning solutions to break down grime and stains"
    },
    {
      step: 3,
      title: "Gentle Cleaning",
      description: "Low-pressure cleaning to remove dirt, mold, and debris safely"
    },
    {
      step: 4,
      title: "Stain Treatment",
      description: "Targeted treatment of stubborn stains and mold growth"
    },
    {
      step: 5,
      title: "Final Rinse",
      description: "Thorough rinsing to remove all cleaning solutions and debris"
    },
    {
      step: 6,
      title: "Sealing (Optional)",
      description: "Application of protective sealant for long-term weather protection"
    }
  ]

  const benefits = [
    {
      icon: FaTree,
      title: "Surface Protection",
      description: "Professional cleaning and sealing protects your deck and fence from weather damage"
    },
    {
      icon: FaLeaf,
      title: "Eco-Friendly",
      description: "Safe cleaning methods that won't harm your family, pets, or plants"
    },
    {
      icon: FaHome,
      title: "Extended Lifespan",
      description: "Regular maintenance extends the life of your deck and fence significantly"
    },
    {
      icon: FaWater,
      title: "Weather Resistance",
      description: "Proper sealing protects against moisture, UV damage, and staining"
    },
    {
      icon: FaClock,
      title: "Quick Service",
      description: "Most deck and fence cleaning projects completed in 3-5 hours"
    },
    {
      icon: FaUsers,
      title: "Family Safe",
      description: "Non-toxic solutions safe for children, pets, and outdoor living"
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
              <span className="text-sm font-semibold">Outdoor Living Care</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow leading-tight"
            >
              <span className="block">Deck & Fence</span>
              <span className="block text-accent">Cleaning</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-4 text-accent-eco">
                Protect Your Outdoor Investment
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl mb-8 text-shadow max-w-4xl mx-auto leading-relaxed"
            >
              Professional deck and fence cleaning services in Jacksonville, Florida. 
              <span className="text-accent font-semibold"> Extend lifespan, prevent damage, and restore</span> the 
              beauty of your outdoor living spaces with our gentle, effective cleaning methods.
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
                <div className="text-white/90 text-sm md:text-base">Outdoor Care Experience</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-accent-eco mb-2">900+</div>
                <div className="text-white/90 text-sm md:text-base">Decks & Fences Restored</div>
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
                <span className="font-semibold">Gentle Cleaning</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="font-semibold">Eco-Friendly Solutions</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="font-semibold">Professional Sealing</span>
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
                Get Free Deck & Fence Quote
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
              Complete Deck & Fence Care
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive deck and fence cleaning services cover all materials and surface types, 
              using gentle, effective methods that protect your investment and extend its life.
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
              We follow a systematic approach to ensure your deck and fence receive the highest quality 
              cleaning while protecting your property and landscaping.
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
              providing the highest quality outdoor care with the latest technology and proven results.
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
              Get answers to the most common questions about our deck and fence cleaning services.
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
                How often should I clean my deck and fence?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Most decks and fences benefit from cleaning every 1-2 years, but those in humid climates 
                like Jacksonville may need cleaning annually. Regular maintenance prevents mold, mildew, 
                and weather damage.
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
                Is your cleaning process safe for all deck materials?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! We use gentle, low-pressure cleaning methods that are safe for all deck materials 
                including wood, composite, PVC, and vinyl. Our eco-friendly solutions won't damage 
                any surface type.
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
                How long does deck and fence cleaning take?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Most deck and fence cleaning projects are completed in 3-5 hours, depending on size, 
                condition, and whether sealing is included. We work efficiently to minimize disruption.
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
                Do you offer sealing services after cleaning?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! We offer professional sealing services that provide long-term protection against 
                weather damage, UV rays, and staining. Sealing is highly recommended for wood surfaces 
                to extend their lifespan.
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
                Can you remove mold and mildew from my deck?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely! We use specialized cleaning solutions that effectively remove mold, mildew, 
                and algae growth from deck and fence surfaces. Our process not only cleans but also 
                helps prevent future growth.
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
              Ready to Restore Your Outdoor Spaces?
            </h2>
            <p className="text-xl text-neutral-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Get your free estimate today and see the difference professional deck and fence care can make. 
              Our team is ready to protect your outdoor investment.
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

export default DeckFenceCleaningPage
