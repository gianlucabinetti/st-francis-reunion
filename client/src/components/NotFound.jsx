import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-light px-6 py-20 text-gray-800 font-inter">
      <h1 className="text-6xl font-playwrite text-primary mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary text-white text-lg rounded-md hover:bg-accent transition font-inter"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
