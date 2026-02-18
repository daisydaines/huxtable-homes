# Huxtable Homes

Website for Huxtable Homes — luxury new construction and interior design based in Holladay, Utah.

## Stack

- **Next.js** (App Router)
- **Tailwind CSS v4**
- **Prisma** + Vercel Postgres (contact form submissions)
- **Resend** (contact form email notifications)
- **Framer Motion** (animations)

## Getting Started

Copy the example env file and fill in credentials:

```bash
cp .env.example .env
```

Required environment variables:

| Variable | Source |
|---|---|
| `POSTGRES_PRISMA_URL` | Vercel Postgres dashboard |
| `POSTGRES_URL_NON_POOLED` | Vercel Postgres dashboard |
| `RESEND_API_KEY` | resend.com/api-keys |
| `CONTACT_EMAIL` | Inbox for form notifications |

Push the database schema:

```bash
npm run db:push
```

Run the dev server:

```bash
npm run dev
```

## Brand

Source files (logos, templates) are in `/brand`.
