'use client';
import Reveal from './ui/Reveal';
import config from '@/lib/data';
import { useCountdown } from '@/lib/hooks';

function Box({ value, label }) {
  return (
    <div className="flex h-20 w-20 flex-col items-center justify-center border border-gold/50 bg-cream md:h-24 md:w-24">
      <span className="font-display text-3xl font-semibold text-rose-deep md:text-4xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] uppercase tracking-[0.15em] text-muted">{label}</span>
    </div>
  );
}

// Hitung mundur menuju hari wisuda.
export default function CountdownTimer() {
  const { days, hours, minutes, seconds } = useCountdown(config.mainDate);
  return (
    <section className="relative z-10 px-6 py-20">
      <Reveal className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose">Menuju Hari Wisuda</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <Box value={days} label="Hari" />
          <Box value={hours} label="Jam" />
          <Box value={minutes} label="Menit" />
          <Box value={seconds} label="Detik" />
        </div>
      </Reveal>
    </section>
  );
}
