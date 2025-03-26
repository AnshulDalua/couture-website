import Link from "next/link"

// Volume discount data with dollar amounts
const volumeDiscounts = [
  {
    product: "Heavyweight Hoodie",
    discounts: [
      { quantity: "10-29 items", price: "$55 per hoodie" },
      { quantity: "30-59 items", price: "$47-49 per hoodie" },
      { quantity: "60-100 items", price: "$40-45 per hoodie" },
      { quantity: "100+", price: "Custom Pricing" }
    ]
  },
  {
    product: "Heavyweight Crewneck",
    discounts: [
      { quantity: "10-29 items", price: "$52 per crewneck" },
      { quantity: "30-59 items", price: "$44-46 per crewneck" },
      { quantity: "60-100 items", price: "$37-42 per crewneck" },
      { quantity: "100+", price: "Custom Pricing" }
    ]
  },
  {
    product: "Straightcut Sweatpants",
    discounts: [
      { quantity: "10-29 items", price: "$52 per sweatpant" },
      { quantity: "30-59 items", price: "$44-46 per sweatpant" },
      { quantity: "60-100 items", price: "$37-42 per sweatpant" },
      { quantity: "100+", price: "Custom Pricing" }
    ]
  },
  {
    product: "Standard Quarter Zip",
    discounts: [
      { quantity: "10-29 items", price: "$51 per quarter zip" },
      { quantity: "30-59 items", price: "$43-45 per quarter zip" },
      { quantity: "60-100 items", price: "$36-41 per quarter zip" },
      { quantity: "100+", price: "Custom Pricing" }
    ]
  },
  {
    product: "Standard T-Shirt",
    discounts: [
      { quantity: "10-29 items", price: "$35 per t-shirt" },
      { quantity: "30-59 items", price: "$27-29 per t-shirt" },
      { quantity: "60-100 items", price: "$20-25 per t-shirt" },
      { quantity: "100+", price: "Custom Pricing" }
    ]
  }
]

export default function PricingPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-sm uppercase mb-8">PRICING</h1>
        {/* Volume Discounts */}
        <div className="mb-16">
          
          {/* Volume Discount Tables - One per product */}
          <div className="space-y-12">
            {volumeDiscounts.map((item) => (
              <div key={item.product} className="mb-10">
                <h3 className="text-xs font-medium mb-4 text-center">{item.product}</h3>
                <div className="flex justify-center">
                  <table className="w-full max-w-md border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-center w-1/2">Quantity</th>
                        <th className="py-3 px-4 text-center w-1/2">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.discounts.map((discount, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 px-4 text-center">{discount.quantity}</td>
                          <td className="py-3 px-4 text-center">{discount.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Orders */}
        <div className="mt-16 text-center">
          <h2 className="text-sm uppercase font-medium mb-4">CUSTOM ORDERS</h2>
          <p className="text-xs mb-6">
            For custom designs, bulk orders, or special requirements, please contact our team.
            We offer competitive pricing for organizations, events, and corporate orders.
          </p>
          <div>
            <Link href="/order">
              <button className="stussy-button">PLACE CUSTOM ORDER</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 