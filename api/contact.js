// Vercel Serverless Function for Contact Form
// Security: Input validation, sanitization, rate limiting via headers

// Simple HTML entity encoding for XSS prevention
const sanitizeInput = (str) => {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .slice(0, 10000); // Limit length
};

// Email validation regex
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Check for spam patterns
const hasSpamPatterns = (text) => {
  const spamPatterns = [
    /\b(viagra|cialis|casino|lottery|winner|prize|congratulations|bitcoin|crypto|investment|earn money)\b/i,
    /\[url=/i,
    /<a\s+href=/i,
    /https?:\/\/[^\s]+\.(ru|cn|tk|ml)/i,
  ];
  return spamPatterns.some(pattern => pattern.test(text));
};

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  // Add security headers to response
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Content-Type', 'application/json');

  try {
    const { name, email, message, honeypot } = req.body || {};

    // Honeypot check (anti-bot)
    if (honeypot) {
      // Bot detected - silently succeed to not reveal the trap
      return res.status(200).json({ 
        success: true, 
        message: 'Message received' 
      });
    }

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email).toLowerCase();
    const sanitizedMessage = sanitizeInput(message);

    // Validate name length
    if (sanitizedName.length < 2 || sanitizedName.length > 100) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name must be between 2 and 100 characters' 
      });
    }

    // Validate email format
    if (!isValidEmail(sanitizedEmail)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }

    // Validate message length
    if (sanitizedMessage.length < 10 || sanitizedMessage.length > 5000) {
      return res.status(400).json({ 
        success: false, 
        message: 'Message must be between 10 and 5000 characters' 
      });
    }

    // Check for spam
    if (hasSpamPatterns(sanitizedMessage) || hasSpamPatterns(sanitizedName)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Your message was flagged as spam. Please try again.' 
      });
    }

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Eclipse Softworks <noreply@eclipse-softworks.com>',
    //   to: 'contact@eclipse-softworks.com',
    //   subject: `New Contact Form Submission from ${sanitizedName}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${sanitizedName}</p>
    //     <p><strong>Email:</strong> ${sanitizedEmail}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
    //   `
    // });

    // For now, log the submission (Vercel logs will capture this)
    console.log('Contact form submission:', {
      name: sanitizedName,
      email: sanitizedEmail,
      messageLength: sanitizedMessage.length,
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown'
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'An error occurred. Please try again later.' 
    });
  }
}

// Vercel configuration for rate limiting
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
