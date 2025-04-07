import React from 'react';

const Event = () => {
  return (
    <main className="pt-48 md:pt-40 px-4 pb-20 space-y-20 text-gray-800 bg-light font-inter">
      {/* Event Schedule */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-playwrite mb-8">
          Event Schedule
        </h1>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { time: '5:00 PM', activity: 'Welcome Reception & Check-in (with a photo wall!)' },
            { time: '6:00 PM', activity: 'Dinner & Speeches' },
            { time: '7:30 PM', activity: 'Memory Lane Slideshow' },
            { time: '8:00 PM', activity: 'Dance Party (DJ plays school-era hits)' },
            { time: '10:00 PM', activity: 'Closing Remarks & Farewell' },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-playwrite text-primary">{item.time}</h3>
              <p className="mt-2 text-gray-700">{item.activity}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Venue */}
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-playwrite mb-4">
          Venue Information
        </h2>
        <p className="mb-6 text-gray-700">
          Join us at St. Francis High School in La Libertad, Negros Oriental. Enjoy a
          nostalgic setting with space to mingle, dance, and relive the memories.
        </p>
        <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.9153316067263!2d123.19897267450837!3d9.982590373335103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33abf09ac0aaffff%3A0xb66de9b908f5cc4d!2sSt.%20Francis%20High%20School%20-%20La%20Libertad!5e1!3m2!1sen!2sus!4v1743395264171!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            title="Venue Location"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          />
        </div>
      </section>

      {/* Special Activities */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-playwrite text-center mb-4">
          Special Activities
        </h2>
        <ul className="space-y-3 text-gray-700 list-disc list-inside font-inter text-base sm:text-lg max-w-xl mx-auto">
          <li>
            <strong>Photo Booth:</strong> Snap silly pictures with props from your school days.
          </li>
          <li>
            <strong>Memory Board:</strong> Share your favorite school stories or leave a note for classmates.
          </li>
        </ul>
      </section>

      {/* Dress Code */}
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-playwrite mb-4">
          Dress Code
        </h2>
        <p className="text-gray-700">
          Come in semi-formal attire — feel free to add a nostalgic touch from your graduation era!
        </p>
      </section>
    </main>
  );
};

export default Event;
