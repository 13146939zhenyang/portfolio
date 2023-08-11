'use client'
import React from 'react'
import { Avatar } from '@/public'
import { BsEnvelope } from 'react-icons/bs'

const DeveloperCard = () => {
  return (
    <div className='text-white w-[350px] border-[1px] border-[#565656] rounded-3xl p-[30px] text-base'>
      {/* title section */}
      <div className='w-full flex flex-row justify-between items-center mb-[30px]'>
        <span className='text-3xl font-semibold'>Zhen</span>
        <p className='w-[140px] flex flex-col leading-none text-sm gap-2 text-right'>
          <span className='w-full'>Fullstack Developer</span>
          <span>& Web Developer</span>
        </p>
      </div>
      {/* avatar section */}
      <div className='w-[255px] h-[211px] bg-right bg-[length:360px_270px] grayscale mb-[46px] mx-auto rounded-3xl' style={{ backgroundImage: `url(${Avatar.src})` }}></div>
      {/* name/location section */}
      <div className='flex flex-col gap-1 mb-[30px] text-center text-2xl font-[300]'>
        <h2>zhen.yang.syd@gmail.com</h2>
        <h2>Based in Sydney, AUS</h2>
      </div>
      {/* privicy */}
      <div className='mb-[25px] p-0 text-sm text-[#999999] text-center'>© 2022 Zhen. All Rights Reserved</div>
      {/* social link */}
      <div className='w-full flex flex-row justify-center gap-1 mb-[30px]'></div>
      {/* Hire me button */}
      <div className='w-full flex flex-row justify-center gap-1'>
        <button className='bg-[#58EA8B] w-full rounded-full text-black flex items-center justify-center gap-2 py-3 border-[1px] hover:text-[#58EA8B] border-[#58EA8B] hover:bg-transparent transition-all duration-150 ease-in-out'><BsEnvelope />HIRE ME!</button>
      </div>
    </div>
  )
}

export default DeveloperCard