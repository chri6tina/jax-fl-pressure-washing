'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa'

const galleryItems = [
  {
    id: 1,
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    after: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Driveway Transformation',
    description: 'Before: Oil stains and algae buildup. After: Clean, restored concrete surface.',
    category: 'Driveway Cleaning'
  },
  {
    id: 2,
    before: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    after: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'House Exterior',
    description: 'Before: Dirt and mildew buildup. After: Clean, bright siding.',
    category: 'House Washing'
  },
  {
    id: 3,
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    after: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Patio Restoration',
    description: 'Before: Algae and moss growth. After: Clean, sealed pavers.',
    category: 'Paver Sealing'
  },
  {
    id: 4,
    before: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    after: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Roof Cleaning',
    description: 'Before: Algae and debris buildup. After: Clean, protected shingles.',
    category: 'Roof Cleaning'
  },
  {
    id: 5,
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    after: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Sidewalk Cleaning',
    description: 'Before: Stained and dirty concrete. After: Clean, safe walking surface.',
    category: 'Concrete Cleaning'
  },
  {
    id: 6,
    before: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    after: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Commercial Building',
    description: 'Before: Dirt and grime buildup. After: Professional appearance restored.',
    category: 'Commercial Washing'
  }
]

const categories = ['All', 'House Washing', 'Driveway Cleaning', 'Roof Cleaning', 'Paver Sealing', 'Concrete Cleaning', 'Commercial Washing']

const GalleryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const openModal = (item: typeof galleryItems[0]) => {
    setSelectedItem(item)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedItem(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    setCurrentImageIndex(prev => prev === 0 ? 1 : 0)
  }

  const prevImage = () => {
    setCurrentImageIndex(prev => prev === 0 ? 1 : 0)
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
            Before & After Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            See the amazing transformations we've achieved for our Jacksonville customers
          </p>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-neutral-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => openModal(item)}
            >
              <div className="relative">
                {/* Before/After Toggle */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.before}
                    alt={`Before: ${item.title}`}
                    width={400}
                    height={256}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-neutral-white">
                      <div className="text-sm font-medium mb-2">Before</div>
                      <FaExpand className="mx-auto text-2xl opacity-80" />
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-accent-attention text-neutral-white px-3 py-1 rounded-full text-xs font-medium">
                  {item.category}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-neutral-text mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-600"
        >
          Showing {filteredItems.length} of {galleryItems.length} transformations
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 text-neutral-white hover:text-gray-300 transition-colors duration-200"
              >
                <FaTimes size={24} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-neutral-white hover:text-gray-300 transition-colors duration-200"
              >
                <FaChevronLeft size={24} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-neutral-white hover:text-gray-300 transition-colors duration-200"
              >
                <FaChevronRight size={24} />
              </button>

              {/* Image */}
              <div className="relative">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={currentImageIndex === 0 ? selectedItem.before : selectedItem.after}
                    alt={currentImageIndex === 0 ? `Before: ${selectedItem.title}` : `After: ${selectedItem.title}`}
                    width={800}
                    height={600}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </motion.div>

                {/* Image Label */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/70 text-neutral-white px-4 py-2 rounded-lg">
                  <div className="text-center">
                    <div className="font-semibold">
                      {currentImageIndex === 0 ? 'Before' : 'After'}
                    </div>
                    <div className="text-sm opacity-80">{selectedItem.title}</div>
                  </div>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  onClick={() => setCurrentImageIndex(0)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    currentImageIndex === 0 ? 'border-accent-attention' : 'border-gray-400'
                  }`}
                >
                  <Image
                    src={selectedItem.before}
                    alt="Before thumbnail"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  onClick={() => setCurrentImageIndex(1)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    currentImageIndex === 1 ? 'border-accent-attention' : 'border-gray-400'
                  }`}
                >
                  <Image
                    src={selectedItem.after}
                    alt="After thumbnail"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>

              {/* Description */}
              <div className="text-center text-neutral-white mt-4">
                <h3 className="text-xl font-semibold mb-2">{selectedItem.title}</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GalleryGrid
