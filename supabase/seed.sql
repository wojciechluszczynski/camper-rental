-- supabase/seed.sql
-- Rzeczywiste dane kamperów z kamperownia.eu
-- Uruchom w Supabase SQL Editor: https://supabase.com/dashboard → SQL Editor

truncate table bookings cascade;
truncate table campers cascade;

insert into campers (slug, name, description, price_per_day, images, specs) values

(
  'chausson-v594-max',
  'Chausson V594 Max',
  'Kompaktowy kamper idealny dla par lub rodziny z dzieckiem. Silnik Citroën Jumper 2.2L 140 KM EURO 6, skrzynia manualna. Długość 5,99 m — najłatwiejszy w parkowaniu i manewrowaniu, wjeżdża wszędzie. Zabudowa alkowa z przestronnym łożem małżeńskim na poziomie podłogi i dodatkowym łóżkiem. Pełna łazienka z prysznicem i toaletą kasetową, aneks kuchenny z kuchenką gazową, lodówka kompresorowa. Klimatyzacja kabiny, markiza THULE, elektryczny stopień wejściowy. Rocznik 2023.',
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
  '{"seats": 2, "sleeping_spots": 4, "length_m": 5.99, "year": 2023, "engine": "Citroën Jumper 2.2 140 KM EURO 6", "transmission": "manualna", "water_tank_l": 95, "grey_water_l": 90, "solar_w": 160, "kitchen": true, "bathroom": true}'
),

(
  'chausson-640',
  'Chausson 640',
  'Wszechstronny kamper z panelami solarnymi 400W — jedź off-grid tak długo, jak chcesz. Baza Ford Transit 2.0 170 KM EURO 6 z automatyczną 6-biegową skrzynią biegów. Długość 6,99 m. Dwa oddzielne łóżka pojedyncze lub opcja połączonego łoża małżeńskiego 160×190 cm. Zbiornik wody 105 L, ogrzewanie Truma z podgrzewaczem wody, klimatyzacja dachowa, gniazdka 230V, dwa akumulatory AGM. XL lounge z rozkładaną sofą, duża lodówka 167 L, przestronna łazienka z oddzielnym prysznicem. Rocznik 2025.',
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
  '{"seats": 4, "sleeping_spots": 4, "length_m": 6.99, "year": 2025, "engine": "Ford Transit 2.0 170 KM EURO 6", "transmission": "automatyczna", "water_tank_l": 105, "grey_water_l": 100, "solar_w": 400, "fridge_l": 167, "kitchen": true, "bathroom": true}'
),

(
  'burstner-limited-t660',
  'Bürstner Limited T 660',
  'Luksusowy kamper klasy premium w edycji limitowanej. Silnik 2.2 BlueHDI 140 KM EURO 6D, 6-biegowa skrzynia manualna. Ogrzewanie Truma Combi — ciepło i ciepła woda bez podłączenia do sieci. Długość 6,95 m. Elektryczne, chowane łóżko dwuosobowe, compressor fridge 142 L z zamrażarką, panoramiczny szyberdach. Markiza THULE Black z oświetleniem LED, system Pioneer z Android Auto i Apple CarPlay, kamera cofania, ISOFIX. Winter package: ogrzewane siedzenia i podłoga. Zbiornik wody 100 L. Idealny na dłuższe wyprawy slow travel po Europie.',
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
  '{"seats": 4, "sleeping_spots": 4, "length_m": 6.95, "year": 2023, "engine": "2.2 BlueHDI 140 KM EURO 6D", "transmission": "manualna", "water_tank_l": 100, "grey_water_l": 90, "fridge_l": 142, "kitchen": true, "bathroom": true}'
),

