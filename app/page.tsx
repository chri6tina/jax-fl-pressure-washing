import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import AboutPreview from '@/components/AboutPreview'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'

// Enhanced Content Components
import EnhancedCTA from '@/components/EnhancedCTA'
import ContentReadabilityEnhancer from '@/components/ContentReadabilityEnhancer'
import VisualHierarchy from '@/components/VisualHierarchy'
import InteractiveElements from '@/components/InteractiveElements'

// Monitoring Dashboard
import LocalSEODashboard from '@/components/LocalSEODashboard'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <ContentReadabilityEnhancer />
      <VisualHierarchy />
      <InteractiveElements />
      <AboutPreview />
      <TestimonialsSection />
      <EnhancedCTA />
      <CTASection />
      
      {/* Monitoring Dashboard - You can see this now! */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <LocalSEODashboard />
        </div>
      </section>
    </div>
  )
}
