import { CalendarDays, Clock, MapPin, CalendarPlus } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import config from '@/lib/data';
import { googleCalendarUrl } from '@/lib/utils';

// Detail acara wisuda + tambah ke kalender.
export default function EventDetails() {
  const { event, meta, location } = config;
  const calUrl = googleCalendarUrl(event, { title: meta.title, location: location.label });
  const rows = [
    { icon: CalendarDays, text: event.date },
    { icon: Clock, text: event.time },
    { icon: MapPin, text: `${event.venue} — ${event.address}` },
  ];
  return (
    <section className="relative z-10 bg-blush/50 px-6 py-20">
      <div className="mx-auto max-w-lg">
        <SectionHeading kicker="Undangan" title={event.name} />
        <Reveal className="mt-12">
          <div className="border border-gold/40 bg-cream p-8 text-center">
            <ul className="space-y-4 text-left">
              {rows.map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink">
                  <Icon size={18} className="mt-0.5 shrink-0 text-rose" /> {text}
                </li>
              ))}
            </ul>
            <a
              href={calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 border border-rose-deep px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-rose-deep transition hover:bg-rose-deep hover:text-cream"
            >
              <CalendarPlus size={15} /> Tambah ke Kalender
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
