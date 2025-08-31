"use client"

import { useState } from "react"
import OptimizedImage from "@/app/components/OptimizedImage"
import ImageZoomOverlay from "@/components/ImageZoomOverlay"

interface DesignsGalleryProps {
  images: string[]
  captions: string[]
  title: string
}

export default function DesignsGallery({ images, captions, title }: DesignsGalleryProps) {
  const [showZoomOverlay, setShowZoomOverlay] = useState(false)
  const [zoomImageIndex, setZoomImageIndex] = useState(0)

  return (
    <div className="min-h-screen">
      <h1 className="text-sm uppercase px-6 py-8">{title}</h1>
      <div className="px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => {
            if (image.startsWith('//')) return null;

            return (
              <div key={index}>
                <div 
                  className="relative aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setShowZoomOverlay(true)
                    setZoomImageIndex(index)
                  }}
                >
                  <OptimizedImage
                    src={image}
                    alt={captions[index] || 'Design image'}
                    priority={index < 8}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    containerClassName="w-full h-full"
                    className="object-contain w-full h-full transition-transform duration-700 hover:scale-105"
                    loadingStrategy={index < 8 ? "eager" : "progressive"}
                  />
                </div>
                <p className="text-xs uppercase mt-2 text-center">{captions[index]}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Zoom Overlay */}
      {showZoomOverlay && (
        <ImageZoomOverlay
          images={images}
          initialIndex={zoomImageIndex}
          onClose={() => setShowZoomOverlay(false)}
        />
      )}
    </div>
  )
}
