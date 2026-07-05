import Reveal from './Reveal';

// Judul section gaya dokumen akademik: kicker emas + judul engraved + garis emas.
export default function SectionHeading({ kicker, title, className = '' }) {
  return (
    <Reveal className={`text-center ${className}`}>
      {kicker && (
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose">{kicker}</p>
      )}
      <h2 className="mt-2 font-display text-3xl font-semibold text-rose-deep md:text-4xl">{title}</h2>
      <div className="gold-rule mt-4">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3l9 5-9 5-9-5 9-5zm0 8l6-3.3v3.1L12 14 6 10.8V7.7L12 11zm6 2.3V17c0 1.1-2.7 2-6 2s-6-.9-6-2v-3.7l6 3.3 6-3.3z" />
        </svg>
      </div>
    </Reveal>
  );
}
