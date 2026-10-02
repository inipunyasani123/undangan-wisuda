'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const initial = [
  { id: 1, name: 'Prof. Hartono', message: 'Selamat atas kelulusanmu. Teruslah berkarya dan bermanfaat bagi banyak orang.' },
  { id: 2, name: 'Rekan Angkatan', message: 'Akhirnya wisuda juga! Sukses selalu untuk langkah berikutnya, sarjana!' },
];

// Ucapan selamat.
export default function WishesForm() {
  const [wishes, setWishes] = useState(initial);
  const [form, setForm] = useState({ name: '', message: '' });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setWishes((p) => [{ id: Date.now(), ...form }, ...p]);
    setForm({ name: '', message: '' });
  };

  const field = 'w-full border border-gold/40 bg-cream px-4 py-3 text-sm outline-none focus:border-rose-deep';

  return (
    <section className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-lg">
        <SectionHeading kicker="Doa & Harapan" title="Ucapan Selamat" />
        <Reveal className="mt-12">
          <form onSubmit={submit} className="space-y-4">
            <input aria-label="Nama Anda" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Nama Anda" className={field} required />
            <textarea aria-label="Ucapan selamat" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tulis ucapan selamat..." rows={3} className={`${field} resize-none`} required />
            <button type="submit" className="inline-flex items-center gap-2 bg-rose-deep px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-cream transition hover:bg-ink">
              <Send size={14} aria-hidden="true" /> Kirim Ucapan
            </button>
          </form>
        </Reveal>

        <div className="mt-8 max-h-80 space-y-3 overflow-y-auto pr-1">
          {wishes.map((w) => (
            <div key={w.id} className="border-l-2 border-gold bg-blush/40 p-4">
              <p className="font-display text-sm font-semibold text-rose-deep">{w.name}</p>
              <p className="mt-1 text-sm italic leading-relaxed text-ink">{w.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
