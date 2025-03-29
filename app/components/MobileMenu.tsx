"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown, ChevronUp } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    more: false
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 bg-white"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex justify-between items-center p-5 border-b border-gray-200">
            <div className="w-[60px] h-[35px] flex items-center">
              <Link href="/" onClick={onClose}>
                <Image
                  src="https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//Artboard%201.png"
                  alt="CoutureByIkgai"
                  width={85}
                  height={45}
                  className="w-full"
                />
              </Link>
            </div>
            <button onClick={onClose} className="p-2">
              <X size={20} />
            </button>
          </div>
          
          <div className="flex flex-col divide-y divide-gray-200">
            {/* Shop - now making the entire div clickable */}
            <Link 
              href="/products" 
              onClick={onClose} 
              className="block py-5 px-6"
            >
              <span className="text-lg font-medium">SHOP</span>
            </Link>
            
            {/* Lookbook - entire div clickable */}
            <Link 
              href="/lookbook" 
              onClick={onClose} 
              className="block py-5 px-6"
            >
              <span className="text-lg font-medium">LOOKBOOK</span>
            </Link>
            
            {/* Our Process - entire div clickable */}
            <Link 
              href="/our-process" 
              onClick={onClose} 
              className="block py-5 px-6"
            >
              <span className="text-lg font-medium">OUR PROCESS</span>
            </Link>
            
            {/* More Section - kept expandable */}
            <div className="py-5 px-6">
              <button 
                onClick={() => toggleSection('more')}
                className="flex justify-between items-center w-full"
              >
                <span className="text-lg font-medium">MORE</span>
                {expandedSections.more ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              
              {expandedSections.more && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-3 pl-4"
                >
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        href="/support/contact" 
                        onClick={onClose} 
                        className="block py-2 text-gray-600"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/support/shipping-returns" 
                        onClick={onClose} 
                        className="block py-2 text-gray-600"
                      >
                        Shipping + Returns
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/support/faq" 
                        onClick={onClose} 
                        className="block py-2 text-gray-600"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/support/reviews" 
                        onClick={onClose} 
                        className="block py-2 text-gray-600"
                      >
                        Reviews
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/support/pricing" 
                        onClick={onClose} 
                        className="block py-2 text-gray-600"
                      >
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
            
            {/* Order - entire div clickable */}
            <Link 
              href="/order" 
              onClick={onClose} 
              className="block py-5 px-6"
            >
              <span className="text-lg font-medium">ORDER</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 