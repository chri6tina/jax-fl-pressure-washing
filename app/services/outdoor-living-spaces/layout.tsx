import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Outdoor Living Spaces Jacksonville FL | Complete Outdoor Care | Jax FL Pressure Washing',
  description: 'Professional outdoor living space cleaning services in Jacksonville FL. Transform outdoor areas, enhance functionality, and create beautiful spaces for entertaining. Free estimates available.',
  keywords: 'outdoor living spaces Jacksonville FL, outdoor kitchen cleaning Jacksonville, fire pit cleaning Jacksonville, outdoor furniture restoration Jacksonville, garden features Jacksonville, outdoor entertainment areas Jacksonville',
  openGraph: {
    title: 'Outdoor Living Spaces Jacksonville FL | Complete Outdoor Care',
    description: 'Professional outdoor living space cleaning services in Jacksonville FL. Transform outdoor areas, enhance functionality, and create beautiful spaces.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/services/outdoor-living-spaces',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/services/outdoor-living-spaces',
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

export default function OutdoorLivingSpacesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
