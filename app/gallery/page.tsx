import { Metadata } from 'next'
import GalleryGrid from '@/components/GalleryGrid'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Gallery - Jax FL Pressure Washing',
  description: 'View our pressure washing before and after results. See the transformation of driveways, houses, roofs, and more in Jacksonville.',
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary text-neutral-white">
        <div className="container-custom section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Work
            </h1>
            <p className="text-xl text-neutral-white/90 max-w-3xl mx-auto">
              See the amazing transformations we've achieved for our Jacksonville customers
            </p>
          </div>
        </div>
      </div>
      <GalleryGrid />
      <CTASection />
    </div>
  )
}
