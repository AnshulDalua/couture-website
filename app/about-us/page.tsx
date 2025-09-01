"use client"

import Image from "next/image"
import { useEffect } from "react"

export default function AboutUsPage() {
  // Disable scrolling when component mounts
  useEffect(() => {
    // Save original styles
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    // Disable scrolling
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
      document.documentElement.style.overflow = "";
    };
  }, []);
  return (
    <div className="relative overflow-hidden h-screen max-h-screen">
      <h1 className="text-sm uppercase px-6 py-8 md:py-8">ABOUT US</h1>

      {/* Desktop Layout */}
      <div className="hidden md:block relative h-[calc(100vh-80px)] px-6">

        {/* Main text content - centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-md text-center">
            <div className="text-base leading-relaxed space-y-6">
              <p>
                COUTURE WAS FOUNDED BY 3 BEST FRIENDS DURING THEIR SENIOR YEAR AT THE UNIVERSITY OF MICHIGAN WITH A SIMPLE MISSION IN MIND - TO CONNECT PEOPLE & ORGANIZATIONS THROUGH CLOTHING. SO WE SET OUT TO MAKE MERCH THAT PEOPLE ACTUALLY <em>WANT</em> TO WEAR.
              </p>
              
              <p>
                IN JUST 6 MONTHS, WE'VE BUILT A COMMUNITY OF OVER 2000 STUDENTS ALL AROUND THE WORLD. EVERY ORGANIZATION. HAS A STORY WORTH TELLING.
              </p>
              
              <p>
                WE'RE HERE TO BRING YOUR VISIONS TO LIFE. THIS IS NOT NORMAL MERCH. THIS THE BEST MERCH IN THE WORLD. AND WE'RE JUST GETTING STARTED.
              </p>
              
              <p className="pt-4">
                ◊ COUTURE, EST 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - non-scrollable */}
      <div className="md:hidden h-[calc(100vh-130px)] flex items-center justify-center overflow-hidden" style={{ paddingTop: '0', marginTop: '-40px' }}>
        {/* Mobile container with all content visible and vertically centered */}
        <div className="relative">
          {/* Main content with optimized spacing */}
          <div className="px-3 pb-32"> {/* Reduced horizontal padding, adjusted bottom padding */}
            <div className="text-[10px] leading-none space-y-3 text-center w-[90%] max-w-[300px] mx-auto"> {/* Smaller font, tighter line height, narrower width, reduced spacing */}
              <p>
                COUTURE WAS FOUNDED BY 3 BEST FRIENDS DURING THEIR SENIOR YEAR AT THE UNIVERSITY OF MICHIGAN WITH A SIMPLE MISSION IN MIND - TO CONNECT PEOPLE & ORGANIZATIONS THROUGH CLOTHING. SO WE SET OUT TO MAKE MERCH THAT PEOPLE ACTUALLY <em>WANT</em> TO WEAR.
              </p>
              
              <p>
                IN JUST 6 MONTHS, WE'VE BUILT A COMMUNITY OF OVER 2000 STUDENTS ALL AROUND THE WORLD. EVERY ORGANIZATION. HAS A STORY WORTH TELLING.
              </p>
              
              <p>
                WE'RE HERE TO BRING YOUR VISIONS TO LIFE. THIS IS NOT NORMAL MERCH. THIS THE BEST MERCH IN THE WORLD. AND WE'RE JUST GETTING STARTED.
              </p>
              
              <p className="pt-1">
                ◊ COUTURE, EST 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}