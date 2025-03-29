"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import HamburgerIcon from "@/app/components/HamburgerIcon"
import MobileMenu from "@/app/components/MobileMenu"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="py-5 px-6 border-b border-[#ececec]">
      <div className="flex items-center justify-between">
        {/* Logo - adjusted alignment */}
        <div className="w-[60px] h-[35px] flex items-center">
          <Link href="/">
            <Image
              src="https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//Artboard%201.png"
              alt="CoutureByIkgai"
              width={85}
              height={45}
              className="w-full"
            />
          </Link>
        </div>

        {/* Desktop Navigation - modified to direct SHOP to /collections/all */}
        <nav className="hidden md:flex stussy-nav">
          <Link href="/products" className="stussy-nav-item">
            SHOP
          </Link>

          <Link href="/lookbook" className="stussy-nav-item">
            LOOKBOOK
          </Link>

          <Link href="/our-process" className="stussy-nav-item">
            OUR PROCESS
          </Link>

          <div className="stussy-nav-item">
            <button className="flex items-center">
              MORE <ChevronDown className="ml-1 h-3 w-3" />
            </button>
            <div className="stussy-dropdown">
              <Link href="/support/contact">CONTACT</Link>
              <Link href="/support/shipping-returns">SHIPPING + RETURNS</Link>
              <Link href="/support/faq">FAQ</Link>
              <Link href="/support/reviews">REVIEWS</Link>
              <Link href="/support/pricing">PRICING</Link>
            </div>
          </div>
        </nav>

        {/* Right Side Navigation */}
        <div className="flex items-center stussy-nav">
          <Link href="/order" className="mx-3">
            ORDER
          </Link>

          {/* ONLY CHANGE: Replace text button with hamburger icon */}
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

