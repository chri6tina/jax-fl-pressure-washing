'use client'

import { motion } from 'framer-motion'
import { 
  FaHome, 
  FaRoad, 
  FaBuilding, 
  FaWindowMaximize, 
  FaCubes, 
  FaIndustry,
  FaLeaf,
  FaShieldAlt,
  FaClock,
  FaCheckCircle
} from 'react-icons/fa'

const services = [
  {
    id: 'house-washing',
    icon: FaHome,
    title: 'House & Soft Washing',
    category: 'House Washing',
    description: 'Gentle soft-wash cleaning for your home\'s exterior that safely removes dirt, algae, mildew, and other contaminants without damaging your siding.',
    benefits: [
      'Safe for all siding types',
      'Removes algae and mildew',
      'Improves curb appeal',
      'Protects siding longevity',
      'Eco-friendly cleaning solutions'
    ],
    process: [
      'Inspect siding condition',
      'Apply eco-friendly cleaning solution',
      'Gentle soft-wash application',
      'Rinse thoroughly',
      'Apply protective treatment if needed'
    ],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'concrete-cleaning',
    icon: FaRoad,
    title: 'Driveway & Concrete Cleaning',
    category: 'Concrete Cleaning',
    description: 'Restore your driveway, sidewalks, patios, and concrete surfaces to their original condition with professional pressure washing.',
    benefits: [
      'Removes oil stains and grime',
      'Eliminates algae and moss',
      'Restores original appearance',
      'Improves safety and traction',
      'Extends concrete lifespan'
    ],
    process: [
      'Assess surface condition',
      'Apply degreaser for oil stains',
      'High-pressure cleaning',
      'Remove all debris',
      'Apply sealant if requested'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'roof-cleaning',
    icon: FaBuilding,
    title: 'Roof Cleaning',
    category: 'Roof Cleaning',
    description: 'Professional roof cleaning that safely removes algae, moss, and debris while protecting your shingles and extending roof life.',
    benefits: [
      'Removes harmful algae growth',
      'Prevents shingle damage',
      'Improves energy efficiency',
      'Extends roof lifespan',
      'Maintains warranty coverage'
    ],
    process: [
      'Inspect roof condition',
      'Apply safe cleaning solution',
      'Gentle low-pressure cleaning',
      'Remove all debris',
      'Apply protective treatment'
    ],
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'gutter-cleaning',
    icon: FaWindowMaximize,
    title: 'Gutter & Window Cleaning',
    category: 'Gutter Cleaning',
    description: 'Comprehensive cleaning of gutters and windows to improve functionality and enhance your home\'s appearance.',
    benefits: [
      'Prevents water damage',
      'Improves drainage',
      'Enhances window clarity',
      'Reduces maintenance needs',
      'Protects foundation'
    ],
    process: [
      'Remove debris from gutters',
      'Flush with water',
      'Clean window exteriors',
      'Inspect for damage',
      'Test drainage flow'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'paver-sealing',
    icon: FaCubes,
    title: 'Paver Sealing',
    category: 'Paver Sealing',
    description: 'Protect and enhance your paver surfaces with professional sealing that prevents staining and extends their beauty.',
    benefits: [
      'Prevents oil and stain absorption',
      'Enhances color and appearance',
      'Reduces weed growth',
      'Easier maintenance',
      'Extends paver lifespan'
    ],
    process: [
      'Clean paver surface thoroughly',
      'Allow to dry completely',
      'Apply sealant evenly',
      'Remove excess sealant',
      'Allow proper curing time'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'commercial',
    icon: FaIndustry,
    title: 'Commercial Washing',
    category: 'Commercial Washing',
    description: 'Comprehensive cleaning solutions for commercial properties, retail stores, office buildings, and industrial facilities.',
    benefits: [
      'Professional appearance',
      'Improved customer perception',
      'Compliance with regulations',
      'Extended building lifespan',
      'Flexible scheduling options'
    ],
    process: [
      'Assess property needs',
      'Develop cleaning plan',
      'Execute during off-hours',
      'Minimize business disruption',
      'Quality inspection'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  }
]

const ServicesDetail = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Service Cards */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <service.icon className="text-neutral-white text-2xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-neutral-text">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-neutral-text mb-3 flex items-center">
                    <FaCheckCircle className="text-accent-eco mr-2" />
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <FaCheckCircle className="text-accent-eco text-sm flex-shrink-0" />
                        <span className="text-gray-600 text-sm">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div>
                  <h4 className="text-lg font-semibold text-neutral-text mb-4 flex items-center">
                    <FaClock className="text-secondary mr-2" />
                    Our Process
                  </h4>
                  <div className="space-y-3">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-secondary text-neutral-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <div className="text-gray-700 leading-relaxed">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={`${service.title} service`}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-neutral-text mb-4">
              Why Choose Jax FL Pressure Washing?
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional results with every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-neutral-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-neutral-text mb-2">Licensed & Insured</h4>
              <p className="text-gray-600">Full coverage for your peace of mind</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-eco rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-neutral-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-neutral-text mb-2">Eco-Friendly</h4>
              <p className="text-gray-600">Safe for your family and environment</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-neutral-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-neutral-text mb-2">Reliable Service</h4>
              <p className="text-gray-600">On-time, professional, and thorough</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-attention rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-neutral-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-neutral-text mb-2">Satisfaction Guaranteed</h4>
              <p className="text-gray-600">We're not done until you're happy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesDetail
