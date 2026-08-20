import { getWALink } from '../lib/wa'

function PdfIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="flex-shrink-0">
      <rect x="2" y="2" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 9h12M6 13h12M6 17h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <rect x="18" y="17" width="8" height="9" rx="1.5" fill="currentColor" opacity="0.9"/>
      <path d="M20 20l2 2 2-2" stroke="#111" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 3v9M5 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 15h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}

const pdfs = [
  {
    title: 'Itinerary Isra Miraj Aqso',
    subtitle: '10 Hari — 29 Desember',
    desc: 'Jadwal lengkap perjalanan Isra Miraj & Aqso, itinerary harian, hotel, dan info penting.',
    href: '/assets/itinerary-isra-miraj.pdf',
    waPackage: 'Isra Miraj Aqso 10D',
  },
  {
    title: 'Itinerary Umroh Plus Aqsha',
    subtitle: '13 Hari — Januari 2027',
    desc: 'Panduan perjalanan Umroh Plus Aqsha 13 hari, termasuk ziarah Jerusalem & Dome of the Rock.',
    href: '/assets/itinerary-umrah-aqsha.pdf',
    waPackage: 'Umroh Plus Aqsha 13D',
  },
]

export default function Downloads() {
  return (
    <section
      className="py-20 px-5"
      style={{
        background: 'linear-gradient(135deg, #0C0C0C 0%, #1a1400 50%, #0C0C0C 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-animate>
          <p className="text-gold/70 text-xs tracking-[0.35em] uppercase font-semibold font-body mb-3">Informasi Perjalanan</p>
          <h2
            className="font-heading font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(1.7rem, 4vw, 2.5rem)' }}
          >
            Download Itinerary Lengkap
          </h2>
          <p className="text-white/45 mt-3 text-base font-body max-w-xl mx-auto">
            Pelajari jadwal perjalanan sebelum mendaftar. Hubungi Maya untuk informasi terkini.
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-12 bg-gold/30" />
            <svg width="16" height="16" viewBox="0 0 16 16" className="text-gold">
              <path d="M8 0L16 8L8 16L0 8Z" fill="currentColor" opacity="0.9"/>
              <path d="M8 4L12 8L8 12L4 8Z" fill="currentColor" opacity="0.4"/>
            </svg>
            <div className="h-px w-12 bg-gold/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pdfs.map((pdf) => (
            <div
              key={pdf.title}
              className="rounded-2xl p-6 flex flex-col gap-5"
              style={{
                background: 'rgba(212,175,55,0.04)',
                border: '1px solid rgba(212,175,55,0.2)',
              }}
              data-animate
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-gold"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}
                >
                  <PdfIcon />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg leading-snug">{pdf.title}</h3>
                  <p className="text-gold/70 text-xs font-semibold font-body mt-0.5">{pdf.subtitle}</p>
                  <p className="text-white/45 text-sm font-body mt-2 leading-snug">{pdf.desc}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <a
                  href={pdf.href}
                  download
                  className="btn-gold flex-1 py-3 text-sm gap-2"
                  aria-label={`Download itinerary ${pdf.title}`}
                >
                  <DownloadIcon />
                  Download PDF
                </a>
                <a
                  href={getWALink(pdf.waPackage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa flex-1 py-3 text-sm gap-2"
                >
                  <WhatsAppIcon />
                  Tanya Maya
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
