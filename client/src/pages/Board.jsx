import React from 'react';
import boardMembers from '../assets/boardMembers';
import MemberCard from '../components/MemberCard';

const Board = () => {
  return (
    <main className="mt-[96px] md:mt-20 py-20 px-4 bg-light text-center font-inter text-gray-800">
      <h1 className="text-3xl md:text-4xl font-playwrite mb-12 pt-10 md:pt-3">
        Meet The Board
      </h1>

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
    </main>
  );
};

export default Board;
