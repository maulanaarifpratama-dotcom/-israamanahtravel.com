import { useState, useRef } from 'react'
import { SectionTitle } from './Services'

interface Clip {
  slug: string
  label: string
  meta: string
  /** Intrinsic size — the card takes the clip's own ratio, so nothing is cropped. */
  w: number
  h: number
}

const FEATURED: Clip = {
  slug: 'jamaah-kebersamaan',
  label: 'Kebersamaan Jamaah Isra Amanah',
  meta: 'Dokumentasi perjalanan',
  w: 848, h: 478,
}

const CLIPS: Clip[] = [
  {
    slug: 'pendampingan-tim',
    label: 'Pendampingan Tim Isra Amanah',
    meta: 'Bersama jamaah sepanjang perjalanan',
    w: 640, h: 360,
  },
  {
    slug: 'momen-tanah-suci',
    label: 'Momen Jamaah di Tanah Suci',
    meta: 'Rekaman langsung dari jamaah',
    w: 478, h: 850,
  },
]

function PlayIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="#111" aria-hidden="true">
      <path d="M10 7l14 7-14 7V7z" />
    </svg>
  )
}

function VideoCard({ clip, featured = false }: { clip: Clip; featured?: boolean }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  function play() {
    setPlaying(true)
    videoRef.current?.play()
  }

  const btn = featured ? 74 : 58

  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-dark-800"
      style={{
        aspectRatio: `${clip.w} / ${clip.h}`,
        border: `1px solid rgba(212,175,55,${featured ? '0.3' : '0.18'})`,
      }}
      data-animate
    >
      <video
        ref={videoRef}
        /* Only after playback starts — otherwise Chrome paints its control bar
           over the poster and collides with the caption. */
        controls={playing}
        poster={`/assets/video/${clip.slug}.jpg`}
        preload="none"
        aria-label={clip.label}
        className="absolute inset-0 w-full h-full object-cover"
        onPlay={() => setPlaying(true)}
        /* Rewind and restore the overlay so the card returns to its poster
           state and can simply be played again. */
        onEnded={() => {
          setPlaying(false)
          if (videoRef.current) videoRef.current.currentTime = 0
        }}
      >
        <source src={`/assets/video/${clip.slug}.mp4`} type="video/mp4" />
        Browser Anda tidak mendukung video.
      </video>

      {/* Overlay sits on the real poster frame rather than hiding it, and gets
          out of the way (including for the pointer) once playback starts. */}
      <button
        type="button"
        onClick={play}
        aria-label={`Putar video: ${clip.label}`}
        className={`absolute inset-0 z-10 w-full flex flex-col items-center justify-center group transition-opacity duration-300 ${
          playing ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 42%, rgba(0,0,0,0.35) 100%)',
        }}
      >
        <span className="relative flex items-center justify-center">
          <span
            className="absolute inset-0 rounded-full animate-ping"
            style={{ background: 'rgba(212,175,55,0.35)' }}
          />
          <span
            className="relative rounded-full flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110"
            style={{
              width: btn,
              height: btn,
              background: 'linear-gradient(135deg, #C9A227, #F5DD81)',
              boxShadow: '0 0 34px rgba(212,175,55,0.45)',
            }}
          >
            <PlayIcon size={featured ? 30 : 24} />
          </span>
        </span>

        <span className="absolute inset-x-0 bottom-0 p-4 text-center">
          <span className={`block font-heading font-semibold text-white leading-tight ${featured ? 'text-xl sm:text-2xl' : 'text-base'}`}>
            {clip.label}
          </span>
          <span className="block text-gold text-[11px] font-body mt-0.5">{clip.meta}</span>
        </span>
      </button>
    </div>
  )
}

export default function VideoSection() {
  // #galeri belongs to the photo Gallery; this section is the video.
  return (
    <section id="video" className="bg-dark-900 py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          dark
          label="Video Profil"
          title="Kenali Isra Amanah Lebih Dekat"
          sub="Rekaman asli perjalanan dan pendampingan jamaah Isra Amanah Internasional."
        />

        <div className="flex flex-col gap-4 sm:gap-5">
          <VideoCard clip={FEATURED} featured />

          {/* 8/4 split: the landscape clip and the portrait clip keep their own
              ratios instead of being forced into one shared 16:9 frame. */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-start">
            <div className="md:col-span-8">
              <VideoCard clip={CLIPS[0]} />
            </div>
            <div className="md:col-span-4">
              <VideoCard clip={CLIPS[1]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
