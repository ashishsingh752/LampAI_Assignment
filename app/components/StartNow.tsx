// pages/index.tsx
import React from 'react';
import StartNowCard from './StartNowCard';
import { FaCode, FaLaptopCode, FaClipboardCheck, FaGamepad } from 'react-icons/fa';

const StartNow: React.FC = () => {
  const handleStartNowClick = (title: string) => {
    alert(`Starting ${title}`);
  };

  return (
    <div className="h-auto w-full flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full m-4">
        <StartNowCard
          icon={<FaCode />}
          title="Coding Problems"
          onClick={() => handleStartNowClick('Coding Problems')}
        />
        <StartNowCard
          icon={<FaLaptopCode />}
          title="100 Days DSA Sprint"
          onClick={() => handleStartNowClick('100 Days DSA Sprint')}
        />
        <StartNowCard
          icon={<FaClipboardCheck />}
          title="Coding Assessments"
          onClick={() => handleStartNowClick('Coding Assessments')}
        />
        <StartNowCard
          icon={<FaGamepad />}
          title="Coding Trivia"
          onClick={() => handleStartNowClick('Coding Trivia')}
        />
      </div>
    </div>
  );
};

export default StartNow;
