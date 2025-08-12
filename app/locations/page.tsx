'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight, FaCheckCircle } from 'react-icons/fa'

const locations = [
  {
    name: 'Jacksonville Beach',
    slug: 'jacksonville-beach',
    description: 'Beachfront properties and coastal homes requiring specialized cleaning for salt air and humidity.',
    image: '/hero_section.png',
    services: ['House Washing', 'Roof Cleaning', 'Driveway Cleaning', 'Commercial Services'],
    neighborhoods: ['Beach Haven', 'Ponte Vedra Beach', 'Atlantic Beach', 'Neptune Beach'],
    featured: true
  },
  {
    name: 'Atlantic Beach',
    slug: 'atlantic-beach',
    description: 'Beachfront pressure washing services for coastal properties facing salt air and humidity challenges.',
    image: '/hero_section.png',
    services: ['Beachfront Property Care', 'Coastal Environment Services', 'Roof Cleaning', 'Deck Restoration'],
    neighborhoods: ['Atlantic Beach Oceanfront', 'Atlantic Beach Central', 'Atlantic Beach North', 'Atlantic Beach South'],
    featured: false
  },
  {
    name: 'Ponte Vedra',
    slug: 'ponte-vedra',
    description: 'Luxury homes and golf course communities with high-end pressure washing needs.',
    image: '/hero_section.png',
    services: ['Luxury Home Washing', 'Coastal Property Care', 'Roof Maintenance', 'Pool Deck Cleaning'],
    neighborhoods: ['Ponte Vedra Beach', 'Ponte Vedra Lakes', 'Ponte Vedra Club', 'Ponte Vedra Golf Club'],
    featured: false
  },
  {
    name: 'Mandarin',
    slug: 'mandarin',
    description: 'Family-focused pressure washing for suburban homes and established communities.',
    image: '/hero_section.png',
    services: ['Residential Cleaning', 'Suburban Property Care', 'Roof Cleaning', 'Fence Cleaning'],
    neighborhoods: ['Mandarin Gardens', 'Mandarin Lakes', 'Mandarin Cove', 'Mandarin Estates'],
    featured: false
  },
  {
    name: 'San Marco',
    slug: 'san-marco',
    description: 'Historic building preservation and urban property cleaning specialists.',
    image: '/hero_section.png',
    services: ['Historic Building Care', 'Urban Property Services', 'Commercial Washing', 'Cultural Preservation'],
    neighborhoods: ['San Marco Square', 'San Marco Historic District', 'San Marco Business District', 'San Marco Waterfront'],
    featured: false
  },
  {
    name: 'Neptune Beach',
    slug: 'neptune-beach',
    description: 'Coastal community specialists providing beachfront property care and salt air protection.',
    image: '/hero_section.png',
    services: ['Coastal Property Care', 'Salt Air Protection', 'Beachfront Washing', 'Humidity Control'],
    neighborhoods: ['Neptune Beach Oceanfront', 'Neptune Beach Central', 'Neptune Beach South', 'Coastal Communities'],
    featured: false
  },
  {
    name: 'Riverside',
    slug: 'riverside',
    description: 'Historic district specialists with preservation-focused cleaning for unique architecture.',
    image: '/hero_section.png',
    services: ['Historic Building Care', 'Preservation Services', 'Commercial Washing', 'Cultural Heritage'],
    neighborhoods: ['Riverside Historic District', 'Riverside Arts District', 'Riverside Commercial', 'Riverside Residential'],
    featured: false
  },
  {
    name: 'Avondale',
    slug: 'avondale',
    description: 'Upscale residential specialists providing luxury home care and landscape protection.',
    image: '/hero_section.png',
    services: ['Luxury Home Washing', 'Landscape Protection', 'Upscale Services', 'Property Preservation'],
    neighborhoods: ['Avondale Historic District', 'Avondale Estates', 'Avondale Gardens', 'Avondale Park'],
    featured: false
  },
  {
    name: 'Ortega',
    slug: 'ortega',
    description: 'Riverside elegance specialists for historic homes and mature landscaping.',
    image: '/hero_section.png',
    services: ['Historic Home Care', 'Riverside Protection', 'Mature Landscaping', 'Elegance Preservation'],
    neighborhoods: ['Ortega Historic District', 'Ortega Farms', 'Ortega Forest', 'Ortega Park'],
    featured: false
  },
  {
    name: 'Southside',
    slug: 'southside',
    description: 'Suburban excellence specialists for commercial and residential mixed-use properties.',
    image: '/hero_section.png',
    services: ['Commercial Services', 'Residential Care', 'Mixed-Use Properties', 'Suburban Excellence'],
    neighborhoods: ['Southside Estates', 'Southside Business District', 'Southside Residential', 'Southside Commercial'],
    featured: false
  },
  {
    name: 'Arlington',
    slug: 'arlington',
    description: 'Suburban family specialists providing safe, eco-friendly cleaning for family homes.',
    image: '/hero_section.png',
    services: ['Family-Safe Cleaning', 'Eco-Friendly Solutions', 'Suburban Expertise', 'Neighborhood Care'],
    neighborhoods: ['Arlington Heights', 'Arlington Estates', 'Arlington Park', 'Arlington Gardens'],
    featured: false
  },
  {
    name: 'Northside',
    slug: 'northside',
    description: 'Industrial and commercial specialists with 24/7 availability and safety compliance.',
    image: '/hero_section.png',
    services: ['Industrial Services', 'Commercial Excellence', 'Safety Compliance', '24/7 Availability'],
    neighborhoods: ['Northside Industrial District', 'Northside Business Park', 'Northside Commercial', 'Northside Manufacturing'],
    featured: false
  },
  {
    name: 'Westside',
    slug: 'westside',
    description: 'Suburban living specialists providing family-focused service and neighborhood care.',
    image: '/hero_section.png',
    services: ['Family-Focused Service', 'Suburban Expertise', 'Neighborhood Care', 'Residential Excellence'],
    neighborhoods: ['Westside Estates', 'Westside Gardens', 'Westside Park', 'Westside Residential'],
    featured: false
  },
  {
    name: 'Eastside',
    slug: 'eastside',
    description: 'Urban excellence specialists for commercial and residential mixed-use properties.',
    image: '/hero_section.png',
    services: ['Urban Expertise', 'Commercial Services', 'Residential Care', 'Urban Excellence'],
    neighborhoods: ['Eastside Business District', 'Eastside Residential', 'Eastside Commercial', 'Eastside Urban'],
    featured: false
  }
]

