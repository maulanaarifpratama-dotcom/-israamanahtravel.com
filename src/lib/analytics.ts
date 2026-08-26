/**
 * WhatsApp lead tracking.
 *
 * Every WhatsApp CTA on the site is a plain <a href="https://wa.me/...">, so
 * rather than bolting an onClick onto each of the ten of them across seven
 * components, this attaches one delegated listener. Links added later are
 * covered automatically and cannot be forgotten.
 */

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const GOOGLE_ADS_ID = 'AW-18402557370'

/** Label for the "Contact" conversion action in Google Ads. */
const ADS_CONVERSION_LABEL = 'ZjAMCOPNqeUcELr7gsdE'

/** The conversion action is configured as "if there's no value, use IDR 1". */
const ADS_CONVERSION_VALUE = 1.0
const ADS_CONVERSION_CURRENCY = 'IDR'

const WA_LINK_SELECTOR = 'a[href^="https://wa.me/"]'

/** Where the click came from, for reporting which CTA actually earns leads. */
function resolveSource(link: HTMLAnchorElement): string {
  const explicit = link.dataset.waSource
  if (explicit) return explicit

  const section = link.closest('section[id]')
  if (section) return section.id

  if (link.closest('footer')) return 'footer'

  return 'unknown'
}

export function trackWhatsAppClick(source: string, item?: string): void {
  const gtag = window.gtag
  if (typeof gtag !== 'function') return

  // GA4: `generate_lead` is a recommended event, so it reports natively
  // instead of needing a custom definition.
  //
  // transport_type beacon matters here: most of this traffic is mobile, and
  // tapping a wa.me link hands off to the WhatsApp app, which can background
  // the page before a normal request flushes. sendBeacon survives that.
  gtag('event', 'generate_lead', {
    method: 'whatsapp',
    link_location: source,
    transport_type: 'beacon',
    ...(item ? { item_name: item } : {}),
  })

  if (ADS_CONVERSION_LABEL) {
    gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${ADS_CONVERSION_LABEL}`,
      value: ADS_CONVERSION_VALUE,
      currency: ADS_CONVERSION_CURRENCY,
    })
  }
}

/** Attaches the delegated listener. Returns its cleanup function. */
export function initWhatsAppTracking(): () => void {
  function onClick(e: MouseEvent) {
    const target = e.target
    if (!(target instanceof Element)) return

    // Clicks land on the icon or label inside the anchor, not the anchor.
    const link = target.closest<HTMLAnchorElement>(WA_LINK_SELECTOR)
    if (!link) return

    trackWhatsAppClick(resolveSource(link), link.dataset.waItem)
  }

  document.addEventListener('click', onClick)
  return () => document.removeEventListener('click', onClick)
}
