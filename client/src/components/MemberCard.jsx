import React from 'react';

const MemberCard = ({ name, role, image }) => {
  return (
    <figure className="bg-white shadow-md rounded-lg p-6 text-center transition-transform hover:-translate-y-1 hover:shadow-lg">
      <img
        src={image}
        alt={`Photo of ${name}`}
        className="w-[200px] h-[200px] object-cover rounded-full mx-auto mb-4 block"
      />
      <figcaption>
        <h3 className="text-lg font-playwrite mb-2 text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 font-inter">
          <strong>{role}</strong>
        </p>
      </figcaption>
    </figure>
  );
};

export default MemberCard;
