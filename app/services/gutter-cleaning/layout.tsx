import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gutter Cleaning Jacksonville FL | Professional Gutter Maintenance | Jax FL Pressure Washing',
  description: 'Professional gutter cleaning and maintenance services in Jacksonville FL. Prevent water damage, protect your foundation, and maintain proper drainage. Free estimates available.',
  keywords: 'gutter cleaning Jacksonville FL, gutter maintenance Jacksonville, downspout cleaning Jacksonville, gutter guards Jacksonville, gutter repair Jacksonville, foundation protection Jacksonville',
  openGraph: {
    title: 'Gutter Cleaning Jacksonville FL | Professional Gutter Maintenance',
    description: 'Professional gutter cleaning and maintenance services in Jacksonville FL. Prevent water damage and protect your foundation.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/services/gutter-cleaning',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/services/gutter-cleaning',
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

export default function GutterCleaningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
