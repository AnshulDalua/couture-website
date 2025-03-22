import Image from "next/image"
import { Star, StarHalf } from "lucide-react"

// Sample review data
const reviews = [
  {
    id: 1,
    name: "Alex Thompson",
    date: "March 15, 2024",
    rating: 5,
    product: "Heavyweight Hoodie",
    title: "Exceptional Quality",
    content: "The heavyweight hoodie exceeded my expectations. The material is substantial without being too heavy, and the fit is perfect. I've received numerous compliments when wearing it. Definitely worth the investment.",
    verified: true,
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//7.jpg"
  },
  {
    id: 2,
    name: "Jordan Lee",
    date: "February 28, 2024",
    rating: 4.5,
    product: "Classic Tshirt",
    title: "Great Everyday Tee",
    content: "This has quickly become my go-to t-shirt. The cotton is soft and breathable, and the cut is flattering without being too tight. After several washes, it's holding up well with minimal shrinkage. Would definitely purchase again.",
    verified: true,
  },
  {
    id: 3,
    name: "Morgan Rivera",
    date: "February 10, 2024",
    rating: 5,
    product: "Heavyweight Crewneck",
    title: "Perfect Fit and Feel",
    content: "I've been searching for the perfect crewneck for years, and I've finally found it. The material is substantial but not bulky, and the fit is exactly what I was looking for. The attention to detail is evident in every stitch.",
    verified: true,
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//6.jpg"
  },
  {
    id: 4,
    name: "Taylor Kim",
    date: "January 22, 2024",
    rating: 4,
    product: "Classic Quarterzip",
    title: "Versatile and Well-Made",
    content: "This quarterzip is perfect for layering. The quality is excellent, and it looks much more expensive than it is. My only minor complaint is that the sleeves are slightly long for my frame, but otherwise it's perfect.",
    verified: true,
  },
  {
    id: 5,
    name: "Casey Johnson",
    date: "January 5, 2024",
    rating: 5,
    product: "Straightcut Sweatpants",
    title: "Most Comfortable Sweatpants Ever",
    content: "These sweatpants are incredible. The material is soft yet durable, and the fit is perfect - not too baggy, not too tight. I've worn them for everything from lounging to running errands, and they're comfortable for all activities.",
    verified: true,
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//5.jpg"
  },
  {
    id: 6,
    name: "Riley Martinez",
    date: "December 18, 2023",
    rating: 4.5,
    product: "Heavyweight Hoodie",
    title: "Worth Every Penny",
    content: "The quality of this hoodie is outstanding. It's warm without being bulky, and the design is clean and versatile. I've already ordered a second one in a different color. Highly recommend!",
    verified: true,
  },
  {
    id: 7,
    name: "Jamie Wilson",
    date: "December 3, 2023",
    rating: 5,
    product: "Classic Tshirt",
    title: "Perfect Basic Tee",
    content: "This t-shirt has the perfect weight - not too thin, not too thick. The cut is flattering and the fabric holds its shape well after washing. I'll definitely be purchasing more colors.",
    verified: true,
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//4.jpg"
  },
  {
    id: 8,
    name: "Avery Thomas",
    date: "November 15, 2023",
    rating: 4,
    product: "Straightcut Sweatpants",
    title: "Great Quality, Slight Sizing Issue",
    content: "The material and construction of these sweatpants is excellent. My only issue is that they run slightly large. I would recommend sizing down if you're between sizes. Otherwise, they're perfect for both lounging and casual outings.",
    verified: true,
  }
]

// Helper function to render star ratings
const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  
  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current text-black" />
      ))}
      {hasHalfStar && <StarHalf className="h-4 w-4 fill-current text-black" />}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={i + fullStars + (hasHalfStar ? 1 : 0)} className="h-4 w-4 text-gray-300" />
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <div className="px-6 py-8">
      <h1 className="text-sm uppercase mb-8">CUSTOMER REVIEWS</h1>

      <div className="max-w-5xl mx-auto">
        {/* Reviews Summary */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center mb-2">
                <RatingStars rating={4.8} />
                <span className="ml-2 text-sm font-medium">4.8 out of 5</span>
              </div>
              <p className="text-xs text-gray-600">Based on {reviews.length} reviews</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <button className="stussy-button">WRITE A REVIEW</button>
            </div>
          </div>
        </div>

        {/* Filter Options */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button className="px-3 py-1 text-xs border border-black bg-black text-white">ALL REVIEWS</button>
          <button className="px-3 py-1 text-xs border border-gray-200 hover:border-black">5 STAR</button>
          <button className="px-3 py-1 text-xs border border-gray-200 hover:border-black">4 STAR</button>
          <button className="px-3 py-1 text-xs border border-gray-200 hover:border-black">3 STAR</button>
          <button className="px-3 py-1 text-xs border border-gray-200 hover:border-black">WITH PHOTOS</button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-sm font-medium">{review.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">for {review.product}</p>
                </div>
                <RatingStars rating={review.rating} />
              </div>
              
              {review.image && (
                <div className="mb-4">
                  <div className="relative h-48 w-full">
                    <Image 
                      src={review.image} 
                      alt={`Review by ${review.name}`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded"
                    />
                  </div>
                </div>
              )}
              
              <p className="text-xs mb-4">{review.content}</p>
              
              <div className="flex justify-between items-center text-xs text-gray-600">
                <div className="flex items-center">
                  <span>{review.name}</span>
                  {review.verified && (
                    <span className="ml-2 text-[10px] bg-gray-100 px-1 py-0.5">VERIFIED BUYER</span>
                  )}
                </div>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex border border-gray-200">
            <button className="px-3 py-1 text-xs border-r border-gray-200 hover:bg-gray-100">PREV</button>
            <button className="px-3 py-1 text-xs bg-black text-white">1</button>
            <button className="px-3 py-1 text-xs border-l border-gray-200 hover:bg-gray-100">2</button>
            <button className="px-3 py-1 text-xs border-l border-gray-200 hover:bg-gray-100">3</button>
            <button className="px-3 py-1 text-xs border-l border-gray-200 hover:bg-gray-100">NEXT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

