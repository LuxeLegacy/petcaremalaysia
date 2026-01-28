// Malaysia postcode to city/state lookup

interface LocationData {
  city: string;
  state: string;
}

// Malaysian postcode ranges mapped to states and major cities
const postcodeRanges: { min: number; max: number; state: string; cities: { [key: string]: string } }[] = [
  {
    min: 1000,
    max: 2800,
    state: 'Perlis',
    cities: {
      '01000': 'Kangar',
      '02000': 'Kuala Perlis',
      '02600': 'Arau',
    },
  },
  {
    min: 5000,
    max: 9810,
    state: 'Kedah',
    cities: {
      '05000': 'Alor Setar',
      '06000': 'Jitra',
      '07000': 'Langkawi',
      '08000': 'Sungai Petani',
      '09000': 'Kulim',
    },
  },
  {
    min: 10000,
    max: 14400,
    state: 'Penang',
    cities: {
      '10000': 'George Town',
      '11000': 'Balik Pulau',
      '13000': 'Butterworth',
      '14000': 'Bukit Mertajam',
    },
  },
  {
    min: 15000,
    max: 18500,
    state: 'Kelantan',
    cities: {
      '15000': 'Kota Bharu',
      '16000': 'Bachok',
      '17000': 'Pasir Mas',
      '18000': 'Kuala Krai',
    },
  },
  {
    min: 20000,
    max: 24300,
    state: 'Terengganu',
    cities: {
      '20000': 'Kuala Terengganu',
      '21000': 'Kuala Nerus',
      '22000': 'Jerteh',
      '23000': 'Dungun',
      '24000': 'Kemaman',
    },
  },
  {
    min: 25000,
    max: 28800,
    state: 'Pahang',
    cities: {
      '25000': 'Kuantan',
      '26000': 'Pekan',
      '27000': 'Jerantut',
      '28000': 'Temerloh',
    },
  },
  {
    min: 30000,
    max: 36810,
    state: 'Perak',
    cities: {
      '30000': 'Ipoh',
      '31000': 'Batu Gajah',
      '32000': 'Sitiawan',
      '33000': 'Kuala Kangsar',
      '34000': 'Taiping',
      '35000': 'Tapah',
      '36000': 'Teluk Intan',
    },
  },
  {
    min: 39000,
    max: 39200,
    state: 'Pahang',
    cities: {
      '39000': 'Tanah Rata',
      '39100': 'Cameron Highlands',
    },
  },
  {
    min: 40000,
    max: 48300,
    state: 'Selangor',
    cities: {
      '40000': 'Shah Alam',
      '41000': 'Klang',
      '42000': 'Port Klang',
      '43000': 'Kajang',
      '44000': 'Kuala Kubu Bharu',
      '45000': 'Kuala Selangor',
      '46000': 'Petaling Jaya',
      '47000': 'Sungai Buloh',
      '48000': 'Rawang',
    },
  },
  {
    min: 50000,
    max: 60000,
    state: 'Kuala Lumpur',
    cities: {
      '50000': 'Kuala Lumpur',
      '51000': 'Kuala Lumpur',
      '52000': 'Kuala Lumpur',
      '53000': 'Kuala Lumpur',
      '54000': 'Kuala Lumpur',
      '55000': 'Kuala Lumpur',
      '56000': 'Cheras',
      '57000': 'Kuala Lumpur',
      '58000': 'Kuala Lumpur',
      '59000': 'Kuala Lumpur',
    },
  },
  {
    min: 62000,
    max: 62988,
    state: 'Putrajaya',
    cities: {
      '62000': 'Putrajaya',
    },
  },
  {
    min: 63000,
    max: 68100,
    state: 'Selangor',
    cities: {
      '63000': 'Cyberjaya',
      '68000': 'Ampang',
    },
  },
  {
    min: 70000,
    max: 73509,
    state: 'Negeri Sembilan',
    cities: {
      '70000': 'Seremban',
      '71000': 'Port Dickson',
      '72000': 'Kuala Pilah',
      '73000': 'Tampin',
    },
  },
  {
    min: 75000,
    max: 78309,
    state: 'Melaka',
    cities: {
      '75000': 'Melaka',
      '76000': 'Durian Tunggal',
      '77000': 'Jasin',
      '78000': 'Alor Gajah',
    },
  },
  {
    min: 79000,
    max: 86900,
    state: 'Johor',
    cities: {
      '79000': 'Iskandar Puteri',
      '80000': 'Johor Bahru',
      '81000': 'Kulai',
      '82000': 'Pontian',
      '83000': 'Batu Pahat',
      '84000': 'Muar',
      '85000': 'Segamat',
      '86000': 'Kluang',
    },
  },
  {
    min: 87000,
    max: 87033,
    state: 'Labuan',
    cities: {
      '87000': 'Labuan',
    },
  },
  {
    min: 88000,
    max: 91309,
    state: 'Sabah',
    cities: {
      '88000': 'Kota Kinabalu',
      '89000': 'Keningau',
      '90000': 'Sandakan',
      '91000': 'Tawau',
    },
  },
  {
    min: 93000,
    max: 98859,
    state: 'Sarawak',
    cities: {
      '93000': 'Kuching',
      '94000': 'Bau',
      '95000': 'Sri Aman',
      '96000': 'Sibu',
      '97000': 'Bintulu',
      '98000': 'Miri',
    },
  },
];

