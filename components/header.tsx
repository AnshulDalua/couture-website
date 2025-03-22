"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

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
          <Link href="/collections/all" className="stussy-nav-item">
            SHOP
          </Link>

          <Link href="/features" className="stussy-nav-item">
            LOOKBOOK
          </Link>

          <Link href="/reviews" className="stussy-nav-item">
            OUR PROCESS
          </Link>

          

          

          <div className="stussy-nav-item">
            <button className="flex items-center">
              MORE <ChevronDown className="ml-1 h-3 w-3" />
            </button>
            <div className="stussy-dropdown">
              <Link href="/support/contact">CONTACT</Link>
              <Link href="/support/shipping">SHIPPING</Link>
              <Link href="/support/returns">RETURNS</Link>
              <Link href="/support/faq">FAQ</Link>
              <Link href="/support/terms">TERMS</Link>
              <Link href="/support/privacy">PRIVACY</Link>
              <Link href="/reviews">REVIEWS</Link>
            </div>
          </div>
        </nav>

        {/* Right Side Navigation */}
        <div className="flex items-center stussy-nav">
          <Link href="/order" className="mx-3">
            ORDER
          </Link>

          {/* Mobile Menu Button */}
          <button className="ml-4 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* Mobile Menu - updated to include Reviews */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4">
          <nav className="flex flex-col stussy-nav">
            <Link href="/collections/all" className="py-2">
              SHOP
            </Link>
            <Link href="/features" className="py-2">
              LOOKBOOK
            </Link>
            <Link href="/reviews" className="py-2">
              PROCESS
            </Link>
            <Link href="/support" className="py-2">
              SUPPORT
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

