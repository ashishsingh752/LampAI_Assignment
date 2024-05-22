"use client";
import React, { useState } from "react";
import { FaSearch, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Sidebar from "./Sidebar"; // Adjust the path based on your folder structure

const assessments = [
  {
    title: "Mechanical Engineering ",
    image:
      "https://via.placeholder.com/150/0000FF/808080?text=Mechanical+Engineering",
    bgColor: "bg-blue-500",
  },
  {
    title: "Computer Engineering",
    image:
      "https://via.placeholder.com/150/FFA500/808080?text=Computer+Programming",
    bgColor: "bg-orange-500",
  },
  {
    title: "Financial Analysis",
    image:
      "https://via.placeholder.com/150/FF0000/808080?text=Financial+Analysis",
    bgColor: "bg-red-500",
  },
  {
    title: "Financial Analysis",
    image:
      "https://via.placeholder.com/150/FF0000/808080?text=Financial+Analysis",
    bgColor: "bg-red-500",
  },
  {
    title: "Financial Analysis",
    image:
      "https://via.placeholder.com/150/FF0000/808080?text=Financial+Analysis",
    bgColor: "bg-red-500",
  },
  {
    title: "Financial Analysis",
    image:
      "https://via.placeholder.com/150/FF0000/808080?text=Financial+Analysis",
    bgColor: "bg-red-500",
  },
  {
    title: "Financial Analysis",
    image:
      "https://via.placeholder.com/150/FF0000/808080?text=Financial+Analysis",
    bgColor: "bg-red-500",
  },
  {
    title: "Financial Analysis",
    image:
      "https://via.placeholder.com/150/FF0000/808080?text=Financial+Analysis",
    bgColor: "bg-red-500",
  },
  {
    title: "Financial Analysis",
    image:
      "https://via.placeholder.com/150/FF0000/808080?text=Financial+Analysis",
    bgColor: "bg-red-500",
  },
  {
    title: "Financial Analysis",
    image:
      "https://via.placeholder.com/150/FF0000/808080?text=Financial+Analysis",
    bgColor: "bg-red-500",
  },
  {
    title: "Financial Analysis",
    image:
      "https://via.placeholder.com/150/FF0000/808080?text=Financial+Analysis",
    bgColor: "bg-red-500",
  },
  // Add more assessments as needed
];

const AssessmentCard = ({ title, image, bgColor }) => (
  <div className={`w-44 rounded-lg shadow-lg overflow-hidden ${bgColor}`}>
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4 bg-white">
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    </div>
  </div>
);

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleMouseEnter = () => {
    setSidebarOpen(true);
  };
  const handleMouseLeave = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <div
        className={`fixed left-0 top-96 flex justify-between items-center  px-3 h-16 z-50`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-2xl cursor-pointer">
          {isSidebarOpen ? "" : <FaChevronRight />}
        </div>
      </div>

      <Sidebar
        isOpen={isSidebarOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      <div
        className={`pt-20 transition-all duration-300 ${
          isSidebarOpen ? "pl-64" : "pl-24"
        }`}
      >
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">Let's Rock!</h1>
          <h2 className="text-xl font-semibold mb-6">
            Participate regularly to achieve perfection
          </h2>
          <div className="flex items-center bg-gray-100 rounded-sm p-2">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              className="bg-gray-100 outline-none flex-grow p-2 rounded-sm"
              placeholder="Search Problems"
            />
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold gap-4 mt-2">
            Exclusive Assessments
          </h2>
          <div className="flex items-center space-x-4">
            <div className="space-x-4">
              <div className="flex  w-96 space-x-2 p-4 bg-white overflow-x-scroll ">
                {assessments.map((assessment, index) => (
                  <div className="gap-4 mt-3">
                    <AssessmentCard key={index} {...assessment} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