export function lookupPostcode(postcode: string): LocationData | null {
  const code = parseInt(postcode.replace(/\D/g, ''), 10);
  
  if (isNaN(code)) {
    return null;
  }

  for (const range of postcodeRanges) {
    if (code >= range.min && code <= range.max) {
      // Try to find exact city match
      const exactCity = range.cities[postcode.padStart(5, '0')];
      
      // Find closest city
      let closestCity = Object.values(range.cities)[0];
      let minDiff = Infinity;
      
      for (const [cityCode, cityName] of Object.entries(range.cities)) {
        const diff = Math.abs(code - parseInt(cityCode, 10));
        if (diff < minDiff) {
          minDiff = diff;
          closestCity = cityName;
        }
      }

      return {
        city: exactCity || closestCity,
        state: range.state,
      };
    }
  }

  return null;
}

// Validate Malaysian postcode format
export function isValidPostcode(postcode: string): boolean {
  const cleaned = postcode.replace(/\D/g, '');
  return cleaned.length === 5 && /^\d{5}$/.test(cleaned);
}

// Malaysian states list with proper ordering
const MALAYSIAN_STATES = [
  'W.P. Kuala Lumpur',
  'Selangor',
  'Johor',
  'Penang',
  'Perak',
  'Sarawak',
  'Sabah',
  'Melaka',
  'N. Sembilan',
  'Kedah',
  'Kelantan',
  'Terengganu',
  'Pahang',
  'Perlis',
  'Labuan',
];

// Cities data parsed from cities.csv
const CITIES_BY_STATE: Record<string, string[]> = {
  'W.P. Kuala Lumpur': ['Kuala Lumpur', 'Bangsar', 'Cheras', 'Kepong', 'Setapak', 'Mont Kiara', 'Brickfields', 'KLCC', 'Wangsa Maju', 'Taman Melawati'],
  'Selangor': ['Petaling Jaya', 'Bandar Utama', 'Kota Damansara', 'Ara Damansara', 'SS2', 'Kelana Jaya', 'Tropicana', 'Taman Megah', 'Shah Alam', 'Setia Alam', 'Bukit Jelutong', 'Seksyen 7', 'Seksyen 13', 'Subang Jaya', 'USJ', 'Taipan', 'Putra Heights', 'Klang', 'Bandar Bukit Tinggi', 'Kota Kemuning', 'Meru', 'Port Klang'],
  'Johor': ['Johor Bahru', 'Tampoi', 'Skudai', 'Permas Jaya', 'Taman Molek', 'Iskandar Puteri', 'Gelang Patah', 'Nusajaya', 'Bukit Indah', 'Batu Pahat', 'Yong Peng', 'Parit Raja', 'Muar', 'Tangkak', 'Kulai', 'Senai'],
  'Penang': ['George Town', 'Tanjung Tokong', 'Tanjung Bungah', 'Gelugor', 'Bayan Lepas', 'Air Itam', 'Butterworth', 'Bukit Mertajam', 'Perai', 'Kepala Batas', 'Nibong Tebal'],
  'Perak': ['Ipoh', 'Menglembu', 'Tambun', 'Bercham', 'Simpang Pulai', 'Taiping', 'Kamunting'],
  'Sarawak': ['Kuching', 'Petra Jaya', 'Kota Samarahan', 'Pending', 'Batu Kawa', 'Sibu', 'Mukah', 'Miri'],
  'Sabah': ['Kota Kinabalu', 'Penampang', 'Likas', 'Inanam', 'Tuaran', 'Sandakan', 'Batu Sapi'],
  'Melaka': ['Melaka', 'Ayer Keroh', 'Batu Berendam', 'Bukit Baru', 'Alor Gajah'],
  'N. Sembilan': ['Seremban', 'Nilai', 'Port Dickson', 'Mantin'],
  'Kedah': ['Sungai Petani', 'Kuala Ketil', 'Alor Setar', 'Jitra'],
  'Kelantan': ['Kota Bharu'],
  'Terengganu': ['Kuala Terengganu'],
  'Pahang': ['Kuantan', 'Indera Mahkota', 'Gambang', 'Beserah'],
  'Perlis': ['Kangar', 'Arau'],
  'Labuan': ['Labuan'],
};

// Get list of Malaysian states
export function getStates(): string[] {
  return MALAYSIAN_STATES;
}

// Get cities by state
export function getCitiesByState(state: string): string[] {
  return CITIES_BY_STATE[state] || [];
}
