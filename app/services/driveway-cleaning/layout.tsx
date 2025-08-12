import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Driveway & Concrete Cleaning Jacksonville FL | Professional Concrete Restoration | Jax FL Pressure Washing',
  description: 'Professional driveway and concrete cleaning services in Jacksonville FL. Remove oil stains, restore beauty, and protect your investment with advanced cleaning technology. Free estimates available.',
  keywords: 'driveway cleaning Jacksonville FL, concrete cleaning Jacksonville, paver cleaning Jacksonville, oil stain removal Jacksonville, concrete sealing Jacksonville, garage floor cleaning Jacksonville, sidewalk cleaning Jacksonville',
  openGraph: {
    title: 'Driveway & Concrete Cleaning Jacksonville FL | Professional Concrete Restoration',
    description: 'Professional driveway and concrete cleaning services in Jacksonville FL. Remove oil stains, restore beauty, and protect your investment.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/services/driveway-cleaning',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/services/driveway-cleaning',
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

export default function DrivewayCleaningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
