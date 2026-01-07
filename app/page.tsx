"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import IntroAnimation from "@/app/components/IntroAnimation"
import ImagePreloader from "@/app/components/ImagePreloader"
import OptimizedImage from "@/app/components/OptimizedImage"
import { motion, AnimatePresence } from "framer-motion"
import Cookies from 'js-cookie'
import Head from 'next/head'

// Array of images to rotate through
const images = [
  "/lookbook/l20.webp",
  // "/homepage/v1.webp",
  // "/homepage/aryani.webp",
  // "/lookbook/Couture-AXO-26.webp",
  // "/homepage/clubhouse.webp"
]

// Products data
const products = [
  {
    id: 1,
    name: "Heavyweight Hoodie",
    price: "$58",
    slug: "heavyweight-hoodie",
    image: "/shop/7.webp",
  },
  {
    id: 2,
    name: "Heavyweight Crewneck",
    price: "$53",
    slug: "heavyweight-crewneck",
    image: "/shop/6.webp",
  },
  {
    id: 3,
    name: "Classic Quarterzip",
    price: "$53",
    slug: "classic-quarterzip",
    image: "/shop/3.webp",
  },
  {
    id: 4,
    name: "Straightcut Sweatpants",
    price: "$55",
    slug: "straightcut-sweatpants",
    image: "/shop/5.webp",
  },
  // {
  //   id: 5,
  //   name: "Classic Tshirt",
  //   price: "$26",
  //   slug: "classic-tshirt",
  //   image: "/shop/2.webp",
  // },
]

// Gallery designs data (subset)
const galleryDesigns = [
  // {
  //   image: "/designs/A Chi O Tank.webp",
  //   caption: "AXO `RABBIT` TANK CONCEPT",
  // },
  // {
  //   image: "/designs/KKGHoodie (1).webp",
  //   caption: "KKG `KEY` HOODIE CONCEPT",
  // },
  {
    image: "/designs/ThetaTank.webp",
    caption: "THETA `STAR` TANK CONCEPT",
  },
  {
    image: "/designs/AphiHoodie.webp",
    caption: "APHI `FLOWER` HOODIE CONCEPT",
  },
  {
    image: "/designs/AphiHoodie. (1).webp",
    caption: "APHI EMBROIDERED TEXT DESIGN CONCEPT",
  },
  {
    image: "/designs/AphiPants (1).webp",
    caption: "APHI `STAR` SWEAT CONCEPT",
  },
]

// Lookbook items
const lookbookItems = [
  {
    image: "/lookbook/Couture-AXO-26.webp",
    caption: "AXO LOOKBOOK",
  },
  {
    image: "/lookbook/beach3.webp",
    caption: "BEACH LOOKBOOK",
  },
  {
    image: "/lookbook/axo-yellow.webp",
    caption: "AXO YELLOW",
  },
  {
    image: "/lookbook/axo-babytee3.webp",
    caption: "AXO BABY TEE",
  },
]

