// Custom easing functions for smooth scrolling
export const easings = {
  // Smooth ease-in-out (default)
  easeInOutCubic: (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  },

  // Smooth ease-out for natural deceleration
  easeOutQuart: (t: number): number => {
    return 1 - Math.pow(1 - t, 4)
  },

  // Smooth ease-in-out with slight bounce
  easeInOutBack: (t: number): number => {
    const c1 = 1.70158
    const c2 = c1 * 1.525
    return t < 0.5
      ? (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
      : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2
  },

  // Linear (no easing)
  linear: (t: number): number => t
}

interface SmoothScrollOptions {
  duration?: number
  easing?: keyof typeof easings | ((t: number) => number)
  offset?: number
  callback?: () => void
}

// Smooth scroll to element
export function smoothScrollTo(
  target: string | HTMLElement | number,
  options: SmoothScrollOptions = {}
): void {
  const {
    duration = 800,
    easing = 'easeInOutCubic',
    offset = 0,
    callback
  } = options

  let targetPosition: number

  if (typeof target === 'number') {
    targetPosition = target
  } else if (typeof target === 'string') {
    const element = document.querySelector(target)
    if (!element) return
    targetPosition = element.getBoundingClientRect().top + window.pageYOffset
  } else {
    targetPosition = target.getBoundingClientRect().top + window.pageYOffset
  }

  targetPosition = targetPosition + offset

  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  const startTime = performance.now()

  const easingFunction = typeof easing === 'function'
    ? easing
    : easings[easing] || easings.easeInOutCubic

  function animation(currentTime: number): void {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = easingFunction(progress)

    window.scrollTo(0, startPosition + distance * easedProgress)

    if (progress < 1) {
      requestAnimationFrame(animation)
    } else {
      if (callback) callback()
    }
  }

  requestAnimationFrame(animation)
}

// Initialize smooth scrolling for all anchor links
export function initSmoothScroll(): void {
  // Add CSS for smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'auto' // We handle it with JS

  // Handle anchor links
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const link = target.closest('a[href^="#"]') as HTMLAnchorElement

    if (!link) return

    const href = link.getAttribute('href')
    if (!href || href === '#') return

    e.preventDefault()

    // Check if it's a navigation link
    const isNavLink = link.closest('nav') || link.classList.contains('nav-link')

    smoothScrollTo(href, {
      duration: isNavLink ? 600 : 800,
      easing: isNavLink ? 'easeOutQuart' : 'easeInOutCubic',
      offset: -80 // Account for sticky header
    })
  })

  // Smooth scroll for programmatic navigation
  window.smoothScroll = smoothScrollTo
}

// Add to window object for global access
declare global {
  interface Window {
    smoothScroll: typeof smoothScrollTo
  }
}
