/**
 * Contact service helper
 * This provides a simple `postContact` function that submits the contact form
 * using the Formspree endpoint. Replace FORM_ENDPOINT with your Formspree
 * form endpoint or your own server function.
 */
const FORM_ENDPOINT = "/.netlify/functions/contact"; // Netlify function endpoint by default; replace with your Formspree or API endpoint for production

export async function postContact(data: { name: string; email: string; message: string }) {
  try {
    const payload = { ...data };
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(`Contact post failed: ${res.status}`);
    return { ok: true };
  } catch (err) {
    console.error('postContact error', err);
    return { ok: false, error: String(err) };
  }
}

export default postContact;
