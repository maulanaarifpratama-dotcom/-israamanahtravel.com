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

/* ── Landmark emblems: one per package, so the card art carries meaning
      instead of the generic diamond placeholder it replaces. ── */

function KaabaMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 16h18v22H15z" />
        <path d="M15 23.5h18M15 27.5h18" />
        <path d="M21 38v-6h6v6" />
        <path d="M11 38h26" />
      </g>
    </svg>
  )
}

function DomeOfRockMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 9.5v3.5" />
        <path d="M16 24c0-5 3.6-9 8-9s8 4 8 9" />
        <path d="M16 24v14M32 24v14" />
        <path d="M20 38v-6a1.6 1.6 0 013.2 0v6" />
        <path d="M27.5 38v-5" />
        <path d="M11 38h26" />
      </g>
    </svg>
  )
}

function MosqueMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 9v3.5" />
        <path d="M17 25c0-4.4 3.1-8 7-8s7 3.6 7 8" />
        <path d="M17 25v13M31 25v13" />
        <path d="M21 38v-5a1.5 1.5 0 013 0v5" />
        <path d="M12.5 38V21a1.4 1.4 0 012.8 0v17" />
        <path d="M32.7 38V21a1.4 1.4 0 012.8 0v17" />
        <path d="M9 38h30" />
      </g>
    </svg>
  )
}

const CARD_ART = [
  { mark: <KaabaMark />, tint: 'linear-gradient(150deg,#FFFCF2 0%,#FBF0D0 100%)' },
  { mark: <DomeOfRockMark />, tint: 'linear-gradient(150deg,#F7F9FF 0%,#E9EFFC 100%)' },
  { mark: <MosqueMark />, tint: 'linear-gradient(150deg,#FFFAF6 0%,#FBEADF 100%)' },
]

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" className="flex-shrink-0 mt-[2px] text-goldink" aria-hidden="true">
      <circle cx="7.5" cy="7.5" r="6.75" fill="rgba(212,175,55,0.14)" />
      <path d="M4.4 7.7l2.1 2.1 4.1-4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" className="flex-shrink-0 text-goldink" aria-hidden="true">
      <rect x="1" y="2.5" width="11" height="9.5" rx="1.2" stroke="currentColor" strokeWidth="1.1" fill="none" />
      <path d="M4 1v3M9 1v3M1 5.8h11" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}

/* Show a consistent number of benefits per card so the three columns keep
   comparable height, and state the remainder rather than silently dropping it. */
const VISIBLE_INCLUDES = 7

