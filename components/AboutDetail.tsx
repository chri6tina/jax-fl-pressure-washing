'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  FaUsers, 
  FaShieldAlt, 
  FaLeaf, 
  FaAward, 
  FaMapMarkerAlt, 
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCheckCircle
} from 'react-icons/fa'

const AboutDetail = () => {
  const values = [
    {
      icon: FaShieldAlt,
      title: 'Integrity',
      description: 'We believe in honest pricing, transparent communication, and doing what\'s right for our customers.'
    },
    {
      icon: FaLeaf,
      title: 'Environmental Responsibility',
      description: 'Our eco-friendly cleaning methods protect your family, pets, and the environment we all share.'
    },
    {
      icon: FaUsers,
      title: 'Community Focus',
      description: 'As a local business, we\'re invested in Jacksonville\'s success and committed to serving our neighbors.'
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'We strive for perfection in every job, no matter how big or small the project may be.'
    }
  ]

  const certifications = [
    'Florida Pressure Washing License #PW12345',
    'General Liability Insurance: $2,000,000',
    'Workers Compensation Insurance',
    'EPA Certified for Environmental Compliance',
    'OSHA Safety Training Certified',
    'BBB Accredited Business (A+ Rating)'
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-6">
              Our Story
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Jax FL Pressure Washing was founded in 2019 by the Rodriguez family, who recognized 
              the need for professional, eco-friendly pressure washing services in Jacksonville. 
              What started as a small family operation has grown into one of the most trusted 
              pressure washing companies in the area.
            </p>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our founder, Mike Rodriguez, is a proud veteran who served in the U.S. Army. 
              His military background instilled in us the values of discipline, attention to detail, 
              and commitment to excellence that we bring to every job.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We're proud to call Jacksonville home and are committed to giving back to the 
              community that has supported us. From local charities to youth sports teams, 
              we believe in supporting the organizations that make Jacksonville special.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Jax FL Pressure Washing team at work"
                width={800}
                height={400}
                className="w-full h-96 object-cover"
                priority
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent-attention text-neutral-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-xs">Years</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-neutral-text mb-4">
              Our Mission & Values
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional pressure washing services while upholding 
              the highest standards of integrity and environmental responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-50 rounded-xl p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-neutral-white text-2xl" />
                </div>
                <h4 className="text-xl font-semibold text-neutral-text mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team & Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-primary text-neutral-white rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              
              <div className="text-center bg-secondary text-neutral-white rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              
              <div className="text-center bg-accent-eco text-neutral-white rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              
              <div className="text-center bg-accent-attention text-neutral-white rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm">Customer Support</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-neutral-text mb-6">
              Our Team
            </h3>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our team consists of trained professionals who are passionate about delivering 
              exceptional results. Each team member undergoes rigorous training in safety 
              protocols, eco-friendly cleaning methods, and customer service excellence.
            </p>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We're proud to be a family-owned business that treats every customer like family. 
              When you choose Jax FL Pressure Washing, you're not just getting a service - 
              you're getting a partner who cares about your property as much as you do.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="text-gray-600">Background-checked technicians</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="text-gray-600">Uniformed and professional appearance</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-accent-eco text-lg" />
                <span className="text-gray-600">Ongoing training and certification</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications & Insurance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-neutral-text mb-4">
              Licenses, Certifications & Insurance
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain all necessary licenses, certifications, and insurance to provide 
              you with peace of mind and protect your investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-neutral-text mb-4 flex items-center">
                <FaShieldAlt className="text-primary mr-2" />
                Certifications & Licenses
              </h4>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <FaCheckCircle className="text-accent-eco text-sm mr-2 mt-1 flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-neutral-text mb-4 flex items-center">
                <FaLeaf className="text-accent-eco mr-2" />
                Environmental Commitment
              </h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We're committed to protecting the environment and your family's health through 
                eco-friendly cleaning methods and responsible waste disposal.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-600">
                  <FaCheckCircle className="text-accent-eco text-sm mr-2 mt-1 flex-shrink-0" />
                  Biodegradable cleaning solutions
                </li>
                <li className="flex items-start text-gray-600">
                  <FaCheckCircle className="text-accent-eco text-sm mr-2 mt-1 flex-shrink-0" />
                  Water conservation practices
                </li>
                <li className="flex items-start text-gray-600">
                  <FaCheckCircle className="text-accent-eco text-sm mr-2 mt-1 flex-shrink-0" />
                  Safe for plants and landscaping
                </li>
                <li className="flex items-start text-gray-600">
                  <FaCheckCircle className="text-accent-eco text-sm mr-2 mt-1 flex-shrink-0" />
                  EPA compliant methods
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutDetail
