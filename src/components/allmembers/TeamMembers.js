"use client";

import React from "react";
import './TeamMembers.css';
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { TfiDownload } from "react-icons/tfi";
import { MdOutlineFilterList } from "react-icons/md";
import { BsArrowsAngleExpand } from "react-icons/bs";
import TeamTable from "./TeamTable";

const TeamMembers = ({ employees }) => {
  return (
    <div>

    <div className="flex flex-row pt-4 justify-between pr-7">
      <div className="flex font-semibold	text-base gap-1">
            <div className="flex align-center content-center items-center">Team Members</div>
            <div className="flex align-center content-center items-center"><FaAngleDown /></div>
      </div>
      <div className="flex gap-2">
            <div className="relative mt-1 teamMembers-search">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CiSearch className="text-gray-400" />
                </div>
                <input
                type="text"
                className="block pl-10 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                placeholder="Search"
                />
            </div>
            <div className="flex align-center content-center items-center teamMembers-heading-icons">
                <TfiDownload className="text-gray-600"/>
            </div>
            <div className="flex align-center content-center items-center teamMembers-heading-icons teamMembers-search">
                <MdOutlineFilterList className="text-gray-600"/>
            </div>
            <div className="flex align-center content-center items-center teamMembers-heading-icons teamMembers-search">
                <BsArrowsAngleExpand className="text-gray-600"/>
            </div>
      </div>
    </div>
    <div className="mt-4 mr-4 mb-4">
        <TeamTable employees={employees} />
    </div>
    </div>
  );
};

export default TeamMembers;
