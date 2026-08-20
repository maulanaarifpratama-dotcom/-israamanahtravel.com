import { getWALink } from '../lib/wa'

function OrnamentLine() {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold flex-shrink-0">
        <path d="M12 2L22 12L12 22L2 12Z" fill="currentColor" opacity="0.9" />
        <path d="M12 6L18 12L12 18L6 12Z" fill="#111111" />
        <path d="M12 8L16 12L12 16L8 12Z" fill="currentColor" opacity="0.6" />
      </svg>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Decorative only, so it is hidden from assistive tech. Audio was
            stripped from the file since it plays muted and looped, and the
            poster is a frame of this clip rather than the old social-media
            poster, which had text baked into it. */}
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          poster="/assets/hero-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.44)' }}
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />
        {/* Centre scrim: the video is always moving, so the headline cannot rely
            on any single frame being dark enough behind it. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 78% 62% at 50% 44%, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0) 100%)',
          }}
        />
        <div className="absolute inset-0 pattern-bg opacity-[0.05]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-5 text-center pt-12 pb-28">
        {/* Logo + Brand */}
        <div className="flex items-center justify-center gap-3 mb-2 animate-fade-in">
          <div
            className="w-14 h-14 bg-white flex-shrink-0 overflow-hidden"
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          >
            <img src="/assets/logo.jpeg" alt="Isra Amanah Logo" className="w-full h-full object-contain p-1" />
          </div>
          <div className="text-left leading-tight">
            <p className="text-gold font-heading font-semibold text-[1.45rem] tracking-[0.06em] leading-none">ISRA AMANAH</p>
            <p className="text-gold text-[11px] tracking-[0.25em] uppercase font-body">Internasional</p>
            <p className="text-white/70 text-[10px] tracking-[0.3em] uppercase font-body">Cabang Banggai</p>
          </div>
        </div>

        <OrnamentLine />

        {/* Headline */}
        <h1
          className="font-heading font-semibold text-white leading-[1.06] mb-0.5 animate-float-up"
          style={{ fontSize: 'clamp(2.6rem, 8vw, 5.2rem)', animationDelay: '100ms' }}
        >
          Wujudkan Niat Suci
        </h1>
        <h2
          className="font-heading italic font-medium text-gold leading-[1.1] mb-7 animate-float-up"
          style={{ fontSize: 'clamp(2.5rem, 7.8vw, 5rem)', animationDelay: '180ms' }}
        >
          ke Baitullah &amp; Al-Aqsa
        </h2>

        {/* Tagline */}
        <p
          className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 font-body animate-float-up"
          style={{ animationDelay: '260ms' }}
        >
          Umroh bukan hanya perjalanan, tapi panggilan hati untuk mendekatkan diri kepada Allah SWT.
          Bersama Isra Amanah, setiap langkah menjadi berkah.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-float-up"
          style={{ animationDelay: '340ms' }}
        >
          <a href={getWALink()} target="_blank" rel="noopener noreferrer" className="btn-wa w-full sm:w-auto">
            <WhatsAppIcon />
            Hubungi Maya Sekarang
          </a>
          <a href="#paket" className="btn-outline-gold on-dark w-full sm:w-auto">
            Lihat Paket Umroh
          </a>
        </div>

        {/* Badges */}
        <div
          className="flex flex-wrap justify-center gap-3 mt-8 animate-fade-in"
          style={{ animationDelay: '500ms' }}
        >
          {['PPIU Resmi', 'PIHK Resmi', 'Izin Kemenag', 'IATA Member'].map((b) => (
            <span
              key={b}
              className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full font-body"
              style={{ border: '1px solid rgba(212,175,55,0.45)', color: '#E8C55A', background: 'rgba(212,175,55,0.1)' }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-white/60 text-[9px] tracking-[0.35em] uppercase font-body">Scroll</span>
        <div className="w-[1.5px] h-8 bg-gradient-to-b from-gold/40 to-transparent animate-scroll" />
      </div>
    </section>
  )
}
