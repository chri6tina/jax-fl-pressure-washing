import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact Us - Jax FL Pressure Washing',
  description: 'Get a free quote for pressure washing services in Jacksonville. Contact us today for professional, eco-friendly cleaning solutions.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary text-neutral-white">
        <div className="container-custom section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-neutral-white/90 max-w-3xl mx-auto">
              Ready to transform your property? Get your free quote today!
            </p>
          </div>
        </div>
      </div>
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}
