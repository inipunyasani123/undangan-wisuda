'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import config from '@/lib/data';
import { useDialog } from '@/lib/hooks';

// Galeri foto formal + lightbox.
export default function Gallery() {
  const { gallery } = config;
  const [active, setActive] = useState(null);
  const tombolTutup = useDialog(active !== null, () => setActive(null));

  return (
    <section className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading kicker="Dokumentasi" title="Galeri" />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((foto, i) => (
            <Reveal key={foto.src} delay={(i % 3) * 0.1}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block h-44 w-full overflow-hidden border-2 border-gold/40 md:h-60"
                aria-label={`Perbesar foto: ${foto.alt}`}
              >
                <Image src={foto.src} alt={foto.alt} fill sizes="(max-width:768px) 45vw, 290px" className="object-cover transition duration-500 group-hover:scale-110" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)} role="dialog" aria-modal="true" aria-label={`Galeri ${active + 1} dari ${gallery.length}, diperbesar`}
          >
            <button ref={tombolTutup} type="button" className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center text-cream hover:text-gold" onClick={() => setActive(null)} aria-label="Tutup foto">
              <X size={28} />
            </button>
            <motion.div
              className="relative h-[70vh] w-full max-w-2xl"
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={gallery[active].src} alt={gallery[active].alt} fill sizes="(max-width: 768px) 100vw, 672px" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
