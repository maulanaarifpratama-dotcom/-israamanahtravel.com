function SectionTitle({ label, title, sub, dark = false }: { label: string; title: string; sub?: string; dark?: boolean }) {
  return (
    <div className="text-center mb-12" data-animate>
      <p className={`text-xs tracking-[0.35em] uppercase font-semibold mb-3 font-body ${dark ? 'text-gold/70' : 'text-gold-600'}`}>{label}</p>
      <h2 className={`font-heading font-bold leading-tight ${dark ? 'text-white' : 'text-dark-900'}`}
        style={{ fontSize: 'clamp(1.7rem, 4vw, 2.5rem)' }}>
        {title}
      </h2>
      {sub && <p className={`mt-3 text-base max-w-xl mx-auto font-body ${dark ? 'text-white/50' : 'text-dark-600/70'}`}>{sub}</p>}
      <div className="flex items-center justify-center gap-3 mt-5">
        <div className={`h-px w-12 ${dark ? 'bg-gold/30' : 'bg-gold/40'}`} />
        <svg width="16" height="16" viewBox="0 0 16 16" className="text-gold">
          <path d="M8 0L16 8L8 16L0 8Z" fill="currentColor" opacity="0.9"/>
          <path d="M8 4L12 8L8 12L4 8Z" fill="currentColor" opacity="0.4"/>
        </svg>
        <div className={`h-px w-12 ${dark ? 'bg-gold/30' : 'bg-gold/40'}`} />
      </div>
    </div>
  )
}

const services = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <rect x="6" y="8" width="20" height="18" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="4" width="12" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="16" y1="8" x2="16" y2="26" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="6" y1="17" x2="26" y2="17" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    nama: 'Umroh Reguler & Plus',
    desc: 'Mekkah, Madinah & Al-Aqsa',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M16 4L20 12L28 13L22 19L23.5 27L16 23L8.5 27L10 19L4 13L12 12L16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    nama: 'Haji Reguler & Khusus',
    desc: 'Daftar antrian ONH resmi',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 12h4M8 16h8M8 20h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 12l4 0M22 16l2 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    nama: 'Tiket & Visa Resmi',
    desc: 'Pengurusan cepat & aman',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <rect x="4" y="14" width="24" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 14V10a8 8 0 0116 0v4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="16" cy="21" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    nama: 'Akomodasi Nyaman',
    desc: 'Hotel bintang 4–5 terpilih',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <rect x="2" y="14" width="28" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 14V12a2 2 0 012-2h16a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="8" cy="26" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="24" cy="26" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    nama: 'Transportasi Terpercaya',
    desc: 'Bus ber-AC selama perjalanan',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M16 4C11 4 7 8 7 12c0 6 9 16 9 16s9-10 9-16c0-4-4-8-9-8z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="16" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    nama: 'Makanan Berkualitas',
    desc: 'Halal, bergizi, khas Timteng',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 14l4-4M20 22l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    nama: 'Pembimbing Berpengalaman',
    desc: 'Muthowif & tour leader bersertifikat',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <rect x="8" y="6" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 12h8M12 16h8M12 20h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 10h2M8 16h2M8 22h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    nama: 'Perlengkapan Umroh',
    desc: 'Set lengkap disediakan',
  },
]

export { SectionTitle }

export default function Services() {
  return (
    <section className="bg-cream py-20 px-5">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          label="Apa yang Kami Tawarkan"
          title="Layanan Lengkap Perjalanan Ibadah"
          sub="Semua kebutuhan perjalanan ibadah Anda kami siapkan dengan profesional dan penuh amanah."
        />

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
          data-stagger
        >
          {services.map((s, i) => (
            <div
              key={s.nama}
              className="group bg-white rounded-2xl p-5 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/10 cursor-default border border-transparent hover:border-gold/20"
              data-animate
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center text-gold transition-all duration-300 group-hover:bg-dark-900 group-hover:text-gold"
                style={{ background: 'rgba(212,175,55,0.1)' }}>
                {s.icon}
              </div>
              <p className="font-semibold text-dark-900 text-sm leading-snug font-body">{s.nama}</p>
              <p className="text-dark-600/60 text-xs mt-1 font-body">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
