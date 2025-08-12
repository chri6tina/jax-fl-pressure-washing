import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pressure Washing Mandarin, Jacksonville FL | Suburban Home Specialists | Jax FL Pressure Washing',
  description: 'Family-focused pressure washing services in Mandarin, Jacksonville FL. Suburban home specialists for family properties, established communities, and mature landscaping. House washing, roof cleaning, driveway restoration, and gutter maintenance. Serving Mandarin Gardens, Mandarin Lakes, Mandarin Cove. Free estimates available.',
  keywords: 'pressure washing Mandarin Jacksonville, pressure washing Mandarin FL, suburban home washing Mandarin, family property cleaning Mandarin, house washing Mandarin Jacksonville, roof cleaning Mandarin Jacksonville, driveway cleaning Mandarin, gutter cleaning Mandarin, suburban pressure washing Jacksonville, family home cleaning Mandarin',
  openGraph: {
    title: 'Pressure Washing Mandarin, Jacksonville FL | Suburban Home Specialists',
    description: 'Family-focused pressure washing services for suburban homes in Mandarin, Jacksonville. Serving established communities with mature landscaping.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/locations/mandarin',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/locations/mandarin',
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

export default function MandarinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
