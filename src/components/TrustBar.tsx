const items = [
  { icon: '✓', label: 'PPIU Resmi', sub: 'SK. 91201027925540002' },
  { icon: '✓', label: 'PIHK Resmi', sub: 'SK. 91201027925540003' },
  { icon: '✓', label: 'Izin Kemenag', sub: 'Sisko Patuh' },
  { icon: '✓', label: 'IATA Member', sub: 'International' },
  { icon: '✓', label: 'Melayani Sepenuh Hati', sub: 'Perjalanan sesuai Sunnah' },
]

function Diamond() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" className="flex-shrink-0 text-gold/40">
      <path d="M4 0L8 4L4 8L0 4Z" fill="currentColor" />
    </svg>
  )
}

export default function TrustBar() {
  return (
    <div className="bg-dark-800 border-y border-gold/15">
      <div className="trust-scroll overflow-x-auto">
        <div className="flex items-center justify-start md:justify-center gap-0 min-w-max px-6 py-3.5">
          {items.map((item, i) => (
            <div key={item.label} className="flex items-center gap-0">
              {i > 0 && (
                <div className="flex items-center px-4">
                  <Diamond />
                </div>
              )}
              <div className="flex items-center gap-2 px-1">
                <span className="text-gold text-sm font-bold">✓</span>
                <div>
                  <p className="text-white text-xs font-semibold font-body leading-tight whitespace-nowrap">{item.label}</p>
                  <p className="text-white/35 text-[10px] font-body leading-tight whitespace-nowrap">{item.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
