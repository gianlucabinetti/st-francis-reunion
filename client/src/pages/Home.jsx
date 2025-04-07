import React from 'react';
import Hero from '../components/Hero';
import EventDetails from '../components/EventDetails';
import CTASection from '../components/CTAsection';

const Home = () => {
  return (
    <main className="pt-40 md:pt-0 font-inter bg-light text-gray-800">
      {/* Hero Banner */}
      <Hero />

      {/* Mission Statement */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-playwrite text-gray-800 max-w-4xl mx-auto leading-snug">
          Reuniting Hearts, Reliving Memories, Rekindling Friendships!
        </h2>
      </section>

      {/* Event Highlights */}
      <EventDetails />

      {/* RSVP CTA */}
      <CTASection />
    </main>
  );
};

export default Home;
