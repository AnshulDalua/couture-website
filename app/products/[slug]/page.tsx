"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef, use } from "react"
import { notFound, useRouter } from "next/navigation"
import { X } from "lucide-react"

// Color swatch definitions with appropriate CSS colors
const colorOptions = {
  "BLACK": { color: "#333333", label: "Black" },
  "NAVY": { color: "#3A4256", label: "Navy" },
  "BABY BLUE": { color: "#6D92C5", label: "Baby Blue" },
  "WHITE": { color: "#F2F2F2", label: "White" },
  "GREEN": { color: "#3B5D50", label: "Green" },
  "CLASSIC GREY": { color: "#E0E0E0", label: "Classic Grey" },
  "STONE GREY": { color: "#7D8491", label: "Stone Grey" },
  "OFF-WHITE": { color: "#EAE6D7", label: "Off-White" },
  "BROWN": { color: "#6D4C41", label: "Brown" },
  "RED": { color: "#C23B50", label: "Red" },
  "PINK": { color: "#E991B9", label: "Pink" },
  "PURPLE": { color: "#7E57C2", label: "Purple" },
  "MUSTARD": { color: "#F9DC5C", label: "Mustard" },
  "ORANGE": { color: "#F15A29", label: "Orange" },
  "MAROON": { color: "#7D3C41", label: "Maroon" },
  "YELLOW": { color: "#F9DC5C", label: "Yellow" },
}

// Sizing chart URLs for each product type
const sizingCharts = {
  "heavyweight-hoodie": "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/sizing/Hoodie%20Size%20Guide.jpg",
  "heavyweight-crewneck": "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/sizing/Crew%20Size%20Guide.jpg",
  "classic-quarterzip": "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/sizing/QZ_Size_Guide.jpg", // Using crew sizing for now
  "straightcut-sweatpants": "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/sizing/Sweats%20Size%20Guide.jpg",
  "classic-tshirt": "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/sizing/Tee%20Size%20Guide.jpg",
}

