
// Mobile performance monitoring
export function trackMobilePerformance() {
  if (typeof window !== 'undefined') {
    // Track mobile-specific metrics
    const trackMobileMetrics = () => {
      // Device information
      const deviceInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
        screenWidth: screen.width,
        screenHeight: screen.height,
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio,
        orientation: screen.orientation?.type || 'unknown'
      }
      
      // Connection information
      if ('connection' in navigator) {
        const connection = navigator.connection
        deviceInfo.connection = {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData
        }
      }
      
      // Performance metrics
      if ('PerformanceObserver' in window) {
        try {
          // First Contentful Paint (FCP)
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const fcp = entries.find(entry => entry.name === 'first-contentful-paint')
            if (fcp) {
              console.log('Mobile FCP:', fcp.startTime)
              
              // Alert if FCP is slow on mobile
              if (fcp.startTime > 2000) {
                console.warn('Mobile FCP is slow:', fcp.startTime)
              }
            }
          })
          fcpObserver.observe({ entryTypes: ['paint'] })
          
          // Largest Contentful Paint (LCP)
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const lastEntry = entries[entries.length - 1]
            if (lastEntry) {
              console.log('Mobile LCP:', lastEntry.startTime)
              
              // Alert if LCP is slow on mobile
              if (lastEntry.startTime > 2500) {
                console.warn('Mobile LCP is slow:', lastEntry.startTime)
              }
            }
          })
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
          
        } catch (error) {
          console.warn('Mobile performance monitoring error:', error)
        }
      }
      
      // Log device info
      console.log('Mobile Device Info:', deviceInfo)
      
      // Send to analytics if needed
      if (typeof gtag !== 'undefined') {
        gtag('event', 'mobile_performance', {
          event_category: 'performance',
          event_label: deviceInfo.platform,
          value: Math.round(deviceInfo.devicePixelRatio * 100)
        })
      }
    }
    
    // Track on page load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', trackMobileMetrics)
    } else {
      trackMobileMetrics()
    }
    
    // Track on resize (orientation change)
    let resizeTimeout
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(trackMobileMetrics, 250)
    })
    
    // Track on online/offline status change
    window.addEventListener('online', () => {
      console.log('Mobile device is online')
      trackMobileMetrics()
    })
    
    window.addEventListener('offline', () => {
      console.log('Mobile device is offline')
    })
  }
}