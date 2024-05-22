import React from "react";

interface NavbarLogoProps {
  content: string;
  navbarLogo: React.ReactNode;
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ content, navbarLogo }) => {
  return (
    <div className="flex gap-2 rounded-lg bg-yellow-100 p-2">
      <div>{navbarLogo}</div>
      <div className="rounded-full bg-green-300 outline-offset-0 bg-inherit border-red-300 p-1">
        {content}
      </div>
    </div>
  );
};

export default NavbarLogo;
