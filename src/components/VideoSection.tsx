import { useState, useRef } from 'react'
import { SectionTitle } from './Services'

function PlayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="#111">
      <path d="M10 7l14 7-14 7V7z" />
    </svg>
  )
}

function VideoCard({
  src,
  label,
  sublabel,
  featured = false,
}: {
  src: string
  label: string
  sublabel?: string
  featured?: boolean
}) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  function handlePlay() {
    setPlaying(true)
    videoRef.current?.play()
  }

  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{ border: `1px solid rgba(212,175,55,${featured ? '0.3' : '0.15'})` }}
      data-animate
    >
      <div className="relative w-full aspect-video bg-dark-800">
        {/* Custom overlay — shown before play. A real <button> so it is
            reachable by keyboard and announced correctly. */}
        {!playing && (
          <button
            type="button"
            onClick={handlePlay}
            aria-label={`Putar video: ${label}`}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 cursor-pointer group w-full"
            style={{ background: 'linear-gradient(145deg, #0e0e0e 0%, #1a1400 60%, #0e0e0e 100%)' }}
          >
            {/* Subtle pattern */}
            <div className="absolute inset-0 pattern-bg opacity-[0.06]" />

            {/* Gold ring + play button */}
            <div className="relative">
              <div
                className="rounded-full transition-transform duration-300 ease-out group-hover:scale-110"
                style={{
                  width: featured ? 72 : 60,
                  height: featured ? 72 : 60,
                  background: 'linear-gradient(135deg, #C9A227, #F5DD81)',
                  boxShadow: '0 0 40px rgba(212,175,55,0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <PlayIcon />
              </div>
              {/* Pulse ring */}
              <div
                className="absolute inset-0 rounded-full animate-ping opacity-20"
                style={{ background: 'rgba(212,175,55,0.4)' }}
              />
            </div>

            {/* Label */}
            <div className="relative text-center px-6">
              <p className="text-white/85 text-sm font-semibold font-body">{label}</p>
              {sublabel && (
                <p className="text-white/60 text-xs font-body mt-1">{sublabel}</p>
              )}
            </div>

            {/* Bottom border glow */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px]"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)' }}
            />
          </button>
        )}

        <video
          ref={videoRef}
          controls
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
            playing ? 'opacity-100' : 'opacity-0'
          }`}
          preload="none"
          aria-label={label}
          onPlay={() => setPlaying(true)}
          onPause={() => {}}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

function ComingSoonCard() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-4 p-8 text-center aspect-video"
      style={{
        background: 'rgba(212,175,55,0.03)',
        border: '1px dashed rgba(212,175,55,0.2)',
      }}
      data-animate
    >
      <div className="absolute inset-0 pattern-bg opacity-[0.03]" />
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-gold/60 relative z-10" aria-hidden="true">
        <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 12l10 6-10 6V12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <div className="relative z-10">
        <p className="text-white/70 text-sm font-semibold font-body">Konten video segera hadir</p>
        <p className="text-white/55 text-xs font-body mt-1">Testimoni & highlight perjalanan jamaah</p>
      </div>
    </div>
  )
}

export default function VideoSection() {
  // #galeri now belongs to the photo Gallery; this section is the video.
  return (
    <section id="video" className="bg-dark-900 py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          dark
          label="Video Profil"
          title="Kenali Isra Amanah Lebih Dekat"
          sub="Saksikan pengalaman nyata perjalanan ibadah bersama Isra Amanah Internasional."
        />

        <div className="flex flex-col gap-5">
          {/* Main video — full width */}
          <VideoCard
            src="/assets/video-promo.mp4"
            label="Video Promo Isra Amanah Internasional"
            sublabel="Klik untuk memutar"
            featured
          />

          {/* Secondary row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <VideoCard
              src="/assets/video-promo2.mp4"
              label="Testimoni Jamaah"
              sublabel="Klik untuk memutar"
            />
            <ComingSoonCard />
          </div>
        </div>
      </div>
    </section>
  )
}
