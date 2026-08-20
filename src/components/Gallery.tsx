import { useState, useEffect, useRef, useCallback } from 'react'
import { gallery, type GalleryItem } from '../data/gallery'
import { SectionTitle } from './Services'

const SRC = (slug: string, size: 'sm' | 'lg') => `/assets/gallery/${slug}-${size}.webp`

function ZoomIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="7.6" cy="7.6" r="5.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11.6 11.6L16 16M7.6 5.2v4.8M5.2 7.6h4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function ArrowIcon({ dir }: { dir: 'prev' | 'next' }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"
      style={{ transform: dir === 'next' ? 'rotate(180deg)' : undefined }}>
      <path d="M13.5 4L6.5 11l7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

/* ── Lightbox ───────────────────────────────────────────────────────────── */

function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[]
  index: number
  onClose: () => void
  onNavigate: (next: number) => void
}) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [shown, setShown] = useState(false)
  const item = items[index]

  // Enter on the next frame so the transition actually runs from its start state.
  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true))
    return () => cancelAnimationFrame(id)
  }, [])

  // Move focus in, and lock background scroll without the layout shifting.
  useEffect(() => {
    closeRef.current?.focus()
    const { overflow, paddingRight } = document.body.style
    const gap = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (gap > 0) document.body.style.paddingRight = `${gap}px`
    return () => {
      document.body.style.overflow = overflow
      document.body.style.paddingRight = paddingRight
    }
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); return }
      if (e.key === 'ArrowLeft') { e.preventDefault(); onNavigate((index - 1 + items.length) % items.length); return }
      if (e.key === 'ArrowRight') { e.preventDefault(); onNavigate((index + 1) % items.length); return }
      // Keep Tab inside the dialog — no escaping into the page behind.
      if (e.key === 'Tab') {
        const f = panelRef.current?.querySelectorAll<HTMLElement>('button')
        if (!f || f.length === 0) return
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [index, items.length, onClose, onNavigate])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Galeri: ${item.title}`}
    >
      {/* Backdrop. Deliberately not a button: Escape and the visible close
          control already serve keyboard users, and a second focusable
          "Tutup galeri" would just duplicate that in the tab order. */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 cursor-zoom-out"
        style={{
          background: 'rgba(6,6,6,0.92)',
          backdropFilter: 'blur(6px)',
          opacity: shown ? 1 : 0,
          transition: 'opacity 220ms var(--ease-out)',
        }}
      />

      <div
        ref={panelRef}
        className="relative z-10 flex flex-col items-center gap-4 max-h-full"
        style={{
          opacity: shown ? 1 : 0,
          /* 0.96, never 0 — things should not appear out of nothing. */
          transform: shown ? 'scale(1)' : 'scale(0.96)',
          transition: 'opacity 240ms var(--ease-out), transform 240ms var(--ease-out)',
        }}
      >
        {/* Controls */}
        <div className="flex items-center justify-between w-full gap-3">
          <p className="text-white/60 text-xs font-body tabular-nums">
            {index + 1} / {items.length}
          </p>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Tutup galeri"
            className="w-11 h-11 rounded-full flex items-center justify-center text-white/85 hover:text-white transition-all duration-200 active:scale-[0.97]"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Image */}
        <img
          src={SRC(item.slug, 'lg')}
          alt={item.alt}
          width={item.w}
          height={item.h}
          className="rounded-xl"
          style={{
            /* width/height attrs are presentational hints; without resetting
               them to auto the box keeps its attribute width while max-height
               clamps it, so the frame letterboxes and the border no longer
               hugs the photo. */
            width: 'auto',
            height: 'auto',
            maxHeight: 'min(66vh, 860px)',
            maxWidth: '100%',
            border: '1px solid rgba(212,175,55,0.28)',
          }}
        />

        {/* Caption + paging */}
        <div className="flex items-center gap-3 sm:gap-5 w-full justify-center">
          <button
            onClick={() => onNavigate((index - 1 + items.length) % items.length)}
            aria-label="Foto sebelumnya"
            className="w-11 h-11 flex-shrink-0 rounded-full flex items-center justify-center text-white/85 hover:text-gold transition-all duration-200 active:scale-[0.97]"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}
          >
            <ArrowIcon dir="prev" />
          </button>

          <div className="text-center min-w-0">
            <p className="font-heading font-semibold text-white text-xl sm:text-2xl leading-tight">{item.title}</p>
            <p className="text-gold text-xs sm:text-sm font-body mt-0.5">{item.meta}</p>
          </div>

          <button
            onClick={() => onNavigate((index + 1) % items.length)}
            aria-label="Foto berikutnya"
            className="w-11 h-11 flex-shrink-0 rounded-full flex items-center justify-center text-white/85 hover:text-gold transition-all duration-200 active:scale-[0.97]"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}
          >
            <ArrowIcon dir="next" />
          </button>
        </div>
      </div>
    </div>
  )
}

/* ── Tile ───────────────────────────────────────────────────────────────── */

function Tile({
  item,
  onOpen,
  priority = false,
  sizes,
  ratio,
  focal,
  maxH,
}: {
  item: GalleryItem
  onOpen: () => void
  priority?: boolean
  sizes: string
  /** Override the natural ratio (lead frame only) — CSS aspect-ratio value. */
  ratio?: string
  /** Focal point to protect when `ratio` crops the frame. */
  focal?: string
  maxH?: number
}) {
  return (
    <button
      onClick={onOpen}
      aria-label={`Perbesar foto: ${item.title}`}
      className="group relative block w-full overflow-hidden rounded-xl cursor-zoom-in transition-transform duration-300 ease-out hover:-translate-y-1 active:scale-[0.99]"
      style={{ border: '1px solid rgba(212,175,55,0.2)' }}
    >
      <img
        src={SRC(item.slug, 'sm')}
        srcSet={`${SRC(item.slug, 'sm')} 640w, ${SRC(item.slug, 'lg')} 1400w`}
        sizes={sizes}
        alt={item.alt}
        width={item.w}
        height={item.h}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        /* Locked ratio: the box is reserved before the file arrives. */
        style={{
          aspectRatio: ratio ?? `${item.w} / ${item.h}`,
          objectPosition: focal,
          maxHeight: maxH,
        }}
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />

      {/* Caption scrim */}
      <div
        className="absolute inset-x-0 bottom-0 p-4 text-left pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.45) 55%, transparent 100%)' }}
      >
        <p className="font-heading font-semibold text-white text-lg leading-tight">{item.title}</p>
        <p className="text-gold text-[11px] font-body mt-0.5">{item.meta}</p>
      </div>

      {/* Zoom affordance — hover on pointer devices, always legible without it */}
      <span
        className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200"
        style={{ background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.25)' }}
      >
        <ZoomIcon />
      </span>
    </button>
  )
}

/* ── Section ────────────────────────────────────────────────────────────── */

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const openAt = useCallback((i: number) => {
    triggerRef.current = document.activeElement as HTMLElement
    setOpen(i)
  }, [])

  // Return focus to the tile that opened the lightbox.
  const close = useCallback(() => {
    setOpen(null)
    triggerRef.current?.focus()
  }, [])

  const [lead, ...rest] = gallery

  return (
    <section id="galeri" className="bg-dark-900 py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          dark
          label="Dokumentasi Perjalanan"
          title="Jejak Jamaah Kami di Tanah Para Nabi"
          sub="Foto asli perjalanan jamaah Isra Amanah — Al-Quds, Masjidil Aqsa, hingga Petra dan Ashabul Kahfi di Yordania."
        />

        {/* Lead frame */}
        <div className="mb-4 sm:mb-5" data-animate>
          {/* Cinematic crop: the source is 4:3 with a lot of empty sky, which
              at full width is ~830px of mostly nothing. The focal point keeps
              the skyline and the group; only sky is discarded. */}
          <Tile
            item={lead}
            priority
            ratio="16 / 9"
            focal="center 60%"
            maxH={520}
            sizes="(min-width: 1152px) 1104px, 92vw"
            onOpen={() => openAt(0)}
          />
        </div>

        {/* Masonry — natural ratios, so no faces get cropped out of group photos */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5" data-animate>
          {rest.map((item, i) => (
            <div key={item.slug} className="mb-4 sm:mb-5 break-inside-avoid">
              <Tile
                item={item}
                sizes="(min-width: 1024px) 352px, (min-width: 640px) 45vw, 92vw"
                onOpen={() => openAt(i + 1)}
              />
            </div>
          ))}
        </div>

        {/* Route gallery interest into the package these photos are proof of */}
        <div
          className="mt-10 rounded-2xl px-6 py-7 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left"
          style={{
            background: 'linear-gradient(135deg, rgba(212,175,55,0.11), rgba(212,175,55,0.04))',
            border: '1px solid rgba(212,175,55,0.3)',
          }}
          data-animate
        >
          <div>
            <p className="font-heading font-semibold text-white text-2xl leading-tight">
              Semua ini ada di paket Umroh Plus Aqso
            </p>
            <p className="text-white/70 text-sm font-body mt-1.5">
              Al-Quds, Masjidil Aqsa, Kubah Shakhrah, hingga ziarah Yordania — dalam satu perjalanan.
            </p>
          </div>
          <a href="#paket" className="btn-outline-gold on-dark flex-shrink-0 whitespace-nowrap">
            Lihat Paket
          </a>
        </div>
      </div>

      {open !== null && (
        <Lightbox
          items={gallery}
          index={open}
          onClose={close}
          onNavigate={setOpen}
        />
      )}
    </section>
  )
}
