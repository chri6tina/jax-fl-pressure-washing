import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pressure Washing Ponte Vedra Beach, FL | Luxury Home Specialists | Jax FL Pressure Washing',
  description: 'Premium pressure washing services in Ponte Vedra Beach, FL. Luxury home specialists for coastal properties, golf course communities, and upscale neighborhoods. Soft wash, roof cleaning, driveway restoration, and commercial services. Serving Ponte Vedra Beach, Sawgrass, Marsh Landing. Free estimates available.',
  keywords: 'pressure washing Ponte Vedra Beach, pressure washing Ponte Vedra FL, luxury home washing Ponte Vedra, coastal property cleaning Ponte Vedra, soft wash Ponte Vedra Beach, roof cleaning Ponte Vedra Beach, driveway cleaning Ponte Vedra, commercial pressure washing Ponte Vedra, golf course pressure washing Ponte Vedra, upscale home cleaning Ponte Vedra',
  openGraph: {
    title: 'Pressure Washing Ponte Vedra Beach, FL | Luxury Home Specialists',
    description: 'Premium pressure washing services for luxury homes in Ponte Vedra Beach. Coastal property experts serving Sawgrass, Marsh Landing, and Ponte Vedra Lakes.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/locations/ponte-vedra',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/locations/ponte-vedra',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function PonteVedraLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
