"use client"

import { useEffect } from 'react'

export default function CssOptimizer() {
  useEffect(() => {
    // Inline critical CSS (already in the document head)
    // Load non-critical CSS after page load
    const loadNonCriticalCSS = () => {
      const links = document.querySelectorAll<HTMLLinkElement>('link[data-non-critical]')
      links.forEach(link => {
        if (link instanceof HTMLLinkElement) {
          link.rel = 'stylesheet'
        }
      })

      // Load Google Fonts after page load
      const fontLink = document.createElement('link')
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,400&display=swap'
      fontLink.rel = 'stylesheet'
      document.head.appendChild(fontLink)
    }

    if (document.readyState === 'complete') {
      loadNonCriticalCSS()
    } else {
      window.addEventListener('load', loadNonCriticalCSS)
    }

    return () => {
      window.removeEventListener('load', loadNonCriticalCSS)
    }
  }, [])

  return null
}
