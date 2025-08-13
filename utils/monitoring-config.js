// Monitoring System Configuration
export const monitoringConfig = {
  // Google Analytics
  googleAnalytics: {
    trackingId: 'G-4PVR7ECBZ6', // Your actual GA4 ID
    enableDebug: false,
    trackPageViews: true,
    trackEvents: true,
    trackEcommerce: true
  },

  // Performance Monitoring
  performance: {
    trackCoreWebVitals: true,
    trackPageLoadTime: true,
    trackResourceTiming: true,
    trackUserInteractions: true,
    alertThresholds: {
      LCP: 2500, // 2.5 seconds
      FID: 100,  // 100 milliseconds
      CLS: 0.1   // 0.1
    }
  },

  // User Behavior Tracking
  userBehavior: {
    trackScrollDepth: true,
    trackTimeOnPage: true,
    trackClicks: true,
    trackFormInteractions: true,
    trackCTAClicks: true,
    trackServiceInterest: true
  },

  // Local SEO Monitoring
  localSEO: {
    trackLocationPages: true,
    trackServicePages: true,
    trackLocalSearches: true,
    trackGeographicTraffic: true,
    trackConversionByLocation: true
  },

  // Error Tracking
  errorTracking: {
    trackJavaScriptErrors: true,
    trackNetworkErrors: true,
    trackPerformanceErrors: true,
    alertOnErrors: true
  },

  // Conversion Tracking
  conversions: {
    trackContactForms: true,
    trackPhoneCalls: true,
    trackQuoteRequests: true,
    trackServiceInquiries: true,
    trackAppointmentBookings: true
  }
}

// Monitoring utilities
export const monitoringUtils = {
  // Check if monitoring is enabled
  isEnabled: (feature) => {
    return monitoringConfig[feature]?.enabled !== false
  },

  // Get configuration for specific feature
  getConfig: (feature) => {
    return monitoringConfig[feature] || {}
  },

  // Validate tracking ID
  validateTrackingId: (id) => {
    return id && id.startsWith('G-') && id.length === 12
  },

  // Check if in development mode
  isDevelopment: () => {
    return process.env.NODE_ENV === 'development'
  }
}