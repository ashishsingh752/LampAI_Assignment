"use client";
import React, { useState, MouseEvent, useCallback } from "react";
import { FaChevronRight } from "react-icons/fa";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Progress from "./components/Progress";
import Navbar from "./components/Navbar";
import Calendar from "./components/StreamTracker";

export default function Page() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setSidebarOpen(true);
  }, []);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    const sidebarElement = document.getElementById("sidebar");
    const relatedTarget = e.relatedTarget as Node | null;

    if (
      sidebarElement &&
      relatedTarget &&
      !sidebarElement.contains(relatedTarget)
    ) {
      setSidebarOpen(false);
    }
  }, []);

  return (
    <>
      {/* Display navbar */}
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

        <main
          className={`flex flex-col w-full pt-5 transition-all duration-300 ${
            isSidebarOpen ? "absolute -z-50 md:pl-64" : ""
          }`}
        >
          <div className="grid grid-cols-1 md:flex-wrap gap-5 lg:grid-cols-2 p-6">
            <Home />
            <div className="scroll flex flex-wrap justify-center lg:block  lg:right-20">
              <div>
                <Progress />
              </div>
              <div className="mt-3">
                <Calendar />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
