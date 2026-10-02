'use client';
import Reveal from './ui/Reveal';
import config from '@/lib/data';
import { useCountdown } from '@/lib/hooks';

function Box({ value, label }) {
  return (
    <div className="flex aspect-square flex-col items-center justify-center border border-gold/50 bg-cream">
      <span className="font-display text-3xl font-semibold tabular-nums text-rose-deep md:text-4xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] uppercase tracking-[0.15em] text-muted">{label}</span>
    </div>
  );
}

// Hitung mundur menuju hari wisuda.
export default function CountdownTimer() {
  const { days, hours, minutes, seconds, passed } = useCountdown(config.mainDate);
  return (
    <section className="relative z-10 px-6 py-20">
      <Reveal className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose">{passed ? 'Hari Wisuda Telah Tiba' : 'Menuju Hari Wisuda'}</p>
        {passed ? (
          <p className="mx-auto mt-5 max-w-sm font-display text-xl text-ink">Terima kasih atas doa dan dukungan Bapak/Ibu/Saudara/i.</p>
        ) : (
          <div className="mx-auto mt-7 grid max-w-xs grid-cols-4 gap-2 sm:max-w-md sm:gap-4" role="timer" aria-label={`${days} hari ${hours} jam ${minutes} menit lagi`}>
            <Box value={days} label="Hari" />
            <Box value={hours} label="Jam" />
            <Box value={minutes} label="Menit" />
            <Box value={seconds} label="Detik" />
          </div>
        )}
      </Reveal>
    </section>
  );
}
