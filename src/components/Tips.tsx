import { useState } from 'react'
import { SectionTitle } from './Services'

const tips = [
  {
    num: '01',
    title: 'Mantapkan Niat yang Kuat',
    body: 'Niat yang ikhlas adalah kunci ibadah yang diterima. Luruskan niat hanya karena Allah SWT, bukan karena pamer atau ikut-ikutan.',
  },
  {
    num: '02',
    title: 'Siapkan Dana Secara Bertahap',
    body: 'Mulai menabung sejak dini. Tentukan target nominal dan waktu keberangkatan, lalu cicil setiap bulan secara konsisten.',
  },
  {
    num: '03',
    title: 'Buat Rencana yang Matang',
    body: 'Pelajari manasik umroh, persiapkan dokumen (paspor, vaksin, visa), dan pilih paket yang sesuai kebutuhan dan kemampuan.',
  },
  {
    num: '04',
    title: 'Perbaiki Diri & Tingkatkan Ibadah',
    body: 'Jelang keberangkatan, perbanyak ibadah, hafalan doa, dan belajar tata cara umroh yang benar agar ibadah lebih sah dan khusyuk.',
  },
  {
    num: '05',
    title: 'Pilih Travel yang Amanah',
    body: 'Pastikan travel memiliki izin PPIU & PIHK resmi dari Kementerian Agama. Jangan tergiur harga murah tanpa legalitas yang jelas.',
  },
  {
    num: '06',
    title: 'Doa & Tawakal kepada Allah',
    body: 'Setelah ikhtiar maksimal, serahkan sepenuhnya kepada Allah. Berdoalah agar dimudahkan dan diberikan kesempatan yang terbaik.',
  },
  {
    num: '07',
    title: 'Jangan Tunda, Segera Wujudkan!',
    body: 'Panggilan ke Baitullah adalah karunia yang tidak datang dua kali. Jika sudah ada kemampuan, jangan tunda niat suci Anda.',
  },
]

export default function Tips() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-cream py-20 px-5">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          label="Panduan Ibadah"
          title="Tips Sebelum Berangkat Umroh"
          sub="7 langkah menyiapkan perjalanan ibadah yang lebih baik dan berkah."
        />

        <div className="space-y-3" data-animate>
          {tips.map((tip, i) => {
            const isOpen = open === i
            return (
              <div
                key={tip.num}
                className={`rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? 'shadow-[0_4px_24px_rgba(212,175,55,0.12)]'
                    : 'shadow-sm'
                }`}
                style={{
                  border: isOpen
                    ? '1px solid rgba(212,175,55,0.35)'
                    : '1px solid rgba(0,0,0,0.07)',
                  background: isOpen ? 'white' : 'rgba(255,255,255,0.7)',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold font-body transition-all duration-200"
                    style={{
                      background: isOpen
                        ? 'linear-gradient(135deg, #C9A227, #F5DD81)'
                        : 'rgba(212,175,55,0.1)',
                      color: isOpen ? '#111' : '#C9A227',
                    }}
                  >
                    {tip.num}
                  </span>
                  <span className="flex-1 font-semibold text-dark-800 text-sm md:text-base font-body pr-2">
                    {tip.title}
                  </span>
                  <svg
                    width="18" height="18" viewBox="0 0 18 18"
                    className={`flex-shrink-0 text-gold/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </button>

                <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                  <div className="accordion-inner">
                    <p className="px-5 pb-5 pt-0 text-dark-700/65 text-sm leading-relaxed font-body pl-[4.25rem]">
                      {tip.body}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
