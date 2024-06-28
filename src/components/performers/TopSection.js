"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import './TopSection.css'
import { GoBell } from "react-icons/go";
import { TbMessageDots } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import PerformanceCard from './PerformanceCard';
import data from '../../../public/employees.json';
import Performers from './Performers';

const TopSection = () => {
  const [employees, setEmployees] = useState([]);
  const [topEmployees, setTopEmployees] = useState([]);
  const [bottomEmployees, setBottomEmployees] = useState([]);

  useEffect(() => {
    fetch('./employees.json')
      .then(response => response.json())
      .then(data => {
        // Sorted employees by score in descending order
        const sortedEmployees = data.sort((a, b) => b.score - a.score);
        
        // top 5 and bottom 5 employees
        const top = sortedEmployees.slice(0, 5);
        const bottom = sortedEmployees.slice(-5);
        
        setEmployees(sortedEmployees);
        setTopEmployees(top);
        setBottomEmployees(bottom);
      });
    }, [])
    // console.log(employees);
    // console.log(topEmployees);
    // console.log(bottomEmployees);
  

  return (
    <div className='w-full h-auto'>
      <div className='m-4 flex justify-between'>
        <h1 className='font-semibold	text-2xl TopSection-header'>Member Insights</h1>
        <div className='flex justify-around gap-3 items-center'>
          <button className='TopSection-button'>Add Task +</button>
          <button className='TopSection-icons TopSection-icons-bell'><GoBell /></button>
          <button className='TopSection-icons'><TbMessageDots />
          </button>
          <button className='flex flex-row justify-center items-center TopSection-icons'><Image src="https://randomuser.me/api/portraits/men/1.jpg" className='rounded-3xl' alt='User'width={35} height={35}/><IoIosArrowDown />
          </button>
        </div>
      </div>
      <div className='flex gap-10 sm:gap-4 flex-wrap justify-content-center'>
        <PerformanceCard />
        <Performers header="Top Performers" employees={topEmployees}/>
        <Performers header="Bottom Performers" employees={bottomEmployees}/>
      </div>
    </div>
  )
}

export default TopSection