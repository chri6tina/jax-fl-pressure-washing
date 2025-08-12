'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { 
  FaHome, 
  FaBuilding, 
  FaTools, 
  FaLeaf, 
  FaSearch, 
  FaStar, 
  FaCheckCircle,
  FaPhone,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaWater,
  FaShieldAlt
} from 'react-icons/fa'

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')



  const serviceCategories = [
    {
      id: 'residential',
      name: 'Residential Services',
      icon: FaHome,
      color: 'from-blue-500 to-cyan-500',
      description: 'Professional cleaning services for homes and residential properties'
    },
    {
      id: 'commercial',
      name: 'Commercial & Industrial',
      icon: FaBuilding,
      color: 'from-purple-500 to-pink-500',
      description: 'Large-scale cleaning solutions for businesses and industrial facilities'
    },
    {
      id: 'specialized',
      name: 'Specialized Services',
      icon: FaTools,
      color: 'from-orange-500 to-red-500',
      description: 'Expert services for unique cleaning needs and emergency situations'
    },
    {
      id: 'maintenance',
      name: 'Maintenance & Care',
      icon: FaCalendarAlt,
      color: 'from-green-500 to-teal-500',
      description: 'Ongoing maintenance plans and seasonal care services'
    }
  ]

  const allServices = [
    // Residential Services
    {
      title: "House Washing (Soft Wash)",
      description: "Gentle exterior cleaning that removes dirt, mold, and algae without damage",
      category: "residential",
      url: "/services/house-washing",
      features: ["Safe for all siding types", "Mold & algae removal", "Gentle cleaning process"],
      icon: FaHome,
      popular: true
    },
    {
      title: "Driveway & Concrete Cleaning",
      description: "Restore your driveway's appearance with professional concrete cleaning",
      category: "residential",
      url: "/services/driveway-cleaning",
      features: ["Oil stain removal", "Deep cleaning", "Surface restoration"],
      icon: FaHome,
      popular: true
    },
    {
      title: "Roof Cleaning",
      description: "Safe roof cleaning that extends the life of your roofing materials",
      category: "residential",
      url: "/services/roof-cleaning",
      features: ["Safe for all roof types", "Moss & algae removal", "Roof protection"],
      icon: FaHome,
      popular: true
    },
    {
      title: "Gutter Cleaning & Maintenance",
      description: "Complete gutter system cleaning and maintenance services",
      category: "residential",
      url: "/services/gutter-cleaning",
      features: ["Debris removal", "Downspout cleaning", "Preventive maintenance"],
      icon: FaHome
    },
    {
      title: "Paver & Stone Services",
      description: "Professional cleaning and sealing of pavers, stone, and concrete surfaces",
      category: "residential",
      url: "/services/paver-stone-services",
      features: ["Deep cleaning", "Sealing services", "Color restoration"],
      icon: FaHome
    },
    {
      title: "Deck & Fence Cleaning",
      description: "Restore your outdoor living spaces with professional cleaning",
      category: "residential",
      url: "/services/deck-fence-cleaning",
      features: ["Wood restoration", "Mold removal", "Surface protection"],
      icon: FaHome
    },
    {
      title: "Pool Deck Cleaning",
      description: "Safe and effective cleaning of pool areas and surrounding surfaces",
      category: "residential",
      url: "/services/pool-deck-cleaning",
      features: ["Safety-focused", "Slip prevention", "Aesthetic restoration"],
      icon: FaHome
    },
    {
      title: "Patio Cleaning",
      description: "Transform your outdoor entertainment areas with professional cleaning",
      category: "residential",
      url: "/services/patio-cleaning",
      features: ["Surface restoration", "Stain removal", "Enhanced appearance"],
      icon: FaHome
    },
    {
      title: "Outdoor Living Spaces",
      description: "Comprehensive cleaning of all outdoor areas and structures",
      category: "residential",
      url: "/services/outdoor-living-spaces",
      features: ["Complete coverage", "Custom solutions", "Year-round care"],
      icon: FaHome
    },

    // Commercial & Industrial Services
    {
      title: "Office Building Cleaning",
      description: "Professional exterior cleaning for office buildings and corporate facilities",
      category: "commercial",
      url: "/services/office-building-cleaning",
      features: ["Professional appearance", "Minimal disruption", "Regular maintenance"],
      icon: FaBuilding
    },
    {
      title: "Shopping Center Cleaning",
      description: "Large-scale commercial cleaning for shopping centers and retail complexes",
      category: "commercial",
      url: "/services/shopping-center-cleaning",
      features: ["High-traffic areas", "Brand protection", "Customer attraction"],
      icon: FaBuilding
    },
    {
      title: "Restaurant Exteriors",
      description: "Health code compliant cleaning for restaurant exteriors and dining areas",
      category: "commercial",
      url: "/services/restaurant-cleaning",
      features: ["Health compliance", "Customer attraction", "Brand protection"],
      icon: FaBuilding
    },
    {
      title: "Warehouse & Factory Cleaning",
      description: "Industrial facility cleaning and maintenance services",
      category: "commercial",
      url: "/services/warehouse-factory-cleaning",
      features: ["Safety compliance", "Equipment protection", "Operational efficiency"],
      icon: FaBuilding
    },
    {
      title: "Parking Garage Cleaning",
      description: "Multi-level parking structure cleaning and maintenance",
      category: "commercial",
      url: "/services/parking-garage-cleaning",
      features: ["Safety improvement", "Aesthetic enhancement", "Structural protection"],
      icon: FaBuilding
    },
    {
      title: "Commercial Signage Cleaning",
      description: "Professional cleaning of business signs and branding elements",
      category: "commercial",
      url: "/services/commercial-signage-cleaning",
      features: ["Brand visibility", "Professional appearance", "Customer attraction"],
      icon: FaBuilding
    },
    {
      title: "Retail Storefronts",
      description: "Storefront cleaning that attracts customers and protects your brand",
      category: "commercial",
      url: "/services/retail-storefronts",
      features: ["Customer attraction", "Brand protection", "Professional image"],
      icon: FaBuilding
    },
    {
      title: "Medical Facility Cleaning",
      description: "Healthcare facility cleaning that meets industry standards",
      category: "commercial",
      url: "/services/medical-facility-cleaning",
      features: ["Health compliance", "Safety standards", "Professional appearance"],
      icon: FaBuilding
    },
    {
      title: "Educational Facility Cleaning",
      description: "School and university cleaning for safe learning environments",
      category: "commercial",
      url: "/services/educational-facility-cleaning",
      features: ["Safety compliance", "Learning environment", "Professional standards"],
      icon: FaBuilding
    },
    {
      title: "Government Building Cleaning",
      description: "Municipal and government facility cleaning services",
      category: "commercial",
      url: "/services/government-building-cleaning",
      features: ["Public trust", "Professional standards", "Regulatory compliance"],
      icon: FaBuilding
    },
    {
      title: "Hotel & Resort Exteriors",
      description: "Hospitality property cleaning that enhances guest experience",
      category: "commercial",
      url: "/services/hotel-resort-cleaning",
      features: ["Guest satisfaction", "Brand reputation", "Professional standards"],
      icon: FaBuilding
    },
    {
      title: "Bank & Financial Building Cleaning",
      description: "Financial institution cleaning that builds customer trust",
      category: "commercial",
      url: "/services/bank-financial-cleaning",
      features: ["Customer trust", "Professional image", "Regulatory compliance"],
      icon: FaBuilding
    },

    // Specialized Services
    {
      title: "Vehicle & Equipment Cleaning",
      description: "Professional cleaning of vehicles, machinery, and equipment",
      category: "specialized",
      url: "/services/vehicle-equipment-cleaning",
      features: ["Equipment protection", "Professional image", "Longevity"],
      icon: FaTools
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency response for storm damage, fire cleanup, and more",
      category: "specialized",
      url: "/services/emergency-services",
      features: ["24/7 availability", "Quick response", "Damage prevention"],
      icon: FaExclamationTriangle
    },

    // Maintenance & Care Services
    {
      title: "Preventative Maintenance Plans",
      description: "Comprehensive maintenance plans that protect your investment",
      category: "maintenance",
      url: "/services/preventative-maintenance",
      features: ["Cost savings", "Property protection", "Consistent appearance"],
      icon: FaCalendarAlt
    },
    {
      title: "Seasonal Services",
      description: "Year-round property care with specialized seasonal services",
      category: "maintenance",
      url: "/services/seasonal-services",
      features: ["Seasonal preparation", "Weather protection", "Year-round appeal"],
      icon: FaCalendarAlt
    },
    {
      title: "Eco-Friendly Solutions",
      description: "Environmentally responsible cleaning that protects your property and the planet",
      category: "maintenance",
      url: "/services/eco-friendly-solutions",
      features: ["Environmental protection", "Health & safety", "Green certification"],
      icon: FaLeaf
    }
  ]

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const popularServices = allServices.filter(service => service.popular)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section with Search */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/hero_section.png')"
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-primary/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-neutral-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-shadow max-w-4xl mx-auto">
              Professional pressure washing and cleaning services for every property type and need. 
              Find exactly what you're looking for below.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-3xl mx-auto mb-8 z-20">
              <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl pointer-events-none" />
              <input
                type="text"
                placeholder="Search for services, features, or specific needs..."
                value={searchTerm}
                onChange={(e) => {
                  console.log('Search input changed:', e.target.value)
                  setSearchTerm(e.target.value)
                }}
                className="w-full pl-16 pr-6 py-5 text-xl border-0 rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/20 transition duration-300 shadow-2xl bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500"
                style={{ zIndex: 1000 }}
              />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-xl font-semibold transition duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-white text-primary shadow-lg'
                    : 'bg-neutral-white/20 text-neutral-white hover:bg-neutral-white/30 backdrop-blur-sm'
                }`}
              >
                All Services
              </button>
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-white text-primary shadow-lg'
                      : 'bg-neutral-white/20 text-neutral-white hover:bg-neutral-white/30 backdrop-blur-sm'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center mb-8">
              <p className="text-neutral-white/90 text-lg">
                Showing <span className="font-bold text-neutral-white">{filteredServices.length}</span> of {allServices.length} services
              </p>
              {/* Debug: Show current search term */}
              {searchTerm && (
                <p className="text-neutral-white/70 text-sm mt-2">
                  Searching for: "{searchTerm}"
                </p>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Free Quote
              </Link>
              <Link href="tel:+19044563851" className="flex items-center space-x-2 bg-neutral-white/20 hover:bg-neutral-white/30 text-neutral-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                <FaPhone />
                <span>(904) 456-3851</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Popular Services Section */}
      {searchTerm === '' && selectedCategory === 'all' && (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Most Popular Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most requested services that homeowners trust for their property care needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <service.icon className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-400 text-sm" />
                          <span className="text-sm text-gray-600">Popular</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2 mb-6 flex-grow">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <FaCheckCircle className="text-green-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <Link
                        href={service.url}
                        className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition duration-300"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredServices.length > 0 ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  {selectedCategory === 'all' ? 'All Services' : `${serviceCategories.find(c => c.id === selectedCategory)?.name}`}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {selectedCategory === 'all' 
                    ? 'Comprehensive cleaning solutions for every property type and need'
                    : serviceCategories.find(c => c.id === selectedCategory)?.description
                  }
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100"
                  >
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${serviceCategories.find(c => c.id === service.category)?.color} rounded-lg flex items-center justify-center`}>
                          <service.icon className="text-white text-xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                          <span className="text-sm text-gray-500 capitalize">{service.category}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="space-y-2 mb-6 flex-grow">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <FaCheckCircle className="text-green-500 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto">
                        <Link
                          href={service.url}
                          className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition duration-300"
                        >
                          View Service Details
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <FaSearch className="text-gray-400 text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Services Found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or category filter to find the services you need.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('all')
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  View All Services
                </button>
              </div>
            </motion.div>
          )}
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
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              With 21 comprehensive services, we have the perfect solution for your property care needs. Get started with a free quote today!
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
    </div>
  )
}

export default ServicesPage
