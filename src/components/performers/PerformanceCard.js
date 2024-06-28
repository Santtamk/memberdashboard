"use client";
import React from 'react'
import './TopSection.css';
import { CiCalendar } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import PieAnimation from './chart/Chart';


const PerformanceCard = () => {
  return (
      <div className='performanceCard w-80 h-83' >
        <div className='flex justify-between performanceCard-header'>
          <div className='text-base font-semibold'>Performance</div>
          <div className='flex performanceCard-sideHeader'>
              <div className='cursor-pointer performanceCard-sideHeader-icon'><CiCalendar /></div>
              <div className='cursor-pointer performanceCard-sideHeader-text'>This week Trend</div>
              <div className='cursor-pointer performanceCard-sideHeader-icon'>&gt;</div>
          </div>
        </div>
        <div className='flex justify-center	items-center m-4 performanceCard-mid py-3	gap-1'>
          <div className='border-2 rounded-full border-transparent	 performanceCard-mid-icon'>
            <GoArrowUpRight />
          </div>
          <div className='font-semibold text-xs performanceCard-mid-div'><span className='performanceCard-mid-span'>Up to 4%</span> from previous week</div>
        </div>
        <div className='mb-2'>
          <PieAnimation />
        </div>
      </div>
  )
}

export default PerformanceCard