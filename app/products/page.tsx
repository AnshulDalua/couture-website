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
        image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//7.jpg",
      },
      {
        id: 2,
        name: "Heavyweight Crewneck",
        price: "$37-52",
        slug: "heavyweight-crewneck",
        image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//6.jpg",
      },
      {
        id: 3,
        name: "Classic Quarterzip",
        price: "$36-51",
        slug: "classic-quarterzip",
        image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//3.jpg",
      },
      {
        id: 4,
        name: "Straightcut Sweatpants",
        price: "$37-52",
        slug: "straightcut-sweatpants",
        image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//5.jpg",
      },
      {
        id: 5,
        name: "Classic Tshirt",
        price: "$20-35",
        slug: "classic-tshirt",
        image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//2.jpg",
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
        {collection.products.map((product) => (
          <Link href={`/products/${product.slug}`} key={product.id} className="stussy-product-card">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full"
              loading={product.id <= 2 ? "eager" : "lazy"}
              priority={product.id === 1}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <h3 className="stussy-product-title">{product.name}</h3>
            <p className="stussy-product-price">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
