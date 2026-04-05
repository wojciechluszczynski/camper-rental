-- supabase/seed.sql
-- Rzeczywiste dane kamperów z kamperownia.eu
-- Uruchom w Supabase SQL Editor: https://supabase.com/dashboard → SQL Editor

truncate table bookings cascade;
truncate table campers cascade;

insert into campers (slug, name, description, price_per_day, images, specs) values

(
  'chausson-v594-max',
  'Chausson V594 Max',
  'Kompaktowy kamper idealny dla par lub rodziny z dzieckiem. Silnik Citroën 2.2L 140 KM, skrzynia manualna. Długość 5,99 m — łatwy w parkowaniu i manewrowaniu nawet w centrum miasta. Zabudowa alkowa z przestronnym łożem małżeńskim na poziomie podłogi. Pełna łazienka z prysznicem i toaletą, aneks kuchenny z 3-palnikową kuchenką gazową, lodówka kompresorowa. Klimatyzacja postojowa Webasto. Rocznik 2023.',
  360.00,
  ARRAY[
    'https://kamperownia.eu/images/objects/pictures/large/6/1/438.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/6/1/323.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/6/1/324.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/6/1/325.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/6/1/326.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/6/1/327.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/6/1/194.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/6/1/328.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/6/1/329.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/6/1/330.jpg'
  ],
  '{"seats": 4, "sleeping_spots": 4, "length_m": 5.99, "year": 2023, "transmission": "manualna", "kitchen": true, "bathroom": true}'
),

(
  'chausson-640',
  'Chausson 640',
  'Wszechstronny kamper z panelami solarnymi 400W — jedź off-grid tak długo, jak chcesz. Baza Ford Transit 2.0 170 KM z automatyczną skrzynią biegów. Długość 6,99 m. Dwa oddzielne łóżka pojedyncze lub opcja połączonego łoża. Ogrzewanie Truma, klimatyzacja dachowa, gniazdka 230V. Solarny off-grid: ładowanie bez podłączenia do prądu przez wiele dni.',
  390.00,
  ARRAY[
    'https://kamperownia.eu/images/objects/pictures/large/1/1/436.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/1/1/293.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/1/1/294.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/1/1/296.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/1/1/295.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/1/1/242.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/1/1/302.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/1/1/247.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/1/1/300.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/1/1/248.jpg'
  ],
  '{"seats": 4, "sleeping_spots": 4, "length_m": 6.99, "year": 2022, "transmission": "automatyczna", "kitchen": true, "bathroom": true}'
),

(
  'burstner-limited-t660',
  'Bürstner Limited T 660',
  'Luksusowy kamper klasy premium w edycji limitowanej. Silnik 2.2 BlueHDI 140 KM. Ogrzewanie Truma Combi 6 — ciepło i ciepła woda bez podłączenia do sieci. Długość 6,95 m. Salon z rozkładaną kanapą, panoramiczny szyberdach, premium tapicerka. Klimatyzacja dachowa Dometic. Idealny na dłuższe wyprawy w stylu slow travel po Europie.',
  390.00,
  ARRAY[
    'https://kamperownia.eu/images/objects/pictures/large/7/1/218.webp',
    'https://kamperownia.eu/images/objects/pictures/large/7/1/220.webp',
    'https://kamperownia.eu/images/objects/pictures/large/7/1/227.webp',
    'https://kamperownia.eu/images/objects/pictures/large/7/1/221.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/7/1/225.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/7/1/222.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/7/1/223.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/7/1/224.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/7/1/443.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/7/1/444.jpg'
  ],
  '{"seats": 4, "sleeping_spots": 4, "length_m": 6.95, "year": 2023, "transmission": "manualna", "kitchen": true, "bathroom": true}'
),

(
  'chausson-777ga-titanium',
  'Chausson 777GA Titanium',
  'Najnowszy model 2025 z flagowej serii Titanium. Baza Ford Transit 2.0 170 KM automat. Innowacyjny układ z ogromnymi oknami — maksimum światła i widoków. Długość 7,19 m. Oddzielna sypialnia z łożem małżeńskim, salon dzienny z panoramicznym przeszkleniem, lodówka 140L. Klimatyzacja Dometic, ogrzewanie Truma. Gwarancja producenta 2025.',
  390.00,
  ARRAY[
    'https://kamperownia.eu/images/objects/pictures/large/2/1/276.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/2/1/280.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/2/1/285.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/2/1/281.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/2/1/284.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/2/1/279.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/2/1/278.jpg'
  ],
  '{"seats": 4, "sleeping_spots": 4, "length_m": 7.19, "year": 2025, "transmission": "automatyczna", "kitchen": true, "bathroom": true}'
),

(
  'chausson-720-titanium',
  'Chausson 720 Titanium',
  'Przestronny kamper 5-osobowy z serii Titanium. Ford Transit 2.0 170 KM automat. Układ z łożem małżeńskim i dwoma miejscami na sofie lub łóżku piętrowym. Idealny dla rodziny z dziećmi lub trójki dorosłych. Długość 7,19 m. Pełna zabudowa kuchenna, łazienka z toaletą i prysznicem, ogrzewanie Truma Combi.',
  390.00,
  ARRAY[
    'https://kamperownia.eu/images/objects/pictures/large/4/1/457.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/4/1/458.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/4/1/459.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/4/1/460.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/4/1/461.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/4/1/462.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/4/1/441.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/4/1/465.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/4/1/466.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/4/1/467.jpg'
  ],
  '{"seats": 5, "sleeping_spots": 5, "length_m": 7.19, "year": 2024, "transmission": "automatyczna", "kitchen": true, "bathroom": true}'
),

(
  'rimor-kilig-5',
  'Rimor Kilig 5',
  'Włoska elegancja dla 6 osób. Rocznik 2025, Ford Transit 2.0 TDCi 165 KM, 8-biegowy automat. Panele solarne 400W — niezależność energetyczna. Długość 6,97 m. Łoże poprzeczne na górze, łoże małżeńskie z tyłu, rozkładana kanapa. Idealne dla dwóch rodzin lub dużej grupy. Klima dachowa, ogrzewanie Truma, panoramiczne okna.',
  390.00,
  ARRAY[
    'https://kamperownia.eu/images/objects/pictures/large/0/1/433.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/0/1/401.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/0/1/402.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/0/1/403.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/0/1/404.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/0/1/383.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/0/1/413.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/0/1/415.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/0/1/416.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/0/1/417.jpg'
  ],
  '{"seats": 6, "sleeping_spots": 6, "length_m": 6.97, "year": 2025, "transmission": "automatyczna", "kitchen": true, "bathroom": true}'
),

(
  'rimor-kilig-50',
  'Rimor Kilig 50',
  'Największy kamper we flocie — 7,29 m luksusu dla 6 osób. Rocznik 2025, Ford Transit 2.0 TDCi 165 KM, 8-biegowy automat. Panele solarne 400W. Trzy strefy snu, duży salon, kuchnia z piekarnikiem, łazienka premium. Prawdziwy dom na kółkach — idealny na długie wyprawy rodzinne.',
  420.00,
  ARRAY[
    'https://kamperownia.eu/images/objects/pictures/large/5/1/440.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/5/1/350.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/5/1/358.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/5/1/359.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/5/1/352.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/5/1/362.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/5/1/356.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/5/1/361.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/5/1/360.jpg',
    'https://kamperownia.eu/images/objects/pictures/large/5/1/353.jpg'
  ],
  '{"seats": 6, "sleeping_spots": 6, "length_m": 7.29, "year": 2025, "transmission": "automatyczna", "kitchen": true, "bathroom": true}'
);
