'use server'

import { saveContactFormSubmission, type ContactFormData } from '@/lib/contact'

export async function submitContactForm(formData: ContactFormData) {
  try {
    const result = await saveContactFormSubmission(formData)
    return result
  } catch (error) {
    console.error('Error in submitContactForm action:', error)
    return { success: false, error: 'Failed to submit contact form' }
  }
}
