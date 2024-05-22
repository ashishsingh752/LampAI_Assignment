import React from "react";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Progress from "./components/Progress";
export default function page() {
  return (
    <div>
      <div className="flex justify-between ">
        {/* <Sidebar /> */}
        <Home />
        {/* <Progress/> */}
      </div>
    </div>
  );
}
