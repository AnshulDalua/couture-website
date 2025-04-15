"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import IntroAnimation from "@/app/components/IntroAnimation"
import ImagePreloader from "@/app/components/ImagePreloader"
import OptimizedImage from "@/app/components/OptimizedImage"
import { motion, AnimatePresence } from "framer-motion"
import Cookies from 'js-cookie'
import Head from 'next/head'

// Array of images to rotate through
const images = [
  "/homepage/v1.webp",
  "/homepage/z1.webp",
  "/homepage/ary1.webp",
  "/homepage/janssen1.webp"
]

export default function HomePage() {
  // State to store the current image - initialize as null to prevent flash
  const [currentImage, setCurrentImage] = useState<string | null>(null)
  // State to control showing the intro animation
  const [showIntro, setShowIntro] = useState(false)
  // State to track if main content is ready to display
  const [contentReady, setContentReady] = useState(false)
  // Router for navigation
  const router = useRouter()

  // Function to handle image click and redirect to products page
  const handleImageClick = () => {
    router.push('/products')
  }

  // Check if animation has been shown before and set initial state
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const hasSeenAnimation = Cookies.get('hasSeenAnimation')
      
      // Only show animation if user hasn't seen it before
      if (!hasSeenAnimation) {
        setShowIntro(true)
        // Mark that user has seen the animation - expires in 30 days
        Cookies.set('hasSeenAnimation', 'true', { expires: 30 })
      } else {
        // Skip animation and show content immediately
        setContentReady(true)
      }
    }
  }, [])
  
  // Load a random image in the background, but don't wait for it
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') return;
    
    // Always select a new random image on each page load
    const randomIndex = Math.floor(Math.random() * images.length);
    
    // Immediately set the current image to prevent flashing
    const selectedImage = images[randomIndex];
    setCurrentImage(selectedImage);
    
    // Use the global window.Image constructor instead of just Image
    // This avoids conflict with the imported Next.js Image component
    const imgLoader = new window.Image()
    
    // Add error handling for the image load
    imgLoader.onerror = () => {
      console.error("Failed to load image:", selectedImage)
      // Only set content ready, image is already set
      setContentReady(true)
    }
    
    imgLoader.onload = () => {
      // Image is already set, just mark content as ready
      setContentReady(true)
    }
    
    // Set the src after setting up the event handlers
    imgLoader.src = selectedImage
  }, []) // Only run once on component mount, not when contentReady changes
  
  return (
    <div className="bg-white">
      {/* Preload product images during intro animation */}
      {showIntro && <ImagePreloader />}
      
      <IntroAnimation 
        isVisible={showIntro}
        onComplete={() => {
          // Only hide the intro when both conditions are met:
          // 1. Animation is complete
          // 2. Content is ready to display
          if (contentReady) {
            setShowIntro(false)
          } else {
            // If content isn't ready, set up a short timer to check again
            const checkContentReady = setInterval(() => {
              if (contentReady) {
                setShowIntro(false)
                clearInterval(checkContentReady)
              }
            }, 100)
            
            // Clean up in case component unmounts
            setTimeout(() => clearInterval(checkContentReady), 3000)
          }
        }} 
      />
      
      <AnimatePresence>
        {(!showIntro || contentReady) && (
          <motion.div 
            className="h-[calc(100vh-120px)] flex items-center md:items-start justify-center px-2 md:px-2 md:pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Desktop Version - Three images side by side */}
            <div className="hidden md:block relative w-full max-w-[98%]">
              <div className="flex w-full">
                {currentImage && [1, 2, 3].map((index) => (
                  <div key={index} className="relative w-1/3 h-[80vh]">
                    <Image
                      src={currentImage}
                      alt="IKIGAI Featured Collection - High quality custom merchandise"
                      priority={index === 1}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                ))}
              </div>
              
              {/* Overlay text for desktop - single line */}
              <div 
                className="absolute bottom-16 right-6 z-10 cursor-pointer" 
                onClick={handleImageClick}
              >
                <h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-right whitespace-nowrap" 
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                >
                  NOT NORMAL MERCH
                </h1>
              </div>
            </div>

            {/* Mobile Version - Single image */}
            <div className="md:hidden relative w-full h-full">
              {currentImage && (
                <Image
                  src={currentImage}
                  alt="IKIGAI Featured Collection"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              )}
              
              {/* Overlay text for mobile - kept on multiple lines but larger */}
              <div className="absolute bottom-12 right-6 text-right z-10">
                <h1 
                  className="text-5xl font-bold text-white" 
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                >
                  NOT<br />NORMAL<br />MERCH
                </h1>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
