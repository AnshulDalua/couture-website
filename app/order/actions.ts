'use server'

import { submitOrderForm, type OrderFormData, type DesignFileData } from '@/lib/order'
import { uploadDesignFile } from '@/lib/supabase'

export async function submitOrderFormAction(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phoneNumber = formData.get('phoneNumber') as string
    const organization = formData.get('organization') as string
    const university = formData.get('university') as string || undefined
    const projectDetails = formData.get('projectDetails') as string
    
    // Get all files from the form data (multiple files)
    const files = formData.getAll('files') as File[]
    const designFiles: DesignFileData[] = []
    
    // Upload each file to Supabase Storage
    if (files && files.length > 0) {
      for (const file of files) {
        if (file.size > 0) { // Check if it's a valid file
          // Pass the organization name to organize files by organization
          const uploadResult = await uploadDesignFile(file, organization)
          
          // Check if there was an error during upload
          if ('error' in uploadResult) {
            console.error('Error uploading file:', uploadResult.error)
            // Continue with other files, but log the error
          } else {
            // Add the file info to our array
            designFiles.push({
              fileName: uploadResult.fileName,
              fileUrl: uploadResult.url || undefined,
              filePath: uploadResult.filePath || undefined,
              fileSize: file.size,
              fileType: file.type
            })
          }
        }
      }
    }
    
    // Submit the form data with all the file information
    const result = await submitOrderForm({
      name,
      email,
      phoneNumber,
      organization,
      university,
      projectDetails,
      designFiles: designFiles.length > 0 ? designFiles : undefined
    })
    
    return result
  } catch (error) {
    console.error('Error in submitOrderFormAction:', error)
    return { success: false, error: 'Failed to submit order form' }
  }
}
