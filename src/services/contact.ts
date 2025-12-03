/**
 * Contact service helper
 * Submits contact form data to the Vercel serverless API endpoint.
 * Includes client-side validation and honeypot field for spam prevention.
 */

// API endpoint for contact form
const FORM_ENDPOINT = "/api/contact";

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
      honeypot: data.honeypot || '', // Include honeypot for bot detection
    };

    const res = await fetch(FORM_ENDPOINT, {
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
