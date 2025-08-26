import Image from "next/image"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <h1 className="text-sm uppercase px-6 py-8">ABOUT US</h1>

      {/* Desktop Layout */}
      <div className="hidden md:block relative h-[80vh] px-6">
        {/* Curved background lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" fill="none">
          <path
            d="M50 300 Q250 150 500 300 Q750 450 950 300"
            stroke="#E5E7EB"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M50 350 Q300 200 600 350 Q800 500 950 350"
            stroke="#E5E7EB"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        {/* Green character - left side */}
        <div className="absolute left-4 bottom-4 w-56 h-56 lg:w-64 lg:h-64">
          <Image
            src="/arlo/green.png"
            alt="Green character"
            fill
            className="object-contain"
          />
        </div>

        {/* Yellow character - top center */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 rotate-[30deg] w-48 h-48 lg:w-56 lg:h-56">
          <Image
            src="/arlo/yellow.png"
            alt="Yellow character"
            fill
            className="object-contain"
          />
        </div>

        {/* Red character - right side */}
        <div className="absolute right-4 bottom-4 w-56 h-56 lg:w-64 lg:h-64">
          <Image
            src="/arlo/red.png"
            alt="Red character"
            fill
            className="object-contain"
          />
        </div>

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

      {/* Mobile Layout */}
      <div className="md:hidden px-6 pb-8">
        {/* Curved background lines for mobile */}
        <svg className="absolute left-0 top-20 w-full h-full opacity-30" viewBox="0 0 400 800" fill="none">
          <path
            d="M50 200 Q200 100 350 200 Q200 300 50 400"
            stroke="#E5E7EB"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Yellow character at top */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 relative transform rotate-[30deg]">
            <Image
              src="/arlo/yellow.png"
              alt="Yellow character"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Main text content */}
        <div className="text-xs leading-relaxed space-y-4 mb-8 relative z-10">
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

        {/* Bottom characters */}
        <div className="flex justify-between items-end">
          <div className="w-32 h-32 relative">
            <Image
              src="/arlo/green.png"
              alt="Green character"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-32 h-32 relative">
            <Image
              src="/arlo/red.png"
              alt="Red character"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}