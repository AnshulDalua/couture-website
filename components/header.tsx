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
              src="https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//Artboard%201.png"
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
            SHOP
          </Link>

          <Link href="/lookbook" className={`stussy-nav-item ${isActive('/lookbook') ? 'font-bold' : ''}`}>
            LOOKBOOK
          </Link>

          <Link href="/our-process" className={`stussy-nav-item ${isActive('/our-process') ? 'font-bold' : ''}`}>
            OUR PROCESS
          </Link>

          <div className="stussy-nav-item">
            <button className={`flex items-center ${isActive('/support') ? 'font-bold' : ''}`}>
              MORE <ChevronDown className="ml-1 h-3 w-3" />
            </button>
            <div className="stussy-dropdown">
              <Link href="/support/contact" className={isActive('/support/contact') ? 'font-bold' : ''}>CONTACT</Link>
              {/* <Link href="/support/about" className={isActive('/support/about') ? 'font-bold' : ''}>ABOUT</Link> */}
              <Link href="/support/faq" className={isActive('/support/faq') ? 'font-bold' : ''}>FAQ</Link>
              <Link href="/support/reviews" className={isActive('/support/reviews') ? 'font-bold' : ''}>REVIEWS</Link>
              <Link href="/support/pricing" className={isActive('/support/pricing') ? 'font-bold' : ''}>PRICING</Link>
            </div>
          </div>
        </nav>

        {/* Right Side Navigation */}
        <div className="flex items-center stussy-nav">
          <Link href="/order" className={`mx-3 ${isActive('/order') ? 'font-bold' : ''}`}>
            ORDER
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
