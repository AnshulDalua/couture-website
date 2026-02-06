export type ReferralFormData = {
  name: string;
  phoneNumber: string;
  organization: string;
  isGreekOrg: string;
  utmSource: string;
  utmCampaign: string;
  utmContent: string;
};

export async function submitReferralForm(data: ReferralFormData) {
  // No database storage - just return success for SMS notifications
  try {
    return { success: true, data: data };
  } catch (error) {
    console.error('Error processing referral form:', error);
    return { success: false, error: 'Failed to process referral form' };
  }
}
