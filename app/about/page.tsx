import { Metadata } from 'next'
import AboutDetail from '@/components/AboutDetail'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'About Us - Jax FL Pressure Washing',
  description: 'Learn about Jax FL Pressure Washing - a family-owned, veteran-owned pressure washing company serving Jacksonville with eco-friendly cleaning solutions.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary text-neutral-white">
        <div className="container-custom section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-xl text-neutral-white/90 max-w-3xl mx-auto">
              Your trusted partner for professional pressure washing in Jacksonville
            </p>
          </div>
        </div>
      </div>
      <AboutDetail />
      <CTASection />
    </div>
  )
}
