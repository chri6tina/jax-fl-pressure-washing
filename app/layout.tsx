import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './accessibility.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'
import PerformanceOptimizer from '@/components/PerformanceOptimizer'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import TouchOptimizer from '@/components/TouchOptimizer'
import AccessibilityNavigation from '@/components/AccessibilityNavigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jax FL Pressure Washing - Professional & Eco-Friendly Cleaning Services Jacksonville FL',
  description: 'Professional pressure washing and soft-wash services in Jacksonville, Florida. Eco-friendly, licensed, and insured. House washing, driveway cleaning, roof cleaning, and more. Serving Arlington, Atlantic Beach, Avondale, Eastside, Jacksonville Beach, Mandarin, Neptune Beach, Northside, Ortega, Ponte Vedra, Riverside, San Marco, Southside, and Westside.',
  keywords: 'pressure washing Jacksonville FL, house washing Jacksonville, driveway cleaning Jacksonville, roof cleaning Jacksonville, soft wash Jacksonville, eco-friendly pressure washing, professional pressure washing, Jacksonville pressure washing services',
  authors: [{ name: 'Jax FL Pressure Washing' }],
  creator: 'Jax FL Pressure Washing',
  publisher: 'Jax FL Pressure Washing',
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
  alternates: {
    canonical: 'https://jaxflpressurewashing.com',
  },
  openGraph: {
    title: 'Jax FL Pressure Washing - Professional & Eco-Friendly Cleaning Services Jacksonville FL',
    description: 'Professional pressure washing and soft-wash services in Jacksonville, Florida. Eco-friendly, licensed, and insured.',
    url: 'https://jaxflpressurewashing.com',
    siteName: 'Jax FL Pressure Washing',
    images: [
      {
        url: '/hero_section.png',
        width: 1200,
        height: 630,
        alt: 'Jax FL Pressure Washing - Professional Pressure Washing Services Jacksonville FL',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jax FL Pressure Washing - Professional & Eco-Friendly Cleaning Services Jacksonville FL',
    description: 'Professional pressure washing and soft-wash services in Jacksonville, Florida.',
    images: ['/hero_section.png'],
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
  other: {
    'geo.region': 'US-FL',
    'geo.placename': 'Jacksonville',
    'geo.position': '30.3322;-81.6557',
    'ICBM': '30.3322, -81.6557',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4PVR7ECBZ6"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4PVR7ECBZ6');
            `,
          }}
        />
        
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Jax FL Pressure Washing',
              url: 'https://jaxflpressurewashing.com',
              telephone: '+19044563851',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Jacksonville',
                addressRegion: 'FL',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 30.3322,
                longitude: -81.6557,
              },
              areaServed: [
                'Arlington', 'Atlantic Beach', 'Avondale', 'Eastside',
                'Jacksonville Beach', 'Mandarin', 'Neptune Beach', 'Northside',
                'Ortega', 'Ponte Vedra', 'Riverside', 'San Marco',
                'Southside', 'Westside'
              ],
              serviceArea: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 30.3322,
                  longitude: -81.6557,
                },
                geoRadius: '50000',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Pressure Washing Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'House Washing',
                      description: 'Professional house washing and soft-wash services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Driveway Cleaning',
                      description: 'Concrete and paver driveway cleaning services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Roof Cleaning',
                      description: 'Safe roof cleaning and maintenance services',
                    },
                  },
                ],
              },
            }),
          }}
        />
      
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
        <meta name="theme-color" content="#00C5F5" />
        <meta name="msapplication-TileColor" content="#00C5F5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Jax FL Pressure Washing" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Accessibility Meta Tags */}
        <meta name="accessibility" content="WCAG 2.1 AA compliant" />
        <meta name="accessibility-feature" content="high-contrast, large-text, reduced-motion" />
        <meta name="accessibility-control" content="full-keyboard-navigation" />
        <meta name="accessibility-hazard" content="none" />
      </head>
      <body className={inter.className}>
        <PerformanceOptimizer />
        <AccessibilityNavigation />
        <PerformanceMonitor pageName="layout" />
        <TouchOptimizer />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow" id="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
