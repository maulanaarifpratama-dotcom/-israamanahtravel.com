const items = [
  { label: 'PPIU Resmi', sub: 'SK. 91201027925540002' },
  { label: 'PIHK Resmi', sub: 'SK. 91201027925540003' },
  { label: 'Izin Kemenag', sub: 'Sisko Patuh' },
  { label: 'IATA Member', sub: 'International' },
  { label: 'Melayani Sepenuh Hati', sub: 'Perjalanan sesuai Sunnah' },
]

function Diamond() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" className="flex-shrink-0 text-gold/40" aria-hidden="true">
      <path d="M4 0L8 4L4 8L0 4Z" fill="currentColor" />
    </svg>
  )
}

/* Real SVG rather than a "✓" text character, so the badge keeps one icon
   family with the rest of the page and scales with the layout. */
function VerifiedIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" className="flex-shrink-0 text-gold" aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.16" />
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.1" fill="none" opacity="0.55" />
      <path d="M5 8.2l2.1 2.1L11 6.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export default function TrustBar() {
  return (
    <div className="bg-dark-800 border-y border-gold/15">
      <div className="trust-scroll overflow-x-auto">
        <ul className="flex items-center justify-start md:justify-center gap-0 min-w-max px-6 py-3.5">
          {items.map((item, i) => (
            <li key={item.label} className="flex items-center gap-0">
              {i > 0 && (
                <div className="flex items-center px-4" aria-hidden="true">
                  <Diamond />
                </div>
              )}
              <div className="flex items-center gap-2 px-1">
                <VerifiedIcon />
                <div>
                  <p className="text-white text-xs font-semibold font-body leading-tight whitespace-nowrap">
                    {item.label}
                  </p>
                  {/* was white/35 (2.9:1) — /60 clears AA on #141414 */}
                  <p className="text-white/60 text-[10px] font-body leading-tight whitespace-nowrap">
                    {item.sub}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
