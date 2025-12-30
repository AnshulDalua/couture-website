"use client"

import { useState } from "react"
import { submitReferralFormAction } from "./actions"

export default function ReferralPage() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    organization: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error", text: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create submission data
      const submissionData = new FormData();
      submissionData.append('name', formData.name);
      submissionData.append('phoneNumber', formData.phoneNumber);
      submissionData.append('organization', formData.organization);

      // Submit the form data using the server action
      const result = await submitReferralFormAction(submissionData)

      if (result.success) {
        // Track a lead in Meta
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead', {
            content_name: 'ReferralFormSubmission',
            content_category: 'Referral',
          })
        }
        setSubmitMessage({
          type: "success",
          text: "Perfect! We'll text you shortly to set up a group chat with your friend."
        })

        // Reset form
        setFormData({
          name: "",
          phoneNumber: "",
          organization: "",
        })
      } else {
        setSubmitMessage({
          type: "error",
          text: result.error || "There was an error submitting your referral. Please try again."
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitMessage({
        type: "error",
        text: "There was an error submitting your referral. Please try again."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-sm uppercase tracking-wide text-black mb-2">REFER A FRIEND</h1>

      <p className="text-xs text-gray-600 leading-relaxed mb-4">
        Love your merch? Share the love.
      </p>
      
      <div className="bg-gray-50 border border-black p-6 mb-8">
        <p className="text-xs leading-relaxed mb-3">
          <span className="font-semibold">Here's how it works:</span>
        </p>
        <ul className="text-xs space-y-2 list-none">
          <li>→ We'll text you from 732-997-8157 to set up a group chat with your friend</li>
          <li>→ You get a discount on your next order for every successful referral</li>
          <li>→ Your friend gets the same quality merch you experienced</li>
        </ul>
      </div>
      
      <div className="space-y-8">
        {submitMessage && (
          <div className={`mb-6 p-8 border ${submitMessage.type === 'success' ? 'border-green-500' : 'border-red-500'}`}>
            <p className={`text-lg ${submitMessage.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
              {submitMessage.text}
            </p>
            <button
              className="mt-6 underline"
              onClick={() => setSubmitMessage(null)}
            >
              Submit another referral
            </button>
          </div>
        )}
        
        {!submitMessage && (
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 gap-y-10">
              <div className="group">
                <label htmlFor="name" className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-black pb-2 focus:outline-none text-black bg-transparent transition-all duration-300 focus:border-b-2 group-hover:border-b-2"
                  disabled={isSubmitting}
                />
              </div>

              <div className="group">
                <label htmlFor="phoneNumber" className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full border-b border-black pb-2 focus:outline-none text-black bg-transparent transition-all duration-300 focus:border-b-2 group-hover:border-b-2"
                  disabled={isSubmitting}
                />
              </div>

              <div className="group">
                <label htmlFor="organization" className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                  Organization:
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full border-b border-black pb-2 focus:outline-none text-black bg-transparent transition-all duration-300 focus:border-b-2 group-hover:border-b-2"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-black text-white py-4 uppercase text-sm tracking-widest hover:bg-gray-900 transition-colors duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "SUBMITTING..." : "GET STARTED"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
