// Google Analytics 4 Configuration
export const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with your actual GA4 ID

// Page view tracking
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    })
  }
}

// Custom event tracking
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Enhanced ecommerce tracking
export const trackServiceInterest = (serviceName, location, source) => {
  event({
    action: 'service_interest',
    category: 'engagement',
    label: `${serviceName} - ${location}`,
    value: 1
  })
  
  // Track source
  if (source) {
    event({
      action: 'traffic_source',
      category: 'acquisition',
      label: source,
      value: 1
    })
  }
}

// Local SEO tracking
export const trackLocalSearch = (searchTerm, location, results) => {
  event({
    action: 'local_search',
    category: 'local_seo',
    label: `${searchTerm} - ${location}`,
    value: results
  })
}

// Contact form tracking
export const trackContactForm = (formType, location, source) => {
  event({
    action: 'contact_form_submit',
    category: 'conversion',
    label: `${formType} - ${location} - ${source}`,
    value: 1
  })
}

// Phone call tracking
export const trackPhoneCall = (phoneNumber, location, source) => {
  event({
    action: 'phone_call',
    category: 'conversion',
    label: `${phoneNumber} - ${location} - ${source}`,
    value: 1
  })
}

// Page performance tracking
export const trackPagePerformance = (pageName, loadTime, coreWebVitals) => {
  event({
    action: 'page_performance',
    category: 'performance',
    label: pageName,
    value: Math.round(loadTime)
  })
  
  // Track Core Web Vitals
  if (coreWebVitals) {
    Object.entries(coreWebVitals).forEach(([metric, value]) => {
      event({
        action: `${metric}_score`,
        category: 'performance',
        label: pageName,
        value: Math.round(value)
      })
    })
  }
}