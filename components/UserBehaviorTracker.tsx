'use client'

import { useEffect, useRef } from 'react'
import { event } from '@/utils/analytics'

interface UserBehaviorTrackerProps {
  pageName: string;
  location: string;
  service: string;
}

export default function UserBehaviorTracker({ pageName, location, service }: UserBehaviorTrackerProps) {
  const startTime = useRef(Date.now())
  const scrollDepth = useRef(0)
  const interactions = useRef(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Track scroll depth
      const trackScroll = () => {
        const scrollTop = window.pageYOffset
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = (scrollTop / docHeight) * 100
        
        if (scrollPercent > scrollDepth.current) {
          scrollDepth.current = scrollPercent
          
          // Track significant scroll milestones
          if (scrollPercent >= 25 && scrollDepth.current < 25) {
            event({
              action: 'scroll_25_percent',
              category: 'engagement',
              label: pageName,
              value: 1
            })
          }
          
          if (scrollPercent >= 50 && scrollDepth.current < 50) {
            event({
              action: 'scroll_50_percent',
              category: 'engagement',
              label: pageName,
              value: 1
            })
          }
          
          if (scrollPercent >= 75 && scrollDepth.current < 75) {
            event({
              action: 'scroll_75_percent',
              category: 'engagement',
              label: pageName,
              value: 1
            })
          }
        }
      }

      // Track user interactions
      const trackInteraction = () => {
        interactions.current++
        
        if (interactions.current === 1) {
          event({
            action: 'first_interaction',
            category: 'engagement',
            label: pageName,
            value: 1
          })
        }
      }

      // Track CTA clicks
      const trackCTAClicks = () => {
        event({
          action: 'cta_click',
          category: 'conversion',
          label: `${pageName} - ${location}`,
          value: 1
        })
      }

      // Track form interactions
      const trackFormInteractions = () => {
        event({
          action: 'form_interaction',
          category: 'engagement',
          label: `${pageName} - ${location}`,
          value: 1
        })
      }

      // Track service interest
      const trackServiceInterest = () => {
        event({
          action: 'service_interest',
          category: 'engagement',
          label: `${service} - ${location}`,
          value: 1
        })
      }

      // Add event listeners
      window.addEventListener('scroll', trackScroll)
      document.addEventListener('click', trackInteraction)
      document.addEventListener('input', trackFormInteractions)
      
      // Track CTA elements
      const ctaElements = document.querySelectorAll('a[href*="contact"], a[href*="tel:"], button[class*="cta"]')
      ctaElements.forEach(element => {
        element.addEventListener('click', trackCTAClicks)
      })

      // Track service-related elements
      const serviceElements = document.querySelectorAll('[class*="service"], [class*="cleaning"]')
      serviceElements.forEach(element => {
        element.addEventListener('click', trackServiceInterest)
      })

      // Track time on page when leaving
      const trackTimeOnPage = () => {
        const timeOnPage = Date.now() - startTime.current
        
        event({
          action: 'time_on_page',
          category: 'engagement',
          label: pageName,
          value: Math.round(timeOnPage / 1000)
        })
      }

      window.addEventListener('beforeunload', trackTimeOnPage)

      return () => {
        window.removeEventListener('scroll', trackScroll)
        document.removeEventListener('click', trackInteraction)
        document.removeEventListener('input', trackFormInteractions)
        window.removeEventListener('beforeunload', trackTimeOnPage)
        
        ctaElements.forEach(element => {
          element.removeEventListener('click', trackCTAClicks)
        })
        
        serviceElements.forEach(element => {
          element.removeEventListener('click', trackServiceInterest)
        })
      }
    }
  }, [pageName, location, service])

  return null
}