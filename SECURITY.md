# Security policy

## Reporting a vulnerability

Do not publish secrets, student data, audio recordings or personal information in public issues. Contact the academy owner through the verified contact address listed on the live website and include a concise description and reproduction steps.

## Deployment requirements

- Keep `SUPABASE_SERVICE_ROLE_KEY` and `OPENAI_API_KEY` in Vercel server-side environment variables only.
- Never commit `.env.local`, access tokens, service-role keys, student exports or recordings.
- Keep Supabase Row Level Security enabled and review policies whenever a table or API route changes.
- Promote an admin account manually from the trusted Supabase SQL editor; never allow self-service role changes.
- Rotate any key that has been exposed, and review access logs after a suspected compromise.
- Use HTTPS for microphone permissions and production authentication callbacks.

## Scope note

This is a starter policy for the project. The academy owner must provide a monitored security contact and operational incident-response process before public launch.
