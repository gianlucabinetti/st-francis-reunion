import React from 'react';

const eventDetails = [
  { title: 'Date', value: 'October 24, 2025' },
  { title: 'Time', value: '3:40 PM' },
  { title: 'Venue', value: 'St. Francis High School, La Libertad, Negros Oriental' },
  { title: 'RSVP Deadline', value: 'October 1, 2025' },
];

const EventDetails = () => {
  return (
    <section className="py-20 px-4 bg-light text-center" id="event-details">
      <h3 className="text-3xl md:text-4xl font-playwrite text-gray-800 mb-12">
        Event Highlights
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {eventDetails.map((detail, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            <h4 className="text-xl font-semibold text-primary mb-2">
              {detail.title}
            </h4>
            <p className="text-gray-600 font-inter">{detail.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventDetails;
