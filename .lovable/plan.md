

# Add Local Vet Clinic Data to City Pages

## Analysis

The uploaded CSV contains **166 vet clinic records** across all Malaysian states. The existing city pages already query `vet_clinics` from the database and display them — so the main work is:

1. Adding an `email` column (not in the current table)
2. Inserting the 166 records with correct city/state mapping
3. Updating the clinic card UI to show email and website
4. Mapping CSV "District" values to match existing city names in `cityData.ts`

### Current table columns vs what's needed
| Have | Need to add |
|------|-------------|
| name, address, city, state, phone, website | **email** |

### Key mapping challenge
The CSV uses "District" (e.g., "Aman Suria", "Bangsar", "Seksyen 13") which must map to the city names used in `useVetClinics` (e.g., "Petaling Jaya", "Bangsar", "Seksyen 13"). Most map directly, some need adjustment.

---

## Phase 1: KL & Selangor (Priority)

**~60 clinics** across W.P. Kuala Lumpur and Selangor districts.

### Step 1 — Database changes
- Add `email` column to `vet_clinics` table (text, nullable)
- Insert all KL clinics (~14 records): Taman Melawati, Mont Kiara, Brickfields, Ampang, Cheras, Kepong, Setapak, Wangsa Maju, Segambut, Sentul, Sri Hartamas
- Insert all Selangor clinics (~46 records): Shah Alam, Setia Alam, Taman Megah, Bangsar, PJ, Ara Damansara, Kelana Jaya, Subang Jaya, USJ, Puchong, Klang, Bandar Bukit Tinggi, Kota Kemuning, Kajang, Sungai Long, Seri Kembangan, Bangi, Semenyih, Rawang, Selayang, Gombak, Cyberjaya, Sepang, Ampang Jaya

### Step 2 — UI updates
- Update clinic card in `CityPageContent.tsx` to show:
  - Email (with mailto: link)
  - Website (with external link)
- These fields already exist in the `VetClinic` interface for website; add email to the interface

---

## Phase 2: Johor (~16 clinics)
- JB (4), Skudai (1), Permas Jaya (2), Pasir Gudang (1), Gelang Patah (1), Batu Pahat (2), Muar (3), Kulai (1), Segamat (2)

## Phase 3: Penang (~19 clinics)
- George Town (3), Tanjung Tokong (1), Tanjung Bungah (1), Gelugor (3), Bayan Lepas/Baru (2), Air Itam (1), Jelutong (1), Butterworth (3), Bukit Mertajam (4), Perai (2), Kepala Batas (1), Nibong Tebal (1)

## Phase 4: Perak (~10 clinics)
- Ipoh (6), Menglembu (1), Taiping (3), Batu Gajah (1), Kuala Kangsar (1), Sitiawan (2), Teluk Intan (1)

## Phase 5: Remaining states (~55 clinics)
- Sarawak: Kuching (3)
- Sabah: Kota Kinabalu (4), Penampang (3), Sandakan (2)
- Melaka: Melaka City (4), Batu Berendam (2)
- N. Sembilan: Seremban (5), Nilai (1), Port Dickson (1), Senawang (1)
- Kedah: Alor Setar (1), Jitra (2), Sungai Petani (2), Langkawi (1)
- Pahang: Kuantan (4), Beserah (1), Mentakab (1), Cameron Highlands (1), Jerantut (1)
- Kelantan: Kota Bharu (4), Tumpat (2)
- Terengganu: Kuala Terengganu (3), Kemaman (1), Dungun (1), Kuala Nerus (1)
- Perlis: Kangar (1)
- Labuan: Labuan (1)

---

## Technical Details

### Database migration (Phase 1)
```sql
ALTER TABLE vet_clinics ADD COLUMN IF NOT EXISTS email text;

INSERT INTO vet_clinics (name, address, city, state, phone, email, website)
VALUES
  ('Petcare Enterprise Sdn BHD', '9145 Jalan Bandar 4...', 'Taman Melawati', 'W.P. Kuala Lumpur', '03-4106 7515', 'petcare@tm.net.my', 'https://petcare.com.my'),
  -- ... all KL + Selangor records
;
```

### UI changes
- `useVetClinics.ts`: Add `email` to `VetClinic` interface
- `CityPageContent.tsx`: Add email and website buttons to clinic cards
- `NearbyVetsSection.tsx`: Already shows website — add email display

### District-to-city mapping notes
- "Aman Suria" → mapped to city "Petaling Jaya" (it's a PJ neighborhood)
- "Sungai Long" → mapped to "Kajang"
- "Ampang Jaya" → mapped to "Ampang"
- "Bayan Baru" → mapped to "Bayan Lepas"
- "Jelutong" → mapped to "Gelugor" (nearest covered city)
- "Melaka City" → mapped to "Melaka"
- Districts that match existing city names used as-is

---

## Implementation order
Start with Phase 1 (KL + Selangor) which covers the highest-traffic cities. Each subsequent phase is a single database migration inserting that state's records.

