import { prisma } from './prisma'

export type ContactFormData = {
  name: string
  email: string
  phoneNumber: string
  orderNumber?: string
  subject?: string
  message: string
}

/**
 * Saves a contact form submission to the database
 * @param formData The contact form data to save
 * @returns The created contact form submission
 */
export async function saveContactFormSubmission(formData: ContactFormData) {
  try {
    const submission = await prisma.contactFormSubmission.create({
      data: formData,
    })
    return { success: true, data: submission }
  } catch (error) {
    console.error('Error saving contact form submission:', error)
    return { success: false, error: 'Failed to save contact form submission' }
  }
}