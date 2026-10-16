'use client';
import { useEffect, useRef } from 'react';
import { MotionConfig } from 'framer-motion';

import Decorations from './Decorations';
import Hero from './Hero';
import Quote from './Quote';
import AcademicJourney from './AcademicJourney';
import Achievements from './Achievements';
import CeremonyProgram from './CeremonyProgram';
import EventDetails from './EventDetails';
import CountdownTimer from './CountdownTimer';
import Gallery from './Gallery';
import MapEmbed from './MapEmbed';
import WishesForm from './WishesForm';
import Footer from './Footer';

// Isi undangan setelah sampul dibuka. Dimuat terpisah (next/dynamic) supaya JavaScript halaman pertama
// hanya berisi sampul; framer-motion dan seluruh bagian isi ikut di potongan ini.
export default function Isi() {
  const ref = useRef(null);

  // Tombol pembuka sudah hilang; fokus pindah ke awal isi.
  useEffect(() => {
    ref.current?.focus({ preventScroll: true });
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Decorations />
      <div ref={ref} tabIndex={-1} className="relative z-10 outline-none">
        <Hero />
        <Quote />
        <AcademicJourney />
        <Achievements />
        <CeremonyProgram />
        <EventDetails />
        <CountdownTimer />
        <Gallery />
        <MapEmbed />
        <WishesForm />
        <Footer />
      </div>
    </MotionConfig>
  );
}
