import Image from "next/image"

export default function AboutUsPage() {
  return (
    <div className="relative">
      <h1 className="text-sm uppercase px-6 py-2 md:py-8">ABOUT US</h1>

      {/* Desktop Layout */}
      <div className="hidden md:block relative min-h-[80vh] px-6">
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
      <div className="md:hidden relative">
        {/* Mobile container with full height */}
        <div className="h-screen relative overflow-hidden">
          {/* Yellow character positioned closer to header */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 translate-x-4 rotate-[30deg] w-24 h-24 z-10">
            <Image
              src="/arlo/yellow.png"
              alt="Yellow character"
              fill
              className="object-contain"
            />
          </div>

          {/* Main content positioned close to yellow character */}
          <div className="absolute top-36 left-1/2 transform -translate-x-1/2 px-6">
            <div className="text-xs leading-tight space-y-2 text-center max-w-sm">
              <p>
                COUTURE WAS FOUNDED BY 3 BEST FRIENDS DURING THEIR SENIOR YEAR AT THE UNIVERSITY OF MICHIGAN WITH A SIMPLE MISSION IN MIND - TO CONNECT PEOPLE & ORGANIZATIONS THROUGH CLOTHING. SO WE SET OUT TO MAKE MERCH THAT PEOPLE ACTUALLY <em>WANT</em> TO WEAR.
              </p>
              
              <p>
                IN JUST 6 MONTHS, WE'VE BUILT A COMMUNITY OF OVER 2000 STUDENTS ALL AROUND THE WORLD. EVERY ORGANIZATION. HAS A STORY WORTH TELLING.
              </p>
              
              <p>
                WE'RE HERE TO BRING YOUR VISIONS TO LIFE. THIS IS NOT NORMAL MERCH. THIS THE BEST MERCH IN THE WORLD. AND WE'RE JUST GETTING STARTED.
              </p>
              
              <p className="pt-2">
                ◊ COUTURE, EST 2024
              </p>
            </div>
          </div>

          {/* Bottom characters positioned flush at bottom */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
            <div className="w-48 h-56 relative">
              <Image
                src="/arlo/green.png"
                alt="Green character"
                fill
                className="object-contain object-bottom"
              />
            </div>
            <div className="w-48 h-56 relative">
              <Image
                src="/arlo/red.png"
                alt="Red character"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}