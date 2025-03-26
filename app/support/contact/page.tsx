"use client"

import type React from "react"

import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNumber: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the form data to a server
    alert("Thank you for your message. We will respond within 1-2 business days.")
    setFormData({
      name: "",
      email: "",
      orderNumber: "",
      subject: "",
      message: "",
    })
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
            <p>Monday - Friday: 9AM - 9PM EST</p>
            <p>Email: info@couturebyikigai.com</p>
            <p>Phone: 1-908-798-1235</p>
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
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="orderNumber" className="block text-xs uppercase mb-1">
                  Order Number (if applicable)
                </label>
                <input
                  type="text"
                  id="orderNumber"
                  name="orderNumber"
                  value={formData.orderNumber}
                  onChange={handleChange}
                  className="w-full border border-black p-2 text-xs"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs uppercase mb-1">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-black p-2 text-xs"
                >
                  <option value="">Select a subject</option>
                  <option value="Order Status">Order Status</option>
                  <option value="Returns">Returns</option>
                  <option value="Product Information">Product Information</option>
                  <option value="Shipping">Shipping</option>
                  <option value="Other">Other</option>
                </select>
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
              ></textarea>
            </div>

            <div>
              <button type="submit" className="stussy-button">
                SUBMIT
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

