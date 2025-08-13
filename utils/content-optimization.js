// Content optimization utilities
export const contentOptimization = {
  // CTA optimization
  ctaVariants: {
    primary: 'bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-all duration-200 transform hover:scale-105',
    secondary: 'border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-colors duration-200',
    outline: 'border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-200'
  },

  // Typography optimization
  typography: {
    h1: 'text-4xl md:text-6xl font-bold text-gray-800 leading-tight',
    h2: 'text-3xl md:text-4xl font-bold text-gray-800 mb-6',
    h3: 'text-2xl font-bold text-gray-800 mb-4',
    body: 'text-lg text-gray-600 leading-relaxed',
    caption: 'text-sm text-gray-500'
  },

  // Spacing optimization
  spacing: {
    section: 'py-16 md:py-20 px-4',
    container: 'max-w-6xl mx-auto',
    grid: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8',
    card: 'p-6 md:p-8'
  },

  // Animation variants
  animationVariants: {
    fadeInUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 }
    },
    staggerContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    }
  },

  // Content structure helpers
  contentStructure: {
    hero: {
      title: 'Professional Pressure Washing Jacksonville, Florida',
      subtitle: 'Transform your property with our expert pressure washing services',
      description: 'Eco-friendly, professional, and guaranteed to exceed your expectations',
      cta: 'Get Your Free Quote'
    },
    benefits: [
      'Professional-grade equipment and techniques',
      'Eco-friendly cleaning solutions',
      'Licensed and fully insured',
      '5+ years of experience',
      'Satisfaction guaranteed',
      'Competitive pricing'
    ],
    services: [
      'House Washing',
      'Driveway Cleaning',
      'Roof Cleaning',
      'Gutter Cleaning',
      'Deck & Fence Cleaning',
      'Commercial Washing'
    ]
  },

  // SEO content optimization
  seoContent: {
    keywords: [
      'pressure washing Jacksonville FL',
      'house washing Jacksonville',
      'driveway cleaning Jacksonville',
      'roof cleaning Jacksonville',
      'soft wash Jacksonville',
      'eco-friendly pressure washing',
      'professional pressure washing',
      'Jacksonville pressure washing services'
    ],
    locations: [
      'Arlington',
      'Atlantic Beach',
      'Avondale',
      'Eastside',
      'Jacksonville Beach',
      'Mandarin',
      'Neptune Beach',
      'Northside',
      'Ortega',
      'Ponte Vedra',
      'Riverside',
      'San Marco',
      'Southside',
      'Westside'
    ]
  }
}

// Content readability scoring
export function calculateReadability(text) {
  const sentences = text.split(/[.!?]+/).length
  const words = text.split(/s+/).length
  const syllables = text.toLowerCase().replace(/[^a-z]/g, '').split('').filter(char => 'aeiou'.includes(char)).length
  
  const fleschReadingEase = 206.835 - (1.015 * (words / sentences)) - (84.6 * (syllables / words))
  
  if (fleschReadingEase >= 90) return 'Very Easy'
  if (fleschReadingEase >= 80) return 'Easy'
  if (fleschReadingEase >= 70) return 'Fairly Easy'
  if (fleschReadingEase >= 60) return 'Standard'
  if (fleschReadingEase >= 50) return 'Fairly Difficult'
  if (fleschReadingEase >= 30) return 'Difficult'
  return 'Very Difficult'
}

// Content engagement scoring
export function calculateEngagement(content) {
  let score = 0
  
  // CTA presence
  if (content.includes('Call') || content.includes('Quote') || content.includes('Contact')) score += 20
  
  // Social proof
  if (content.includes('customer') || content.includes('review') || content.includes('rating')) score += 15
  
  // Urgency
  if (content.includes('today') || content.includes('now') || content.includes('limited')) score += 10
  
  // Benefits
  if (content.includes('benefit') || content.includes('advantage') || content.includes('feature')) score += 15
  
  // Trust indicators
  if (content.includes('licensed') || content.includes('insured') || content.includes('certified')) score += 20
  
  // Local focus
  if (content.includes('Jacksonville') || content.includes('Florida') || content.includes('local')) score += 20
  
  return Math.min(score, 100)
}