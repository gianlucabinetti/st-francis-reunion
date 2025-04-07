import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="bg-gray-800 text-center text-white py-16" id="cta">
      <h2 className="text-3xl md:text-4xl font-playwrite mb-6">
        Want to RSVP?
      </h2>
      <Link
        to="/rsvp"
        className="inline-block px-6 py-3 bg-primary text-white text-lg font-inter rounded-md shadow-md hover:bg-white hover:text-primary transition duration-300"
        aria-label="Navigate to RSVP page"
      >
        Let&apos;s Reunite
      </Link>
    </section>
  );
};

export default CTASection;
