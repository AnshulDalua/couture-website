"use client"
import "../../../styles/zoom.css"


import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef, use } from "react"
import { notFound, useRouter } from "next/navigation"
import { X, ChevronRight } from "lucide-react"
import ImageZoomOverlay from "@/components/ImageZoomOverlay"

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

// Product reviews organized by product type
const productReviews = {
  "heavyweight-hoodie": [
    {
      id: 20,
      content: "Legendary merch plug. Have ordered 3-4 times from these guys and gotten super high quality pieces, great response time & support, and helped us work within our budget and timeline. Really respect how they treat customers and provide a great product. Highly recommend!",
      name: "V1",
      university: "U of Michigan",
      season: "SS25"
    },
    {
      id: 21,
      content: "super responsive and helpful pre-production and the quality is great :))",
      name: "Zeta Pi",
      university: "U of Michigan",
      season: "SS25"
    },
    {
      id: 22,
      content: "They did a great job of coming up with designs and were super responsive when getting my order in. Everyone that I got a hoodie for fell in love with it because of the material and design. Highly recommend bringing your business here.",
      name: "Michigan Evans",
      university: "U of Michigan",
      season: "SS25"
    },
    {
      id: 23,
      content: "the team is so communicative and responsive, and the merch was very good quality! we had a slight issues during shipping but the team was so kind and quick with response! we figured out the issue immediately :) would definitely order again",
      name: "CSA",
      university: "U of Michigan",
      season: "SS25"
    },
    {
      id: 24,
      content: "Placed a bulk order for a large club and was extremely pleased with how high-quality each piece was. Worked perfectly with our timeline and budget, and couldn't be more happy with how comfortable these hoodies are.",
      name: "Elliott Nederhood",
      university: "U of Michigan",
      season: "SS25"
    },
    {
      id: 25,
      content: "Very high quality merch and very communicative staff! Highly recommend to anyone interested in making custom merch!!",
      name: "PBL",
      university: "U of Michigan",
      season: "SS25"
    },
    {
      id: 26,
      content: "Amazing quality and very quick and efficient shipping!",
      name: "DTD",
      university: "U of Michigan",
      season: "SS25"
    },
    {
      id: 1,
      content: "Yes! They look really great! We have club photos this Sunday so I will try to get photos of some of the members wearing the merch!",
      name: "KTP",
      university: "U of Michigan",
      season: "SS25"
    },
    {
      id: 6,
      content: "It is phenomenal great work guys. Hoodies are dope and everyone loves em. Thanks again guys.",
      name: "PSE",
      university: "U of Michigan",
      season: "SS25"
    },
    {
      id: 8,
      content: "These hoodies have been the best merch decision we have ever made.",
      name: "Atlas Consulting Group",
      university: "U of Michigan",
      season: "SS25"
    },
    {
      id: 9,
      content: "I'm not even exaggerating, I didn't even realize it was a club's hoodie. I straight up thought it was essentials.",
      name: "Flux",
      university: "U of Michigan",
      season: "SS25"
    }
  ],
  "heavyweight-crewneck": [
    {
      id: 27,
      content: "From the beginning, they brought professionalism and strong communication to the table. They helped us create custom East Longmeadow High School crewnecks that perfectly captured our vision.\n\nThe quality of their work was next level. The material was thick and soft, and the embroidery was clean and durable.",
      name: "East Longmeadow",
      university: "Highschool",
      season: "SS25"
    },
    {
      id: 5,
      content: "The crewnecks are solid, I've only worn once or twice but no complaints at all. The quality is miles better than what we had before.",
      name: "V1",
      university: "U of Michigan",
      season: "SS25"
    },
    {
      id: 12,
      content: "Everyone was impressed! The quality, thickness, and warmth are noticeably better compared to brands like Custom Ink.",
      name: "East Longmeadow",
      university: "Highschool",
      season: "SS25"
    }
  ],
  "classic-quarterzip": [
    {
      id: 28,
      content: "Amazing quality and the team is so easy to work with, they are very personable and communicative. I ordered quarter zips for my business club and they were perfect. Affordable pricing and extremely fast shipping as well!",
      name: "Frank Batten Investment",
      university: "UVA",
      season: "SS25"
    },
    {
      id: 11,
      content: "Received, thank you. Our CEO says the quality is great, we love them. Btw we'll be ordering more soon.",
      name: "Hackerpulse",
      university: "Startup",
      season: "SS25"
    }
  ],
  "straightcut-sweatpants": [
    {
      id: 29,
      content: "Very impressed with the quality of the hoodies and sweatpants. Merch arrived ahead of schedule too. You guys also crushed it.",
      name: "Eigenlayer",
      university: "Startup",
      season: "SS25"
    },
    {
      id: 7,
      content: "You both rock thanks again for the hard work. We really enjoy working with you guys and cannot wait to see the product.",
      name: "TEK",
      university: "U of Michigan",
      season: "SS25"
    },
    {
      id: 10,
      content: "These are easily the best merch I own, and the service from couture was fantastic",
      name: "Zeta Pi",
      university: "U of Michigan",
      season: "SS25"
    }
  ],
  "classic-tshirt": [
    {
      id: 20,
      content: "Legendary merch plug. Have ordered 3-4 times from these guys and gotten super high quality pieces, great response time & support, and helped us work within our budget and timeline. Really respect how they treat customers and provide a great product. Highly recommend!",
      name: "V1",
      university: "U of Michigan",
      season: "SS25"
    },
    {
      id: 5,
      content: "The tees are solid, I've only worn once or twice but no complaints at all. The quality is miles better than what we had before.",
      name: "V1",
      university: "U of Michigan",
      season: "SS25"
    },
    {
      id: 10,
      content: "These are easily the best merch I own, and the service from couture was fantastic",
      name: "Zeta Pi",
      university: "U of Michigan",
      season: "SS25"
    }
  ]
}