(
  'chausson-777ga-titanium',
  'Chausson 777GA Titanium',
  'Flagowy model 2025 z serii Titanium — innowacyjny układ z czterema oddzielnymi miejscami do spania i elektrycznym, chowanym łożem na górze. Baza Ford Transit 2.0 170 KM EURO 6, 6-biegowy automat. Długość 7,19 m. Dwa długie łóżka boczne 80×200 cm zamienialne w łoże małżeńskie plus elektryczne łoże zwisające 2-osobowe. Lodówka 134 L (AES: gaz/12V/230V), duże okna panoramiczne, łazienka z oddzielnym prysznicem, klimatyzacja, kolizyjny system ostrzegania pasów ruchu. Zbiornik wody 105 L. Gwarancja producenta 2025.',
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
  '{"seats": 4, "sleeping_spots": 4, "length_m": 7.19, "year": 2025, "engine": "Ford Transit 2.0 170 KM EURO 6", "transmission": "automatyczna", "water_tank_l": 105, "grey_water_l": 100, "fridge_l": 134, "kitchen": true, "bathroom": true}'
),

(
  'chausson-720-titanium',
  'Chausson 720 Titanium',
  'Przestronny 5-osobowy kamper z serii Titanium — maxi face-to-face lounge z obracającymi się fotelami kapitańskimi. Ford Transit 2.0 170 KM EURO 6, 6-biegowy automat. Długość 7,19 m. Elektryczne chowane łoże małżeńskie 160×190 cm, dodatkowe elektryczne łóżko 1-osobowe, antresola 74×190 cm, łóżko dolne 81×200 cm. Lodówka 134 L (AES), panoramiczny szyberdach, 9" multimedia z nawigacją i Apple CarPlay, Start&Stop, climatronic. Idealny dla rodziny z dziećmi lub trójki dorosłych.',
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
  '{"seats": 5, "sleeping_spots": 5, "length_m": 7.19, "year": 2025, "engine": "Ford Transit 2.0 170 KM EURO 6", "transmission": "automatyczna", "fridge_l": 134, "kitchen": true, "bathroom": true}'
),

(
  'rimor-kilig-5',
  'Rimor Kilig 5',
  'Włoska elegancja dla 6 osób. Rocznik 2025, Ford Transit 2.0 TDCi 165 KM, 8-biegowy automat. Panele solarne 400W, akumulator 120 Ah, falownik 2000W — pełna niezależność energetyczna. Długość 6,97 m. Łoże poprzeczne alkowy 140×220 cm, łoże małżeńskie tylne 130×220 cm, rozkładana kanapa 129×189 cm. Ogrzewanie Truma Combi 4, lodówka 141 L, Smart TV, kamera cofania, markiza Fiamma, klimatyzacja dachowa, DAB Bluetooth radio Ford Sync 4 z 12" ekranem dotykowym, Apple CarPlay i Android Auto. Zbiorniki wody 85 L, szarej wody 120 L.',
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
  '{"seats": 6, "sleeping_spots": 6, "length_m": 6.97, "year": 2025, "engine": "Ford Transit 2.0 TDCi 165 KM", "transmission": "automatyczna", "water_tank_l": 85, "grey_water_l": 120, "fuel_tank_l": 70, "solar_w": 400, "battery_ah": 120, "inverter_w": 2000, "fridge_l": 141, "kitchen": true, "bathroom": true}'
),

(
  'rimor-kilig-50',
  'Rimor Kilig 50',
  'Największy kamper we flocie — 7,29 m luksusu dla 6 osób. Rocznik 2025, Ford Transit 2.0 TDCi 165 KM, 8-biegowy automat. Panele solarne 400W, falownik 2000W — prawdziwa niezależność off-grid. Trzy strefy snu: łoże małżeńskie, 4 miejsca w kojach piętrowych 78×200 cm. Ogrzewanie Truma Combi 4, lodówka 141 L, Smart TV, kamera cofania, markiza Fiamma, moskitiery. Zbiorniki wody 85 L, szarej wody 120 L, butla gazowa 2×11-13 kg. Dom na kółkach — idealny na długie wyprawy rodzinne.',
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
  '{"seats": 6, "sleeping_spots": 6, "length_m": 7.29, "year": 2025, "engine": "Ford Transit 2.0 TDCi 165 KM", "transmission": "automatyczna", "water_tank_l": 85, "grey_water_l": 120, "fuel_tank_l": 70, "solar_w": 400, "inverter_w": 2000, "fridge_l": 141, "kitchen": true, "bathroom": true}'
);
