import Image from "next/image"

export default function AboutUsPage() {
  return (
    <div className="relative">
      <h1 className="text-sm uppercase px-6 py-8 md:py-8">ABOUT US</h1>

      {/* Desktop Layout */}
      <div className="hidden md:block relative min-h-[80vh] px-6">

        {/* Main text content - centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-md text-center">
            <div className="text-xs leading-relaxed space-y-4">
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

      {/* Mobile Layout - optimized to fit on one screen */}
      <div className="md:hidden">
        {/* Mobile container with all content visible */}
        <div className="relative">
          {/* Main content with optimized spacing */}
          <div className="px-3 pb-32"> {/* Reduced horizontal padding, adjusted bottom padding */}
            <div className="text-[10px] leading-none space-y-1 text-center max-w-full mx-auto"> {/* Smaller font, tighter line height, wider content, reduced spacing */}
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