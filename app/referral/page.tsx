"use client"

import { useState, useEffect } from "react"
import { submitReferralFormAction } from "./actions"

function ReferralPage() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    organization: "",
    isGreekOrg: "",
    utmSource: "",
    utmCampaign: "paid_referral_v1",
    utmContent: "make_group_chat",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error", text: string } | null>(null)

  // Capture UTM parameters from URL on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const utmSource = params.get('utm_source') || 'direct'
      const utmContent = params.get('utm_content') || 'make_group_chat'
      
      setFormData(prev => ({
        ...prev,
        utmSource,
        utmContent,
      }))
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      submissionData.append('isGreekOrg', formData.isGreekOrg);
      submissionData.append('utmSource', formData.utmSource);
      submissionData.append('utmCampaign', formData.utmCampaign);
      submissionData.append('utmContent', formData.utmContent);

      // Submit the form data using the server action
      const result = await submitReferralFormAction(submissionData)

      if (result.success) {
        // Track a lead in Meta
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead', {
            content_name: 'PaidReferralSubmission',
            content_category: 'PaidReferral',
            value: formData.isGreekOrg === 'yes' ? 60 : 30,
          })
        }
        setSubmitMessage({
          type: "success",
          text: "Thanks — we'll text you shortly to start the group chat!"
        })

        // Reset form (preserve UTM params)
        setFormData(prev => ({
          name: "",
          phoneNumber: "",
          organization: "",
          isGreekOrg: "",
          utmSource: prev.utmSource,
          utmCampaign: prev.utmCampaign,
          utmContent: prev.utmContent,
        }))
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
    <div className="px-6 py-12 max-w-2xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-black mb-4">
          Make a Groupchat. Get Paid.
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-8">
          Introduce us to a merch chair. Earn $30–$60.
        </p>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 border border-black p-8 mb-12">
        <p className="text-xs uppercase tracking-wide font-semibold mb-4">
          How It Works
        </p>
        <ul className="text-sm space-y-3 list-none">
          <li>→ <span className="font-bold">Submit the intro</span> — tell us which club or Greek org you can connect us to</li>
          <li>→ <span className="font-bold">Make a quick group chat</span> — we'll reach out, just loop us in with the merch chair</li>
          <li>→ <span className="font-bold">If they order, you get paid</span> — $30 non-Greek orgs · $60 Greek</li>
        </ul>
      </div>
      
      {/* Success/Error Message */}
      {submitMessage && (
        <div className={`mb-8 p-8 border ${submitMessage.type === 'success' ? 'border-green-500' : 'border-red-500'}`}>
          <p className={`text-lg ${submitMessage.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
            {submitMessage.text}
          </p>
          <button
            className="mt-6 underline text-sm"
            onClick={() => setSubmitMessage(null)}
          >
            Submit another referral
          </button>
        </div>
      )}
      
      {/* Form */}
      {!submitMessage && (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            {/* Your Name */}
            <div className="group">
              <label htmlFor="name" className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                Your name
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

            {/* Your Phone Number */}
            <div className="group">
              <label htmlFor="phoneNumber" className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                Your phone number
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
              <p className="text-xs text-gray-500 mt-1">
                We'll text you to start the group chat.
              </p>
            </div>

            {/* Club or Greek org name */}
            <div className="group">
              <label htmlFor="organization" className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                Club or Greek org name
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

            {/* Is this a Greek org? */}
            {/* <div className="group">
              <label htmlFor="isGreekOrg" className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                Is this a Greek org?
              </label>
              <select
                id="isGreekOrg"
                name="isGreekOrg"
                required
                value={formData.isGreekOrg}
                onChange={handleChange}
                className="w-full border-b border-black pb-2 focus:outline-none text-black bg-transparent transition-all duration-300 focus:border-b-2 group-hover:border-b-2"
                disabled={isSubmitting}
              >
                <option value="">Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div> */}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-black text-white py-4 uppercase text-sm tracking-widest hover:bg-gray-900 transition-colors duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "SUBMITTING..." : "MAKE THE INTRO!"}
            </button>
          </div>

          {/* Privacy Microcopy */}
          <p className="text-xs text-gray-500 text-center">
            We'll only text you about this intro.
          </p>
        </form>
      )}
    </div>
  )
}

export default ReferralPage
