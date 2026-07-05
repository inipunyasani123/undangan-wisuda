'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import config from '@/lib/data';

// Galeri foto formal + lightbox.
export default function Gallery() {
  const { gallery } = config;
  const [active, setActive] = useState(null);

  return (
    <section className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading kicker="Dokumentasi" title="Galeri" />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 0.1}>
              <button
                onClick={() => setActive(src)}
                className="group relative block h-44 w-full overflow-hidden border-2 border-gold/40 md:h-60"
                aria-label={`Perbesar foto ${i + 1}`}
              >
                <Image src={src} alt={`Galeri ${i + 1}`} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-110" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)} role="dialog" aria-modal="true"
          >
            <button className="absolute right-5 top-5 text-cream" onClick={() => setActive(null)} aria-label="Tutup">
              <X size={28} />
            </button>
            <motion.div
              className="relative h-[70vh] w-full max-w-2xl"
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={active} alt="Foto" fill sizes="100vw" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
