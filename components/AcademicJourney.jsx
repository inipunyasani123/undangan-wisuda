import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import config from '@/lib/data';

// Perjalanan pendidikan — timeline vertikal formal dgn tahun & institusi.
export default function AcademicJourney() {
  const { journey } = config;
  return (
    <section className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <SectionHeading kicker="Riwayat Pendidikan" title="Perjalanan Akademik" />

        <div className="relative mt-12 border-l-2 border-gold/40 pl-8">
          {journey.map((j, i) => (
            <Reveal key={j.level} delay={i * 0.1} className="relative mb-9 last:mb-0">
              <span className="absolute -left-[37px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-gold bg-cream">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-deep" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose">{j.year}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-rose-deep">{j.level}</h3>
              <p className="text-sm text-muted">{j.institution}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
