import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pressure Washing Ortega, Jacksonville FL | Riverside Elegance Specialists | Jax FL Pressure Washing',
  description: 'Professional pressure washing services in Ortega, Jacksonville FL. Specialized riverside elegance cleaning for historic homes and mature landscaping. House washing, roof cleaning, driveway restoration, and riverside protection. Serving Ortega Historic District, Ortega Farms, Ortega Forest. Free estimates available.',
  keywords: 'pressure washing Ortega Jacksonville FL, pressure washing Ortega Jacksonville, house washing Ortega, roof cleaning Ortega, driveway cleaning Ortega, riverside pressure washing Ortega, historic home cleaning Ortega, riverside protection Ortega, soft wash Ortega',
  openGraph: {
    title: 'Pressure Washing Ortega, Jacksonville FL | Riverside Elegance Specialists',
    description: 'Professional pressure washing services in Ortega, Jacksonville FL. Specialized riverside elegance cleaning for historic homes and mature landscaping.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/locations/ortega',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/locations/ortega',
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

export default function OrtegaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
