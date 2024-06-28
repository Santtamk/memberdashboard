"use client";

import Image from 'next/image'
import React from 'react'
import './TopSection.css'
import { GoBell } from "react-icons/go";
import { TbMessageDots } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import PerformanceCard from './PerformanceCard';
import data from '../../../employees.json';
import Performers from './Performers';

const TopSection = () => {



  return (
    <div className='w-full h-auto'>
      <div className='m-4 flex justify-between'>
        <h1 className='font-semibold	text-2xl'>Member Insights</h1>
        <div className='flex justify-around gap-3 items-center'>
          <button className='TopSection-button'>Add Task +</button>
          <button className='TopSection-icons'><GoBell /></button>
          <button className='TopSection-icons'><TbMessageDots />
          </button>
          <button className='flex flex-row justify-center items-center TopSection-icons'><Image src="https://randomuser.me/api/portraits/men/1.jpg" className='rounded-3xl' alt='User'width={35} height={35}/><IoIosArrowDown />
          </button>
        </div>
      </div>
      <PerformanceCard />
      <Performers />
    </div>
  )
}

export default TopSection