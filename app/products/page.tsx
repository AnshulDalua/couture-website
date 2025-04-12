"use client"

import Image from "next/image"
import Link from "next/link"

// Mock data for collections
const collections = {
  
  all: {
    title: "ALL",
    products: [
      {
        id: 1,
        name: "Heavyweight Hoodie",
        price: "$40-55",
        slug: "heavyweight-hoodie",
        image: "/shop/7.webp",
      },
      {
        id: 2,
        name: "Heavyweight Crewneck",
        price: "$37-52",
        slug: "heavyweight-crewneck",
        image: "/shop/6.webp",
      },
      {
        id: 3,
        name: "Classic Quarterzip",
        price: "$36-51",
        slug: "classic-quarterzip",
        image: "/shop/3.webp",
      },
      {
        id: 4,
        name: "Straightcut Sweatpants",
        price: "$37-52",
        slug: "straightcut-sweatpants",
        image: "/shop/5.webp",
      },
      {
        id: 5,
        name: "Classic Tshirt",
        price: "$20-35",
        slug: "classic-tshirt",
        image: "/shop/2.webp",
      },
    ],
  },
}

export default function ProductsPage() {
  // Use the "all" collection
  const collection = collections.all;

  return (
    <div className="px-6 py-8">
      <h1 className="text-sm uppercase mb-6">{collection.title}</h1>

      <div className="stussy-product-grid">
        {collection.products.map((product, index) => (
          <Link href={`/products/${product.slug}`} key={product.id} className="stussy-product-card">
            <div className="relative aspect-square w-full mb-2 overflow-hidden">
              <Image
                src={product.image ?? "/placeholder.svg"}
                alt={`${product.name} - High quality custom merchandise`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                className="object-cover object-center"
                priority={index < 4} // Prioritize loading the first 4 products
              />
            </div>
            <h3 className="stussy-product-title">{product.name}</h3>
            <p className="stussy-product-price">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
