"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

// FAQ data
const faqCategories = [
  {
    category: "ORDERS",
    questions: [
      {
        question: "I dont have a design in mind, can you help me?",
        answer:
          "Yes, we offer custom design services. Please contact us at info@couturebyikigai.com to discuss your ideas and we can create a custom design for you.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept Visa, Mastercard, American Express, Discover, PayPal, Venmo and Apple Pay.",
      },
      {
        question: "Do you offer international shipping?",
        answer:
          "Yes, we ship to select countries internationally. Delivery times vary by location. Please see the shipping calculator at checkout for specific rates and estimated delivery times.",
      },
      {
        question: "Is there a minimum order quantity?",
        answer:
          "Yes, there is a minimum order quantity of 10 units per order.",
      },
      {
        question: "How do I place a bulk order?",
        answer:
          "To place a bulk order, please contact us at info@couturebyikigai.com with your order details and quantity. We will provide a custom quote and payment instructions.",
      },
      {
        question: "How does pricing work?",
        answer:
          "Our pricing is based on the quantity of units ordered. Please refer to the pricing page for more information.",
      },
    ],
  },
  {
    category: "PRODUCTS",
    questions: [
      {
        question: "How do your products fit?",
        answer:
          "Our products generally fit true to size. For specific sizing information, please refer to the size guide on each product page. If you're between sizes, we recommend sizing up for a more relaxed fit or sizing down for a more fitted look.",
      },
      {
        question: "How should I care for my products?",
        answer:
          "Care instructions vary by product. Please refer to the care label on your garment for specific instructions. In general, we recommend washing in cold water and hanging to dry to preserve the quality and longevity of your items.",
      },
      {
        question: "Are your products sustainable?",
        answer:
          "We are committed to reducing our environmental impact. Many of our products use sustainable materials and ethical manufacturing processes. We continue to explore ways to improve our sustainability practices across all aspects of our business.",
      },
    ],
  },
  {
    category: "SHIPPING & RETURNS",
    questions: [
      {
        question: "How long will it take to receive my order?",
        answer:
          "Turnaround time from payment to delivery is 2-3 weeks. We do not offer expedited shipping options at this time.",
      },
      {
        question: "What is your return policy?",
        answer:
          "We do not accept returns or offer refunds, as all of our products are custom-made to order. However, if there is an issue with your order, please reach out to us at info@couturebyikigai.com",
      },
      {
        question: "Do you offer free shipping?",
        answer: "Shipping is already incorporated into the price of the product and is not an additional charge.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState<string | null>("ORDERS")
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({})

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenQuestions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-sm uppercase mb-10">FREQUENTLY ASKED QUESTIONS</h1>

      <div className="max-w-3xl mx-auto">
        {faqCategories.map((category, categoryIndex) => (
          <div key={category.category} className="border-t border-[#ececec]">
            <button
              className="w-full flex justify-between items-center text-left py-6"
              onClick={() => toggleCategory(category.category)}
            >
              <span className="text-base font-normal">{category.category}</span>
              {openCategory === category.category ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>

            {openCategory === category.category && (
              <div className="pb-6 space-y-6">
                {category.questions.map((faq, questionIndex) => (
                  <div key={questionIndex}>
                    <button
                      className="w-full flex justify-between items-start text-left py-2"
                      onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                    >
                      <span className="text-sm pr-4">{faq?.question}</span>
                      {openQuestions[`${categoryIndex}-${questionIndex}`] ? (
                        <ChevronUp className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      )}
                    </button>

                    {openQuestions[`${categoryIndex}-${questionIndex}`] && (
                      <p className="text-sm mt-2 text-gray-600 pl-4 pr-8">
                        {faq?.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
