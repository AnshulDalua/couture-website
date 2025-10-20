'use client'

import Image from "next/image"
import { useEffect, useState, useRef } from "react"

export default function OurProcessPage() {
  const [playingGifs, setPlayingGifs] = useState<Set<number>>(new Set())
  const [gifKeys, setGifKeys] = useState({ gif1: 0, gif2: 0, gif3: 0 })
  
  const container1Ref = useRef<HTMLDivElement>(null)
  const container2Ref = useRef<HTMLDivElement>(null)
  const container3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Intersection Observer for mobile scroll detection
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the element is visible
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const gifIndex = parseInt(entry.target.getAttribute('data-gif-index') || '0')
          handleGifPlay(gifIndex)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    if (container1Ref.current) observer.observe(container1Ref.current)
    if (container2Ref.current) observer.observe(container2Ref.current)
    if (container3Ref.current) observer.observe(container3Ref.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleGifPlay = (gifIndex: number) => {
    setPlayingGifs(prev => new Set(prev).add(gifIndex))
    
    // Increment the key to restart the GIF
    if (gifIndex === 0) {
      setGifKeys(prev => ({ ...prev, gif1: prev.gif1 + 1 }))
    } else if (gifIndex === 1) {
      setGifKeys(prev => ({ ...prev, gif2: prev.gif2 + 1 }))
    } else if (gifIndex === 2) {
      setGifKeys(prev => ({ ...prev, gif3: prev.gif3 + 1 }))
    }
  }

  const handleGifStop = (gifIndex: number) => {
    setPlayingGifs(prev => {
      const newSet = new Set(prev)
      newSet.delete(gifIndex)
      return newSet
    })
  }

  return (
    <div className="min-h-screen">
      <h1 className="text-sm uppercase px-6 py-8">OUR PROCESS</h1>

      <div className="px-6">
        {/* All steps in horizontal layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col">
            <div 
              ref={container1Ref}
              data-gif-index="0"
              className="relative h-[50vh] md:h-[60vh] mb-4 overflow-hidden bg-white cursor-pointer flex items-center justify-center"
              onMouseEnter={() => handleGifPlay(0)}
              onMouseLeave={() => handleGifStop(0)}
            >
              {playingGifs.has(0) ? (
                <Image
                  key={`gif1-${gifKeys.gif1}`}
                  src={`/process/IMG_9240.GIF?v=${gifKeys.gif1}`}
                  alt="Design process"
                  fill
                  className="object-contain scale-90"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                  unoptimized
                />
              ) : (
                <div className="text-xs text-gray-400 uppercase">Hover to view</div>
              )}
            </div>
            <div className="py-4">
              <h2 className="text-sm uppercase font-medium mb-4">1. Share Your Vision</h2>
              <p className="text-xs">
              Receive your digital render - Once you approve, we'll start production.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col">
            <div 
              ref={container2Ref}
              data-gif-index="1"
              className="relative h-[50vh] md:h-[60vh] mb-4 overflow-hidden bg-white cursor-pointer flex items-center justify-center"
              onMouseEnter={() => handleGifPlay(1)}
              onMouseLeave={() => handleGifStop(1)}
            >
              {playingGifs.has(1) ? (
                <Image
                  key={`gif2-${gifKeys.gif2}`}
                  src={`/process/design.gif?v=${gifKeys.gif2}`}
                  alt="Material selection"
                  fill
                  className="object-contain scale-90"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
              ) : (
                <div className="text-xs text-gray-400 uppercase">Hover to view</div>
              )}
            </div>
            <div className="py-4">
              <h2 className="text-sm uppercase font-medium mb-4">2. High quality production </h2>
              <p className="text-xs">
              We start manufacturing your designs using embroidery, screenprint and hot press.            
                </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col">
            <div 
              ref={container3Ref}
              data-gif-index="2"
              className="relative h-[50vh] md:h-[60vh] mb-4 overflow-hidden bg-white cursor-pointer flex items-center justify-center"
              onMouseEnter={() => handleGifPlay(2)}
              onMouseLeave={() => handleGifStop(2)}
            >
              {playingGifs.has(2) ? (
                <Image
                  key={`gif3-${gifKeys.gif3}`}
                  src={`/process/IMG_9200.GIF?v=${gifKeys.gif3}`}
                  alt="Production process"
                  fill
                  className="object-contain scale-90"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
              ) : (
                <div className="text-xs text-gray-400 uppercase">Hover to view</div>
              )}
            </div>
            <div className="py-4">
              <h2 className="text-sm uppercase font-medium mb-4">3. DELIVERY </h2>
              <p className="text-xs">
              Expect your order at your doorstep in 2-3 weeks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}