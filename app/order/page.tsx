"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

type OrderProduct = {
  id: number
  name: string
  price: number
  image: string
  size: string
  color: string
}

export default function OrderPage() {
  const [orderProduct, setOrderProduct] = useState<OrderProduct | null>(null)

  useEffect(() => {
    const savedProduct = localStorage.getItem("orderProduct")
    if (savedProduct) {
      setOrderProduct(JSON.parse(savedProduct))
    }
  }, [])

  return (
    <div className="px-6 py-8">
      <h1 className="text-sm uppercase mb-6">ORDER</h1>

      <div className="max-w-3xl mx-auto">
        {orderProduct && (
          <div className="mb-8 p-4 border border-[#ececec]">
            <h2 className="text-sm uppercase mb-4">ORDER SUMMARY</h2>
            <div className="flex items-start">
              <div className="w-20 h-20 relative flex-shrink-0">
                <img
                  src={orderProduct.image || "/placeholder.svg"}
                  alt={orderProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xs uppercase">{orderProduct.name}</h3>
                <p className="text-xs mt-1">${orderProduct.price}</p>
                <p className="text-xs mt-1">Size: {orderProduct.size}</p>
                <p className="text-xs mt-1">Color: {orderProduct.color}</p>
              </div>
            </div>
          </div>
        )}

        {/* Typeform embed */}
        <iframe
          src="https://form.typeform.com/to/your-typeform-id-here"
          style={{ border: "none", width: "100%", height: "600px" }}
          title="Order Form"
        ></iframe>

        <div className="mt-8">
          <h2 className="text-sm uppercase mb-3">ORDER INFORMATION</h2>
          <p className="text-xs mb-4">
            Complete the form above to place your order. For any questions regarding your order, please contact our
            customer service team.
          </p>

          <Button className="stussy-button">CONTACT SUPPORT</Button>
        </div>
      </div>
    </div>
  )
}

