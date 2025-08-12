import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Warehouse & Factory Cleaning Jacksonville FL | Industrial Facility Care | Jax FL Pressure Washing',
  description: 'Professional warehouse and factory cleaning services in Jacksonville FL. Improve operational efficiency, ensure safety compliance, and maintain professional standards. Free estimates available.',
  keywords: 'warehouse cleaning Jacksonville FL, factory cleaning Jacksonville, industrial facility cleaning Jacksonville, warehouse maintenance Jacksonville, factory maintenance Jacksonville, industrial equipment cleaning Jacksonville',
  openGraph: {
    title: 'Warehouse & Factory Cleaning Jacksonville FL | Industrial Facility Care',
    description: 'Professional warehouse and factory cleaning services in Jacksonville FL. Improve operational efficiency, ensure safety compliance, and maintain professional standards.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/services/warehouse-factory-cleaning',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/services/warehouse-factory-cleaning',
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

export default function WarehouseFactoryCleaningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
