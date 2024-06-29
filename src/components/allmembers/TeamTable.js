import React, { useState } from "react";
import { LiaSortSolid } from "react-icons/lia";
import Image from "next/image";
import { BsEnvelope } from "react-icons/bs";
import Paginations from "./paginations/Paginations";

const TeamTable = ({ employees }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  //Calculate the total number of pages
  const totalPages = Math.ceil(employees.length / itemsPerPage);

  //current items to display
  const currentItems = employees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="overflow-x-auto teamTable p-4">
      <div className="teamTable-start">
        <table className="w-full table-auto teamTable-start-1">
          <thead>
            <tr>
              <th className="px-4 py-2 text-xs font-normal">
                <div className="flex items-center justify-start">
                  <span>Name</span>
                  <LiaSortSolid className="text-gray-600" />
                </div>
              </th>
              <th className="px-4 py-2 text-xs font-normal">
                <div className="flex items-center justify-center">
                  <span>Task Over Due</span>
                  <LiaSortSolid className="text-gray-600" />
                </div>
              </th>
              <th className="px-4 py-2 text-xs font-normal">
                <div className="flex items-center justify-center">
                  <span>Weekly Score % </span>

                  <LiaSortSolid className="text-gray-600" />
                </div>
              </th>
              <th className="px-4 py-2 text-xs font-normal">
                <div className="flex items-center justify-center">
                  <span>Department </span>

                  <LiaSortSolid className="text-gray-600" />
                </div>
              </th>
              <th className="px-4 py-2 text-xs font-normal">
                <div className="flex items-center justify-center">
                  <span>Branch</span> <LiaSortSolid className="text-gray-600" />
                </div>
              </th>
              <th className="px-4 py-2 text-xs font-normal">
                <div className="flex items-center justify-center">
                  <span>Not Approved Count</span>
                  <LiaSortSolid className="text-gray-600" />
                </div>
              </th>
              <th className="px-4 py-2 text-xs font-normal">
                <div className="flex items-center justify-start">Actions</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((employee) => (
              <tr key={employee.id}>
                <td className=" px-4 py-2 border-start-1 flex items-center justify-start gap-4 p-1">
                  <input type="checkbox" id="employee" name="employeeName" />
                  <Image
                    src={employee.profilePicture}
                    className="rounded-3xl"
                    alt="User"
                    width={35}
                    height={35}
                  />
                  {employee.name}
                </td>
                <td className=" px-4 py-2 font-normal text-sm text-center">
                  {employee.taskOverdue}
                </td>
                <td className=" px-4 py-2 font-normal text-sm text-center">
                  {employee.weeklyScore}
                </td>
                <td className=" px-4 py-2 font-normal text-sm text-center">
                  {employee.department}
                </td>
                <td className=" px-4 py-2 font-normal text-sm text-center">
                  {employee.branch}
                </td>
                <td className=" px-4 py-2 font-normal text-sm text-center">
                  {employee.notApprovedCount}
                </td>
                <td className=" px-4 py-2 font-normal text-lg text-center">
                  <BsEnvelope />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Paginations
          handlePageChange={handlePageChange}
          totalPages={totalPages}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          employees={employees}
        />
      </div>
    </div>
  );
};

export default TeamTable;
