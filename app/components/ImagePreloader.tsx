"use client"

import { useEffect } from 'react'

// List of all product images to preload
const productImages = [
  "/shop/7.webp",  // Heavyweight Hoodie
  "/shop/6.webp",  // Heavyweight Crewneck
  "/shop/3.webp",  // Classic Quarterzip
  "/shop/5.webp",  // Straightcut Sweatpants
  "/shop/2.webp",  // Classic Tshirt
  "/shop/1.webp",  // Additional product images
  "/shop/4.webp",
  "/shop/9.webp",
  "/shop/19000016.webp",
  "/shop/19000029.webp",
  "/shop/19000034.webp",
  "/shop/346048sinh002946-R1-065-31.webp",
  "/shop/346048sinh002946-R1-077-37.webp",
  "/shop/sinh001485-R1-025-11.webp",
  "/shop/339344sin002250-R1-035-16.webp"
]

// List of lookbook images to preload
const lookbookImages = [
  "/lookbook/19000034.webp",
  "/lookbook/Couture-AXO-22.webp",
  "/lookbook/Couture-AXO-26.webp",
  "/lookbook/GEC5PTe8uxKZavqgo3m795moqU0.webp",
  "/lookbook/KJRAgt7DZiKyfgWFlAFbqMIopQ.webp",
  "/lookbook/NjIQS8yGyr46mzcULQwyoq2nCE.webp"
]

export default function ImagePreloader() {
  useEffect(() => {
    // Create a hidden image element for each image to preload
    const preloadImages = (imagePaths: string[]) => {
      imagePaths.forEach(path => {
        const img = new Image()
        img.src = path
        // Set low loading priority to avoid competing with critical resources
        img.fetchPriority = 'low'
        // No need to append to DOM, just creating the Image object triggers preloading
      })
    }

    // Use requestIdleCallback to preload images when the browser is idle
    if ('requestIdleCallback' in window) {
      // @ts-ignore - TypeScript doesn't recognize requestIdleCallback
      window.requestIdleCallback(() => {
        preloadImages(productImages)
      }, { timeout: 5000 })
      
      // @ts-ignore - TypeScript doesn't recognize requestIdleCallback
      window.requestIdleCallback(() => {
        preloadImages(lookbookImages)
      }, { timeout: 8000 })
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(() => {
        preloadImages(productImages)
        setTimeout(() => preloadImages(lookbookImages), 1000)
      }, 3000)
    }
  }, [])

  // This component doesn't render anything visible
  return null
}
