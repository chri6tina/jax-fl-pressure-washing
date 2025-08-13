// Mobile-first responsive utilities
export const mobileBreakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}

export const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

export const isTablet = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 768 && window.innerWidth < 1024
}

export const isDesktop = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 1024
}

export const getDeviceType = () => {
  if (isMobile()) return 'mobile'
  if (isTablet()) return 'tablet'
  return 'desktop'
}

// Responsive spacing utilities
export const mobileSpacing = {
  section: 'py-8 md:py-12 lg:py-16',
  container: 'px-4 md:px-6 lg:px-8',
  text: {
    h1: 'text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
    h2: 'text-xl md:text-2xl lg:text-3xl xl:text-4xl',
    h3: 'text-lg md:text-xl lg:text-2xl xl:text-3xl',
    body: 'text-sm md:text-base lg:text-lg',
    small: 'text-xs md:text-sm'
  }
}

// Touch-friendly sizing
export const touchSizing = {
  button: 'min-h-[44px] min-w-[44px]',
  link: 'min-h-[44px] min-w-[44px]',
  input: 'min-h-[44px]',
  icon: 'w-6 h-6 md:w-8 md:h-8'
}