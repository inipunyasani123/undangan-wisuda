import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import config from '@/lib/data';

// Komponen tanda tangan: RUNDOWN acara wisuda (susunan acara berwaktu).
export default function CeremonyProgram() {
  const { program } = config;
  return (
    <section className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <SectionHeading kicker="Susunan Acara" title="Rundown Wisuda" />

        <div className="mt-12 divide-y divide-gold/30 border-y border-gold/30">
          {program.map((p, i) => (
            <Reveal key={p.time} delay={i * 0.06}>
              <div className="flex items-center gap-5 py-5">
                <span className="w-16 shrink-0 font-display text-lg font-semibold text-rose">{p.time}</span>
                <span className="h-2 w-2 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                <span className="min-w-0 text-sm font-medium text-ink md:text-base">{p.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-center text-xs italic text-muted">*Susunan acara dapat berubah sewaktu-waktu.</p>
      </div>
    </section>
  );
}
