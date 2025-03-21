"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from "next/link"

type OrderProduct = {
  id: number
  name: string
  price: number
  size: string
  color: string
  image: string
}

export default function OrderPage() {
  const [orderProduct, setOrderProduct] = useState<OrderProduct | null>(null)

  useEffect(() => {
    // Get order product from localStorage
    const product = localStorage.getItem('orderProduct')
    if (product) {
      setOrderProduct(JSON.parse(product))
    }
  }, [])

  return (
    <div className="px-6 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Place Order</h1>

        {orderProduct && (
          <div className="mb-8 p-4 border border-gray-200 rounded-lg">
            <h2 className="text-sm uppercase mb-3">ORDER SUMMARY</h2>
            <div className="flex items-start">
              <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={orderProduct.image}
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

        <div id="jotform-container" className="mb-8">
          <iframe
            src="https://form.jotform.com/243401311539043"
            className="w-full border-none"
            style={{ height: '800px' }}
          />
        </div>

        <div className="mt-8">
          <h2 className="text-sm uppercase mb-3">ORDER INFORMATION</h2>
          <p className="text-xs mb-4">
            Complete the form above to place your order. For any questions regarding your order, please contact our
            customer service team.
          </p>

          <Link href="/support/contact">
            <Button className="stussy-button">CONTACT SUPPORT</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
