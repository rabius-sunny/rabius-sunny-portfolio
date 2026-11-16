import { EmailMessage } from 'cloudflare:email'
import { createMimeMessage, Mailbox } from 'mimetext'

interface Env {
  MAIL: SendEmail
  LIMITER?: RateLimit
  TURNSTILE_SECRET: string
  CONTACT_TO: string
  CONTACT_FROM: string
}

const MAX_BODY_BYTES = 16 * 1024
const json = (data: unknown, status = 200) =>
  Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } })

// Strip CR/LF/control chars so user input can never inject mail headers.
const clean = (s: string) => s.replace(/[\u0000-\u001f\u007f]+/g, ' ').trim()

// UTF-8 → base64, wrapped at 76 cols (RFC 2045). mimetext passes the body
// through untouched when encoding is 'base64', so we encode it ourselves.
function toBase64Lines(text: string) {
  let bin = ''
  for (const b of new TextEncoder().encode(text)) bin += String.fromCharCode(b)
  return btoa(bin).replace(/.{1,76}/g, '$&\r\n')
}

async function verifyTurnstile(token: string, ip: string | null, env: Env) {
  const body = new FormData()
  body.set('secret', env.TURNSTILE_SECRET)
  body.set('response', token)
  if (ip) body.set('remoteip', ip)
  const res = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    { method: 'POST', body }
  )
  const out = (await res.json()) as { success?: boolean }
  return out.success === true
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'Method not allowed' }, 405)
  }

  // Same-origin only: Origin (when sent) must match the host being requested.
  const origin = request.headers.get('Origin')
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return json({ ok: false, error: 'Forbidden' }, 403)
  }

  const ip = request.headers.get('CF-Connecting-IP')
  if (env.LIMITER) {
    const { success } = await env.LIMITER.limit({ key: ip ?? 'unknown' })
    if (!success) {
      return json(
        { ok: false, error: 'Too many requests. Try again soon.' },
        429
      )
    }
  }

  const raw = await request.text()
  if (raw.length > MAX_BODY_BYTES) {
    return json({ ok: false, error: 'Message too large' }, 413)
  }

  let data: Record<string, unknown>
  try {
    data = JSON.parse(raw)
  } catch {
    return json({ ok: false, error: 'Invalid request' }, 400)
  }

  // Honeypot: real users never fill this. Pretend success to bots.
  if (typeof data.website === 'string' && data.website !== '') {
    return json({ ok: true })
  }

  const name = clean(String(data.name ?? ''))
  const email = clean(String(data.email ?? ''))
  const message = String(data.message ?? '').trim()
  const token = String(data['cf-turnstile-response'] ?? '')

  if (!name || name.length > 100) {
    return json({ ok: false, error: 'Please enter your name.' }, 400)
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return json({ ok: false, error: 'Please enter a valid email.' }, 400)
  }
  if (message.length < 5 || message.length > 5000) {
    return json({ ok: false, error: 'Message must be 5–5000 characters.' }, 400)
  }
  if (!token || !(await verifyTurnstile(token, ip, env))) {
    return json({ ok: false, error: 'Verification failed. Please retry.' }, 400)
  }

  const mime = createMimeMessage()
  mime.setSender({ name: 'Portfolio contact form', addr: env.CONTACT_FROM })
  mime.setRecipient(env.CONTACT_TO)
  mime.setHeader('Reply-To', new Mailbox({ name, addr: email }))
  mime.setSubject(`New message from ${name}`)
  mime.addMessage({
    contentType: 'text/plain',
    encoding: 'base64',
    data: toBase64Lines(`Name: ${name}
Email: ${email}

${message}
`)
  })

  try {
    await env.MAIL.send(
      new EmailMessage(env.CONTACT_FROM, env.CONTACT_TO, mime.asRaw())
    )
  } catch (err) {
    console.error('send_email failed', err)
    return json(
      {
        ok: false,
        error: 'Could not send your message. Please email me directly.'
      },
      502
    )
  }
  return json({ ok: true })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url)
    if (pathname === '/api/contact') return handleContact(request, env)
    return json({ ok: false, error: 'Not found' }, 404)
  }
} satisfies ExportedHandler<Env>
