const WA_NUMBER = '6285757358682'

export function getWALink(packageName?: string): string {
  const text = packageName
    ? `Assalamualaikum Kak Maya, saya tertarik dengan paket *${packageName}* dari Isra Amanah Internasional Cabang Banggai. Mohon info lebih lanjut 🙏`
    : `Assalamualaikum Kak Maya, saya ingin bertanya tentang paket umroh/haji Isra Amanah Internasional Cabang Banggai 🙏`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}
