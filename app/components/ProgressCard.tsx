import React from "react";
import CircleProgress from "./CircleProgress"; 

interface ProgressCardProps {
  title: string;
  percentage: number;
  color: string;
  focusedArea: string;
  badges?: string[];
}

const ProgressCard: React.FC<ProgressCardProps> = ({ title, percentage, color, focusedArea, badges }) => {
  return (
    <div className="w-auto h-80 md:w-96 rounded-lg bg-white shadow-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <CircleProgress title={title} percentage={percentage} color={color} />
      <div className="flex justify-between mt-6">
        <span className="text-sm text-gray-600 font-semibold">Focused Area</span>
        <span className="text-sm text-gray-600 font-semibold">{focusedArea}</span>
      </div>
      {badges && (
        <div className="flex  items-center mt-4">
          <span className="text-sm text-gray-600 font-semibold mr-2">Badges:</span>
          {badges.map((badge, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 rounded-full bg-blue-100 text-blue-500 font-semibold mr-2"
            >
              {badge}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgressCard;
