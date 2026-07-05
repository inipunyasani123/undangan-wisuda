// Ornamen sudut laurel emas yang halus (formal, tidak ramai). pointer-events-none.
function Laurel({ className }) {
  return (
    <svg className={className} width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path d="M60 110C40 100 28 80 28 56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 70c-6-1-10-5-12-10M34 58c-6-2-9-6-10-12M38 46c-5-3-8-7-8-13M44 36c-4-4-6-9-5-15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Decorations() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden text-gold/25" aria-hidden="true">
      <Laurel className="absolute left-0 top-10" />
      <Laurel className="absolute right-0 top-10 -scale-x-100" />
      <Laurel className="absolute left-0 bottom-10 -scale-y-100" />
      <Laurel className="absolute right-0 bottom-10 -scale-100" />
    </div>
  );
}
