// Lambang/seal akademik: lingkaran laurel + topi toga. Dipakai di cover & footer.
export default function Crest({ size = 96, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2.5" />
      {/* Laurel kiri & kanan */}
      <path d="M28 64c-6-6-8-16-5-24M30 60c-4 0-7-2-9-5M31 54c-4 1-7 0-10-2M33 48c-3 1-7 1-10-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M72 64c6-6 8-16 5-24M70 60c4 0 7-2 9-5M69 54c4 1 7 0 10-2M67 48c3 1 7 1 10-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Topi toga */}
      <path d="M50 34L32 42l18 8 18-8-18-8z" fill="currentColor" />
      <path d="M40 47v7c0 3 4.5 5 10 5s10-2 10-5v-7" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M68 42v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="68" cy="52" r="1.8" fill="currentColor" />
    </svg>
  );
}
