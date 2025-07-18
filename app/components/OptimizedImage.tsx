"use client"

import Image, { ImageProps } from 'next/image'
import { useState, useEffect } from 'react'

interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string
  alt: string
  lowQualitySrc?: string
  fallbackSrc?: string
  aspectRatio?: string
  objectPosition?: string
  containerClassName?: string
  loadingStrategy?: 'eager' | 'lazy' | 'progressive'
  fitMode?: 'cover' | 'contain'
}

/**
 * OptimizedImage component that implements best practices for web image optimization:
 * - Progressive loading with low-quality image placeholder
 * - Proper aspect ratio containers to prevent layout shifts
 * - WebP format support with fallbacks
 * - Responsive sizing with appropriate sizes attribute
 * - SEO-friendly alt text
 * - Proper error handling with fallback images
 */
export default function OptimizedImage({
  src,
  alt,
  lowQualitySrc,
  fallbackSrc = '/placeholder.svg',
  aspectRatio = 'aspect-square',
  objectPosition = 'center',
  containerClassName = '',
  loadingStrategy = 'progressive',
  fitMode = 'cover',
  priority,
  sizes,
  className,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(
    loadingStrategy === 'progressive' ? (lowQualitySrc || fallbackSrc) : src
  )
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Handle WebP support detection
  const [supportsWebP, setSupportsWebP] = useState(true)
  
  useEffect(() => {
    // Check WebP support
    const checkWebPSupport = async () => {
      const webpSupported = await testWebP()
      setSupportsWebP(webpSupported)
    }
    
    checkWebPSupport()
    
    // If using progressive loading, preload the high-quality image
    if (loadingStrategy === 'progressive' && !hasError) {
      const img = new window.Image()
      img.src = src
      img.onload = () => {
        setImgSrc(src)
        setIsLoaded(true)
      }
      img.onerror = () => {
        setImgSrc(fallbackSrc)
        setHasError(true)
      }
    }
  }, [src, fallbackSrc, loadingStrategy, hasError])

  // Function to test WebP support
  const testWebP = () => {
    return new Promise<boolean>(resolve => {
      const webP = new window.Image()
      webP.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=='
      webP.onload = () => resolve(true)
      webP.onerror = () => resolve(false)
    })
  }

  // Convert src to WebP if supported and not already WebP
  const getOptimizedSrc = (imageSrc: string) => {
    if (!supportsWebP || imageSrc === fallbackSrc || imageSrc.endsWith('.webp') || imageSrc.startsWith('data:')) {
      return imageSrc
    }
    
    // For Next.js Image component, we don't need to manually convert to WebP
    // as it handles this automatically, but this is here for completeness
    return imageSrc
  }

  // Handle image load error
  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  // Default sizes if not provided - optimized for mobile first
  const defaultSizes = sizes || '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
  
  // Calculate width/height based on displayed dimensions
  const width = props.width ? Number(props.width) : (typeof window !== 'undefined' ? window.innerWidth : 640)
  const height = props.height ? Number(props.height) : Math.floor(width * (aspectRatio === 'aspect-square' ? 1 : 0.75))

  // Determine loading attribute based on strategy and priority
  const getLoadingAttribute = () => {
    if (priority) return undefined // Next.js handles this with priority
    return loadingStrategy === 'eager' ? 'eager' : 'lazy'
  }

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${containerClassName}`}>
      <Image
        src={getOptimizedSrc(imgSrc)}
        alt={alt}
        fill
        sizes={defaultSizes}
        priority={priority}
        loading={getLoadingAttribute()}
        className={`object-${fitMode} object-${objectPosition} transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className || ''}`}
        onLoad={() => loadingStrategy !== 'progressive' && setIsLoaded(true)}
        onError={handleError}
        {...props}
      />
      
      {/* Show the low quality image while the main image loads */}
      {loadingStrategy === 'progressive' && !isLoaded && (
        <div className="absolute inset-0 bg-white">
          <Image
            src={lowQualitySrc || fallbackSrc}
            alt={alt}
            fill
            sizes={defaultSizes}
            className={`object-${fitMode} object-${objectPosition} blur-sm ${className || ''}`}
          />
        </div>
      )}
    </div>
  )
}
