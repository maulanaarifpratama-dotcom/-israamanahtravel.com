import { getWALink } from '../lib/wa'

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/8">
      {/* Main footer */}
      <div className="max-w-5xl mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-12 h-12 bg-white flex-shrink-0 overflow-hidden"
              style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
            >
              <img src="/assets/logo.jpeg" alt="Isra Amanah" className="w-full h-full object-contain p-1" />
            </div>
            <div>
              <p className="text-gold font-heading font-semibold text-[1.2rem] tracking-[0.06em] leading-tight">ISRA AMANAH</p>
              <p className="text-white/65 text-[10px] tracking-widest uppercase font-body">Internasional</p>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed font-body">
            PT Isra Amanah Internasional — Cabang Banggai.<br />
            Melayani Sepenuh Hati dalam setiap perjalanan ibadah.
          </p>
          <p className="text-gold font-heading italic font-medium text-2xl mt-4">Umroh & Haji Mabrur</p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 font-body uppercase tracking-wider">Kontak</h4>
          <div className="space-y-3">
            <div>
              <p className="text-white/65 text-xs font-body mb-0.5">Branch Manager Banggai</p>
              <p className="text-white text-sm font-semibold font-body">Maya Meyzy</p>
            </div>
            <a
              href={getWALink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-[44px] text-green-400 hover:text-green-300 transition-colors text-sm font-semibold font-body"
            >
              <WhatsAppIcon />
              0857-5735-8682
            </a>
          </div>
        </div>

        {/* Legal & Nav */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 font-body uppercase tracking-wider">Legal</h4>
          <div className="space-y-2 mb-5">
            {[
              { label: 'PPIU', sk: 'SK. 91201027925540002' },
              { label: 'PIHK', sk: 'SK. 91201027925540003' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" className="flex-shrink-0 text-gold mt-0.5" aria-hidden="true">
                  <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <path d="M4 7l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <div>
                  <p className="text-white/80 text-xs font-semibold font-body">Izin {item.label} Resmi</p>
                  <p className="text-white/60 text-[11px] font-body">{item.sk}</p>
                </div>
              </div>
            ))}
          </div>

          <nav aria-label="Navigasi footer">
            <h4 className="text-white/65 text-xs uppercase tracking-wider font-body mb-3">Navigasi</h4>
            <div className="flex flex-wrap gap-x-3 -ml-2">
              {/* Every target below is a real id in the DOM — the previous
                  #tentang link pointed at a section that does not exist.
                  min-h-[44px] meets the touch-target minimum. */}
              {[
                { href: '#layanan', label: 'Layanan' },
                { href: '#paket', label: 'Paket' },
                { href: '#galeri', label: 'Galeri' },
                { href: '#video', label: 'Video' },
                { href: '#itinerary', label: 'Itinerary' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center min-h-[44px] px-2 text-white/70 hover:text-gold text-xs font-body transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      {/* Extra bottom padding keeps the fixed WhatsApp button from sitting on
          top of the legal line. */}
      <div
        className="border-t border-white/5 px-5 pt-4 pb-24 sm:pb-20"
        style={{ background: 'rgba(0,0,0,0.3)' }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-white/60 text-xs font-body">
            © 2026 PT Isra Amanah Internasional. Hak cipta dilindungi.
          </p>
          <p className="text-white/55 text-xs font-body">
            PPIU: SK. 91201027925540002 · PIHK: SK. 91201027925540003
          </p>
        </div>
      </div>
    </footer>
  )
}
