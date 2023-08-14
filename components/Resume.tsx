'use client'
import React from 'react'
import { BsBriefcase } from 'react-icons/bs'

const Resume = () => {
  return (
    <div className='w-full h-screen text-white pt-[70px]' id='resume'>
      <div className='w-[136px] h-[35px] border-[1px] border-[#565656] rounded-full text-white flex justify-center items-center gap-2 text-xs mb-[58px]'>
        <BsBriefcase className="mb-[2px] text-sm" />
        <span className='uppercase font-[250]'>Resume</span>
      </div>
      {/* title section */}
      <div className=''>
        <h3 className='text-5xl leading-[60px] font-light mb-8'>Education &<span className='text-[#58EA8B]'> Experience</span></h3>
      </div>
    </div>
  )
}

export default Resume