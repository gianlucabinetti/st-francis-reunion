import React from 'react';
import RSVPForm from '../components/RSVPform';

const RSVP = () => {
  return (
    <main className="mt-[96px] md:mt-20 font-inter bg-light text-gray-800 min-h-screen">
      {/* Page Heading */}
      <section className="text-center pt-24 md:pt-20 pb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-playwrite">
          Registration Page
        </h2>
      </section>

      {/* Form Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto px-4 pb-20">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/School_image.webp"
            alt="St. Francis School"
            loading="lazy"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <RSVPForm />
        </div>
      </section>
    </main>
  );
};

export default RSVP;
