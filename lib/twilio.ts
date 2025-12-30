/**
 * Twilio SMS utility for sending notifications
 */

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;

// Your notification phone numbers (where you want to receive SMS)
// Can be a single number or comma-separated list
const NOTIFICATION_PHONE_NUMBERS = process.env.NOTIFICATION_PHONE_NUMBERS;

/**
 * Base64 encode a string using Buffer
 */
function base64Encode(str: string): string {
  return Buffer.from(str, "utf-8").toString("base64");
}

/**
 * Create form-data encoded string from params
 */
function createFormData(params: Record<string, string>): string {
  return Object.keys(params)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key]))
    .join("&");
}

/**
 * Send SMS via Twilio
 */
export async function sendTwilioSMS(toPhoneNumber: string, messageBody: string): Promise<boolean> {
  if (!toPhoneNumber || !messageBody) {
    console.log("Skipping SMS - missing phone number or message");
    return false;
  }

  const authHeader = base64Encode(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`);
  
  const formData = createFormData({
    From: TWILIO_PHONE_NUMBER,
    To: toPhoneNumber,
    Body: messageBody
  });

  try {
    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`,
      {
        method: "POST",
        headers: {
          "Authorization": `Basic ${authHeader}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Twilio SMS Error for ${toPhoneNumber}:`, errorText);
      return false;
    }

    const data = await response.json();
    console.log(`✅ SMS sent successfully to ${toPhoneNumber}, SID: ${data.sid}`);
    return true;
  } catch (error) {
    console.error(`Failed to send SMS to ${toPhoneNumber}:`, error instanceof Error ? error.message : String(error));
    return false;
  }
}

/**
 * Send contact form notification SMS
 */
export async function sendContactFormNotification(formData: {
  name: string;
  email: string;
  message: string;
}): Promise<boolean> {
  try {
    const messageBody = `📧 NEW CONTACT FORM SUBMISSION

Form Type: CONTACT FORM

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST`;

    // Send to all notification phone numbers
    const phoneNumbers = NOTIFICATION_PHONE_NUMBERS.split(',').map(num => num.trim());
    const results = await Promise.all(
      phoneNumbers.map(phoneNumber => sendTwilioSMS(phoneNumber, messageBody))
    );
    
    // Return true if at least one SMS was sent successfully
    return results.some(result => result === true);
  } catch (error) {
    console.error('Error in sendContactFormNotification:', error);
    return false;
  }
}

/**
 * Send order form notification SMS
 */
export async function sendOrderFormNotification(formData: {
  name: string;
  email: string;
  phoneNumber: string;
  organization: string;
  university?: string;
  projectDetails: string;
  filesCount?: number;
}): Promise<boolean> {
  try {
    const messageBody = `📦 NEW ORDER FORM SUBMISSION

Form Type: ORDER REQUEST

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phoneNumber}
Organization: ${formData.organization}${formData.university ? `\nUniversity: ${formData.university}` : ''}

Project Details:
${formData.projectDetails}

${formData.filesCount ? `📎 Files Attached: ${formData.filesCount}` : '📎 No files attached'}

---
Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST`;

    // Send to all notification phone numbers
    const phoneNumbers = NOTIFICATION_PHONE_NUMBERS.split(',').map(num => num.trim());
    const results = await Promise.all(
      phoneNumbers.map(phoneNumber => sendTwilioSMS(phoneNumber, messageBody))
    );
    
    // Return true if at least one SMS was sent successfully
    return results.some(result => result === true);
  } catch (error) {
    console.error('Error in sendOrderFormNotification:', error);
    return false;
  }
}

/**
 * Send order confirmation SMS to customer
 */
export async function sendOrderConfirmationToCustomer(formData: {
  name: string;
  phoneNumber: string;
}): Promise<boolean> {
  try {
    const messageBody = `Hi ${formData.name}! 

Thank you for submitting your order request with Couture by Ikigai. 

We've received your information and our team will reach out from 732-997-8157 within the next few hours to discuss your custom merch project.

Talk soon!
- Couture Team`;

    // Send confirmation to the customer's phone number
    const result = await sendTwilioSMS(formData.phoneNumber, messageBody);
    
    return result;
  } catch (error) {
    console.error('Error in sendOrderConfirmationToCustomer:', error);
    return false;
  }
}

/**
 * Send referral form notification SMS
 */
export async function sendReferralFormNotification(formData: {
  name: string;
  phoneNumber: string;
  organization: string;
}): Promise<boolean> {
  try {
    const messageBody = `🎯 REFERRAL

Form Type: REFERRAL SUBMISSION

Name: ${formData.name}
Phone: ${formData.phoneNumber}
Organization: ${formData.organization}

---
Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST`;

    // Send to all notification phone numbers
    const phoneNumbers = NOTIFICATION_PHONE_NUMBERS.split(',').map(num => num.trim());
    const results = await Promise.all(
      phoneNumbers.map(phoneNumber => sendTwilioSMS(phoneNumber, messageBody))
    );
    
    // Return true if at least one SMS was sent successfully
    return results.some(result => result === true);
  } catch (error) {
    console.error('Error in sendReferralFormNotification:', error);
    return false;
  }
}

/**
 * Send referral confirmation SMS to customer
 */
export async function sendReferralConfirmationToCustomer(formData: {
  name: string;
  phoneNumber: string;
}): Promise<boolean> {
  try {
    const messageBody = `Hi ${formData.name}! 

Thanks for wanting to share Couture with a friend! 

We'll text you from 732-997-8157 shortly to set up a group chat and connect you both.

Talk soon!
- Couture Team`;

    // Send confirmation to the customer's phone number
    const result = await sendTwilioSMS(formData.phoneNumber, messageBody);
    
    return result;
  } catch (error) {
    console.error('Error in sendReferralConfirmationToCustomer:', error);
    return false;
  }
}
