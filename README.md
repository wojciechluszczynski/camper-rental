# Kamperownia

Online booking platform for a camper van rental company based in Rzeszów, Poland — full reservation flow with availability calendar, fleet catalogue and admin panel.

**Live:** [camper-rental-weld.vercel.app](https://camper-rental-weld.vercel.app)

---

## Features

- **Date-range search** — availability calendar powered by react-day-picker; filters results to bookable vehicles only
- **Fleet catalogue** — 7 camper models with category filters (weekend, family, solar, up to 6 people)
- **Fleet comparison** — side-by-side spec table across all models
- **Camper detail pages** — gallery, full specification, per-vehicle availability calendar and booking form
- **Booking flow** — reservation form → Stripe payment → confirmation page
- **Booking admin panel** — internal view of all reservations with status management
- **SEO landing pages** — location-specific pages for Rzeszów, Warsaw, weekend trips and European routes
- **Contact & FAQ** — OpenStreetMap embed, GDPR-compliant privacy policy and rental terms

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Database | Supabase (PostgreSQL) |
| Payments | Stripe (checkout + webhook) |
| Styling | CSS Modules + DM Sans / DM Serif Display |
| Booking calendar | react-day-picker v9 |
| Hosting | Vercel |

---

## Local development

```bash
git clone https://github.com/wojciechluszczynski/camper-rental.git
cd camper-rental
npm install
```

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
```

```bash
npm run dev
# → http://localhost:3000
```

---

## Database setup

Run in Supabase SQL Editor:

```bash
supabase/schema.sql   # table definitions
supabase/seed.sql     # 7 camper models with photos and specs
```
