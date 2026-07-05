'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Decorations from '@/components/Decorations';
import Cover from '@/components/Cover';
import Hero from '@/components/Hero';
import Quote from '@/components/Quote';
import AcademicJourney from '@/components/AcademicJourney';
import Achievements from '@/components/Achievements';
import CeremonyProgram from '@/components/CeremonyProgram';
import EventDetails from '@/components/EventDetails';
import CountdownTimer from '@/components/CountdownTimer';
import Gallery from '@/components/Gallery';
import MapEmbed from '@/components/MapEmbed';
import WishesForm from '@/components/WishesForm';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main>
      <Decorations />

      <AnimatePresence>
        {!opened && <Cover key="cover" onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {opened && (
        <div className="relative z-10">
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
          <MusicPlayer playing={opened} />
        </div>
      )}
    </main>
  );
}
