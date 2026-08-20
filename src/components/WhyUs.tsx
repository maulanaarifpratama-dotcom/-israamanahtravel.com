import { SectionTitle } from './Services'

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        <path d="M24 8l3.5 7.5 8 1.2-5.75 5.6 1.35 7.9L24 26.75l-7.1 3.45 1.35-7.9L12.5 16.7l8-1.2L24 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M18 36l6-3 6 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Amanah',
    subtitle: 'Melayani dengan Hati & Integritas',
    desc: 'Setiap jamaah adalah amanah yang kami emban dengan sepenuh hati. Transparansi, kejujuran, dan kepercayaan adalah fondasi kami melayani.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        <path d="M14 28c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="20" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 38h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 34l6-3 6 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Nyaman',
    subtitle: 'Perjalanan Ibadah Lebih Tenang',
    desc: 'Hotel bintang 4–5, transportasi ber-AC, dan konsumsi berkualitas — semua kami siapkan agar Anda bisa fokus pada ibadah dengan tenang.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        <path d="M24 12c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 24l3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Berkah',
    subtitle: 'Ibadah Lebih Khusyuk & Bermakna',
    desc: 'Dengan pembimbing berpengalaman yang memahami fikih ibadah, setiap amalan Anda menjadi lebih sah, khusyuk, dan penuh keberkahan.',
  },
]

export default function WhyUs() {
  return (
    <section className="bg-cream py-20 px-5">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          label="Keunggulan Kami"
          title="Kenapa Pilih Isra Amanah?"
          sub="Tiga pilar yang menjadi janji kami kepada setiap jamaah."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group text-center px-6 py-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'white',
                border: '1px solid rgba(212,175,55,0.15)',
                boxShadow: '0 2px 24px rgba(0,0,0,0.04)',
                transitionDelay: `${i * 100}ms`,
              }}
              data-animate
            >
              {/* Icon circle */}
              <div
                className="w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center text-goldink transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.14), rgba(212,175,55,0.06))',
                  border: '1px solid rgba(212,175,55,0.3)',
                }}
              >
                {p.icon}
              </div>

              {/* Number */}
              <p className="text-[11px] tracking-[0.4em] uppercase text-goldink font-semibold font-body mb-2">
                0{i + 1}
              </p>

              {/* Title */}
              <h3 className="font-heading font-bold text-ink text-2xl mb-1">{p.title}</h3>
              <p className="text-goldink text-sm font-semibold font-body mb-3">{p.subtitle}</p>

              {/* Divider */}
              <div className="w-10 h-px bg-gold/40 mx-auto mb-4" />

              {/* Desc */}
              <p className="text-ink-muted text-sm leading-relaxed font-body">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
