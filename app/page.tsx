import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import AboutPreview from '@/components/AboutPreview'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <AboutPreview />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
