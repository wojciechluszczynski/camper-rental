# Kamperownia — wynajem kamperów z Rzeszowa

Aplikacja webowa do wynajmu kamperów z możliwością rezerwacji i płatności online.

**🌐 [kamperownia.eu](https://kamperownia.eu)**

---

## Stack technologiczny

| Warstwa | Technologia |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Baza danych | Supabase (PostgreSQL) |
| Płatności | Stripe — BLIK, Visa, Mastercard, Apple Pay, Google Pay, P24 |
| Stylowanie | CSS Modules (bez Tailwind) |
| Fonty | DM Sans + DM Serif Display (Google Fonts) |
| Kalendarz | react-day-picker v9 |
| Hosting | Vercel |

---

## Funkcje

- 🔍 **Wyszukiwanie po datach** — picker kalendarza z zakresem dat
- 🚐 **Siatka kamperów** — 7 modeli z filtrami kategorii (na weekend, dla rodziny, z solarami…)
- 📅 **Rezerwacja online** — wybór terminów, formularz, przekierowanie do płatności
- 💳 **Stripe Checkout** — BLIK, karty, Apple Pay, Google Pay, P24
- 🚚 **Dostawa kampera** — opcjonalne zamówienie dowozu pod wskazany adres
- 🗺️ **SEO subpages** — Rzeszów, Polska, Weekend, Europa
- 📧 **Newsletter** — formularz zapisu w stopce

---

## Instalacja lokalna

```bash
git clone https://github.com/wojciechluszczynski/camper-rental.git
cd camper-rental
npm install
```

Stwórz plik `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
STRIPE_SECRET_KEY=sk_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

```bash
npm run dev
```

Aplikacja dostępna pod: `http://localhost:3000`

---

## Baza danych

### Schema

```bash
# W Supabase SQL Editor wklej i uruchom:
supabase/schema.sql
```

### Dane początkowe (7 kamperów)

```bash
# Po uruchomieniu schema — wklej i uruchom:
supabase/seed.sql
```

Seed zawiera 7 modeli kamperów z prawdziwymi zdjęciami i opisami:
- Chausson V594 Max (2023)
- Chausson 640 (z solarami 400W)
- Bürstner Limited T 660
- Chausson 777GA Titanium (2025)
- Chausson 720 Titanium (5 osób)
- Rimor Kilig 5 (2025, 6 osób)
- Rimor Kilig 50 (2025, 6 osób)

---

## Deployment na Vercel

1. Połącz repo na [vercel.com](https://vercel.com/new)
2. Dodaj zmienne środowiskowe (Settings → Environment Variables)
3. Deploy — Vercel wykrywa Next.js automatycznie

### Stripe Webhook

Po deploymencie dodaj endpoint w [Stripe Dashboard](https://dashboard.stripe.com/webhooks):

```
https://twoja-domena.vercel.app/api/stripe/webhook
```

Event: `payment_intent.succeeded`

---

## Struktura projektu

```
src/
├── app/
│   ├── page.tsx                    # Strona główna
│   ├── kamper/[slug]/              # Strona kampera
│   ├── rezerwacja/[id]/            # Płatność Stripe
│   ├── potwierdzenie/              # Potwierdzenie rezerwacji
│   ├── admin/                      # Panel rezerwacji
│   ├── api/
│   │   ├── bookings/create/        # Tworzenie rezerwacji
│   │   └── stripe/webhook/         # Stripe webhook
│   └── wynajem-kampera-*/          # Podstrony SEO
├── components/
│   ├── home/                       # SearchBar, CamperCard, FleetPreview, CamperFilters
│   ├── camper/                     # Gallery, Specs, BookingForm
│   ├── layout/                     # Header, Footer
│   └── icons/                      # SVG ikony
├── lib/
│   ├── supabase.ts / supabase-server.ts
│   ├── stripe.ts
│   └── types.ts
supabase/
├── schema.sql                      # Definicja tabel
└── seed.sql                        # Dane startowe
```

---

## Kontakt

**Kamperownia** — wynajem kamperów, Rzeszów
📧 kontakt@kamperownia.eu
📞 +48 500 818 172
📍 Lubelska 50, 35-233 Rzeszów
