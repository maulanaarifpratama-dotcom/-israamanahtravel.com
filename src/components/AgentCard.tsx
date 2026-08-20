import { getWALink } from '../lib/wa'

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}

export default function AgentCard() {
  return (
    <section className="bg-cream py-20 px-5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF5 100%)',
            border: '1.5px solid rgba(212,175,55,0.35)',
            boxShadow: '0 12px 60px rgba(212,175,55,0.12)',
          }}
          data-animate
        >
          {/* Pattern bg */}
          <div className="absolute inset-0 pattern-bg opacity-[0.04]" />

          {/* Gold corner ornament */}
          <div className="absolute top-0 right-0 w-40 h-40 opacity-20">
            <svg viewBox="0 0 160 160" fill="none">
              <path d="M0 0L160 0L160 160" fill="none" stroke="#D4AF37" strokeWidth="1"/>
              <path d="M40 0L160 0L160 120" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
              <path d="M80 0L160 0L160 80" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
            {/* Photo */}
            <div className="flex-shrink-0 relative">
              <div
                className="w-44 h-56 md:w-52 md:h-64 overflow-hidden rounded-2xl"
                style={{
                  border: '2px solid rgba(212,175,55,0.4)',
                  boxShadow: '0 0 40px rgba(212,175,55,0.1)',
                }}
              >
                <img
                  src="/assets/poster-hero.jpeg"
                  alt="Maya Meyzy — Branch Manager Banggai"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '90% 5%', transform: 'scale(2.6)', transformOrigin: '90% 15%' }}
                />
              </div>
              {/* Gold dot accent */}
              <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #C9A227, #F5DD81)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#111">
                  <path d="M12 2l2.5 6H21l-5.5 4 2 6.5L12 15l-5.5 3.5 2-6.5L3 8h6.5L12 2z"/>
                </svg>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-goldink text-xs tracking-[0.35em] uppercase font-semibold font-body mb-3">
                Konsultan Perjalanan Ibadah Anda
              </p>

              <h2 className="font-heading font-semibold text-ink text-[2.4rem] md:text-[3rem] leading-[1.05] mb-1">Maya Meyzy</h2>
              <p className="text-goldink text-base font-semibold font-body mb-1">Branch Manager</p>
              <p className="text-ink-subtle text-sm font-body mb-6">Isra Amanah Internasional — Cabang Banggai</p>

              {/* Divider */}
              <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
                <div className="h-px w-10 bg-gold/30" />
                <svg width="10" height="10" viewBox="0 0 10 10" className="text-gold/50">
                  <path d="M5 0L10 5L5 10L0 5Z" fill="currentColor"/>
                </svg>
                <div className="h-px w-10 bg-gold/30" />
              </div>

              {/* Quote */}
              <blockquote className="text-ink-muted text-base md:text-lg leading-relaxed font-body mb-8 italic max-w-xl">
                "Saya siap membantu perjalanan ibadah Anda ke Baitullah & Al-Aqsa. Mari kita wujudkan niat suci Anda bersama — dengan hati yang ikhlas dan pelayanan yang amanah."
              </blockquote>

              {/* CTA */}
              <a
                href={getWALink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa inline-flex"
              >
                <WhatsAppIcon />
                Chat Langsung dengan Maya
              </a>

              {/* Phone */}
              <p className="text-ink-subtle text-sm font-body mt-4">
                WA: <span className="text-ink font-semibold">0857-5735-8682</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
