import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-light fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
        {/* Logo */}
        <div className="w-[80px] h-[80px] md:w-[100px] md:h-[90px] mb-2 md:mb-0">
          <NavLink to="/" aria-label="Back to Home">
            <img
              src="/images/School_Logo.webp"
              alt="St. Francis La Libertad High School Logo"
              className="w-full h-full object-contain"
            />
          </NavLink>
        </div>

        {/* Navigation */}
        <nav className="mt-2 md:mt-0">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6 font-playwrite text-sm md:text-base">
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
                    `px-3 py-1.5 rounded-full transition duration-300 ${
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
        <div className="flex items-center gap-3 mt-4 md:mt-0 justify-center md:justify-end">
          <a
            href="tel:561-901-9987"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Call Us"
          >
            <img
              src="/images/phone_icon.webp"
              alt="Phone Icon"
              className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] transform translate-y-[2px]"
            />
          </a>
          <a
            href="https://www.facebook.com/SFSLLOfficial/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Page"
          >
            <img
              src="/images/facebook_logo.webp"
              alt="Facebook Logo"
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="mailto:meg2dud@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email Us"
          >
            <img
              src="/images/mail_logo.webp"
              alt="Mail Icon"
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
