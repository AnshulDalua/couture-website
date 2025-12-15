"use client"

import { useState } from "react"
import Link from "next/link"
import OptimizedImage from "@/app/components/OptimizedImage"
import SingleImageModal from "@/components/SingleImageModal"

interface DesignItem {
  image: string
  caption: string
  description: string
}

interface DesignsGalleryProps {
  designs: DesignItem[]
  title: string
}

export default function DesignsGallery({ designs, title }: DesignsGalleryProps) {
  const [showModal, setShowModal] = useState(false)
  const [selectedDesign, setSelectedDesign] = useState<DesignItem | null>(null)

  return (
    <div className="min-h-screen">
      <h1 className="text-sm uppercase px-6 pt-8 pb-2">{title}</h1>
      <div className="px-6">
        <p className="text-xs text-gray-600 mb-6">
          Our design team brings your vision to life -- get inspired, then{' '}
          <Link href="/order" className="underline font-semibold">
            request your order
          </Link>
          .
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {designs.map((design, index) => {
            if (design.image.startsWith('//')) return null;

            return (
              <div key={index}>
                <div 
                  className="relative aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedDesign(design)
                    setShowModal(true)
                  }}
                >
                  <OptimizedImage
                    src={design.image}
                    alt={design.caption}
                    priority={index < 8}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    containerClassName="w-full h-full"
                    className="object-contain w-full h-full transition-transform duration-700 hover:scale-105"
                    loadingStrategy={index < 8 ? "eager" : "progressive"}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Single Image Modal */}
      {showModal && selectedDesign && (
        <SingleImageModal
          image={selectedDesign.image}
          caption={selectedDesign.caption}
          onClose={() => {
            setShowModal(false)
            setSelectedDesign(null)
          }}
        />
      )}
    </div>
  )
}
