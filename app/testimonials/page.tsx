import { Metadata } from 'next'
import TestimonialsDetail from '@/components/TestimonialsDetail'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Testimonials - Jax FL Pressure Washing',
  description: 'Read what our satisfied customers in Jacksonville have to say about our pressure washing services.',
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary text-neutral-white">
        <div className="container-custom section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Customer Reviews
            </h1>
            <p className="text-xl text-neutral-white/90 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
        </div>
      </div>
      <TestimonialsDetail />
      <CTASection />
    </div>
  )
}
