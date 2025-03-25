"use client"

import { useState } from "react"
import Link from "next/link"
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
            <Link href="/" onClick={onClose} className="w-24">
              <img 
                src="https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//Artboard%201.png" 
                alt="COUTURE" 
                className="h-8" 
              />
            </Link>
            <button onClick={onClose} className="p-2">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col divide-y divide-gray-200">
            {/* Shop - now a simple link */}
            <div className="py-5 px-6">
              <Link href="/collections/all" onClick={onClose} className="text-lg font-medium">
                SHOP
              </Link>
            </div>
            
            {/* Lookbook */}
            <div className="py-5 px-6">
              <Link href="/lookbook" onClick={onClose} className="text-lg font-medium">
                LOOKBOOK
              </Link>
            </div>
            
            {/* Our Process */}
            <div className="py-5 px-6">
              <Link href="/our-process" onClick={onClose} className="text-lg font-medium">
                OUR PROCESS
              </Link>
            </div>
            
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
                    <li><Link href="/support/contact" onClick={onClose} className="text-gray-600">Contact</Link></li>
                    <li><Link href="/support/shipping-returns" onClick={onClose} className="text-gray-600">Shipping + Returns</Link></li>
                    <li><Link href="/support/faq" onClick={onClose} className="text-gray-600">FAQ</Link></li>
                    <li><Link href="/support/reviews" onClick={onClose} className="text-gray-600">Reviews</Link></li>
                    <li><Link href="/support/pricing" onClick={onClose} className="text-gray-600">Pricing</Link></li>
                  </ul>
                </motion.div>
              )}
            </div>
            
            {/* Order */}
            <div className="py-5 px-6">
              <Link href="/order" onClick={onClose} className="text-lg font-medium">
                ORDER
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 