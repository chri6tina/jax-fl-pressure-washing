// Keyboard navigation utilities
export const keyboardNavigation = {
  // Focus trap for modals
  createFocusTrap: (container) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]
    
    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }
    
    container.addEventListener('keydown', handleTabKey)
    
    // Return cleanup function
    return () => container.removeEventListener('keydown', handleTabKey)
  },

  // Handle arrow key navigation
  handleArrowKeys: (items, currentIndex, onIndexChange) => {
    return (e) => {
      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault()
          const nextIndex = (currentIndex + 1) % items.length
          onIndexChange(nextIndex)
          break
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault()
          const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1
          onIndexChange(prevIndex)
          break
        case 'Home':
          e.preventDefault()
          onIndexChange(0)
          break
        case 'End':
          e.preventDefault()
          onIndexChange(items.length - 1)
          break
      }
    }
  },

  // Skip to content functionality
  skipToContent: (targetId) => {
    const target = document.getElementById(targetId)
    if (target) {
      target.focus()
      target.scrollIntoView({ behavior: 'smooth' })
    }
  },

  // Announce changes to screen readers
  announceToScreenReader: (message) => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', 'polite')
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message
    
    document.body.appendChild(announcement)
    
    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }
}

// Focus management utilities
export const focusManagement = {
  // Store and restore focus
  storeFocus: () => {
    return document.activeElement
  },
  
  restoreFocus: (element) => {
    if (element && typeof element.focus === 'function') {
      element.focus()
    }
  },
  
  // Move focus to first focusable element
  focusFirstElement: (container) => {
    const focusable = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length > 0) {
      focusable[0].focus()
    }
  },
  
  // Check if element is focusable
  isFocusable: (element) => {
    if (!element) return false
    
    const tag = element.tagName.toLowerCase()
    const tabIndex = element.getAttribute('tabindex')
    
    if (tag === 'input' && element.type === 'hidden') return false
    if (element.disabled) return false
    if (tabIndex === '-1') return false
    
    return true
  }
}