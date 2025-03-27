"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import IntroAnimation from "@/app/components/IntroAnimation"
import { motion, AnimatePresence } from "framer-motion"

// Array of images to rotate through
const images = [
  "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/lookbook/19000008.JPG",
  "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/lookbook/339344sin002250-R1-043-20.jpg",
  "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/lookbook/346048sinh002946-R1-057-27.jpg",
  "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/lookbook/sinh001485-R1-027-12.jpg"
]

export default function HomePage() {
  // State to store the current image
  const [currentImage, setCurrentImage] = useState(images[0])
  // State to control showing the intro animation
  const [showIntro, setShowIntro] = useState(true)
  // State to track if main content is ready to display
  const [contentReady, setContentReady] = useState(false)
  
  // Load a random image in the background, but don't wait for it
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length)
    
    // Use the global window.Image constructor instead of just Image
    // This avoids conflict with the imported Next.js Image component
    const imgLoader = new window.Image()
    imgLoader.src = images[randomIndex]
    imgLoader.onload = () => {
      setCurrentImage(images[randomIndex])
      setContentReady(true)
    }
    
    // Fallback in case image loading takes too long
    const fallbackTimer = setTimeout(() => {
      if (!contentReady) {
        setCurrentImage(images[0]) // Use first image as fallback
        setContentReady(true)
      }
    }, 1250)
    
    return () => clearTimeout(fallbackTimer)
  }, [contentReady])
  
  return (
    <div className="bg-white">
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
                {[1, 2, 3].map((index) => (
                  <div key={index} className="relative w-1/3 h-[80vh]">
                    <Image
                      src={currentImage}
                      alt="IKIGAI Featured Collection"
                      fill
                      priority
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
              
              {/* Overlay text for desktop - single line */}
              <div className="absolute bottom-16 right-6 z-10">
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
              <Image
                src={currentImage}
                alt="IKIGAI Featured Collection"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
              
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

