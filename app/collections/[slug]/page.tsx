"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { use } from "react"

// Mock data for collections
const collections = {
  "new-arrivals": {
    title: "NEW ARRIVALS",
    products: [
      {
        id: 1,
        name: "Heavyweight Hoodie",
        price: 45,
        slug: "heavyweight-hoodie",
        image: "/placeholder.svg?height=600&width=600",
      },
      {
        id: 2,
        name: "Heavyweight Crewneck",
        price: 120,
        slug: "heavyweight-crewneck",
        image: "/placeholder.svg?height=600&width=600",
      },
      {
        id: 3,
        name: "Classic Quarterzip",
        price: 180,
        slug: "classic-quarterzip",
        image: "/placeholder.svg?height=600&width=600",
      },
      {
        id: 4,
        name: "Straightcut Sweatpants",
        price: 50,
        slug: "straightcut-sweatpants",
        image: "/placeholder.svg?height=600&width=600",
      },
      {
        id: 5,
        name: "Classic Tshirt",
        price: 95,
        slug: "classic-tshirt",
        image: "/placeholder.svg?height=600&width=600",
      },
    ],
  },
  tees: {
    title: "TEES",
    products: [
      {
        id: 1,
        name: "STOCK LOGO TEE",
        price: 45,
        slug: "classic-tshirt",
        image: "/placeholder.svg?height=600&width=600",
      },
      {
        id: 4,
        name: "8 BALL DOT TEE",
        price: 50,
        slug: "straightcut-sweatpants",
        image: "/placeholder.svg?height=600&width=600",
      },
    ],
  },
  sweats: {
    title: "SWEATS",
    products: [
      {
        id: 2,
        name: "BASIC STÜSSY HOODIE",
        price: 120,
        slug: "heavyweight-crewneck",
        image: "/placeholder.svg?height=600&width=600",
      },
    ],
  },
  "tops-shirts": {
    title: "TOPS & SHIRTS",
    products: [],
  },
  outerwear: {
    title: "OUTERWEAR",
    products: [
      {
        id: 3,
        name: "WORK JACKET",
        price: 180,
        slug: "classic-quarterzip",
        image: "/placeholder.svg?height=600&width=600",
      },
    ],
  },
  all: {
    title: "ALL",
    products: [
      {
        id: 1,
        name: "Heavyweight Hoodie",
        price: 45,
        slug: "heavyweight-hoodie",
        image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//7.jpg",
      },
      {
        id: 2,
        name: "Heavyweight Crewneck",
        price: 120,
        slug: "heavyweight-crewneck",
        image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//6.jpg",
      },
      {
        id: 3,
        name: "Classic Quarterzip",
        price: 180,
        slug: "classic-quarterzip",
        image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//3.jpg",
      },
      {
        id: 4,
        name: "Straightcut Sweatpants",
        price: 50,
        slug: "straightcut-sweatpants",
        image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//5.jpg",
      },
      {
        id: 5,
        name: "Classic Tshirt",
        price: 95,
        slug: "classic-tshirt",
        image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//2.jpg",
      },
    ],
  },
}

type Collection = typeof collections[keyof typeof collections]
type PageParams = { slug: string }

export default function CollectionPage({ params }: { params: Promise<PageParams> }) {
  const { slug } = use(params)
  const collection = collections[slug as keyof typeof collections]

  if (!collection) {
    notFound()
  }

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
            />
            <h3 className="stussy-product-title">{product.name}</h3>
            <p className="stussy-product-price">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
