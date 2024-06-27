"use client";

import { useState } from "react";
import { PiLessThanThin } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";
import { AiTwotoneAppstore } from "react-icons/ai";
import { TbVectorTriangle } from "react-icons/tb";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { LiaUserCheckSolid } from "react-icons/lia";
import { VscSettings } from "react-icons/vsc";
import { IoHelpBuoyOutline } from "react-icons/io5";

const SideNav = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="sidenav bg-white">
      <div className="sidenav-logo flex items-center">
        <p>
          <span className="text-sky-50">c</span>
          <span>g</span>
        </p>
        <p>
          <span className="text-sky-400">clap</span>
          <span>grow</span>
        </p>
        <p>
          <PiLessThanThin />
        </p>
        {/* <PiGreaterThan /> */}
      </div>
      <div className="flex items-center sidenav-links">
        <span>
          <AiTwotoneAppstore />
        </span>
        <span>Tasks</span>
      </div>
      <div className="flex items-center sidenav-links ">
        <span>
          <TbVectorTriangle />
        </span>
        <span>Process</span>
        <span>&gt;</span>
      </div>
      <div className="flex items-center sidenav-links">
        <span>
          <FaMagnifyingGlassChart />
        </span>
        <span>Smart Insights</span>
        <span>&gt;</span>
      </div>
      <div className="flex items-center sidenav-links">
        <span>
          <LiaUserCheckSolid />
        </span>
        <span>Attendance</span>
      </div>
      <div className="flex items-center sidenav-links">
        <span>
          <VscSettings />
        </span>
        <span>Settings</span>
      </div>
      <div className="flex items-center sidenav-links">
        <span>
          <IoHelpBuoyOutline />
        </span>
        <span>Help</span>
      </div>
    </div>
  );
};

export default SideNav;
