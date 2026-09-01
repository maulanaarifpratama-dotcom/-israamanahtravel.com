import { useEffect, useRef, useState } from 'react'
import {
  csSections,
  csClosingKeys,
  csTemplateCount,
  type CsCard,
  type TemplateCard,
} from '../data/csTemplates'

/* ── Copy ──────────────────────────────────────────────────────────────────
   navigator.clipboard is not dependable on every mobile browser: it needs a
   secure context, it can be missing entirely, and it rejects outright in some
   in-app webviews (Instagram, Facebook) — which is exactly where a CS person
   will be working. So there is a second path using a temporary textarea. The
   readOnly + setSelectionRange dance is what makes that work on iOS Safari,
   which otherwise refuses to select a programmatically focused field. */
async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    /* fall through to the textarea path */
  }

  try {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.readOnly = true
    ta.style.position = 'fixed'
    ta.style.top = '0'
    ta.style.left = '0'
    ta.style.opacity = '0'
    ta.style.pointerEvents = 'none'
    document.body.appendChild(ta)
    ta.focus()
    ta.select()
    ta.setSelectionRange(0, text.length)
    const ok = document.execCommand('copy')
    document.body.removeChild(ta)
    return ok
  } catch {
    return false
  }
}

/** Renders **bold** without innerHTML. */
function RichText({ value }: { value: string }) {
  return (
    <>
      {value.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i} className="text-goldink">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

/** Highlights the [bagian] a CS person must replace before sending. */
function ReplyBody({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\[[^\]]+\])/g).map((part, i) =>
        part.startsWith('[') && part.endsWith(']') ? (
          <mark
            key={i}
            className="rounded px-1 font-semibold"
            style={{ background: 'rgba(212,175,55,0.32)', color: '#5C4910' }}
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

type CopyState = 'idle' | 'done' | 'failed'

function TemplateBlock({ card }: { card: TemplateCard }) {
  const [state, setState] = useState<CopyState>('idle')
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function onCopy() {
    const ok = await copyText(card.text)
    setState(ok ? 'done' : 'failed')
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setState('idle'), ok ? 1600 : 4000)
  }

  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_4px_18px_rgba(60,45,10,0.08)] ring-1 ring-cs-line">
      <span
        className="mb-2.5 inline-block rounded-full px-3 py-1.5 text-[13px] font-bold text-goldink"
        style={{ background: 'rgba(212,175,55,0.16)' }}
      >
        {card.situation}
      </span>

      {/* Selectable, so manual select-and-hold still works as a last resort. */}
      <div
        className="select-text whitespace-pre-line rounded-xl border border-cs-line px-3.5 py-3 text-[15.5px] leading-relaxed text-ink"
        style={{ background: '#FBF6E7' }}
      >
        <ReplyBody text={card.text} />
      </div>

      <button
        type="button"
        onClick={onCopy}
        className="mt-3 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl text-[16px] font-bold text-white transition-colors duration-150 active:scale-[0.99]"
        style={{ background: state === 'done' ? '#7A6117' : '#12855F' }}
      >
        {state === 'done' ? '✓ Tersalin!' : state === 'failed' ? '⚠️ Gagal — tahan teks di atas' : '📋 Salin'}
      </button>

      {state === 'failed' && (
        <p className="mt-2 text-center text-[12.5px] text-ink-muted">
          Tahan (long-press) teks di atas → Pilih Semua → Salin.
        </p>
      )}

      {card.fill && (
        <p className="mt-2 text-[12.5px] font-medium text-goldink">
          ✏️ {card.fill}
        </p>
      )}
      {card.warn && (
        <p className="mt-2 text-[12.5px] font-semibold" style={{ color: '#A3271A' }}>
          ⚠️ {card.warn}
        </p>
      )}
      {card.hint && <p className="mt-2 text-[12.5px] text-ink-muted">{card.hint}</p>}
      {card.note && <p className="mt-2 text-[12.5px] text-ink-muted">{card.note}</p>}
    </div>
  )
}

function TipsBlock({ card }: { card: Extract<CsCard, { kind: 'tips' }> }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_4px_18px_rgba(60,45,10,0.08)] ring-1 ring-cs-line">
      <h3 className="mb-2.5 text-[15px] font-bold text-goldink">{card.title}</h3>
      <ul className="list-disc space-y-2 pl-5">
        {card.items.map((item) => (
          <li key={item} className="text-[15px] leading-snug text-ink">
            <RichText value={item} />
          </li>
        ))}
      </ul>
      {card.note && <p className="mt-2.5 text-[12.5px] text-ink-muted">{card.note}</p>}
    </div>
  )
}

