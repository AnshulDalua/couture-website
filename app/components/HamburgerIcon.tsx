"use client"

import { motion } from "framer-motion"

interface HamburgerIconProps {
  isOpen: boolean
  onClick: () => void
}

export default function HamburgerIcon({ isOpen, onClick }: HamburgerIconProps) {
  return (
    <button 
      onClick={onClick}
      className="relative w-10 h-10 flex justify-center items-center focus:outline-none md:hidden"
      aria-label="Toggle menu"
    >
      <div className="flex flex-col justify-between w-6 h-5 transform transition-all duration-300">
        <motion.span 
          className="h-0.5 w-full bg-black rounded-lg"
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 5 : 0 }}
        />
        <motion.span 
          className="h-0.5 w-full bg-black rounded-lg"
          animate={{ opacity: isOpen ? 0 : 1 }}
        />
        <motion.span 
          className="h-0.5 w-full bg-black rounded-lg"
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -5 : 0 }}
        />
      </div>
    </button>
  )
} 