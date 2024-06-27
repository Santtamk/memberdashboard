"use client";

import { useContext, createContext, useState } from "react";
import { PiLessThanThin } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";
import { AiTwotoneAppstore } from "react-icons/ai";
import { TbVectorTriangle } from "react-icons/tb";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { LiaUserCheckSolid } from "react-icons/lia";
import { VscSettings } from "react-icons/vsc";
import { IoHelpBuoyOutline } from "react-icons/io5";
import "./SideNav.css";
import Image from "next/image";
import Cglogo from "../../../public/cglogo.png";

// Creating a context for the sidebar
const SidebarContext = createContext();

const SideNav = ({ children }) => {
  const [hidden, setHidden] = useState(false);

  return (
    <SidebarContext.Provider value={{ hidden }}>
      <aside className={`h-screen sidenav ${hidden ? "w-10" : "w-56"}`}>
        <nav className="h-full flex flex-col bg-white border-r shadow-sm rounded-3xl">
          <div className="sidenav-logo flex items-center justify-between p-4">
            <Image
              src={Cglogo}
              height={30}
              alt="clapgrow"
              className={`overflow-hidden transition-all ${hidden ? "w-0" : "w-105"}`}
            />
            <div className= {`shadow-2xl ${hidden ? "pl-3.5" : "sideNav-button-main"}`}>
              <button
                className="rounded-lg rounded-full border shadow-2xl sideNav-button"
                onClick={() => setHidden((curr) => !curr)}
              >
                {hidden ? <PiGreaterThan /> : <PiLessThanThin />}
              </button>
            </div>
          </div>
          <div className="flex-1 gap-5">
            {children}
          </div>
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
};

// Create a component for sidebar items
const SidebarItem = ({ icon, text }) => {
  const { hidden } = useContext(SidebarContext);

  return (
    <li
      className="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group SidebarItem-text"
    >
      {icon}
      <span className={`overflow-hidden transition-all ${hidden ? "w-0" : "w-52 ml-3"}`}>
        {text}
      </span>
      {hidden && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 `}
        >
          {text}
        </div>
      )}
    </li>
  );
};

// Implementing the SidebarItem components
const SideNavWithItems = () => (
  <SideNav>
    <ul>
      <SidebarItem icon={<AiTwotoneAppstore />} text="Tasks" />
      <SidebarItem icon={<TbVectorTriangle />} text="Process" />
      <SidebarItem icon={<FaMagnifyingGlassChart />} text="Smart Insights" />
      <SidebarItem icon={<LiaUserCheckSolid />} text="Attendance" />
      <SidebarItem icon={<VscSettings />} text="Settings" />
      <SidebarItem icon={<IoHelpBuoyOutline />} text="Help" />
    </ul>
  </SideNav>
);

export default SideNavWithItems;
