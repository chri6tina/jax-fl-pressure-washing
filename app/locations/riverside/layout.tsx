import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pressure Washing Riverside, Jacksonville FL | Historic District Specialists | Jax FL Pressure Washing',
  description: 'Professional pressure washing services in Riverside, Jacksonville FL. Specialized historic district cleaning for preservation and urban property maintenance. House washing, roof cleaning, driveway restoration, and commercial services. Serving Riverside Historic District, Five Points, King Street District. Free estimates available.',
  keywords: 'pressure washing Riverside Jacksonville FL, pressure washing Riverside Jacksonville, house washing Riverside, roof cleaning Riverside, driveway cleaning Riverside, commercial pressure washing Riverside, historic building cleaning Riverside, urban property cleaning Riverside, preservation pressure washing Riverside, soft wash Riverside',
  openGraph: {
    title: 'Pressure Washing Riverside, Jacksonville FL | Historic District Specialists',
    description: 'Professional pressure washing services in Riverside, Jacksonville FL. Specialized historic district cleaning for preservation and urban property maintenance.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/locations/riverside',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/locations/riverside',
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

export default function RiversideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
