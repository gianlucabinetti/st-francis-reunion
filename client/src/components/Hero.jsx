import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between min-h-[90vh] pt-36 md:pt-0 px-6 md:px-[5%] overflow-hidden bg-dark text-white"
    >
      {/* Text Content */}
      <div className="flex-1 z-10 px-4 md:px-8 text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-playwrite mb-6">
          St. Francis School
        </h1>
        <p className="text-lg md:text-xl font-inter leading-relaxed text-gray-300">
          Welcome, Class of 1997! It's time to relive the good old days,
          reconnect with classmates, and make new memories. Don't miss this
          once-in-a-lifetime chance to catch up and celebrate together!
        </p>
      </div>

      {/* Image */}
      <div className="flex-1 relative mt-10 md:mt-0 h-[300px] md:h-[90vh] w-full md:max-w-[880px] lg:max-w-[980px] xl:max-w-[1080px]">
        <img
          src="/images/School_image.webp"
          alt="St. Francis High School Reunion"
          loading="lazy"
          className="w-full h-full object-cover object-bottom brightness-90 rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default Hero;