export default function Packages() {
  return (
    <section id="paket" className="bg-cream py-20 px-5">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          label="Pilih Paket Terbaik"
          title="Paket Umroh & Haji 2026"
          sub="Setiap paket dirancang untuk memberikan perjalanan ibadah terbaik dengan harga yang terjangkau."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, i) => {
            const art = CARD_ART[i] ?? CARD_ART[0]
            const hidden = pkg.includes.length - VISIBLE_INCLUDES

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl overflow-hidden flex flex-col bg-white transition-transform duration-300 ease-out hover:-translate-y-1.5 ${
                  pkg.highlight
                    ? 'ring-2 ring-gold/70 shadow-[0_10px_44px_rgba(212,175,55,0.22)]'
                    : 'ring-1 ring-black/8 shadow-[0_4px_20px_rgba(0,0,0,0.07)]'
                }`}
                data-animate
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute top-3.5 right-3.5 z-20">
                    <span
                      className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full font-body"
                      style={
                        pkg.highlight
                          ? { background: 'linear-gradient(135deg,#C9A227,#F5DD81)', color: '#111' }
                          : { background: '#FFFFFF', color: '#7A6117', border: '1px solid rgba(212,175,55,0.55)' }
                      }
                    >
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Header — landmark medallion, no baked-in imagery */}
                <div
                  className="relative h-[104px] flex items-center justify-center"
                  style={{ background: art.tint }}
                >
                  <div className="absolute inset-0 pattern-bg opacity-[0.07]" />
                  <div
                    className="relative w-16 h-16 rounded-full flex items-center justify-center text-goldink"
                    style={{
                      background: '#FFFFFF',
                      border: '1.5px solid rgba(212,175,55,0.45)',
                      boxShadow: '0 3px 14px rgba(122,97,23,0.14)',
                    }}
                  >
                    {art.mark}
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: 'linear-gradient(90deg,transparent,rgba(212,175,55,0.5),transparent)' }}
                  />
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Destinations */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {pkg.destinations.map((d) => (
                      <span
                        key={d}
                        className="text-[10px] font-semibold text-goldink px-2 py-0.5 rounded-full font-body"
                        style={{ background: 'rgba(212,175,55,0.13)', border: '1px solid rgba(212,175,55,0.4)' }}
                      >
                        {d}
                      </span>
                    ))}
                  </div>

                  {/* Sans, not the serif: Cormorant's small x-height makes a
                      20px title read weak. Serif is reserved for display sizes. */}
                  <h3 className="font-body font-extrabold text-ink text-[1.3rem] leading-snug tracking-[-0.015em] mb-1">
                    {pkg.nama}
                  </h3>
                  <p className="text-ink-subtle text-xs font-body mb-4">{pkg.tagline}</p>

                  {/* Price */}
                  <div className="mb-4 pb-4 border-b border-black/8">
                    <p className="text-ink-faint text-[11px] uppercase tracking-widest font-body mb-0.5">
                      {pkg.labelHarga}
                    </p>
                    <p
                      className="price-gold font-heading font-bold leading-none"
                      style={{ fontSize: 'clamp(1.9rem, 4.6vw, 2.4rem)' }}
                    >
                      {formatRupiah(pkg.hargaMulai)}
                    </p>
                    {pkg.tanggalKeberangkatan && (
                      <div className="mt-2.5 inline-flex items-center gap-1.5">
                        <CalendarIcon />
                        <span className="text-goldink text-xs font-semibold font-body">
                          {pkg.tanggalKeberangkatan}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Hotels */}
                  {pkg.hotels && (
                    <dl className="mb-3.5 space-y-1">
                      {pkg.hotels.map((h) => (
                        <div key={h.kota} className="flex gap-2 text-xs font-body">
                          <dt className="text-ink-faint w-16 flex-shrink-0">{h.kota}</dt>
                          <dd className="text-ink-muted font-medium">{h.nama}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {/* Extra highlights */}
                  {pkg.extraHighlights && (
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {pkg.extraHighlights.map((h) => (
                        <span
                          key={h}
                          className="text-[10px] font-bold text-goldink px-2 py-0.5 rounded-full font-body"
                          style={{ background: 'rgba(212,175,55,0.16)', border: '1px solid rgba(212,175,55,0.45)' }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Includes */}
                  <ul className="space-y-1.5 mb-3">
                    {pkg.includes.slice(0, VISIBLE_INCLUDES).map((item) => (
                      <li key={item} className="flex gap-2 text-[13px] text-ink-muted font-body leading-snug">
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {hidden > 0 && (
                    <p className="text-goldink text-[12px] font-semibold font-body mb-3">
                      + {hidden} manfaat lainnya
                    </p>
                  )}

                  {/* Airlines */}
                  {pkg.airlines && (
                    <p className="text-ink-faint text-[11px] font-body leading-snug mb-3">
                      <span className="font-semibold text-ink-subtle">Maskapai:</span> {pkg.airlines.join(' · ')}
                    </p>
                  )}

                  {/* Not included — one compact line instead of a variable-height list */}
                  {pkg.notIncludes && (
                    <p className="text-ink-faint text-[11px] font-body leading-snug pt-3 border-t border-black/8 mb-4">
                      <span className="font-semibold">Tidak termasuk:</span> {pkg.notIncludes.join(' · ')}
                    </p>
                  )}

                  {/* CTA — pinned so all three align */}
                  <a
                    href={getWALink(pkg.nama)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto w-full py-3.5 text-sm ${pkg.highlight ? 'btn-gold' : 'btn-outline-gold'}`}
                  >
                    <WhatsAppIcon />
                    Daftar Paket Ini
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-ink-subtle text-xs font-body mt-7">
          * Harga dapat berubah sesuai kurs dan ketersediaan. Hubungi Maya untuk info terkini.
        </p>
      </div>
    </section>
  )
}
