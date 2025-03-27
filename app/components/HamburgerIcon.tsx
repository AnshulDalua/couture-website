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
      className="relative w-5 h-5 flex justify-center items-center focus:outline-none md:hidden"
      aria-label="Toggle menu"
    >
      <div className="flex flex-col justify-between w-3 h-2.5 transform transition-all duration-300">
        <motion.span 
          className="w-full bg-black rounded-lg"
          style={{ height: "1px" }}
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 2 : 0 }}
        />
        <motion.span 
          className="w-full bg-black rounded-lg"
          style={{ height: "1px" }}
          animate={{ opacity: isOpen ? 0 : 1 }}
        />
        <motion.span 
          className="w-full bg-black rounded-lg"
          style={{ height: "1px" }}
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -2 : 0 }}
        />
      </div>
    </button>
  )
} 