import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pressure Washing Avondale, Jacksonville FL | Upscale Residential Specialists | Jax FL Pressure Washing',
  description: 'Professional pressure washing services in Avondale, Jacksonville FL. Specialized upscale residential cleaning for historic homes and mature landscaping. House washing, roof cleaning, driveway restoration, and landscape protection. Serving Avondale Historic District, Avondale Estates, Avondale Gardens. Free estimates available.',
  keywords: 'pressure washing Avondale Jacksonville FL, pressure washing Avondale Jacksonville, house washing Avondale, roof cleaning Avondale, driveway cleaning Avondale, upscale residential pressure washing Avondale, historic home cleaning Avondale, landscape protection Avondale, soft wash Avondale',
  openGraph: {
    title: 'Pressure Washing Avondale, Jacksonville FL | Upscale Residential Specialists',
    description: 'Professional pressure washing services in Avondale, Jacksonville FL. Specialized upscale residential cleaning for historic homes and mature landscaping.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/locations/avondale',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/locations/avondale',
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

export default function AvondaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
