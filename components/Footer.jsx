'use client';
import Link from 'next/link';
import { Share2 } from 'lucide-react';
import Reveal from './ui/Reveal';
import config from '@/lib/data';
import { invitationUrl, whatsappShareUrl } from '@/lib/utils';
import Crest from './Crest';

// Penutup formal.
export default function Footer() {
  const { footer, graduate } = config;

  const share = () => {
    const text = `Undangan Wisuda ${graduate.fullName}, ${graduate.degree}`;
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ title: text, url: invitationUrl() }).catch(() => {});
    } else {
      window.open(whatsappShareUrl(text), '_blank', 'noopener');
    }
  };

  return (
    <footer className="relative z-10 bg-rose-deep px-6 py-20 text-center text-cream">
      <Reveal className="mx-auto max-w-xl">
        <Crest size={72} className="mx-auto text-gold" />
        <p className="mt-6 text-sm leading-relaxed text-cream/80">{footer.closing}</p>
        <h2 className="mt-7 break-words font-display text-3xl font-semibold sm:text-4xl">
          {graduate.fullName}, {graduate.degree}
        </h2>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">{footer.hashtag}</p>

        <button
          onClick={share}
          className="mt-8 inline-flex items-center gap-2 border border-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-gold transition hover:bg-gold hover:text-rose-deep"
        >
          <Share2 size={14} aria-hidden="true" /> Bagikan Undangan
        </button>

        {config.music.enabled && (
          <p className="mt-10 text-xs text-cream/80">
            Musik: {config.music.title} · {config.music.credit}
          </p>
        )}
        <p className="mt-2 text-xs text-cream/80">
          <Link href="/kirim" className="underline underline-offset-4 hover:text-gold">Kirim undangan ke tamu</Link>
        </p>
      </Reveal>
    </footer>
  );
}
