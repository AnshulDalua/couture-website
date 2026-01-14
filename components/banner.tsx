"use client"

import Link from "next/link"

export default function Banner() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-black text-white z-[60] py-2 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center text-xs sm:text-sm">
        <span className="font-medium">Join the team!</span>
        <div className="flex items-center gap-3 sm:gap-4">
          <Link 
            href="https://forms.gle/HG19fcHi1RVWCNRY7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-gray-300 transition-colors whitespace-nowrap"
          >
            Marketing Intern
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link 
            href="https://forms.gle/UTahECLUZZtEWKdc6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-gray-300 transition-colors whitespace-nowrap"
          >
            TikTok Creator
          </Link>
        </div>
      </div>
    </div>
  )
}
