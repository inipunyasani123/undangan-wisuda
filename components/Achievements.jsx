import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import config from '@/lib/data';

// Profil akademik: IPK, predikat, fakultas, prodi — kartu formal.
export default function Achievements() {
  const { achievements } = config;
  return (
    <section className="relative z-10 bg-blush/50 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeading kicker="Profil Akademik" title="Pencapaian" />

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {achievements.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.08}>
              <div className="border border-gold/40 bg-cream px-4 py-6 text-center shadow-sm">
                <p className="font-display text-2xl font-semibold text-rose-deep">{a.value}</p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">{a.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
