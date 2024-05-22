"use client";
import React, { useState, MouseEvent } from "react";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Progress from "./components/Progress";
import { FaChevronRight } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Calendar from "./components/StreamTracker";

export default function Page() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleMouseEnter = () => {
    setSidebarOpen(true);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const sidebarElement = document.getElementById("sidebar");
    const relatedTarget = e.relatedTarget as Node | null;

    if (
      sidebarElement &&
      relatedTarget &&
      !sidebarElement.contains(relatedTarget)
    ) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Display navbar  */}
      <Navbar />

      <div className="flex min-h-screen">
        <div
          className="fixed top-1/3 left-0 flex items-center px-3 h-16 z-50"
          onMouseEnter={handleMouseEnter}
        >
          <div className="text-2xl cursor-pointer">
            {!isSidebarOpen && <FaChevronRight />}
          </div>
        </div>

        <Sidebar
          isOpen={isSidebarOpen}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        <div
          className={`flex flex-col w-full pt-5 transition-all duration-300 ${
            isSidebarOpen ? "pl-64" : "pl-10"
          }`}
        >
          <div className="grid grid-cols-1 md:flex-wrap gap-5 lg:grid-cols-2 p-6">
            <Home />
            <div className="scroll flex pl-6 pr-6 flex-wrap justify-center lg:block lg:fixed lg:top-2 lg:right-14">
              <div>
                <Progress />
              </div>
              <div>
                <Calendar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
