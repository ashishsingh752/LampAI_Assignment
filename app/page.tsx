'use client';
import React, { useState, MouseEvent } from 'react';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Progress from './components/Progress';
import { FaChevronRight } from 'react-icons/fa';

export default function Page() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleMouseEnter = () => {
    setSidebarOpen(true);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const sidebarElement = document.getElementById('sidebar');
    if (sidebarElement && !sidebarElement.contains(e.relatedTarget as Node)) {
      setSidebarOpen(false);
    }
  };

  return (
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
        className={`flex flex-col w-full pt-20 transition-all duration-300 ${
          isSidebarOpen ? 'pl-64' : 'pl-16'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6">
          <Home />
          <Progress />
        </div>
      </div>
    </div>
  );
}
