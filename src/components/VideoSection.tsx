import { SectionTitle } from './Services'

export default function VideoSection() {
  return (
    <section className="bg-dark-900 py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          dark
          label="Galeri & Testimoni"
          title="Lihat Perjalanan Jamaah Kami"
          sub="Saksikan pengalaman nyata perjalanan ibadah bersama Isra Amanah Internasional."
        />

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" data-animate>
          {/* Main video */}
          <div
            className="md:col-span-2 relative rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(212,175,55,0.2)' }}
          >
            <video
              controls
              poster="/assets/poster-services.jpeg"
              className="w-full aspect-video object-cover bg-dark-800"
              preload="none"
              aria-label="Video promo Isra Amanah Internasional"
            >
              <source src="/assets/video-promo.mp4" type="video/mp4" />
              Browser Anda tidak mendukung video.
            </video>
          </div>

          {/* Secondary video */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(212,175,55,0.15)' }}
          >
            <video
              controls
              poster="/assets/poster-hero.jpeg"
              className="w-full aspect-video object-cover bg-dark-800"
              preload="none"
              aria-label="Video testimoni jamaah"
            >
              <source src="/assets/video-promo2.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Placeholder for more content */}
          <div
            className="relative rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-4 p-8 text-center"
            style={{
              background: 'rgba(212,175,55,0.04)',
              border: '1px dashed rgba(212,175,55,0.25)',
              aspectRatio: '16/9',
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-gold/40">
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M16 14l12 6-12 6V14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <div>
              <p className="text-white/40 text-sm font-semibold font-body">Konten video segera hadir</p>
              <p className="text-white/25 text-xs font-body mt-1">Testimoni & highlight perjalanan jamaah</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
