'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import config from '@/lib/data';

// Hero: foto wisudawan dgn bingkai formal, nama + gelar + universitas.
export default function Hero() {
  const { graduate, mainDate } = config;
  const dateLabel = new Date(mainDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}
        className="relative"
      >
        <div className="absolute -inset-3 border border-gold/50" aria-hidden="true" />
        <div className="relative h-72 w-60 overflow-hidden border-4 border-rose-deep shadow-xl">
          <Image src={graduate.photo} alt={graduate.fullName} fill priority sizes="240px" className="object-cover" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-10"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-rose">Wisudawan</p>
        <h1 className="mt-3 break-words font-display text-4xl font-semibold text-rose-deep sm:text-5xl md:text-6xl">
          {graduate.fullName}
        </h1>
        <p className="mt-2 font-script text-2xl text-rose">{graduate.title} ({graduate.degree})</p>
        <p className="mt-1 text-sm text-muted">{graduate.faculty} &middot; {graduate.university}</p>
        <div className="mx-auto mt-6 gold-rule" />
        <p className="mt-4 text-sm uppercase tracking-[0.25em] text-ink">{dateLabel}</p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-rose-deep/70"
        animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
