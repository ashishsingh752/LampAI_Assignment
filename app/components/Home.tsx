"use client";
import React, { useState, MouseEvent } from "react";
import { FaSearch } from "react-icons/fa";
import StartNow from "./StartNow";
import AssessmentCard from "./AssessmentCard";

interface Assessment {
  id: number;
  title: string;
  image: string;
  bgColor: string;
}

const assessments: Assessment[] = [
  {
    id: 1,
    title: "Mechanical Engineering",
    image:
      "https://via.placeholder.com/150/0000FF/808080?text=Mechanical+Engineering",
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "Computer Engineering",
    image:
      "https://via.placeholder.com/150/FFA500/808080?text=Computer+Programming",
    bgColor: "bg-orange-500",
  },
  {
    id: 3,
    title: "Financial Analysis",
    image:
      "https://via.placeholder.com/150/FF0000/808080?text=Financial+Analysis",
    bgColor: "bg-red-500",
  },
  {
    id: 4,
    title: "Computer Engineering",
    image:
      "https://via.placeholder.com/150/FFA500/808080?text=Computer+Programming",
    bgColor: "bg-orange-500",
  },
  {
    id: 5,
    title: "Mechanical Engineering",
    image:
      "https://via.placeholder.com/150/0000FF/808080?text=Mechanical+Engineering",
    bgColor: "bg-blue-500",
  },
  {
    id: 6,
    title: "Financial Analysis",
    image:
      "https://via.placeholder.com/150/FF0000/808080?text=Financial+Analysis",
    bgColor: "bg-red-500",
  },
];

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

const ScrollableAssessments: React.FC = () => (
  <div className="flex space-x-2 pl-2 bg-white overflow-hidden overflow-x-scroll">
    {assessments.map((assessment) => (
      <div key={assessment.id} className="gap-4 mt-3">
        <AssessmentCard {...assessment} />
      </div>
    ))}
  </div>
);

const Home: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleMouseEnter = () => setSidebarOpen(true);

  const handleMouseLeave = (e: MouseEvent) => {
    const sidebarElement = document.getElementById("sidebar");
    if (sidebarElement && !sidebarElement.contains(e.relatedTarget as Node)) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex-1 p-6">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Let&apos;s Rock!</h1>
        <h2 className="text-xl font-semibold mb-6">
          Participate regularly to achieve perfection
        </h2>
        <div className="flex items-center bg-gray-100 rounded-sm p-2">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            className="flex-grow p-2 rounded-sm"
            placeholder="Search Problems"
          />
        </div>
      </div>

      <Section title="Exclusive Assessments">
        <ScrollableAssessments />
      </Section>

      <Section title="All Assessments">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">See ALL</h3>
        </div>
        <ScrollableAssessments />
      </Section>

      <Section title="Practice Problems">
        <StartNow />
      </Section>

      <Section title="Web Development Courses">
        <ScrollableAssessments />
      </Section>

      <Section title="Placement Series">
        <ScrollableAssessments />
      </Section>
    </div>
  );
};

export default Home;
