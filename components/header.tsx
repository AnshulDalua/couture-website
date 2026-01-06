"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import HamburgerIcon from "@/app/components/HamburgerIcon"
import MobileMenu from "@/app/components/MobileMenu"
import { usePathname } from "next/navigation"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Helper function to check if the current path matches a nav item
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="fixed top-0 left-0 right-0 py-5 px-6 border-b border-[#ececec] bg-white z-50">
      <div className="flex items-center justify-between">
        {/* Logo - increased size while maintaining container height */}
        <div className="w-[80px] h-[35px] flex items-center overflow-hidden">
          <Link href="/">
            <Image
              src="/logo/Artboard 1.png"
              alt="CoutureByIkgai"
              width={120}
              height={60}
              className="w-full"
            />
          </Link>
        </div>

        {/* Desktop Navigation - modified to direct SHOP to /collections/all */}
        <nav className="hidden md:flex stussy-nav">
          <Link href="/products" className={`stussy-nav-item ${isActive('/products') ? 'font-bold' : ''}`}>
            OUR BLANKS
          </Link>

          <Link href="/lookbook" className={`stussy-nav-item ${isActive('/lookbook') ? 'font-bold' : ''}`}>
            LOOKBOOK
          </Link>

          <Link href="/our-designs" className={`stussy-nav-item ${isActive('/our-designs') ? 'font-bold' : ''}`}>
            OUR DESIGNS
          </Link>

          <Link href="/our-process" className={`stussy-nav-item ${isActive('/our-process') ? 'font-bold' : ''}`}>
            PROCESS
          </Link>

          <Link href="/support/reviews" className={`stussy-nav-item ${isActive('/support/reviews') ? 'font-bold' : ''}`}>
            REVIEWS
          </Link>

          <div className="stussy-nav-item">
            <button className="flex items-center">
              MORE <ChevronDown className="ml-1 h-3 w-3" />
            </button>
            <div className="stussy-dropdown">
              <Link href="/about-us" className={isActive('/about-us') ? 'font-bold' : ''}>ABOUT US</Link>
              <Link href="/support/contact" className={isActive('/support/contact') ? 'font-bold' : ''}>CONTACT</Link>
              <Link href="/support/faq" className={isActive('/support/faq') ? 'font-bold' : ''}>FAQ</Link>
              <Link href="/blog" className={isActive('/blog') ? 'font-bold' : ''}>BLOG</Link>
              <Link href="/support/privacy" className={isActive('/support/privacy') ? 'font-bold' : ''}>PRIVACY POLICY</Link>
              <Link href="/support/terms" className={isActive('/support/terms') ? 'font-bold' : ''}>TERMS OF SERVICE</Link>
            </div>
          </div>
        </nav>

        {/* Right Side Navigation */}
        <div className="flex items-center stussy-nav">
          <Link href="/order" className="mx-3">
            <span className="border border-black px-4 py-2 uppercase text-xs tracking-wider hover:bg-black hover:text-white transition-colors duration-300">
              REQUEST ORDER
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="ml-4 md:hidden">
            <HamburgerIcon 
              isOpen={mobileMenuOpen} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            />
          </div>
        </div>
      </div>

      {/* Replace simple mobile menu with the new component */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </header>
  )
}
