// ============================================================
//  KONFIGURASI UNDANGAN — Wisuda (Academic Program)
//  Ubah seluruh isi undangan dari satu tempat ini saja.
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
    quote:
      'Pendidikan adalah senjata paling ampuh yang bisa kamu gunakan untuk mengubah dunia. Terima kasih atas setiap doa dan dukungan yang menyertai perjalanan ini.',
    quoteSource: 'Dengan Rasa Syukur',
  },

  // -- Sang Wisudawan --
  graduate: {
    name: 'Dimas',
    fullName: 'Dimas Prasetyo',
    degree: 'S.Kom.',
    title: 'Sarjana Komputer',
    university: 'Universitas Teknologi Nusantara',
    faculty: 'Fakultas Ilmu Komputer',
    major: 'Teknik Informatika',
    gpa: '3.87',
    predicate: 'Cumlaude',
    photo: 'https://placehold.co/600x800/1e2a4a/f7f4ec.png?text=Wisudawan',
  },

  // -- Tanggal acara wisuda (ISO) untuk countdown --
  mainDate: '2026-11-21T08:00:00+07:00',

  // -- Perjalanan akademik (timeline pendidikan) --
  journey: [
    { year: '2008 - 2014', level: 'Sekolah Dasar', institution: 'SD Negeri 3 Semarang' },
    { year: '2014 - 2017', level: 'Sekolah Menengah Pertama', institution: 'SMP Negeri 5 Semarang' },
    { year: '2017 - 2020', level: 'Sekolah Menengah Atas', institution: 'SMA Negeri 1 Semarang' },
    { year: '2020 - 2026', level: 'Sarjana (S1)', institution: 'Universitas Teknologi Nusantara' },
  ],

  // -- Pencapaian / profil akademik --
  achievements: [
    { label: 'IPK', value: '3.87' },
    { label: 'Predikat', value: 'Cumlaude' },
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
    date: 'Sabtu, 21 November 2026',
    time: '08.00 WIB - selesai',
    venue: 'Auditorium Utama',
    address: 'Kampus UTN, Jl. Pendidikan No. 1, Semarang',
    start: '2026-11-21T08:00:00+07:00',
    end: '2026-11-21T12:00:00+07:00',
  },

  // -- Lokasi (embed Google Maps) --
  location: {
    label: 'Auditorium Utama, Kampus UTN Semarang',
    mapEmbed: 'https://www.google.com/maps?q=Universitas+Diponegoro+Semarang&output=embed',
    mapLink: 'https://maps.google.com/?q=Universitas+Diponegoro+Semarang',
  },

  // -- Galeri foto --
  gallery: [
    'https://placehold.co/600x800/1e2a4a/f7f4ec.png?text=Foto+1',
    'https://placehold.co/600x800/b08d4f/f7f4ec.png?text=Foto+2',
    'https://placehold.co/600x800/182238/c9a86a.png?text=Foto+3',
    'https://placehold.co/600x800/b08d4f/f7f4ec.png?text=Foto+4',
    'https://placehold.co/600x800/1e2a4a/f7f4ec.png?text=Foto+5',
    'https://placehold.co/600x800/182238/c9a86a.png?text=Foto+6',
  ],

  // -- Musik latar (taruh file di /public/music/) --
  music: {
    enabled: true,
    src: '/music/song.mp3',
    title: 'Backsound',
  },

  // -- Footer --
  footer: {
    closing:
      'Sebuah kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan turut berbagi kebahagiaan di hari istimewa ini.',
    hashtag: '#DimasWisuda2026',
  },
};

export default config;
