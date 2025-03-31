import { PrismaClient } from '@prisma/client';
import { prisma } from './prisma';

export type DesignFileData = {
  fileName: string;
  fileUrl?: string;
  filePath?: string;
  fileSize?: number;
  fileType?: string;
};

export type OrderFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  organization: string;
  university?: string;
  projectDetails: string;
  designFiles?: DesignFileData[];
};

export async function submitOrderForm(data: OrderFormData) {
  try {
    // Create the order submission with related design files
    const submission = await prisma.orderFormSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        organization: data.organization,
        university: data.university || null,
        projectDetails: data.projectDetails,
        designFiles: {
          create: data.designFiles?.map(file => ({
            fileName: file.fileName,
            fileUrl: file.fileUrl || null,
            filePath: file.filePath || null,
            fileSize: file.fileSize || null,
            fileType: file.fileType || null,
          })) || []
        }
      },
      include: {
        designFiles: true // Include the created design files in the response
      }
    });
    
    return { success: true, data: submission };
  } catch (error) {
    console.error('Error submitting order form:', error);
    return { success: false, error: 'Failed to submit order form' };
  }
}
