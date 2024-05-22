import React from "react";

const Button = ({ text, onClick, isActive }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md text-sm font-medium ${
        isActive
          ? "bg-blue-500 text-white"
          : "bg-white text-gray-500 hover:bg-gray-200"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const ButtonRow = ({ buttons }) => {
  return (
    <div className="flex space-x-2">
      {buttons.map((button, index) => (
        <Button key={index} {...button} />
      ))}
    </div>
  );
};

export default function HomePage() {
  const buttonData = [
    {
      text: "Coding Problems",
      onClick: () => console.log("Coding Problems clicked"),
    },
    { text: "Start Now", onClick: () => console.log("Start Now clicked") },
    {
      text: "100 Days DSA Sprint",
      onClick: () => console.log("100 Days DSA Sprint clicked"),
      isActive: true,
    },
    {
      text: "Coding Assessments",
      onClick: () => console.log("Coding Assessments clicked"),
    },
    {
      text: "Coding Trivia",
      onClick: () => console.log("Coding Trivia clicked"),
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <ButtonRow buttons={buttonData} />
    </div>
  );
}
