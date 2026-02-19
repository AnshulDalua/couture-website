'use server'

import { saveContactFormSubmission, type ContactFormData } from '@/lib/contact'
import { sendContactFormNotification, sendContactConfirmationToCustomer } from '@/lib/twilio'

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Honeypot spam check — if the hidden 'website' field is filled, it's a bot
    if (formData.website) {
      console.log('Spam detected via honeypot field')

      try {
        // Send spam alert SMS to admin — no DB save, no customer SMS
        await sendContactFormNotification({
          name: `🚨 SPAM DETECTED 🚨\n\n${formData.name}`,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          message: formData.message
        })
      } catch (smsError) {
        console.error('Failed to send spam notification SMS:', smsError)
      }

      return { success: true, error: undefined, spam: false }
    }

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
    
    return { ...result, spam: false }
  } catch (error) {
    console.error('Error in submitContactForm action:', error)
    return { success: false, error: 'Failed to submit contact form', spam: false }
  }
}
