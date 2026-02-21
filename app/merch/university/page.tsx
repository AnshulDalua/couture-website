"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"
import WinterRushCountdown from "@/app/components/WinterRushCountdown"
import { submitOrderFormAction } from "@/app/order/actions"

export default function GreekMerchPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    organization: "",
    execPosition: "",
    university: "",
    projectDetails: "",
  })
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error", text: string } | null>(null)
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
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
      const submissionData = new FormData();
      submissionData.append('name', formData.name);
      submissionData.append('email', formData.email);
      submissionData.append('phoneNumber', formData.phoneNumber);
      submissionData.append('organization', formData.organization);
      submissionData.append('execPosition', formData.execPosition);
      submissionData.append('university', formData.university);
      submissionData.append('projectDetails', formData.projectDetails);

      // Include honeypot field
      const honeypotField = document.getElementById('website') as HTMLInputElement;
      if (honeypotField) {
        submissionData.append('website', honeypotField.value);
      }

      files.forEach(file => {
        submissionData.append('files', file);
      });

      const result = await submitOrderFormAction(submissionData)

      if (result.success) {
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead', {
            content_name: 'InterestFormSubmission',
            content_category: 'OrderInterest',
          })
        }
        setSubmitMessage({
          type: "success",
          text: "We're Reviewing Your Request Right Now!\n\nYou'll receive a text from us within 30-60 minutes during business hours. In the meantime, if you'd also like to book a call to chat directly, you can do that here:"
        })

        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          organization: "",
          execPosition: "",
          university: "",
          projectDetails: "",
        })
        setFiles([])
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
    <div className="min-h-screen">
      {/* Winter Rush Countdown */}
      <WinterRushCountdown />
      {/* Hero Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl uppercase tracking-wide mb-4">
            LUXURY MERCH
          </h1>
          <p className="text-xs text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Premium custom apparel exclusivly for all organizations. Every piece is made in-house on our premium blanks. 
          </p>
          
          {/* Process Highlights */}
          {/* <div className="max-w-3xl mx-auto mb-12">
            <ul className="text-xs text-gray-700 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-black font-semibold">→</span>
                <span><span className="font-semibold">Design Consultation:</span> Work directly with our team to bring your vision to life</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-semibold">→</span>
                <span><span className="font-semibold">In-House Production:</span> Every piece is manufactured on our premium blanks with meticulous attention to detail</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-semibold">→</span>
                <span><span className="font-semibold">Fast Delivery:</span> Receive your custom merch in 2-3 weeks, ready to wear and share</span>
              </li>
            </ul>
          </div> */}
        </div>


        {/* Image Grid */}
        <div className="flex justify-center mb-2">
          <div className="relative aspect-[3/4] w-full max-w-xs">
            <Image
              src="/lookbook/axo-yellow.webp"
              alt="Custom Alpha Phi hoodie design"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="px-6 pt-0 pb-6 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-base md:text-lg uppercase tracking-wide text-black">REQUEST ORDER</h2>
        </div>

        {submitMessage && (
          <div className={`mb-6 p-8 border ${submitMessage.type === 'success' ? 'border-green-500' : 'border-red-500'}`}>
            <p className={`text-lg ${submitMessage.type === 'success' ? 'text-green-700' : 'text-red-700'} whitespace-pre-line`}>
              {submitMessage.text}
            </p>
            {submitMessage.type === 'success' && (
              <a
                href="https://calendly.com/couturebyikigai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-black text-white px-6 py-3 uppercase text-xs tracking-widest hover:bg-gray-900 transition-colors duration-300"
              >
                BOOK A CALL
              </a>
            )}
          </div>
        )}

        {!submitMessage && (
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
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
                <label htmlFor="email" className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
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

            <div className="group">
              <label htmlFor="execPosition" className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                What position do you hold in your sorority?
              </label>
              <input
                type="text"
                id="execPosition"
                name="execPosition"
                required
                value={formData.execPosition}
                onChange={handleChange}
                placeholder="ex. Merch Chair, E-Board, General Member, etc"
                className="w-full border-b border-black pb-2 focus:outline-none text-black bg-transparent transition-all duration-300 focus:border-b-2 group-hover:border-b-2"
                disabled={isSubmitting}
              />
            </div>

            <div className="group">
              <label htmlFor="university" className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                University:
              </label>
              <input
                type="text"
                id="university"
                name="university"
                required
                value={formData.university}
                onChange={handleChange}
                className="w-full border-b border-black pb-2 focus:outline-none text-black bg-transparent transition-all duration-300 focus:border-b-2 group-hover:border-b-2"
                disabled={isSubmitting}
              />
            </div>

            <div className="relative group">
              <label htmlFor="projectDetails" className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                Project Details:
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                required
                value={formData.projectDetails}
                onChange={handleChange}
                className="w-full border-b border-black pb-2 focus:outline-none resize-none text-black bg-transparent transition-all duration-300 focus:border-b-2 group-hover:border-b-2"
                disabled={isSubmitting}
                placeholder="ex. 100 units for our bid day, club rush, startup event"
                style={{ resize: 'vertical' }}
              ></textarea>
            </div>

            {/* File upload section - commented out */}
            {/* <div className="pt-2 group">
              <p className="uppercase text-xs mb-3 tracking-wider">UPLOAD DESIGN FILES OR LOGOS (OPTIONAL)</p>
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
                className={`border border-black p-6 text-center cursor-pointer transition-all duration-300 ${isDragging ? 'bg-gray-50 border-2' : ''} ${files.length > 0 ? 'bg-gray-50' : ''} group-hover:border-2`}
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

            {/* Honeypot field - hidden from real users, bots will fill it */}
            <div className="absolute opacity-0 top-0 left-0 h-0 w-0 -z-10" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

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
      </section>

      {/* Featured Designs */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-base md:text-lg tracking-wide mb-10 text-center">
          RECENT  DESIGNS
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="relative aspect-square">
            <Image
              src="/designs/KKGOLF back-35.webp"
              alt="KKG x SigChi custom long sleeve"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/designs/AphiHoodie.webp"
              alt="Alpha Phi custom hoodie"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/designs/KKGHoodie (3).webp"
              alt="KKG custom hoodie"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/designs/Pi Phi Tank.webp"
              alt="Pi Phi custom Tank design"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-wide mb-8">PERFECT FOR</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
            <div className="uppercase tracking-wide">Rush Week</div>
            <div className="uppercase tracking-wide">Bid Day</div>
            <div className="uppercase tracking-wide">Officer Merch</div>
            <div className="uppercase tracking-wide">Club Wide Merch</div>
            <div className="uppercase tracking-wide">Game Days</div>
            <div className="uppercase tracking-wide">Chapter Retreats</div>
            <div className="uppercase tracking-wide">Big/Little Reveal</div>
            <div className="uppercase tracking-wide">Everyday Wear</div>
          </div>
        </div>
      </section>

    </div>
  )
}
