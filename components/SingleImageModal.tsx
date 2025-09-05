"use client"

import { useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface SingleImageModalProps {
  image: string
  caption: string
  onClose: () => void
}

export default function SingleImageModal({ 
  image, 
  caption, 
  onClose 
}: SingleImageModalProps) {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Handle background click to close modal
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={handleBackgroundClick}
    >
      {/* Modal Container */}
      <div className="relative bg-white rounded-lg max-w-3xl max-h-[90vh] w-auto overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Content Container */}
        <div className="flex flex-col">
          {/* Image Container */}
          <div className="relative bg-gray-50">
            <div className="aspect-[4/5] relative max-h-[80vh] w-[28rem]">
              <Image
                src={image}
                alt={caption}
                fill
                className="object-contain"
                sizes="320px"
                priority
              />
            </div>
          </div>

          {/* Caption below the image */}
          <div className="p-6 text-center">
            <p className="text-xs font-normal uppercase tracking-wide text-black">
              {caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
