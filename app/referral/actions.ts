'use server'

import { submitReferralForm } from '@/lib/referral'
import { sendReferralFormNotification, sendReferralConfirmationToCustomer } from '@/lib/twilio'

export async function submitReferralFormAction(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get('name') as string
    const phoneNumber = formData.get('phoneNumber') as string
    const organization = formData.get('organization') as string
    
    // Submit the form data (no database storage)
    const result = await submitReferralForm({
      name,
      phoneNumber,
      organization,
    })
    
    // Send SMS notifications
    if (result.success) {
      try {
        // Send notification to admin numbers
        await sendReferralFormNotification({
          name,
          phoneNumber,
          organization,
        })
        console.log('Referral form SMS notification sent successfully')
      } catch (smsError) {
        // Log error but don't fail the form submission
        console.error('Failed to send SMS notification:', smsError)
      }

      try {
        // Send confirmation to customer
        await sendReferralConfirmationToCustomer({
          name,
          phoneNumber
        })
        console.log('Customer confirmation SMS sent successfully')
      } catch (smsError) {
        // Log error but don't fail the form submission
        console.error('Failed to send customer confirmation SMS:', smsError)
      }
    }
    
    return result
  } catch (error) {
    console.error('Error in submitReferralFormAction:', error)
    return { success: false, error: 'Failed to submit referral form' }
  }
}