export default function HomePage() {
  // State to store the current image - initialize as null to prevent flash
  const [currentImage, setCurrentImage] = useState<string | null>(null)
  /*
  // State to control showing the intro animation
  const [showIntro, setShowIntro] = useState(false)
  */
  // State to track if main content is ready to display
  const [contentReady, setContentReady] = useState(false)
  // Router for navigation
  const router = useRouter()

  // Function to handle image click and redirect to products page
  const handleImageClick = () => {
    router.push('/products')
  }

  /*
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
  */

  // Always show main content immediately (animation disabled)
  useEffect(() => {
    setContentReady(true)
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
      {/* Animation temporarily disabled. To re-enable, uncomment below blocks. */}
      {/*
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
            setTimeout(() => clearInterval(checkContentReady), 3000)
          }
        }} 
      />
      */}
      <AnimatePresence>
        {contentReady && (
          <motion.div 
            className="md:h-[calc(100vh-120px)] flex items-start md:items-center justify-center md:px-2 md:pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Desktop Version - Three images side by side */}
            <div className="hidden md:block relative w-full max-w-[98%]">
              <div className="flex w-full">
                {currentImage && [1, 2, 3].map((index) => (
                  <div key={index} className="relative w-1/3 h-[80vh] cursor-pointer" onClick={handleImageClick}>
                    <Image
                      src={currentImage}
                      alt="IKIGAI Featured Collection - High quality custom merchandise"
                      priority={index === 1}
                      fetchPriority={index === 1 ? "high" : "low"}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      width={466}
                      height={703}
                      style={{ 
                        objectFit: "cover", 
                        objectPosition: "center",
                        width: "100%",
                        height: "100%"
                      }}
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
                <p 
                  className="text-xl md:text-2xl text-white text-right mt-2" 
                  style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}
                >
                  CUSTOM APPAREL YOU'LL ACTUALLY WEAR.
                </p>
              </div>
            </div>

            {/* Mobile Version - Scrollable sections */}
            <div className="md:hidden w-full">
              {/* Hero Section */}
              <div className="relative w-full h-[calc(100vh-120px)] cursor-pointer" onClick={handleImageClick}>
                {currentImage && (
                  <Image
                    src={currentImage}
                    alt="IKIGAI Featured Collection"
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                    fill
                    style={{ 
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                )}
                
                {/* Overlay text for mobile */}
                <div className="absolute bottom-12 right-6 text-right z-10">
                  <h1 
                    className="text-5xl font-bold text-white" 
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                  >
                    NOT<br />NORMAL<br />MERCH
                  </h1>
                  <p 
                    className="text-md text-white text-right mt-2" 
                    style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}
                  >
                    CUSTOM APPAREL YOU'LL ACTUALLY WEAR.
                  </p>
                </div>
              </div>

              {/* Brief Explainer Section */}
              <div className="relative px-6 py-28 bg-white overflow-hidden mb-18 mt-8">
                <div className="relative z-10 text-center max-w-sm mx-auto">
                  <div className="relative inline-block">
                    {/* Yellow Arlo skateboarder coming off the Y in COMPANY */}
                    <div className="absolute top-[-80px] right-[-60px] w-20 h-20 z-20" style={{ transform: "rotate(25deg)" }}>
                      <Image
                        src="/arlo/yellow.webp"
                        alt="Arlo mascot"
                        width={80}
                        height={80}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <h2 className="text-sm uppercase tracking-widest mb-4 font-bold">
                      NOT YOUR AVERAGE MERCH COMPANY
                    </h2>
                  </div>
                  <p className="text-xs leading-relaxed text-gray-700 mb-8">
                    We design, manufacture, and deliver premium custom apparel in-house. 
                    No middlemen. No compromises. Just merch you'll actually want to wear.
                  </p>
                  
                  {/* CTA Button Divider */}
                  <div className="flex justify-center mb-12">
                    <Link href="/order" className="bg-black text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-gray-900 transition-colors duration-300">
                      START AN ORDER →
                    </Link>
                  </div>
                  
                  {/* Process Steps */}
                  <div className="mt-0 mb-0">
                    <ul className="text-xs text-gray-700 space-y-6 text-left">
                      <li className="flex items-start gap-3">
                        <span><span className="font-semibold">1. Fill Out Form:</span> Share your vision and project details with us</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span><span className="font-semibold">2. Create Design:</span> Work with our team to perfect your design</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span><span className="font-semibold">3. Receive Clothes:</span> Get your premium merch in 2-3 weeks</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Products Section */}
              <div className="relative px-6 py-0 bg-white -mt-4">
                <h2 className="text-sm uppercase mb-6">OUR BLANKS</h2>
                <div className="grid grid-cols-2 gap-4">
                  {products.map((product) => (
                    <Link href={`/products/${product.slug}`} key={product.id} className="block">
                      <div className="relative aspect-square mb-2 bg-gray-100">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="50vw"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <h3 className="text-xs uppercase">{product.name}</h3>
                      <p className="text-xs text-gray-600">Starting at {product.price}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Gallery Section */}
              <div className="relative px-6 py-12 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-sm uppercase">OUR DESIGNS</h2>
                  <Link href="/our-designs" className="text-xs underline">
                    View All
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {galleryDesigns.map((design, index) => (
                    <Link href="/our-designs" key={index} className="block">
                      <div className="relative aspect-[3/4] bg-white">
                        <Image
                          src={design.image}
                          alt={design.caption}
                          fill
                          sizes="50vw"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Lookbook Section */}
              <div className="relative px-6 py-12 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-sm uppercase">LOOKBOOK</h2>
                  <Link href="/gallery" className="text-xs underline">
                    View All
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {lookbookItems.map((item, index) => (
                    <Link href="/gallery" key={index} className="block">
                      <div className="relative aspect-[3/4] bg-white">
                        <Image
                          src={item.image}
                          alt={item.caption}
                          fill
                          sizes="50vw"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Order Form Section */}
              <div className="px-6 py-12 bg-white">
                <h2 className="text-sm uppercase tracking-wide mb-2 text-center">REQUEST ORDER</h2>
                <p className="text-xs text-gray-600 text-center mb-8">
                  Share your vision below and our team will handle the rest.
                </p>
                
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); router.push('/order'); }}>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="homepage-name" className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                        Name:
                      </label>
                      <input
                        type="text"
                        id="homepage-name"
                        required
                        className="w-full border-b border-black pb-2 focus:outline-none text-black bg-transparent text-xs"
                      />
                    </div>
                    <div>
                      <label htmlFor="homepage-email" className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                        Email:
                      </label>
                      <input
                        type="email"
                        id="homepage-email"
                        required
                        className="w-full border-b border-black pb-2 focus:outline-none text-black bg-transparent text-xs"
                      />
                    </div>
                    <div>
                      <label htmlFor="homepage-phone" className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                        Phone Number:
                      </label>
                      <input
                        type="tel"
                        id="homepage-phone"
                        required
                        className="w-full border-b border-black pb-2 focus:outline-none text-black bg-transparent text-xs"
                      />
                    </div>
                    <div>
                      <label htmlFor="homepage-organization" className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                        Organization:
                      </label>
                      <input
                        type="text"
                        id="homepage-organization"
                        required
                        className="w-full border-b border-black pb-2 focus:outline-none text-black bg-transparent text-xs"
                      />
                    </div>
                    <div>
                      <label htmlFor="homepage-details" className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                        Project Details:
                      </label>
                      <textarea
                        id="homepage-details"
                        placeholder="Tell us what you need (e.g. 50 sweat sets for rush merch). 20 unit minimum."
                        required
                        rows={3}
                        className="w-full border-b border-black pb-2 focus:outline-none resize-none text-black bg-transparent text-xs"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 uppercase text-xs tracking-widest hover:bg-gray-900 transition-colors"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
