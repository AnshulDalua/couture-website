import Link from "next/link"

export default function SupportPage() {
  return (
    <div className="px-6 py-8">
      <h1 className="text-sm uppercase mb-8">SUPPORT</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
        {/* Contact */}
        <Link href="/support/contact" className="block group">
          <div className="border border-gray-200 p-6 h-full hover:border-black transition-colors">
            <h2 className="text-sm uppercase font-medium mb-2">CONTACT</h2>
            <p className="text-xs">Get in touch with our customer service team.</p>
          </div>
        </Link>

        {/* Shipping + Returns */}
        <Link href="/support/shipping-returns" className="block group">
          <div className="border border-gray-200 p-6 h-full hover:border-black transition-colors">
            <h2 className="text-sm uppercase font-medium mb-2">SHIPPING + RETURNS</h2>
            <p className="text-xs">Information about our shipping policies and return process.</p>
          </div>
        </Link>

        {/* FAQ */}
        <Link href="/support/faq" className="block group">
          <div className="border border-gray-200 p-6 h-full hover:border-black transition-colors">
            <h2 className="text-sm uppercase font-medium mb-2">FAQ</h2>
            <p className="text-xs">Answers to frequently asked questions.</p>
          </div>
        </Link>

        {/* Reviews - temporarily disabled */}
        {/* <Link href="/support/reviews" className="block group">
          <div className="border border-gray-200 p-6 h-full hover:border-black transition-colors">
            <h2 className="text-sm uppercase font-medium mb-2">REVIEWS</h2>
            <p className="text-xs">See what our customers are saying about our products.</p>
          </div>
        </Link> */}
      </div>
    </div>
  )
}

