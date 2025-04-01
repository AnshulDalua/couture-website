"use client"

import Image from "next/image"
import { useState } from "react"

// Updated review data from actual customer reviews
const reviews = [
  {
    id: 1,
    title: "They look really great!",
    content: "Yes! They look really great! We have club photos this Sunday so I will try to get photos of some of the members wearing the merch!",
    name: "KTP",
    product: "Heavyweight Hoodie",
    date: "March 2023",
    verified: true,
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/clubs/20240420_021722_74544B.png",
  },
  {
    id: 2,
    title: "The brothers love the merch!",
    content: "The brothers love the merch! Thank you again and I'll send some pics later this week.",
    name: "Eigenlayer",
    product: "Heavyweight Hoodie",
    date: "February 2023",
    verified: true,
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/clubs/IMG_2456.png",
  },
  {
    id: 3,
    title: "Just got the merch today",
    content: "Just got the merch today, they look great!",
    name: "Atlas Digital Consulting Group",
    product: "Heavyweight Hoodie",
    date: "January 2023",
    verified: true,
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/clubs/IMG_3233.png",
  },
  {
    id: 4,
    title: "The merch is awesome!",
    content: "The merch is awesome:) I have gotten so many compliments on how soft they are.",
    name: "Net Impact",
    product: "Heavyweight Hoodie",
    date: "December 2022",
    verified: true,
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/clubs/145_2174.png",
  },
  {
    id: 5,
    title: "Quality is miles better",
    content: "The tees are solid, I've only worn once or twice but no complaints at all. The quality is miles better than what we had before.",
    name: "V1",
    product: "Heavyweight Crewnecks and Standard T-Shirt",
    date: "November 2022",
    verified: true,
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/clubs/IMG_1312.png",
  },
  {
    id: 6,
    title: "Phenomenal quality",
    content: "It is phenomenal great work guys. Hoodies are dope and everyone loves em. Thanks again guys.",
    name: "PSE",
    product: "Heavyweight Hoodie",
    date: "August 2022",
    verified: true,
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/clubs/PSE_merch.jpeg",
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
    title: "Best merch decision we've ever made",
    content: "These hoodies have been the best merch decision we have ever made.",
    name: "Atlas Consulting Group",
    product: "Heavyweight Hoodie",
    date: "October 2022",
    verified: true,
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/clubs/20240420_021727_781A14.png",
  },
  {
    id: 9,
    title: "Premium quality that stands out",
    content: "I'm not even exaggerating, I didn't even realize it was a club's hoodie. I straight up thought it was essentials.",
    name: "Flux",
    product: "Heavyweight Hoodie",
    date: "July 2022",
    verified: true,
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/clubs/IMG_2618.png",
  },
  {
    id: 10,
    title: "Awesome Hoodies",
    content: "These are easily the best merch I own, and the service from couture was fantastic",
    name: "Zeta Pi",
    product: "Standard T-Shirt, Straightcut Sweatpants, and Heavyweight Hoodie",
    date: "June 2022",
    verified: true,
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/clubs/IMG_6431.png",
  },
  {
    id: 11,
    title: "CEO approved quality",
    content: "Received, thank you. Our CEO says the quality is great, we love them. Btw we'll be ordering more soon.",
    name: "Hackerpulse",
    product: "Standard T-Shirt, Straightcut Sweatpants, and Heavyweight Hoodie",
    date: "June 2022",
    verified: true,
    image: null,
  },
  {
    id: 12,
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
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 9;
  
  // Calculate reviews for current page
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  
  // Calculate total pages
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  
  // Handle page navigation
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  
  const goToPrevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };
  
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-sm uppercase mb-10">CUSTOMER REVIEWS</h1>

      <div className="space-y-12">
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentReviews.map((review) => (
            <div key={review.id} className="group border border-[#ececec] hover:border-black transition-colors duration-200">
              {/* Review Header */}
              <div className="p-6 pb-3 border-b border-[#ececec]">
                <h3 className="text-sm font-medium mb-2">{review.title}</h3>
                <p className="text-xs text-gray-600">for {review.product}</p>
              </div>
              
              {/* Review Image */}
              {review.image && (
                <div className="relative h-52 w-full overflow-hidden">
                  <Image 
                    src={review.image} 
                    alt={`Review by ${review.name}`}
                    fill
                    loading={review.id <= 3 ? "eager" : "lazy"}
                    priority={review.id === 1}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ 
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </div>
              )}
              
              {/* Review Content */}
              <div className="p-6">
                <p className="text-xs leading-relaxed mb-6">{review.content}</p>
                
                <div className="flex justify-between items-center text-xs text-gray-600 pt-3 border-t border-[#ececec]">
                  <div className="flex items-center">
                    <span>{review.name}</span>
                    {review.verified && (
                      <span className="ml-2 text-[10px] bg-[#f9f9f9] px-1 py-0.5">VERIFIED</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center">
            <div className="flex border border-[#ececec]">
              <button 
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 text-xs border-r border-[#ececec] ${
                  currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f9f9f9]'
                }`}
              >
                PREV
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-4 py-2 text-xs ${
                    currentPage === page 
                      ? 'bg-black text-white' 
                      : 'hover:bg-[#f9f9f9] border-l border-[#ececec]'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 text-xs border-l border-[#ececec] ${
                  currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f9f9f9]'
                }`}
              >
                NEXT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
