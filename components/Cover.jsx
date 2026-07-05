'use client';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import config from '@/lib/data';
import { useGuestName } from '@/lib/hooks';
import Crest from './Crest';

// Cover akademik (porting Stitch "Academic Honor"): navy, bingkai emas ganda,
// crest, nama gradien emas, gelar italic.
export default function Cover({ onOpen }) {
  const guest = useGuestName();
  const { graduate, opening } = config;

  return (
    <motion.section
      className="fixed inset-0 z-50 overflow-y-auto bg-rose-deep text-cream"
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      {/* Bingkai emas ganda */}
      <div className="pointer-events-none fixed inset-4 rounded-lg border-2 border-gold/45" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-6 rounded-lg border border-gold/25" aria-hidden="true" />

      <div className="relative flex min-h-full items-center justify-center px-8 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full max-w-md text-center"
        >
          <Crest size={96} className="mx-auto text-gold" />

          <p className="mt-8 text-xs uppercase tracking-[0.4em] text-gold/80">{opening.greeting}</p>

          <h1 className="mt-5 break-words font-display text-4xl font-semibold leading-tight sm:text-5xl">
            <span className="gold-gradient">{graduate.fullName}</span>
          </h1>
          <p className="mt-3 font-script text-2xl text-cream/90">{graduate.title}</p>
          <p className="mt-1 text-sm tracking-wide text-cream/60">{graduate.university}</p>

          <div className="my-9 gold-rule" />

          <p className="text-[11px] uppercase tracking-[0.3em] text-cream/55">Kepada Yth.</p>
          <p className="mt-1.5 font-display text-lg">{guest}</p>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={onOpen}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-9 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-rose-deep shadow-lg shadow-gold/20 transition hover:brightness-105"
          >
            <FileText size={15} /> Buka Undangan
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
