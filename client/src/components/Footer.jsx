import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 ">
      <p className="text-sm">
        &copy; 2025 Saint Francis Reunion. All rights reserved.
      </p>
      <address className="mt-2 not-italic text-sm space-x-4">
        <a href="tel:+639493540311" className="hover:underline">
          Call Us
        </a>
        <span>|</span>
        <a href="mailto:meg2dud@yahoo.com" className="hover:underline">
          Contact Us
        </a>
      </address>
    </footer>
  );
};

export default Footer;
