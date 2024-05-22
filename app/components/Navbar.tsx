import React from "react";
import { FaBell, FaBars, FaUser } from "react-icons/fa";

interface LogoProps {
  content: string;
  logo: React.ReactNode;
}

const Logo: React.FC<LogoProps> = ({ content, logo }) => {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-yellow-100 p-2">
      <div>{logo}</div>
      <div className="rounded-full bg-green-300 outline-offset-0 bg-inherit border-red-300 p-1">
        {content}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 h-16 shadow-md bg-white z-50">
        <div>Wize</div>
        <div className="flex gap-4 items-center">
          <Logo content="" logo={<FaBell />} />
          <Logo content="Account" logo={<FaUser />} />
          <Logo content="Menu" logo={<FaBars />} />
        </div>
      </div>
    </div>
  );
};

export default Home;
