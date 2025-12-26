"use client"

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, ArrowRight } from 'lucide-react'

interface DesignDetailModalProps {
  image: string
  caption: string
  printStyle: string
  organization: string
  onClose: () => void
}

export default function DesignDetailModal({ 
  image, 
  caption,
  printStyle,
  organization,
  onClose 
}: DesignDetailModalProps) {
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
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleBackgroundClick}
    >
      {/* Modal Container */}
      <div className="relative bg-white max-w-5xl max-h-[90vh] w-full overflow-y-auto md:overflow-hidden flex flex-col md:flex-row">
        {/* Mobile Close Button - Top Right */}
        <button
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:opacity-70 transition-opacity"
          aria-label="Close modal"
        >
          <X size={24} strokeWidth={1} />
        </button>

        {/* Image Section - Left Side */}
        <div className="relative bg-gray-50 flex-shrink-0 md:w-[60%] flex items-center justify-center">
          <div className="relative w-full h-[50vh] md:h-[80vh]">
            <Image
              src={image}
              alt={caption}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>
        </div>

        {/* Details Section - Right Side */}
        <div className="flex flex-col md:w-[40%] p-6 md:p-8">
          {/* Header with title and close button */}
          <div className="flex items-start justify-between mb-6 border-b border-gray-200 pb-4">
            <h2 className="text-lg font-medium uppercase tracking-wide pr-4">
              {caption}
            </h2>
            <button
              onClick={onClose}
              className="hidden md:block flex-shrink-0 hover:opacity-70 transition-opacity"
              aria-label="Close modal"
            >
              <X size={24} strokeWidth={1} />
            </button>
          </div>

          {/* Details */}
          <div className="flex-1 space-y-6">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Print Style:</p>
              <p className="text-base font-medium underline">{printStyle}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Organization:</p>
              <p className="text-base font-medium underline">{organization}</p>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                Our design team brings your vision to life — get inspired here, then request your order!
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-y-3">
            <button 
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 border border-black text-black hover:bg-gray-50 transition-colors uppercase text-sm tracking-wide"
            >
              Explore More <ArrowRight size={16} />
            </button>
            <Link 
              href="/order"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-black text-white hover:bg-gray-800 transition-colors uppercase text-sm tracking-wide"
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
