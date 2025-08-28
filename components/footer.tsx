"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const isAboutUsPage = pathname === "/about-us"

  return (
    <>
      {isAboutUsPage && (
        <>
          {/* Yellow Arlo positioned at the top center of the screen - responsive sizing */}
          <div className="fixed z-50">
            {/* Desktop version */}
            <div className="hidden md:block" style={{ position: 'fixed', top: '100px', left: '50%', transform: 'translateX(-50%)' }}>
              <Image 
                src="/arlo/yellow.webp" 
                alt="Yellow Arlo" 
                width={180} 
                height={180} 
                className="object-contain"
                priority
              />
            </div>
            {/* Mobile version - positioned at the same visual height */}
            <div className="block md:hidden" style={{ position: 'fixed', top: '100px', left: '50%', transform: 'translateX(-50%)' }}>
              <Image 
                src="/arlo/yellow.webp" 
                alt="Yellow Arlo" 
                width={90} 
                height={90} 
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Green Arlo positioned at the left side of the page with padding */}
          <div className="fixed left-0 bottom-12 z-40">
            <Image 
              src="/arlo/green.webp" 
              alt="Green Arlo" 
              width={200} 
              height={200} 
              className="object-contain"
            />
          </div>
          
          {/* Red Arlo positioned at the right side with zero spacing */}
          <div className="fixed right-0 bottom-2 z-40">
            <div style={{ marginRight: '-50px' }}>
              <Image 
                src="/arlo/red.webp" 
                alt="Red Arlo" 
                width={300} 
                height={300} 
                className="object-contain"
              />
            </div>
          </div>
        </>
      )}
      <footer className="fixed bottom-0 left-0 right-0 py-4 px-6 border-t border-[#ececec] stussy-footer bg-white z-40">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Link 
              href="https://instagram.com/couturebyikigai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-90 transition-opacity group"
            >
              <div className="instagram-gradient-icon"></div>
              <span className="uppercase font-normal relative">
                <span className="instagram-gradient-text">INSTAGRAM</span>
                <span className="absolute inset-0 uppercase font-normal opacity-0 group-hover:opacity-100 transition-opacity">INSTAGRAM</span>
              </span>
            </Link>
          </div>

          <div>
            <p>&copy; {currentYear} COUTUREBYIKIGAI</p>
          </div>
        </div>
      </footer>
    </>
  )
}
