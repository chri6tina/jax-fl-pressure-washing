'use client'

import { useEffect } from 'react'

interface Visitor {
  id: string
  timestamp: Date
  page: string
  userAgent: string
  referrer: string
  location?: string
  service?: string
}

export default function PageVisitorTracker() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Track current page visit
    const trackPageVisit = () => {
      try {
        const visitor: Visitor = {
          id: Math.random().toString(36).substr(2, 9),
          timestamp: new Date(),
          page: window.location.pathname,
          userAgent: navigator.userAgent,
          referrer: document.referrer || 'Direct',
          location: extractLocationFromPath(window.location.pathname),
          service: extractServiceFromPath(window.location.pathname)
        }

        // Save to localStorage for admin dashboard
        const existingVisitors = localStorage.getItem('recentVisitors')
        let visitors: Visitor[] = []
        
        if (existingVisitors) {
          try {
            visitors = JSON.parse(existingVisitors)
          } catch (error) {
            visitors = []
          }
        }

        // Add new visitor and keep last 50
        visitors = [visitor, ...visitors.slice(0, 49)]
        localStorage.setItem('recentVisitors', JSON.stringify(visitors))

        // Check if admin is logged in and notifications are enabled
        const isAdmin = localStorage.getItem('adminAuthenticated') === 'true'
        const soundEnabled = localStorage.getItem('notificationSound') !== 'false'
        const desktopEnabled = localStorage.getItem('notificationDesktop') === 'true'
        const soundType = localStorage.getItem('notificationSoundType') || 'ding'
        
        if (isAdmin && desktopEnabled && 'Notification' in window) {
          showVisitorNotification(visitor)
        }

        if (isAdmin && soundEnabled) {
          playNotificationSound(soundType)
        }

        // Log to console for debugging
        console.log('🚿 New visitor:', {
          page: visitor.page,
          location: visitor.location,
          service: visitor.service,
          referrer: visitor.referrer,
          time: visitor.timestamp.toLocaleTimeString()
        })
      } catch (error) {
        console.log('Error tracking visitor:', error)
      }
    }

    // Track page visit on load
    trackPageVisit()

    // Track page visits on navigation (for SPA)
    const handleRouteChange = () => {
      setTimeout(trackPageVisit, 100) // Small delay to ensure new page is loaded
    }

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange)
    
    // Custom event for Next.js route changes
    window.addEventListener('routeChange', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      window.removeEventListener('routeChange', handleRouteChange)
    }
  }, [])

  const extractLocationFromPath = (path: string): string | undefined => {
    // Extract location from URL patterns like /services/house-washing/arlington
    const locationMatch = path.match(/\/([^\/]+)$/)
    if (locationMatch) {
      const location = locationMatch[1]
      const locations = [
        'arlington', 'atlantic-beach', 'avondale', 'eastside',
        'jacksonville-beach', 'mandarin', 'neptune-beach', 'northside',
        'ortega', 'ponte-vedra', 'riverside', 'san-marco',
        'southside', 'westside'
      ]
      if (locations.includes(location)) {
        return location.charAt(0).toUpperCase() + location.slice(1)
      }
    }
    return undefined
  }

  const extractServiceFromPath = (path: string): string | undefined => {
    // Extract service from URL patterns like /services/house-washing/arlington
    const serviceMatch = path.match(/\/services\/([^\/]+)/)
    if (serviceMatch) {
      const service = serviceMatch[1]
      return service.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    }
    return undefined
  }

  const showVisitorNotification = (visitor: Visitor) => {
    try {
      if ('Notification' in window && Notification.permission === 'granted') {
        const notification = new Notification('🚿 New Visitor Alert!', {
          body: `${visitor.location ? visitor.location + ' - ' : ''}${visitor.service ? visitor.service + ' - ' : ''}${visitor.page}`,
          icon: '/new_logo_v2.png',
          badge: '/new_logo_v2.png',
          tag: 'visitor-notification',
          requireInteraction: false,
          silent: false
        })

        // Auto-close after 5 seconds
        setTimeout(() => notification.close(), 5000)

        // Click to focus window
        notification.onclick = () => {
          window.focus()
          notification.close()
        }
      }
    } catch (error) {
      console.log('Error showing notification:', error)
    }
  }

  const playNotificationSound = (soundType: string) => {
    try {
      // Create audio context for notification sound
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      // Create different sounds based on type
      switch (soundType) {
        case 'chime':
          oscillator.frequency.setValueAtTime(523, audioContext.currentTime) // C
          oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.1) // E
          oscillator.frequency.setValueAtTime(784, audioContext.currentTime + 0.2) // G
          break
        case 'bell':
          oscillator.frequency.setValueAtTime(1046, audioContext.currentTime) // High C
          oscillator.frequency.setValueAtTime(880, audioContext.currentTime + 0.1) // A
          oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.2) // E
          break
        default: // ding
          oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
          oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1)
          oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.2)
      }

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.3)
    } catch (error) {
      console.log('Audio notification not supported')
    }
  }

  // This component doesn't render anything visible
  return null
}
