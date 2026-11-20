# Architecture — Hussien Badr English

## Runtime
- Next.js App Router + React + TypeScript.
- `proxy.ts` refreshes Supabase sessions for requests.
- Server Components read authenticated records through the Supabase SSR client.
- API routes enforce user/admin authorization before using privileged server-side Supabase operations.
- The placement-test answer key is isolated in `content/private-answer-key.ts` and marked `server-only`.

## Data services
- Supabase Auth: student registration, sign-in and email confirmation.
- Supabase Postgres: profiles, assessment attempts, certificates, lesson progress and lesson visibility overrides.
- OpenAI API: speaking audio transcription and AI-assisted assessment of written answers and speaking transcripts.
- Vercel: Next.js server, API routes and production deployment.
- GitHub: source control and CI checks.

## Main application areas
- `app/`: route pages, assessment endpoints, admin endpoints and SEO routes.
- `components/`: reusable UI and interaction components.
- `content/`: course catalogue, placement questions and private answer key.
- `lib/`: configuration, CEFR mapping, Supabase clients and authorization helpers.
- `supabase/schema.sql`: initial database schema and Row Level Security policies.
- `public/assets/`: HB identity, owner portrait and brand exports.

## Extend safely
1. Add database migrations under `supabase/migrations/` for future schema changes; do not silently edit an already-applied production schema.
2. Validate every write in a server route and call `requireAdmin()` for administrator operations.
3. Keep service-role and AI secrets server-only.
4. Add tests and update `scripts/check-content.mjs` when the lesson or assessment format changes.
5. Run `npm run qa` before merging to `main`.

## Current product limits
- 40 lessons are detailed authored content; 110 are topic-based instructional drafts requiring editorial development.
- Listening test playback uses browser speech synthesis.
- Speaking is transcribed and the transcript is rated; there is no independent acoustic pronunciation score.
- The admin UI supports overview, lesson visibility and certificate revocation, but not a complete content editor or full account lifecycle management.
- The CEFR level mapping is provisional and not psychometrically calibrated.
