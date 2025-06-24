"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

// Google Reviews URL - Clean version for better UX
const GOOGLE_REVIEWS_URL = "https://g.co/kgs/sooWQSv"; // URL to view Google reviews
// const GOOGLE_WRITE_REVIEW_URL = "https://www.google.com/maps/place/Couture+by+Ikigai/@42.2782,-83.7382,17z/data=!4m7!3m6!1s0x883ca400a0706465:0x13537375b316773!8m2!3d42.2782!4d-83.7382!9m1!1b1"; // URL to Google Maps with reviews tab open

// Updated review data from actual customer reviews
const reviews = [
  // --- Reviews WITH images ---
  {
    id: 1,
    title: "They did a great job of coming up with designs and were super responsive when getting my order in.",
    content: "Everyone that I got a hoodie for fell in love with it because of the material and design. Highly recommend bringing your business here.",
    name: "Mathew Gonzalez",
    product: "Heavyweight Hoodies",
    date: "April 2025",
    school: "U of Michigan",
    image: "/reviews/revv1.webp",
  },
  {
    id: 2,
    title: "Legendary merch plug.",
    content: "Have ordered 3-4 times from these guys and gotten super high quality pieces, great response time & support, and helped us work within our budget and timeline. Really respect how they treat customers and provide a great product. Highly recommend!",
    name: "Shrey Pandya",
    product: "Heavyweight Hoodies",
    date: "April 2025",
    school: "U of Michigan",
    image: "/reviews/revv2.webp",
  },
  {
    id: 3,
    title: "Amazing merch and the fabric feels great.",
    content: "Great to work with and everything was very timely.",
    name: "Lohith Pula",
    product: "Heavyweight Hoodie, Straightcut Sweatpants",
    date: "April 2025",
    school: "Startup",
    image: "/reviews/revv3.webp",
  },
  {
    id: 8,
    title: "Partnering with Couture by Ikigai was an incredible experience for our Entrepreneurship class.",
    content: "From the beginning, they brought professionalism and strong communication to the table. They helped us create custom East Longmeadow High School merch.",
    name: "Sarim Khan",
    product: "Heavyweight Crewneck",
    date: "April 2025",
    school: "East Longmeadow High School",
    image: "/reviews/revv4.webp",
  },

  // --- Existing reviews with images (from below, if any) ---
  {
    id: 13,
    title: "They look really great, and the brothers loved them!",
    content: "Yes! They look really great! We have club photos this Sunday so I will try to get photos of some of the members wearing the merch!",
    name: "KTP",
    product: "Heavyweight Hoodie",
    date: "March 2023",
    school: "U of Michigan",
    image: "/reviews/1.webp",
  },
  {
    id: 14,
    title: "This was the best merch  we have ever made",
    content: "Very impressed with the quality of the hoodies and sweatpants. Merch arrived ahead of schedule too. You guys also crushed it.",
    name: "Eigenlayer",
    product: "Heavyweight Hoodie",
    date: "February 2023",
    school: "Startup",
    image: "/reviews/2.webp",
  },
  {
    id: 15,
    title: "Just got the merch today",
    content: "Just got the merch today, they look great!",
    name: "Atlas Digital Consulting Group",
    product: "Heavyweight Hoodie",
    date: "January 2023",
    school: "U of Michigan",
    image: "/reviews/3.webp",
  },
  {
    id: 16,
    title: "The merch is awesome!",
    content: "The merch is awesome:) I have gotten so many compliments on how soft they are.",
    name: "Net Impact",
    product: "Heavyweight Hoodie",
    date: "December 2022",
    school: "U of Michigan",
    image: "/reviews/4.webp",
  },
  {
    id: 17,
    title: "Quality is miles better",
    content: "The tees are solid, I've only worn once or twice but no complaints at all. The quality is miles better than what we had before.",
    name: "V1",
    product: "Heavyweight Crewnecks and Standard T-Shirt",
    date: "November 2022",
    school: "U of Michigan",
    image: "/reviews/5.webp",
  },
  {
    id: 18,
    title: "Phenomenal quality",
    content: "It is phenomenal great work guys. Hoodies are dope and everyone loves em. Thanks again guys.",
    name: "PSE",
    product: "Heavyweight Hoodie",
    date: "August 2022",
    school: "U of Michigan",
    image: "/reviews/6.webp",
  },
  {
    id: 19,
    title: "Awesome Hoodies",
    content: "These are easily the best merch I own, and the service from couture was fantastic",
    name: "Zeta Pi",
    product: "Standard T-Shirt, Straightcut Sweatpants, and Heavyweight Hoodie",
    date: "June 2022",
    school: "U of Michigan",
    image: "/reviews/7.webp",
  },
  {
    id: 20,
    title: "Best merch decision we've ever made",
    content: "These hoodies have been the best merch decision we have ever made.",
    name: "Atlas Consulting Group",
    product: "Heavyweight Hoodie",
    date: "October 2022",
    school: "U of Michigan",
    image: "/reviews/8.webp",
  },
  {
    id: 21,
    title: "Premium quality that stands out",
    content: "I'm not even exaggerating, I didn't even realize it was a club's hoodie. I straight up thought it was essentials.",
    name: "Flux",
    product: "Heavyweight Hoodie",
    date: "July 2022",
    school: "U of Michigan",
    image: "/reviews/9.webp",
  },
  {
    id: 22,
    title: "Awesome Hoodies",
    content: "These are easily the best merch I own, and the service from couture was fantastic",
    name: "Zeta Pi",
    product: "Standard T-Shirt, Straightcut Sweatpants, and Heavyweight Hoodie",
    date: "June 2022",
    school: "U of Michigan",
    image: "/reviews/10.webp",
  },

  // --- Reviews WITHOUT images ---
  {
    id: 4,
    title: "The team is so communicative and responsive, and the merch was very good quality!",
    content: "We had a slight issue during shipping but the team was so kind and quick with response! We figured out the issue immediately :) would definitely order again.",
    name: "Judy D",
    product: "Heavyweight Hoodie, Straightcut Sweatpants",
    date: "April 2025",
    school: "U of Michigan",
    image: "",
  },
  {
    id: 5,
    title: "Knew without a doubt that we wanted to work with Couture by Ikigai when planning club merch.",
    content: "Very easy communication throughout the process as we chose designs and finalized logistics. The sweatshirts shipped earlier than the expected date.",
    name: "Subin Pyo",
    product: "Heavyweight Hoodie, Straightcut Sweatpants",
    date: "April 2025",
    school: "U of Michigan",
    image: "",
  },
  {
    id: 6,
    title: "Amazing quality and the team is so easy to work with.",
    content: "They are very personable and communicative. I ordered quarter zips for my business club and they were perfect. Affordable pricing and extremely fast shipping as well!",
    name: "Elizabeth McClung",
    product: "Straight Cut Quarter Zip",
    date: "March 2025",
    school: "UVA",
    image: "",
  },
  {
    id: 7,
    title: "Placed a bulk order for a large club and was extremely pleased with how high-quality each piece was.",
    content: "Worked perfectly with our timeline and budget, and couldn't be more happy with how comfortable these hoodies are.",
    name: "Elliott Nederhood",
    product: "Heavyweight Hoodie",
    date: "April 2025",
    school: "U of Michigan",
    image: "",
  },
  {
    id: 9,
    title: "Very impressed with the quality of the hoodies and sweatpants.",
    content: "Merch arrived ahead of schedule too. You guys also crushed it.",
    name: "Mustafa Hourani",
    product: "Heavyweight Hoodie, Straightcut Sweatpants",
    date: "March 2025",
    school: "Startup",
    image: "",
  },
  {
    id: 10,
    title: "Very high quality merch and very communicative staff!",
    content: "Highly recommend to anyone interested in making custom merch!!",
    name: "Mayuka Kallakuri",
    product: "Heavyweight Hoodie",
    date: "April 2025",
    school: "U of Michigan",
    image: "",
  },
  {
    id: 11,
    title: "Amazing quality and very quick and efficient shipping!",
    content: "",
    name: "Zachary Berenbaum",
    product: "Heavyweight Hoodie",
    date: "April 2025",
    school: "U of Michigan",
    image: "",
  },
  {
    id: 12,
    title: "Super responsive and helpful pre-production and the quality is great :))",
    content: "",
    name: "samira",
    product: "Heavyweight Hoodie",
    date: "April 2025",
    school: "U of Michigan",
    image: "",
  },
  {
    id: 23,
    title: "CEO approved quality",
    content: "Received, thank you. Our CEO says the quality is great, we love them. Btw we'll be ordering more soon.",
    name: "Hackerpulse",
    product: "Standard T-Shirt, Straightcut Sweatpants, and Heavyweight Hoodie",
    date: "June 2022",
    school: "U of Michigan",
    image: null,
  },
  {
    id: 24,
    title: "Everyone was impressed!", 
    content: "Everyone was impressed! The quality, thickness, and warmth are noticeably better compared to brands like Custom Ink.",
    name: "East Longmeadow",
    product: "Heavyweight Crewneck",
    date: "May 2022",
    school: "U of Michigan",
    image: null,
  },

  {
    id: 1,
    title: "They did a great job of coming up with designs and were super responsive when getting my order in.",
    content: "Everyone that I got a hoodie for fell in love with it because of the material and design. Highly recommend bringing your business here.",
    name: "Mathew Gonzalez",
    product: "Heavyweight Hoodies",
    date: "April 2025",
    school: "U of Michigan",
    image: "/reviews/revv1.webp",
  },
  {
    id: 2,
    title: "Legendary merch plug.",
    content: "Have ordered 3-4 times from these guys and gotten super high quality pieces, great response time & support, and helped us work within our budget and timeline. Really respect how they treat customers and provide a great product. Highly recommend!",
    name: "Shrey Pandya",
    product: "Heavyweight Hoodies",
    date: "April 2025",
    school: "U of Michigan",
    image: "/reviews/revv2.webp",
  },
  {
    id: 3,
    title: "Amazing merch and the fabric feels great.",
    content: "Great to work with and everything was very timely.",
    name: "Lohith Pula",
    product: "Heavyweight Hoodie, Straightcut Sweatpants",
    date: "April 2025",
    school: "Startup",
    image: "/reviews/revv3.webp",
  },
  {
    id: 4,
    title: "The team is so communicative and responsive, and the merch was very good quality!",
    content: "We had a slight issue during shipping but the team was so kind and quick with response! We figured out the issue immediately :) would definitely order again.",
    name: "Judy D",
    product: "Heavyweight Hoodie, Straightcut Sweatpants",
    date: "April 2025",
    school: "U of Michigan",
    image: "",
  },
  {
    id: 5,
    title: "Knew without a doubt that we wanted to work with Couture by Ikigai when planning club merch.",
    content: "Very easy communication throughout the process as we chose designs and finalized logistics. The sweatshirts shipped earlier than the expected date.",
    name: "Subin Pyo",
    product: "Heavyweight Hoodie, Straightcut Sweatpants",
    date: "April 2025",
    school: "U of Michigan",
    image: "",
  },
  {
    id: 6,
    title: "Amazing quality and the team is so easy to work with.",
    content: "They are very personable and communicative. I ordered quarter zips for my business club and they were perfect. Affordable pricing and extremely fast shipping as well!",
    name: "Elizabeth McClung",
    product: "Straight Cut Quarter Zip",
    date: "March 2025",
    school: "UVA",
    image: "",
  },
  {
    id: 7,
    title: "Placed a bulk order for a large club and was extremely pleased with how high-quality each piece was.",
    content: "Worked perfectly with our timeline and budget, and couldn't be more happy with how comfortable these hoodies are.",
    name: "Elliott Nederhood",
    product: "Heavyweight Hoodie",
    date: "April 2025",
    school: "U of Michigan",
    image: "",
  },
  {
    id: 8,
    title: "Partnering with Couture by Ikigai was an incredible experience for our Entrepreneurship class.",
    content: "From the beginning, they brought professionalism and strong communication to the table. They helped us create custom East Longmeadow High School merch.",
    name: "Sarim Khan",
    product: "Heavyweight Crewneck",
    date: "April 2025",
    school: "East Longmeadow High School",
    image: "/reviews/revv4.webp",
  },
  {
    id: 9,
    title: "Very impressed with the quality of the hoodies and sweatpants.",
    content: "Merch arrived ahead of schedule too. You guys also crushed it.",
    name: "Mustafa Hourani",
    product: "Heavyweight Hoodie, Straightcut Sweatpants",
    date: "March 2025",
    school: "Startup",
    image: "",
  },
  {
    id: 10,
    title: "Very high quality merch and very communicative staff!",
    content: "Highly recommend to anyone interested in making custom merch!!",
    name: "Mayuka Kallakuri",
    product: "Heavyweight Hoodie",
    date: "April 2025",
    school: "U of Michigan",
    image: "",
  },
  {
    id: 11,
    title: "Amazing quality and very quick and efficient shipping!",
    content: "",
    name: "Zachary Berenbaum",
    product: "Heavyweight Hoodie",
    date: "April 2025",
    school: "U of Michigan",
    image: "",
  },
  {
    id: 12,
    title: "Super responsive and helpful pre-production and the quality is great :))",
    content: "",
    name: "samira",
    product: "Heavyweight Hoodie",
    date: "April 2025",
    school: "U of Michigan",
    image: "",
  },

  {
    id: 13,
    title: "They look really great, and the brothers loved them!",
    content: "Yes! They look really great! We have club photos this Sunday so I will try to get photos of some of the members wearing the merch!",
    name: "KTP",
    product: "Heavyweight Hoodie",
    date: "March 2023",
    school: "U of Michigan",
    image: "/reviews/1.webp",
  },
  {
    id: 14,
    title: "This was the best merch  we have ever made",
    content: "Very impressed with the quality of the hoodies and sweatpants. Merch arrived ahead of schedule too. You guys also crushed it.",
    name: "Eigenlayer",
    product: "Heavyweight Hoodie",
    date: "February 2023",
    school: "Startup",
    image: "/reviews/2.webp",
  },
  {
    id: 15,
    title: "Just got the merch today",
    content: "Just got the merch today, they look great!",
    name: "Atlas Digital Consulting Group",
    product: "Heavyweight Hoodie",
    date: "January 2023",
    school: "U of Michigan",
    image: "/reviews/3.webp",
  },
  {
    id: 16,
    title: "The merch is awesome!",
    content: "The merch is awesome:) I have gotten so many compliments on how soft they are.",
    name: "Net Impact",
    product: "Heavyweight Hoodie",
    date: "December 2022",
    school: "U of Michigan",
    image: "/reviews/4.webp",
  },
  {
    id: 17,
    title: "Quality is miles better",
    content: "The tees are solid, I've only worn once or twice but no complaints at all. The quality is miles better than what we had before.",
    name: "V1",
    product: "Heavyweight Crewnecks and Standard T-Shirt",
    date: "November 2022",
    school: "U of Michigan",
    image: "/reviews/5.webp",
  },
  {
    id: 18,
    title: "Phenomenal quality",
    content: "It is phenomenal great work guys. Hoodies are dope and everyone loves em. Thanks again guys.",
    name: "PSE",
    product: "Heavyweight Hoodie",
    date: "August 2022",
    school: "U of Michigan",
    image: "/reviews/6.webp",
  },
  {
    id: 19,
    title: "Awesome Hoodies",
    content: "These are easily the best merch I own, and the service from couture was fantastic",
    name: "Zeta Pi",
    product: "Standard T-Shirt, Straightcut Sweatpants, and Heavyweight Hoodie",
    date: "June 2022",
    school: "U of Michigan",
    image: "/reviews/7.webp",
  },
  {
    id: 20,
    title: "Best merch decision we've ever made",
    content: "These hoodies have been the best merch decision we have ever made.",
    name: "Atlas Consulting Group",
    product: "Heavyweight Hoodie",
    date: "October 2022",
    school: "U of Michigan",
    image: "/reviews/8.webp",
  },
  {
    id: 21,
    title: "Premium quality that stands out",
    content: "I'm not even exaggerating, I didn't even realize it was a club's hoodie. I straight up thought it was essentials.",
    name: "Flux",
    product: "Heavyweight Hoodie",
    date: "July 2022",
    school: "U of Michigan",
    image: "/reviews/9.webp",
  },
  {
    id: 22,
    title: "Awesome Hoodies",
    content: "These are easily the best merch I own, and the service from couture was fantastic",
    name: "Zeta Pi",
    product: "Standard T-Shirt, Straightcut Sweatpants, and Heavyweight Hoodie",
    date: "June 2022",
    school: "U of Michigan",
    image: "/reviews/10.webp",
  },
  {
    id: 23,
    title: "CEO approved quality",
    content: "Received, thank you. Our CEO says the quality is great, we love them. Btw we'll be ordering more soon.",
    name: "Hackerpulse",
    product: "Standard T-Shirt, Straightcut Sweatpants, and Heavyweight Hoodie",
    date: "June 2022",
    school: "U of Michigan",
    image: null,
  },
  {
    id: 24,
    title: "Everyone was impressed!", 
    content: "Everyone was impressed! The quality, thickness, and warmth are noticeably better compared to brands like Custom Ink.",
    name: "East Longmeadow",
    product: "Heavyweight Crewneck",
    date: "May 2022",
    school: "U of Michigan",
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
    <div className="px-6 py-8 max-w-5xl mx-auto">
      <h1 className="text-sm uppercase mb-10">CUSTOMER REVIEWS</h1>

      {/* Google Reviews Integration */}
      <div className="mb-16 border border-[#ececec] p-6 hover:border-black transition-colors duration-200">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-sm uppercase font-medium mb-2">GOOGLE REVIEWS</h2>
            <p className="text-xs text-gray-600 mb-4 md:mb-0 max-w-lg">
              See what customers are saying about our high quality custom merchandise on Google. Your feedback helps us improve our products and services.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href={GOOGLE_REVIEWS_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs uppercase px-4 py-2 border border-black bg-black text-white hover:bg-white hover:text-black transition-colors duration-200 text-center"
            >
              Leave a  Review
            </a>
            {/* <a 
              href={GOOGLE_WRITE_REVIEW_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs uppercase px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors duration-200 text-center"
            >
              Leave a Review
            </a> */}
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {currentReviews.map((review) => (
            <div key={review.id} className="group border border-[#ececec] hover:border-black transition-colors duration-200">
              {/* Review Header */}
              <div className="p-8 pb-4 border-b border-[#ececec]">
                <h3 className="text-base font-medium mb-3">{review.title}</h3>
                <p className="text-sm text-gray-600">{review.product}</p>
              </div>
              
              {/* Review Image */}
              {review.image && (
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image 
                    src={review.image} 
                    alt={`Review by ${review.name}`}
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              
              {/* Review Content */}
              <div className="p-8">
                <p className="text-sm leading-relaxed mb-8">{review.content}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-600 pt-4 border-t border-[#ececec]">
                  <div className="flex items-center">
                    <span>{review.name}</span>
                    {review.school && (
                      <span className="ml-2 text-[10px] bg-[#f9f9f9] px-1 py-0.5">{review.school}</span>
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
