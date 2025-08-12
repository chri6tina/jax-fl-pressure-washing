import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'House Washing (Soft Wash) Jacksonville FL | Professional Exterior Cleaning | Jax FL Pressure Washing',
  description: 'Professional house washing and soft-wash services in Jacksonville FL. Safe, eco-friendly exterior cleaning for vinyl siding, stucco, brick, wood, gutters, windows, and more. Free estimates available.',
  keywords: 'house washing Jacksonville FL, soft wash Jacksonville, exterior house cleaning Jacksonville, vinyl siding cleaning Jacksonville, stucco cleaning Jacksonville, brick cleaning Jacksonville, gutter cleaning Jacksonville, window cleaning Jacksonville',
  openGraph: {
    title: 'House Washing (Soft Wash) Jacksonville FL | Professional Exterior Cleaning',
    description: 'Professional house washing and soft-wash services in Jacksonville FL. Safe, eco-friendly exterior cleaning for all home surfaces.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/services/house-washing',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/services/house-washing',
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

export default function HouseWashingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
