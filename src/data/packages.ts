export interface Package {
  id: string
  nama: string
  hargaMulai: number
  labelHarga: string
  highlight: boolean
  badge?: string
  tagline: string
  includes: string[]
  notIncludes?: string[]
  tanggalKeberangkatan?: string
  gambar: string
  destinations: string[]
  hotels?: { kota: string; nama: string }[]
  airlines?: string[]
  extraHighlights?: string[]
}

export const packages: Package[] = [
  {
    id: 'umroh-reguler',
    nama: 'Umroh Reguler',
    hargaMulai: 45_500_000,
    labelHarga: 'Mulai dari',
    highlight: false,
    tagline: 'Perjalanan ibadah terjangkau, penuh berkah',
    destinations: ['Mekkah', 'Madinah'],
    gambar: '/assets/poster-hero.jpeg',
    includes: [
      'Tiket pesawat Luwuk – Jakarta PP',
      'Hotel transit Jakarta',
      'Hotel bintang 4–5 di Mekkah & Madinah',
      'Vaksinasi meningitis gratis',
      'Pengurusan paspor',
      'Visa umroh resmi',
      'Pembimbing & muthowif berpengalaman',
      'Transportasi ber-AC',
      'Konsumsi 3x sehari',
      'Perlengkapan umroh lengkap',
    ],
    notIncludes: ['Pengeluaran & belanja pribadi'],
  },
  {
    id: 'umroh-plus-aqso',
    nama: 'Umroh Plus Aqso',
    hargaMulai: 50_500_000,
    labelHarga: 'Mulai dari',
    highlight: true,
    badge: 'Best Seller',
    tagline: 'Ibadah lengkap: Baitullah & Masjidil Aqsa',
    destinations: ['Mekkah', 'Madinah', 'Jerusalem (Al-Aqsa)'],
    gambar: '/assets/poster-services.jpeg',
    includes: [
      'Tiket pesawat Luwuk – Jakarta PP',
      'Hotel transit Jakarta',
      'Hotel bintang 4–5 di Mekkah & Madinah',
      'Hotel di Jerusalem dekat Al-Aqsa',
      'Ziarah Masjidil Aqsa & Kubah Shakhrah',
      'Vaksinasi meningitis gratis',
      'Visa umroh & visa Yordania',
      'Pembimbing & muthowif berpengalaman',
      'Transportasi ber-AC seluruh perjalanan',
      'Konsumsi 3x sehari',
      'Perlengkapan umroh lengkap',
    ],
    notIncludes: ['Pengeluaran & belanja pribadi', 'Paspor'],
  },
  {
    id: 'fast-umroh-turkey',
    nama: 'Fast Umroh + Turkey',
    hargaMulai: 41_000_000,
    labelHarga: 'All-in',
    highlight: false,
    badge: 'Best Deal',
    tagline: '12 hari ibadah + wisata Turki bersejarah',
    destinations: ['Mekkah', 'Madinah', 'Türkiye'],
    tanggalKeberangkatan: '20 November 2026',
    gambar: '/assets/poster-turkey.jpeg',
    hotels: [
      { kota: 'Madinah', nama: 'Hotel Odest / Setaraf' },
      { kota: 'Mekkah', nama: 'Maysan Al Maqom / Setaraf' },
      { kota: 'Türkiye', nama: 'Hotel Mercure / Setaraf' },
    ],
    airlines: ['Emirates', 'Pegasus', 'Etihad', 'Qatar Airways', 'Gulf Air'],
    extraHighlights: ['Free Al Baik', 'Kunjungan Museum Al Wahyu'],
    includes: [
      'Tiket pesawat (pilihan maskapai premium)',
      'Bagasi 20 kg',
      'Hotel bintang 4–5 Madinah & Mekkah',
      'Hotel Mercure / setaraf di Türkiye',
      'Visa umroh & visa Turki',
      'Konsumsi 3x sehari + free Al Baik',
      'Kunjungan Museum Al Wahyu',
      'Tour Leader & Muthowif profesional',
      'Perlengkapan umroh full set',
      'Transportasi ber-AC',
      'Handling bagasi',
    ],
    notIncludes: ['Pengeluaran pribadi', 'Paspor'],
  },
]
