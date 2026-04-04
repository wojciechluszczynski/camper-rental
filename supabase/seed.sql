-- supabase/seed.sql

insert into campers (slug, name, description, price_per_day, specs) values
(
  'nomad-family',
  'Nomad Family',
  'Przestronny kamper rodzinny z 4 miejscami do spania. Idealny na rodzinne wakacje.',
  450.00,
  '{"seats": 4, "sleeping_spots": 4, "length_m": 6.5, "year": 2021, "transmission": "automatyczna", "kitchen": true, "bathroom": true}'
),
(
  'adventure-duo',
  'Adventure Duo',
  'Kompaktowy kamper dla par. Łatwy w prowadzeniu, idealny na górskie drogi.',
  350.00,
  '{"seats": 2, "sleeping_spots": 2, "length_m": 5.2, "year": 2022, "transmission": "manualna", "kitchen": true, "bathroom": false}'
),
(
  'explorer-xl',
  'Explorer XL',
  'Największy kamper w naszej flocie. Luksus i przestrzeń dla całej rodziny.',
  650.00,
  '{"seats": 6, "sleeping_spots": 6, "length_m": 8.0, "year": 2023, "transmission": "automatyczna", "kitchen": true, "bathroom": true}'
);
