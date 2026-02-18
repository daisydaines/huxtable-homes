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

---

# Client Meeting — Items to Collect

**Business Info**
- [x] Confirm or correct address (currently `4443 S Wander Ln, Holladay, UT 84124`)
- [x] Confirm or correct phone (currently `801 231 4390`)
- [ ] Confirm or correct email (currently `hello@huxtablehomes.com`)
- [x] Confirm founded year (currently `1995`)

**Team**
- [ ] Real names and titles for each team member
- [ ] Headshots for each team member

**Portfolio**
- [ ] Real photos for all 6 projects (currently all Unsplash stock)
- [ ] Confirm or correct project details (names, locations, sq ft, year, descriptions)
- [ ] Any projects to add or remove

**Domain & Email**
- [ ] Client's domain name (needed to verify with Resend for real from-address)
- [ ] Confirm contact notification email (where form submissions should go)

**Credentials & Deployment**
- [ ] Resend API key
- [ ] Vercel Postgres credentials
- [ ] Confirm Vercel account situation (theirs or yours?)


 **Brand Colors**
- HEX: 5e6475
R: 94 G: 100 B: 117
C: 67 M: 56 Y: 40 K: 15

HEX: bdb2a4
R: 189 G: 178 B: 164
C: 27 M: 26 Y: 33 K: 0

HEX: b68c42
R: 182 G: 140 B: 66
C: 27 M: 43 Y: 86 K: 5
