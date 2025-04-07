import React from 'react';
import MemberCard from './MemberCard';
import boardMembers from '../assets/boardMembers';

const BoardMembers = () => {
  return (
    <section id="board-members" className="py-24 px-4 bg-light text-center">
      <h2 className="text-3xl md:text-4xl font-playwrite text-gray-800 mb-12">
        Meet The Board
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {boardMembers.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
};

export default BoardMembers;
