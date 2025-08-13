
// Content performance monitoring
export function trackContentPerformance() {
  if (typeof window !== 'undefined') {
    // Track content engagement
    const trackEngagement = () => {
      // Scroll depth tracking
      let maxScrollDepth = 0;
      const trackScrollDepth = () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        if (scrollPercent > maxScrollDepth) {
          maxScrollDepth = scrollPercent;
          
          // Send to analytics if needed
          if (typeof gtag !== 'undefined') {
            gtag('event', 'scroll_depth', {
              event_category: 'engagement',
              event_label: 'content',
              value: Math.round(maxScrollDepth)
            });
          }
        }
      };
      
      window.addEventListener('scroll', trackScrollDepth);
      
      // Time on page tracking
      let startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeOnPage = Date.now() - startTime;
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'time_on_page', {
            event_category: 'engagement',
            event_label: 'content',
            value: Math.round(timeOnPage / 1000)
          });
        }
      };
      
      // Track when user leaves page
      window.addEventListener('beforeunload', trackTimeOnPage);
      
      // CTA click tracking
      const trackCTAClicks = () => {
        const ctaButtons = document.querySelectorAll('a[href*="contact"], a[href*="tel:"], button');
        
        ctaButtons.forEach(button => {
          button.addEventListener('click', () => {
            if (typeof gtag !== 'undefined') {
              gtag('event', 'cta_click', {
                event_category: 'conversion',
                event_label: button.textContent?.trim() || 'CTA Button',
                value: 1
              });
            }
          });
        });
      };
      
      // Track form interactions
      const trackFormInteractions = () => {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
          form.addEventListener('submit', () => {
            if (typeof gtag !== 'undefined') {
              gtag('event', 'form_submit', {
                event_category: 'conversion',
                event_label: 'Contact Form',
                value: 1
              });
            }
          });
        });
      };
      
      trackCTAClicks();
      trackFormInteractions();
    };
    
    // Initialize tracking
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', trackEngagement);
    } else {
      trackEngagement();
    }
  }
}