export interface CityData {
  name: string;
  hub: string;
  state: string;
  languages: string[];
  slug: string;
  stateSlug: string;
}

export interface HubData {
  name: string;
  state: string;
  cities: CityData[];
  slug: string;
  stateSlug: string;
}

// Parse the CSV data
export const citiesData: CityData[] = [
  // Kuala Lumpur Hub
  { name: "Kuala Lumpur", hub: "Kuala Lumpur Hub", state: "W.P. Kuala Lumpur", languages: ["EN", "BM", "CN"], slug: "kuala-lumpur", stateSlug: "kuala-lumpur" },
  { name: "Bangsar", hub: "Kuala Lumpur Hub", state: "W.P. Kuala Lumpur", languages: ["EN", "BM", "CN"], slug: "bangsar", stateSlug: "kuala-lumpur" },
  { name: "Cheras", hub: "Kuala Lumpur Hub", state: "W.P. Kuala Lumpur", languages: ["BM", "CN", "EN"], slug: "cheras", stateSlug: "kuala-lumpur" },
  { name: "Kepong", hub: "Kuala Lumpur Hub", state: "W.P. Kuala Lumpur", languages: ["CN", "BM", "EN"], slug: "kepong", stateSlug: "kuala-lumpur" },
  { name: "Setapak", hub: "Kuala Lumpur Hub", state: "W.P. Kuala Lumpur", languages: ["BM", "EN"], slug: "setapak", stateSlug: "kuala-lumpur" },
  { name: "Mont Kiara", hub: "Kuala Lumpur Hub", state: "W.P. Kuala Lumpur", languages: ["EN"], slug: "mont-kiara", stateSlug: "kuala-lumpur" },
  { name: "Brickfields", hub: "Kuala Lumpur Hub", state: "W.P. Kuala Lumpur", languages: ["EN", "BM"], slug: "brickfields", stateSlug: "kuala-lumpur" },
  { name: "KLCC", hub: "Kuala Lumpur Hub", state: "W.P. Kuala Lumpur", languages: ["EN", "BM"], slug: "klcc", stateSlug: "kuala-lumpur" },
  { name: "Wangsa Maju", hub: "Kuala Lumpur Hub", state: "W.P. Kuala Lumpur", languages: ["BM", "EN"], slug: "wangsa-maju", stateSlug: "kuala-lumpur" },
  { name: "Taman Melawati", hub: "Kuala Lumpur Hub", state: "W.P. Kuala Lumpur", languages: ["BM", "EN"], slug: "taman-melawati", stateSlug: "kuala-lumpur" },
  
  // Petaling Jaya Hub
  { name: "Petaling Jaya", hub: "Petaling Jaya Hub", state: "Selangor", languages: ["EN", "CN", "BM"], slug: "petaling-jaya", stateSlug: "selangor" },
  { name: "Bandar Utama", hub: "Petaling Jaya Hub", state: "Selangor", languages: ["EN", "CN"], slug: "bandar-utama", stateSlug: "selangor" },
  { name: "Kota Damansara", hub: "Petaling Jaya Hub", state: "Selangor", languages: ["EN", "BM"], slug: "kota-damansara", stateSlug: "selangor" },
  { name: "Ara Damansara", hub: "Petaling Jaya Hub", state: "Selangor", languages: ["EN", "BM"], slug: "ara-damansara", stateSlug: "selangor" },
  { name: "SS2", hub: "Petaling Jaya Hub", state: "Selangor", languages: ["CN", "EN"], slug: "ss2", stateSlug: "selangor" },
  { name: "Kelana Jaya", hub: "Petaling Jaya Hub", state: "Selangor", languages: ["BM", "EN"], slug: "kelana-jaya", stateSlug: "selangor" },
  { name: "Tropicana", hub: "Petaling Jaya Hub", state: "Selangor", languages: ["EN"], slug: "tropicana", stateSlug: "selangor" },
  { name: "Taman Megah", hub: "Petaling Jaya Hub", state: "Selangor", languages: ["CN", "EN"], slug: "taman-megah", stateSlug: "selangor" },
  
  // Shah Alam Hub
  { name: "Shah Alam", hub: "Shah Alam Hub", state: "Selangor", languages: ["BM", "EN"], slug: "shah-alam", stateSlug: "selangor" },
  { name: "Setia Alam", hub: "Shah Alam Hub", state: "Selangor", languages: ["BM", "EN"], slug: "setia-alam", stateSlug: "selangor" },
  { name: "Bukit Jelutong", hub: "Shah Alam Hub", state: "Selangor", languages: ["EN", "BM"], slug: "bukit-jelutong", stateSlug: "selangor" },
  { name: "Seksyen 7", hub: "Shah Alam Hub", state: "Selangor", languages: ["BM"], slug: "seksyen-7", stateSlug: "selangor" },
  { name: "Seksyen 13", hub: "Shah Alam Hub", state: "Selangor", languages: ["BM", "EN"], slug: "seksyen-13", stateSlug: "selangor" },
  
  // Subang Jaya Hub
  { name: "Subang Jaya", hub: "Subang Jaya Hub", state: "Selangor", languages: ["EN", "CN", "BM"], slug: "subang-jaya", stateSlug: "selangor" },
  { name: "USJ", hub: "Subang Jaya Hub", state: "Selangor", languages: ["EN", "CN"], slug: "usj", stateSlug: "selangor" },
  { name: "Taipan", hub: "Subang Jaya Hub", state: "Selangor", languages: ["EN"], slug: "taipan", stateSlug: "selangor" },
  { name: "Putra Heights", hub: "Subang Jaya Hub", state: "Selangor", languages: ["BM", "EN"], slug: "putra-heights", stateSlug: "selangor" },
  
  // Klang Hub
  { name: "Klang", hub: "Klang Hub", state: "Selangor", languages: ["BM", "CN"], slug: "klang", stateSlug: "selangor" },
  { name: "Bandar Bukit Tinggi", hub: "Klang Hub", state: "Selangor", languages: ["CN", "BM"], slug: "bandar-bukit-tinggi", stateSlug: "selangor" },
  { name: "Kota Kemuning", hub: "Klang Hub", state: "Selangor", languages: ["EN", "BM"], slug: "kota-kemuning", stateSlug: "selangor" },
  { name: "Meru", hub: "Klang Hub", state: "Selangor", languages: ["BM"], slug: "meru", stateSlug: "selangor" },
  { name: "Port Klang", hub: "Klang Hub", state: "Selangor", languages: ["BM"], slug: "port-klang", stateSlug: "selangor" },
  
  // Johor Bahru Hub
  { name: "Johor Bahru", hub: "Johor Bahru Hub", state: "Johor", languages: ["BM", "EN", "CN"], slug: "johor-bahru", stateSlug: "johor" },
  { name: "Tampoi", hub: "Johor Bahru Hub", state: "Johor", languages: ["BM", "EN"], slug: "tampoi", stateSlug: "johor" },
  { name: "Skudai", hub: "Johor Bahru Hub", state: "Johor", languages: ["EN", "CN"], slug: "skudai", stateSlug: "johor" },
  { name: "Permas Jaya", hub: "Johor Bahru Hub", state: "Johor", languages: ["CN", "EN"], slug: "permas-jaya", stateSlug: "johor" },
  { name: "Taman Molek", hub: "Johor Bahru Hub", state: "Johor", languages: ["CN", "EN"], slug: "taman-molek", stateSlug: "johor" },
  
  // Iskandar Hub
  { name: "Iskandar Puteri", hub: "Iskandar Hub", state: "Johor", languages: ["EN", "BM"], slug: "iskandar-puteri", stateSlug: "johor" },
  { name: "Gelang Patah", hub: "Iskandar Hub", state: "Johor", languages: ["BM", "EN"], slug: "gelang-patah", stateSlug: "johor" },
  { name: "Nusajaya", hub: "Iskandar Hub", state: "Johor", languages: ["EN", "BM"], slug: "nusajaya", stateSlug: "johor" },
  { name: "Bukit Indah", hub: "Iskandar Hub", state: "Johor", languages: ["EN", "CN"], slug: "bukit-indah", stateSlug: "johor" },
  
  // Penang Hub
  { name: "George Town", hub: "Penang Hub", state: "Penang", languages: ["CN", "EN"], slug: "george-town", stateSlug: "penang" },
  { name: "Tanjung Tokong", hub: "Penang Hub", state: "Penang", languages: ["CN", "EN"], slug: "tanjung-tokong", stateSlug: "penang" },
  { name: "Tanjung Bungah", hub: "Penang Hub", state: "Penang", languages: ["CN", "EN"], slug: "tanjung-bungah", stateSlug: "penang" },
  { name: "Gelugor", hub: "Penang Hub", state: "Penang", languages: ["CN", "BM"], slug: "gelugor", stateSlug: "penang" },
  { name: "Bayan Lepas", hub: "Penang Hub", state: "Penang", languages: ["CN", "EN"], slug: "bayan-lepas", stateSlug: "penang" },
  { name: "Air Itam", hub: "Penang Hub", state: "Penang", languages: ["CN", "BM"], slug: "air-itam", stateSlug: "penang" },
  
  // Seberang Perai Hub
  { name: "Butterworth", hub: "Seberang Perai Hub", state: "Penang", languages: ["CN", "BM"], slug: "butterworth", stateSlug: "penang" },
  { name: "Bukit Mertajam", hub: "Seberang Perai Hub", state: "Penang", languages: ["CN", "BM"], slug: "bukit-mertajam", stateSlug: "penang" },
  { name: "Perai", hub: "Seberang Perai Hub", state: "Penang", languages: ["CN", "BM"], slug: "perai", stateSlug: "penang" },
  { name: "Kepala Batas", hub: "Seberang Perai Hub", state: "Penang", languages: ["BM"], slug: "kepala-batas", stateSlug: "penang" },
  { name: "Nibong Tebal", hub: "Seberang Perai Hub", state: "Penang", languages: ["BM"], slug: "nibong-tebal", stateSlug: "penang" },
  
  // Ipoh Hub
  { name: "Ipoh", hub: "Ipoh Hub", state: "Perak", languages: ["CN", "BM", "EN"], slug: "ipoh", stateSlug: "perak" },
  { name: "Menglembu", hub: "Ipoh Hub", state: "Perak", languages: ["CN"], slug: "menglembu", stateSlug: "perak" },
  { name: "Tambun", hub: "Ipoh Hub", state: "Perak", languages: ["CN", "EN"], slug: "tambun", stateSlug: "perak" },
  { name: "Bercham", hub: "Ipoh Hub", state: "Perak", languages: ["CN"], slug: "bercham", stateSlug: "perak" },
  { name: "Simpang Pulai", hub: "Ipoh Hub", state: "Perak", languages: ["BM"], slug: "simpang-pulai", stateSlug: "perak" },
  
  // Kuching Hub
  { name: "Kuching", hub: "Kuching Hub", state: "Sarawak", languages: ["BM", "EN"], slug: "kuching", stateSlug: "sarawak" },
  { name: "Petra Jaya", hub: "Kuching Hub", state: "Sarawak", languages: ["BM"], slug: "petra-jaya", stateSlug: "sarawak" },
  { name: "Kota Samarahan", hub: "Kuching Hub", state: "Sarawak", languages: ["BM"], slug: "kota-samarahan", stateSlug: "sarawak" },
  { name: "Pending", hub: "Kuching Hub", state: "Sarawak", languages: ["BM"], slug: "pending", stateSlug: "sarawak" },
  { name: "Batu Kawa", hub: "Kuching Hub", state: "Sarawak", languages: ["BM"], slug: "batu-kawa", stateSlug: "sarawak" },
  
  // Kota Kinabalu Hub
  { name: "Kota Kinabalu", hub: "Kota Kinabalu Hub", state: "Sabah", languages: ["BM", "EN"], slug: "kota-kinabalu", stateSlug: "sabah" },
  { name: "Likas", hub: "Kota Kinabalu Hub", state: "Sabah", languages: ["BM", "EN"], slug: "likas", stateSlug: "sabah" },
  { name: "Inanam", hub: "Kota Kinabalu Hub", state: "Sabah", languages: ["BM"], slug: "inanam", stateSlug: "sabah" },
  { name: "Penampang", hub: "Kota Kinabalu Hub", state: "Sabah", languages: ["BM"], slug: "penampang", stateSlug: "sabah" },
  { name: "Putatan", hub: "Kota Kinabalu Hub", state: "Sabah", languages: ["BM"], slug: "putatan", stateSlug: "sabah" },
  
  // Melaka Hub
  { name: "Melaka City", hub: "Melaka Hub", state: "Melaka", languages: ["BM", "EN", "CN"], slug: "melaka-city", stateSlug: "melaka" },
  { name: "Ayer Keroh", hub: "Melaka Hub", state: "Melaka", languages: ["BM", "EN"], slug: "ayer-keroh", stateSlug: "melaka" },
  { name: "Klebang", hub: "Melaka Hub", state: "Melaka", languages: ["CN", "BM"], slug: "klebang", stateSlug: "melaka" },
  { name: "Bukit Beruang", hub: "Melaka Hub", state: "Melaka", languages: ["BM"], slug: "bukit-beruang", stateSlug: "melaka" },
  
  // Alor Setar Hub
  { name: "Alor Setar", hub: "Alor Setar Hub", state: "Kedah", languages: ["BM", "EN"], slug: "alor-setar", stateSlug: "kedah" },
  { name: "Jitra", hub: "Alor Setar Hub", state: "Kedah", languages: ["BM"], slug: "jitra", stateSlug: "kedah" },
  { name: "Sungai Petani", hub: "Alor Setar Hub", state: "Kedah", languages: ["BM", "CN"], slug: "sungai-petani", stateSlug: "kedah" },
  { name: "Kulim", hub: "Alor Setar Hub", state: "Kedah", languages: ["BM", "CN"], slug: "kulim", stateSlug: "kedah" },
  
  // Kuantan Hub
  { name: "Kuantan", hub: "Kuantan Hub", state: "Pahang", languages: ["BM", "EN"], slug: "kuantan", stateSlug: "pahang" },
  { name: "Indera Mahkota", hub: "Kuantan Hub", state: "Pahang", languages: ["BM"], slug: "indera-mahkota", stateSlug: "pahang" },
  { name: "Gebeng", hub: "Kuantan Hub", state: "Pahang", languages: ["BM"], slug: "gebeng", stateSlug: "pahang" },
  
  // Kota Bharu Hub
  { name: "Kota Bharu", hub: "Kota Bharu Hub", state: "Kelantan", languages: ["BM"], slug: "kota-bharu", stateSlug: "kelantan" },
  { name: "Kubang Kerian", hub: "Kota Bharu Hub", state: "Kelantan", languages: ["BM"], slug: "kubang-kerian", stateSlug: "kelantan" },
  { name: "Pengkalan Chepa", hub: "Kota Bharu Hub", state: "Kelantan", languages: ["BM"], slug: "pengkalan-chepa", stateSlug: "kelantan" },
  
  // Kuala Terengganu Hub
  { name: "Kuala Terengganu", hub: "Kuala Terengganu Hub", state: "Terengganu", languages: ["BM"], slug: "kuala-terengganu", stateSlug: "terengganu" },
  { name: "Gong Badak", hub: "Kuala Terengganu Hub", state: "Terengganu", languages: ["BM"], slug: "gong-badak", stateSlug: "terengganu" },
];

// Generate hub data from cities
export const hubsData: HubData[] = Array.from(
  new Set(citiesData.map(c => c.hub))
).map(hubName => {
  const hubCities = citiesData.filter(c => c.hub === hubName);
  const mainCity = hubCities[0];
  return {
    name: hubName,
    state: mainCity.state,
    cities: hubCities,
    slug: hubName.toLowerCase().replace(/ hub$/i, '').replace(/\s+/g, '-'),
    stateSlug: mainCity.stateSlug,
  };
});

export const getCityBySlug = (stateSlug: string, citySlug: string): CityData | undefined => {
  return citiesData.find(c => c.stateSlug === stateSlug && c.slug === citySlug);
};

export const getHubBySlug = (slug: string): HubData | undefined => {
  return hubsData.find(h => h.slug === slug);
};

export const getCitiesByState = (stateSlug: string): CityData[] => {
  return citiesData.filter(c => c.stateSlug === stateSlug);
};

export const getNearbyCities = (city: CityData, count: number = 5): CityData[] => {
  return citiesData
    .filter(c => c.hub === city.hub && c.slug !== city.slug)
    .slice(0, count);
};
