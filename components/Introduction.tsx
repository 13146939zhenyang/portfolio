'use client'
import React, { useEffect } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsArrowDown } from 'react-icons/bs'
import { Project } from '@/public'

const Introduction = () => {
  return (
    <div className='text-white h-screen w-full  pt-[60px]'>
      {/* tag section */}
      <div className='w-[136px] h-[35px] border-[1px] border-[#565656] rounded-full text-white flex justify-center items-center gap-2 text-xs mb-[58px]'>
        <AiOutlineHome className="mb-[2px] text-sm" />
        <span className='uppercase font-[250]'>Introduce</span>
      </div>
      {/* title */}
      <div className='flex flex-col mb-[43px] text-[68px] font-[300] leading-none gap-4 tracking-normal'>
        <h1 className=''>Say Hi from <span className='text-[#58EA8B]'>Zhen</span></h1>
        <p>WebFlow designer</p>
        <p>& Fullstack developer</p>
      </div>
      {/* slogan */}
      <p className='w-full flex flex-col text-base text-[#999999] mb-[31px]'>
        <span>I design and code beautifully simple things and i love what i do.</span>
        <span>Just simple like that!</span>
      </p>
      {/* ads circle */}
      <div className='w-full flex justify-end pr-20'>
        <div className='flex justify-center items-center w-[175px] h-[175px] rounded-full relative border-[1px] border-[#575757] cursor-pointer hover:border-[#58EA8B] hover:text-[#58EA8B] transition-all duration-150 ease-in-out'>
          <img src={Project.src} alt="projcet" className='m-2 w-[141px] h-[148px] spinner absolute'/>
          <BsArrowDown className="text-3xl font-bold animate-bounce"/>
        </div>
      </div>
    </div>
  )
}

export default Introduction