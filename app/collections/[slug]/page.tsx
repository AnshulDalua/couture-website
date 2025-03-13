import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock data for collections
const collections = {
  "new-arrivals": {
    title: "NEW ARRIVALS",
    products: [
      {
        id: 1,
        name: "Heavyweight Hoodie",
        price: 45,
        slug: "stock-logo-tee",
        image: "/placeholder.svg?height=600&width=600",
      },
      {
        id: 2,
        name: "Heavyweight Crewneck",
        price: 120,
        slug: "basic-stussy-hoodie",
        image: "/placeholder.svg?height=600&width=600",
      },
      {
        id: 3,
        name: "Classic Quarterzip",
        price: 180,
        slug: "work-jacket",
        image: "/placeholder.svg?height=600&width=600",
      },
      {
        id: 4,
        name: "Straightcut Sweatpants",
        price: 50,
        slug: "8-ball-dot-tee",
        image: "/placeholder.svg?height=600&width=600",
      },
      {
        id: 5,
        name: "Classic Tshirt",
        price: 95,
        slug: "stock-water-short",
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
        slug: "stock-logo-tee",
        image: "/placeholder.svg?height=600&width=600",
      },
      {
        id: 4,
        name: "8 BALL DOT TEE",
        price: 50,
        slug: "8-ball-dot-tee",
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
        slug: "basic-stussy-hoodie",
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
        slug: "work-jacket",
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
        slug: "stock-logo-tee",
        image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//7.jpg",
      },
      {
        id: 2,
        name: "Heavyweight Crewneck",
        price: 120,
        slug: "basic-stussy-hoodie",
        image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//6.jpg",
      },
      {
        id: 3,
        name: "Classic Quarterzip",
        price: 180,
        slug: "work-jacket",
        image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//3.jpg",
      },
      {
        id: 4,
        name: "Straightcut Sweatpants",
        price: 50,
        slug: "8-ball-dot-tee",
        image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//5.jpg",
      },
      {
        id: 5,
        name: "Classic Tshirt",
        price: 95,
        slug: "stock-water-short",
        image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//2.jpg",
      },
    ],
  },
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = collections[params.slug as keyof typeof collections]

  if (!collection) {
    notFound()
  }

  return (
    <div className="px-6 py-8">
      <h1 className="text-sm uppercase mb-6">{collection.title}</h1>

      <div className="mb-6">
        <div className="flex space-x-4 text-xs uppercase">
          <button>Filter</button>
          <button>Sort</button>
        </div>
      </div>

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

