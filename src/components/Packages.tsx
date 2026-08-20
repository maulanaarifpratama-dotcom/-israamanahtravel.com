import { packages } from '../data/packages'
import { getWALink } from '../lib/wa'
import { SectionTitle } from './Services'

function formatRupiah(n: number): string {
  if (n >= 1_000_000) {
    const val = n / 1_000_000
    return `Rp ${val % 1 === 0 ? val.toFixed(0) : val.toFixed(1)} Juta`
  }
  return `Rp ${n.toLocaleString('id-ID')}`
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" className="flex-shrink-0 text-gold mt-0.5">
      <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M4 7l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" className="flex-shrink-0 mt-0.5 text-white/20">
      <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M5 5l4 4M9 5l-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
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

export default function Packages() {
  return (
    <section id="paket" className="bg-dark-900 py-20 px-5">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          dark
          label="Pilih Paket Terbaik"
          title="Paket Umroh & Haji 2026"
          sub="Setiap paket dirancang untuk memberikan perjalanan ibadah terbaik dengan harga yang terjangkau."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ease-out hover:-translate-y-1.5 ${
                pkg.highlight
                  ? 'ring-1 ring-gold/70 shadow-[0_0_40px_rgba(212,175,55,0.15)]'
                  : 'gold-border'
              }`}
              data-animate
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span
                    className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full font-body"
                    style={{
                      background: pkg.highlight
                        ? 'linear-gradient(135deg, #C9A227, #F5DD81)'
                        : 'rgba(212,175,55,0.15)',
                      color: pkg.highlight ? '#111' : '#D4AF37',
                      border: pkg.highlight ? 'none' : '1px solid rgba(212,175,55,0.4)',
                    }}
                  >
                    {pkg.badge}
                  </span>
                </div>
              )}

              {/* Image header */}
              <div className="relative h-44 overflow-hidden">
                <img src={pkg.gambar} alt={pkg.nama} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <div className="flex flex-wrap gap-1">
                    {pkg.destinations.map((d) => (
                      <span key={d} className="text-[10px] font-semibold text-white/80 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full font-body border border-white/10">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 bg-dark-800">
                <h3 className="font-heading font-bold text-white text-xl mb-1">{pkg.nama}</h3>
                <p className="text-white/45 text-xs font-body mb-4">{pkg.tagline}</p>

                {/* Price */}
                <div className="mb-4 pb-4 border-b border-white/8">
                  <p className="text-white/40 text-[11px] uppercase tracking-widest font-body mb-0.5">{pkg.labelHarga}</p>
                  <p
                    className="font-heading font-bold leading-none"
                    style={{
                      fontSize: 'clamp(1.6rem, 4vw, 2rem)',
                      background: 'linear-gradient(135deg, #C9A227, #F5DD81)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {formatRupiah(pkg.hargaMulai)}
                  </p>
                  {pkg.tanggalKeberangkatan && (
                    <div className="mt-2 flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" className="text-gold/60">
                        <rect x="1" y="2" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
                        <path d="M4 1v2M8 1v2M1 5h10" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                      <span className="text-gold/70 text-xs font-semibold font-body">{pkg.tanggalKeberangkatan}</span>
                    </div>
                  )}
                </div>

                {/* Hotels */}
                {pkg.hotels && (
                  <div className="mb-3 space-y-1">
                    {pkg.hotels.map((h) => (
                      <div key={h.kota} className="flex gap-2 text-xs font-body">
                        <span className="text-white/30 w-14 flex-shrink-0">{h.kota}</span>
                        <span className="text-white/65">{h.nama}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Extra highlights */}
                {pkg.extraHighlights && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {pkg.extraHighlights.map((h) => (
                      <span key={h} className="text-[10px] font-semibold text-gold bg-gold/10 border border-gold/25 px-2 py-0.5 rounded-full font-body">
                        {h}
                      </span>
                    ))}
                  </div>
                )}

                {/* Airlines */}
                {pkg.airlines && (
                  <p className="text-white/35 text-[11px] font-body mb-3">
                    Maskapai: {pkg.airlines.join(' · ')}
                  </p>
                )}

                {/* Includes */}
                <ul className="space-y-1.5 mb-4 flex-1">
                  {pkg.includes.slice(0, 6).map((item) => (
                    <li key={item} className="flex gap-2 text-[13px] text-white/70 font-body">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Not includes */}
                {pkg.notIncludes && (
                  <ul className="space-y-1 mb-5 pt-3 border-t border-white/8">
                    {pkg.notIncludes.map((item) => (
                      <li key={item} className="flex gap-2 text-[12px] text-white/30 font-body">
                        <XIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA */}
                <a
                  href={getWALink(pkg.nama)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm font-body transition-all duration-200 active:scale-[0.97] ${
                    pkg.highlight
                      ? 'btn-gold'
                      : 'btn-outline-gold'
                  }`}
                >
                  <WhatsAppIcon />
                  Daftar Paket Ini
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs font-body mt-6">
          * Harga dapat berubah sesuai kurs dan ketersediaan. Hubungi Maya untuk info terkini.
        </p>
      </div>
    </section>
  )
}
