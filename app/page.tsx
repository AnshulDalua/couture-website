"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function Home() {
  // Images for rotation
  const images = [
    "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//19000025.png",
    "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//IMG_2127.png",
    "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//87566EB3-8B8E-4238-AF38-3B9641F08E78.png",
    "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//475848642_645182244597226_8001403319392807816_n.png",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {/* Hero Image with image rotation */}
      <section className="px-6 py-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-[calc(100vh-150px)]">
            {images.map((src, index) => (
              <Image
                key={src}
                src={src || "/placeholder.svg"}
                alt={`Stüssy hero image ${index + 1}`}
                fill
                style={{
                  objectFit: "contain",
                  opacity: index === currentImageIndex ? 1 : 0,
                  transition: "opacity 1s ease-in-out",
                }}
                priority={index === 0}
              />
            ))}
          </div>

          {/* "NOT NORMAL MERCH" text positioned in bottom right */}
          
        </div>
      </section>
    </div>
  )
}

