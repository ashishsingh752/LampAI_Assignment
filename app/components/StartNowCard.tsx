// components/StartNowCard.tsx
import React from 'react';
import { FaCode, FaLaptopCode, FaClipboardCheck, FaGamepad } from 'react-icons/fa';

interface StartNowCardProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

const StartNowCard: React.FC<StartNowCardProps> = ({ icon, title, onClick }) => {
  return (
    <div className="flex items-center overflow-auto justify-between p-4 bg-purple-100 rounded-lg mb-4">
      <div className="flex items-center">
        <div className="p-2 hidden sm:block  bg-purple-500 text-white rounded-full">
          {icon}
        </div>
        <span className="ml-4 text-sm md:text-lg font-medium text-purple-900">{title}</span>
      </div>
      <button
        onClick={onClick}
        className="p-5  py-1 text-sm md:text-lg border border-purple-500 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition"
      >
        Start Now
      </button>
    </div>
  );
};

export default StartNowCard;
