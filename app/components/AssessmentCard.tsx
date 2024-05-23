import React from 'react';

type AssessmentCardProps = {
  title: string;
  image: string;
  bgColor: string;
};

const AssessmentCard: React.FC<AssessmentCardProps> = ({ title, image, bgColor }) => (
  <div className={`w-44 rounded-lg shadow-lg overflow-hidden ${bgColor}`}>
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4 bg-white">
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    </div>
  </div>
);

export default AssessmentCard;
