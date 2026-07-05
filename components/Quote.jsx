import Reveal from './ui/Reveal';
import config from '@/lib/data';

// Quote rasa syukur.
export default function Quote() {
  const { opening } = config;
  return (
    <section className="relative z-10 bg-rose-deep px-6 py-20 text-cream">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-script text-2xl leading-relaxed text-cream md:text-3xl">
          &ldquo;{opening.quote}&rdquo;
        </p>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">{opening.quoteSource}</p>
      </Reveal>
    </section>
  );
}
