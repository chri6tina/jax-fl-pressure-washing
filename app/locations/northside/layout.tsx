import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pressure Washing Northside, Jacksonville FL | Industrial & Commercial Specialists | Jax FL Pressure Washing',
  description: 'Professional pressure washing services in Northside, Jacksonville FL. Specialized industrial and commercial cleaning for manufacturing facilities and business properties. Factory washing, industrial equipment cleaning, safety compliance, and 24/7 availability. Serving Northside Industrial District, Northside Business Park. Free estimates available.',
  keywords: 'pressure washing Northside Jacksonville FL, pressure washing Northside Jacksonville, industrial pressure washing Northside, commercial pressure washing Northside, factory washing Northside, industrial cleaning Northside, safety compliance Northside, 24/7 pressure washing Northside',
  openGraph: {
    title: 'Pressure Washing Northside, Jacksonville FL | Industrial & Commercial Specialists',
    description: 'Professional pressure washing services in Northside, Jacksonville FL. Specialized industrial and commercial cleaning for manufacturing facilities and business properties.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/locations/northside',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/locations/northside',
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

export default function NorthsideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
