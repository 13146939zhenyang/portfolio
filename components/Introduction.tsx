'use client'
import React, { useEffect } from 'react'
import { AiOutlineHome } from 'react-icons/ai'

const Introduction = () => {
  return (
    <div className='text-white h-screen w-full'>
      {/* tag section */}
      <div className='w-[136px] h-[35px] border-[1px] border-[#565656] rounded-full text-white flex justify-center items-center gap-2 text-xs mb-[58px]'>
        <AiOutlineHome className="mb-[2px] text-sm" />
        <span className='uppercase font-[250]'>Introduce</span>
      </div>
      {/* title */}
      <div className='flex flex-col mb-[43px] text-[78px] font-[300] leading-none gap-4 tracking-normal'>
        <h1 className=''>Say Hi from <span className='text-[#58EA8B]'>Zhen</span></h1>
        <p>WebFlow designer</p>
        <p>& Fullstack developer</p>
      </div>
      {/* slogan */}
      <div className='w-full block'></div>

    </div>
  )
}

export default Introduction