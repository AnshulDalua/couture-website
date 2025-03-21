"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { notFound, useRouter } from "next/navigation"

// Mock product data
const products = {
  "stock-logo-tee": {
    id: 1,
    name: "Heavyweight Hoodie",
    price: 45,
    description: "Classic cotton tee with printed Stüssy logo at chest.",
    details: ["100% cotton", "Regular fit", "Ribbed crewneck", "Printed logo at chest", "Machine wash cold"],
    images: [
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//7.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//19000025.png",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//8.jpg",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["BLACK", "WHITE", "NAVY"],
  },
  "basic-stussy-hoodie": {
    id: 2,
    name: "Heavweight Crewneck",
    price: 120,
    description: "Classic cotton hoodie with embroidered Stüssy logo at chest.",
    details: [
      "80% cotton, 20% polyester",
      "Regular fit",
      "Drawstring hood",
      "Kangaroo pocket",
      "Embroidered logo at chest",
      "Machine wash cold",
    ],
    images: [
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//6.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//87566EB3-8B8E-4238-AF38-3B9641F08E78.png",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//10.jpg",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["BLACK", "GREY HEATHER", "NAVY"],
  },
  "work-jacket": {
    id: 3,
    name: "Classic Quarterzip",
    price: 180,
    description: "Durable cotton twill work jacket with embroidered Stüssy logo.",
    details: [
      "100% cotton twill",
      "Regular fit",
      "Button front closure",
      "Two chest pockets",
      "Two side pockets",
      "Embroidered logo at chest",
      "Machine wash cold",
    ],
    images: [
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//3.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//9.jpg",
      "/placeholder.svg?height=800&width=800",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["BLACK", "KHAKI", "OLIVE"],
  },
  "8-ball-dot-tee": {
    id: 4,
    name: "Straightcut Sweatpants",
    price: 50,
    description: "Cotton tee with printed 8 Ball graphic at chest.",
    details: ["100% cotton", "Regular fit", "Ribbed crewneck", "Printed graphic at chest", "Machine wash cold"],
    images: [
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//5.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//475848642_645182244597226_8001403319392807816_n.png",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//4.jpg",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["BLACK", "WHITE", "NATURAL"],
  },
  "stock-water-short": {
    id: 5,
    name: "Standard Tshirt",
    price: 95,
    description: "Quick-dry nylon shorts with embroidered Stüssy logo.",
    details: [
      "100% nylon",
      "Regular fit",
      "Elastic waistband with drawstring",
      "Side pockets",
      "Back pocket with velcro closure",
      "Embroidered logo at leg",
      "Machine wash cold",
    ],
    images: [
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//2.jpg",
      "/placeholder.svg?height=800&width=800",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//1.jpg",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["BLACK", "NAVY", "ORANGE"],
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const product = products[params.slug as keyof typeof products]
  const imagesContainerRef = useRef<HTMLDivElement>(null)

  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

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
    if (!selectedSize || !selectedColor) {
      alert("Please select both size and color")
      return
    }

    // Store selected product info in localStorage for the order form
    localStorage.setItem(
      "orderProduct",
      JSON.stringify({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor,
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
          <p className="text-sm mt-1">${product.price}</p>

          <div className="mt-6">
            <h3 className="text-xs uppercase mb-2">COLOR</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 border text-xs ${selectedColor === color ? "border-black" : "border-gray-200"}`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-xs uppercase mb-2">SIZE</h3>
            <div className="flex flex-wrap gap-2">
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

          <div className="mt-4">
            <h3 className="text-xs uppercase mb-2">SHIPPING & RETURNS</h3>
            <p className="text-xs">
              Free standard shipping on all U.S. orders over $150. Returns accepted within 30 days of delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

