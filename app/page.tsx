"use client"

import Image from "next/image"

export default function HomePage() {
  return (
    <div className="h-[calc(100vh-120px)] flex items-center md:items-start justify-center px-2 md:px-2 md:pt-4"> {/* Adjusted vertical alignment for desktop */}
      {/* Desktop Version - Three images side by side */}
      <div className="hidden md:block relative w-full max-w-[98%]"> {/* Increased max-width for even less whitespace */}
        <div className="flex w-full"> {/* Changed to flex with no gap */}
          {[1, 2, 3].map((index) => (
            <div key={index} className="relative w-1/3 h-[80vh]"> {/* Increased height from 70vh to 80vh */}
              <Image
                src="https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//19000025.png"
                alt="IKIGAI Featured Collection"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        
        {/* Overlay text for desktop - single line */}
        <div className="absolute bottom-16 right-6 z-10">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-right whitespace-nowrap" 
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            NOT NORMAL MERCH
          </h1>
        </div>
      </div>

      {/* Mobile Version - Single image */}
      <div className="md:hidden relative w-full h-full">
        <Image
          src="https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//19000025.png"
          alt="IKIGAI Featured Collection"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        
        {/* Overlay text for mobile - kept on multiple lines but larger */}
        <div className="absolute bottom-12 right-6 text-right z-10">
          <h1 
            className="text-5xl font-bold text-white" /* Increased from text-4xl to text-5xl */
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            NOT<br />NORMAL<br />MERCH
          </h1>
        </div>
      </div>
    </div>
  )
}

