'use client'
import React from 'react'
import { TfiLayoutAccordionList } from 'react-icons/tfi'

const Portfolio = () => {
  return (
    <div className='w-full h-screen text-white pt-[70px]' id='portfolio'>
      <div className='w-[136px] h-[35px] border-[1px] border-[#565656] rounded-full text-white flex justify-center items-center gap-2 text-xs mb-[58px]'>
        <TfiLayoutAccordionList className="mb-[2px] text-sm" />
        <span className='uppercase font-[250]'>Portfolio</span>
      </div>
      <div className='cursor-default'>
        <h3 className='text-5xl leading-[60px] font-light mb-8'>Featured<span className='text-[#58EA8B]'> Projects</span></h3>
      </div>
    </div>
  )
}

export default Portfolio