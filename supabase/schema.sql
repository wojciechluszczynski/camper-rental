-- supabase/schema.sql

create extension if not exists "uuid-ossp";

-- Campers table
create table campers (
  id            uuid primary key default uuid_generate_v4(),
  slug          text unique not null,
  name          text not null,
  description   text,
  price_per_day numeric(10,2) not null,
  images        text[] default '{}',
  specs         jsonb default '{}',
  active        boolean default true,
  created_at    timestamptz default now()
);

-- Bookings table
create table bookings (
  id                 uuid primary key default uuid_generate_v4(),
  camper_id          uuid references campers(id) not null,
  user_email         text not null,
  user_name          text not null,
  user_phone         text not null,
  date_from          date not null,
  date_to            date not null,
  total_price        numeric(10,2) not null,
  status             text not null default 'pending' check (status in ('pending', 'paid', 'cancelled')),
  stripe_payment_id  text,
  delivery_address   text,
  created_at         timestamptz default now()
);

-- Constraint: no overlapping paid bookings for same camper
create or replace function check_booking_overlap()
returns trigger as $$
begin
  if exists (
    select 1 from bookings
    where camper_id = new.camper_id
      and status = 'paid'
      and id != new.id
      and daterange(date_from, date_to, '[]') && daterange(new.date_from, new.date_to, '[]')
  ) then
    raise exception 'Dates already booked for this camper';
  end if;
  return new;
end;
$$ language plpgsql;

create trigger enforce_no_overlap
  before insert or update on bookings
  for each row execute function check_booking_overlap();

-- RLS policies
alter table campers enable row level security;
alter table bookings enable row level security;

-- Anyone can read active campers
create policy "public read campers" on campers
  for select using (active = true);

-- Anyone can create a booking
create policy "public create booking" on bookings
  for insert with check (true);

-- Users can read their own bookings
create policy "users read own bookings" on bookings
  for select using (user_email = auth.jwt() ->> 'email');
