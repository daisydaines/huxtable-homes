# Contact Form Setup — Remaining Steps

- [ ] Create `.env` file with real credentials (copy from `.env.example`)
  - `POSTGRES_PRISMA_URL` — from Vercel Postgres dashboard
  - `POSTGRES_URL_NON_POOLED` — from Vercel Postgres dashboard
  - `RESEND_API_KEY` — from https://resend.com/api-keys
  - `CONTACT_EMAIL` — inbox for form notifications
- [ ] Run `npm run db:push` to create the `contact_submissions` table
- [ ] Run `npm run db:studio` to verify the table exists
- [ ] Start dev server (`npm run dev`), submit the contact form
- [ ] Check Prisma Studio for the new row
- [ ] Check inbox for the notification email
- [ ] For production: verify a domain in Resend and update the `from` address in `src/lib/email.ts`
