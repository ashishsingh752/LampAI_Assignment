import React from "react";
import ProgressCard from "./ProgressCard"; // Adjust the import path according to your project structure

interface ProgressData {
  title: string;
  percentage: number;
  color: string;
  focusedArea: string;
  badges?: string[];
}

const Progress: React.FC = () => {
  const progressData: ProgressData[] = [
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
    <div className="flex justify-center gap-5 mt-12">
      {progressData.map((data, index) => (
        <ProgressCard key={index} {...data} />
      ))}
    </div>
  );
};

export default Progress;
