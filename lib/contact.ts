import { prisma } from './prisma'

export type ContactFormData = {
  name: string
  email: string
  phone?: string
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
    // Only include optional fields if provided (avoid null/undefined payloads)
    const data: {
      name: string
      email: string
      message: string
      phone?: string | null
    } = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      ...(formData.phone && formData.phone.trim() !== '' ? { phone: formData.phone.trim() } : {}),
    }

    const submission = await prisma.contactFormSubmission.create({
      data,
    })
    return { success: true, data: submission }
  } catch (error) {
    // Ensure logging does not throw due to patched console expecting specific payload shapes
    const safeError = error instanceof Error
      ? { name: error.name, message: error.message, stack: error.stack }
      : { message: String(error) }
    console.error('Error saving contact form submission:', safeError)
    return { success: false, error: 'Failed to save contact form submission' }
  }
}