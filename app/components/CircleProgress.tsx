import React from "react";

interface CircleProgressProps {
  title: string;
  percentage: number;
  color: string;
}

const CircleProgress: React.FC<CircleProgressProps> = ({ title, percentage, color }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center space-y-2">
      <svg className="w-20 h-20">
        <circle
          className="text-gray-200"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="40"
          cy="40"
        />
        <circle
          className={`${color} transition-all duration-300`}
          strokeWidth="4"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="40"
          cy="40"
          style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
        />
      </svg>
      <span className="text-lg font-medium">{title}</span>
      <span className="text-sm">{percentage}%</span>
    </div>
  );
};

export default CircleProgress;
