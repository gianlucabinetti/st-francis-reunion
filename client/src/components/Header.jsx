import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
<header className="bg-light fixed top-0 left-0 w-full z-50 shadow-md">
  <div className="max-w-screen-xl mx-auto px-4 py-1.5 md:py-3 flex flex-col md:flex-row items-center justify-between gap-1.5 md:gap-0">
    {/* Logo */}
    <div className="w-[56px] h-[56px] md:w-[100px] md:h-[90px] mb-1 md:mb-0">
      <NavLink to="/" aria-label="Back to Home">
        <img
          src="/images/School_Logo.webp"
          alt="St. Francis La Libertad High School Logo"
          className="w-full h-full object-contain"
        />
      </NavLink>
    </div>

    {/* Navigation */}
    <nav className="mt-1 md:mt-0">
      <ul className="flex flex-wrap justify-center gap-2.5 md:gap-6 font-playwrite text-xs md:text-base">
        {[
          { path: '/', label: 'Home' },
          { path: '/event', label: 'Event Details' },
          { path: '/rsvp', label: 'RSVP' },
          { path: '/board', label: 'Board Members' },
        ].map(({ path, label }) => (
          <li key={path}>
            <NavLink
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `px-2.5 py-1 rounded-full transition duration-300 ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-800 hover:bg-gray-200'
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>

    {/* Social Icons */}
    <div className="flex items-center gap-2 mt-2 md:mt-0 justify-center md:justify-end">
      <a href="tel:561-901-9987" aria-label="Call Us">
        <img
          src="/images/phone_icon.webp"
          alt="Phone"
          className="w-[20px] h-[20px] md:w-[35px] md:h-[35px] transform translate-y-0.5 md:translate-y-1"
        />
      </a>
      <a
        href="https://www.facebook.com/SFSLLOfficial/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <img
          src="/images/facebook_logo.webp"
          alt="Facebook"
          className="w-[26px] h-[26px] md:w-[45px] md:h-[45px] hover:scale-110 transition-transform"
        />
      </a>
      <a
        href="mailto:meg2dud@yahoo.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <img
          src="/images/mail_logo.webp"
          alt="Email"
          className="w-[26px] h-[26px] md:w-[45px] md:h-[45px] hover:scale-110 transition-transform"
        />
      </a>
    </div>
  </div>
</header>
  );
};

export default Header;
