import React from "react";

const CircleProgress = ({ title, percentage, color }) => {
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

const ProgressCard = ({ title, percentage, color, focusedArea, badges }) => {
  return (
    <div className="w-auto h-80 md:w-64 rounded-lg bg-white shadow-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <CircleProgress title={title} percentage={percentage} color={color} />
      <div className="flex mt-6">
        <span className="text-sm text-gray-600 font-semibold">
          Focused Area
        </span>
        <span className="text-sm text-gray-600 font-semibold">
          {focusedArea}
        </span>
      </div>
      {badges && (
        <div className="flex items-center mt-4">
          <span className="text-sm text-gray-600 font-semibold mr-2">
            Badges:
          </span>
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

const Progress = () => {
  const progressData = [
    {
      title: "Questions Solved",
      percentage: 63,
      color: "text-blue-500",
      focusedArea: "Machine Learning",
      badges: ["Bronze", "Silver"],
    },
    {
      title: "Assessment Taken",
      percentage: 67,
      color: "text-green-500",
      focusedArea: "Web Development",
      badges: ["Participation"],
    },
  ];

  return (
    <div className="flex   gap-5 mt-16">
      {progressData.map((data, index) => (
        <ProgressCard key={index} {...data} />
      ))}
    </div>
  );
};

export default Progress;