const LocationsPage = () => {
  return (
    <div className="min-h-screen bg-neutral-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-32">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero_section.png')"
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-primary/90"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute top-32 left-16 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="absolute bottom-32 right-16 w-40 h-40 bg-accent-eco/20 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-neutral-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow">
              Pressure Washing Service Areas Jacksonville FL
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-shadow max-w-3xl mx-auto">
              Professional pressure washing services throughout Jacksonville, Florida and surrounding areas. 
              Local experts serving 14 locations including Jacksonville Beach, Ponte Vedra, Mandarin, San Marco, Atlantic Beach, Neptune Beach, Riverside, Avondale, Ortega, Southside, Arlington, Northside, Westside, and Eastside.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-accent-eco" />
                <span>14+ Service Areas</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-accent-eco" />
                <span>100% Local Coverage</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-accent-eco" />
                <span>Free Estimates</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-neutral-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-neutral-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Location */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
              Featured Service Area
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jacksonville Beach - Our premier location with specialized coastal cleaning services
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto"
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <FaMapMarkerAlt className="text-6xl mx-auto mb-4 opacity-80" />
                    <p className="text-lg opacity-90">Jacksonville Beach</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-neutral-text mb-4">
                  Jacksonville Beach
                </h3>
                <p className="text-gray-600 mb-6">
                  Beachfront properties and coastal homes requiring specialized cleaning for salt air and humidity. 
                  Our eco-friendly solutions protect your investment while restoring beauty.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-text mb-3">Services Offered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {locations[0].services.map((service, index) => (
                      <span key={index} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-text mb-3">Neighborhoods Served:</h4>
                  <p className="text-gray-600 text-sm">
                    {locations[0].neighborhoods.join(', ')}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href="/locations/jacksonville-beach" 
                    className="btn-primary text-center"
                  >
                    View Jacksonville Beach
                  </Link>
                  <Link 
                    href="/contact" 
                    className="btn-secondary text-center"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Locations Grid */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
              All Service Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional pressure washing services throughout the Jacksonville metropolitan area
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <div className="text-center text-white">
                    <FaMapMarkerAlt className="text-4xl mx-auto mb-3 opacity-80" />
                    <p className="text-lg font-semibold">{location.name}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {location.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-neutral-text mb-2 text-sm">Services:</h4>
                    <div className="flex flex-wrap gap-1">
                      {location.services.slice(0, 3).map((service, serviceIndex) => (
                        <span key={serviceIndex} className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">
                          {service}
                        </span>
                      ))}
                      {location.services.length > 3 && (
                        <span className="text-gray-500 text-xs px-2 py-1">
                          +{location.services.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <Link 
                      href={`/locations/${location.slug}`}
                      className="text-primary hover:text-secondary font-semibold text-sm flex items-center group"
                    >
                      View Details
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                    
                    <Link 
                      href="/contact"
                      className="text-accent hover:text-accent-dark font-semibold text-sm"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-neutral-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Restore Your Property?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get a free quote for pressure washing services in your area. 
              We serve all of Jacksonville and surrounding communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Get Free Quote
              </Link>
              <Link 
                href="tel:+19044563851" 
                className="flex items-center space-x-2 bg-neutral-white/20 hover:bg-neutral-white/30 px-6 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <FaPhone />
                <span>(904) 456-3851</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Jax FL Pressure Washing - Jacksonville Service Areas",
            "description": "Professional pressure washing services throughout Jacksonville, Florida and surrounding areas. Local experts for residential and commercial properties.",
            "url": "https://jaxflpressurewashing.com/locations",
            "telephone": "+19044563851",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.3322",
              "longitude": "-81.6557"
            },
            "areaServed": [
              "Jacksonville Beach",
              "Ponte Vedra",
              "Mandarin",
              "San Marco",
              "Atlantic Beach",
              "Riverside",
              "Southside",
              "Arlington",
              "Northside",
              "Westside",
              "Eastside"
            ],
            "serviceType": [
              "House Washing",
              "Roof Cleaning",
              "Driveway Cleaning",
              "Commercial Services",
              "Luxury Home Washing",
              "Historic Building Care",
              "Coastal Property Care",
              "Suburban Property Care"
            ],
            "priceRange": "$$",
            "openingHours": "Mo-Su 07:00-19:00"
          })
        }}
      />
    </div>
  )
}

export default LocationsPage
