'use client'

import { useEffect } from 'react'

// Performance optimization component
export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/new_logo_v2.png', as: 'image' },
      { rel: 'preload', href: '/hero_section.png', as: 'image' },
      { rel: 'dns-prefetch', href: 'https://images.unsplash.com' },
      { rel: 'preconnect', href: 'https://images.unsplash.com' }
    ]
    
    preloadLinks.forEach(link => {
      const linkElement = document.createElement('link')
      Object.assign(linkElement, link)
      document.head.appendChild(linkElement)
    })
    
    // Cleanup function
    return () => {
      preloadLinks.forEach(link => {
        const existingLink = document.querySelector(`link[href="${link.href}"]`)
        if (existingLink) {
          existingLink.remove()
        }
      })
    }
  }, [])
  
  return null
}