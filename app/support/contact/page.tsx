"use client"

import type React from "react"
import { useState } from "react"
import { submitContactForm } from "./actions"
import { toast } from "sonner"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const result = await submitContactForm(formData)
      
      if (result.success) {
        toast.success("Thank you for your message. We will respond within 1-2 business days.")
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        toast.error(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Failed to submit form. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-sm uppercase mb-8">CONTACT US</h1>

      <div className="space-y-8">
        <section className="space-y-4 text-xs">
          <p>
            We're here to help with any questions or concerns you may have. Please fill out the form below and we'll get
            back to you as soon as possible.
          </p>

          <div className="space-y-2">
            <p className="font-medium">CUSTOMER SERVICE HOURS:</p>
            <p>Monday - Friday: 9AM - 5PM PST</p>
            <p>Email: support@couturebyikigai.com</p>
            <p>Phone: 1-800-555-1234</p>
          </div>
        </section>

        <section>
          <h2 className="text-sm uppercase mb-4">CONTACT FORM</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs uppercase mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-black p-2 text-xs"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-black p-2 text-xs"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs uppercase mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full border border-black p-2 text-xs"
                disabled={isSubmitting}
              ></textarea>
            </div>

            <div>
              <button type="submit" className="stussy-button" disabled={isSubmitting}>
                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}
