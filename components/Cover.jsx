'use client';
import { FileText } from 'lucide-react';
import config from '@/lib/data';
import { useGuestName } from '@/lib/hooks';
import { tanggalWIB } from '@/lib/utils';
import Crest from './Crest';
import SakelarMusik from './SakelarMusik';

// Sampul akademik "Academic Honor": navy, bingkai emas ganda, crest, nama bergradien emas,
// gelar italic. Nama wisudawan tampil sejak cat pertama; gerak masuknya lewat CSS.
export default function Cover({ keluar, onOpen, onSelesai, musik, onMusik }) {
  const guest = useGuestName();
  const { graduate, opening, event } = config;
  const tanggal = tanggalWIB(event.start, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <section
      data-sampul
      aria-label="Sampul undangan"
      className={`fixed inset-0 z-50 overflow-y-auto bg-rose-deep text-cream ${keluar ? 'sampul-keluar' : ''}`}
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget && e.animationName === 'sampul-keluar') onSelesai();
      }}
    >
      {/* Bingkai emas ganda */}
      <div className="pointer-events-none fixed inset-4 rounded-lg border-2 border-gold/45" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-6 rounded-lg border border-gold/25" aria-hidden="true" />

      <div className="relative flex min-h-full items-center justify-center px-8 py-14">
        <div className="masuk-skala w-full max-w-md text-center">
          <Crest size={88} className="mx-auto text-gold" />

          <p className="mt-7 text-xs uppercase tracking-[0.4em] text-gold/80">{opening.greeting}</p>

          <h1 className="mt-5 break-words font-display text-4xl font-semibold leading-tight sm:text-5xl">
            <span className="gold-gradient">{graduate.fullName}</span>
          </h1>
          <p className="mt-3 font-script text-2xl text-cream/90">{graduate.title}</p>
          <p className="mt-1 text-sm tracking-wide text-cream/70">{graduate.university}</p>

          <div className="masuk my-8 gold-rule" style={{ '--tunda': '0.15s' }} aria-hidden="true" />

          <p className="masuk text-[11px] uppercase tracking-[0.3em] text-gold/90" style={{ '--tunda': '0.2s' }}>{event.name}</p>
          <p className="masuk mt-1.5 font-display text-base tracking-wide text-cream" style={{ '--tunda': '0.2s' }}>{tanggal}</p>

          <div className="masuk mt-7" style={{ '--tunda': '0.3s' }}>
            <p className="text-[11px] uppercase tracking-[0.3em] text-cream/70">Kepada Yth.</p>
            <p className="mt-1.5 break-words font-display text-lg">{guest}</p>
          </div>

          <div className="masuk mt-8 flex flex-col items-center gap-2" style={{ '--tunda': '0.4s' }}>
            <button
              type="button"
              onClick={onOpen}
              disabled={keluar}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gold px-9 text-xs font-bold uppercase tracking-[0.2em] text-rose-deep shadow-lg shadow-gold/20 transition hover:brightness-105"
            >
              <FileText size={15} aria-hidden="true" /> Buka Undangan
            </button>
            <SakelarMusik nyala={musik} onUbah={onMusik} className="rounded-full px-3 text-[11px] uppercase tracking-[0.2em] text-gold hover:bg-cream/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