// Mock product data with color codes
const products = {
  "heavyweight-hoodie": {
    id: 1,
    name: "Heavyweight Hoodie",
    price: "$40-55",
    description: "Relaxed hooded sweatshirt in our heavyweight 12.4oz cotton blend.",
    details: [
      "Longsleeve",
      "Ribbed Cuffs and Hem",
      "Kangaroo Pocket",
      "Relaxed Fit",
      "Unisex",
      "100% Cotton"
    ],
    images: [
      "/shop/346048sinh002946-R1-035-16.webp",
      "/shop/7.webp",
      "/shop/8.webp",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["BLACK", "WHITE", "OFF-WHITE", "NAVY", "BABY BLUE", "GREEN", "CLASSIC GREY", "STONE GREY", "RED", "BROWN", "PINK", "PURPLE", "MUSTARD", "ORANGE"],
  },
  "heavyweight-crewneck": {
    id: 2,
    name: "Heavyweight Crewneck",
    price: "$37-52",
    description: "Relaxed sweatshirt in our heavyweight 12.4oz cotton blend.",
    details: [
      "Crewneck",
      "Longsleeve",
      "Ribbed collar, cuffs and hem",
      "Relaxed Fit",
      "Unisex",
      "100% Cotton"
    ],
    images: [
      "/shop/sinh001485-R1-047-22.webp",
      "/shop/6.webp",
      "/shop/10.webp",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["BLACK", "STONE GREY", "NAVY", "GREEN", "WHITE", "BROWN", "RED"],
  },
  "classic-quarterzip": {
    id: 3,
    name: "Classic Quarterzip",
    price: "$36-51",
    description: "Standard fitting Quarter Zip in our heavyweight 11.8oz cotton blend.",
    details: [
      "Longsleeve",
      "Ribbed Cuffs and Hem",
      "Standard Fit",
      "YKK Zipper",
      "Unisex",
      "100% Cotton"
    ],
    images: [
      "/shop/aniket.webp",
      "/shop/3.webp",
      "/shop/9.webp",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["BLACK", "CLASSIC GREY", "NAVY", "GREEN"],
  },
  "straightcut-sweatpants": {
    id: 4,
    name: "Straightcut Sweatpants",
    price: "$37-52",
    description: "Straight-legged sweatpants in our heavyweight 12.4oz cotton blend.",
    details: [
      "Thigh Pockets",
      "Open Hem",
      "Relaxed Fit",
      "100% Cotton"
    ],
    images: [
      "/shop/19000029.webp",
      "/shop/5.webp",
      "/shop/4.webp",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["BLACK", "WHITE", "OFF-WHITE", "NAVY", "BABY BLUE", "GREEN", "CLASSIC GREY", "STONE GREY", "RED", "BROWN", "PINK", "PURPLE", "MUSTARD", "ORANGE"],
  },
  "classic-tshirt": {
    id: 5,
    name: "Classic Tshirt",
    price: "$20-35",
    description: "Standard fit tee in midweight 5.6oz cotton blend.",
    details: [
      "Shortsleeve",
      "Ribbed Collar",
      "Unisex",
      "100% Cotton"
    ],
    images: [
      "/shop/2.webp",
      "/shop/1.webp",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["BLACK", "WHITE", "OFF-WHITE", "NAVY", "BABY BLUE", "GREEN","RED", "MAROON", "PINK", "BROWN", "YELLOW", "ORANGE"],
  },
}

type Product = typeof products[keyof typeof products]
type PageParams = { slug: string }

export default function ProductPage({ params }: { params: Promise<PageParams> }) {
  const router = useRouter()
  const { slug } = use(params)
  const product = products[slug as keyof typeof products]
  const imagesContainerRef = useRef<HTMLDivElement>(null)

  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showSizingChart, setShowSizingChart] = useState(false)

  // Check if mobile on mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle scroll on images container
  useEffect(() => {
    const container = imagesContainerRef.current
    if (!container || isMobile) return

    const handleScroll = () => {
      if (isScrolling) return

      const containerHeight = container.clientHeight
      const scrollPosition = container.scrollTop
      const imageHeight = containerHeight

      const newIndex = Math.min(Math.floor(scrollPosition / imageHeight), product.images.length - 1)

      if (newIndex !== activeImageIndex) {
        setActiveImageIndex(newIndex)
      }
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [activeImageIndex, isScrolling, product.images.length, isMobile])

  // Scroll to image when thumbnail is clicked
  const scrollToImage = (index: number) => {
    if (isMobile) {
      setActiveImageIndex(index)
      return
    }

    setIsScrolling(true)
    const container = imagesContainerRef.current
    if (container) {
      const imageHeight = container.clientHeight
      container.scrollTo({
        top: index * imageHeight,
        behavior: "smooth",
      })
    }

    setActiveImageIndex(index)
    setTimeout(() => setIsScrolling(false), 500)
  }

  const handleOrderNow = () => {
    // Store selected product info in localStorage for the order form
    localStorage.setItem(
      "orderProduct",
      JSON.stringify({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize || "",
        color: selectedColor || "",
      }),
    )

    // Redirect to order form
    router.push("/order")
  }

  if (!product) {
    notFound()
  }

  return (
    <div className="px-6 py-8">
      {/* Back to Shop Link */}
      <div className="mb-8">
        <Link href="/products" className="text-xs uppercase">
          ← BACK TO SHOP
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images - Scrollable on desktop */}
        <div className="md:sticky md:top-[100px] md:self-start">
          {/* Mobile view - single image with thumbnails */}
          {isMobile ? (
            <>
              <div className="mb-4 relative aspect-square w-full">
                <Image
                  src={product.images[activeImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full"
                />
              </div>
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToImage(index)}
                    className={`w-16 h-16 relative ${activeImageIndex === index ? "border border-black" : "border border-transparent"}`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* Desktop view - scrollable images */
            <div className="relative">
              <div
                ref={imagesContainerRef}
                className="h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide"
                style={{ scrollSnapType: "y mandatory" }}
              >
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-[calc(100vh-200px)] w-full mb-2"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
              <div className="flex space-x-2 mt-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToImage(index)}
                    className={`w-16 h-16 relative ${activeImageIndex === index ? "border border-black" : "border border-transparent"}`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Product Info - Fixed on scroll */}
        <div className="md:sticky md:top-[100px] md:self-start">
          <h1 className="text-sm uppercase">{product.name}</h1>
          <p className="text-sm mt-1">{product.price}</p>

          <div className="mt-6">
            <h3 className="text-xs uppercase mb-2">COLOR</h3>
            <div className="flex flex-wrap gap-4">
              {product.colors.map((colorCode) => {
                const colorInfo = colorOptions[colorCode];
                return (
                  <button
                    key={colorCode}
                    onClick={() => setSelectedColor(colorCode)}
                    className={`relative w-8 h-8 rounded-full ${selectedColor === colorCode ? "ring-2 ring-black ring-offset-1" : ""}`}
                    style={{ backgroundColor: colorInfo.color }}
                    aria-label={colorInfo.label}
                  >
                    {selectedColor === colorCode && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        {colorCode === "WHITE" || colorCode === "CLASSIC GREY" ? (
                          <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                        ) : (
                          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        )}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            {selectedColor && (
              <p className="mt-2 text-xs">{colorOptions[selectedColor].label}</p>
            )}
          </div>

          <div className="mt-4">
            <h3 className="text-xs uppercase mb-2">SIZE</h3>
            <div className="flex items-center mb-2">
              <div className="flex flex-wrap gap-2 flex-1">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 flex items-center justify-center border text-xs ${selectedSize === size ? "border-black" : "border-gray-200"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setShowSizingChart(true)}
                className="text-xs underline ml-4 hover:opacity-70 transition-opacity"
              >
                Size Guide
              </button>
            </div>
          </div>

          <div className="mt-6">
            <button className="stussy-button w-full" onClick={handleOrderNow}>
              ORDER NOW
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-xs uppercase mb-2">DESCRIPTION</h3>
            <p className="text-xs">{product.description}</p>
          </div>

          <div className="mt-4">
            <h3 className="text-xs uppercase mb-2">DETAILS</h3>
            <ul className="text-xs list-disc pl-4">
              {product.details.map((detail, index) => (
                <li key={index} className="mb-1">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Sizing Chart Modal */}
      {showSizingChart && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white max-w-3xl w-full max-h-[90vh] overflow-auto">
            <button 
              onClick={() => setShowSizingChart(false)}
              className="absolute top-4 right-4 p-1 bg-white rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close sizing chart"
            >
              <X size={20} />
            </button>
            <div className="p-1">
              <Image
                src={sizingCharts[slug as keyof typeof sizingCharts]}
                alt={`${product.name} sizing chart`}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
