"use client"

import Image from "next/image"
import Link from "next/link"
import OptimizedImage from "@/app/components/OptimizedImage"
import WinterRushCountdown from "@/app/components/WinterRushCountdown"

// Mock data for collections
const collections = {
  
  all: {
    title: "OUR BLANKS",
    products: [
      {
        id: 1,
        name: "Heavyweight Hoodie",
        price: "$58",
        slug: "heavyweight-hoodie",
        image: "/shop/7.webp",
      },
      {
        id: 2,
        name: "Heavyweight Crewneck",
        price: "$53",
        slug: "heavyweight-crewneck",
        image: "/shop/6.webp",
      },
      {
        id: 3,
        name: "Classic Quarterzip",
        price: "$53",
        slug: "classic-quarterzip",
        image: "/shop/3.webp",
      },
      {
        id: 4,
        name: "Straightcut Sweatpants",
        price: "$55",
        slug: "straightcut-sweatpants",
        image: "/shop/5.webp",
      },
      {
        id: 5,
        name: "Classic Tshirt",
        price: "$26",
        slug: "classic-tshirt",
        image: "/shop/2.webp",
      },
      {
        id: 6,
        name: "Baby Tee",
        price: "$24",
        slug: "baby-tee",
        image: "/shop/babytee/1.webp",
      },
      {
        id: 7,
        name: "Racer Tee",
        price: "$24",
        slug: "racer-tee",
        image: "/shop/racertee/3.webp",
      },
      {
        id: 8,
        name: "Tank Top",
        price: "$22",
        slug: "tank-top",
        image: "/shop/tank/4.webp",
      },
      {
        id: 9,
        name: "Boy Shorts",
        price: "$20",
        slug: "boy-shorts",
        image: "/shop/boyshorts/6.webp",
      },
    ],
  },
}

export default function ProductsPage() {
  // Use the "all" collection
  const collection = collections.all;

  return (
    <div className="min-h-screen">
      <WinterRushCountdown />
      <div className="px-6 py-8">
        <h1 className="text-sm uppercase mb-6">{collection.title}</h1>

      <div className="stussy-product-grid">
        {collection.products.map((product, index) => (
          <Link href={`/products/${product.slug}`} key={product.id} className="stussy-product-card">
            <OptimizedImage
              src={product.image ?? "/placeholder.svg"}
              alt={`${product.name} - High quality custom merchandise`}
              priority={index < 2}
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              aspectRatio="aspect-square"
              containerClassName="mb-2 w-full"
              loadingStrategy={index < 4 ? "eager" : "progressive"}
              fetchPriority={index < 2 ? "high" : "auto"}
            />
            <h3 className="stussy-product-title">{product.name}</h3>
            <p className="stussy-product-price">Starting at {product.price}</p>
          </Link>
        ))}
      </div>
      </div>
    </div>
  )
}
