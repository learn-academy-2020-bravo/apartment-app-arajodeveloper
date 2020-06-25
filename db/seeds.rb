
apartments = [
  {
    address: "4738 Bancroft St #2",
    city: "San Diego",
    state: "CA",
    zip_code: "92116",
    country: "USA",
    name: "Ara Jo",
    phone_number: "913-245-2455",
    hours: "M-F: 9-5",
    image_path: "https://i.imgur.com/cJkHGBR.jpg"
    
  },
  {
    address: "555 W Date St",
    city: "San Diego",
    state: "CA",
    zip_code: "92101",
    country: "USA",
    name: "Ara Jo",
    phone_number: "913-245-2455",
    hours: "M-F: 9-5",
    image_path: "https://imgur.com/cJkHGBR"
  },
  {
    address: "1129 Torrey Pines Rd",
    city: "La Jolla",
    state: "CA",
    zip_code: "92037",
    country: "USA",
    name: "Ara Jo",
    phone_number: "913-245-2455",
    hours: "M-F: 9-5",
    image_path: "https://imgur.com/cJkHGBR"
  },
  {
    address: "1222 Locust Street",
    city: "San Diego",
    state: "CA",
    zip_code: "92106",
    country: "USA",
    name: "Ara Jo",
    phone_number: "913-245-2455",
    hours: "M-F: 9-5",
    image_path: "https://imgur.com/cJkHGBR"
  },
  {
    address: "9909 Scipps Westview Way #213",
    city: "San Diego",
    state: "CA",
    zip_code: "92131",
    country: "USA",
    name: "Ara Jo",
    phone_number: "913-245-2455",
    hours: "M-F: 9-5",
    image_path: "https://imgur.com/cJkHGBR"
  },
  {
    address: "1601 India Street",
    city: "San Diego",
    zip_code: "CA",
    state: "92101",
    country: "USA",
    name: "Ara Jo",
    phone_number: "913-245-2455",
    hours: "M-F: 9-5",
    image_path: "https://imgur.com/cJkHGBR"
  },
  {
    address: "4952 Niagara Ave",
    city: "San Diego",
    zip_code: "CA",
    state: "92107",
    country: "USA",
    name: "Ara Jo",
    phone_number: "913-245-2455",
    hours: "M-F: 9-5",
    image_path: "https://imgur.com/cJkHGBR"
  },
  {
    address: "1168 23rd St #A",
    city: "San Diego",
    zip_code: "CA",
    state: "92102",
    country: "USA",
    name: "Ara Jo",
    phone_number: "913-245-2455",
    hours: "M-F: 9-5",
    image_path: "https://imgur.com/cJkHGBR"
  },
  {
    address: "1619 Hornblend St",
    city: "San Diego",
    zip_code: "CA",
    state: "92109",
    country: "USA",
    name: "Ara Jo",
    phone_number: "913-245-2455",
    hours: "M-F: 9-5",
    image_path: "https://imgur.com/cJkHGBR"
  },
  {
    address: "1813 Madison Ave #31",
    city: "San Diego",
    zip_code: "CA",
    state: "92116",
    country: "USA",
    name: "Ara Jo",
    phone_number: "913-245-2455",
    hours: "M-F: 9-5",
    image_path: "https://imgur.com/cJkHGBR"
  }

]

apartments.each do |attributes|
  Apartment.create attributes
end