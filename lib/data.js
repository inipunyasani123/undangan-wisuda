// ============================================================
//  KONFIGURASI UNDANGAN — Wisuda (Academic Program)
//  Ubah seluruh isi undangan dari satu tempat ini saja.
//
//  Ini undangan CONTOH: nama, kampus, dan tempat fiktif. Foto di
//  /public/images adalah placeholder berlabel — ganti dengan
//  foto asli (potret 3:4).
// ============================================================

const config = {
  // -- Meta / SEO --
  meta: {
    title: 'Wisuda — Dimas Prasetyo, S.Kom.',
    description: 'Dengan penuh syukur, kami mengundang Anda untuk hadir di acara wisuda.',
  },

  // -- Sambutan / quote --
  opening: {
    greeting: 'The Graduation Of',
    quote: 'Pendidikan adalah senjata paling ampuh yang bisa kamu gunakan untuk mengubah dunia.',
    quoteSource: 'Nelson Mandela',
  },

  // -- Sang Wisudawan --
  graduate: {
    name: 'Dimas',
    fullName: 'Dimas Prasetyo',
    degree: 'S.Kom.',
    title: 'Sarjana Komputer',
    university: 'Universitas Sangkala Raya',
    faculty: 'Fakultas Ilmu Komputer',
    major: 'Teknik Informatika',
    gpa: '3,87',
    predicate: 'Cum Laude',
    photo: '/images/wisudawan.webp',
  },

  // -- Tanggal acara wisuda (ISO) untuk countdown --
  mainDate: '2027-11-20T08:00:00+07:00',

  // -- Perjalanan akademik (timeline pendidikan) --
  journey: [
    { year: '2011 - 2017', level: 'Sekolah Dasar', institution: 'SD negeri di Semarang' },
    { year: '2017 - 2020', level: 'Sekolah Menengah Pertama', institution: 'SMP negeri di Semarang' },
    { year: '2020 - 2023', level: 'Sekolah Menengah Atas', institution: 'SMA negeri di Semarang' },
    { year: '2023 - 2027', level: 'Sarjana (S1)', institution: 'Universitas Sangkala Raya' },
  ],

  // -- Pencapaian / profil akademik --
  achievements: [
    { label: 'IPK', value: '3,87' },
    { label: 'Predikat', value: 'Cum Laude' },
    { label: 'Fakultas', value: 'Ilmu Komputer' },
    { label: 'Program Studi', value: 'Teknik Informatika' },
  ],

  // -- Rundown acara wisuda --
  program: [
    { time: '07.00', title: 'Registrasi & Daftar Ulang Wisudawan' },
    { time: '08.00', title: 'Prosesi Masuk Senat & Pembukaan' },
    { time: '09.00', title: 'Sambutan Rektor & Orasi Ilmiah' },
    { time: '10.30', title: 'Prosesi Penyerahan Ijazah' },
    { time: '12.00', title: 'Penutupan & Sesi Foto Bersama' },
  ],

  // -- Detail acara --
  event: {
    name: 'Upacara Wisuda',
    date: 'Sabtu, 20 November 2027',
    time: '08.00 WIB - selesai',
    venue: 'Auditorium Utama, Universitas Sangkala Raya',
    address: 'Pedurungan, Semarang',
    start: '2027-11-20T08:00:00+07:00',
    end: '2027-11-20T12:00:00+07:00',
  },

  // Contoh ini menunjuk area Pedurungan. Ganti `q=` dengan nama/koordinat tempat acara.
  location: {
    label: 'Auditorium Utama, Universitas Sangkala Raya, Semarang',
    note: 'Peta contoh menunjukkan area Pedurungan.',
    mapEmbed: 'https://www.google.com/maps?q=Pedurungan,+Semarang&output=embed',
    mapLink: 'https://maps.google.com/?q=Pedurungan,+Semarang',
  },

  // -- Galeri (potret 3:4) --
  gallery: [
    '/images/foto-1.webp',
    '/images/foto-2.webp',
    '/images/foto-3.webp',
    '/images/foto-4.webp',
    '/images/foto-5.webp',
    '/images/foto-6.webp',
  ],

  // -- Musik latar (file di /public/music/) --
  music: {
    enabled: true,
    src: '/music/latar.mp3',
    title: 'Pomp and Circumstance March No. 1 — Edward Elgar',
    credit: 'rekaman US Marine Band, domain publik',
  },

  // -- Footer --
  footer: {
    closing:
      'Sebuah kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan turut berbagi kebahagiaan di hari istimewa ini.',
    hashtag: '#DimasWisuda2027',
  },

  // -- Halaman /kirim (tautan undangan per tamu) --
  kirim: {
    pesan:
      'Yth. {nama},\n\nDengan penuh syukur, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di Upacara Wisuda Dimas Prasetyo, S.Kom., Sabtu, 20 November 2027, pukul 08.00 WIB.\n\nUndangan lengkap: {tautan}\n\nTerima kasih atas doa dan dukungan selama perjalanan ini.',
  },
};

export default config;
