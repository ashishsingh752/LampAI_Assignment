import React from "react";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Progress from "./components/Progress";
export default function page() {
  return (
    <div>
      <div className="flex gap-14 ">
        {/* <Sidebar /> */}
        <Home />
        <Progress/>
      </div>
    </div>
  );
}
