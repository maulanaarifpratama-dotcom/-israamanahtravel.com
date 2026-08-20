import { useState, useRef } from 'react'
import { getWALink } from '../lib/wa'
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

const TESTIMONI: Clip = {
  slug: 'testimoni',
  label: 'Testimoni Hajah Ningsih',
  meta: 'Jamaah Umroh Isra Amanah',
  w: 476, h: 848,
}

function PlayIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="#111" aria-hidden="true">
      <path d="M10 7l14 7-14 7V7z" />
    </svg>
  )
}

function VideoCard({
  clip,
  featured = false,
  captionInFrame = true,
}: {
  clip: Clip
  featured?: boolean
  /** Off for clips whose own frame already carries burned-in titling. */
  captionInFrame?: boolean
}) {
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
        /* contain, not cover: these frames carry burned-in logos, licence
           numbers and subtitles right up to the edge, and sub-pixel rounding
           on a "matched" ratio is enough to shave them. */
        className="absolute inset-0 w-full h-full object-contain"
        onPlay={() => setPlaying(true)}
        onEnded={() => {
          setPlaying(false)
          if (videoRef.current) videoRef.current.currentTime = 0
        }}
      >
        <source src={`/assets/video/${clip.slug}.mp4`} type="video/mp4" />
        Browser Anda tidak mendukung video.
      </video>

      <button
        type="button"
        onClick={play}
        aria-label={`Putar video: ${clip.label}`}
        className={`absolute inset-0 z-10 w-full flex flex-col items-center justify-center group transition-opacity duration-300 ${
          playing ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{
          /* A light even wash when the frame has its own titling, so the
             existing branding stays readable underneath. */
          background: captionInFrame
            ? 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 42%, rgba(0,0,0,0.35) 100%)'
            : 'rgba(0,0,0,0.26)',
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

        {captionInFrame && (
          <span className="absolute inset-x-0 bottom-0 p-4 text-center">
            <span className={`block font-heading font-semibold text-white leading-tight ${featured ? 'text-xl sm:text-2xl' : 'text-base'}`}>
              {clip.label}
            </span>
            <span className="block text-gold text-[11px] font-body mt-0.5">{clip.meta}</span>
          </span>
        )}
      </button>
    </div>
  )
}

function QuoteMark() {
  return (
    <svg width="34" height="26" viewBox="0 0 34 26" fill="currentColor" className="text-gold/45" aria-hidden="true">
      <path d="M0 26V14.6C0 6.9 4.6 1.4 12.4 0l1.5 4.2c-4 1.3-6.2 4-6.4 7.5H13V26H0zm20 0V14.6C20 6.9 24.6 1.4 32.4 0l1.5 4.2c-4 1.3-6.2 4-6.4 7.5H33V26H20z"/>
    </svg>
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
          sub="Rekaman asli perjalanan, pendampingan, dan testimoni jamaah Isra Amanah Internasional."
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

        {/* Testimonial gets its own block: the clip is edge-to-edge branded
            graphics, so the quote lives beside the video rather than on it. */}
        <div
          className="mt-10 rounded-2xl p-6 sm:p-8"
          style={{
            background: 'linear-gradient(135deg, rgba(212,175,55,0.1), rgba(212,175,55,0.035))',
            border: '1px solid rgba(212,175,55,0.28)',
          }}
          data-animate
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-7 sm:gap-9 items-center">
            <div className="md:col-span-4">
              <div className="max-w-[236px] mx-auto">
                <VideoCard clip={TESTIMONI} captionInFrame={false} />
              </div>
            </div>

            <figure className="md:col-span-8 text-center md:text-left">
              <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold font-body mb-4">
                Testimoni Jamaah
              </p>

              <div className="flex justify-center md:justify-start mb-3">
                <QuoteMark />
              </div>

              <blockquote className="font-heading italic font-medium text-white text-2xl sm:text-3xl leading-[1.3]">
                Isra Amanah Internasional ini sangat baik, pelayanannya cukup baik.
              </blockquote>

              <figcaption className="mt-5">
                <span className="block font-body font-bold text-white text-base">Hajah Ningsih</span>
                <span className="block text-white/65 text-sm font-body">Jamaah Umroh Isra Amanah</span>
              </figcaption>

              <a
                href={getWALink('Konsultasi setelah melihat testimoni')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa mt-6 text-sm py-3.5"
              >
                Konsultasi dengan Maya
              </a>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
