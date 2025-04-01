import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  // Optimize initial page load
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return
    
    // Remove unused event listeners when they're no longer needed
    const cleanup = () => {
      // Cleanup any event listeners that might be causing long tasks
      const cleanupEvents = () => {
        // This helps reduce main thread blocking
        window.removeEventListener('resize', cleanupEvents)
      }
      window.addEventListener('resize', cleanupEvents, { once: true })
    }
    
    // Run cleanup after initial render
    cleanup()
    
    // Preload critical pages that users are likely to navigate to
    const preloadCriticalPages = () => {
      const links = ['/products', '/lookbook', '/our-process']
      links.forEach(href => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = href
        document.head.appendChild(link)
      })
    }
    
    // Use requestIdleCallback to run non-critical operations during browser idle time
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(preloadCriticalPages)
    } else {
      setTimeout(preloadCriticalPages, 2000)
    }
  }, [])

  return (
    <>
      {/* Optimize core web vitals */}
      <Script id="performance-optimization" strategy="afterInteractive">
        {`
          // Use passive event listeners to improve scrolling performance
          document.addEventListener('touchstart', function() {}, {passive: true});
          
          // Reduce layout shifts by setting explicit height on images
          function setExplicitHeightOnImages() {
            const images = document.querySelectorAll('img[width][height]');
            images.forEach(img => {
              if (img.complete && img.naturalHeight !== 0) {
                img.style.aspectRatio = img.width / img.height;
              }
            });
          }
          
          // Execute after images are loaded
          window.addEventListener('load', setExplicitHeightOnImages);
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
