import Image from "next/image"
import Link from "next/link"

// Pricing tiers
const pricingTiers = [
  {
    name: "ESSENTIALS",
    description: "Our core collection of everyday basics",
    price: "From $45",
    features: [
      "Premium cotton basics",
      "Classic designs",
      "Durable construction",
      "Standard shipping",
      "30-day returns"
    ],
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//IMG_2127.png",
    cta: "SHOP ESSENTIALS",
    link: "/shop?collection=essentials"
  },
  {
    name: "PREMIUM",
    description: "Elevated staples with enhanced details",
    price: "From $95",
    features: [
      "Luxury materials",
      "Enhanced construction",
      "Limited edition colors",
      "Free standard shipping",
      "60-day returns"
    ],
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//3.jpg",
    cta: "SHOP PREMIUM",
    link: "/shop?collection=premium",
    highlighted: true
  },
  {
    name: "COLLECTIONS",
    description: "Limited edition seasonal releases",
    price: "From $120",
    features: [
      "Exclusive designs",
      "Collector's items",
      "Numbered editions",
      "Free express shipping",
      "90-day returns"
    ],
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//7.jpg",
    cta: "SHOP COLLECTIONS",
    link: "/shop?collection=limited"
  }
]

export default function PricingPage() {
  return (
    <div className="px-6 py-8">
      <h1 className="text-sm uppercase mb-8">PRICING</h1>

      <div className="max-w-5xl mx-auto">
        {/* Introduction */}
        <div className="mb-12 max-w-2xl">
          <p className="text-sm mb-4">
            At IKIGAI, we believe in transparent pricing that reflects the quality of our materials, 
            craftsmanship, and commitment to sustainable practices. Our products are designed to last, 
            providing value that extends beyond the initial purchase.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`border ${tier.highlighted ? 'border-black' : 'border-gray-200'} p-6`}
            >
              <div className="relative aspect-square w-full mb-6 overflow-hidden">
                <Image
                  src={tier.image}
                  alt={tier.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full"
                />
              </div>
              <h2 className="text-sm uppercase font-medium mb-2">{tier.name}</h2>
              <p className="text-sm font-bold mb-2">{tier.price}</p>
              <p className="text-xs mb-4">{tier.description}</p>
              
              <ul className="text-xs mb-6 space-y-2">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href={tier.link}>
                <button className={`w-full py-2 px-4 text-xs uppercase ${
                  tier.highlighted 
                    ? 'bg-black text-white' 
                    : 'border border-black hover:bg-black hover:text-white transition-colors'
                }`}>
                  {tier.cta}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-sm uppercase font-medium mb-4">MEMBERSHIP BENEFITS</h2>
            <p className="text-xs mb-4">
              Join our membership program to receive exclusive benefits:
            </p>
            <ul className="text-xs list-disc pl-4 space-y-2">
              <li>Early access to new collections</li>
              <li>Member-only discounts</li>
              <li>Free shipping on all orders</li>
              <li>Extended return period</li>
              <li>Birthday gifts</li>
            </ul>
            <div className="mt-4">
              <Link href="/membership">
                <button className="stussy-button">JOIN NOW</button>
              </Link>
            </div>
          </div>
          
          <div>
            <h2 className="text-sm uppercase font-medium mb-4">BULK ORDERS</h2>
            <p className="text-xs mb-4">
              For wholesale inquiries or custom bulk orders, we offer special pricing and 
              customization options. Contact our team to discuss your specific requirements.
            </p>
            <div className="mt-4">
              <Link href="/support/contact?subject=bulk-order">
                <button className="stussy-button">CONTACT US</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 