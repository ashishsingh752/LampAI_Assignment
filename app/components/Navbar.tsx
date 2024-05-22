import { log } from "console";
import React from "react";
import { FaBell, FaBars, FaUser } from "react-icons/fa";

interface LogoProps {
  content: any;
  logo: React.ReactNode;
}

const Logo: React.FC<LogoProps> = ({ content, logo }) => {
  return (
    <div
      className={`flex items-center gap-2 rounded-full ${
        content && "outline outline-slate-300"
      } p-1.5`}
    >
      {content && (
        <div className="rounded-full bg-green-300 outline-offset-0 bg-inherit border-red-300 p-1">
          {content}
        </div>
      )}
      {logo && (
        <div
          className={`${
            content !== "Menu" && "rounded-full outline outline-indigo-200 p-1"
          }`}
        >
          {logo}
        </div>
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center px-8 h-16 shadow-md bg-white z-50">
        <div className="text-black text-3xl ">wiZe</div>
        <div className="flex gap-4 items-center">
          <Logo content={null} logo={<FaBell />} />
          <Logo content={"Account"} logo={<FaUser />} />
          <Logo content={"Menu"} logo={<FaBars />} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
