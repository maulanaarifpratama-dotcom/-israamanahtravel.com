/**
 * Contekan Chat CS — isi lengkap dari PDF "Contekan-Chat-CS-Isra-Amanah".
 *
 * Semua teks balasan tinggal di file ini, jadi mengubah kalimat tidak perlu
 * menyentuh komponen. Tanda **tebal** dipakai di daftar tips dan dirender
 * tanpa innerHTML.
 */

export interface TemplateCard {
  kind: 'template'
  situation: string
  text: string
  /** Catatan kecil di bawah tombol. */
  hint?: string
  /** Pengingat mengisi bagian [dalam kurung]. */
  fill?: string
  /** Peringatan penting — ditampilkan merah. */
  warn?: string
  note?: string
}

export interface TipsCard {
  kind: 'tips'
  title: string
  items: string[]
  note?: string
}

export type CsCard = TemplateCard | TipsCard

export interface CsSection {
  id: string
  emoji: string
  navLabel: string
  title: string
  sub: string
  cards: CsCard[]
}

const WA = '0857-5735-8682'

export const csSections: CsSection[] = [
  {
    id: 'komentar',
    emoji: '💬',
    navLabel: 'Komentar',
    title: 'Balas Komentar',
    sub: 'Di postingan / iklan. Singkat, ramah, ajak ke WA.',
    cards: [
      {
        kind: 'template',
        situation: 'Komen: "berapa?" / "info" / "harga"',
        text: `Alhamdulillah, terima kasih Kak 🙏 Info paket & harga lengkap kami kirim via WhatsApp ya 👉 chat ${WA} 🕋`,
      },
      {
        kind: 'template',
        situation: 'Komen: "minat" / "mau daftar"',
        text: `MasyaAllah, semoga Allah mudahkan niatnya 🤍 Langsung chat kami di WA ${WA} ya Kak, dibantu sampai tuntas 🙏`,
      },
      {
        kind: 'template',
        situation: 'Komen: nge-tag teman / keluarga',
        text: `Semoga jadi jalan kebaikan ke Baitullah berdua 🕋🤍 Info lengkap japri WA ${WA} ya Kak 🙏`,
      },
      {
        kind: 'template',
        situation: 'Komen ragu: "beneran?" / "nipu ga?"',
        text: `Terima kasih Kak 🙏 Isra Amanah resmi berizin PPIU & PIHK Kemenag (SK No. U.37/2021), anggota HIMPUH & IATA. Yuk ngobrol lebih jelas di WA ${WA} 🕋`,
        hint: 'Komen negatif jangan dihapus — balas sopan + legalitas. Itu malah naikin kepercayaan.',
      },
    ],
  },
  {
    id: 'dm',
    emoji: '📩',
    navLabel: 'DM',
    title: 'Balas DM',
    sub: 'Instagram / Messenger. Sambut, lalu pindah ke WA.',
    cards: [
      {
        kind: 'template',
        situation: 'Pembuka DM',
        text: 'Halo Kak 🙏 Terima kasih sudah menghubungi Isra Amanah Internasional 🕋 Dengan Kakak siapa & dari kota mana? Saya bantu info umrahnya ya 🤍',
      },
      {
        kind: 'template',
        situation: 'Ajak pindah ke WhatsApp',
        text: `Biar lebih enak dibantu detailnya, lanjut ke WhatsApp ya Kak 👉 ${WA} (CS resmi Isra Amanah) 🙏`,
      },
    ],
  },
  {
    id: 'wa',
    emoji: '🟢',
    navLabel: 'WhatsApp',
    title: 'Chat WhatsApp',
    sub: 'Urut dari atas ke bawah. Di sinilah closing-nya.',
    cards: [
      {
        kind: 'template',
        situation: '1. Salam pembuka',
        text: "Wa'alaikumussalam 🙏🕋 Terima kasih sudah menghubungi Isra Amanah Internasional – Cabang Banggai. Perkenalkan saya Maya, CS resmi yang siap membantu Bapak/Ibu. Boleh saya tahu dengan Bapak/Ibu siapa? 🤍",
      },
      {
        kind: 'template',
        situation: '2. Tanya kebutuhannya dulu',
        text: `Baik Bapak/Ibu 🙏 Biar saya carikan paket yang pas, boleh saya tanya:
1. Rencana untuk berapa orang?
2. Kira-kira mau berangkat kapan?
3. Lebih tertarik Umroh Reguler, Umroh Plus Aqsa, atau Fast Umroh Turkey? 🕋`,
      },
      {
        kind: 'template',
        situation: '3. Kirim info paket',
        text: `Terima kasih infonya 🙏 Ini paket yang cocok untuk Bapak/Ibu:

🕋 [Nama Paket]
🗓️ Berangkat: [tanggal]
💰 Mulai [harga] /orang
🏨 Hotel: [hotel Makkah & Madinah]
✅ Sudah termasuk: tiket, visa, hotel, makan, bus, muthawwif, handling

Dibimbing sampai mabrur insyaAllah 🤍`,
        fill: 'Ganti tulisan dalam [ ] sesuai paketnya.',
      },
      {
        kind: 'template',
        situation: '4. Kalau bilang "MAHAL"',
        text: 'Saya paham Bapak/Ibu 🙏 Umrah ini ibadah istimewa, jadi yang kami jaga kenyamanan & amanahnya — hotel dekat, pembimbing berpengalaman, resmi Kemenag, tanpa biaya tersembunyi 🤍 Kami juga ada pilihan yang bisa menyesuaikan budget, mau saya bantu carikan?',
      },
      {
        kind: 'template',
        situation: '5. Kalau bilang "MIKIR DULU"',
        text: 'Silakan dipertimbangkan matang Bapak/Ibu 🙏 Boleh saya kirim detail lengkap + itinerary-nya biar lebih mudah dipikirkan? Kapan pun ada pertanyaan, saya siap bantu 🤍',
      },
      {
        kind: 'template',
        situation: '6. Kalau mau tanya KELUARGA dulu',
        text: 'Betul, ini keputusan bersama 🙏 Saya kirim info lengkapnya ya, biar bisa ditunjukkan ke keluarga. Boleh saya follow up lagi besok? 🤍',
      },
      {
        kind: 'template',
        situation: '7. Kalau TAKUT KETIPU',
        text: 'Wajar hati-hati untuk ibadah sepenting ini 🙏 Isra Amanah resmi berizin PPIU & PIHK Kemenag (SK No. U.37/2021), anggota HIMPUH & IATA, dan sudah banyak jamaah yang berangkat lancar 🤍🕋',
      },
      {
        kind: 'template',
        situation: '8. Kalau minta DICICIL',
        text: 'Bisa Bapak/Ibu 🙏 Banyak jamaah mulai dengan DP untuk booking seat dulu, sisanya dilunasi bertahap sampai dekat keberangkatan. Mau saya jelaskan skema pembayarannya?',
      },
      {
        kind: 'template',
        situation: '9. Ajak DAFTAR (closing)',
        text: 'Kalau sudah mantap, kita amankan seat-nya dulu ya Bapak/Ibu 🤍 Pendaftaran cukup siapkan KTP + DP booking, nanti saya pandu pelan-pelan 🙏 Saya bantu proses sekarang?',
      },
      {
        kind: 'template',
        situation: '10. Follow up (yang belum balas)',
        text: "Assalamu'alaikum Bapak/Ibu 🙏 Izin follow up ya, apakah masih ada yang ingin ditanyakan soal paket umrahnya? Saya siap membantu 🤍",
      },
    ],
  },
  {
    id: 'tanya',
    emoji: '❓',
    navLabel: 'Tanya Umum',
    title: 'Pertanyaan yang Sering Ditanya',
    sub: 'Jawaban cepat biar calon jamaah makin yakin.',
    cards: [
      {
        kind: 'template',
        situation: '"Berapa hari programnya?"',
        text: 'Program umrah kami sekitar [9] hari untuk reguler Bapak/Ibu 🕋 Untuk Plus Aqsa & Turki lebih panjang. Detail jadwalnya saya kirimkan ya 🙏',
        fill: 'Sesuaikan jumlah hari per paket.',
      },
      {
        kind: 'template',
        situation: '"Hotelnya dekat masjid tidak?"',
        text: 'Insya Allah hotel kami dekat dengan Masjidil Haram & Masjid Nabawi Bapak/Ibu 🤍 Supaya ibadah lebih nyaman & tidak terlalu capek. Detail hotel per paket saya kirimkan ya 🕋',
      },
      {
        kind: 'template',
        situation: '"Makannya bagaimana?"',
        text: 'Konsumsi 3x sehari dengan menu Indonesia Bapak/Ibu 🍽️ biar cocok di lidah & tetap berenergi selama ibadah 🙏',
      },
      {
        kind: 'template',
        situation: '"Sudah pernah berangkatkan jamaah?"',
        text: 'Alhamdulillah sudah banyak Bapak/Ibu 🤍 Ribuan jamaah telah kami berangkatkan & pulang dengan lancar. Boleh saya kirimkan dokumentasi & testimoninya? 🕋',
      },
      {
        kind: 'template',
        situation: '"Untuk orang tua / lansia bisa?"',
        text: 'Bisa Bapak/Ibu 🙏 Kami siapkan pendampingan khusus & bantuan kursi roda bila diperlukan. Muthawwif kami berpengalaman menemani jamaah lansia dengan sabar 🤍',
      },
      {
        kind: 'template',
        situation: '"Dapat perlengkapan apa saja?"',
        text: 'Jamaah mendapat perlengkapan lengkap Bapak/Ibu 🎒: koper, tas, kain ihram/mukena, seragam, buku panduan, dan ID card. Semua sudah termasuk dalam paket 🤍',
      },
      {
        kind: 'template',
        situation: '"Kalau batal / refund bagaimana?"',
        text: 'Semoga tidak sampai begitu ya Bapak/Ibu 🙏 Namun bila terpaksa, ada ketentuan pembatalan sesuai kebijakan — biaya yang sudah keluar (tiket, visa, hotel) mengikuti aturan maskapai & pihak terkait. Detailnya saya jelaskan ya 🤍',
      },
      {
        kind: 'template',
        situation: '"Kapan pelunasannya?"',
        text: 'Pelunasan paling lambat [30] hari sebelum keberangkatan Bapak/Ibu 🙏 Setelah DP booking seat, sisanya bisa dicicil bertahap sampai batas pelunasan 🤍',
        fill: 'Sesuaikan batas hari pelunasan.',
      },
    ],
  },
  {
    id: 'syarat',
    emoji: '📋',
    navLabel: 'Syarat',
    title: 'Syarat & Dokumen',
    sub: 'Kalau ada yang tanya "syaratnya apa aja?"',
    cards: [
      {
        kind: 'template',
        situation: 'Syarat & dokumen umrah',
        text: `Syarat & dokumen umrah Bapak/Ibu 🕋:
📗 Paspor (nama minimal 3 kata, berlaku ± 8 bulan)
🪪 KTP
👨‍👩‍👧 Kartu Keluarga (KK)
📸 Pas foto background putih
💉 Sertifikat vaksin Meningitis
💍 Buku nikah / akta lahir (untuk mahram)

Tenang, semua kami bantu urus & pandu sampai lengkap 🤍`,
        fill: 'Konfirmasi ke pusat untuk syarat terbaru bila ada perubahan.',
      },
    ],
  },
  {
    id: 'bayar',
    emoji: '💳',
    navLabel: 'Bayar',
    title: 'Soal Pembayaran',
    sub: 'Penting — lindungi jamaah dari penipuan.',
    cards: [
      {
        kind: 'template',
        situation: '"Bayarnya ke rekening mana?"',
        text: `Pembayaran WAJIB hanya ke rekening RESMI atas nama PT ISRA AMANAH INTERNASIONAL ya Bapak/Ibu 🙏:

🏦 BCA [nomor rekening]
a.n. PT Isra Amanah Internasional

⚠️ Demi keamanan, JANGAN transfer ke rekening pribadi atas nama perorangan. Kami tidak bertanggung jawab atas transaksi di luar rekening resmi 🤍`,
        warn: 'WAJIB isi nomor rekening resmi dari pusat & pastikan atas nama PT (bukan pribadi). Ini melindungi jamaah dari penipuan.',
      },
      {
        kind: 'template',
        situation: '"DP-nya berapa untuk booking seat?"',
        text: 'Untuk mengamankan seat, DP mulai dari [Rp ...] Bapak/Ibu 🕋 Sisanya bisa dicicil sampai batas pelunasan. Setelah DP, nama Bapak/Ibu langsung kami daftarkan & amankan kursinya 🤍',
        fill: 'Isi nominal DP sesuai ketentuan pusat.',
      },
    ],
  },
  {
    id: 'broadcast',
    emoji: '📢',
    navLabel: 'Broadcast',
    title: 'Broadcast ke Jamaah Lama',
    sub: 'Ajak umrah lagi / ngajak keluarga. Kirim ke database.',
    cards: [
      {
        kind: 'template',
        situation: 'Broadcast: buka keberangkatan baru',
        text: `Assalamu'alaikum Bapak/Ibu 🙏🕋 Kabar gembira dari Isra Amanah Internasional!

Keberangkatan umrah [bulan] sudah DIBUKA 🤍 Seat terbatas.

Yuk ajak keluarga & sahabat menyempurnakan rindu ke Baitullah. Info & daftar: ${WA} 🕋`,
        fill: 'Ganti [bulan] keberangkatan.',
      },
      {
        kind: 'template',
        situation: 'Broadcast: ajak umrah lagi / referral',
        text: `Assalamu'alaikum Bapak/Ibu 🙏 Semoga selalu sehat & dilimpahi keberkahan 🤍

Rindu suasana Tanah Suci? Atau ingin memberangkatkan orang tua & keluarga tercinta? Isra Amanah siap membantu lagi 🕋

Ada program khusus untuk jamaah setia & yang mengajak. Balas pesan ini ya 🙏`,
      },
      {
        kind: 'template',
        situation: 'Broadcast: promo singkat',
        text: `🕋 PROMO UMRAH [bulan] 🕋
Bapak/Ibu, ada harga spesial & seat terbatas untuk keberangkatan terdekat — khusus jamaah setia Isra Amanah 🤍
Mau info lengkap? Balas "MAU" ya 🙏`,
      },
    ],
  },
  {
    id: 'ucapan',
    emoji: '🤲',
    navLabel: 'Ucapan',
    title: 'Ucapan Spesial',
    sub: 'Bikin jamaah terkesan → mereka rekomendasiin ke orang lain.',
    cards: [
      {
        kind: 'template',
        situation: 'Sebelum berangkat',
        text: "Assalamu'alaikum Bapak/Ibu 🙏🕋 Selamat menunaikan ibadah umrah! Semoga menjadi umrah yang mabrur, dilancarkan setiap langkahnya, dan dikabulkan setiap doanya 🤍 Titip doa dari kami di depan Ka'bah ya 🥰",
      },
      {
        kind: 'template',
        situation: 'Setelah pulang + minta testimoni',
        text: `Alhamdulillah, selamat datang kembali di tanah air Bapak/Ibu 🤍🕋 Semoga umrahnya mabrur & membawa keberkahan.

Bila berkenan, kami senang sekali bila Bapak/Ibu berbagi kesan & pesan (testimoni) tentang pelayanan kami 🙏 Terima kasih telah mempercayakan perjalanan ibadahnya kepada Isra Amanah 🤍`,
      },
      {
        kind: 'template',
        situation: 'Ingatkan pelunasan (sopan)',
        text: "Assalamu'alaikum Bapak/Ibu 🙏 Izin mengingatkan dengan hormat, batas pelunasan umrah [tanggal] semakin dekat 🕋 Bila sudah siap, kami bantu prosesnya ya. Terima kasih 🤍",
        fill: 'Isi [tanggal] pelunasan.',
      },
    ],
  },
  {
    id: 'closing',
    emoji: '🎯',
    navLabel: 'Closing',
    title: 'Teknik Closing',
    sub: 'Cara "menutup" biar calon jamaah cepat memutuskan.',
    cards: [
      {
        kind: 'tips',
        title: '5 aturan emas closing',
        items: [
          'Tawarkan **langkah kecil** (DP untuk kunci seat), bukan keputusan besar (bayar lunas).',
          '**Sebut namanya** — bikin personal & dekat.',
          'Kasih **2 pilihan**, bukan tanya "jadi/tidak". (mis. "bulan A atau B?")',
          'Ciptakan **urgency yang jujur** — seat & harga memang terbatas.',
          'Setelah menawarkan, **diam sejenak** — kasih dia ruang menjawab.',
        ],
      },
      {
        kind: 'template',
        situation: 'Closing "anggap sudah jadi"',
        text: 'Baik Bapak/Ibu 🤍 saya amankan 1 seat atas nama [nama] ya untuk keberangkatan [bulan]. Silakan siapkan KTP-nya, nanti saya pandu langkah pendaftarannya pelan-pelan 🙏🕋',
      },
      {
        kind: 'template',
        situation: 'Closing 2 pilihan',
        text: 'Untuk keberangkatannya, Bapak/Ibu lebih nyaman yang [bulan A] atau [bulan B]? Biar langsung saya amankan seat-nya sebelum penuh 🕋',
      },
      {
        kind: 'template',
        situation: 'Closing urgency (jujur)',
        text: 'Seat keberangkatan [bulan] tinggal sedikit Bapak/Ibu 🙏 Kalau berkenan, kita kunci dulu dengan DP hari ini supaya tidak kehabisan & harga tidak keburu naik 🤍',
      },
      {
        kind: 'template',
        situation: 'Closing "kecilkan keputusan"',
        text: 'Tidak perlu langsung lunas kok Bapak/Ibu 🙏 Cukup DP untuk mengunci seat & harga, sisanya bisa bertahap. Kita mulai amankan dulu ya? 🕋',
      },
    ],
  },
  {
    id: 'jitu',
    emoji: '💬',
    navLabel: 'Jawaban Jitu',
    title: 'Jawaban Jitu Lanjutan',
    sub: 'Buat situasi yang lebih menantang.',
    cards: [
      {
        kind: 'template',
        situation: '"Minta diskon dong"',
        text: 'Saya paham Bapak/Ibu 🙏 Harga kami sudah dibuat sejujur mungkin dengan fasilitas terbaik, jadi memang sulit diturunkan. Tapi tenang, saya bantu carikan paket yang paling pas dengan budget Bapak/Ibu, atau saya kabari kalau ada promo terdekat 🤍',
      },
      {
        kind: 'template',
        situation: '"Di travel lain lebih murah"',
        text: 'Wajar membandingkan Bapak/Ibu 🙏 Yang kami tekankan: legalitas resmi Kemenag, hotel dekat masjid, pembimbing berpengalaman, dan pelayanan sepenuh hati sampai pulang. Untuk ibadah sepenting ini, amanah & kenyamanan yang paling kami jaga 🤍🕋',
      },
      {
        kind: 'template',
        situation: '"Belum rezeki / nanti aja"',
        text: 'Aamiin, semoga Allah segera cukupkan rezekinya ke Baitullah Bapak/Ibu 🤍 Sambil menabung, boleh saya bantu daftarkan dengan DP kecil dulu untuk mengunci harga? Karena harga umrah cenderung naik tiap tahun 🙏',
      },
      {
        kind: 'template',
        situation: '"Belum siap ibadah / fisik"',
        text: 'Tidak perlu khawatir Bapak/Ibu 🙏 Justru umrah jadi jalan memperbaiki ibadah, dan kami bimbing manasiknya dari nol. Untuk fisik, kami dampingi penuh selama di sana 🤍',
      },
      {
        kind: 'template',
        situation: '"Keluarga belum mengizinkan"',
        text: 'Semoga dilembutkan hatinya ya Bapak/Ibu 🤍 Saya kirimkan info lengkap + legalitas kami, biar bisa ditunjukkan ke keluarga agar mereka lebih tenang & yakin 🙏',
      },
      {
        kind: 'template',
        situation: 'Bangunkan lead lama (yang menghilang)',
        text: "Assalamu'alaikum Bapak/Ibu 🙏 Dulu sempat menanyakan umrah bersama kami. Izin info, keberangkatan [bulan] sudah dibuka & masih ada seat 🕋 Apakah masih berminat? Saya bantu ya 🤍",
      },
    ],
  },
  {
    id: 'telp',
    emoji: '📞',
    navLabel: 'Telp & VN',
    title: 'Telepon & Voice Note',
    sub: 'Suara jauh lebih personal — trust naik, closing lebih cepat.',
    cards: [
      {
        kind: 'tips',
        title: 'Tips voice note',
        items: [
          'Pendek aja, **20–40 detik**.',
          '**Senyum** saat merekam — suara jadi terdengar ramah.',
          'Sebut **nama** calon jamaah di awal.',
          'Tutup dengan **pertanyaan** biar dia balas.',
        ],
      },
      {
        kind: 'template',
        situation: 'Naskah Voice Note',
        text: "Assalamu'alaikum Bapak/Ibu [nama] 🙏 Perkenalkan saya Maya dari Isra Amanah. Terima kasih sudah tertarik dengan umrahnya. Saya siap bantu carikan paket terbaik sesuai kebutuhan Bapak/Ibu — kira-kira rencana berangkatnya kapan ya? 🕋",
        note: 'Baca naskah ini sambil rekam VN.',
      },
      {
        kind: 'template',
        situation: 'Naskah Telepon (pembuka)',
        text: "Assalamu'alaikum, dengan Bapak/Ibu [nama]? Saya Maya dari Isra Amanah Internasional 🙏 Izin menghubungi terkait info umrah yang tadi ditanyakan. Apakah ada waktu sebentar untuk saya bantu jelaskan? 🕋",
      },
    ],
  },
  {
    id: 'deal',
    emoji: '✅',
    navLabel: 'Setelah Deal',
    title: 'Setelah Deal',
    sub: 'Jangan berhenti di "iya" — proses & jaga jamaahnya.',
    cards: [
      {
        kind: 'template',
        situation: 'Minta data pendaftaran',
        text: `Alhamdulillah 🤍 Terima kasih kepercayaannya Bapak/Ibu. Untuk pendaftaran, mohon kirim data berikut ya 🙏:
1. Nama lengkap (sesuai KTP/paspor)
2. No. HP
3. Alamat
4. Foto KTP
5. Foto paspor (bila sudah ada)

Setelah itu saya proseskan & kirim bukti pendaftaran 🕋`,
      },
      {
        kind: 'template',
        situation: 'Konfirmasi DP diterima',
        text: 'Alhamdulillah, DP Bapak/Ibu sudah kami terima ✅ Seat atas nama [nama] resmi kami amankan untuk keberangkatan [bulan] 🕋 Bukti & jadwal selanjutnya menyusul ya. Selamat, langkah menuju Baitullah sudah dimulai 🤍',
      },
      {
        kind: 'template',
        situation: 'Undangan manasik',
        text: "Assalamu'alaikum Bapak/Ibu 🙏 Reminder: manasik umrah akan diadakan pada [tanggal] jam [jam] di [lokasi/online] 🕋 Mohon hadir ya, penting untuk kelancaran ibadah. Sampai jumpa 🤍",
      },
      {
        kind: 'template',
        situation: 'Reminder H-1 keberangkatan',
        text: 'Bapak/Ibu, besok keberangkatan kita 🕋✨ Pastikan paspor, dokumen, & perlengkapan sudah siap. Kumpul di [lokasi] jam [jam]. Semoga lancar & mabrur — kami dampingi sampai tuntas 🤍',
      },
    ],
  },
  {
    id: 'review',
    emoji: '⭐',
    navLabel: 'Review',
    title: 'Review & Referral',
    sub: 'Jamaah puas = mesin jamaah baru. Ini kunci "cepat kaya"-nya.',
    cards: [
      {
        kind: 'template',
        situation: 'Minta ulasan bintang 5',
        text: `Bapak/Ibu 🙏 Bila berkenan & puas dengan pelayanan kami, mohon bantu beri ulasan bintang 5 di Google/Facebook kami 🌟 Sangat berarti untuk kami & membantu lebih banyak orang menemukan travel yang amanah 🤍
👉 [link ulasan]`,
        fill: 'Isi [link ulasan] Google/Facebook.',
      },
      {
        kind: 'template',
        situation: 'Ajak referral (kenalkan ke saudara)',
        text: 'Bapak/Ibu, terima kasih sudah menjadi keluarga Isra Amanah 🤍 Bila ada saudara atau teman yang ingin umrah, silakan kenalkan ke kami 🙏 Ada apresiasi khusus untuk setiap jamaah yang Bapak/Ibu ajak 🕋',
        note: 'Sesuaikan dengan program referral yang berlaku di pusat.',
      },
    ],
  },
  {
    id: 'followup',
    emoji: '🔁',
    navLabel: 'Follow-up',
    title: 'Jadwal Follow-up',
    sub: 'Kebanyakan closing terjadi di follow-up ke-2 s/d ke-5. Jangan menyerah cepat.',
    cards: [
      {
        kind: 'tips',
        title: 'Ritme follow-up (catat, jangan andalkan ingatan)',
        items: [
          '**Menit 0–5:** balas secepatnya — ini paling menentukan.',
          '**Hari ke-1:** follow up ramah (pakai template WhatsApp no.10).',
          '**Hari ke-3:** kasih urgency — seat/harga terbatas.',
          '**Hari ke-7:** kirim testimoni/dokumentasi + tawarkan bantuan.',
          '**Hari ke-14:** pesan penutup (pintu tetap terbuka), lalu masuk ke broadcast bulanan.',
        ],
        note: 'Tandai tiap lead: Baru → Follow up → DP → Lunas. Yang tidak dicatat = hilang = rugi.',
      },
    ],
  },
  {
    id: 'setup',
    emoji: '⏰',
    navLabel: 'WA Bisnis',
    title: 'Atur WA Business (Otomatis)',
    sub: 'Biar tetap "menyapa" walau lagi sibuk/tidur.',
    cards: [
      {
        kind: 'tips',
        title: 'Cara pasang (WhatsApp Business)',
        items: [
          'Buka **Setelan → Alat Bisnis**.',
          'Pilih **Pesan Salam** → tempel teks di bawah → aktifkan.',
          'Pilih **Pesan Saat Tidak Ada** → tempel teks di bawah → atur jam.',
          'Aktifkan **Label** chat: Baru / Follow up / DP / Lunas.',
        ],
      },
      {
        kind: 'template',
        situation: 'Pesan Salam Otomatis',
        text: "Wa'alaikumussalam 🙏🕋 Terima kasih telah menghubungi Isra Amanah Internasional – Cabang Banggai. Pesan Bapak/Ibu segera kami balas. Untuk info cepat, silakan sebutkan nama & kota ya 🤍",
      },
      {
        kind: 'template',
        situation: 'Pesan Saat Sibuk / Di Luar Jam',
        text: 'Terima kasih sudah menghubungi Isra Amanah 🙏 Saat ini di luar jam kerja (jam [08.00]–[20.00]). Pesan Bapak/Ibu akan kami balas secepatnya. Semoga Allah mudahkan niat umrahnya 🕋🤍',
        fill: 'Sesuaikan jam kerjanya.',
      },
    ],
  },
  {
    id: 'habit',
    emoji: '🧭',
    navLabel: 'Kebiasaan',
    title: 'Kebiasaan CS Sukses',
    sub: 'Rezeki datang dari konsistensi + pelayanan, bukan maksa.',
    cards: [
      {
        kind: 'tips',
        title: 'Lakukan tiap hari',
        items: [
          'Balas **SEMUA chat < 5 menit** di jam kerja.',
          'Follow up **minimal 10 lead/hari** yang belum closing.',
          '**Broadcast 1x/minggu** ke database (jangan spam tiap hari).',
          'Minta **testimoni & review** dari setiap jamaah yang pulang.',
          'Minta **referral** dari jamaah yang puas.',
          '**Catat semua lead** — jangan ada yang terlewat.',
          'Tetap **ramah & sabar** — reputasi baik bikin jamaah datang sendiri.',
        ],
        note: 'Ingat: closing itu soal kepercayaan + konsistensi. Layani sepenuh hati, rezeki mengikuti 🤍',
      },
    ],
  },
]

export const csClosingKeys = [
  '**Bales cepat** — kalau bisa di bawah 5 menit. Lead paling panas di menit pertama.',
  '**Selalu ramah** — buka salam, panggil "Bapak/Ibu/Kak", akhiri dengan doa.',
  '**Jangan biarkan chat menggantung** — selalu tutup dengan ajakan (tanya balik / ajak daftar).',
]

/** Jumlah template yang bisa disalin — dipakai di header. */
export const csTemplateCount = csSections.reduce(
  (n, s) => n + s.cards.filter((c) => c.kind === 'template').length,
  0,
)
