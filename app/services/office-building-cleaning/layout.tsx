import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Office Building Cleaning Jacksonville FL | Commercial Building Care | Jax FL Pressure Washing',
  description: 'Professional office building cleaning services in Jacksonville FL. Maintain professional appearance, ensure safety compliance, and enhance property value. Free estimates available.',
  keywords: 'office building cleaning Jacksonville FL, commercial building cleaning Jacksonville, high-rise cleaning Jacksonville, building facade cleaning Jacksonville, office complex cleaning Jacksonville, professional building maintenance Jacksonville',
  openGraph: {
    title: 'Office Building Cleaning Jacksonville FL | Commercial Building Care',
    description: 'Professional office building cleaning services in Jacksonville FL. Maintain professional appearance, ensure safety compliance, and enhance property value.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/services/office-building-cleaning',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/services/office-building-cleaning',
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

export default function OfficeBuildingCleaningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
