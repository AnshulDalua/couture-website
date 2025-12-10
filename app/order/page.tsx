"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { submitOrderFormAction } from "./actions"
import Cookies from "js-cookie"
import WinterRushCountdown from "../components/WinterRushCountdown"

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
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error", text: string } | null>(null)
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Get order product from localStorage or cookies
    const product = Cookies.get('orderProduct') || localStorage.getItem('orderProduct')
    if (product) {
      try {
        setOrderProduct(JSON.parse(product))
      } catch (error) {
        console.error("Error parsing order product:", error)
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Convert FileList to array and add to existing files
      const newFiles = Array.from(e.target.files)
      setFiles(prev => [...prev, ...newFiles])
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
      // Convert FileList to array and add to existing files
      const newFiles = Array.from(e.dataTransfer.files)
      setFiles(prev => [...prev, ...newFiles])
      e.dataTransfer.clearData()
    }
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create submission data including the files
      const submissionData = new FormData();
      submissionData.append('name', formData.name);
      submissionData.append('email', formData.email);
      submissionData.append('phoneNumber', formData.phoneNumber);
      submissionData.append('organization', formData.organization);
      submissionData.append('university', formData.university);
      submissionData.append('projectDetails', formData.projectDetails);

      // Append all files with the same field name
      files.forEach(file => {
        submissionData.append('files', file);
      });

      // Submit the form data using the server action
      const result = await submitOrderFormAction(submissionData)

      if (result.success) {
        // Track a lead in Meta
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead', {
            content_name: 'InterestFormSubmission',
            content_category: 'OrderInterest',
          })
        }
        setSubmitMessage({
          type: "success",
          text: "Your order has been submitted successfully! We'll contact you shortly."
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          organization: "",
          university: "",
          projectDetails: "",
        })
        setFiles([])

        // Clear the product from localStorage and cookies
        localStorage.removeItem('orderProduct')
        Cookies.remove('orderProduct')
        setOrderProduct(null)
      } else {
        setSubmitMessage({
          type: "error",
          text: result.error || "There was an error submitting your order. Please try again."
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitMessage({
        type: "error",
        text: "There was an error submitting your order. Please try again."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleStep = (step: number) => {
    setExpandedStep(expandedStep === step ? null : step)
  }

  return (
    <>
    <WinterRushCountdown />
    
    <div className="px-6 py-8 max-w-3xl mx-auto">
      
      <h1 className="text-sm uppercase tracking-wide text-black mb-2">REQUEST ORDER</h1>

      <p className="text-xs text-gray-600 leading-relaxed mb-6">
        Don't worry if you don't have all the details ready! Our team will help you through the process :)<br />
        Minimum order quantity is 20.
        Text us anytime at 732-997-8157 if you have any questions!
      </p>
      
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
              Submit another order
            </button>
          </div>
        )}
        
        {!submitMessage && (
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              <div className="group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-black pb-2 focus:outline-none text-black bg-transparent transition-all duration-300 focus:border-b-2 group-hover:border-b-2"
                  disabled={isSubmitting}
                  placeholder="NAME *"
                />
              </div>

              <div className="group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-black pb-2 focus:outline-none text-black bg-transparent transition-all duration-300 focus:border-b-2 group-hover:border-b-2"
                  disabled={isSubmitting}
                  placeholder="EMAIL *"
                />
              </div>

              <div className="group">
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full border-b border-black pb-2 focus:outline-none text-black bg-transparent transition-all duration-300 focus:border-b-2 group-hover:border-b-2"
                  disabled={isSubmitting}
                  placeholder="PHONE NUMBER *"
                />
              </div>

              <div className="group">
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full border-b border-black pb-2 focus:outline-none text-black bg-transparent transition-all duration-300 focus:border-b-2 group-hover:border-b-2"
                  disabled={isSubmitting}
                  placeholder="ORGANIZATION *"
                />
              </div>
            </div>

            <div className="group">
              <input
                type="text"
                id="university"
                name="university"
                value={formData.university}
                onChange={handleChange}
                className="w-full border-b border-black pb-2 focus:outline-none text-black bg-transparent transition-all duration-300 focus:border-b-2 group-hover:border-b-2"
                disabled={isSubmitting}
                placeholder="UNIVERSITY"
              />
            </div>

            <div className="relative group">
              <textarea
                id="projectDetails"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                required
                rows={3}
                className="w-full border-b border-black pb-2 focus:outline-none resize-none text-black bg-transparent transition-all duration-300 focus:border-b-2 group-hover:border-b-2"
                disabled={isSubmitting}
                placeholder="Tell us what you need (e.g. 50 hoodies for a consulting club, rush merch for a sorority, startup launch gear)."
                style={{ resize: 'vertical' }}
              ></textarea>
              <div
                className="absolute bottom-2 right-0 w-4 h-4 cursor-se-resize flex items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                  <path d="M9 1v8H1" stroke="#000" strokeWidth="1" fill="none" />
                </svg>
              </div>
            </div>

            {/* File upload section - commented out */}
            {/* <div className="pt-2 group">
              <p className="uppercase text-xs mb-3 tracking-wider">UPLOAD DESIGN FILES OR LOGOS (OPTIONAL) </p>
              <input
                type="file"
                id="designFile"
                name="designFile"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".jpg,.jpeg,.png,.pdf,.ai,.psd"
                disabled={isSubmitting}
                multiple
              />
              <div
                className={`border border-black p-6 text-center cursor-pointer transition-all duration-300 ${isDragging ? 'bg-gray-50 border-2' : ''
                  } ${files.length > 0 ? 'bg-gray-50' : ''} group-hover:border-2`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                {files.length > 0 ? (
                  <div className="py-2">
                    <p className="text-sm">{files.length} file{files.length !== 1 ? 's' : ''} selected</p>
                    <button
                      type="button"
                      className="text-xs underline mt-3"
                      onClick={(e) => {
                        e.stopPropagation()
                        setFiles([])
                      }}
                    >
                      Clear all
                    </button>
                  </div>
                ) : (
                  <div className="py-4">
                    <p className="text-sm">Drag and drop your files here or click to browse</p>
                    <p className="text-xs text-gray-500 mt-2">
                      Accepted formats: JPG, PNG, PDF, AI, PSD
                    </p>
                  </div>
                )}
              </div>

              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  <ul className="space-y-2">
                    {files.map((file, index) => (
                      <li key={index} className="flex items-center justify-between text-sm border-b border-gray-200 py-2">
                        <span className="truncate max-w-xs">{file.name}</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            removeFile(index);
                          }}
                          className="text-xs underline ml-2"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div> */}

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-black text-white py-4 uppercase text-sm tracking-widest hover:bg-gray-900 transition-colors duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </div>
          </form>
        )}

        {/* What's Next Section - commented out */}
        {/* <div className="mt-16 border-t border-black pt-12">
          <h2 className="text-sm uppercase tracking-wide text-black mb-8">SO, WHAT NOW?</h2>
          
          <div className="space-y-0 border-b border-black">
            <div className="border-t border-black">
              <button
                onClick={() => toggleStep(1)}
                className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-sm uppercase tracking-wide">STEP #1</span>
                <span className="text-2xl font-light">{expandedStep === 1 ? '−' : '+'}</span>
              </button>
              {expandedStep === 1 && (
                <div className="pb-6 px-2 text-xs leading-relaxed text-gray-600">
                  <p className="uppercase tracking-wide mb-2">Design Consultation</p>
                  <p>
                    Expect a text or email from our team shortly. We'll collaborate on every detail—from concept to final mockup—ensuring your custom merch perfectly represents your organization's style and identity.
                  </p>
                </div>
              )}
            </div>

            <div className="border-t border-black">
              <button
                onClick={() => toggleStep(2)}
                className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-sm uppercase tracking-wide">STEP #2</span>
                <span className="text-2xl font-light">{expandedStep === 2 ? '−' : '+'}</span>
              </button>
              {expandedStep === 2 && (
                <div className="pb-6 px-2 text-xs leading-relaxed text-gray-600">
                  <p className="uppercase tracking-wide mb-2">Production & Quality Control</p>
                  <p>
                    Once your design is approved, we source premium materials and begin production. Our team handles everything—from cutting and printing to embroidery and finishing touches. Every piece is inspected to ensure it meets our high-quality standards.
                  </p>
                </div>
              )}
            </div>

            <div className="border-t border-black">
              <button
                onClick={() => toggleStep(3)}
                className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-sm uppercase tracking-wide">STEP #3</span>
                <span className="text-2xl font-light">{expandedStep === 3 ? '−' : '+'}</span>
              </button>
              {expandedStep === 3 && (
                <div className="pb-6 px-2 text-xs leading-relaxed text-gray-600">
                  <p className="uppercase tracking-wide mb-2">Delivery</p>
                  <p>
                    Your order is carefully packaged and shipped directly to you. We'll keep you updated throughout the process, and our team is always available to answer any questions. Typical delivery takes 3-4 weeks from design approval.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div> */}
      </div>
    </div>
    </>
  )
}
