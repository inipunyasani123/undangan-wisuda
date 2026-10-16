import { MapPin } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import config from '@/lib/data';

// Lokasi acara wisuda.
export default function MapEmbed() {
  const { location } = config;
  return (
    <section className="relative z-10 bg-blush/50 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeading kicker="Lokasi" title="Tempat Acara" />
        <Reveal className="mt-12">
          <div className="relative overflow-hidden border-4 border-rose-deep bg-blush">
            <p className="absolute inset-0 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-muted" aria-hidden="true">
              <MapPin size={15} /> Memuat peta…
            </p>
            <iframe
              src={location.mapEmbed}
              title="Peta lokasi acara"
              className="relative h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-center text-sm text-ink">{location.label}</p>
          {location.note && <p className="mt-1 text-center text-xs text-muted">{location.note}</p>}
          <div className="mt-5 text-center">
            <a
              href={location.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-rose-deep px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-rose-deep transition hover:bg-rose-deep hover:text-cream"
            >
              <MapPin size={15} aria-hidden="true" /> Buka di Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
