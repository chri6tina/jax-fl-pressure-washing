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
          {/* Notification Script - This will track page visits and show notifications on ALL pages */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Simple page visit tracker - runs on every page
                (function() {
                  // Track current page visit
                  function trackPageVisit() {
                    const visitor = {
                      id: Math.random().toString(36).substr(2, 9),
                      timestamp: new Date(),
                      page: window.location.pathname,
                      userAgent: navigator.userAgent,
                      referrer: document.referrer || 'Direct',
                      location: extractLocationFromPath(window.location.pathname),
                      service: extractServiceFromPath(window.location.pathname)
                    };

                    // Save to localStorage for admin dashboard
                    const existingVisitors = localStorage.getItem('recentVisitors');
                    let visitors = [];
                    
                    if (existingVisitors) {
                      try {
                        visitors = JSON.parse(existingVisitors);
                      } catch (error) {
                        visitors = [];
                      }
                    }

                    // Add new visitor and keep last 50
                    visitors = [visitor, ...visitors.slice(0, 49)];
                    localStorage.setItem('recentVisitors', JSON.stringify(visitors));

                    // ALWAYS save visitor data for admin dashboard
                    // Check if admin is logged in and notifications are enabled
                    const isAdmin = localStorage.getItem('adminAuthenticated') === 'true';
                    const soundEnabled = localStorage.getItem('notificationSound') !== 'false';
                    const desktopEnabled = localStorage.getItem('notificationDesktop') === 'true';
                    const soundType = localStorage.getItem('notificationSoundType') || 'ding';
                    
                    // Show notifications if admin is logged in on this device
                    if (isAdmin && desktopEnabled && 'Notification' in window) {
                      showVisitorNotification(visitor);
                    }

                    if (isAdmin && soundEnabled) {
                      playNotificationSound(soundType);
                    }

                    // ALWAYS send a global notification event that other devices can listen to
                    // This ensures notifications work even when you're not logged in on the visitor's device
                    if ('Notification' in window && Notification.permission === 'granted') {
                      // Create a custom event that can be caught by other admin sessions
                      const notificationEvent = new CustomEvent('newVisitor', {
                        detail: {
                          visitor: visitor,
                          timestamp: new Date().toISOString(),
                          shouldNotify: true
                        }
                      });
                      window.dispatchEvent(notificationEvent);
                      
                      // Also try to send a notification to any open admin tabs
                      if (window.opener && window.opener.postMessage) {
                        try {
                          window.opener.postMessage({
                            type: 'newVisitor',
                            visitor: visitor,
                            timestamp: new Date().toISOString()
                          }, '*');
                        } catch (e) {
                          // Cross-origin restrictions might prevent this
                        }
                      }
                    }

                    // Log to console for debugging
                    console.log('🚿 New visitor:', {
                      page: visitor.page,
                      location: visitor.location,
                      service: visitor.service,
                      referrer: visitor.referrer,
                      time: visitor.timestamp.toLocaleTimeString()
                    });
                  }

                  function extractLocationFromPath(path) {
                    const locationMatch = path.match(/\/([^\/]+)$/);
                    if (locationMatch) {
                      const location = locationMatch[1];
                      const locations = [
                        'arlington', 'atlantic-beach', 'avondale', 'eastside',
                        'jacksonville-beach', 'mandarin', 'neptune-beach', 'northside',
                        'ortega', 'ponte-vedra', 'riverside', 'san-marco',
                        'southside', 'westside'
                      ];
                      if (locations.includes(location)) {
                        return location.charAt(0).toUpperCase() + location.slice(1);
                      }
                    }
                    return undefined;
                  }

                  function extractServiceFromPath(path) {
                    const serviceMatch = path.match(/\/services\/([^\/]+)/);
                    if (serviceMatch) {
                      const service = serviceMatch[1];
                      return service.split('-').map(word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(' ');
                    }
                    return undefined;
                  }

                  function showVisitorNotification(visitor) {
                    if ('Notification' in window && Notification.permission === 'granted') {
                      const notification = new Notification('🚿 New Visitor Alert!', {
                        body: \`\${visitor.location ? visitor.location + ' - ' : ''}\${visitor.service ? visitor.service + ' - ' : ''}\${visitor.page}\`,
                        icon: '/new_logo_v2.png',
                        badge: '/new_logo_v2.png',
                        tag: 'visitor-notification',
                        requireInteraction: false,
                        silent: false
                      });

                      // Auto-close after 5 seconds
                      setTimeout(() => notification.close(), 5000);

                      // Click to focus window
                      notification.onclick = () => {
                        window.focus();
                        notification.close();
                      };
                    }
                  }

                  function playNotificationSound(soundType) {
                    try {
                      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                      const oscillator = audioContext.createOscillator();
                      const gainNode = audioContext.createGain();

                      oscillator.connect(gainNode);
                      gainNode.connect(audioContext.destination);

                      // Create different sounds based on type
                      switch (soundType) {
                        case 'chime':
                          oscillator.frequency.setValueAtTime(523, audioContext.currentTime);
                          oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.1);
                          oscillator.frequency.setValueAtTime(784, audioContext.currentTime + 0.2);
                          break;
                        case 'bell':
                          oscillator.frequency.setValueAtTime(1046, audioContext.currentTime);
                          oscillator.frequency.setValueAtTime(880, audioContext.currentTime + 0.1);
                          oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.2);
                          break;
                        default: // ding
                          oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                          oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
                          oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.2);
                      }

                      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

                      oscillator.start(audioContext.currentTime);
                      oscillator.stop(audioContext.currentTime + 0.3);
                    } catch (error) {
                      console.log('Audio notification not supported');
                    }
                  }

                  // Track page visit on load
                  trackPageVisit();

                  // Track page visits on navigation (for SPA)
                  const handleRouteChange = () => {
                    setTimeout(trackPageVisit, 100);
                  };

                  // Listen for route changes
                  window.addEventListener('popstate', handleRouteChange);
                  
                  // Custom event for Next.js route changes
                  window.addEventListener('routeChange', handleRouteChange);

                  // Make functions globally available for testing
                  window.testNotification = function() {
                    const testVisitor = {
                      id: 'test',
                      timestamp: new Date(),
                      page: '/test-page',
                      userAgent: 'Test Browser',
                      referrer: 'Test',
                      location: 'Mandarin',
                      service: 'House Washing'
                    };
                    
                    showVisitorNotification(testVisitor);
                    playNotificationSound('ding');
                  };
                })();
              `
            }}
          />
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
