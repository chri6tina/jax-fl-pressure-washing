// Screen reader support utilities
export const screenReaderSupport = {
  // Generate ARIA labels
  generateAriaLabel: (action, element, context = '') => {
    const labels = {
      button: `${action} ${element}${context ? ' ' + context : ''}`,
      link: `${action} ${element}${context ? ' ' + context : ''}`,
      image: `${element}${context ? ' ' + context : ''}`,
      form: `${element} form${context ? ' ' + context : ''}`
    }
    
    return labels[element] || `${action} ${element}`
  },

  // Add live regions for dynamic content
  addLiveRegion: (id, type = 'polite') => {
    const existing = document.getElementById(id)
    if (existing) return existing
    
    const liveRegion = document.createElement('div')
    liveRegion.id = id
    liveRegion.setAttribute('aria-live', type)
    liveRegion.setAttribute('aria-atomic', 'true')
    liveRegion.className = 'sr-only'
    
    document.body.appendChild(liveRegion)
    return liveRegion
  },

  // Announce dynamic content changes
  announceChange: (message, type = 'polite') => {
    const liveRegion = screenReaderSupport.addLiveRegion('dynamic-announcement', type)
    liveRegion.textContent = message
    
    // Clear after announcement
    setTimeout(() => {
      liveRegion.textContent = ''
    }, 1000)
  },

  // Enhanced image descriptions
  enhanceImageDescription: (image, description) => {
    if (!image) return
    
    // Set alt text
    image.setAttribute('alt', description)
    
    // Add aria-describedby if there's a caption
    const caption = image.nextElementSibling
    if (caption && caption.tagName === 'FIGCAPTION') {
      const captionId = 'caption-' + Math.random().toString(36).substr(2, 9)
      caption.id = captionId
      image.setAttribute('aria-describedby', captionId)
    }
  },

  // Form field associations
  associateFormFields: (field, label) => {
    if (!field || !label) return
    
    const fieldId = field.id || 'field-' + Math.random().toString(36).substr(2, 9)
    const labelId = label.id || 'label-' + Math.random().toString(36).substr(2, 9)
    
    field.id = fieldId
    label.id = labelId
    field.setAttribute('aria-labelledby', labelId)
    
    // Add error handling
    const errorId = 'error-' + fieldId
    field.setAttribute('aria-describedby', errorId)
    field.setAttribute('aria-invalid', 'false')
    
    return { fieldId, labelId, errorId }
  },

  // Status messages
  createStatusMessage: (message, type = 'info') => {
    const statusId = 'status-' + Math.random().toString(36).substr(2, 9)
    const status = document.createElement('div')
    
    status.id = statusId
    status.setAttribute('role', 'status')
    status.setAttribute('aria-live', 'polite')
    status.className = `status-message status-${type} sr-only`
    status.textContent = message
    
    document.body.appendChild(status)
    
    // Remove after a delay
    setTimeout(() => {
      if (status.parentNode) {
        status.parentNode.removeChild(status)
      }
    }, 5000)
    
    return statusId
  }
}