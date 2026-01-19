// Temporarily disabled - needs refactoring
// Original code preserved in git history
export default function ReviewDetailPage() {
  return null
}

/*
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock review data - same as in the reviews page
const reviews = [
  {
    id: 1,
    author: "Alex M.",
    location: "New York, NY",
    rating: 5,
    title: "Best quality streetwear",
    content:
      "I've been collecting Stüssy for years and the quality never disappoints. The latest collection is one of their best yet. The fit is perfect and materials are top-notch.",
    date: "March 15, 2023",
    product: "Stock Logo Tee",
    image: "/placeholder.svg?height=400&width=400",
    longContent:
      "I've been collecting Stüssy for years and the quality never disappoints. The latest collection is one of their best yet. The fit is perfect and materials are top-notch. The Stock Logo Tee has become a staple in my wardrobe. The cotton is substantial without being too heavy, and it holds its shape well after multiple washes. The print quality is excellent - no cracking or fading even after months of wear. What I appreciate most about Stüssy is their attention to detail. The stitching is clean, the cut is modern without being too trendy, and the overall construction feels built to last. This is exactly what you want from a premium streetwear brand. Highly recommend to anyone looking for quality basics with iconic design elements.",
  },
  {
    id: 2,
    author: "Jordan K.",
    location: "Los Angeles, CA",
    rating: 5,
    title: "Timeless design",
    content:
      "Stüssy continues to create pieces that stand the test of time. I've had some of their items for over a decade and they still look great. The new collection maintains that legacy.",
    date: "February 22, 2023",
    product: "Work Jacket",
    image: "/placeholder.svg?height=400&width=400",
    longContent:
      "Stüssy continues to create pieces that stand the test of time. I've had some of their items for over a decade and they still look great. The new collection maintains that legacy. The Work Jacket is a perfect example of their approach to design - taking classic workwear elements and refining them with subtle brand details. The cotton twill is substantial and has a nice structure to it. I've worn this through various weather conditions and it holds up well. The fit is relaxed but not boxy, making it easy to layer over a hoodie or wear with just a tee underneath. The pockets are functional and the hardware feels premium. This is the kind of jacket that will age beautifully and probably look even better after years of wear. Worth every penny for a piece you'll keep in rotation for years.",
  },
  {
    id: 3,
    author: "Taylor R.",
    location: "Chicago, IL",
    rating: 4,
    title: "Great style, runs slightly large",
    content:
      "Love the design and quality of the hoodie. Just note that it runs slightly larger than expected. I usually wear L but M would have been perfect. Still very happy with my purchase.",
    date: "April 3, 2023",
    product: "Basic Stüssy Hoodie",
    image: "/placeholder.svg?height=400&width=400",
    longContent:
      "Love the design and quality of the hoodie. Just note that it runs slightly larger than expected. I usually wear L but M would have been perfect. Still very happy with my purchase. The cotton-poly blend is comfortable and has a substantial weight to it. The inside is soft and hasn't pilled even after several washes. The embroidered logo is clean and well-executed. The kangaroo pocket is spacious and the drawstrings are the perfect length. The only reason I'm giving 4 stars instead of 5 is the sizing issue. If you're between sizes, I'd recommend sizing down. Otherwise, this is a fantastic hoodie that's become my go-to for both lounging at home and casual outings. The quality is definitely there, and I expect this to last for years.",
  },
  {
    id: 4,
    author: "Morgan P.",
    location: "Austin, TX",
    rating: 5,
    title: "Iconic pieces that last",
    content:
      "The 8 Ball Dot Tee is an iconic piece that never goes out of style. The print quality is excellent and the cotton is soft but durable. Definitely recommend.",
    date: "January 17, 2023",
    product: "8 Ball Dot Tee",
    image: "/placeholder.svg?height=400&width=400",
    longContent:
      "The 8 Ball Dot Tee is an iconic piece that never goes out of style. The print quality is excellent and the cotton is soft but durable. Definitely recommend. I've been a fan of Stüssy since the 90s, and it's impressive how they've maintained their identity while staying relevant. This tee is a perfect example - the 8 Ball graphic is a classic Stüssy motif that still feels fresh. The cotton is heavyweight but soft, and the cut is perfect - not too slim, not too boxy. After several washes, there's been no shrinkage or fading of the print. The collar has maintained its shape as well. If you're looking to add some classic Stüssy pieces to your collection, this is a must-have. It pairs well with everything from jeans to shorts and layers nicely under jackets or flannels.",
  },
  {
    id: 5,
    author: "Casey L.",
    location: "Seattle, WA",
    rating: 5,
    title: "Perfect summer shorts",
    content:
      "The Stock Water Shorts are perfect for summer. Quick-drying material and great fit. I've worn them for swimming, hiking, and just hanging out. Versatile and stylish.",
    date: "May 30, 2023",
    product: "Stock Water Short",
    image: "/placeholder.svg?height=400&width=400",
    longContent:
      "The Stock Water Shorts are perfect for summer. Quick-drying material and great fit. I've worn them for swimming, hiking, and just hanging out. Versatile and stylish. The nylon material is lightweight but doesn't feel cheap. The elastic waistband with drawstring provides a secure fit without being restrictive. The side pockets are deep enough to be functional, and the back pocket with velcro closure is perfect for keeping small items secure. What I appreciate most is the versatility - these shorts transition seamlessly from water activities to casual wear. The length is perfect (not too long, not too short) and the embroidered logo adds a subtle brand touch without being flashy. I've already ordered a second pair in another color. Highly recommend for anyone looking for quality multi-purpose shorts.",
  },
]

export default function ReviewDetailPage({ params }: { params: { id: string } }) {
  const reviewId = Number.parseInt(params.id)
  const review = reviews.find((r) => r.id === reviewId)

  if (!review) {
    notFound()
  }

  return (
    <div className="px-6 py-8">
      <div className="mb-6">
        <Link href="/reviews" className="text-xs uppercase">
          ← BACK TO REVIEWS
        </Link>
      </div>

      <div className="border-b border-[#ececec] pb-8 mb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-sm uppercase font-medium">{review.title}</h1>
            <p className="text-xs text-gray-600">
              {review.author} - {review.location}
            </p>
          </div>
          <div className="flex">
            {[...Array(review.rating)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <Image
              src={review.image || "/placeholder.svg"}
              alt={review.product}
              width={400}
              height={400}
              className="w-full"
            />
            <p className="text-xs mt-2 font-medium">{review.product}</p>
            <Link href={`/products/${review.product.toLowerCase().replace(/\s+/g, "-")}`}>
              <button className="stussy-button mt-4 w-full">VIEW PRODUCT</button>
            </Link>
          </div>

          <div className="md:w-2/3">
            <p className="text-xs mb-4">{review.longContent}</p>
            <p className="text-xs text-gray-600">Posted on {review.date}</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm uppercase mb-4">MORE REVIEWS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews
            .filter((r) => r.id !== reviewId)
            .slice(0, 3)
            .map((r) => (
              <Link href={`/reviews/${r.id}`} key={r.id} className="block">
                <div className="border border-[#ececec] p-4">
                  <div className="flex mb-2">
                    {[...Array(r.rating)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <h3 className="text-xs uppercase font-medium">{r.title}</h3>
                  <p className="text-xs mt-1 line-clamp-2">{r.content}</p>
                  <p className="text-xs text-gray-600 mt-2">{r.author}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

*/
