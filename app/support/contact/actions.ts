'use server'

import { saveContactFormSubmission, type ContactFormData } from '@/lib/contact'
import { sendContactFormNotification, sendContactConfirmationToCustomer } from '@/lib/twilio'

export async function submitContactForm(formData: ContactFormData) {
  try {
    const result = await saveContactFormSubmission(formData)
    
    // Send SMS notifications if form was saved successfully
    if (result.success) {
      try {
        await sendContactFormNotification({
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          message: formData.message
        })
        console.log('Contact form SMS notification sent successfully')
      } catch (smsError) {
        // Log error but don't fail the form submission
        console.error('Failed to send SMS notification:', smsError)
      }

      try {
        // Send confirmation to customer
        await sendContactConfirmationToCustomer({
          name: formData.name,
          phoneNumber: formData.phoneNumber
        })
        console.log('Customer confirmation SMS sent successfully')
      } catch (smsError) {
        // Log error but don't fail the form submission
        console.error('Failed to send customer confirmation SMS:', smsError)
      }
    }
    
    return result
  } catch (error) {
    console.error('Error in submitContactForm action:', error)
    return { success: false, error: 'Failed to submit contact form' }
  }
}
