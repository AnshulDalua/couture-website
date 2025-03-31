import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database and storage
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Bucket name for design files
const BUCKET_NAME = 'designs'

// Sanitize organization name for use in file paths
function sanitizeForPath(name: string): string {
  // Replace spaces with underscores and remove special characters
  return name.toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_-]/g, '')
    .substring(0, 50); // Limit length to avoid very long paths
}

export async function uploadDesignFile(file: File, organization: string) {
  try {
    // Create a unique file name to avoid collisions
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`
    
    // Create path with organization name
    const sanitizedOrg = sanitizeForPath(organization)
    const filePath = `${sanitizedOrg}/${fileName}`

    // Try to upload the file to Supabase Storage
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      })

    // Handle upload errors
    if (error) {
      console.error('Error uploading file:', error)
      
      // Check error message for common issues
      const errorMsg = error.message || '';
      if (errorMsg.includes('Bucket not found') || 
          errorMsg.includes('violates row-level security policy')) {
        
        console.log('Storage bucket not available or permission denied. Storing file info only.')
        
        // Return file information without actual upload
        return {
          url: null,
          filePath: null,
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type,
          notUploaded: true,
          errorMessage: 'File not uploaded: ' + errorMsg
        }
      }
      
      return { error: errorMsg }
    }

    // If upload successful, try to get a signed URL
    try {
      // Get a signed URL for the file (valid for 60 minutes)
      const { data: signedUrlData, error: signedUrlError } = await supabase.storage
        .from(BUCKET_NAME)
        .createSignedUrl(filePath, 60 * 60) // 1 hour expiration
      
      if (signedUrlError) {
        console.error('Error getting signed URL:', signedUrlError)
        
        // Return basic file info even if we can't get a signed URL
        return {
          url: null,
          filePath: filePath,
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type,
          noSignedUrl: true
        }
      }

      // Return complete file information with signed URL
      return {
        url: signedUrlData.signedUrl,
        filePath: filePath,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type
      }
    } catch (signedUrlError) {
      console.error('Error getting signed URL:', signedUrlError)
      
      // Return basic file info even if we can't get a signed URL
      return {
        url: null,
        filePath: filePath,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        noSignedUrl: true
      }
    }
  } catch (error) {
    console.error('Error in uploadDesignFile:', error)
    const errorMsg = error instanceof Error ? error.message : String(error);
    return { error: errorMsg }
  }
}
