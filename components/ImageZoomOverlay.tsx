import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface ImageZoomOverlayProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export default function ImageZoomOverlay({ images, initialIndex, onClose }: ImageZoomOverlayProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Scroll to the initial image when overlay opens
  useEffect(() => {
    if (scrollContainerRef.current && initialIndex > 0) {
      const totalHeight = scrollContainerRef.current.scrollHeight;
      const numImages = images.length;
      const approximateImageHeight = totalHeight / numImages;
      
      scrollContainerRef.current.scrollTo({
        top: initialIndex * approximateImageHeight,
        behavior: 'smooth'
      });
    }
  }, [initialIndex, images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close image zoom"
      >
        <X size={24} />
      </button>

      {/* Scrollable container for stacked images */}
      <div 
        ref={scrollContainerRef}
        className="w-full h-full overflow-y-auto scrollbar-hide"
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className="w-full flex items-start justify-center"
            style={{ marginBottom: 0, paddingBottom: 0 }}
          >
            <img
              src={image}
              alt={`Product image ${index + 1}`}
              className="w-full h-auto"
              style={{ display: 'block' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
