import { put } from '@vercel/blob';

/**
 * Waitlist capture: one email per blob under waitlist/<role>/.
 * Read submissions with `npx vercel blob list --prefix waitlist/` or in the
 * Vercel dashboard (store: vl-waitlist). Interim until the Tally forms exist.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const ROLES = new Set(['founder', 'mba', 'mentor']);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'POST only.' });
  }
  const body = req.body ?? {};
  // Honeypot: bots fill every field; humans never see this one.
  if (body.company_website) {
    return res.status(200).json({ ok: true });
  }
  const email = String(body.email ?? '')
    .trim()
    .toLowerCase();
  const role = ROLES.has(body.role) ? body.role : 'founder';
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return res.status(400).json({ ok: false, error: 'that does not parse as an email' });
  }
  try {
    const key = `waitlist/${role}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.json`;
    await put(key, JSON.stringify({ email, role, at: new Date().toISOString() }), {
      access: 'private',
      contentType: 'application/json',
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('waitlist write failed:', error);
    return res.status(500).json({ ok: false, error: 'could not save, try again' });
  }
}
