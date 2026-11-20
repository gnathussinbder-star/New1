# Setup and deployment guide

This file explains the one-time services setup. The source package is complete, but account sign-in, saving student records and AI scoring stay inactive until the external service credentials are configured.

## 1. Create Supabase project and database

1. Open https://supabase.com and create a project.
2. Open **SQL Editor → New query**.
3. Paste and run all of `supabase/schema.sql`.
4. Open **Project Settings → API** (or the Connect dialog) and copy:
   - Project URL
   - Publishable key
   - Secret / service-role key. This one is server-only.

The SQL creates `profiles`, `test_attempts`, `certificates`, `lesson_progress` and `lesson_overrides`, adds Row Level Security policies, automatically creates a student profile after sign-up, and creates the public certificate verification function.

## 2. Environment variables

Copy `.env.example` to `.env.local` for local development. Fill in:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
SUPABASE_SERVICE_ROLE_KEY=YOUR_SECRET_SERVICE_ROLE_KEY
OPENAI_API_KEY=sk-...
OPENAI_EVALUATION_MODEL=gpt-4.1-mini
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Never add the service-role key or OpenAI key to browser code, GitHub commits, or a `NEXT_PUBLIC_` variable. For public production deploys, set the same values in Vercel → Project → Settings → Environment Variables.

The default evaluation model can be changed through `OPENAI_EVALUATION_MODEL` if your API account uses a different model. The speaking transcription model is `gpt-transcribe`.

## 3. Supabase email confirmation and redirects

In Supabase → Authentication → URL Configuration:

- Set **Site URL** to your deployed Vercel URL, for example `https://your-app.vercel.app`.
- Add redirect URLs for local and production:
  - `http://localhost:3000/auth/callback`
  - `https://your-app.vercel.app/auth/callback`
- Configure the email confirmation template / SMTP settings for your needs.

A new student signs up with a name, email and password. Supabase sends confirmation if confirmation is enabled. After confirmation the callback returns the student to `/dashboard`.

## 4. Promote the owner account to admin

1. Sign up through your running site using the academy owner's email.
2. Confirm the email and sign in at least once.
3. In Supabase SQL Editor, run this command, replacing the email with the exact confirmed account email:

```sql
update public.profiles
set role = 'admin'
where lower(email) = lower('YOUR_CONFIRMED_ACCOUNT_EMAIL');
```

4. Sign out and back in, then open `/admin`.

The database trigger blocks normal users from changing their own role. The admin dashboard checks the role stored in `profiles` and its mutation APIs repeat that check on the server.

## 5. Run locally

Install Node.js 20.9 or newer, then:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. To check a production build:

```bash
npm run build
npm run start
```

Microphone access is normally available on `localhost` and secure HTTPS origins. A deployed site should use HTTPS for the speaking recorder.

## 6. Upload to GitHub and deploy on Vercel

1. Create a new GitHub repository named `hussien-badr-english`.
2. Upload **the contents of this project folder**, not only the ZIP file. `package.json`, `app/`, `components/`, `content/`, `lib/`, `public/` and `supabase/` must sit at the repository root.
3. Commit the files to the `main` branch.
4. Open https://vercel.com, import the GitHub repository and select the Next.js framework preset.
5. Add the environment variables listed in section 2 to the Vercel project. Do not put these secrets in GitHub.
6. Deploy. Every new commit to the production branch triggers a new deployment.
7. Copy the Vercel deployment URL and add it to Supabase Auth URL Configuration as described above; set `NEXT_PUBLIC_SITE_URL` to the same URL and redeploy.

A custom domain is not required. Vercel supplies a project URL that can be used until you purchase a domain.

## 7. What the assessment measures

The 40 tasks are divided as follows:

| Skill | Items |
|---|---:|
| Grammar | 8 |
| Vocabulary | 6 |
| Reading | 7 |
| Listening | 7 |
| Writing | 6 |
| Speaking | 6 |
| **Total** | **40** |

The 28 selected-response items are auto-marked. The six written responses and six speaking tasks are scored by the AI evaluation service on a 0–5 task scale. Speaking audio is first transcribed using `gpt-transcribe`, then the transcript is evaluated. The current pipeline does **not** measure acoustic pronunciation, accent, intonation or phoneme-level accuracy, so the speaking score must not be described as a pronunciation score.

The total is converted to a percentage and assigned a provisional indicative band: below 30% A1, 30–44% A2, 45–59% B1, 60–74% B2, 75%+ C1. This is a placement aid, not an official CEFR certification. The cutoffs and task bank should be piloted, reviewed by language-assessment specialists and calibrated against real learner data before any high-stakes use.

## 8. Certificates

After a successful test submission, the server writes an attempt and an academy certificate record. The verified print layout contains a unique `HB-...` code and QR that opens `/verify/[code]`. The public verification function reveals only certificate-holder name, level, score, issue date, code and active/revoked status.

The certificate is issued by Hussien Badr English Academy. It does not represent accreditation by Cambridge, IELTS, TOEFL, the Council of Europe or another external examination body.

## 9. Important usage and privacy notes

- The browser sends the six speaking recordings to the app's server only when the student submits the assessment. The server forwards them to OpenAI for transcription. Audio files are not saved in the Supabase database; transcripts, score and feedback are saved in the attempt record.
- Keep speaking clips brief. The route limits recordings to 45 seconds each, about 1.2 MB per clip, and 3.5 MB combined. This keeps submissions below Vercel Functions’ 4.5 MB request-body limit.
- AI scoring is an aid and can make mistakes. Provide an appeal / teacher-review process before using the score for formal placement decisions.
- The email currently displayed in the site footer is the exact address supplied during the project discussion. Verify its spelling before launch.
