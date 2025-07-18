import Link from "next/link"

// Volume discount data with dollar amounts
const volumeDiscounts = [
  {
    product: "Heavyweight Hoodie",
    discounts: [
      { quantity: "0-39 items", price: "$55 per hoodie" },
      { quantity: "40-100 items", price: "$50 per hoodie" },
      { quantity: "100+", price: "Custom Pricing" }
    ]
  },
  {
    product: "Heavyweight Crewneck",
    discounts: [
      { quantity: "0-39 items", price: "$50 per crewneck" },
      { quantity: "40-100 items", price: "$45 per crewneck" },
      { quantity: "100+", price: "Custom Pricing" }
    ]
  },
  {
    product: "Straightcut Sweatpants",
    discounts: [
      { quantity: "0-39 items", price: "$55 per sweatpant" },
      { quantity: "40-100 items", price: "$50 per sweatpant" },
      { quantity: "100+", price: "Custom Pricing" }
    ]
  },
  {
    product: "Standard Quarter Zip",
    discounts: [
      { quantity: "0-39 items", price: "$50 per quarter zip" },
      { quantity: "40-100 items", price: "$45 per quarter zip" },
      { quantity: "100+", price: "Custom Pricing" }
    ]
  },
  {
    product: "Standard T-Shirt",
    discounts: [
      { quantity: "0-39 items", price: "$30 per t-shirt" },
      { quantity: "40-100 items", price: "$25 per t-shirt" },
      { quantity: "100+", price: "Custom Pricing" }
    ]
  }
]

export default function PricingPage() {
  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-sm uppercase mb-10 text-center">PRICING</h1>
      
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

        {/* Custom Orders */}
        <div className="mt-16 text-center">
          <h2 className="text-sm uppercase font-medium mb-4">CUSTOM ORDERS</h2>
          <p className="text-xs mb-6">
          The prices listed above serve as general estimates and may vary based on design complexity, custom elements, and order specifications. For custom designs, bulk orders, or special requirements, please contact our team.
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