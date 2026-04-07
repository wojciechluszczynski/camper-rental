# Kamperownia - wynajem kamperów z Rzeszowa

Aplikacja webowa do wynajmu kamperów z możliwością rezerwacji online.

**Wersja demo:** [camper-rental-weld.vercel.app](https://camper-rental-weld.vercel.app)

---

## Stack technologiczny

| Warstwa | Technologia |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Baza danych | Supabase (PostgreSQL) |
| Stylowanie | CSS Modules (bez Tailwind) |
| Fonty | DM Sans + DM Serif Display (Google Fonts) |
| Kalendarz | react-day-picker v9 |
| Hosting | Vercel |

---

## Funkcje

- Wyszukiwanie po datach z kalendarzem zakresowym
- Flota 7 kamperów z filtrami kategorii (na weekend, dla rodziny, z solarami itd.)
- Strona /flota z kartami i tabelą porownawczą specyfikacji
- Strona /szukaj z wynikami dostępności po wybraniu dat
- Rezerwacja online - formularz, potwierdzenie
- Strona kampera z galerią, specyfikacją i kalendarzem dostępności
- Podstrony SEO - Rzeszów, Polska, Weekend, Europa, Warszawa
- Strona kontakt z mapą OpenStreetMap i FAQ
- Regulamin i polityka prywatności
- Panel administracyjny rezerwacji

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
# Stripe - opcjonalny (bez niego platnosci sa pomijane)
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

### Dane poczatkowe (7 kamperów)

```bash
# Po uruchomieniu schema - wklej i uruchom:
supabase/seed.sql
```

Seed zawiera 7 modeli kamperów z prawdziwymi zdjeciami i opisami:
- Chausson V594 Max (2023)
- Chausson 640 (z solarami 400W)
- Burstner Limited T 660
- Chausson 777GA Titanium (2025)
- Chausson 720 Titanium (5 osób)
- Rimor Kilig 5 (2025, 6 osób)
- Rimor Kilig 50 (2025, 6 osób)

---

## Deployment na Vercel

1. Polacz repo na [vercel.com](https://vercel.com/new)
2. Dodaj zmienne srodowiskowe (Settings - Environment Variables)
3. Deploy - Vercel wykrywa Next.js automatycznie

---

## Struktura projektu

```
src/
+-- app/
|   +-- page.tsx                    # Strona glowna
|   +-- flota/                      # Nasza flota - karty + tabela porownawcza
|   +-- szukaj/                     # Wyniki wyszukiwania po datach
|   +-- kamper/[slug]/              # Strona kampera z formularzem rezerwacji
|   +-- kontakt/                    # Kontakt z mapa OSM
|   +-- regulamin/                  # Regulamin wynajmu
|   +-- polityka-prywatnosci/       # Polityka prywatnosci
|   +-- potwierdzenie/              # Potwierdzenie rezerwacji
|   +-- admin/                      # Panel rezerwacji
|   +-- api/
|   |   +-- bookings/create/        # Tworzenie rezerwacji
|   |   +-- stripe/webhook/         # Stripe webhook
|   +-- wynajem-kampera-*/          # Podstrony SEO (5 lokalizacji)
+-- components/
|   +-- home/                       # SearchBar, CamperCard, FleetPreview, CamperFilters
|   +-- camper/                     # Gallery, Specs, BookingForm
|   +-- layout/                     # Header, Footer
|   +-- icons/                      # SVG ikony inline
+-- lib/
    +-- supabase.ts / supabase-server.ts
    +-- stripe.ts
    +-- types.ts
supabase/
+-- schema.sql                      # Definicja tabel
+-- seed.sql                        # Dane startowe
```

---

## Dane kontaktowe

Te dane są do uzgodnienia z klientem przed publikacją na docelowej domenie.
