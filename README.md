# Hussien Badr English

A bilingual English-learning academy (Arabic / English) built with Next.js 16, Supabase Auth + Postgres, and server-side OpenAI assessment services.

## Included in this package

- Premium responsive academy home page using the supplied HB logo, founder portrait and navy / yellow / blue palette.
- Arabic / English interface switcher.
- A 150-item A1–C1 learning catalogue (30 entries per level): 40 manually authored lessons plus 110 structured topic-based lesson drafts. The 110 drafts require teacher review and enrichment before they can be marketed as fully developed lessons.
- A 40-item placement test: 8 grammar, 6 vocabulary, 7 reading, 7 listening, 6 writing and 6 speaking tasks.
- Listening prompts are played using the browser’s built-in English text-to-speech voice; voice quality and availability vary by device and browser. The source scripts are delivered to the client, so this is a functional prototype rather than a secure high-stakes listening exam.
- Speaking recording in the browser and server-side transcription using the OpenAI `gpt-transcribe` model.
- AI-assisted written and speaking-transcript scoring with feedback. Speaking is assessed from its transcript; the application does not claim to measure pronunciation acoustically. Private answer keys remain server-only; the browser bundle contains no correct-answer map.
- Student sign-up / sign-in, saved assessment history and lesson completion tracking.
- Academy-issued PDF certificate print layouts (simple and QR-verifiable) and a public certificate verification page.
- Admin dashboard: student overview, recent assessments, certificate register, lesson visibility controls and certificate revocation. This release does not yet include a full in-dashboard rich lesson-content editor or complete student account administration.
- Supabase SQL schema with Row Level Security policies and a trigger to create student profiles.

## Important deployment architecture

This is a full-stack Next.js application. **Do not deploy it as GitHub Pages.** GitHub is used to store the source code; Vercel runs the Next.js server and API routes; Supabase provides authentication and the database. OpenAI evaluation runs on the server using a secret API key.

## Quick start

1. Install Node.js 20.9 or newer.
2. Create a Supabase project.
3. In Supabase → SQL Editor, run the complete file `supabase/schema.sql`.
4. Copy `.env.example` to `.env.local` and set the Supabase URL, publishable key, service-role key, and OpenAI API key.
5. In a terminal, run:

   ```bash
   npm install
   npm run dev
   ```

6. Open `http://localhost:3000`.
7. Create your founder account using the sign-up form and confirm the email if email confirmation is enabled.
8. Promote your own profile to admin by running the SQL command in `SETUP.md`.

Start with `START-HERE-AR.md` for the concise Arabic deployment path. See `ARABIC-SETUP.md` for the full Arabic guide and `SETUP.md` for English setup notes.

## Assessment interpretation and certificate status

The 40-item placement assessment uses a provisional percentage-to-level mapping for A1–C1. It is an **indicative, academy-issued assessment**, not a psychometrically validated CEFR examination and not an IELTS / TOEFL equivalent. The QR page verifies that an academy record exists and whether the academy has revoked it; it does not create external accreditation.

The certificate is available in two print layouts. The verified layout includes a QR code pointing to `/verify/[code]`. In the browser print dialog, choose **Save as PDF**.

## Privacy and secrets

- Never commit `.env.local` or a real secret key.
- `SUPABASE_SERVICE_ROLE_KEY` and `OPENAI_API_KEY` must stay server-side and must never use a `NEXT_PUBLIC_` prefix.
- The API sends speaking recordings to OpenAI for transcription when the student submits the test. Raw recordings are not stored in Supabase by this application; the resulting transcript and feedback are stored with the assessment.
- Keep the Supabase RLS policies enabled. Do not expose service-role credentials to students or GitHub.

## Verification checklist before public launch

- Confirm the academy contact email spelling.
- Set a production Supabase Auth Site URL and redirect allow-list.
- Add Vercel environment variables in Production, Preview and Development as required.
- Promote the academy owner to `admin` with the SQL command in `SETUP.md`.
- Test sign-up, email confirmation, sign-in and sign-out.
- Test the test with microphone permission on HTTPS and check that the 6 speaking clips are short enough for upload.
- Check one certificate QR from a second device / private browser window.
- Review the lessons and assessment items with a qualified English teacher before using the results for high-stakes decisions.

## Commands

- `npm run check:content` — verify lesson catalogue, task distribution and private answer-key coverage
- `npm run typecheck` — TypeScript type check
- `npm run qa` — content check, lint and production build
- `npm run dev` — local development server
- `npm run build` — production build
- `npm run start` — run the built production server
