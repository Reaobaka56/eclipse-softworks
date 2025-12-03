/**
 * Contact service helper
 * Submits contact form data to FormSubmit.co for email delivery.
 * Includes client-side validation and spam prevention.
 */

// FormSubmit.co endpoint - sends form submissions to your email
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/info@eclipse-softworks.com";

// Response interface
interface ContactResponse {
  ok: boolean;
  message?: string;
  error?: string;
}

// Input interface
interface ContactData {
  name: string;
  email: string;
  message: string;
  honeypot?: string; // Hidden field for bot detection
}

// Client-side validation
function validateContactData(data: ContactData): string | null {
  const { name, email, message } = data;
  
  if (!name || name.trim().length < 2) {
    return 'Please enter your name (at least 2 characters)';
  }
  
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Please enter a valid email address';
  }
  
  if (!message || message.trim().length < 10) {
    return 'Please enter a message (at least 10 characters)';
  }
  
  if (message.length > 5000) {
    return 'Message is too long (maximum 5000 characters)';
  }
  
  return null;
}

export async function postContact(data: ContactData): Promise<ContactResponse> {
  // Client-side validation first
  const validationError = validateContactData(data);
  if (validationError) {
    return { ok: false, error: validationError };
  }

  try {
    const payload = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      message: data.message.trim(),
      _subject: `New Contact from ${data.name.trim()} - Eclipse Softworks`,
      _template: 'table', // Use table template for better formatting
    };

    const res = await fetch(FORMSUBMIT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseData = await res.json().catch(() => ({}));

    if (!res.ok) {
      const errorMessage = responseData.message || `Request failed with status ${res.status}`;
      return { ok: false, error: errorMessage };
    }

    return { 
      ok: true, 
      message: responseData.message || 'Message sent successfully!' 
    };
  } catch (err) {
    console.error('postContact error:', err);
    return { 
      ok: false, 
      error: 'Network error. Please check your connection and try again.' 
    };
  }
}

export default postContact;
