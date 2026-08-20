# Isra Amanah Internasional — Landing Page

Travel Umroh & Haji | Cabang Banggai

## Stack
- **Vite** + React 18 + TypeScript
- **TanStack Router** v1
- **Tailwind CSS** v3

## Cara Edit Data Paket

Buka [`src/data/packages.ts`](src/data/packages.ts) dan ubah nilai di array `packages[]`.

Field yang tersedia per paket:
| Field | Tipe | Keterangan |
|---|---|---|
| `hargaMulai` | `number` | Harga dalam Rupiah (misal: `45_500_000`) |
| `nama` | `string` | Nama paket |
| `labelHarga` | `string` | "Mulai dari" atau "All-in" |
| `highlight` | `boolean` | `true` = card utama (gold border) |
| `badge` | `string?` | Label badge opsional ("Best Seller", "Best Deal") |
| `tanggalKeberangkatan` | `string?` | Tampil di card jika ada |
| `includes` | `string[]` | Daftar fasilitas termasuk |
| `notIncludes` | `string[]?` | Tidak termasuk |

## Cara Edit Nomor WA

Buka [`src/lib/wa.ts`](src/lib/wa.ts) dan ubah konstanta `WA_NUMBER`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy ke Vercel

1. Push repo ke GitHub
2. Import project di [vercel.com](https://vercel.com)
3. Framework preset: **Vite**
4. Klik Deploy

Vercel akan otomatis mendeteksi Vite dan menjalankan `npm run build` + serve folder `dist/`.

## Aset

Semua aset ada di folder [`public/assets/`](public/assets/):
- `logo.jpeg` — Logo Isra Amanah
- `poster-hero.jpeg` — Foto Maya dengan Kaabah
- `poster-services.jpeg` — Poster layanan (hero background)
- `poster-turkey.jpeg` — Poster paket Turkey
- `video-promo.mp4`, `video-promo2.mp4` — Video promo
- `itinerary-isra-miraj.pdf` — PDF itinerary 10D
- `itinerary-umrah-aqsha.pdf` — PDF itinerary 13D
