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
    </div>
  )
}
