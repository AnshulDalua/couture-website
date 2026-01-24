'use server'

import { submitOrderToAirtable } from '@/lib/airtable'
import { sendOrderFormNotification, sendOrderConfirmationToCustomer } from '@/lib/twilio'

export async function submitOrderFormAction(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phoneNumber = formData.get('phoneNumber') as string
    const organization = formData.get('organization') as string
    const university = formData.get('university') as string || undefined
    const projectDetails = formData.get('projectDetails') as string
    const referralSource = formData.get('referralSource') as string || undefined
    
    // Submit the form data to Airtable
    const result = await submitOrderToAirtable({
      name,
      email,
      phoneNumber,
      organization,
      university,
      projectDetails,
      referralSource,
    })
    
    // Send SMS notifications if form was saved successfully
    if (result.success) {
      try {
        // Send notification to admin numbers
        await sendOrderFormNotification({
          name,
          email,
          phoneNumber,
          organization,
          university,
          projectDetails,
          filesCount: 0
        })
        console.log('Order form SMS notification sent successfully')
      } catch (smsError) {
        // Log error but don't fail the form submission
        console.error('Failed to send SMS notification:', smsError)
      }

      try {
        // Send confirmation to customer
        await sendOrderConfirmationToCustomer({
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
    console.error('Error in submitOrderFormAction:', error)
    return { success: false, error: 'Failed to submit order form' }
  }
}