export default function CsPage() {
  // Internal staff tool: keep it out of search results. The header set in
  // vercel.json is the real guard; this covers local and preview builds too.
  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Contekan Chat CS — Isra Amanah'

    // index.html already ships <meta name="robots" content="index, follow">.
    // Appending a second one leaves two conflicting directives, so flip the
    // existing tag instead and put it back on unmount.
    const existing = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
    const prevRobots = existing?.content ?? null
    let injected: HTMLMetaElement | null = null

    if (existing) {
      existing.content = 'noindex, nofollow'
    } else {
      injected = document.createElement('meta')
      injected.name = 'robots'
      injected.content = 'noindex, nofollow'
      document.head.appendChild(injected)
    }

    return () => {
      document.title = prevTitle
      if (existing && prevRobots !== null) existing.content = prevRobots
      injected?.remove()
    }
  }, [])

  return (
    <main className="min-h-screen bg-cream text-ink">
      <div className="mx-auto max-w-2xl px-4 pb-20">
        <header className="pt-9 pb-4 text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-goldink">
            Isra Amanah Internasional · Cabang Banggai
          </p>
          <h1 className="mt-2 font-heading text-[2.15rem] font-semibold leading-[1.08]">
            Contekan Chat CS
          </h1>
          <p className="mt-1.5 text-[15px] text-ink-muted">
            Buat Teh Maya — tinggal <strong className="text-ink">Salin</strong>, lalu{' '}
            <strong className="text-ink">Tempel</strong>. Semudah itu 🤍
          </p>
          <p className="mt-1 text-[13px] text-ink-subtle">{csTemplateCount} balasan siap pakai</p>
        </header>

        <div className="rounded-2xl bg-white p-4 shadow-[0_4px_18px_rgba(60,45,10,0.08)] ring-1 ring-cs-line">
          <h2 className="mb-3 text-[16px] font-bold">📌 Cara pakai (gampang kok)</h2>
          <ol className="space-y-2.5">
            {[
              <>
                Cari <strong className="text-goldink">situasinya</strong> di bawah (misal ada yang
                komen "berapa?").
              </>,
              <>
                Pencet tombol hijau <strong className="text-goldink">Salin</strong>.
              </>,
              <>
                Buka WhatsApp / kolom komentar →{' '}
                <strong className="text-goldink">tahan layar sebentar</strong> → pilih{' '}
                <strong className="text-goldink">Tempel (Paste)</strong> → Kirim ✅
              </>,
            ].map((body, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="flex h-7 w-7 flex-none items-center justify-center rounded-full text-[15px] font-bold text-dark-900"
                  style={{ background: '#D4AF37' }}
                >
                  {i + 1}
                </span>
                <p className="pt-0.5 text-[15px] leading-snug">{body}</p>
              </li>
            ))}
          </ol>
        </div>

        <nav
          className="sticky top-0 z-10 -mx-4 mt-5 flex gap-2 overflow-x-auto px-4 py-3 bg-cream"
          aria-label="Pintasan bagian"
        >
          {csSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex flex-none items-center whitespace-nowrap rounded-xl bg-white px-3.5 min-h-[44px] text-[14px] font-semibold text-ink ring-1 ring-cs-line active:bg-gold"
            >
              {s.emoji} {s.navLabel}
            </a>
          ))}
        </nav>

        {csSections.map((section) => (
          <section key={section.id} id={section.id} className="mt-7 scroll-mt-[70px]">
            <div className="mb-3.5 flex items-center gap-2.5">
              <span className="text-[26px]" aria-hidden="true">
                {section.emoji}
              </span>
              <div>
                <h2 className="font-heading text-[1.35rem] font-semibold leading-tight">
                  {section.title}
                </h2>
                <p className="text-[13px] text-ink-muted">{section.sub}</p>
              </div>
            </div>

            <div className="space-y-3.5">
              {section.cards.map((card, i) =>
                card.kind === 'template' ? (
                  <TemplateBlock key={card.situation} card={card} />
                ) : (
                  <TipsBlock key={`${section.id}-tips-${i}`} card={card} />
                ),
              )}
            </div>
          </section>
        ))}

        <footer className="mt-9 rounded-2xl bg-white p-4 shadow-[0_4px_18px_rgba(60,45,10,0.08)] ring-1 ring-cs-line">
          <h2 className="mb-2.5 text-[16px] font-bold">🔑 3 Kunci biar closing</h2>
          <ul className="list-disc space-y-2 pl-5">
            {csClosingKeys.map((k) => (
              <li key={k} className="text-[14.5px] leading-snug">
                <RichText value={k} />
              </li>
            ))}
          </ul>
        </footer>

        <p className="mt-6 text-center text-[13px] text-ink-subtle">
          Isra Amanah Internasional · Cabang Banggai 🕋
          <br />
          Melayani sepenuh hati.
        </p>
      </div>
    </main>
  )
}
