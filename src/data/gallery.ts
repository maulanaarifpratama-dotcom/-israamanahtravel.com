export interface GalleryItem {
  slug: string
  /** Intrinsic size of the -lg render, used to lock aspect-ratio and stop CLS. */
  w: number
  h: number
  /** Place name. Only set where the location is actually confirmed. */
  title: string
  /** Region or short context line. */
  meta: string
  /** Longer alt text for screen readers. */
  alt: string
}

/* Locations marked "verified" below were read off signage in the photo itself:
   - jabal-quruntul: roadside sign "جبل التجربة (دير قرنطل) / Mount of Temptation"
   - ashabul-kahfi:  stone plaque "كهف أهل الكهف ... وردت قصتهم في القرآن الكريم"
   - kubah-shakhrah / petra-siq / petra-khazneh: unmistakable landmarks
   The remaining frames have no legible signage, so they carry honest
   descriptive captions rather than invented place names. */
export const gallery: GalleryItem[] = [
  {
    slug: 'alquds-panorama',
    w: 1280, h: 960,
    title: 'Panorama Kota Al-Quds',
    meta: 'Jerusalem, Palestina',
    alt: 'Rombongan jamaah Isra Amanah berfoto bersama dengan latar panorama kota Al-Quds (Jerusalem).',
  },
  {
    slug: 'kubah-shakhrah',
    w: 637, h: 1400,
    title: 'Masjid Kubah Shakhrah',
    meta: 'Kompleks Al-Aqsa, Al-Quds',
    alt: 'Kubah Shakhrah (Dome of the Rock) yang menyala keemasan pada malam hari di kompleks Masjidil Aqsa.',
  },
  {
    slug: 'petra-khazneh',
    w: 1050, h: 1400,
    title: 'Al-Khazneh, Petra',
    meta: 'Yordania',
    alt: 'Jamaah berfoto di depan Al-Khazneh (The Treasury), fasad batu terkenal di kota kuno Petra, Yordania.',
  },
  {
    slug: 'ashabul-kahfi',
    w: 637, h: 1400,
    title: 'Kahf Ashabul Kahfi',
    meta: 'Yordania — kisahnya dalam Al-Qur’an',
    alt: 'Jamaah di situs Kahf Ashabul Kahfi, gua yang kisahnya disebutkan dalam Al-Qur’an, di Yordania.',
  },
  {
    slug: 'petra-siq',
    w: 1050, h: 1400,
    title: 'Al-Siq, Petra',
    meta: 'Yordania',
    alt: 'Rombongan jamaah menyusuri Al-Siq, lorong batu sempit menuju kota kuno Petra.',
  },
  {
    slug: 'jabal-quruntul',
    w: 1280, h: 720,
    title: 'Jabal Quruntul',
    meta: 'Jericho, Palestina',
    alt: 'Jamaah berfoto bersama membawa spanduk di depan Jabal Quruntul (Mount of Temptation), Jericho.',
  },
  {
    slug: 'gerbang-batu',
    w: 960, h: 1280,
    title: 'Gerbang situs ziarah',
    meta: 'Perjalanan Umroh Plus Aqso',
    alt: 'Rombongan jamaah berfoto di bawah gerbang lengkung batu di salah satu situs ziarah.',
  },
  {
    slug: 'menara-bersejarah',
    w: 960, h: 1280,
    title: 'Ziarah situs bersejarah',
    meta: 'Perjalanan Umroh Plus Aqso',
    alt: 'Jamaah berfoto bersama di depan bangunan menara batu bersejarah.',
  },
  {
    slug: 'situs-sejarah',
    w: 637, h: 1400,
    title: 'Menyusuri jejak sejarah',
    meta: 'Perjalanan Umroh Plus Aqso',
    alt: 'Rombongan jamaah berkumpul di gerbang batu sebuah situs bersejarah dengan cahaya sore keemasan.',
  },
]
