import Image from "next/image"

// Updated review data from actual customer reviews
const reviews = [
  {
    id: 1,
    title: "They look really great!",
    content: "Yes! They look really great! We have club photos this Sunday so I will try to get photos of some of the members wearing the merch!",
    name: "Zeta Pi",
    product: "Heavyweight Hoodie",
    date: "March 2023",
    verified: true,
    image: null,
  },
  {
    id: 2,
    title: "The brothers love the merch!",
    content: "The brothers love the merch! Thank you again and I'll send some pics later this week.",
    name: "AkPsi",
    product: "Heavyweight Hoodie",
    date: "February 2023",
    verified: true,
    image: null,
  },
  {
    id: 3,
    title: "Just got the merch today",
    content: "Just got the merch today, they look great!",
    name: "Apex Consulting Group",
    product: "Heavyweight Hoodie",
    date: "January 2023",
    verified: true,
    image: null,
  },
  {
    id: 4,
    title: "The merch is awesome!",
    content: "The merch is awesome:) I have gotten so many compliments on how soft they are.",
    name: "Net Impact",
    product: "Heavyweight Hoodie",
    date: "December 2022",
    verified: true,
    image: null,
  },
  {
    id: 5,
    title: "Quality is miles better",
    content: "The tees are solid, I've only worn once or twice but no complaints at all. The quality is miles better than what we had before.",
    name: "V1",
    product: "Standard T-Shirt",
    date: "November 2022",
    verified: true,
    image: null,
  },
  {
    id: 6,
    title: "Best merch decision we've ever made",
    content: "These hoodies have been the best merch decision we have ever made.",
    name: "Atlas Digital Consulting Group",
    product: "Heavyweight Hoodie",
    date: "October 2022",
    verified: true,
    image: null,
  },
  {
    id: 7,
    title: "Great work and collaboration",
    content: "You both rock thanks again for the hard work. We really enjoy working with you guys and cannot wait to see the product.",
    name: "TEK",
    product: "Straightcut Sweatpants and Heavyweight Hoodie",
    date: "September 2022",
    verified: true,
    image: null,
  },
  {
    id: 8,
    title: "Phenomenal quality",
    content: "It is phenomenal great work guys. Hoodies are dope and everyone loves em. Thanks again guys.",
    name: "PSE",
    product: "Heavyweight Hoodie",
    date: "August 2022",
    verified: true,
    image: null,
  },
  {
    id: 9,
    title: "Premium quality that stands out",
    content: "I'm not even exaggerating, I didn't even realize it was a club's hoodie. I straight up thought it was essentials.",
    name: "Desi Dance Network",
    product: "Heavyweight Hoodie",
    date: "July 2022",
    verified: true,
    image: null,
  },
  {
    id: 10,
    title: "CEO approved quality",
    content: "Received, thank you. Our CEO says the quality is great, we love them. Btw we'll be ordering more soon.",
    name: "Hackerpulse",
    product: "Standard T-Shirt, Straightcut Sweatpants, and Heavyweight Hoodie",
    date: "June 2022",
    verified: true,
    image: null,
  },
  {
    id: 11,
    title: "Everyone was impressed!",
    content: "Everyone was impressed! The quality, thickness, and warmth are noticeably better compared to brands like Custom Ink.",
    name: "East Longmeadow",
    product: "Heavyweight Crewneck",
    date: "May 2022",
    verified: true,
    image: null,
  },
];

export default function ReviewsPage() {
  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-sm uppercase mb-8">CUSTOMER REVIEWS</h1>

      <div className="space-y-8">
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

