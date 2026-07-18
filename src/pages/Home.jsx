import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import TrustedBy from '../components/TrustedBy';
import WhyChoose from '../components/WhyChoose';
import Timeline from '../components/Timeline';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Stats />
      <TrustedBy />
      <WhyChoose />
      <Timeline />
      <FinalCTA />
    </div>
  );
}
