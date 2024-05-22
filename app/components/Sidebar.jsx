import React from "react";
import {
  FaHome,
  FaUser,
  FaBook,
  FaTrophy,
  FaLightbulb,
  FaProjectDiagram,
  FaBriefcase,
  FaHandshake,
  FaPen,
  FaUsers,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Logo({ content, icon }) {
  return (
    <div className="flex items-center gap-4 p-2 pl-10 bg-yellow-200 hover:bg-yellow-300 transition-colors duration-200">
      <div className="text-xl">{icon}</div>
      <div className="font-semibold">{content}</div>
    </div>
  );
}

export default function Sidebar({ isOpen, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={`fixed top-16  h-[calc(100vh-4rem)] bg-white shadow-lg rounded-lg transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ width: '16rem' }}
    >
      <div >
        <Logo/>
        <Logo  content="Home"  icon={<FaHome />} />
        <Logo content="Explore" icon={<FaUser />} />
        <Logo content="Learn" icon={<FaBook />} />
        <Logo content="Achieve" icon={<FaTrophy />} />
        <Logo content="Practice" icon={<FaLightbulb />} />
        <Logo content="Project" icon={<FaProjectDiagram />} />
        <Logo content="Career" icon={<FaBriefcase />} />
        <Logo content="Mentorship" icon={<FaHandshake />} />
        <Logo content="Blog" icon={<FaPen />} />
        <Logo content="Community" icon={<FaUsers />} />
      </div>
      <div className="mt-10 bg-slate-200 p-4 rounded-lg">
        <h3 className="text-center font-semibold">Connect With Us</h3>
        <div className="flex justify-around mt-4 text-2xl">
          <FaWhatsapp className="hover:text-green-600 transition-colors duration-200" />
          <FaFacebook className="hover:text-blue-600 transition-colors duration-200" />
          <FaInstagram className="hover:text-pink-500 transition-colors duration-200" />
          <FaTwitter className="hover:text-blue-400 transition-colors duration-200" />
        </div>
      </div>
    </div>
  );
}
