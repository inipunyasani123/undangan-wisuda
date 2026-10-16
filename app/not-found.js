import Link from 'next/link';

export const metadata = { title: 'Halaman tidak ditemukan — Dimas Prasetyo', robots: { index: false }, alternates: { canonical: null } };

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream px-5 py-14 text-ink flex flex-col items-center justify-center text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-rose">Halaman tidak ditemukan</p>
      <h1 className="mt-2 font-display text-4xl uppercase tracking-wide text-ink sm:text-5xl">Alamat ini tidak terdaftar</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted mx-auto">Mungkin tautannya terpotong saat dikirim. Undangan lengkapnya ada di halaman utama.</p>
      <Link href="/" className="mt-8 inline-flex items-center justify-center gap-2 bg-ink uppercase tracking-widest text-cream transition hover:bg-rose-deep px-6 py-3 text-sm">Buka undangan</Link>
    </main>
  );
}