// Volume discount data with dollar amounts
const volumeDiscounts = {
  "heavyweight-hoodie": [
    { quantity: "0-39 items", price: "$55 per hoodie" },
    { quantity: "40-100 items", price: "$50 per hoodie" },
    { quantity: "100+", price: "Custom Pricing" }
  ],
  "heavyweight-crewneck": [
    { quantity: "0-39 items", price: "$50 per crewneck" },
    { quantity: "40-100 items", price: "$45 per crewneck" },
    { quantity: "100+", price: "Custom Pricing" }
  ],
  "straightcut-sweatpants": [
    { quantity: "0-39 items", price: "$55 per sweatpant" },
    { quantity: "40-100 items", price: "$50 per sweatpant" },
    { quantity: "100+", price: "Custom Pricing" }
  ],
  "classic-quarterzip": [
    { quantity: "0-39 items", price: "$50 per quarter zip" },
    { quantity: "40-100 items", price: "$45 per quarter zip" },
    { quantity: "100+", price: "Custom Pricing" }
  ],
  "classic-tshirt": [
    { quantity: "0-39 items", price: "$30 per t-shirt" },
    { quantity: "40-100 items", price: "$25 per t-shirt" },
    { quantity: "100+", price: "Custom Pricing" }
  ]
};

// Mock product data with color codes
const products = {
  "heavyweight-hoodie": {
    id: 1,
    name: "Heavyweight Hoodie",
    price: "$50-55",
    description: "Relaxed hooded sweatshirt in our heavyweight 12.4oz cotton blend.",
    details: [
      "420 GSM",
      "Ribbed Cuffs and Hem",
      "Kangaroo Pocket",
      "Relaxed Fit",
      "Unisex",
      "100% Cotton",
      "Screenprint, embroidery, DTG, hot press available",
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
    price: "$45-50",
    description: "Relaxed crewneck sweatshirt in our heavyweight 12.4oz cotton blend.",
    details: [
      "420 GSM",
      "Longsleeve",
      "Ribbed collar, cuffs and hem",
      "Relaxed Fit",
      "Unisex",
      "100% Cotton",
      "Screenprint, embroidery, DTG, hot press available",
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
    price: "$45-50",
    description: "Standard fit quarterzip in our heavyweight 11.8oz cotton blend.",
    details: [
      "400 GSM",
      "Ribbed Cuffs and Hem",
      "Standard Fit",
      "YKK Zipper",
      "Fleece Lining",
      "Unisex",
      "100% Cotton",
      "Screenprint, embroidery, DTG, hot press available",
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
    price: "$50-55",
    description: "Straight-legged sweatpants in our heavyweight 12.4oz cotton blend.",
    details: [
      "420 GSM",
      "Thigh Pockets",
      "Open Hem",
      "Relaxed Fit",
      "100% Cotton",
      "Screenprint, embroidery, DTG, hot press available",
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
    price: "$25-30",
    description: "Standard fit tee in midweight 5.6oz cotton blend.",
    details: [
      "200 GSM",
      "Ribbed Collar",
      "Unisex",
      "100% Cotton",
      "Screenprint, embroidery, DTG, hot press available",
    ],
    images: [
      "/shop/la_tee2.webp",
      "/shop/la_tee1.webp",
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
  
  // New state for image zoom overlay
  const [showZoomOverlay, setShowZoomOverlay] = useState(false)
  const [zoomImageIndex, setZoomImageIndex] = useState(0)
  
  // New state for collapsible sections
  const [openSection, setOpenSection] = useState<string | null>(null)

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

  // Toggle section open/closed
  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null)
    } else {
      setOpenSection(section)
    }
  }

  // Get reviews for the current product
  const getProductReviews = () => {
    return productReviews[slug as keyof typeof productReviews] || []
  }

  // Get pricing for the current product
  const getProductPricing = () => {
    return volumeDiscounts[slug as keyof typeof volumeDiscounts] || []
  }

  if (!product) {
    notFound()
  }

  return (
    <div className="px-6 py-8 md:px-12 lg:px-16 xl:px-24">
      {/* Back to Shop Link */}
      <div className="mb-8 md:mb-12">
        <Link href="/products" className="text-xs uppercase">
          ← BACK TO SHOP
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
        {/* Product Images - Scrollable on desktop */}
        <div className="md:sticky md:top-[100px] md:self-start">
          {/* Mobile view - single image with thumbnails */}
          {isMobile ? (
            <>
              <div className="mb-4 relative aspect-square w-full zoom-cursor product-image-container" 
                   onClick={() => {
                     setShowZoomOverlay(true)
                     setZoomImageIndex(activeImageIndex)
                   }}>
                <Image
                  src={product.images[activeImageIndex] ?? "/placeholder.svg"}
                  alt={`${product.name} - High quality custom ${product.name.toLowerCase()}`}
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="w-full"
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToImage(index)}
                    className={`relative w-8 h-8 ${activeImageIndex === index ? "border border-black" : "border border-transparent"}`}
                    style={{ backgroundColor: "white" }}
                  >
                    <Image
                      src={image ?? "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      sizes="64px"
                      style={{ objectFit: "cover" }}
                      className="w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* Desktop view - scrollable images with vertical thumbnails */
            <div className="relative flex gap-4">
              {/* Vertical thumbnails on the left */}
              <div className="hidden md:flex flex-col gap-2 h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToImage(index)}
                    className={`w-16 h-16 relative flex-shrink-0 ${activeImageIndex === index ? "border border-black" : "border border-transparent"}`}
                    style={{ backgroundColor: "white" }}
                  >
                    <Image
                      src={image ?? "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      sizes="64px"
                      style={{ objectFit: "cover" }}
                      className="w-full h-full"
                    />
                  </button>
                ))}
              </div>
              
              {/* Main large images on the right */}
              <div
                ref={imagesContainerRef}
                className="h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide flex-grow"
                style={{ scrollSnapType: "y mandatory" }}
              >
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-[calc(100vh-200px)] w-full mb-2 zoom-cursor product-image-container"
                    style={{ scrollSnapAlign: "start" }}
                    onClick={() => {
                      setShowZoomOverlay(true)
                      setZoomImageIndex(index)
                    }}
                  >
                    <Image
                      src={image ?? "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1} - Premium custom apparel`}
                      fill
                      priority={index === 0}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Product Info - Fixed on scroll */}
        <div className="md:sticky md:top-[100px] md:self-start md:max-w-md">
          <h1 className="text-sm uppercase">{product.name}</h1>
          <p className="text-sm mt-1 mb-8">{product.price}</p>

          <div className="mt-6 mb-8">
            <h3 className="text-xs uppercase mb-3">COLORS AVAILABLE</h3>
            <div className="flex flex-wrap gap-4">
              {product.colors.map((colorCode) => {
                const colorInfo = colorOptions[colorCode as keyof typeof colorOptions];
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
              <p className="mt-2 text-xs">{colorOptions[selectedColor as keyof typeof colorOptions].label}</p>
            )}
          </div>

          <div className="mt-4 mb-8">
            <h3 className="text-xs uppercase mb-3">SIZES AVAILABLE: S-2XL</h3>
            {/* <div className="flex items-center mb-2">
              <div className="flex flex-wrap gap-2 flex-1">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    // onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 flex items-center justify-center border text-xs ${selectedSize === size ? "border-black" : "border-gray-200"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div> */}
          </div>

          {/* Product details displayed directly under size */}
          <div className="mt-6 mb-8 text-xs">
            <p className="mb-4">{product.description}</p>
            <ul className="list-disc pl-4">
              {product.details.map((detail, index) => (
                <li key={index} className="mb-2">
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery link section */}
          <div className="mt-4 mb-4 text-xs flex items-center gap-2">
            <span>See how others customized these blanks.</span>
            <Link href="/gallery" className="text-black font-semibold hover:underline">
              View Gallery →
            </Link>
          </div>

          {/* Collapsible sections - Stussy style */}
          <div className="mt-8 border-t border-gray-200">
            {/* Size Guide section */}
            <button 
              onClick={() => toggleSection('sizeGuide')}
              className="w-full py-4 border-b border-gray-200 flex justify-between items-center text-xs"
            >
              <span className="uppercase">SIZE GUIDE</span>
              <ChevronRight 
                className={`h-4 w-4 transition-transform ${openSection === 'sizeGuide' ? 'rotate-90' : ''}`} 
              />
            </button>
            {openSection === 'sizeGuide' && (
              <div className="py-6 text-xs">
                <div className="relative w-full">
                  <Image
                    src={sizingCharts[slug as keyof typeof sizingCharts]}
                    alt={`${product.name} sizing chart`}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}

            {/* Reviews section */}
            <button 
              onClick={() => toggleSection('reviews')}
              className="w-full py-4 border-b border-gray-200 flex justify-between items-center text-xs"
            >
              <span className="uppercase">REVIEWS</span>
              <ChevronRight 
                className={`h-4 w-4 transition-transform ${openSection === 'reviews' ? 'rotate-90' : ''}`} 
              />
            </button>
            {openSection === 'reviews' && (
              <div className="py-6 text-xs">
                <div className="mt-4">
                  <h3 className="text-xs uppercase mb-3">REVIEWS</h3>
                  {getProductReviews().length > 0 ? (
                    <div className="overflow-x-auto pb-4 scrollbar-hide">
                      <div className="flex space-x-6" style={{ minWidth: 'max-content' }}>
                        {getProductReviews().map((review) => (
                          <div 
                            key={review.id}
                            className="flex flex-col p-4 rounded-lg bg-white shadow-sm"
                            style={{ minWidth: '260px', maxWidth: '300px' }}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-medium">{review.name}</h4>
                              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                                {review.university}
                              </span>
                              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                                {review.season}
                              </span>
                            </div>
                            <p className="mb-3">{review.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p>No reviews yet. Be the first to leave a review.</p>
                  )}
                </div>
              </div>
            )}

            {/* Pricing Chart section */}
            <button 
              onClick={() => toggleSection('pricing')}
              className="w-full py-4 border-b border-gray-200 flex justify-between items-center text-xs"
            >
              <span className="uppercase">PRICING</span>
              <ChevronRight 
                className={`h-4 w-4 transition-transform ${openSection === 'pricing' ? 'rotate-90' : ''}`} 
              />
            </button>
            {openSection === 'pricing' && (
              <div className="py-6 text-xs">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 text-left w-1/2">Quantity</th>
                      <th className="py-3 px-4 text-left w-1/2">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getProductPricing().map((discount, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-4">{discount.quantity}</td>
                        <td className="py-3 px-4">{discount.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-4">
                  Prices may vary based on design complexity. For custom orders, please <Link href="/order" className="underline">contact us</Link>.
                </p>
              </div>
            )}
          </div>

          {/* Order Now button - moved below the collapsible sections */}
          <div className="mt-8">
            <button className="stussy-button w-full py-3" onClick={handleOrderNow}>
              REQUEST ORDER
            </button>
          </div>
        </div>
      </div>
      
      {/* Sizing Chart Modal - keep this for backward compatibility */}
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
            <div className="p-6">
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

      {/* Image Zoom Overlay */}
      {showZoomOverlay && (
        <ImageZoomOverlay 
          images={product.images} 
          initialIndex={zoomImageIndex} 
          onClose={() => setShowZoomOverlay(false)} 
        />
      )}
    </div>
  )
}
