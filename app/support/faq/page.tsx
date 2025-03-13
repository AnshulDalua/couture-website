"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

// FAQ data
const faqCategories = [
  {
    category: "ORDERS",
    questions: [
      {
        question: "How do I track my order?",
        answer:
          "Once your order has been shipped, you will receive a confirmation email with tracking information. You can also track your order by logging into your account and viewing your order history.",
      },
      {
        question: "Can I modify or cancel my order?",
        answer:
          "Orders can be modified or canceled within 1 hour of placement. Please contact customer service immediately if you need to make changes to your order. Once an order has been processed, we cannot make changes or cancel it.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept Visa, Mastercard, American Express, Discover, PayPal, and Apple Pay.",
      },
      {
        question: "Do you offer international shipping?",
        answer:
          "Yes, we ship to select countries internationally. Shipping rates and delivery times vary by location. Please see the shipping calculator at checkout for specific rates and estimated delivery times.",
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
          "Standard shipping typically takes 3-7 business days. Express shipping takes 2-3 business days, and overnight shipping delivers the next business day for orders placed before 12PM PST.",
      },
      {
        question: "What is your return policy?",
        answer:
          "We accept returns within 30 days of delivery for a full refund or exchange. Items must be unworn, unwashed, and unaltered with all original tags attached. For more details, please visit our Returns page.",
      },
      {
        question: "Do you offer free shipping?",
        answer: "Yes, we offer free standard shipping on all U.S. orders over $150 USD.",
      },
      {
        question: "How do I return an item?",
        answer:
          "To return an item, log into your account, select the order containing the item you wish to return, and follow the return instructions. You'll be able to print a prepaid return label and drop off your package at any USPS location.",
      },
    ],
  },
  {
    category: "ACCOUNT & TECHNICAL",
    questions: [
      {
        question: "How do I create an account?",
        answer:
          "You can create an account by clicking on the 'Account' link in the top navigation and selecting 'Create Account'. You'll need to provide your email address and create a password.",
      },
      {
        question: "I forgot my password. How do I reset it?",
        answer:
          "Click on the 'Account' link in the top navigation, select 'Login', and then click on 'Forgot Password'. You'll receive an email with instructions to reset your password.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Yes, we take data security seriously. We use industry-standard encryption to protect your personal and payment information. For more details, please review our Privacy Policy.",
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
      <h1 className="text-sm uppercase mb-8">FREQUENTLY ASKED QUESTIONS</h1>

      <div className="space-y-6">
        {faqCategories.map((category, categoryIndex) => (
          <div key={category.category} className="border-t border-[#ececec] pt-4">
            <button
              className="w-full flex justify-between items-center text-left text-sm uppercase font-medium py-2"
              onClick={() => toggleCategory(category.category)}
            >
              {category.category}
              {openCategory === category.category ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            {openCategory === category.category && (
              <div className="mt-4 space-y-4">
                {category.questions.map((faq, questionIndex) => (
                  <div key={questionIndex} className="border-b border-[#ececec] pb-4 last:border-b-0">
                    <button
                      className="w-full flex justify-between items-start text-left text-xs font-medium py-1"
                      onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                    >
                      <span>{faq.question}</span>
                      {openQuestions[`${categoryIndex}-${questionIndex}`] ? (
                        <ChevronUp className="h-3 w-3 mt-0.5 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-3 w-3 mt-0.5 flex-shrink-0" />
                      )}
                    </button>

                    {openQuestions[`${categoryIndex}-${questionIndex}`] && <p className="text-xs mt-2">{faq.answer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-xs">
        <p>
          Can't find what you're looking for? Please contact our customer service team at support@couturebyikigai.com or
          call us at 1-800-555-1234 during business hours (Monday-Friday, 9AM-5PM PST).
        </p>
      </div>
    </div>
  )
}

