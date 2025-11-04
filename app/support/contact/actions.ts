'use server'

import { saveContactFormSubmission, type ContactFormData } from '@/lib/contact'
import { sendContactFormNotification } from '@/lib/twilio'

export async function submitContactForm(formData: ContactFormData) {
  try {
    const result = await saveContactFormSubmission(formData)
    
    // Send SMS notification if form was saved successfully
    if (result.success) {
      try {
        await sendContactFormNotification({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
        console.log('Contact form SMS notification sent successfully')
      } catch (smsError) {
        // Log error but don't fail the form submission
        console.error('Failed to send SMS notification:', smsError)
      }
    }
    
    return result
  } catch (error) {
    console.error('Error in submitContactForm action:', error)
    return { success: false, error: 'Failed to submit contact form' }
  }
}
