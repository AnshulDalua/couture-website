"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"

type OrderProduct = {
  id: number
  name: string
  price: number
  size: string
  color: string
  image: string
}

export default function OrderPage() {
  const [orderProduct, setOrderProduct] = useState<OrderProduct | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    organization: "",
    university: "",
    projectDetails: "",
  })
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error", text: string } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Get order product from localStorage
    const product = localStorage.getItem('orderProduct')
    if (product) {
      setOrderProduct(JSON.parse(product))
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0])
      e.dataTransfer.clearData()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage({
        type: "success",
        text: "Your order has been submitted successfully! We'll contact you shortly."
      })
      setIsSubmitting(false)
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        organization: "",
        university: "",
        projectDetails: "",
      })
      setFile(null)
    }, 1500)
  }

  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-10">PLACE ORDER</h1>

      {submitMessage ? (
        <div className="mb-6">
          <p>{submitMessage.text}</p>
          <button 
            className="mt-4 underline"
            onClick={() => setSubmitMessage(null)}
          >
            Submit another order
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-b border-black pb-2 focus:outline-none text-black"
              disabled={isSubmitting}
              placeholder="NAME *"
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-b border-black pb-2 focus:outline-none text-black"
              disabled={isSubmitting}
              placeholder="EMAIL *"
            />
          </div>

          <div>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full border-b border-black pb-2 focus:outline-none text-black"
              disabled={isSubmitting}
              placeholder="PHONE NUMBER *"
            />
          </div>

          <div>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
              className="w-full border-b border-black pb-2 focus:outline-none text-black"
              disabled={isSubmitting}
              placeholder="ORGANIZATION *"
            />
          </div>

          <div>
            <input
              type="text"
              id="university"
              name="university"
              value={formData.university}
              onChange={handleChange}
              className="w-full border-b border-black pb-2 focus:outline-none text-black"
              disabled={isSubmitting}
              placeholder="UNIVERSITY"
            />
          </div>

          <div className="relative">
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              required
              rows={1}
              className="w-full border-b border-black pb-2 focus:outline-none resize-none text-black pt-2"
              disabled={isSubmitting}
              placeholder="PROJECT DETAILS *"
              style={{ resize: 'vertical' }}
            ></textarea>
            <div 
              className="absolute bottom-2 right-0 w-4 h-4 cursor-se-resize flex items-end justify-end"
              onMouseDown={(e) => {
                e.preventDefault();
                const textarea = e.currentTarget.previousElementSibling as HTMLTextAreaElement;
                const startY = e.clientY;
                const startHeight = textarea.clientHeight;
                
                const handleMouseMove = (moveEvent: MouseEvent) => {
                  const deltaY = moveEvent.clientY - startY;
                  textarea.style.height = `${startHeight + deltaY}px`;
                };
                
                const handleMouseUp = () => {
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };
                
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1v8H1" stroke="#ccc" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </div>

          <div className="pt-2">
            <p className="uppercase text-xs mb-2">UPLOAD DESIGN</p>
            <input
              type="file"
              id="designFile"
              name="designFile"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".jpg,.jpeg,.png,.pdf,.ai,.psd"
              disabled={isSubmitting}
            />
            <div
              className={`border border-black p-4 text-center cursor-pointer transition-colors ${
                isDragging ? 'bg-gray-50' : ''
              } ${file ? 'bg-gray-50' : ''}`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              {file ? (
                <div className="py-2">
                  <p className="text-xs">{file.name}</p>
                  <button
                    type="button"
                    className="text-xs underline mt-2"
                    onClick={(e) => {
                      e.stopPropagation()
                      setFile(null)
                    }}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="py-2">
                  <p className="text-xs">Drag and drop your file here or click to browse</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Accepted formats: JPG, PNG, PDF, AI, PSD
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="pt-6">
            <button 
              type="submit" 
              className="w-full bg-black text-white py-3 uppercase text-sm"
              disabled={isSubmitting}
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </div>
        </form>
      )}

      <div className="mt-10">
        <h2 className="uppercase text-sm font-bold mb-2">CONTACT</h2>
        <p className="text-sm">support@couturebyikigai.com</p>
      </div>
    </div>
  )
}
