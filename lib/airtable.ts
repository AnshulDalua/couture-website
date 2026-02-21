const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY || '';
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || '';
const AIRTABLE_TABLE_NAME = 'Clients-s26';

export type OrderFormDataForAirtable = {
  name: string;
  email: string;
  phoneNumber: string;
  organization: string;
  execPosition: string;
  university: string;
  projectDetails: string;
  referralSource?: string;
};

// Map form referral source values to Airtable source field values
function mapReferralSourceToAirtable(source?: string): string {
  switch (source) {
    case 'instagram':
      return 'Instagram Ad Conversion (filled out form, DMd us)';
    case 'google':
      return 'google';
    case 'referral':
      return 'Warm Connect (old client refers us, etc)';
    case 'tiktok':
      return 'tiktok';
    case 'other':
      return 'other';
    default:
      return 'other';
  }
}

export async function submitOrderToAirtable(data: OrderFormDataForAirtable) {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    console.error('Airtable credentials not configured');
    return { success: false, error: 'Airtable credentials not configured' };
  }

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;

  const sourceValue = mapReferralSourceToAirtable(data.referralSource);

  const airtableRecord = {
    fields: {
      contactName: data.name,
      email: data.email,
      phone: data.phoneNumber,
      organization: data.organization,
      exec_position: data.execPosition,
      otherSchool: data.university,
      notes: data.projectDetails,
      status: 'form fill out',
      ...(sourceValue && { source: sourceValue }),
    },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(airtableRecord),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Airtable API error:', errorData);
      return { success: false, error: errorData.error?.message || 'Failed to submit to Airtable' };
    }

    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    console.error('Error submitting to Airtable:', error);
    return { success: false, error: 'Failed to submit to Airtable' };
  }
}
