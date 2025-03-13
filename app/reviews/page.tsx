import Image from "next/image"

// Mock review data
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
  },
]

export default function ReviewsPage() {
  return (
    <div className="px-6 py-8">
      <h1 className="text-sm uppercase mb-6">CUSTOMER REVIEWS</h1>

      

      <div className="grid gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-[#ececec] pb-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-sm uppercase font-medium">{review.title}</h3>
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

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <Image
                  src={review.image || "/placeholder.svg"}
                  alt={review.product}
                  width={400}
                  height={400}
                  className="w-full"
                />
                <p className="text-xs mt-2">{review.product}</p>
              </div>

              <div className="md:w-3/4">
                <p className="text-xs mb-2">{review.content}</p>
                <p className="text-xs text-gray-600">Posted on {review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="stussy-button">LOAD MORE REVIEWS</button>
      </div>
    </div>
  )
}

